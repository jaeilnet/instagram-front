import { createAction, handleActions } from "redux-actions"
import { produce } from "immer"
import axios from "axios"

const GET_POST = "GET_POST"

const getPost = createAction(GET_POST, (post_list) => ({ post_list }))

const initialState = {
  post_list: [],
}

const apiRef = axios.create({
  baseURL: "http://13.209.72.212",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
  },
})

const getPostMD = () => {
  return function (dispatch, getState, { history }) {
    apiRef
      .get("/post/postList")
      .then((res) => {
        dispatch(getPost(res.data))
      })
      .catch((err) => console.log("get 포스트 에러", err))
  }
}

export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.post_list = action.payload.post_list
      }),
  },
  initialState
)

const actionsCreators = {
  getPostMD,
}

export { actionsCreators }
