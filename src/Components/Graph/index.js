
//                     <Animation />

import * as React from "react";
import { Chart } from "react-google-charts";
import {Get} from "react-axios";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>({
    network: {
        marginTop: '12em',
    },
    btn: {
        border: '1px solid darkorange',
        borderRadius: '40px',
    },
    charts:{
        width: '4em',
    },
    chartsFirstThree: {
        // width: '4em',
        // height: '5em',
        display: 'flex',
        flexDirection: "row",
        // justifyContent: 'space-between',
        '& > *': {
            margin: theme.spacing(6),
            width: theme.spacing(20),
            height: theme.spacing(24),
        },
    },
    chartsSecondThree: {
        // width: '4em',
        // height: '5em',
        display: 'flex',
        flexDirection: "row",
        // justifyContent: 'space-between',
        '& > *': {
            margin: theme.spacing(6),
            width: theme.spacing(20),
            height: theme.spacing(24),
        },
    },
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

                            <paper>
                                <h3 style={{color: "white"}}>Graphs showing the scale of {countryAtTarget} towards {global} cases </h3>
                                {/*<hr/>*/}
                                <div className={classes.charts}>
                                    <div className={classes.chartsFirstThree}>
                                        <Chart
                                            className={classes.chart1}
                                            chartType="Bar"
                                            loader={<div>Loading Chart</div>}
                                            data={[
                                                ['Cases', countryAtTarget, global],
                                                ['Total Confirmed', countryTotalConfirmed, totalConfirmed ],

                                            ]}
                                            // For tests
                                            rootProps={{ 'data-testid': '2' }}
                                        />
                                        <Chart
                                            className={classes.chart2}
                                            chartType="Bar"
                                            loader={<div>Loading Chart</div>}
                                            data={[
                                                ['Cases', countryAtTarget, global],
                                                ['New Confirmed',  countryNewConfirmed, newConfirmed],

                                            ]}
                                            // For tests
                                            rootProps={{ 'data-testid': '2' }}
                                        />

                                        <Chart
                                            className={classes.chart3}
                                            chartType="Bar"
                                            loader={<div>Loading Chart</div>}
                                            data={[
                                                ['Cases',countryAtTarget, global],
                                                ['Total Deaths',countryTotalDeaths, totalDeaths],
                                            ]}
                                            // For tests
                                            rootProps={{ 'data-testid': '2' }}
                                        />
                                    </div>
                                    <div className={classes.chartsSecondThree}>
                                        <Chart
                                            chartType="Bar"
                                            loader={<div>Loading Chart</div>}
                                            data={[
                                                ['Cases', countryAtTarget,  global],
                                                ['New Deaths', countryNewDeaths,  newDeaths],
                                            ]}
                                            // For tests
                                            rootProps={{ 'data-testid': '2' }}
                                        />
                                        <Chart
                                            chartType="Bar"
                                            loader={<div>Loading Chart</div>}
                                            data={[
                                                ['Cases', countryAtTarget, global],
                                                ['Total Recovered', countryTotalRecovered, totalRecovered],
                                            ]}
                                            // For tests
                                            rootProps={{ 'data-testid': '2' }}
                                        />
                                        <Chart
                                            chartType="Bar"
                                            loader={<div>Loading Chart</div>}
                                            data={[
                                                ['Cases', countryAtTarget,  global],
                                                ['New Recovered', countryNewRecovered, newRecovered],
                                            ]}
                                            // For tests
                                            rootProps={{ 'data-testid': '2' }}
                                        />
                                    </div>
                                </div>
                            </paper>

                        )

                    }
                    return (<div>The request has not been made as yet.</div>)
                }}
            </Get>
        </div>


    );
};
export default ExampleChart;
