import styled from "@emotion/styled";
import { fonts } from "@styles";

function Label(P: LabelProps) {
  const Parent = styled.div`
    ${fonts.itemHeader}
  `;

  return (
    <>
      <Parent className="color-label">{P.text}</Parent>
    </>
  );
}

export { Label };

type LabelProps = {
  text: string;
};

