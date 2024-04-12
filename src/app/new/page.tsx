import NewChampion from '@/pagesComponents/NewChampion';
import { Box } from '@chakra-ui/react';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'New Champion',
};

const NewChampionPage = () => {
  return(
    <Box className='flex h-5/6 flex-col items-center justify-center'>
      <NewChampion />
    </Box>
  )
};

export default NewChampionPage;