import { AllChampionsReturn, ChampionDamageType, ChampionReturn, Roles } from '@/types/championReturn';

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
    throw new Error(`Deu treta: ${error}`);
  }
}

export const getRandomChampion = async ({
  role,
  type,
  range,
}: {
  role?: string;
  type?: string;
  range?: string;
}): Promise<ChampionReturn | null> => {
  try {
    const formData = new URLSearchParams();
    if(role) formData.append('role', role);
    if(type) formData.append('type', type);
    if(range) formData.append('ranged', range === 'ranged' ? 'true' : 'false');
    
    const response = await fetch('http://localhost:80/getRandomChampion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    });
    const data: AllChampionsReturn = await response.json();
    if(data.result.length === 0) throw new Error('Champion not found');
    return data.result[0] as ChampionReturn;
  } catch(error) {
    console.log(`Error: `, error);
    throw new Error('An error ocurred');
  }
}


export const addChampion = async (champion: ChampionReturn) => {
  let role = '';
  let damage = '';
  const rolesBase: Roles[] = ['top', 'jg', 'mid', 'adc', 'sup'];
  const damagesBase: ChampionDamageType[] = ['ad', 'ap', 'tank'];

  try {

    for(let i = 0; i < rolesBase.length; i++) {
      if(champion[rolesBase[i]]) role += `${rolesBase[i]},`;
    }

    for(let i = 0; i < damagesBase.length; i++) {
      if(champion[damagesBase[i]]) damage += `${damagesBase[i]},`;
    }

    const formData = new URLSearchParams();
    formData.append('name', champion.name);
    formData.append('nameBase', champion.nameBase);
    formData.append('role', role);
    formData.append('type', damage);
    formData.append('ranged', champion.ranged === true ? 'true' : 'false');

    const response = await fetch('http://localhost:80/addNewChampion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    });
    const data = await response.json();
    return data as {status: string; newChampion: ChampionReturn};
  } catch (error) {
    console.log(`Error: `, error);
    throw new Error('An error ocurred');
  }
}

export const getSpecificChampion = async (championBaseName: string) => {
  try {
    const formData = new URLSearchParams();
    formData.append('nameBase', championBaseName);
    const response = await fetch('http://localhost:80/getSpecifChampion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    });
    const data = await response.json();
    return data as ChampionReturn;
  } catch(error) {
    console.log(error);
    throw new Error('an error ocurred');
  }
}


export const deleteChampion = async (championName: string) => {
  try {
    const formData = new URLSearchParams();
    formData.append('name', championName);
    const response = await fetch('http://localhost:80/deleteChampion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    });
    const data = await response.json();
    return data as {status: string; message: string};
  } catch(error) {
    console.log(error);
    throw new Error('an error ocurred');
  }
}

export const updateChampion = async (champion: ChampionReturn) => {
  let role = '';
  let damage = '';
  const rolesBase: Roles[] = ['top', 'jg', 'mid', 'adc', 'sup'];
  const damagesBase: ChampionDamageType[] = ['ad', 'ap', 'tank'];

  try {

    for(let i = 0; i < rolesBase.length; i++) {
      if(champion[rolesBase[i]]) role += `${rolesBase[i]},`;
    }

    for(let i = 0; i < damagesBase.length; i++) {
      if(champion[damagesBase[i]]) damage += `${damagesBase[i]},`;
    }

    const formData = new URLSearchParams();
    formData.append('name', champion.name);
    formData.append('nameBase', champion.nameBase);
    formData.append('role', role);
    formData.append('type', damage);
    formData.append('ranged', champion.ranged === true ? 'true' : 'false');

    const response = await fetch('http://localhost:80/updateChampion', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    });
    const data = await response.json();
    return data as {status: string; newChampion: ChampionReturn};
  } catch (error) {
    console.log(`Error: `, error);
    throw new Error('An error ocurred');
  }
}