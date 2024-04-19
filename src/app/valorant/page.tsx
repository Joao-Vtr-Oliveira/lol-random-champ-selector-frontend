import RandomAgent from '@/pagesComponents/RandomValorant';
import { Box } from '@chakra-ui/react';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Valorant | Random Agent',
};

const RandomPage = () => {
  return(
    <Box className='flex h-5/6 flex-col items-center '>
      <RandomAgent />
    </Box>
  )
};

export default RandomPage;