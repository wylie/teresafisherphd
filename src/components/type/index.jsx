import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { TypeStyled } from "./styled.js";

const Type = ({ className, children, ...typeProps }) => {
  return (
    <TypeStyled className={cn(className)} {...typeProps}>
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
  className: PropTypes.string
};

Type.defaultProps = {
  children: "",
  className: ""
};

export default Type;