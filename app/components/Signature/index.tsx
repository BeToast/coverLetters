import Image from 'next/image';

import Text from 'components/Text';

import signature from 'public/signature.webp'


const Signature: React.FC<{
  children: React.ReactNode,
}> = ({
  children,
}) => {
  return(<>
    <div className='relative flex flex-col space-y-2'>
      <div className='italic'>
        <Text.Frame>
          <Text.Closing>
            {children}
          </Text.Closing>
        </Text.Frame>
      </div>
      <Image
        className='pt-1'
        width={200}
        height={54}
        src={signature} 
        alt={''}
        priority={true}
      />
    </div>
  </>);
}

export default Signature;