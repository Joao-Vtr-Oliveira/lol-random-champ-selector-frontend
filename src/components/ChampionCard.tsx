import { ChampionReturn } from '@/types/championReturn';
import { damageTypesArray, rolesArray } from '@/utils/championInfo';
import { createArray } from '@/utils/createArray';
import { specifChampionName } from '@/utils/specificChampioName';
import {
	Box,
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Heading,
	Img,
	Text,
	Tooltip,
	useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';

const ChampionCard = ({ champion }: { champion: ChampionReturn }) => {
	const roles = createArray(rolesArray, champion);
  const types = createArray(damageTypesArray, champion);

	const name = specifChampionName(champion.name);
	const link = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_0.jpg`;

	return (
		<Card
			p={[2, 4, 6]}
			maxW='md'
			mx='auto'
			borderWidth='1px'
			borderRadius='md'
		>
			<CardHeader textAlign='center'>
				{champion.nameBase !== '-' ? (
					<Link
						target='_blank'
						href={`https://www.leagueofgraphs.com/champions/builds/${champion.nameBase}`}
					>
						<Heading
							fontSize={['lg', 'xl', '2xl']}
							color='customPurple'
							_hover={{ textDecoration: 'underline' }}
						>
							{champion.name}
						</Heading>
					</Link>
				) : (
					<Heading
						fontSize={['lg', 'xl', '2xl']}
						color='customPurple'
					>
						{champion.name}
					</Heading>
				)}
			</CardHeader>
			<CardBody>
				{champion.nameBase !== '-' && (
					<Link
						target='_blank'
						href={`https://www.leagueofgraphs.com/champions/builds/${champion.nameBase}`}
					>
						<Img
							src={link}
							borderRadius='md'
							width='100%'
							height='auto'
							objectFit='cover'
							mb={4}
						/>
					</Link>
				)}
				<Box
					fontWeight='bold'
					textAlign='center'
					mt={2}
				>
					Roles: {roles.join(', ')}
				</Box>
				<Box
					fontWeight='bold'
					textAlign='center'
				>
					Types: {types.join(', ')}
				</Box>
				<Box
					fontWeight='bold'
					textAlign='center'
				>
					Range: {champion.ranged === true ? 'Ranged' : 'Melee'}
				</Box>
			</CardBody>
			<CardFooter>
			<Box margin='auto'>
          {champion.nameBase !== '-' && (
            <Link href={`/champion/${champion.nameBase}`}>
              <Button colorScheme='yellow'>Edit</Button>
            </Link>
          )}
        </Box>
			</CardFooter>
		</Card>
	);
};

export default ChampionCard;
