import * as SC from "./styles";

function MainSectionHeader(props: MainSectionHeaderProps) {
  const { label } = props;

  return (
    <>
      <SC.Container>
        <SC.Header>{label}</SC.Header>
        <SC.Divider />
      </SC.Container>
    </>
  );
}

export { MainSectionHeader };

type MainSectionHeaderProps = {
  label: string;
};

