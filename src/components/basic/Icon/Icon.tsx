import { URLS } from "@constants";
import * as T from "@types";

function Icon(props: IconProps) {
  const { as } = props;

  const svgKey = as.toUpperCase() as T.SvgKeys;

  return (
    <>
      <img src={`${URLS.ASSETS.SVGS[svgKey]}`} />
    </>
  );
}

export { Icon };

type IconProps = {
  as: T.IconKeys;
};

