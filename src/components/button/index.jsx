import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import Type from "../type";

import { ButtonStyled } from "./styled.js";

const Button = ({ className, children, primary, secondary, ...buttonProps }) => {
  return (
    <ButtonStyled className={cn(className)} primary={primary} secondary={secondary} {...buttonProps}>
      <Type $fontSize="md" color="white">{children}</Type>
    </ButtonStyled>
  );
};

Button.displayName = "Button";

Button.propTypes = {
  /**
   * Children of the component
   */
  children: PropTypes.string,
  /**
   * @ignore
   */
  className: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool
};

Button.defaultProps = {
  children: "",
  className: ""
};

export default Button;