import styled from "styled-components";

export const Theme = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.background};
`;
