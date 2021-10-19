import React from "react";
import { Grid, Text, Image } from "../elements";
import Card from "../components/Card";

const Notification = (props) => {
  let noti = [
    { user_name: "Jylee", post_id: "post1", image_url: "" },
    { user_name: "Jylee", post_id: "post2", image_url: "" },
    { user_name: "Jylee", post_id: "post3", image_url: "" },
    { user_name: "Jylee", post_id: "post4", image_url: "" },
    { user_name: "Jylee", post_id: "post5", image_url: "" },
    { user_name: "Jylee", post_id: "post6", image_url: "" },
  ];

  return (
    <React.Fragment>
      <Grid padding="16px" bg="#EFF6FF">
        {noti.map((n) => {
          return (
            <Grid padding="16px" is_flex bg="#ffffff" margin="8px 0px">
              <Grid width="auto" margin="0px 8px 0px 0px">
                <Image size={85} shape="square" />
              </Grid>
              <Grid>
                <Text>
                  <b>{n.user_name}</b>님이 게시글에 댓글을 남겼습니다 :) !
                </Text>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
};
export default Notification;
