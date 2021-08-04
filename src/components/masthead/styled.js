import styled from "styled-components";

import Page from "../page";

export const MastheadStyled = styled.div`
  .heading {
    padding: 1rem;
    margin-top: 1rem;
    border-top: 2px solid #000;
    border-bottom: 2px solid #000;
    font-family: 'Bodoni Moda', serif;
    color: #000;
  }
  .header, .header-sub {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
  }
  .header {
  /*   font-size: calc(3em + 1vw); */
    font-size: 3rem;
    transition: font-size .25s;
    padding: 0;
    margin: 0 0 1rem;
  }
  .header-sub {
    font-size: 1.25rem;
  }

  .navigation {
    border-bottom: 2px solid #000;
  }
  .navigation ul {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }
  .navigation ul li {
    flex: 1 1 0px;
  }
  .navigation ul li:not(:first-of-type) {
    margin-left: 1rem;
  }
  .navigation a {
    display: flex;
    justify-content: center;
    color: inherit;
  }
  .navigation a:hover {
    text-decoration: none;
  }

  ${Page} {
    grid-column-start: 2;
    grid-column-end: 3;
  }
`;
