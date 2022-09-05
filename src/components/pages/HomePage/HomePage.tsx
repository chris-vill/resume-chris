import Image from "next/image";

import * as SC from "./styled-components";
import { Icons } from "@components";

function HomePage() {
  return (
    <>
      <Icons as="email" />
    </>
  );
}

// function HomePage() {
//   return <>
//     <SC.Container>
//       <SC.Main >
//         <SC.Title>
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </SC.Title>

//         <SC.Description>
//           Get started by editing{' '}
//           <code>pages/index.js</code>
//         </SC.Description>

//         <SC.Grid>
//           <SC.Card href="https://nextjs.org/docs">
//             <h2>Documentation &rarr;</h2>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </SC.Card>

//           <SC.Card href="https://nextjs.org/learn">
//             <h2>Learn &rarr;</h2>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </SC.Card>

//           <SC.Card
//             href="https://github.com/vercel/next.js/tree/canary/examples"
//           >
//             <h2>Examples &rarr;</h2>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </SC.Card>

//           <SC.Card
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           >
//             <h2>Deploy &rarr;</h2>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </SC.Card>
//         </SC.Grid>
//       </SC.Main>

//       <SC.Footer>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <SC.Logo>
//             <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//           </SC.Logo>
//         </a>
//       </SC.Footer>
//     </SC.Container>
//   </>
// }

export { HomePage };

