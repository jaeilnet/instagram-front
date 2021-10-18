import React from "react"
import styled from "styled-components"

export const Image = (props) => {
  const { profileImg } = props
  return <ImageBox profileImg={profileImg}></ImageBox>
}

Image.defaultProps = {
  profileImg:
    "https://mblogthumb-phinf.pstatic.net/20140417_132/hamusooke_13977266532423Gdtb_JPEG/blog-14.jpg?type=w2",
}

const ImageBox = styled.div`
  width: 100%;
  padding-top: 125%;
  background-image: url(${(props) => props.profileImg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`
