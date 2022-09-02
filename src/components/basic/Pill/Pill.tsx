import * as SC from "./styles";

function Pill(props: PillProps) {
  const { label } = props;

  return (
    <>
      <SC.Container>{label}</SC.Container>
    </>
  );
}

export { Pill };

type PillProps = {
  label: string;
};

