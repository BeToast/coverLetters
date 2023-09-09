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
      <div className='flex justify-center items-center mr-[50px]'>
        <div className='w-[400px]'>
          {/* <WidthGrow> */}
            <Photo />
          {/* </WidthGrow> */}
        </div>
        <div className='ml-10 h-[587px]'>
          <WidthGrow>
            <div className='flex flex-col justify-center h-full'>
              <div className='w-[500px]'>
                <Title>
                  Meet your new mixologist.
                </Title>
                <Hr className='my-6'/>
                <Text.Frame>
                  <Text.Greeting>
                    Hyia,
                  </Text.Greeting>
                  <Text.P>
                    I, Blake Preston, would like to apply for a position at your new location in Galway city. Due to my bartending experience in the States, which has a refined cocktail market, I would be a valuable asset to your mixologist team. Alternatively, I would be content as a server or barista.
                  </Text.P>
                  <Text.P>
                    I hope to join your team soon and help bring your vision for this new establishment to life.
                  </Text.P>
                </Text.Frame>
              </div>
              <div className='flex w-[500px] items-end justify-between pt-12 pb-1'>
                <Text.Frame>
                  <Text.Link
                    href='https://drive.google.com/file/d/1Q2k9S-p9mIgeMlnbA1m2c_bNc6tfcomL/view?usp=sharing'
                  >
                    view my CV
                  </Text.Link>
                  <Text.Link
                    href='https://www.linkedin.com/in/blake-m-preston/'
                  >
                    view my Linkedin
                  </Text.Link>
                </Text.Frame>
                <Signature>
                  All the best,
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
