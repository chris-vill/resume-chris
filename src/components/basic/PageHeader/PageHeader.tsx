import * as SC from "./styles";

function PageHeader(props: PageHeaderProps) {
  const { header, subheader } = props;

  return (
    <>
      <SC.Container>
        <SC.Header>{header}</SC.Header>
        <SC.Subheader>{subheader}</SC.Subheader>
      </SC.Container>
    </>
  );
}

export { PageHeader };

type PageHeaderProps = {
  header: string;
  subheader: string;
};
