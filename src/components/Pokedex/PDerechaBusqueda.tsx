import React, { FC } from 'react';
import { useEffect, useState } from 'react';
import { Pokemon } from './../../../src/type';

import axios from 'axios';


type PDerechaBusquedaParams = {
    searchNumber: string,
    setSearchNumber: React.Dispatch<React.SetStateAction<string>>,
    setPost: React.Dispatch<React.SetStateAction<Pokemon | null>>,

    Pokedata: {
        name: string;
        height: number;
        weight: number;
    },
    setPokedata: React.Dispatch<React.SetStateAction<{
        name: string;
        height: number;
        weight: number;
    }>>,
}



const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];


const PDerechaBusqueda: FC<PDerechaBusquedaParams> = ({
    searchNumber,
    setSearchNumber,
    setPost,
    Pokedata,
    setPokedata }) => {

    useEffect(() => {
        enterNumber();
    }, []);

    function NumberX(number: string) {
        setSearchNumber(prev => prev + number);
    };

    function cleanPokedex() {
        setSearchNumber("");
    };

    function enterNumber() {

        const fetchPokemon = `https://pokeapi.co/api/v2/pokemon/${searchNumber}`;

        if (searchNumber && !searchNumber.startsWith("0") && Number(searchNumber) < 950) {
            axios.get(fetchPokemon).then((response) => {
                setPost(response.data);
                setPokedata(response.data);
                console.log("PokeData" + Pokedata);
                setSearchNumber("");
            });
        } else {
            setSearchNumber("");
        }
    };




    return (
        <>

            <div className='poke-rigth-screen'>
                <h2>{searchNumber === "" ? "Digite números" : searchNumber}</h2>
            </div>

            <div className='poke-right-numbers'>
                <ul>
                    {numbers.map((values) => <li onClick={() => NumberX(values.toString())}><p>{values}</p></li>)}
                </ul>
            </div>

            <div className='poke-right-menu'>
                <ul>
                    <li onClick={enterNumber}><p>{'Buscar'}</p></li>
                    <li onClick={cleanPokedex}><p>Clean</p></li>
                </ul>
            </div>
        </>
    );

}

export default PDerechaBusqueda;