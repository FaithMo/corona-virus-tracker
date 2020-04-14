import React from 'react';
import { Get } from 'react-axios';
import Index from './index';
import Paper from "@material-ui/core/Paper";

// const Data = () => {
//     <Get url='https://api.covid19api.com/summary'>
//         {(error, response) => {
//             //if(error) {
//
//             const err = {error.message}
//
//             //}else {
//             const global = {response.data.Global}
//             const southAfrica = {response.data.Countries}
//             //}
//         }}
//     </Get>
// }




export const apiData = [
    {
        year: '1970', saudiArabia: 241.142, usa: 482.150, iran: 230.174, mexico: 23.640, price: 17, consumption: 570,
    }, {
        year: '1980', saudiArabia: 511.334, usa: 437.343, iran: 75.097, mexico: 108.249, price: 104, consumption: 630,
    }
];

// export default Data;


