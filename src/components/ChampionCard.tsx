import { ChampionReturn } from '@/types/championReturn';
import { damageTypesArray, rolesArray } from '@/utils/championInfo';
import { createArray } from '@/utils/createArray';
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Heading } from '@chakra-ui/react';
import Link from 'next/link';

const ChampionCard = ({ champion }: { champion: ChampionReturn }) => {  
  const roles = createArray(rolesArray, champion);
  const types = createArray(damageTypesArray, champion);

	return (
		<Card display={'flex'} mb={10} flexDirection={'column'}>
			<CardHeader textAlign='center'>
        {champion.nameBase !== '-' &&
        <Link target='_blank' href={`https://www.leagueofgraphs.com/champions/builds/${champion.nameBase}`}>
				  <Heading fontSize='2xl' color='customPurple' _hover={{'textDecoration': 'underline'}}>{champion.name}</Heading>
        </Link>
        }
        {champion.nameBase === '-' &&
				  <Heading fontSize='2xl' color='customPurple'>{champion.name}</Heading>
        }
			</CardHeader>
			<CardBody>
				<Box fontWeight='bold' textAlign='center'>Roles: {roles.join(', ')}</Box>
				<Box fontWeight='bold' textAlign='center'>Types: {types.join(', ')}</Box>
				<Box fontWeight='bold' textAlign='center'>Range: {champion.ranged === true ? 'Ranged' : 'Melee'}</Box>
			</CardBody>
      <CardFooter>
        <Box margin='auto'>
          {champion.nameBase !== '-' &&
          <Link href={`/champion/${champion.nameBase}`}>
            <Button colorScheme='yellow'>Edit</Button>
          </Link>
          }
        </Box>
      </CardFooter>
		</Card>
	);
};

export default ChampionCard;
