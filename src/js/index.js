// Global app controller

import string from './models/Search';
// import {add as a , multiply, ID} from './view/searchView';
import * as searchView from './view/searchView';

console.log(` Using imported functions ${searchView.add(searchView.ID, 2)} and ${searchView.multiply(3,5)}. ${string}`);