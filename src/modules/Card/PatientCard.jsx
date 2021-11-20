import React from 'react';
import { ReactComponent as EditIcon } from './img/more-vertical.svg';
import { ReactComponent as ClockIcon } from './img/clock-three.svg';
import { ReactComponent as ResolutionIcon } from './img/clipboard-blank.svg';
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
import Status from '../Status/Status';

const PatientCard = function ({ listItem }) {
  return (
    <StyledCard>
      <CardHeader>
        <AvatarWrap>
          <img src={listItem.imageUrl} alt="avatar" />
        </AvatarWrap>
        <Headline>
          <h3>
            {`${listItem.firstName} ${listItem.lastName}`}
          </h3>

          <Subtitle>
            <Status appointmentStatus={listItem.appointmentStatus} />

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
            <ResolutionIcon alt="resolution" />
          </IconWrapper>
          <div>{listItem.resolution}</div>

        </InfoItem>

      </Info>
    </StyledCard>
  );
};

export default PatientCard;
