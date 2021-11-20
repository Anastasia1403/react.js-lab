import React from 'react';
import { Link } from 'react-router-dom';
import {
  ListEmptyBlock, List, StyledTabSection, Title, StyledSettingIcon, Button,
} from './styled';
import { ReactComponent as PlusIcon } from './img/plus.svg';
import AppointmentCard from '../Card/AppointmentCard';
import PatientCard from '../Card/PatientCard';

const TabSection = function ({ title, content, dataList }) {
  return (
    <StyledTabSection>
      <Title>
        {title}
        {content === 'Appointments' && (
          <div>
            <Link to="/user-view/new-appointment">
              <Button>
                <PlusIcon alt="plus" />
                <span>Create an appointment</span>
              </Button>
            </Link>

            <StyledSettingIcon alt="settings" />
          </div>
        )}
      </Title>

      {dataList.length
        ? (
          <List>
            {content === 'Appointments' && (
              dataList.map((listItem) => (
                <AppointmentCard key={listItem.id} listItem={listItem} content={content} />
              ))
            ) }
            {content === 'Patients' && (
              dataList.map((listItem) => (
                <PatientCard key={listItem.id} listItem={listItem} content={content} />
              ))
            ) }
          </List>
        ) : (
          <ListEmptyBlock>
            You have no patients yet.
            <br />
            To create a patient profile, please contact your administrator.

          </ListEmptyBlock>
        )}
    </StyledTabSection>
  );
};

export default TabSection;
