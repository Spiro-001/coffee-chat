import { csrfFetch } from "./csrf";
import { storeCSRFToken } from "./csrf";

const RECEIVE_USER = "session/RECEIVE_USER";
const REMOVE_USER = "session/REMOVE_USER";
const CREATE_USER = "session/CREATE_USER";

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  payload: user,
});

export const removeUser = () => ({
  type: REMOVE_USER,
});

const storeCurrentUser = user => {
  if (user) sessionStorage.setItem("currentUser", JSON.stringify(user));
  else sessionStorage.removeItem("currentUser");
}

export const restoreSession = () => async dispatch => {
  const response = await csrfFetch("/api/session");
  storeCSRFToken(response);
  const data = await response.json();
  storeCurrentUser(data.user);
  dispatch(receiveUser(data.user));
  return response;
};

export const loginUser = (user) => async (dispatch) => {
  const { email, password, phoneNumber } = user;
  debugger
  let res = await csrfFetch("/api/session", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
      phoneNumber
    }),
  });
  let data = await res.json();
  sessionStorage.setItem("currentUser", JSON.stringify(data.user));

  dispatch(receiveUser(data.user));
  return res;
};

export const signupUser = (user) => async (dispatch) => {
  const { email, password, phoneNumber } = user;
  debugger
  const response = await csrfFetch( '/api/users', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      phone_number: phoneNumber
    }),
  });
  const data = await response.json();
  storeCurrentUser(data.user)
  dispatch(receiveUser(data));
  return response;
}

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
    case CREATE_USER:
      newState["user"] = action.payload;
      return newState;
    default:
      return state;
  }
};