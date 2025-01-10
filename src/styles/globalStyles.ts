import { css, Theme } from "@emotion/react";

import reset from "./reset.ts";

const globalStyles = (theme: Theme) => css`
  ${reset()}

  .sr-only {
    position: absolute;

    overflow: hidden;

    width: 0.1rem;
    height: 0.1rem;
    margin: -0.1rem;
    padding: 0;

    white-space: nowrap;

    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

export default globalStyles;
