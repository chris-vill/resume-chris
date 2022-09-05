import { URLS } from "@constants";
import { IconKeys } from "@types";

function Icons(props: IconProps) {
  const { as } = props;

  return (
    <>
      <img src={`${URLS.CLIENT}/SVGs/${as}.svg`} />
    </>
  );
}

export { Icons };

type IconProps = {
  as: IconKeys;
};

