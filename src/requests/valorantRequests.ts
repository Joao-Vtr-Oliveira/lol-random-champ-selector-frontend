import { AgentReturn } from '@/types/agentReturn';
import url from '@/utils/pickEnvVar';
import dotenv from 'dotenv';

dotenv.config();

const urlValorant = `${url}/valorant`;

export const getAllAgents = async () => {
	try {
		const response = await fetch(`${urlValorant}/getAllAgents`);
		const data = await response.json();
		return data as { agents: AgentReturn[] };
	} catch (error) {
		throw new Error(`Error: ${error}`);
	}
};

export const getRandomAgent = async ({role}: {role?: string}): Promise<AgentReturn | null> => {
	try {
		const formData = new URLSearchParams();
		if (role) formData.append('role', role);

		const response = await fetch(`${urlValorant}/getRandomAgent`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: formData,
		});
		const data: {result: AgentReturn[]} = await response.json();
		if (data.result.length === 0) throw new Error('Agent not found');
		return data.result[0] as AgentReturn;
	} catch (error) {
		console.log(`Error: `, error);
		throw new Error('An error ocurred');
	}
};

export const addNewAgent = async (name: string, role: string) => {
	try {
		const formData = new URLSearchParams();
		formData.append('name', name);
		formData.append('role', role);

		const response = await fetch(`${urlValorant}/addNewAgent`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: formData,
		});
		const data = await response.json();
		return data as { status: string; newAgent: AgentReturn };
	} catch (error) {
		console.log(`Error: `, error);
		throw new Error('An error ocurred');
	}
};


export const deleteAgent = async (agentName: string) => {
	try {
		const formData = new URLSearchParams();
		formData.append('name', agentName);
		const response = await fetch(`${urlValorant}/deleteAgent`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: formData,
		});
		const data = await response.json();
		return data as { status: string; message: string };
	} catch (error) {
		console.log(error);
		throw new Error('an error ocurred');
	}
};
