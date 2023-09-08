import Photo from 'components/Photo'
import Title from 'components/Title'
import Text from 'components/Text'
import WidthGrow from 'components/WidthGrow';

// scroll  handler
import dynamic from 'next/dynamic'
const DynamicScrollHandler = dynamic(() => import('components/ScrollHandler'),{
  ssr: false,
});

export default function Template() {
  const mainId = "template"
  // return (<>
  //   <main id={mainId} className='flex justify-center items-center p-10 pt-36'>
  //     <div className='relative w-4/5 p-20 bg-blue-300'>
  //       <div className="static p-10 bg-slate-200 translate-x-0 overflow-hidden">
  //         <p>Static parent</p>
  //         <div className="absolute p-6 bg-slate-400 left-0">
  //           <p>Absolute child</p>
  //         </div>
  //       </div>
  //     </div>
  //   </main>
  // </>)
  return (<>
    <main id={mainId} className='flex justify-center items-center p-10 pt-36'>
      <div className="relative w-[150px] h-[150px] m-[30px]">
        <div className="absolute top-0 left-0 w-full h-full bg-suit-lightest opacity-75 z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-suit-darker opacity-75 z-10"></div>
      </div>
    </main>
  </>)
}
