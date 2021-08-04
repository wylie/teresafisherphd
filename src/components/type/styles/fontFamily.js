import { css } from "styled-components";

import "./fontFamily.css";

export const setPrimary = primary => {
  if (primary) {
    return css`
      font-family: "Bodoni Moda", serif;
      font-weight: 600;
      line-height: 1;
    `;
  }
  return css``;
};

export const setSecondary = secondary => {
  if (secondary) {
    return css`
      font-family: "Nunito", sans-serif;
      font-weight: 300;
      line-height: 1.5;
    `;
  }
  return css``;
};