import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Text, Image } from "../elements"
import { useDispatch, useSelector } from "react-redux"
import { actionsCreators as postActions } from "../redux/modules/post"
import { CommentWrite } from "./CommentWrite"
import { actionsCreators as commentActions } from "../redux/modules/comment"

export const Post = (props) => {
  const dispatch = useDispatch()
  const post_list = useSelector((state) => state.post.post_list)

  useEffect(() => {
    dispatch(commentActions.get_comment_md())
    dispatch(postActions.getPostMD())
  }, [])

  return (
    <Container>
      {post_list.map((post, i) => {
        return (
          <PostContainer key={post._id}>
            <Grid>
              {/* <PostGrid> */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <Image profileImg src={props.user_Profile} />

                <Text bold>{post.postingAuthor}</Text>
              </div>
              {/* </PostGrid> */}
              <div style={{ margin: "0px 15px" }}>
                <button
                  style={{
                    padding: "10px",
                    border: "none",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                >
                  <Text bold> ... </Text>
                </button>
              </div>
            </Grid>

            <Image src={props.postingImgUrl}></Image>

            {/* 댓글작성 컴포넌트*/}
            <CommentWrite post={post} />
          </PostContainer>
        )
      })}
    </Container>
  )
}

Post.defaultProps = {
  user_Profile: "https://www.codingfactory.net/wp-content/uploads/abc.jpg",
  postingAuthor: "jaeil",
  postingImgUrl: "https://www.codingfactory.net/wp-content/uploads/abc.jpg",
  postingLike: "0",
  postingComment: "내용",
  postingComment_cnt: "5",
  postingDate: "1",
}

const Grid = styled.div`
  display: flex;
  background-color: #fff;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  border: none;
  align-items: center;
  justify-content: space-between;
`

const Container = styled.div`
  width: 100vw;
  background-color: #efefefdb;
  overflow-y: auto;
`

const PostContainer = styled.div`
  margin: 16px auto;
  border: 1px solid #0000001f;
  box-sizing: border-box;
  width: 80%;
  background-color: #ffffff;
  max-width: 350px;
`

const PostProfileImg = styled.div`
  width: 32px;
  height: 32px;
  background-image: url(${(props) => props.src});
  border-radius: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin: 8px;
`
