// Global app controller

import axios from 'axios';

async function getResults(query) {
    const key = '39ad21d0719c6401ffd743ecd7c541ee';
    try {
        const result = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`);
        const recipes = result.data.recipes;
        console.log(recipes);
    } catch(error) {
        alert(error);
    }
}

getResults('pizza');

// https://www.food2fork.com/api/search
// 39ad21d0719c6401ffd743ecd7c541ee

