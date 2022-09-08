import { StyledComponent as TStyledComponent } from "@emotion/styled";
import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

/*
  NOTE:
  css syntax highlighting doesn't work with plain string literal
  there is an extension for it called "es6-string-css" but it has a bug
  link to bug: https://github.com/bashmish/es6-string-css/issues/6
*/

function createStyledComponent<P, H>(
  className: string,
  StyledComponent: TStyledComponent<{}, DetailedHTMLProps<HTMLAttributes<H>, H>, {}>,
  selfClosing: boolean = false
) {
  return (P: StyledComponentProps) => {
    return (
      <>
        {selfClosing && <StyledComponent {...{ className }} />}
        {!selfClosing && <StyledComponent {...{ className }}>{P.children}</StyledComponent>}
      </>
    );
  };

  type StyledComponentProps = P & HTMLAttributes<H> & { children?: ReactNode };
}

export { createStyledComponent };

