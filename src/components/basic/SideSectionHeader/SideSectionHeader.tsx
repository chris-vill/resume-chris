import * as SC from "./SideSectionHeader.styles";

function SideSectionHeader(props: SideSectionHeaderProps) {
  const { label } = props;

  return (
    <>
      <SC.Container>
        <SC.Divider />
        <SC.Label>{label}</SC.Label>
      </SC.Container>
    </>
  );
}

export { SideSectionHeader };

type SideSectionHeaderProps = {
  label: string;
};

