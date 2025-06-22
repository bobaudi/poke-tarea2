import React, { useState, useEffect } from 'react';
import './style.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TableGrupo from './TablaGrupos';
import PantallaPokedex from './PantallaPokedex';
import PDerechaBusqueda from './PDerechaBusqueda';
import ExteriorButton from './ExtetiorButton';
import { TabPanelProps, Pokemon, PokemonData } from './../../../src/type';


function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


//Agregar Pokedata a tabla
function Pokedex() {
  const [searchNumber, setSearchNumber] = useState("1");
  const [value, setValue] = React.useState(0);
  const [post, setPost] = useState<Pokemon | null>(null);
  const [Pokedata, setPokedata] = useState({
    name: '',
    height: 0,
    weight: 0,
  });

  //Valor en las tabs
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


  const [Data, setData] = useState<PokemonData[]>([]);

  const agregarTabla = () => {
    const existe = Data.some(item => item.name === Pokedata.name);
    if (!existe) {
      setData([...Data, Pokedata]);
    } else {
      console.log("Ya existe");
    }
  };


  return (
    <>

      {/*Pantalla Izquierda*/}
      <div className='pokedex-wrap'>
        <div className='pokedex'>
          <div className='poke-left'>
            <div className="btn_agregar">
              <button className="btn-InsertarGrupo" onClick={agregarTabla}>+</button>
              <p>Agregar a tabla</p>
            </div>
            <PantallaPokedex post={post} />
          </div>

          <div className="separator"></div>

          {/*Pantalla Derecha*/}
          <div className='poke-right'>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Pokedex" {...a11yProps(0)} />
              <Tab label="Tabla" {...a11yProps(1)} />
            </Tabs>

            <CustomTabPanel value={value} index={0}>
              <PDerechaBusqueda
                searchNumber={searchNumber}
                setSearchNumber={setSearchNumber}
                setPost={setPost}
                setPokedata={setPokedata}
                Pokedata={Pokedata}
              />
            </CustomTabPanel>

            <CustomTabPanel value={value} index={1}>
              <TableGrupo
                Pokedata={Pokedata}
                Data={Data}
              />
            </CustomTabPanel>
          </div>

        </div>
        {/*<ExteriorButton setData={setData} Data={Data} Pokedata={Pokedata} / */}
      </div>
    </>
  );
}

export default Pokedex;
