import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import Button from "../button";

// import { PageStyled } from "./styled.js";

const Page = ({ className, children, ...pageProps }) => {
  return (
    <div style={{padding: "2rem"}}>
      <Button secondary>Click Me, please!</Button>
    </div>
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