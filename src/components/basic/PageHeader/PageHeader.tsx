import * as SC from "./PageHeader.styles";

function PageHeader(props: PageHeaderProps) {
  const { header, subheader } = props;

  return (
    <>
      <SC.Container>
        <SC.Title>{header}</SC.Title>
        <SC.Subtitle>{subheader}</SC.Subtitle>
      </SC.Container>
    </>
  );
}

export { PageHeader };

type PageHeaderProps = {
  header: string;
  subheader: string;
};

