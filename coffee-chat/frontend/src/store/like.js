import { csrfFetch } from "./csrf";

const RECEIVE_LIKE = "like/RECEIVE_LIKE";
const SET_LIKE = "like/SET_LIKE";
const REMOVE_LIKE = "like/REMOVE_LIKE"

export const receiveLike = (likeId) => ({
  type: RECEIVE_LIKE,
  payload: likeId,
});

export const removeLike = (likeId) => ({
  type: RECEIVE_LIKE,
  payload: likeId,
});

export const setLike = (like) => ({
  type: SET_LIKE,
  payload: like,
});

export const setStateLike = (ueId) => async (dispatch) => {
  const { userId, emoteId, likableId, likableType } = ueId;
  const response = await csrfFetch( `/api/likes/${likableId}`, {
    method: 'POST',
    body: JSON.stringify({
      user_id: userId,
      emote_id: emoteId,
      likable_type: likableType,
      likable_id: likableId
    }),
  });
  const data = await response.json();
  dispatch(setLike(data));
  return response;
}

export const createLike = (ueId) => async (dispatch) => {
  const { userId, emoteId, likableId, likableType } = ueId;
  const response = await csrfFetch( '/api/likes', {
    method: 'POST',
    body: JSON.stringify({
      user_id: userId,
      emote_id: emoteId,
      likable_type: likableType,
      likable_id: likableId
    }),
  });
  const data = await response.json();
  dispatch(receiveLike(data));
  return response;
}

export const destroyLike = (ueId) => async (dispatch) => {
  const { userId, emoteId, likableId, likableType } = ueId;
  const response = await csrfFetch( `/api/likes/${likableId}`, {
    method: 'DELETE',
    body: JSON.stringify({
      user_id: userId,
      emote_id: emoteId,
      likable_type: likableType,
      likable_id: likableId
    }),
  });
  const data = await response.json();
  dispatch(removeLike(data));
  return response;
}

export const updateLike = (ueId) => async (dispatch) => {
  const { userId, emoteId, likableId, likableType } = ueId;
  const response = await csrfFetch( `/api/likes/${likableId}`, {
    method: 'PATCH',
    body: JSON.stringify({
      user_id: userId,
      emote_id: emoteId,
      likable_type: likableType,
      likable_id: likableId
    }),
  });
  const data = await response.json();
  dispatch(receiveLike(data));
  return response;
}

const initState = { like: null };

export const likeReducer = (state = initState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case SET_LIKE:
      newState["like"] = action.payload
      return newState;
    case REMOVE_LIKE:
      newState["like"] = null;
      return newState;
    case RECEIVE_LIKE:
      newState["like"] = action.payload;
      return newState;
    default:
      return state;
  }
};