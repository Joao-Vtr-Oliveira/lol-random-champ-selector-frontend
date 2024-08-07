import { Box } from '@chakra-ui/react';
import { PageParams } from '../../../types/pageParams';
import { Metadata } from 'next';
import EditChampion from '@/pagesComponents/EditChampion';

export const metadata: Metadata = {
	title: 'Edit champion',
};

const EditChampionPage = ({ params }: PageParams) => {
	return (
		<Box
			display='flex'
			flexDirection='column'
			alignItems='center'
			justifyContent='center'
			minH='100vh'
			p={[4, 6, 8]}
		>
			<Box
				width={['100%', '90%', '80%', '70%']}
				maxW='container.lg'
				p={[2, 4]}
				borderRadius='md'
			>
				<EditChampion params={params} />
			</Box>
		</Box>
	);
};

export default EditChampionPage;
