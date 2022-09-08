import { StyledComponent as TStyledComponent } from "@emotion/styled";
import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

/*
  NOTE:
  css syntax highlighting doesn't work with plain string literal
  there is an extension for it called "es6-string-css" but it has a bug
  link to bug: https://github.com/bashmish/es6-string-css/issues/6
*/

function createStyledComponent<P, HE, HA extends HTMLAttributes<HE> = HTMLAttributes<HE>>(
  className: string,
  /*
    FIXME:
      turn this:
        DetailedHTMLProps<HTMLAttributes<HE>, HE>
      to this:
        DetailedHTMLProps<HA, HE>
  */
  StyledComponent: TStyledComponent<{}, DetailedHTMLProps<HTMLAttributes<HE>, HE>, {}>,
  selfClosing: boolean = false
) {
  return (props: StyledComponentProps) => {
    const { children, ...otherProps } = props;

    return (
      <>
        {selfClosing && <StyledComponent {...{ className }} {...otherProps} />}
        {!selfClosing && (
          <StyledComponent {...{ className }} {...otherProps}>
            {children}
          </StyledComponent>
        )}
      </>
    );
  };

  type StyledComponentProps = P & HA & { children?: ReactNode };
}

export { createStyledComponent };

