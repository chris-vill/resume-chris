import * as SC from "./ContactItem.styles";
import { Icon } from "@components";
import { IconKeys } from "@types";

function ContactItem(props: ContactItemProps) {
  const { label, link, type, value } = props;

  return (
    <>
      <SC.Container>
        <SC.LabelsContainer>
          <SC.Label>{label}</SC.Label>
          {link === null && <SC.Sublabel>{value}</SC.Sublabel>}
          {link !== null && (
            <SC.Link href={link} target="_blank">
              {value}
            </SC.Link>
          )}
        </SC.LabelsContainer>
        <SC.IconContainer>
          <Icon as={type} />
        </SC.IconContainer>
      </SC.Container>
    </>
  );
}

export { ContactItem };

export type ContactItemProps = {
  label: string;
  link: string | null;
  type: IconKeys;
  value: string;
};

