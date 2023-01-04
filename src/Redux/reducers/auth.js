import {LOGIN, LOGOUT} from '../constants/actionTypes';
  const initState={
    user :{},
    isLoggedin :false
  }
 const auth =   (state = initState, action) => {
  const { type, payload } = action;

    switch (type) {
      case LOGIN:return {
        ...state,
        user : payload.user,
        isLoggedin :true
      };
      case LOGOUT :return {
        user :{},
        isLoggedin : false
      }
      // case REGISTER:
      //   return {
      //     ...state,
      //     inProgress: false,
      //     errors: action.error ? action.payload.errors : null
      //   };
      // case LOGIN_PAGE_UNLOADED:
      // case REGISTER_PAGE_UNLOADED:
      //   return {};
      // case ASYNC_START:
      //   if (action.subtype === LOGIN || action.subtype === REGISTER) {
      //     return { ...state, inProgress: true };
      //   }
      //   break;
      // case UPDATE_FIELD_AUTH:
      //   return { ...state, [action.key]: action.value };
      default:
        return state;
    }
  
   
  };

  export default auth ;
  