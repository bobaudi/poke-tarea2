import {useState, useEffect} from "react";
import React, {FC} from 'react';
import {Pokemon} from'./../../../src/type';

import axios from 'axios';


type PantallaPokedexParams ={
  post: Pokemon | null,
}


const PantallaPokedex: FC<PantallaPokedexParams> = ({
    post}) => {

    return(
        <>
             <div className='poke-left-screen-img'>
              <img src={post?.sprites?.other.showdown.front_default} />
            </div>

            <div className='pokedex-data'>
              <div className='poke-left-screen-name'>
                <h2>{post?.name}</h2>
              </div>

              <div className='poke-left-screen-type'>

                <h2>{post?.types?.[0]?.type?.name}</h2>
              </div>
            </div>
        </>
    );
}

export default PantallaPokedex;