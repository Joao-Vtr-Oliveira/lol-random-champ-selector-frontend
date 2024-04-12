'use client';

import ChampionCard from '@/components/ChampionCard';
import { getRandomChampion } from '@/requests/script';
import { ChampionReturn } from '@/types/championReturn';
import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Heading,
	Select,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';

const championBase: ChampionReturn = {
	name: 'Name of the champion',
	nameBase: '-',
	top: false,
	jg: false,
	mid: false,
	adc: false,
	sup: false,
	ad: false,
	ap: false,
	tank: false,
	ranged: false,
};

const Random = () => {
	const [champion, setChampion] = useState<ChampionReturn>(championBase);
	const [role, setRole] = useState('');
	const [type, setType] = useState('');
	const [range, setRange] = useState('');

  const toast = useToast();

	const fetchChampion = async () => {
    try{
      const data = await getRandomChampion({ role, type, range });
      console.log(data);
      if (data) setChampion(data);
    } catch (error) {
      toast({
        title: 'No champion found!',
        description: 'Please, check your requirements',
        status: 'error',
        duration: 5000,
        isClosable: true
      });
      setChampion(championBase);
    }
	};

	return (
		<Box>
			<Heading textAlign='center' mb={10}>
				Random Champion:
			</Heading>
			<Box display='flex'>
				<Box mr={10} w={250}>
					<ChampionCard champion={champion} />
				</Box>

				<Box>
					<FormControl mb={5}>
						<FormLabel textAlign='center'>Role</FormLabel>
						<Select
							bg='white'
							textColor='black'
							placeholder='Select the champion role'
							textAlign='center'
							value={role}
							onChange={(e) => setRole(e.target.value)}
						>
							<option value='top'>Top</option>
							<option value='jg'>Jg</option>
							<option value='mid'>Mid</option>
							<option value='adc'>Adc</option>
							<option value='sup'>Sup</option>
						</Select>
					</FormControl>
					<FormControl mb={5}>
						<FormLabel textAlign='center'>Type</FormLabel>
						<Select
							bg='white'
							textColor='black'
							placeholder='Select the champion type'
							textAlign='center'
							value={type}
							onChange={(e) => setType(e.target.value)}
						>
							<option value='ad'>AD</option>
							<option value='ap'>AP</option>
							<option value='tank'>Tank</option>
						</Select>
					</FormControl>
					<FormControl mb={5}>
						<FormLabel textAlign='center'>Range</FormLabel>
						<Select
							bg='white'
							textColor='black'
							placeholder='Select the champion range'
							textAlign='center'
							value={range}
							onChange={(e) => setRange(e.target.value)}
						>
							<option value='ranged'>Ranged</option>
							<option value='melee'>Melee</option>
						</Select>
					</FormControl>
					<Box display='flex' justifyContent='center'>
						<Button onClick={fetchChampion} colorScheme='green'>
							Search
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Random;
