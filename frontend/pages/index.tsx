import Layout from "@/components/layout"
import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode } from 'react';
import Technology from "@/components/technologies";
import Link from "next/link";



const react = {
  icon: <FontAwesomeIcon icon={faReact} size = "2xl"/>,
  title: "React",
  des: "React is a popular JavaScript library for building user interfaces. Developed and maintained by Facebook.",
  link: "https://react.dev/"
}

const next = {
  icon: <svg width="64px" height="64px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z" fill="#000000"> </path> </g> </g></svg>,
  title: "NextJS",
  des: "Popular open-source JavaScript framework that simplifies the development of server-rendered React applications",
  link : 'https://nextjs.org/'
}

const ts = {
  icon: <svg xmlns="http://www.w3.org/2000/svg" width="64px" height="64px" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="M12.5 8v-.167c0-.736-.597-1.333-1.333-1.333H10a1.5 1.5 0 1 0 0 3h1a1.5 1.5 0 0 1 0 3h-1A1.5 1.5 0 0 1 8.5 11M8 6.5H3m2.5 0V13M.5.5h14v14H.5V.5Z"/></svg>,
  title: "TypeScript",
  des: "Statically typed superset of JavaScript that enhances JavaScript by adding optional static typing to the language",
  link : 'https://www.typescriptlang.org/'
}

const tailwind = {
  icon: <svg fill="#000000" width="64px" height="64px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>Tailwind CSS icon</title><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path></g></svg>,
  title: "TailwindCSS",
  des: "Highly customizable, utility-first CSS framework that helps you quickly build modern, responsive web designs",
  link : "https://tailwindcss.com/"
}


const fontawesome = {
  icon : <FontAwesomeIcon icon={faFontAwesome} size="2xl"/>,
  title: "FontAwesome",
  des: "React is a popular JavaScript library for building user interfaces. Developed and maintained by Facebook.",
  link : "https://fontawesome.com/"
}

