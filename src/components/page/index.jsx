import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import Anchor from "../anchor";
import Type from "../type";
import logo from '../../logo.svg';

import { PageStyled } from "./styled.js";

const Page = ({ className, children, ...pageProps }) => {
  return (
    <PageStyled className={cn(className)} {...pageProps}>
      <img src={logo} className="logo" alt="logo" />
      <Type>
        Edit <Type as="code">src/App.js</Type> and save to reload.
      </Type>
      <Anchor
        className="link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React!
      </Anchor>
    </PageStyled>
  );
};

Page.displayName = "Page";

Page.propTypes = {
  /**
   * Children of the component
   */
  children: PropTypes.string,
  /**
   * @ignore
   */
  className: PropTypes.string
};

Page.defaultProps = {
  children: "",
  className: ""
};

export default Page;