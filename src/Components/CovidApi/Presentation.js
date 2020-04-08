import React from 'react';
import Index from './index';

const DataAPI = () =>{
    const API = 'https://api.covid19api.com/summary';
    const API2 = 'https://api.covid19api.com/';

    const apiURLs = {
        API
    }
    return (
        <Index api={apiURLs} />
    )
}
