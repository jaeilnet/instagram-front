import React, { useEffect, useState } from "react"
import { AiOutlineHeart, AiOutlineSmile } from "react-icons/ai"
import { BsChat, BsBookmark } from "react-icons/bs"
import { RiSendPlaneLine } from "react-icons/ri"
import { useDispatch, useSelector } from "react-redux"
import { Text, Image } from "../elements"
import { actionsCreators as commentActions } from "../redux/modules/comment"

export const CommentWrite = (props) => {
  const {
    postingComment,
    postingDate,
    postingAuthor,
    postID,
    _id,
    // postingTag,
    // __v,
  } = props.post

  const dispatch = useDispatch()
  const [text, setText] = useState("")
  const [content, setContent] = useState(false)
  const [comment, setComment] = useState(false)
  const get_comment = useSelector((state) => state.comment.comment_list)

  const post_info = get_comment.filter((post) => post.postID === postID)

  console.log("post_info", post_info)
  // console.log("getcomment", get_comment)
  // console.log("props.post", props.post)

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "8px",
        }}
      >
        <div style={{ display: "flex" }}>
          <AiOutlineHeart
            style={{ padding: "8px", width: "26px", height: "26px" }}
          />
          <BsChat
            style={{
              padding: "8px",
              width: "24px",
              height: "24px",
              transform: "scaleX(-1)",
            }}
          />
          <RiSendPlaneLine
            style={{ padding: "8px", width: "26px", height: "26px" }}
          />
        </div>
        <div>
          <BsBookmark
            style={{ padding: "8px", width: "24px", height: "24px" }}
          />
        </div>
      </div>

      <div style={{ margin: "13px" }}>
        <Text>{props.postingLike} 좋아요</Text>
      </div>

      <div style={{ display: "flex", margin: "13px" }}>
        {/* {comment_cnt && comment_cnt.length > 8 ? comment_cnt.slice(0, 8), "...more" : ""} */}

        <Text bold>{postingAuthor}</Text>
        <button
          style={{
            border: "none",
            backgroundColor: "transparent",
            padding: "0 5px",
            cursor: "pointer",
          }}
          onClick={() => {
            setContent(!content)
          }}
        >
          <Text> ...more</Text>
        </button>
      </div>

      {/* 게시글 내용 보이기 */}
      {content ? (
        <div style={{ margin: "13px" }}>
          <Text>{postingComment}</Text>
        </div>
      ) : (
        ""
      )}

      {/* 같은 아이디끼리 묶어서 길이 */}
      <div style={{ margin: "7px" }}>
        <button
          style={{
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
          }}
          onClick={() => {
            setComment(!comment)
          }}
        >
          <Text>댓글 {post_info.length}개 모두보기</Text>
        </button>
      </div>

      <div style={{ margin: "13px" }}>
        <Text size={10}>{postingDate} 시간전</Text>
      </div>
      {comment ? (
        post_info.map((e) => {
          return (
            <div key={e._id} style={{ margin: "5px", display: "flex" }}>
              {/* <div style={{ display: "flex", alignItems: "center" }}> */}
              <Image profileImg src={props.user_Profile} size={20} />
              <div
                style={{
                  display: "flex",
                  textAlign: "center",
                  margin: "8px 0",
                }}
              >
                <div style={{ marginRight: "5px" }}>
                  <Text bold>{postingAuthor}</Text>
                </div>
                {/* </div> */}
                <Text>{e.replyComment}</Text>
              </div>
            </div>
          )
        })
      ) : (
        <>
          <div style={{ margin: "5px", display: "flex" }}>
            {/* <div style={{ display: "flex", alignItems: "center" }}> */}
            <Image profileImg src={props.user_Profile} size={20} />
            <div
              style={{
                display: "flex",
                textAlign: "center",
                margin: "8px 0",
              }}
            >
              <div style={{ marginRight: "5px" }}>
                <Text bold>{postingAuthor}</Text>
              </div>
              {/* </div> */}
              <Text>{post_info[0].replyComment}</Text>
            </div>
          </div>
        </>
      )}

      <div style={{ margin: "8px", display: "flex" }}>
        <AiOutlineSmile
          style={{
            width: "24px",
            height: "24px",
            padding: "5px 10px 5px 5px",
          }}
        />
        <input
          type="text"
          placeholder="댓글을 작성해주세요"
          value={text}
          style={{
            padding: "5px",
            boxSizing: "border-box",
            width: "100%",
            backgroundColor: "transparent",
            border: "none",
          }}
          onChange={(e) => {
            setText(e.target.value)
          }}
        />
        <div
          style={{
            minWidth: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            style={{
              border: "none",
              backgroundColor: "transparent",
              padding: "5px",
              cursor: "pointer",
            }}
            onClick={() => {
              dispatch(
                commentActions.add_comment_md({
                  replyComment: text,
                  replyAuthor: postingAuthor,
                  postID: _id,
                })
              )
              setText("")
            }}
          >
            <Text>게시</Text>
          </button>
        </div>
      </div>
    </>
  )
}

CommentWrite.defaultProps = {
  postingLike: "0",
  postingComment: "내용",
  postingComment_cnt: "0",
  postingDate: "0",
}
