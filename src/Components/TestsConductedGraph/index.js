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
                        // console.log(index)
                       console.log(response.data[index -1].cumulative_tests)
                        const Tests = {
                            tests: response.data[index-1].cumulative_tests,
                            dead: response.data[index - 1].deaths,
                            critical: response.data[index -1].critical_icu,
                            hospitalised: response.data[index - 1].hospitalisation,
                            recovered: response.data[index - 1].recovered,
                        }
                        console.log(response.data[index -1] )


                        return (

                            <div>
                                <Chart
                                    width={'600px'}
                                    height={'23em'}
                                    chartType="BarChart"
                                    loader={<div>Loading Chart</div>}
                                    data={[
                                        [
                                            'Element',
                                            'Cases',
                                            { role: 'style' },
                                            {
                                                sourceColumn: 0,
                                                role: 'annotation',

                                            },
                                        ],
                                        // ['Tests Conducted', parseInt(Tests.tests), 'color: #e5e4e2', null],
                                        ['Hospitalised', parseInt(Tests.hospitalised), '#1c8283', null],
                                        ['Critical', parseInt(Tests.critical), 'silver', null],
                                        ['Deaths', parseInt(Tests.dead), '#77837f', null],
                                        ['Recovered', parseInt(Tests.recovered), '#e5e4e2', null],

                                    ]}
                                    options={{
                                        title: `Latest tests conducted: ${Tests.tests}`,
                                        width: 450,
                                        height: 305,
                                        bar: { groupWidth: '95%' },
                                        legend: { position: 'none' },
                                        animation: {
                                            startup: true,
                                            easing: 'linear',
                                            duration: 1000,
                                        },
                                    }}
                                    // For tests
                                    rootProps={{ 'data-testid': '6' }}
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


