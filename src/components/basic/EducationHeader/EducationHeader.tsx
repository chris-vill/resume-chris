import * as SC from "./EducationHeader.styles";

function EducationHeader(props: EducationHeaderProps) {
  const { course, institution, location, date } = props;

  return (
    <>
      <SC.Container>
        <h4>{course}</h4>
        <SC.Detail>{institution}</SC.Detail>
        <SC.Detail>{location}</SC.Detail>
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

