'use client';

import { getRandomAgent } from '@/requests/valorantRequests';
import { AgentReturn } from '@/types/agentReturn';
import { agentBase } from '@/utils/agentInfo';
import toastHelper from '@/utils/toastHelper';
import AgentCard from '@/components/AgentCard'
import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Select,
	Text,
	useToast,
} from '@chakra-ui/react';
import { useState } from 'react';

const RandomAgent = () => {
	const [agent, setAgent] = useState<AgentReturn>(agentBase);
	const [role, setRole] = useState('');

	const toast = useToast();

	const fetchAgent = async () => {
		try {
			const data = await getRandomAgent({ role });
			if (data) setAgent(data);
		} catch (error) {
			toast(toastHelper('notFound'));
			setAgent(agentBase);
		}
	};

	return (
		<Box p={5}>
			<Heading textAlign='center' mb={5}>
				Random Agent
			</Heading>
			<Text textAlign='center' margin='auto' w={['70%', '60%', '55%']} mb={5}>
				This page returns a random agent using the selected info provided
				bellow. You can select a specif role if you want.
				Or, you can select the default value if you do not have preference
			</Text>
			<Box mt={20}>
				<Flex flexWrap='wrap' alignItems='center' justifyContent='center'>
					<Box flex='1' minW='350px' maxW='450px' m={2}>
						<AgentCard agent={agent} />
					</Box>
					<Box flex='1' maxW='300px' m={2}>
						<FormControl>
							<FormLabel textAlign='center'>Role</FormLabel>
							<Select
								placeholder='Select the champion role'
								textAlign='center'
								value={role}
								_focus={{ textColor: '#000' }}
								onChange={(e) => setRole(e.target.value)}
							>
								<option value='controller'>Controller</option>
								<option value='duelist'>Duelist</option>
								<option value='initiator'>Initiator</option>
								<option value='sentinel'>Sentinel</option>
							</Select>
						</FormControl>
						<Flex justifyContent='center' mt={5}>
							<Button onClick={fetchAgent} colorScheme='teal'>
								Search
							</Button>
						</Flex>
					</Box>
				</Flex>
			</Box>
		</Box>
	);
};

export default RandomAgent;
