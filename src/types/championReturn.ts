export type ChampionReturn = {
  name: string;
  top: boolean;
  jg: boolean;
  mid: boolean;
  adc: boolean;
  sup: boolean;
  ad: boolean;
  ap: boolean;
  tank: boolean;
  ranged: boolean;
  nameBase: string;
}

export type AllChampionsReturn = {
  result: ChampionReturn[];
}

export type Roles = 'top' | 'jg' | 'mid' | 'adc' | 'sup';
export type ChampionDamageType = 'ad' | 'ap' | 'tank';