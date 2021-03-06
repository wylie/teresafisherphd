import { css } from "styled-components";

import { theme } from "../../theme.js";

export const setFontSize = $fontSize => {
  if ($fontSize) {
    return css`
      ${props =>
        props.$fontSize === "sm" &&
        css`
          font-size: ${theme.font.size.sm};
        `};
      ${props =>
        props.$fontSize === "md" &&
        css`
          font-size: ${theme.font.size.md};
        `};
      ${props =>
        props.$fontSize === "lg" &&
        css`
          font-size: ${theme.font.size.lg};
        `};
    `;
  }
  return css``;
};
