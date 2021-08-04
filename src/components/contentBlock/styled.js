import styled, { css } from "styled-components";

import Page from "../page";
import Type from "../type";

export const ContentBlockStyled = styled.div`
  position: relative;
  padding: 1rem;
  margin: 3rem 0;
  display: flex;
  align-items: center;

  ${Page} {
    grid-column-start: 2;
    grid-column-end: 3;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
  ${props =>
    props.align === "left" &&
      css`
        margin-left: 375px;
      `};
  ${props =>
    props.align === "right" &&
      css`
        margin-right: 375px;
      `};
`;

export const ContentBlockHeader = styled(Type)`
  font-size: 2rem;
`;

export const ContentBlockImageStyled = styled.img`
  position: absolute;
  width: 350px;
  transform: rotate(-2deg);
  ${props =>
    props.align === "left" &&
      css`
        left: 0;
        transform: rotate(-2deg);
      `};
  ${props =>
    props.align === "right" &&
      css`
        right: 0;
        transform: rotate(2deg);
      `};
`;

export const ContentBlockTypeStyled = styled(Type)`
  font-size: 1rem;
  line-height: 2;
  color: #000;
`;
