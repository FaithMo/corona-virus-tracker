import React from 'react';
import { Chart } from "react-google-charts";
import {Get} from "react-axios";
import {makeStyles} from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) =>({
    network: {
        marginTop: '12em',
    },
    btn: {
        border: '1px solid darkorange',
        borderRadius: '40px',
    },
    lineGraph: {
        width: '8em',

    },
}));


const LineGraph = () => {

    const classes = useStyles();

    return (
        <div>
            <Get url='https://covid-za-api.herokuapp.com/cases/timeline/provincial/cumulative'>
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
                        //TRUSTED DATA
                        // console.log(response.data[index - 1].total)
                        // select the last element and push it into a new storage
                        // use the storage to pull the specific data
                        const index = response.data.length;

                        const Provinces = {
                            free_state: parseInt(response.data[index - 1].provinces.free_state),
                            gauteng: parseInt(response.data[index - 1].provinces.gauteng),
                            north_west: parseInt(response.data[index - 1].provinces.north_west),
                            northern_cape: parseInt(response.data[index - 1].provinces.northern_cape),
                            western_cape: parseInt(response.data[index - 1].provinces.western_cape),
                            eastern_cape: parseInt(response.data[index - 1].provinces.eastern_cape),
                            kwazulu_natal: parseInt(response.data[index - 1].provinces.kwazulu_natal),
                            limpopo: parseInt(response.data[index - 1].provinces.limpopo),
                            mpumalanga: parseInt(response.data[index - 1].provinces.mpumlanga),
                            unknown: parseInt(response.data[index - 1].provinces.unknown),
                        }

                        return (

                            <Paper className={classes.lineGraph}>
                                {/*<hr/>*/}
                                <div className={classes.charts}>
                                    <Chart
                                        width={'600px'}
                                        height={'23em'}
                                        chartType="LineChart"
                                        loader={<div>Loading Chart</div>}
                                        data={[
                                            ['x', 'Province Rate'],
                                            ['Gauteng',  Provinces.gauteng],
                                            ['Western-Cape', Provinces.western_cape],
                                            ['Kwazulu-Natal',  Provinces.kwazulu_natal],
                                            ['Eatern-Cape', Provinces.eastern_cape],
                                            ['Free State', Provinces.free_state],
                                            ['Limpopo', Provinces.limpopo],
                                            ['Mpumalanga', Provinces.mpumalanga],
                                            ['North-West', Provinces.north_west],
                                            ['unknown', Provinces.unknown],
                                            ['Northen-Cape',  Provinces.northern_cape],
                                        ]}
                                        options={{
                                            hAxis: {
                                                title: 'Provinces',
                                            },
                                            vAxis: {
                                                title: 'Cases',
                                            },
                                            series: {
                                                1: { curveType: 'function' },
                                            },
                                            animation: {
                                                startup: true,
                                                easing: 'linear',
                                                duration: 1000,
                                            },
                                            enableInteractivity: false
                                        }}


                                        rootProps={{ 'data-testid': '2' }}
                                    />
                                </div>
                            </Paper>
                        )
                    }
                    return (<div>The request has not been made as yet.</div>)
                }}

            </Get>
        </div>
    )
}

export default  LineGraph;


