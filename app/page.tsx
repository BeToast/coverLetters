import Photo from 'components/Photo'
import Title from 'components/Title'
import Text from 'components/Text'
import WidthGrow from 'components/WidthGrow';
import Hr from 'components/Hr';

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
        <div className='ml-10'>
          <WidthGrow>
            <div className='flex flex-col justify-between'>
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
              <div>

              </div>
            </div>
            
          </WidthGrow>
        </div>
        {/* <Hr className=' ml-[30px] w-[910px]'/> */}
      </div>
    </main>
    

    <DynamicScrollHandler mainId={mainId}/>
  </>)
}
