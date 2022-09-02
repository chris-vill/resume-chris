import * as SC from "./styles/index";

function SideSectionHeader(props: SideSectionHeaderProps) {
  const { label } = props;

  return (
    <>
      <SC.Container>
        <SC.Divider />
        <SC.Header>{label}</SC.Header>
      </SC.Container>
    </>
  );
}

export { SideSectionHeader };

type SideSectionHeaderProps = {
  label: string;
};

