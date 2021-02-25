import styled from "styled-components";

export const Background = styled.body`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.background};
`;
