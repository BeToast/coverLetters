import Photo from 'components/Photo'
import Title from 'components/Title'
import Text from 'components/Text'
import AppearAffect from 'components/AppearAffect';
import Hr from 'components/Hr';
import Signature from 'components/Signature';

// scroll  handler
import dynamic from 'next/dynamic'
const DynamicScrollHandler = dynamic(() => import('components/ScrollHandler'),{
  ssr: false,
});

export default function Template() {
  const mainId = "template";

  return (<>
    <main id={mainId} className='flex flex-wrap justify-center items-center min-h-full max-w-full'>
    </main>
    

    <DynamicScrollHandler mainId={mainId}/>
  </>)
}
