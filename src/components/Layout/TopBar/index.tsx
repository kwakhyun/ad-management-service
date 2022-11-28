import styled from 'styled-components';
import { HiOutlineBell, HiOutlineCog, HiOutlineUser } from 'react-icons/hi';
import { flexBox } from '../../../styles/mixin';

function TopBar() {
  return (
    <Container>
      <HiOutlineBellContainer>
        <HiOutlineBell />
      </HiOutlineBellContainer>

      <IconContainer>
        <HiOutlineCog />
      </IconContainer>

      <UserIconContainer>
        <HiOutlineUser />
      </UserIconContainer>

      <UserName>kwakhyun님</UserName>
    </Container>
  );
}

export default TopBar;

const Container = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid ${({ theme }) => theme.grey_50};
  ${flexBox('row', 'flex-end')}
`;

const IconContainer = styled.div`
  ${flexBox()}
  font-size: 26px;
  color: ${({ theme }) => theme.grey_800};

  & + div {
    margin-left: 30px;
  }
`;

const HiOutlineBellContainer = styled(IconContainer)`
  position: relative;

  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: -2px;
    right: -2px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.secondary_02};
  }
`;

const UserIconContainer = styled(IconContainer)`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.grey_50};
  border: 1px solid ${({ theme }) => theme.grey_100};
  border-radius: 50%;
  color: ${({ theme }) => theme.grey_300};
`;

const UserName = styled.span`
  margin-left: 10px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.grey_800};
`;
