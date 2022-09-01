import * as SC from "./styles";

function Text(props: TextProps) {
  const { label } = props;

  return (
    <>
      <SC.Container>{label}</SC.Container>
    </>
  );
}

export { Text };

type TextProps = {
  label: string;
};

