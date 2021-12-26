import { theme } from 'styles/theme';
import styled from 'styled-components';
import DropDown from 'components/DropDown/DropDown';

export const Container = styled.li`
  position: relative;
  `;

export const StyledCard = styled.div`
  position: relative;
  list-style: none;
  border-radius: 12px;
  background-color: ${theme.colors.white};
  padding: 16px 16px 24px 16px;  
  min-width: 270px;
  height: fit-content;
  justify-self: stretch;

  @media screen and (min-width: 900px) {
    padding: 16px 40px 24px;
  }
`;

export const Avatar = styled.img`
width: 100%;
object-fit: cover;
border-radius: 50%;
`;

export const AvatarWrap = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  `;

export const CardHeader = styled.header`
  display: flex;
  position: relative;
  padding-bottom: 16px;
  gap: 16px;
  align-items: center;

  &::after {
    position: absolute;
    bottom: 0;
    content: "";
    height: 1px;
    background-color: ${theme.colors.solidGrey};
    width: calc(100% + 32px);
    left: -16px;
    @media screen and (min-width: 900px) {
      width: calc(100% + 80px);
      left: -40px;
    }
  }
`;

export const EditButton = styled.button`
    background: transparent;
    width: 40px;
    height: 40px;
    border-radius: 6px;
    &:hover,
    &:active,
    &:focus {
    background-color: ${theme.colors.lightGrey};
  }
`;

export const Headline = styled.div`
flex-grow: 1;
`;
export const Subtitle = styled.div` 
    display: flex;
    gap: 8px;
    align-items: center;
    color: ${theme.colors.mediumGrey};
font-size: 13px;
`;

export const Info = styled.div`
    padding-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const InfoItem = styled.div`
    display: flex;
    gap: 16px;
    align-items: flex-start;
`;

export const Time = styled.div`
    font-weight: 600;
`;

export const IconWrapper = styled.div`
width: 24px;
height: 24px;
`;

export const PatientCardDropDown = styled(DropDown)`
 top: 72px;
 right: 16px;
 `;
