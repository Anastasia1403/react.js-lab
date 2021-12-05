import React from 'react';
import { ReactComponent as HeartIcon } from './img/heart.svg';
import { ReactComponent as EditIcon } from './img/more-vertical.svg';
import { ReactComponent as ClockIcon } from './img/clock-three.svg';
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
  const { doctor, reason, visit_date: visitDate } = listItem;
  return (
    <StyledCard data-testid="card">
      <CardHeader>
        <AvatarWrap>
          <Avatar src={doctor.photo} alt="avatar" />
        </AvatarWrap>
        <Headline>
          <h3>
            {doctor.first_name}
            {' '}
            {doctor.last_name}
          </h3>

          <Subtitle>
            {doctor.specialization_name}
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
          <Time>{visitDate}</Time>
        </InfoItem>

        <InfoItem>
          <IconWrapper>
            <HeartIcon alt="heart" />
          </IconWrapper>
          <div>{reason}</div>

        </InfoItem>

      </Info>
    </StyledCard>
  );
};

export default AppointmentCard;
