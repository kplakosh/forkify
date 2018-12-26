import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
    const key = '39ad21d0719c6401ffd743ecd7c541ee';
    try {
        const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
        this.result = res.data.recipes;
        // console.log(this.result);
    } catch (error) {
        alert(error);
    }
}
}

