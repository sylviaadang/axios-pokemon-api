import React from 'react';
import {useState} from 'react';

const Post = props => {

    const {pokemon} = props

    return (
        <div>
            <ul>
                {
                pokemon.map( (pokemon, i ) => {
                    return (
                    <li key={i}>{pokemon.name}</li>
                    )
                })
                }
            </ul>
        </div>
    )
}

export default Post
