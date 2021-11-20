import React from 'react';
import { ReactComponent as HeartIcon } from './img/heart.svg';
import { ReactComponent as EditIcon } from './img/more-vertical.svg';
import { ReactComponent as ClockIcon } from './img/clock-three.svg';
// import { ReactComponent as ResolutionIcon } from './img/clipboard-blank.svg';
import {
  AvatarWrap,
  CardHeader,
  EditButton,
  Headline,
  IconWrapper,
  Info,
  InfoItem,
  StyledCard,
  Subtitle,
  Time,
} from './styled';

const AppointmentCard = function ({ listItem, content }) {
  return (
    <StyledCard>
      <CardHeader>
        <AvatarWrap>
          <img src={listItem.imageUrl} alt="avatar" />
        </AvatarWrap>
        <Headline>
          <h3>
            {listItem.doctor}
          </h3>

          <Subtitle>
            {content === 'Appointments'
            && listItem.occupation}
          </Subtitle>
        </Headline>
        <EditButton>
          <EditIcon alt="edit" />
        </EditButton>
      </CardHeader>

      <Info>
        <InfoItem>
          <IconWrapper>
            <ClockIcon alt="clock" />
          </IconWrapper>
          <Time>{listItem.date}</Time>
        </InfoItem>

        <InfoItem>
          <IconWrapper>
            <HeartIcon alt="heart" />
          </IconWrapper>
          <div>{listItem.reason}</div>

        </InfoItem>

      </Info>
    </StyledCard>
  );
};

export default AppointmentCard;
