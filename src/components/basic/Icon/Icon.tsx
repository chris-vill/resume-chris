import type * as T from "@types";

import * as SC from "./Icon.styles";
import { URLS } from "@constants";

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

