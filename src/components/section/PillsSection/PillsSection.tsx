import * as SC from "./PillsSection.style";
import { Pill, SideSectionHeader } from "@components";

function PillsSection(props: PillsSectionProps) {
  const { label, items } = props;

  return (
    <>
      <SC.Container>
        <SideSectionHeader {...{ label }} />
        <SC.Pills>
          {items.map((item, i) => (
            <Pill label={item} key={i} />
          ))}
        </SC.Pills>
      </SC.Container>
    </>
  );
}

export { PillsSection };

type PillsSectionProps = {
  label: string;
  items: string[];
};

