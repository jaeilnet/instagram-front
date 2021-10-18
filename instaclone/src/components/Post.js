import React from "react"
import styled from "styled-components"
import { Text, Image } from "../elements"
import { AiOutlineHeart, AiOutlineSmile } from "react-icons/ai"
import { BsChat, BsBookmark } from "react-icons/bs"
import { RiSendPlaneLine } from "react-icons/ri"

export const Post = (props) => {
  return (
    <>
      <Container>
        <PostContainer>
          <Grid>
            {/* <PostGrid> */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <PostProfileImg src={props.user_Profile} />

              <Text bold>{props.user_id}</Text>
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

          <Image></Image>

          {/* 사진 바로 밑 */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "8px 8px",
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
            <Text>{props.like_cnt} 좋아요</Text>
          </div>

          <div style={{ display: "flex", margin: "13px" }}>
            <Text bold>{props.comment_contents} </Text>
            <Text> ...more</Text>
          </div>

          <div style={{ margin: "13px" }}>
            <Text>댓글 {props.comment_cnt}개 모두보기</Text>
          </div>

          <div style={{ margin: "13px" }}>
            <Text size={10}>{props.comment_date} 시간전</Text>
          </div>

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
              style={{
                padding: "5px",
                boxSizing: "border-box",
                width: "100%",
                backgroundColor: "transparent",
                border: "none",
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
              >
                <Text>게시</Text>
              </button>
            </div>
          </div>
        </PostContainer>
      </Container>
    </>
  )
}

Post.defaultProps = {
  user_Profile:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCdSE06g-wWMbwV39-LgNCI23dcrefSkhosA&usqp=CAU",
  user_id: "jaeil",
  like_cnt: "0",
  comment_contents: "내용",
  comment_cnt: "5",
  comment_date: "1",
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
