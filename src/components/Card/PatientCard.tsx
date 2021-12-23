import React from 'react';
import { IAppointmentForDoctor } from 'types/appointments';
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

interface Props {
  listItem: IAppointmentForDoctor,
  resolution: string | null,
  onDropDownChangeVisible: ()=>void
}

const PatientCard = function ({ listItem, resolution, onDropDownChangeVisible }: Props) {
  const {
    patient, status, visit_date: visitDate,
  } = listItem;

  return (
    <StyledCard>
      <CardHeader>
        <AvatarWrap>
          <Avatar src={patient.photo} alt="avatar" />
        </AvatarWrap>
        <Headline>
          <h3>
            {`${patient.first_name} ${patient.last_name}`}
          </h3>

          <Subtitle>
            <Status status={status} />
          </Subtitle>

        </Headline>
        <EditButton onClick={onDropDownChangeVisible}>
          <EditIcon />
        </EditButton>

      </CardHeader>

      <Info>
        <InfoItem>
          <IconWrapper>
            <ClockIcon />
          </IconWrapper>
          <Time>{visitDate}</Time>
        </InfoItem>

        {resolution && (
        <InfoItem>
          <IconWrapper>
            <ResolutionIcon />
          </IconWrapper>
          <div>{resolution}</div>
        </InfoItem>
        )}

      </Info>
    </StyledCard>
  );
};

export default PatientCard;
