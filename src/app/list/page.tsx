import ListComponent from '@/pagesComponents/List';
import { Box } from '@chakra-ui/react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'List of champions',
};

export default function List() {
  return (
    <Box className='flex min-h-screen flex-col items-center justify-center p-4'>
      <ListComponent />
    </Box>
  );
}
