import type { GetStaticProps } from "next";

import type * as T from "@types";

import { Page } from "@components";

export default function Home(props: HomeProps) {
  return (
    <>
      <Page.Home {...props.data} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`http://localhost:3000/data.json`);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};

type HomeProps = {
  data: T.HomePageProps;
};

/*
  Resume
  - above the fold
  - don't ignore cover letter
  - create personal brand
  - keep it simple
  - layout structure (use scale to emphasize)
  - make it personal
  - think about fonts (body font / display font)
  - balance creativity / professionalism

  - education should include seminars and online courses
  - awards if any
  - personal interests / hobbies if there are remaining spaces
  - objective is important

  - simple
  - consistent
  - legible
  - only what is important

  - Accomplised [X] as measured by [Y] by doing [Z]
  - 475 to 600 words
  - remove buzzwords, fluff and cliches
*/

