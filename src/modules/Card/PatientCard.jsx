import React from 'react';
import { ReactComponent as EditIcon } from './img/more-vertical.svg';
import { ReactComponent as ClockIcon } from './img/clock-three.svg';
import { ReactComponent as ResolutionIcon } from './img/clipboard-blank.svg';
import {
  AvatarWrap,
  Avatar,
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
          <Avatar src={listItem.patient.photo} alt="avatar" />
        </AvatarWrap>
        <Headline>
          <h3>
            {`${listItem.patient.first_name} ${listItem.patient.last_name}`}
          </h3>

          <Subtitle>
            <Status status={listItem.status} />

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
            <ResolutionIcon alt="resolution" />
          </IconWrapper>
          <div>{listItem.resolution}</div>

        </InfoItem>

      </Info>
    </StyledCard>
  );
};

export default PatientCard;
