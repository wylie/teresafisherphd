import styled from "styled-components";

import theme from "../theme.js";

import { setPrimary, setSecondary } from "./styles/fontFamily.js";
import { setFontSize } from "./styles/fontSize.js";

export const TypeStyled = styled.p`
  ${props => setPrimary(props.primary)};
  ${props => setSecondary(props.secondary)};
  ${props => setFontSize(props.$fontSize)};
  margin: 0;
  color: ${props => theme.color[props.color]};
  ::selection {
    background: ${props => theme.color.three}; /* WebKit/Blink Browsers */
  }
  ::-moz-selection {
    background: ${props => theme.color.three}; /* Gecko Browsers */
  }
  & ~ & {
    padding-top: 1rem;
  }

  color: var(--text-color-light);
  @media (prefers-color-scheme: dark) {
    color: var(--text-color-dark);
  }
`;