import React from 'react';
import { ReactComponent as HeartIcon } from './img/heart.svg';
import { ReactComponent as EditIcon } from './img/more-vertical.svg';
import { ReactComponent as ClockIcon } from './img/clock-three.svg';
// import { ReactComponent as ResolutionIcon } from './img/clipboard-blank.svg';
import {
  Avatar,
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

const AppointmentCard = function ({ listItem }) {
  return (
    <StyledCard>
      <CardHeader>
        <AvatarWrap>
          <Avatar src={listItem.doctor.photo} alt="avatar" />
        </AvatarWrap>
        <Headline>
          <h3>
            {listItem.doctor.first_name}
            {' '}
            {listItem.doctor.last_name}
          </h3>

          <Subtitle>
            {listItem.doctor.specialization_name}
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
          <Time>{listItem.visit_date}</Time>
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
