import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { MastheadStyled } from "./styled.js";

const Masthead = ({ className, children, ...mastheadProps }) => {
  return (
    <MastheadStyled>
      <div class="heading">
        <h1 class="header">Teresa Fisher, PhD.</h1>
        <h2 class="header-sub">🌵 Licensed Psychologist 🌵</h2>
      </div>
      <div class="navigation">
        <ul>
          <li><a href="#">forms</a></li>
          <li><a href="#">billing</a></li>
          <li><a href="#">visits</a></li>
          <li><a href="#">contact</a></li>
        </ul>
      </div>
    </MastheadStyled>
  );
};

Masthead.displayName = "Masthead";

Masthead.propTypes = {
  /**
   * Children of the component
   */
  children: PropTypes.string,
  /**
   * @ignore
   */
  className: PropTypes.string
};

Masthead.defaultProps = {
  children: "",
  className: ""
};

export default Masthead;