import React from 'react';
import {
  ListEmpty, List, StyledTabSection, Title, StyledSettingIcon,
} from './TabSectionStyle';
import Card from '../Card/Card';
import { ButtonNew } from '../../components/ButtonSubmit/styled';
import { ReactComponent as PlusIcon } from './img/plus.svg';

const TabSection = function ({ title, content, dataList }) {
  // console.log(title, content, dataList);
  // // eslint-disable-next-line
  // debugger;
  return (
    <StyledTabSection>
      <Title>
        {title}
        {content === 'Appointments' && (
          <div>
            <ButtonNew>
              <PlusIcon alt="plus" />
              <span>Create an appointment</span>
            </ButtonNew>
            <StyledSettingIcon alt="settings" />
          </div>
        )}
      </Title>

      {Object.keys(dataList).length ? (
        <List>
          {Object.values(dataList).map((listItem) => (
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
