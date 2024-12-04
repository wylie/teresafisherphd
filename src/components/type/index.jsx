import React from "react";
import cn from "classnames";

import { TypeStyled } from "./styled.js";

const Type = ({ children, className, color = "text", ...typeProps }) => {
  return (
    <TypeStyled className={cn(className)} color={color} {...typeProps}>
      {children}
    </TypeStyled>
  );
};

export default Type;