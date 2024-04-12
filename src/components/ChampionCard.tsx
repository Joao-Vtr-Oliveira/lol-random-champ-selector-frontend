import { ChampionDamageType, ChampionReturn, Roles } from '@/types/championReturn';
import { createArray } from '@/utils/createArray';
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Heading } from '@chakra-ui/react';
import Link from 'next/link';

const ChampionCard = ({ champion }: { champion: ChampionReturn }) => {
  const rolesArray: Roles[] = ['top', 'jg', 'mid', 'adc', 'sup'];
  const damageTypes: ChampionDamageType[] = ['ad', 'ap', 'tank'];
  
  const roles = createArray(rolesArray, champion);
  const types = createArray(damageTypes, champion);

	return (
		<Card display={'flex'} mb={10} flexDirection={'column'}>
			<CardHeader textAlign='center'>
        <Link target='_blank' href={`https://www.leagueofgraphs.com/champions/builds/${champion.nameBase}`}>
				  <Heading fontSize='2xl' color='#570FA0' _hover={{'textDecoration': 'underline'}}>{champion.name}</Heading>
        </Link>
			</CardHeader>
			<CardBody>
				<Box fontWeight='bold' textAlign='center'>Roles: {roles.join(', ')}</Box>
				<Box fontWeight='bold' textAlign='center'>Types: {types.join(', ')}</Box>
				<Box fontWeight='bold' textAlign='center'>Range: {champion.ranged === true ? 'Ranged' : 'Melee'}</Box>
			</CardBody>
      <CardFooter>
        <Box margin='auto'>
          <Link href={`/champion/${champion.nameBase}`}>
            <Button colorScheme='yellow'>Edit</Button>
          </Link>
        </Box>
      </CardFooter>
		</Card>
	);
};

export default ChampionCard;
