import styled from "@emotion/styled";
import { camelCase, startCase } from "lodash";

import { fonts } from "@styles";

function Container(P: ContainerProps) {
  const Parent = styled.div`
    ${fonts[camelCase(P.children) as keyof typeof fonts]}

    display: flex;
    flex-direction: column;
  `;

  return (
    <>
      <Parent className="text-container">{P.children}</Parent>
    </>
  );
}

export { Container };

type ContainerProps = {
  // FIXME convert keys of fonts to Title Case then use it as string literal type for children
  children: string;
};

