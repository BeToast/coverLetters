import Photo from 'components/Photo'
import Title from 'components/Title'
import Text from 'components/Text'
import WidthGrow from 'components/WidthGrow';
import Hr from 'components/Hr';
import Signature from 'components/Signature';

// scroll  handler
import dynamic from 'next/dynamic'
const DynamicScrollHandler = dynamic(() => import('components/ScrollHandler'),{
  ssr: false,
});

export default function Template() {
  const mainId = "template"
  return (<>
    <main id={mainId} className='flex flex-wrap justify-center items-center h-full'>
      <div className='flex flex-wrap items-center mr-[50px]'>
        <div className='w-[400px]'>
          <Photo />
        </div>
        <div className='ml-10 h-[587px] w-[500px]'>
          <WidthGrow>
            <div className='flex flex-col justify-center h-full'>
              <div className='w-[500px]'>
                <Title>
                  Meet your new developer 😉
                </Title>
                <Hr className='my-6'/>
                <Text.Frame>
                  <Text.Greeting>
                    Hello Portershed!
                  </Text.Greeting>
                  <Text.P>
                    I, Blake Preston, recently finished my studies in Computer Science and Information Technology at the University of Galway. Over the summer, I applied my knowledge and learned how to develop full-stack web apps with Next.js, React, Tailwindcss and Firebase Hosting. I just finished my first freelance project as a web developer for Soma Co-working Moycullen. <Text.Link noP={true} href='https://somacowork.ie/'>https://somacowork.ie/</Text.Link>
                  </Text.P>
                  <Text.P>
                    Free-lance development is fine, but I would much prefer to start my career with a company in a thriving environment like the Portershed. I would bring value to your company by either integrating into your team of developers or by offering a fresh perspective to revamp and modernize your existing solutions.
                  </Text.P>
                </Text.Frame>
              </div>
              <div className='flex w-[500px] items-center justify-between pt-8'>
                <Text.Frame>
                  <Text.Link
                    href='https://drive.google.com/file/d/1XuhAnWxb-Rg4Q3mBLxxKbghDf-1J13Xr/view'
                  >
                    view my CV
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
                    href='tel:+353-85-260-9548'
                  >
                    085-260-9548
                  </Text.Link>
                  <Text.Link
                    href='mailto:blake.m.preston@gmail.com'
                  >
                    blake.m.preston@gmail.com
                  </Text.Link>
                </Text.Frame>
                <Signature>
                  I look forward to meeting you,
                </Signature>
              </div>
            </div>
          </WidthGrow>
        </div>
      </div>
    </main>
    

    <DynamicScrollHandler mainId={mainId}/>
  </>)
}
