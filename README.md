## ToDo

- add Prettier
- add ESLint
- add Storybook

## Setup

### Tools

- VS Code (highly recommended)
- PNPM

### VS Code Extensions (required)

- JavaScript and TypeScript Nightly (please follow their instructions)

---

## Programming Style Guide

### Styling Components

We use a combination of Styled Components and BEM
Here's a sample styling:

```
// SampleComponent/styled-components/Container.styled.tsx
import type { HTMLAttributes, ReactNode } from "react";

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { omit } from "lodash";

function Container(P: ContainerProps) {
    const htmlAttrs = omit(P: ["children"]);
    const Parent = styled.div`
        /* NOTE: styles here */
        /* including styles based on state changes */

        ${childSpan}
    `

    return <>
        // NOTE: add classes in order to style this component from higher up the DOM tree
        // NOTE: inject HTML attributes like href, onClick, etc.
        <Parent className="container" {...htmlAttrs}>
            {P.children}
        </Parent>
    </>
}

// NOTE: don't forget to put the styles in a CSS style rule
// in this case, span { /* styles here */ }
const childSpan = css`
    span {
        /* NOTE: styles here */
        /* including styles based on state changes */
    }
`

export { Container };

// NOTE: always add HTMLAttributes for intellisense of HTML attributes
type ContainerProps = HTMLAttributes<HTMLDivElement> & {
    children: ReactNode
}
```
