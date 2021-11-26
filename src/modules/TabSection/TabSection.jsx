import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledTabSection, Title, StyledSettingIcon, Button,
} from './styled';
import { ReactComponent as PlusIcon } from './img/plus.svg';

const TabSection = function ({ title, content, component }) {
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

      {component}

    </StyledTabSection>
  );
};

export default TabSection;
