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
                  Meet your new developer
                </Title>
                <Hr className='my-6'/>
                <Text.Frame>
                  <Text.P>
                Lorem ipsum dolor sit amet, te vix lobortis reprimique, eam consul iisque omittam ut. Mel rebum imperdiet molestiae ex, labores offendit sed ut. Ei quem dicant apeirian sed, ne ius imperdiet cotidieque. Mei tantas doctus cu.
                  </Text.P>
                  <Text.P>
        Mea ex affert eirmod gloriatur. Possit definiebas has ut, vis ullum meliore referrentur in. Est dico veniam decore te, nonumes reformidans vel ut, no zril regione incorrupte per. Duo corpora ponderum id. Vix et docendi sensibus, et dolorem appetere reprehendunt eos, pri id inani denique.
                  </Text.P>
                </Text.Frame>
              </div>
              <div className='flex w-[500px] items-end justify-between pt-12 pb-1'>
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
