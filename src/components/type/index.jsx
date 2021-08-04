import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { TypeStyled } from "./styled.js";

const Type = ({ children, className, color, ...typeProps }) => {
  return (
    <TypeStyled className={cn(className)} color={color} {...typeProps}>
      {children}
    </TypeStyled>
  );
};

Type.displayName = "Type";

Type.propTypes = {
  /**
   * Children of the component
   */
  children: PropTypes.string,
  /**
   * @ignore
   */
  className: PropTypes.string,
  color: PropTypes.string,
  /**
   * Is there padding?
   */
  padding: PropTypes.bool,
  /**
   * Is it the primary font-family
   */
  primary: PropTypes.bool,
  /**
   * Is it the secondary font-family
   */
  secondary: PropTypes.bool,
  /**
   * Is it the secondary font-family
   */
  $fontSize: PropTypes.string
};

Type.defaultProps = {
  children: "",
  className: "",
  color: "text"
};

export default Type;