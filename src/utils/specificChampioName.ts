export const specifChampionName = (name: string) => {
  switch(name) {
    case "Bel'Veth":
      return 'Belveth';
    case "Cho'Gath":
      return 'Chogath';
    case "Kai'Sa":
      return 'Kaisa';
    case "Kha'Zix":
      return 'Khazix';
    case "LeBlanc":
      return 'Leblanc';
    case 'Nunu & Willump':
      return 'Nunu';
    case 'Renata Glasc':
      return 'Renata';
    case "Vel'Koz":
      return 'Velkoz';
    case "Wukong":
      return 'MonkeyKing';
  }
  
  name = name.replace(' ', '').replace("'", '').replace('.', '');

  return name;
}