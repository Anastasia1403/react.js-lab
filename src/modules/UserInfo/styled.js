import styled from 'styled-components';

export const User = styled.div`
  display: flex;
  gap: 16px;
`;
export const Info = styled.div`
  display: none;
  
  @media screen and (min-width: 600px) {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-end;
    line-height: 1.3;
  }
`;
export const Name = styled.div`
  font-weight: 600;
`;
export const Role = styled.div`
  font-size: 13px;
  color: #a1abc9;
`;

export const Avatar = styled.img`
width: 100%;
object-fit: cover;
`;

export const AvatarWrap = styled.div`
  position: relative;
  width: 40px;
  height: 40px;

  &:after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #34c197;
    border: 3px solid #e4ebff;
  }
`;
