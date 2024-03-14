import styled from 'styled-components';

export const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

export const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(252, 200, 56, 0.15) 0%,
      rgba(255, 216, 110, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(255, 198, 64, 0) 50%,
      rgba(255, 198, 64, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

export const WrapperProjects = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(252, 200, 56, 0.15) 0%,
      rgba(255, 216, 110, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(255, 198, 64, 0) 50%,
      rgba(255, 198, 64, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0% 0%, 100% 0%, 100% 97.75%, 0% 100%);
`;
