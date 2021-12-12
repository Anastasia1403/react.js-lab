import React from 'react';
import { Link } from 'react-router-dom';
import { USER_PATH } from 'routes/constants';
import {
  StyledTabSection, Title, StyledSettingIcon, Button,
} from './styled';
import PlusIcon from './img/plus.svg';

interface TabSectionProps {
  title: string,
  tab: string,
  component: object,
}

const TabSection = function ({ title, tab, component }: TabSectionProps) {
  return (
    <StyledTabSection>
      <Title>
        {title}
        {tab === 'Appointments' && (
          <div>
            <Link to={USER_PATH.CREATE_APPOINTMENT}>
              <Button>
                <img src={PlusIcon} alt="plus" />
                <span>Create an appointment</span>
              </Button>
            </Link>

            <StyledSettingIcon />
          </div>
        )}
      </Title>

      {component}

    </StyledTabSection>
  );
};

export default TabSection;
