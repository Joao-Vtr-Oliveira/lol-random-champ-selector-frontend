import { ChampionDamageType, ChampionReturn, Roles } from '@/types/championReturn';

export const rolesArray: Roles[] = ['top', 'jg', 'mid', 'adc', 'sup'];
export const damageTypesArray: ChampionDamageType[] = ['ad', 'ap', 'tank'];

export const championBase: ChampionReturn = {
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

export const championEmptyBase: ChampionReturn = {
  name: '',
  nameBase: '',
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