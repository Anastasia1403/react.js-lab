import React from 'react';
import { ReactComponent as HeartIcon } from './img/heart.svg';
import { ReactComponent as EditIcon } from './img/more-vertical.svg';
import { ReactComponent as ClockIcon } from './img/clock-three.svg';
import { ReactComponent as ResolutionIcon } from './img/clipboard-blank.svg';
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
} from './styled';
import Status from '../Status/Status';

const Card = function ({ listItem, content }) {
  return (
    <StyledCard>
      <CardHeader>
        <AvatarWrap>
          <img src={listItem.imageUrl} alt="avatar" />
        </AvatarWrap>
        <Headline>
          <h3>
            {listItem.firstName}
            {listItem.lastName}
          </h3>

          <Subtitle>
            {content === 'Appointments'
            && listItem.profession}

            {content === 'Patients'
              && <Status appointmentStatus={listItem.appointmentStatus} />}

          </Subtitle>
        </Headline>
        <EditButton>
          <EditIcon alt="edit" />
        </EditButton>
      </CardHeader>

      <Info>
        <InfoItem>
          <ClockIcon alt="clock" />
          <Time>{listItem.appointmentDate}</Time>
        </InfoItem>

        <InfoItem>
          {content === 'Appointments'
            && (
            <>
              <HeartIcon alt="heart" />
              <div>{listItem.appointmentReason}</div>
            </>
            )}

          {content === 'Patients' && (
            <>
              <ResolutionIcon alt="" />
              <div>{listItem.resolution}</div>
            </>
          )}
        </InfoItem>

      </Info>
    </StyledCard>
  );
};

export default Card;
