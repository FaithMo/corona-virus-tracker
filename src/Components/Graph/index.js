
//                     <Animation />

import * as React from "react";
import { Chart } from "react-google-charts";
import {Get} from "react-axios";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>({
    network: {
        marginTop: '12em',
    },
    btn: {
        border: '1px solid darkorange',
        borderRadius: '40px',
    },
    charts: {
        width: '30em',
        height: '20em',
    },
    chart1: {
        marginLeft: '0em',
        display: 'flex',
    },
    chart2: {
        marginLeft: '35em',
        display: 'flex',
        top: '0px'
        // marginBottom: '0em',
     },
    chart3: {
        marginLeft: '70em',
    },
    // chart1: {
    //     marginLeft: '0em',
    // },
    // chart1: {
    //     marginLeft: '0em',
    // },
    // chart1: {
    //     marginLeft: '0em',
    // }

}));

const ExampleChart = () => {
    const classes = useStyles();

    return (
        <div >
            <Get url='https://api.covid19api.com/summary'>
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

                        const countryAtTarget = ((JSON.stringify(response.data.Countries[205].Country)).toUpperCase()).slice(1, -1);
                        const global = "GLOBAL";


                        const totalConfirmed = JSON.stringify(response.data.Global.TotalConfirmed);
                        const newConfirmed = JSON.stringify(response.data.Global.NewConfirmed);
                        const totalDeaths = JSON.stringify(response.data.Global.TotalDeaths);
                        const newDeaths = JSON.stringify(response.data.Global.NewDeaths);
                        const totalRecovered = JSON.stringify(response.data.Global.TotalRecovered);
                        const newRecovered = JSON.stringify(response.data.Global.NewRecovered);

                        const countryTotalConfirmed = JSON.stringify(response.data.Countries[205].TotalConfirmed);
                        const countryNewConfirmed = JSON.stringify(response.data.Countries[205].NewConfirmed);
                        const countryTotalDeaths = JSON.stringify(response.data.Countries[205].TotalDeaths);
                        const countryNewDeaths = JSON.stringify(response.data.Countries[205].NewDeaths);
                        const countryTotalRecovered = JSON.stringify(response.data.Countries[205].TotalRecovered);
                        const countryNewRecovered = JSON.stringify(response.data.Countries[205].NewRecovered);

                        return (


                            <div className={classes.charts}>
                            <Chart
                                className={classes.chart1}
                                chartType="Bar"
                                loader={<div>Loading Chart</div>}
                                data={[
                                    ['Cases', global, countryAtTarget],
                                    ['Total Confirmed', totalConfirmed , countryTotalConfirmed],
                                ]}
                                options={{
                                    chart: {
                                        title: 'Global Cases vs South African Cases',
                                    },
                                }}
                                // For tests
                                rootProps={{ 'data-testid': '2' }}
                            />
                                <Chart
                                    className={classes.chart2}
                                    chartType="Bar"
                                    loader={<div>Loading Chart</div>}
                                    data={[
                                        ['Cases', global, countryAtTarget],
                                        ['New Confirmed', newConfirmed, countryNewConfirmed],
                                    ]}
                                    options={{
                                        chart: {
                                            title: 'Global Cases vs South African Cases',
                                        },
                                    }}
                                    // For tests
                                    rootProps={{ 'data-testid': '2' }}
                                />

                                <Chart
                                    className={classes.chart3}
                                    chartType="Bar"
                                    loader={<div>Loading Chart</div>}
                                    data={[
                                        ['Cases', global, countryAtTarget],
                                        ['Total Deaths', totalDeaths, countryTotalDeaths],
                                    ]}
                                    options={{
                                        chart: {
                                            title: 'Global Cases vs South African Cases',
                                        },
                                    }}
                                    // For tests
                                    rootProps={{ 'data-testid': '2' }}
                                />
                                <Chart
                                    className={classes.chart4}
                                    chartType="Bar"
                                    loader={<div>Loading Chart</div>}
                                    data={[
                                        ['Cases', global, countryAtTarget],
                                        ['New Deaths', newDeaths, countryNewDeaths],
                                    ]}
                                    options={{
                                        chart: {
                                            title: 'Global Cases vs South African Cases',
                                        },
                                    }}
                                    // For tests
                                    rootProps={{ 'data-testid': '2' }}
                                />
                                <Chart
                                    className={classes.chart5}
                                    chartType="Bar"
                                    loader={<div>Loading Chart</div>}
                                    data={[
                                        ['Cases', global, countryAtTarget],
                                        ['Total Recovered', totalRecovered, countryTotalRecovered],
                                    ]}
                                    options={{
                                        chart: {
                                            title: 'Global Cases vs South African Cases',
                                        },
                                    }}
                                    // For tests
                                    rootProps={{ 'data-testid': '2' }}
                                />
                                <Chart
                                    className={classes.chart6}
                                    chartType="Bar"
                                    loader={<div>Loading Chart</div>}
                                    data={[
                                        ['Cases', global, countryAtTarget],
                                        ['New Recovered', newRecovered, countryNewRecovered],
                                    ]}
                                    options={{
                                        chart: {
                                            title: 'Global Cases vs South African Cases',
                                        },
                                    }}
                                    // For tests
                                    rootProps={{ 'data-testid': '2' }}
                                />

                            </div>
                        )

                    }
                    return (<div>The request has not been made as yet.</div>)
                }}
            </Get>
        </div>


    );
};
export default ExampleChart;
