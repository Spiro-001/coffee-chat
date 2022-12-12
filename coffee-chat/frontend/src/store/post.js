import { csrfFetch } from "./csrf";
import { storeCSRFToken } from "./csrf";

const RECEIVE_POST = "post/RECEIVE_USER";

export const receivePost = (post) => ({
  type: RECEIVE_POST,
  payload: post,
});

// export const receivePosts = (post) => {
//   const { user_id, body, imageUrl, batchSize, start, finish } = post;
//   const response = await csrfFetch( '/api/users', {
//     method: 'GET',
//     body: JSON.stringify({
//       user_id,
//       body,
//       image_url: imageUrl,
//       batch_size: batchSize,
//       start,
//       finish
//     }),
//   });
//   const data = await response.json();
//   dispatch(receivePost(data));
//   return response;
// }

export const createPost = (post) => async (dispatch) => {
  const { user_id, body, imageUrl } = post;
  const response = await csrfFetch( '/api/users', {
    method: 'POST',
    body: JSON.stringify({
      user_id,
      body,
      image_url: imageUrl
    }),
  });
  const data = await response.json();
  dispatch(receivePost(data));
  return response;
}

const initState = { posts: null };

export const postReducer = (state = initState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case RECEIVE_POST:
      newState["posts"] = action.payload;
      return newState;
    default:
      return state;
  }
};