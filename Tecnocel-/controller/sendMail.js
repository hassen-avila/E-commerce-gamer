const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2



const sendVerification = async (email, string) => {

  const myOAuth2Client = new OAuth2(
    process.env.GOOGLE_CLIENTID,
    process.env.GOOGLE_CLIENTSECRET,
    "https://developers.google.com/oauthplayground"
  )

  myOAuth2Client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESHTOKEN })

  const accessToken = myOAuth2Client.getAccessToken()

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: 'tecnocelcba.oficial@gmail.com',
      type: "OAuth2",
      clientId: process.env.GOOGLE_CLIENTID,
      clientSecret: process.env.GOOGLE_CLIENTSECRET,
      refreshToken: process.env.GOOGLE_REFRESHTOKEN,
      accessToken: accessToken
    },
    tls: {
      rejectUnauthorized: false
    }
  })

  let mailOptions = {
    from: 'tecnocelcba.oficial@gmail.com',
    to: email,
    subject: 'verify account',
    html: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
         <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
         <head>
         <!--[if gte mso 9]>
         <xml>
           <o:OfficeDocumentSettings>
             <o:AllowPNG/>
             <o:PixelsPerInch>96</o:PixelsPerInch>
           </o:OfficeDocumentSettings>
         </xml>
         <![endif]-->
           <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <meta name="x-apple-disable-message-reformatting">
           <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
           <title></title>
           
             <style type="text/css">
               @media only screen and (min-width: 620px) {
           .u-row {
             width: 600px !important;
           }
           .u-row .u-col {
             vertical-align: top;
           }
         
           .u-row .u-col-100 {
             width: 600px !important;
           }
         
         }
         
         @media (max-width: 620px) {
           .u-row-container {
             max-width: 100% !important;
             padding-left: 0px !important;
             padding-right: 0px !important;
           }
           .u-row .u-col {
             min-width: 320px !important;
             max-width: 100% !important;
             display: block !important;
           }
           .u-row {
             width: calc(100% - 40px) !important;
           }
           .u-col {
             width: 100% !important;
           }
           .u-col > div {
             margin: 0 auto;
           }
         }
         body {
           margin: 0;
           padding: 0;
         }
         
         table,
         tr,
         td {
           vertical-align: top;
           border-collapse: collapse;
         }
         
         p {
           margin: 0;
         }
         
         .ie-container table,
         .mso-container table {
           table-layout: fixed;
         }
         
         * {
           line-height: inherit;
         }
         
         a[x-apple-data-detectors='true'] {
           color: inherit !important;
           text-decoration: none !important;
         }
         
         table, td { color: #000000; } a { color: #0000ee; text-decoration: underline; } @media (max-width: 480px) { #u_content_image_1 .v-src-width { width: auto !important; } #u_content_image_1 .v-src-max-width { max-width: 60% !important; } #u_content_heading_2 .v-font-size { font-size: 30px !important; } #u_content_text_1 .v-container-padding-padding { padding: 10px !important; } #u_content_button_1 .v-container-padding-padding { padding: 30px 10px 80px !important; } #u_content_button_1 .v-padding { padding: 10px 20px !important; } }
             </style>
           
           
         
         <!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css"><!--<![endif]-->
         
         </head>
         
         <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #000000;color: #000000">
           <!--[if IE]><div class="ie-container"><![endif]-->
           <!--[if mso]><div class="mso-container"><![endif]-->
           <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #000000;width:100%" cellpadding="0" cellspacing="0">
           <tbody>
           <tr style="vertical-align: top">
             <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
             <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #000000;"><![endif]-->
             
         
         <div class="u-row-container" style="padding: 0px;background-image: url('https://assets.unlayer.com/projects/91419/1658440389802-black-dark-abstract-green-technology-midnight-angle-light-lighting-line-darkness-1920x1080-px-computer-wallpaper-product-design-837822.jpg');background-repeat: no-repeat;background-position: center top;background-color: transparent">
           <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
             <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
               <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-image: url('https://assets.unlayer.com/projects/91419/1658440389802-black-dark-abstract-green-technology-midnight-angle-light-lighting-line-darkness-1920x1080-px-computer-wallpaper-product-design-837822.jpg');background-repeat: no-repeat;background-position: center top;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
               
         <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
         <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
           <div style="height: 100%;width: 100% !important;">
           <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
           
         <table id="u_content_image_1" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
           <tbody>
             <tr>
               <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:26px 10px 10px;font-family:arial,helvetica,sans-serif;" align="left">
                 
         <table width="100%" cellpadding="0" cellspacing="0" border="0">
           <tr>
             <td style="padding-right: 0px;padding-left: 0px;" align="center">
               
               <img align="center" border="0" src="https://assets.unlayer.com/projects/91419/1658440341385-0904f7ae-7a96-4410-95c7-7148bd57ce6f.png" alt="Logo" title="Logo" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 37%;max-width: 214.6px;" width="214.6" class="v-src-width v-src-max-width"/>
               
             </td>
           </tr>
         </table>
         
               </td>
             </tr>
           </tbody>
         </table>
         
         <table id="u_content_heading_2" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
           <tbody>
             <tr>
               <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
                 
           <h1 class="v-font-size" style="margin: 0px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: 'Montserrat',sans-serif; font-size: 40px;">
             <strong>Gracias por registrarte en Tecnocel Cba<br /></strong>
           </h1>
         
               </td>
             </tr>
           </tbody>
         </table>
         
         <table id="u_content_text_1" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
           <tbody>
             <tr>
               <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:60px 60px 10px;font-family:arial,helvetica,sans-serif;" align="left">
                 
           <div style="color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word;">
             <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 18px; line-height: 25.2px;"><span style="line-height: 25.2px; font-family: 'Montserrat', sans-serif; font-size: 18px;"><span style="line-height: 25.2px; font-size: 18px;">Estas a un paso de experimentar el mundo de la tecnologia que tenemos para vos, haz clic en el boton de abajo para continuar. Muchas gracias</span><br /></span></span></p>
           </div>
         
               </td>
             </tr>
           </tbody>
         </table>
         
         <table id="u_content_button_1" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
           <tbody>
             <tr>
               <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px 105px;font-family:arial,helvetica,sans-serif;" align="left">
                 
         <div align="center">
           <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;font-family:arial,helvetica,sans-serif;"><tr><td style="font-family:arial,helvetica,sans-serif;" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://unlayer.com" style="height:39px; v-text-anchor:middle; width:174px;" arcsize="77%" stroke="f" fillcolor="#13b105"><w:anchorlock/><center style="color:#FFFFFF;font-family:arial,helvetica,sans-serif;"><![endif]-->
             <a href="https://tecnocel.herokuapp.com/api/verify/${string}" target="_blank" style="box-sizing: border-box;display: inline-block;font-family:arial,helvetica,sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #13b105; border-radius: 30px;-webkit-border-radius: 30px; -moz-border-radius: 30px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;">
               <span class="v-padding" style="display:block;padding:10px 20px;line-height:120%;"><strong><span style="font-size: 16px; line-height: 19.2px;">Clic para verificar</span></strong></span>
             </a>
           <!--[if mso]></center></v:roundrect></td></tr></table><![endif]-->
         </div>
         
               </td>
             </tr>
           </tbody>
         </table>
         
           <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
           </div>
         </div>
         <!--[if (mso)|(IE)]></td><![endif]-->
               <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
             </div>
           </div>
         </div>
         
         
         
         <div class="u-row-container" style="padding: 0px 0px 14px;background-image: url('https://assets.unlayer.com/projects/91419/1658441023709-939304.jpg');background-repeat: no-repeat;background-position: center top;background-color: transparent">
           <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
             <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
               <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 0px 14px;background-image: url('https://assets.unlayer.com/projects/91419/1658441023709-939304.jpg');background-repeat: no-repeat;background-position: center top;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
               
         <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
         <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
           <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
           <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
           
         <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
           <tbody>
             <tr>
               <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:12px 10px 10px;font-family:arial,helvetica,sans-serif;" align="left">
                 
           <h1 class="v-font-size" style="margin: 0px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: 'Montserrat',sans-serif; font-size: 21px;">
             <strong>Seguinos y contactanos en:</strong>
           </h1>
         
               </td>
             </tr>
           </tbody>
         </table>
         
         <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
           <tbody>
             <tr>
               <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 10px;font-family:arial,helvetica,sans-serif;" align="left">
                 
         <div align="center">
           <div style="display: table; max-width:83px;">
           <!--[if (mso)|(IE)]><table width="83" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="center"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:83px;"><tr><![endif]-->
           
             
             <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 10px;" valign="top"><![endif]-->
             <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 10px">
               <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                 <a href="https://instagram.com/" title="Instagram" target="_blank">
                   <img src="https://cdn.tools.unlayer.com/social/icons/circle/instagram.png" alt="Instagram" title="Instagram" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                 </a>
               </td></tr>
             </tbody></table>
             <!--[if (mso)|(IE)]></td><![endif]-->
             
             <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 0px;" valign="top"><![endif]-->
             <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 0px">
               <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                 <a href="https://whatsapp.com/" title="WhatsApp" target="_blank">
                   <img src="https://cdn.tools.unlayer.com/social/icons/circle/whatsapp.png" alt="WhatsApp" title="WhatsApp" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                 </a>
               </td></tr>
             </tbody></table>
             <!--[if (mso)|(IE)]></td><![endif]-->
             
             
             <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
           </div>
         </div>
         
               </td>
             </tr>
           </tbody>
         </table>
         
         <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
           <tbody>
             <tr>
               <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
                 
           <div style="color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word;">
             <p style="font-size: 14px; line-height: 140%;"><strong><span style="text-decoration: underline; font-size: 14px; line-height: 19.6px;"><span style="font-family: 'Montserrat', sans-serif; font-size: 14px; line-height: 19.6px;">Tecnocel.com</span></span></strong><span style="font-size: 14px; line-height: 19.6px;"><span style="font-family: 'Montserrat', sans-serif; font-size: 14px; line-height: 19.6px;">, </span></span><span style="font-size: 14px; line-height: 19.6px;"><span style="font-family: 'Montserrat', sans-serif; font-size: 14px; line-height: 19.6px;">todos los derechos reservados</span></span><strong><span style="text-decoration: underline; font-size: 14px; line-height: 19.6px;"><br /></span></strong></p>
           </div>
         
               </td>
             </tr>
           </tbody>
         </table>
         
           <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
           </div>
         </div>
         <!--[if (mso)|(IE)]></td><![endif]-->
               <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
             </div>
           </div>
         </div>
         
         
             <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
             </td>
           </tr>
           </tbody>
           </table>
           <!--[if mso]></div><![endif]-->
           <!--[if IE]></div><![endif]-->
         </body>
         
         </html>`

  }

  await transporter.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error);
    }
    else {
      console.log(`check ${email} to confirm your account`)
    }
  })
}

module.exports = sendVerification