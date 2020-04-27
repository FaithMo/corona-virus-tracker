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
    charts: {
        backgroundColor: 'transparent'

    },
}));


const LineGraph = () => {

    const classes = useStyles();

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
                        console.log(index)
                       console.log(response.data[index -1].cumulative_tests)
                        const Tests = {
                            tests: response.data[index-1].cumulative_tests,
                            dead: response.data[index - 1].deaths,
                        }
                        console.log(Tests.dead)


                        return (

                            <div>
                                <Chart
                                    width={'500px'}
                                    height={'300px'}
                                    chartType="AreaChart"
                                    loader={<div>Loading Chart</div>}
                                    data={[
                                        ['Style', 'Critical', 'Hospitalised', 'Dead', 'Tests'],
                                        ['//Start - march', 5.2, 3.6, Tests.dead, 700],
                                        ['Mid - March', 5.6, 4.0, 2.8, 3],
                                        ['End - March', 7.2, 2.2, 2.2, 6.0],
                                        ['April', 8.0, 1.7, 0.8, 4.0],
                                    ]}
                                    options={{
                                        isStacked: 'relative',
                                        height: 360,
                                        legend: { position: 'top', maxLines: 3 },
                                        vAxis: {
                                            minValue: 0,
                                            ticks: [100, 300, 600, 900, 1200, 1500],
                                        },
                                    }}
                                    rootProps={{ 'data-testid': '2' }}
                                />
                            </div>
                        )
                    }
                    return (<div>The request has not been made as yet.</div>)
                }}

            </Get>
        </div>
    )
}

export default  LineGraph;


