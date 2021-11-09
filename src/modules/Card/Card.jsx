import React from "react";
import edit from "./img/more-vertical.svg";
import clock from "./img/clock-three.svg";
import resolution from "./img/clipboard-blank.svg";
import heart from "./img/heart.svg";

import {
  AvatarWrap,
  CardHeader,
  EditButton,
  Headline,
  Info,
  InfoItem,
  StyledCard,
  Subtitle,
  Time,
} from "./CardStyles";
import Status from "../Status/Status";

function Card(props) {
 
   return (
    <StyledCard>
      <CardHeader>
        <AvatarWrap>
          <img src={props.listItem.imageUrl} alt="avatar" />
        </AvatarWrap>
        <Headline>
          <h3>
            {props.listItem.firstName} {props.listItem.lastName}
          </h3>

          <Subtitle>
            {props.content === "appointments"
              ? props.listItem.profession
              : null}

            {props.content === "patients" ? (
              <Status appointmentStatus={props.listItem.appointmentStatus}/>             
            ) : null}

          </Subtitle>
        </Headline>
        <EditButton>
          <img src={edit} alt="" />
        </EditButton>
      </CardHeader>

      <Info>
        <InfoItem>
          <img src={clock} alt="clock" />
          <Time>{props.listItem.appointmentDate}</Time>
        </InfoItem>

        <InfoItem>
          {props.content === "appointments" ? (
            <>
              <img src={heart} alt="heart" />
              <div>{props.listItem.appointmentReason}</div>
            </>
          ) : null}

          {props.content === "patients" ? (
            <>
              <img src={resolution} alt="resolution" />
              <div>{props.listItem.resolution}</div>{" "}
            </>
          ) : null}
        </InfoItem>

      </Info>
    </StyledCard>
  );
}

export default Card;
