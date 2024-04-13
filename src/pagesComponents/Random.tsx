'use client';

import ChampionCard from '@/components/ChampionCard';
import { getRandomChampion } from '@/requests/script';
import { ChampionReturn } from '@/types/championReturn';
import toastHelper from '@/utils/toastHelper';
import {
  Box,
  Button,
  Flex,
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
    try {
      const data = await getRandomChampion({ role, type, range });
      if (data) setChampion(data);
    } catch (error) {
      toast(toastHelper('notFound'));
      setChampion(championBase);
    }
  };

  return (
    <Box p={5}>
      <Heading textAlign="center" mb={5}>
        Random Champion
      </Heading>
      <Flex flexWrap="wrap" justifyContent="center">
        <Box flex="1" minW='200px' maxW="300px" m={2}>
          <ChampionCard champion={champion} />
        </Box>
        <Box flex="1" maxW="300px" m={2}>
          <FormControl>
            <FormLabel textAlign="center">Role</FormLabel>
            <Select
              placeholder="Select the champion role"
              textAlign="center"
              value={role}
							_focus={{'textColor': '#000'}}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="top">Top</option>
              <option value="jg">Jg</option>
              <option value="mid">Mid</option>
              <option value="adc">Adc</option>
              <option value="sup">Sup</option>
            </Select>
          </FormControl>
          <FormControl mt={3}>
            <FormLabel textAlign="center">Type</FormLabel>
            <Select
              placeholder="Select the champion type"
              textAlign="center"
              value={type}
							_focus={{'textColor': '#000'}}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="ad">AD</option>
              <option value="ap">AP</option>
              <option value="tank">Tank</option>
            </Select>
          </FormControl>
          <FormControl mt={3}>
            <FormLabel textAlign="center">Range</FormLabel>
            <Select
              placeholder="Select the champion range"
              textAlign="center"
              value={range}
              onChange={(e) => setRange(e.target.value)}
							_focus={{'textColor': '#000'}}
            >
              <option value="ranged">Ranged</option>
              <option value="melee">Melee</option>
            </Select>
          </FormControl>
          <Flex justifyContent="center" mt={5}>
            <Button onClick={fetchChampion} colorScheme="teal">
              Search
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Random;
