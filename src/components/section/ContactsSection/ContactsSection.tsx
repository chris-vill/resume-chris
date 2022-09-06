import * as SC from "./styles";
import { ContactItem } from "@components";
import type * as T from "@types";

function ContactsSection(props: ContactsSectionProps) {
  const { contacts } = props;

  return (
    <>
      <SC.Container>
        {contacts.map((contact) => (
          <ContactItem {...contact} />
        ))}
      </SC.Container>
    </>
  );
}

export { ContactsSection };

type ContactsSectionProps = {
  contacts: T.ContactItemProps[];
};

