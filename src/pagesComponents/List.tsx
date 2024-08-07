'use client';

import ChampionCard from '@/components/ChampionCard';
import { getAllChampions } from '@/requests/lolRequests';
import { AllChampionsReturn } from '@/types/championReturn';
import { Box, Grid, GridItem, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const ListComponent = () => {
  const [data, setData] = useState<AllChampionsReturn | null>(null);
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
    <Box width="100%" p={[2, 4, 6]}>
      <Heading textAlign='center' mb={4}>Champions:</Heading>
      <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
        gap={6}
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




