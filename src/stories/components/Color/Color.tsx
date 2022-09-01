import * as SC from "./styles";

function Color(props: ColorProps) {
  const { label } = props;

  return (
    <>
      <SC.Container>
        <SC.Circle color={toKebab(label)} />
        <SC.Label text={label} />
      </SC.Container>
    </>
  );
}

function toKebab(text: string) {
  return text.toLowerCase().replace(/\s/g, "-");
}

export { Color };

type ColorProps = {
  label: string;
};

