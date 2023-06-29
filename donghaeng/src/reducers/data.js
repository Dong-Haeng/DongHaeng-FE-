export const LOGIN = "ISLOGIN/LOGIN";
export const LOGOUT = "ISLOGIN/LOGOUT";

export const SETID = "USERID/SETID";
export const DELID= "USERID/DELID";

export const SETM = "ISMANGER/SETM";
export const DELM = "ISMANGER/DELM";

const initalState ={
    isLogin : "LogOut",
    userID : -1,
    isManger : false,
};

export const setlogin = (isLogin) =>({
    type: LOGIN, isLogin
})

export const setlogout =  (isLogin) =>({
    type:LOGOUT, isLogin
})

export const setUserID = (userID) =>{
    return{
        type:SETID,
        payload:userID
    }
}

export const delUserID = (userID) =>({
    type:DELID, userID
})

export const setManger = (isManger) =>({
    type:SETM, isManger
})

export const DelManger = (isManger)=>({
    type:DELM, isManger
})




export const data = (state=initalState, action)=>{
    switch(action.type){
        case LOGIN:
            return{
                ...state,
                isLogin : "Log"
            }
        case LOGOUT:
            return{
                ...state,
                isLogin : "LogOut"
            }
        case SETID:
            return{
                ...state,
                userID : action.payload
            }
        case DELID:
            return{
                ...state,
                userID: -1
            }
        case SETM:
            return{
                ...state,
                isManger:true
            }
        case DELM:
            return{
                ...state,
                isManger:false
            }
        default:
            return state;
    }
};