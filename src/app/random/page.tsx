import Random from '@/pagesComponents/Random';
import { Box } from '@chakra-ui/react';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Random Champion',
};

const RandomPage = () => {
  return(
    <Box className='flex h-5/6 flex-col items-center justify-center'>
      <Random />
    </Box>
  )
};

export default RandomPage;