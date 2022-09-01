import * as SC from "./styles";
import { Text } from "../components";

const fontList = [
  "Page Header",
  "Page Subheader",
  "Section Header",
  "Item Header",
  "Item Subheader",
  "Item Body",
  "Date",
  "Pill",
];

function Typography() {
  return (
    <>
      <SC.Container>
        {fontList.map((font) => (
          <Text label={font} />
        ))}
      </SC.Container>
    </>
  );
}

export { Typography };

