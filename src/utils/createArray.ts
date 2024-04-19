import { AgentReturn, AgentRole } from '@/types/agentReturn';
import { ChampionDamageType, ChampionReturn, Roles } from '@/types/championReturn';

export const createArray = (preset: Roles[] | ChampionDamageType[], champion: ChampionReturn) => {
  const array = [];
  for (let i = 0; i < preset.length; i++) {
    if(champion[preset[i]]) array.push(preset[i]);
  }
  return array;
}

export const createAgentArray = (preset: AgentRole[], champion: AgentReturn) => {
  const array = [];
  for (let i = 0; i < preset.length; i++) {
    if(champion[preset[i]]) array.push(preset[i]);
  }
  return array;
}