import styled from 'styled-components';
import TimelineDot from '@mui/lab/TimelineDot';
import { HiOutlineAcademicCap } from 'react-icons/hi';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px 80px 0px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  margin-left: 60px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

export const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const TimelineDotStyled = styled(TimelineDot)`
  &.MuiTimelineDot-filled {
    background-color: ${({ theme }) => theme.timeline_dots};
    color: ${({ theme }) => theme.timeline_dots};
`;

export const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  margin-left: 100px;
`;

export const EducationIcon = styled(HiOutlineAcademicCap)`
  font-size: 32px;
  color: ${({ theme }) => theme.timeline_dots};
  margin: 15px 20px 0px;
  cursor: pointer;
`;
