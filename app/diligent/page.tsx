import Photo from 'components/Photo'
import Title from 'components/Title'
import Text from 'components/Text'
import AppearAffect from 'components/AppearAffect';
import Hr from 'components/Hr';
import Signature from 'components/Signature';

import { cvUrl } from '../static';

// scroll  handler
import dynamic from 'next/dynamic'
const DynamicScrollHandler = dynamic(() => import('components/ScrollHandler'), {
   ssr: false,
});

export default function Template() {
   const mainId = "diligent";

   return (<>
      <main id={mainId} className='flex flex-wrap justify-center items-center min-h-full w-[940px] max-w-full m-auto'>
         <div className={'px-10 pt-12 pc:pt-0 pc:pl-10 pc:pr-0 pc:h-[620px] w-full pc:w-[540px] pc:order-last'}>
            <AppearAffect>
               <div className='flex flex-col justify-center h-full'>
                  <div className='pc:w-[500px]'>
                     <Title>
                        Meet your new developer 😉
                     </Title>
                     <Hr className='my-6' />
                     <Text.Frame>
                        <Text.Greeting>
                           Hello Diligent!
                        </Text.Greeting>
                        <Text.P>
                           I, Blake Preston, recently finished studying Computer Science and Information Technology at the University of Galway. Over the summer, I applied my knowledge and learned how to develop full-stack web apps with Next.js, React, Tailwind, Firestore and Firebase Hosting. I just finished my first freelance project as a web developer for Soma Co-working Moycullen, Galway <Text.Link noP={true} href='https://somacowork.ie/'>https://somacowork.ie/</Text.Link> Currenly, I am working on a church website template which statically generates routes and pages from markdown files using Next.js, Tailwindcss, and Firebase <Text.Link noP={true} href='https://github.com/BeToast/hillside.ie'>https://github.com/BeToast/hillside.ie</Text.Link>.
                        </Text.P>
                        <Text.P>
                           This coverletter is made with HTML5, CSS3, Tailwind, TypeScript JavaScript and hosted with Firebase Hosting.
                        </Text.P>
                     </Text.Frame>
                  </div>
                  <div className='flex flex-wrap pc:w-[500px] items-end justify-between pt-8 pb-1'>
                     <div className='pr-8'>
                        <Text.Frame>
                           <Text.Link
                              href='https://drive.google.com/file/d/1XuhAnWxb-Rg4Q3mBLxxKbghDf-1J13Xr/view'
                           >
                              view my CV
                           </Text.Link>
                           <Text.Link
                              href={cvUrl}
                           >
                              view my Github
                           </Text.Link>
                           <Text.Link
                              href='https://www.linkedin.com/in/blake-m-preston/'
                           >
                              view my Linkedin
                           </Text.Link>
                           <Text.Link
                              href='tel:+1-760-902-3792'
                           >
                              +1 760-902-3792
                           </Text.Link>
                           <Text.Link
                              href='mailto:blake.m.preston@gmail.com'
                           >
                              blake.m.preston@gmail.com
                           </Text.Link>
                        </Text.Frame>
                     </div>
                     <div className='mt-12'>
                        <Signature>
                           I hope to chat soon,
                        </Signature>
                     </div>
                  </div>
               </div>
            </AppearAffect>
         </div>

         <div className='mt-16 pc:mt-0 w-[400px] '>
            <Photo />
         </div>
      </main>


      <DynamicScrollHandler mainId={mainId} />
   </>)
}
