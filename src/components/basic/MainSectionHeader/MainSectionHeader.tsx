import * as SC from "./MainSectionHeader.styles";

function MainSectionHeader(props: MainSectionHeaderProps) {
  const { label } = props;

  return (
    <>
      <SC.Container>
        <SC.Label>{label}</SC.Label>
        <SC.Divider />
      </SC.Container>
    </>
  );
}

export { MainSectionHeader };

type MainSectionHeaderProps = {
  label: string;
};

