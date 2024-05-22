import Random from '@/pagesComponents/Random';
import url from '@/utils/pickEnvVar';
import { Box } from '@chakra-ui/react';
import { Metadata } from 'next';


export const metadata: Metadata = {
	title: 'Random Champion',
};


const RandomPage = () => {
  console.log(url);

  return(
    <Box className='flex h-5/6 flex-col items-center '>
      <Random />
    </Box>
  )
};

export default RandomPage;