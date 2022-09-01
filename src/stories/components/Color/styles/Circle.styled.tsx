import styled from "@emotion/styled";

function Circle(P: CircleProps) {
  const Parent = styled.div`
    background-color: var(--clr-${P.color});
    border: 2px solid var(--clr-black);
    border-radius: 50%;
    height: 48px;
    width: 48px;
  `;

  return (
    <>
      <Parent className="color-circle" />
    </>
  );
}

export { Circle };

type CircleProps = {
  color: string;
};

