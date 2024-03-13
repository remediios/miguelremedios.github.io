import { TimelineDot } from '@mui/lab';
import { MdOutlineWorkOutline } from 'react-icons/md';
import styled from 'styled-components';

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

export const TitleDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
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

export const SymbolWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 100px;
  color: ${({ theme }) => theme.text_primary};
  margin: 15px 15px 0px;

  @media (max-width: 768px) {
    margin: 1px 0 0 0;
  }
`;

export const AnimatedArrow = styled.div`
  position: relative;
  margin: 0 36px 0 25px;
  transform: translate(-50%, -50%);
  transform: rotate(270deg);

  @media (max-width: 768px) {
    margin: 0 36px 3px 46px;
  }

  span {
    display: block;
    width: 0.7vw;
    height: 0.7vw;
    border-bottom: 2px solid ${({ theme }) => theme.text_primary};
    border-right: 2px solid ${({ theme }) => theme.text_primary};
    transform: rotate(45deg);
    margin: -10px;
    animation: animate 2s infinite;
  }

  span:nth-child(2) {
    animation-delay: -0.2s;
  }

  span:nth-child(3) {
    animation-delay: -0.4s;
  }

  @keyframes animate {
    0% {
      opacity: 0;
      transform: rotate(45deg) translate(-14px, -14px);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: rotate(45deg) translate(14px, 14px);
    }
  }
`;

export const ExperienceIcon = styled(MdOutlineWorkOutline)`
  font-size: 32px;
  color: ${({ theme }) => theme.timeline_dots};
  margin-top: 8px;
  cursor: pointer;
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }

  @media (max-width: 500px) {
    margin-top: 4px;
    font-size: 14px;
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
  }
`;
