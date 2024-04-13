import { Box } from '@chakra-ui/react';
import { PageParams } from '../../../types/pageParams';
import { Metadata } from 'next';
import EditChampion from '@/pagesComponents/EditChampion';

export const metadata: Metadata = {
	title: 'Edit champion',
};

const EditChampionPage = ({ params }: PageParams) => {
	return (
		<Box className='flex h-5/6 flex-col items-center justify-center'>
			<EditChampion params={params} />
		</Box>
	);
};

export default EditChampionPage;