const aws = {
  icon : <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path fill="currentColor" d="M7.64 10.38c0 .25.02.45.07.62c.05.12.12.28.21.46c.04.04.05.1.05.15c0 .07-.04.13-.13.2l-.42.28c-.06.04-.12.06-.17.06c-.07 0-.13-.04-.2-.1c-.09-.1-.17-.2-.24-.31c-.06-.11-.13-.24-.2-.39c-.52.61-1.17.92-1.96.92c-.56 0-1-.16-1.33-.48c-.32-.32-.49-.75-.49-1.29c0-.55.2-1 .6-1.36c.41-.34.95-.52 1.63-.52c.23 0 .44.02.71.06c.23.03.5.08.76.14v-.48c0-.51-.1-.84-.31-1.07c-.22-.21-.57-.3-1.08-.3c-.24 0-.48.03-.72.08c-.25.06-.49.13-.72.23c-.11.04-.2.07-.23.08c-.05.02-.08.02-.11.02c-.09 0-.14-.06-.14-.2v-.33c0-.1.01-.18.05-.23c.03-.05.09-.09.18-.12c.24-.14.51-.24.84-.32a3.9 3.9 0 0 1 1.04-.13c.79 0 1.37.18 1.74.54c.37.36.55.91.55 1.64v2.15h.02m-2.7 1.02c.22 0 .44-.04.68-.12c.24-.08.45-.23.63-.43c.11-.13.19-.27.25-.43c0-.16.05-.35.05-.58v-.27c-.2-.07-.4-.07-.62-.12a6.89 6.89 0 0 0-.62-.04c-.45 0-.77.09-.99.27c-.22.18-.32.43-.32.76c0 .32.07.56.24.71c.16.17.39.25.7.25m5.34.71a.58.58 0 0 1-.28-.06c-.03-.05-.08-.14-.12-.26L8.32 6.65c-.04-.15-.06-.22-.06-.27c0-.11.05-.17.16-.17h.65c.13 0 .22.02.26.07c.06.04.1.13.14.26l1.11 4.4l1.04-4.4c.03-.13.07-.22.13-.26c.05-.04.14-.07.25-.07h.55c.12 0 .21.02.26.07c.05.04.1.13.13.26L14 11l1.14-4.46c.04-.13.09-.22.13-.26c.06-.04.14-.07.26-.07h.62c.11 0 .17.06.17.17c0 .03-.01.07-.02.12c0 0-.02.08-.04.15l-1.61 5.14c-.04.14-.08.21-.15.26c-.04.04-.13.07-.24.07h-.57c-.13 0-.19-.02-.27-.07a.45.45 0 0 1-.12-.26L12.27 7.5l-1.03 4.28c-.03.13-.07.22-.12.27a.49.49 0 0 1-.27.06h-.57m8.55.18c-.33 0-.7-.04-1.03-.12c-.33-.08-.59-.17-.76-.26a.496.496 0 0 1-.21-.19a.392.392 0 0 1-.04-.18v-.34c0-.14.05-.2.15-.2h.12c.04 0 .1.05.17.08c.22.1.47.18.73.23c.27.05.54.08.79.08c.42 0 .75-.07.97-.22c.23-.17.35-.36.35-.63c0-.19-.07-.34-.18-.47c-.12-.12-.35-.24-.67-.34l-.97-.3c-.48-.16-.84-.38-1.06-.68a1.58 1.58 0 0 1-.33-.97c0-.28.06-.52.18-.73c.12-.22.28-.4.46-.55c.22-.15.44-.26.71-.34c.26-.08.54-.12.84-.12c.14 0 .29.01.45.03c.14.02.28.05.42.07c.14.04.26.07.38.11c.12.04.2.08.28.12c.09.05.16.1.2.16c.04.06.06.13.06.22v.32c0 .14-.05.21-.15.21c-.05 0-.14-.03-.26-.08c-.37-.17-.8-.26-1.27-.26c-.38 0-.66.06-.89.19c-.2.12-.31.32-.31.59c0 .19.07.35.2.47c.13.13.38.25.73.37l.95.3c.48.14.82.36 1.03.64c.2.27.3.58.3.93c0 .28-.06.54-.17.77c-.12.22-.28.42-.5.58c-.19.17-.44.29-.72.38c-.28.09-.62.13-.95.13m1.25 3.24C17.89 17.14 14.71 18 12 18c-3.85 0-7.3-1.42-9.91-3.77c-.21-.19-.02-.44.23-.29c2.82 1.63 6.29 2.62 9.89 2.62c2.43 0 5.1-.5 7.55-1.56c.37-.15.68.26.32.53M21 14.5c-.29-.37-1.86-.18-2.57-.1c-.21.03-.24-.16-.05-.3c1.25-.87 3.31-.6 3.54-.33c.24.3-.06 2.36-1.23 3.34c-.19.15-.36.07-.28-.11c.27-.68.86-2.16.59-2.5Z"/></svg>,
  title: "AWS",
  des: "Amazon's cloud computing platform offering  services for building, deploying, and managing applications in the cloud.",
  link : "https://aws.amazon.com/"



}





export default function Home() {
  return (
    <Layout> 
          <div className='w-3/5 mx-auto'>
              <div className="mb-10">
                  <div className="text-center mt-10">
                  <h1 className="font-bold text-5xl mb-4 border-b-2 border-purple inline-block ">Hey. Im Cary!</h1>
                    <div className="flex justify-center"> <img src="/title.svg" alt="My Icon" /></div>
                      <p className="text-xl mt-10 font-bold "> Welcome to my Portfolio! </p>
                      <p className="text-xl mt-2"> </p>
                      <p className="text-xl mt-2"> I am a recent first generation graduate from The University of California Berkeley </p>
                      <p className="text-xl mt-2">  </p>
                  </div>
              </div>
              <div className="createdusing rounded">
              <h1 className="font-bold text-2xl mb-2 text-center">Technologies used to build this portfolio</h1>
            <div className="border-b border-dashed mb-4"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                  <Technology  data={ts}></Technology>
                  <Technology  data={react}></Technology>
                  <Technology  data={tailwind}></Technology>
                  <Technology  data={next}></Technology>
                  <Technology  data={fontawesome}></Technology>
                  <Technology  data={aws}></Technology>
              </div>
              </div>
              <div className="cloud section mt-6">
              <h1 className="font-bold text-xl mb-2 text-center">AWS Architecture</h1>
              <div><img src="arch.png"></img></div>

              <div><p className="text-center">I built this portfolio alongside the cloud resume challenge, which helped me create a modern, cloud-hosted website using Amazon Web Services. Learn more about it <Link href={'/projects/portfolio'} className="text-purple">here</Link>.</p></div>
              </div>
          </div>
   </Layout>

  )
}
