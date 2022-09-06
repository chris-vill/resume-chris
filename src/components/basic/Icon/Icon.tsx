import * as SC from "./styles";
import { URLS } from "@constants";
import type * as T from "@types";

function Icon(props: IconProps) {
  const { as } = props;

  const svgKey = as.toUpperCase() as T.SvgKeys;

  return (
    <>
      <SC.Container src={`${URLS.ASSETS.SVGS[svgKey]}`} />
    </>
  );
}

export { Icon };

type IconProps = {
  as: T.IconKeys;
};

