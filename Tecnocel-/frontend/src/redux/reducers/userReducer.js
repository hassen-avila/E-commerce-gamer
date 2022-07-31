const initialState={
    user:null,
    snackbar:{
        view:false,
        message:'',
        success:false
    }
 
}

const userReducer = (state=initialState,action)=>{
       
    switch (action.type) {
        case 'SIGN_UP':
               return{
                ...state,
                snackbar:action.payload 
               }
         case 'MESSAGE':
                return{
                    ...state,
                    snackbar:action.payload
                }   
         case 'SIGN_IN':
                return {
                    ...state,
                    snackbar:{view:action.payload.view,message:action.payload.message,success:action.payload.success},
                    user: action.payload.response 
                }
               
        default:
            return state;
            
    }
}

export default userReducer;