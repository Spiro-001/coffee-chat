import { csrfFetch } from "./csrf";

const RECEIVE_USER = "session/RECEIVE_USER";
const REMOVE_USER = "session/REMOVE_USER";

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  payload: user,
});

export const removeUser = () => ({
  type: REMOVE_USER,
});

export const loginUser = (user) => async (dispatch) => {
  const { credential, password } = user;
  let res = await csrfFetch("/api/session", {
    method: "POST",
    body: JSON.stringify({
      credential,
      password,
    }),
  });
  let data = await res.json();
  sessionStorage.setItem("currentUser", JSON.stringify(data.user));

  dispatch(receiveUser(data.user));
  return res;
};

export const logOutUser = () => async (dispatch) => {
  const response = await csrfFetch("/api/session", {
    method: "DELETE",
  });

  dispatch(removeUser());
  return response;
  
};

const initState = { user: null };

export const sessionReducer = (state = initState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case RECEIVE_USER:
      newState["user"] = action.payload;
      return newState;
    case REMOVE_USER:
      newState["user"] = null;
      return newState;
    default:
      return state;
  }
};