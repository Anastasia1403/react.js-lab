import React, { useState } from 'react';
import DropDown from 'components/DropDown/DropDown';
import { DropDownButton } from 'components/DropDownButton/DropDownButton';
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

const PatientCard = function (listItem: IAppointmentForDoctor) {
  const { patient, status, visit_date: visitDate } = listItem;
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const OnChangeVisible = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };
  return (
    <StyledCard>

      <DropDown isVisible={isDropDownVisible}>
        <DropDownButton>Create a Resolution</DropDownButton>
        <DropDownButton>Edit a Resolution</DropDownButton>
        <DropDownButton>Delete</DropDownButton>
      </DropDown>
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
        <EditButton onClick={OnChangeVisible}>
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

        <InfoItem>
          <IconWrapper>
            <ResolutionIcon />
          </IconWrapper>
          {/* <div>{resolution}</div> */}

        </InfoItem>

      </Info>
    </StyledCard>
  );
};

export default PatientCard;
