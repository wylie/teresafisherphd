import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { ContentBlockStyled, Content, ContentBlockImageStyled, ContentBlockTypeStyled, ContentBlockHeader } from "./styled.js";

const ContentBlock = ({ className, children, align, ...contentBlockProps }) => {
  return (
    <ContentBlockStyled className={cn(className)} {...contentBlockProps}>
      <ContentBlockImageStyled align={align} src="https://cdn.britannica.com/22/206222-131-E921E1FB/Domestic-feline-tabby-cat.jpg" alt="" />
      <Content align={align}>
        <ContentBlockHeader secondary as="h2">Some Header</ContentBlockHeader>
        <ContentBlockTypeStyled>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere mollis nisi, at volutpat ex dictum gravida. Suspendisse commodo tincidunt ultrices. Nullam semper mauris tempus dapibus cursus. Mauris sagittis est sed ex bibendum, ac blandit mi convallis. Pellentesque nulla mauris, eleifend sit amet ligula et, bibendum volutpat turpis. Praesent eu porta nisi, at gravida dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis vitae congue purus, eu consequat leo. Aenean pharetra dictum mauris, ac rhoncus felis aliquet sed. Maecenas tincidunt, augue non euismod hendrerit, nibh quam suscipit lectus, non placerat metus nibh non augue. Nam id feugiat nunc, interdum dictum sem.</ContentBlockTypeStyled>
      </Content>
    </ContentBlockStyled>
  );
};

ContentBlock.displayName = "ContentBlock";

ContentBlock.propTypes = {
  /**
   * Children of the component
   */
  children: PropTypes.string,
  align: PropTypes.oneOf("left", "right"),
  /**
   * @ignore
   */
  className: PropTypes.string
};

ContentBlock.defaultProps = {
  align: "left",
  children: "",
  className: ""
};

export default ContentBlock;