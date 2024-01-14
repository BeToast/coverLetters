import Photo from 'components/Photo'
import Title from 'components/Title'
import Text from 'components/Text'
import AppearAffect from 'components/AppearAffect';
import Hr from 'components/Hr';
import Signature from 'components/Signature';

// scroll  handler
import dynamic from 'next/dynamic'
import { cvUrl } from '../static';
const DynamicScrollHandler = dynamic(() => import('components/ScrollHandler'), {
   ssr: false,
});

export default function Template() {
   const mainId = "mitchandco";

   return (<>
      <main id={mainId} className='flex flex-wrap justify-center items-center min-h-full w-[940px] max-w-full m-auto'>
         <div className={'px-10 pt-12 pc:pt-0 pc:pl-10 pc:pr-0 pc:h-[670px] w-full pc:w-[540px] pc:order-last'}>
            <AppearAffect>
               <div className='flex flex-col justify-center h-full'>
                  <div className='pc:w-[500px]'>
                     <Title>
                        Meet your new Associate IT Consultant
                     </Title>
                     <Hr className='my-6' />
                     <Text.Frame>
                        <Text.Greeting>
                           Hello Mitchell and Co!
                        </Text.Greeting>
                        <Text.P>
                           I, Blake Preston, recently finished my studies in Computer Science and Information Technology at the National University of Ireland, Galway. I am eager to begin my career after relocating to Basalt on January 31st.
                        </Text.P>
                        <Text.P>
                           I firmly believe that the foundation of relationships lies in personal interaction, trust, and effective communication. My technical mind and strong interpersonal skills make me an ideal consultant for Mitchell and Company. Among my peers, I am known for my honesty, reliability and punctuality.
                        </Text.P>
                     </Text.Frame>
                  </div>
                  <div className='flex flex-wrap pc:w-[500px] items-end justify-between pt-12 pb-1'>
                     <div className='pr-8'>
                        <Text.Frame>
                           <Text.Link
                              href={cvUrl}
                           >
                              view my Resume
                           </Text.Link>
                           <Text.Link
                              href='https://github.com/BeToast'
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
                              760-902-3792
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
                           I hope to hear from you soon,
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
