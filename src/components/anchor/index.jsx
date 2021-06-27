import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { AnchorStyled } from "./styled.js";

const Anchor = ({ className, children, ...anchorProps }) => {
  return (
    <AnchorStyled as="a" className={cn(className)} {...anchorProps}>
      {children}
    </AnchorStyled>
  );
};

Anchor.displayName = "Anchor";

Anchor.propTypes = {
  /**
   * Children of the component
   */
  children: PropTypes.string,
  /**
   * @ignore
   */
  className: PropTypes.string
};

Anchor.defaultProps = {
  children: "",
  className: ""
};

export default Anchor;