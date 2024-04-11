import { AllChampionsReturn } from '@/types/championReturn';

export const ping = async () => {
  try {
    const response = await fetch('http://localhost:80/ping/');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error: ', error);
    return null;
  }
}

export const getAllChampions = async () => {
  try {
    const response = await fetch('http://localhost:80/getAllChampions/');
    const data = await response.json();
    return data as AllChampionsReturn;
  } catch (error) {
    throw new Error(`Deu treta: ${error}`)
  }
}