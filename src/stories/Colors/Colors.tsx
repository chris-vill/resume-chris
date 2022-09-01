import * as SC from "./styles";
import { Color } from "../components/index";

const colorList = [
  "Primary T20",
  "Primary",
  "Primary S20",
  "Accent T20",
  "Accent",
  "Accent S20",
  "Dark T20",
  "Dark",
  "Dark S20",
  "Link T20",
  "Link",
  "Link S20",
  "Light T20",
  "Light",
  "Light S20",
  "White",
  "Black",
];

function Colors() {
  return (
    <>
      <SC.Container>
        {colorList.map((color, i) => (
          <Color label={color} key={i} />
        ))}
      </SC.Container>
    </>
  );
}

export { Colors };

