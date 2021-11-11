import React from 'react';
import {
  ListEmpty, List, StyledTabSection, Title,
} from './TabSectionStyle';
import Card from '../Card/Card';
import ButtonSubmit from '../../components/ButtonSubmit/ButtonSubmit';
import { ReactComponent as PlusIcon } from './img/plus.svg';

const TabSection = function ({ title, content, dataList }) {
  return (
    <StyledTabSection>
      <Title>
        {title}
        {content === 'appointments' && (
          <ButtonSubmit>
            <PlusIcon alt="plus" />
            <span>Create an appointment</span>
          </ButtonSubmit>
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
