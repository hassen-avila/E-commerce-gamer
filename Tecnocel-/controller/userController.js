const User = require('../model/user');
const bcryptjs = require('bcryptjs');
var crypto = require('crypto');
const sendEmail=require('./sendMail');
const sendFactura=require('./sendFactura');
const jwt=require('jsonwebtoken');

const userController = {

   signUpUsers: async (req, res) => {

      let { name, email, password, from } = req.body.userData


      try {

         const user = await User.findOne({ email: email })
         const verification = false;
         const uniqueString = crypto.randomBytes(15).toString('hex')

         if (user) {

            if (user.from.indexOf(from) !== -1) {
               res.json({ success: false, from: 'signup', message: 'You have already registered please log in' })
            }
            else {
               const passwordHash = bcryptjs.hashSync(password, 10)
               user.from.push(from)
               user.password.push(passwordHash)
               user.verification = true
               await user.save()
               res.json({ success: true, from: 'signup', message: `We add ${from} to your means to sign in` })
            }
         }
         else {

            const passwordHash = bcryptjs.hashSync(password, 10);

            const newUser = await new User({
               name: name,
               email: email,
               password: [passwordHash],
               from: [from],
               uniqueString: uniqueString,
               verification: verification

            })
            if (from !== 'signup') {
               newUser.verification = true;
               await newUser.save()
               res.json({ success: true, from: 'signup', message: `Congratulations you have created your user with  ${from}` })
            }
            else {
               await newUser.save()
               await sendEmail(email, uniqueString)
               res.json({ success: true, from: 'signup', message: 'We have sent you an email to validate it, please check your email box' })
            }
         }
      }

      catch (err) {
         console.log(err)
         res.json({ success: false, message: 'Something went wrong try again in a few minutes' })
      }

   },

   signInUsers: async (req, res) => {

      const { email, password, from } = req.body.logedUser


      try {
         const user = await User.findOne({ email: email })
         /* const indexPass= user.from.indexOf(from) */

         if (!user) {
            res.json({ success: false, from: 'no from', message: `${email} has no account, please SIGN UP!` })
         }
         else {
            if (from !== "form-signup") {
               let matchPsw = user.password.filter(pass => bcryptjs.compareSync(password, pass));

               if (matchPsw.length > 0) {

                  const userData = {
                     id: user._id,
                     name: user.name,
                     role: user.role,
                     email: user.email,
                     from: user.from
                  }

                  const token = jwt.sign({ ...userData }, process.env.SECRET_KEY, { expiresIn: 60 * 60 * 24 }) // un Dia

                  res.json({
                     success: true,
                     from: from,
                     response: { token, userData },
                     message: `Welcome again ${userData.name} `
                  })

               }
               else {
                  res.json({ success: false, from: from, message: `The password or email made with your ${from} register is incorrect` })
               }
            }
            else {

               if (user.verification) {

                  let matchPsw = user.password.filter(pass => bcryptjs.compareSync(password, pass));

                  if (matchPsw.length > 0) {

                     const userData = {
                        id: user._id,
                        name: user.name,
                        role: user.role,
                        email: user.email,
                        from: user.from
                     }

                     const token = jwt.sign({ ...userData }, process.env.SECRET_KEY, { expiresIn: 60 * 60 * 24 }) // un Dia

                     res.json({
                        success: true,
                        from: from,
                        response: { token, userData },
                        message: `Welcome again ${userData.name}`
                     })

                  }
                  else {
                     res.json({
                        success: false,
                        from: from,
                        message: 'Password or username incorrect'
                     })
                  }

               }
               else {

                  res.json({
                     success: false,
                     from: from,
                     message: "We send you a verification email to your mailbox, please verify it to be able to enter"
                  })

               }

            }
         }


      }
      catch (err) { res.json({ success: false, message: 'Something went wrong try again in a few minutes' }) }
   },

   verifyMail: async (req, res) => {
      const { string } = req.params
      const user = await User.findOne({ uniqueString: string })

      if (user) {
         user.verification = true
         await user.save()
         res.redirect(`http://localhost:3000/`)
      }
      else {
         res.json({ success: false, message: 'Email has not been confirmed yet!' })
      }
   },
   signOutUser: async (req, res) => {
      console.log('signOut')
      console.log(req.body)
      const email = req.body.mail
      const user = await User.findOne({email})
      await user.save()
      res.json({
          success: true,
          message: email+' sign out!'})
  },
   verificarToken: async (req, res) => {

      if (req.user) {

         const userData = {
            id: req.user.id,
            name: req.user.name,
            email: req.user.email,
            role: req.role,
            from: req.user.from
         }
         res.json({ success: true, message: `Welcome again ${req.user.name}`, from: 'Token', response: { userData } })

      }

      else {
         res.json({ success: false, message: 'Please make your signIn again' })
      }
   },

   traerUsuarios: async (req, res) => {
      let users;
      let error = null;
      try {
         users = await User.find();
      }
      catch (err) { error = err }

      res.json({
         response: error ? 'error' : { users },
         success: error ? false : true,
         error: error
      })
   },
         
               enviarFactura: async (req,res)=>{
               let email=req.params.email
               let {carrito}=req.body
               console.log(carrito)
               let error=null;
               try{
                   sendFactura(email,carrito)
               }
               catch(err){error=err}

               res.json({
                  response:error? 'error': "Su resumen fue envidado con exito",
                  success:error?false :true,
                  error:error
                 })

           }
           
}

module.exports = userController;