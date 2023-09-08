import Image from 'next/image';

import signature from 'public/signature.webp'


const Signature: React.FC<{
  
}> = ({
  
}) => {
  return(<>
    <Image
      className='pt-10 pb-1'
      width={200}
      height={54}
      src={signature} 
      alt={''}
      priority={true}
    />
  </>);
}

export default Signature;