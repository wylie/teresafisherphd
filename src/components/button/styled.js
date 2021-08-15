import styled, { css } from "styled-components";
import { darken } from "polished";

import { theme } from "../theme.js";

export const ButtonStyled = styled.button`
  position: relative;
  padding: .5rem 1.5rem;
  border: 0;
  cursor: pointer;
  color: ${theme.color.white};
  font-family: ${theme.font.family.base};
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;          /* Likely future */
  ${props =>
    props.primary &&
      css`
        background-color: ${theme.color.two};
        box-shadow: 3px 3px 0 ${theme.color.three};
        &:hover {
          background-color: ${darken(0.05, theme.color.two)};
        }
      `};
  ${props =>
    props.secondary &&
      css`
        background-color: ${theme.color.six};
        box-shadow: 3px 3px 0 ${theme.color.three};        
        &:hover {
          background-color: ${darken(0.05, theme.color.six)};
        }
      `};
  &:active {
    top: 2px;
    left: 2px;
    box-shadow: 0 0 0;
  }

  & ~ & {
    margin-left: 1rem;
  }
`;