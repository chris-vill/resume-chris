import { css } from "@emotion/react";

import { reset } from "./vendors/reset";
import { colors } from "./variables/colors.variables";
import { fonts } from "./variables/fonts.variables";

const globalStyles = css`
  ${reset}

  :root {
    ${colors}
    ${fonts}
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
      Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  hr {
    background-color: #000000;
    border: none;
    height: 1px;
  }

  * {
    box-sizing: border-box;
  }

  #__next {
    overflow: auto;
  }

  @media (prefers-color-scheme: dark) {
    html {
      /* color-scheme: dark; */
    }
    body {
      /* color: white; */
      /* background: black; */
    }
  }
`;

export { globalStyles };

