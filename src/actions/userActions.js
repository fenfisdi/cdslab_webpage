import {
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_SAVE,
} from "./types/registerTypes";
import { registerUserService } from "../services/userServices";
export const useUserActions = (dispatch) => {
  /**
   * @param {*} userForm {username, name, lastname}
   */
  const registerUser = (userForm) => {
    dispatch({ type: REGISTER_LOADING });
    registerUserService(userForm)
      .then((response) => {
        dispatch({
          type: REGISTER_SAVE,
          payload: response.data,
        });
        return response;
      })
      .catch((error) => {
        dispatch({
          type: REGISTER_ERROR,
          payload: { error: true, errorData: error },
        });
      });

    /* ; */
  };

  return { registerUser };
};
