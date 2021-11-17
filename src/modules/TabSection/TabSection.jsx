import React from 'react';
import { Link } from 'react-router-dom';
import {
  ListEmpty, List, StyledTabSection, Title, StyledSettingIcon,
} from './TabSectionStyle';
import Card from '../Card/Card';
import { ButtonNew } from '../../components/ButtonSubmit/styled';
import { ReactComponent as PlusIcon } from './img/plus.svg';

const TabSection = function ({ title, content, dataList }) {
  return (
    <StyledTabSection>
      <Title>
        {title}
        {content === 'Appointments' && (
          <div>
            <Link to="/user-view/new-appointment">
              <ButtonNew>
                <PlusIcon alt="plus" />
                <span>Create an appointment</span>
              </ButtonNew>
            </Link>

            <StyledSettingIcon alt="settings" />
          </div>
        )}
      </Title>

      {dataList.length
        ? (
          <List>
            {dataList.map((listItem) => (
              <Card key={listItem.id} listItem={listItem} content={content} />
            ))}
          </List>
        ) : (
          <ListEmpty>
            You have no patients yet.
            <br />
            To create a patient profile, please contact your administrator.

          </ListEmpty>
        )}
    </StyledTabSection>
  );
};

export default TabSection;
