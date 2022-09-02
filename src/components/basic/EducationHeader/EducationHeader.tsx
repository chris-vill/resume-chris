import * as SC from "./styles";

function EducationHeader(props: EducationHeaderProps) {
  const { course, institution, location, date } = props;

  return (
    <>
      <SC.Container>
        <h4>{course}</h4>
        <SC.Details>{institution}</SC.Details>
        <SC.Details>{location}</SC.Details>
        <SC.Date>{date}</SC.Date>
      </SC.Container>
    </>
  );
}

export { EducationHeader };

type EducationHeaderProps = {
  course: string;
  institution: string;
  location: string;
  date: string;
};

