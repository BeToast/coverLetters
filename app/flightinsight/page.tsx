import Photo from "components/Photo";
import Title from "components/Title";
import Text from "components/Text";
import AppearAffect from "components/AppearAffect";
import Hr from "components/Hr";
import Signature from "components/Signature";

// scroll  handler
import dynamic from "next/dynamic";
import { cvUrl } from "../static";
const DynamicScrollHandler = dynamic(() => import("components/ScrollHandler"), {
   ssr: false,
});

export default function Template() {
   const mainId = "template";

   return (
      <>
         <main
            id={mainId}
            className="flex flex-wrap justify-center items-center min-h-full w-[940px] max-w-full m-auto"
         >
            <div
               className={
                  "px-10 pt-12 pc:pt-0 pc:pl-10 pc:pr-0 pc:h-[650px] w-full pc:w-[540px] pc:order-last"
               }
            >
               <AppearAffect>
                  <div className="flex flex-col justify-center h-full">
                     <div className="pc:w-[500px]">
                        <Title>Hello Flight Insight!</Title>
                        <Hr className="my-6" />
                        <Text.Frame>
                           <Text.P>
                              I quite interested in the open full-stack position
                              at Flight Insight, which was brought to my
                              attention by Jeff Suderman. Having previously
                              worked at OpenJaw Tech, a major player in airline
                              booking systems, I have relevant industry
                              experience and believe I would be a strong
                              cultural fit for your organization. Jeff has been
                              an exceptional mentor, and his recommendation of
                              Flight Insight speaks volumes about the company's
                              values and culture.
                           </Text.P>
                           <Text.P>
                              As a dedicated full-stack developer, I have
                              demonstrated success in building and deploying web
                              applications. While I will need to transition to
                              Flight Insight's specific technology stack using
                              Laravel and Angular, my coding philosophy aligns
                              well with enterprise development needs. I
                              prioritize writing concise, high-quality code,
                              believing that investing time upfront in clarity
                              and reusability leads to more maintainable systems
                              and accelerates development in the long term.
                           </Text.P>
                           <Text.P>
                              I would love to meet you all and discuss how I
                              could benefit Flight Insight.
                           </Text.P>
                        </Text.Frame>
                     </div>
                     <div className="flex flex-wrap pc:w-[500px] items-end justify-between pt-12 pb-1">
                        <div className="pr-8">
                           <Text.Frame>
                              <Text.Link href={cvUrl}>view my Resume</Text.Link>
                              <Text.Link href="https://github.com/BeToast">
                                 view my Github
                              </Text.Link>
                              <Text.Link href="https://www.linkedin.com/in/blake-m-preston/">
                                 view my Linkedin
                              </Text.Link>
                              <Text.Link href="tel:+1-970-404-2475">
                                 970-404-2475
                              </Text.Link>
                              <Text.Link href="mailto:blake.m.preston@gmail.com">
                                 blake.m.preston@gmail.com
                              </Text.Link>
                           </Text.Frame>
                        </div>
                        <div className="mt-12">
                           <Signature>All the best,</Signature>
                        </div>
                     </div>
                  </div>
               </AppearAffect>
            </div>

            <div className="mt-16 pc:mt-0 w-[400px] ">
               <Photo />
            </div>
         </main>

         <DynamicScrollHandler mainId={mainId} />
      </>
   );
}
