import styled from "@emotion/styled";
import type { ImgHTMLAttributes, ReactNode } from "react";

function Container(P: ContainerProps) {
  const Parent = styled.img`
    height: 20px;
    width: 20px;
  `;

  return (
    <>
      <Parent className="contact-item-container" {...P} />
    </>
  );
}

export { Container };

type ContainerProps = ImgHTMLAttributes<HTMLImageElement>;

