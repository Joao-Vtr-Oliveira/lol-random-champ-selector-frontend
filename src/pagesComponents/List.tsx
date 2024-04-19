'use client';

import ChampionCard from '@/components/ChampionCard';
import { getAllChampions } from '@/requests/lolRequests';
import { AllChampionsReturn } from '@/types/championReturn';
import { Box, Grid, GridItem, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const ListComponent = () => {
	const [data, setData] = useState<AllChampionsReturn | null>();
	const [changeInfo, setChangeInfo] = useState<Boolean | 'error'>(false);

	const makeRequest = async () => {
		try {
			const info = await getAllChampions();
			setData(info);
		} catch (error) {
			setChangeInfo('error');
		}
	};

	useEffect(() => {
		makeRequest();
	}, []);

	if (!data && changeInfo === 'error') return <h1>Internal Error</h1>;
	if (!data && changeInfo === false) return <h1>Loading</h1>;

	return (
		<Box>
			<Heading textAlign='center'>Champions:</Heading>
			<Grid
				templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
				gap={[0, 20]}
				mt={10}
				mb={10}
			>
				{data?.result.map((champ) => (
					<GridItem key={champ.nameBase}>
						<ChampionCard champion={champ} />
					</GridItem>
				))}
			</Grid>
		</Box>
	);
};

export default ListComponent;
