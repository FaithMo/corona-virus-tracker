import React from 'react';
import { Chart } from "react-google-charts";
import {Get} from "react-axios";
import {makeStyles} from "@material-ui/core/styles";
import Mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';


import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) =>({
    network: {
        marginTop: '12em',
    },
    btn: {
        border: '1px solid darkorange',
        borderRadius: '40px',
    },
    charts: {
        backgroundColor: 'transparent'

    },
}));


const LineGraph = () => {

    const classes = useStyles();



    // var Land = new Mapboxgl.MercatorCoordinate(0.5, 0.5, 0);
    // var countryAtTarget = new Mapboxgl.LngLat(2739503.093741, -3430902.289809);

    return (
        <div>
            <Get url='https://covid-za-api.herokuapp.com/cases/timeline/tests'>
                {(error, response, isLoading, makeRequest) => {
                    if(error) {
                        return (
                            <div className={classes.network}>
                                There is some {"\n"} {error.message} {"\n"}
                                <button className={classes.btn}
                                        onClick={() => makeRequest({ params: { reload: true } })}>
                                    Retry
                                </button>
                            </div>
                        )
                    }
                    else if(isLoading) {
                        return (<div>Loading...</div>)
                    }
                    else if(response !== null) {

                        const index = response.data.length;
                        // console.log(index)
                        console.log(response.data[index -1].cumulative_tests)
                        const Tests = {
                            tests: response.data[index-1].cumulative_tests,
                            dead: response.data[index - 1].deaths,
                            critical: response.data[index -1].critical_icu,
                            hospitalised: response.data[index - 1].hospitalisation,
                            recovered: response.data[index - 1].recovered,
                        }
                        console.log(response.data[index -1] );



                        return (

                            <div style={{width: '30em'}}>
                                weellllllll......
                            </div>




                            // <div>
                            //     <Chart
                            //         width={'500px'}
                            //         height={'300px'}
                            //         chartType="GeoChart"
                            //         data={[
                            //             ['Country', 'Cases'],
                            //             ['Gauteng', 200],
                            //             ['Western Cape', 300],
                            //             ['Kwazulu Natal', 400],
                            //             ['Western Cape', 500],
                            //             ['Limpopo', 600],
                            //             ['Mpumalanga', 700],
                            //         ]}
                            //         // Note: you will need to get a mapsApiKey for your project.
                            //         // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
                            //         mapsApiKey="AIzaSyCNHKD8afFhPtZ0P4wAdvtfVK4zYN9Iw58"
                            //         rootProps={{ 'data-testid': '1' }}
                            //     />
                            // </div>
                        )
                    }
                    return (<div>The request has not been made as yet.</div>)
                }}

            </Get>
        </div>
    )
}

export default  LineGraph;


