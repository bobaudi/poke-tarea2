//Tabs componente
export type TabPanelProps =  {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export type Pokemon = {
    name: string;
    sprites: {
      other: {
        showdown: {
          front_default: string;
        };
      };
    };
    types: {
      slot: number;
      type: {
        name: string;
      };
    }[];
  }

export type PokemonData = {
  name: string;
  height: number;
  weight: number;
};
