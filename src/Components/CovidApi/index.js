import React from 'react';
import { Get } from 'react-axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tests from '../TestsConductedGraph/';

import LineGraph from '../LineGraph';


const useStyles = makeStyles((theme) =>({
    network: {
        marginTop: '12em',
    },
    btn: {
        border: '1px solid darkorange',
        borderRadius: '40px',
    },
    graphs: {
        fontSize: '0.5em',
        display: 'flex',
        '& > *': {
            margin: theme.spacing(20),
            width: theme.spacing(30),
            height: theme.spacing(78),
        },
        marginLeft: '2em'

    },
    leftPaper: {
        // borderRadius: '30px',
        marginLeft: '17em',
        backgroundColor: 'darkgrey',
    },
    rightPaper: {
        // borderRadius: '30px',
        backgroundColor: 'darkgrey',
    },
    // testsGraph: {
    //     margin
    // }
}));

const Data = () => {

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
                    // console.log(response.data.Countries[204].Country)
                    var countryAtTarget;
                    var countryData;
                    for(var i in response.data.Countries){
                        if(Object.values(response.data.Countries[i]).includes( "South Africa")){
                            countryData = response.data.Countries[i];
                            countryAtTarget = ((JSON.stringify(response.data.Countries[i].Country)).toUpperCase()).slice(1, -1);
                            console.log(countryAtTarget);
                            console.log(countryData);
                        }
                    }
                    const global = "GLOBAL";
                    return (
                        <div >
                            <h3 style={{color: "white"}} >Table showing details of cases in {countryAtTarget} and {global} cases</h3>
                            <div className={classes.graphs}
                                 style={{display:'flex', flexDirection:'row', marginTop: '6em'}} >
                                {/*<div className={classes.paper} >*/}

                                {/*    <Paper className={classes.leftPaper} >*/}
                                {/*        <h2 className={classes.h2} >GLOBAL</h2> <hr/>*/}
                                {/*        <h4 style={{color:"red"}} >New Confirmed Cases</h4>*/}
                                {/*        {JSON.stringify(response.data.Global.NewConfirmed)} <hr/>*/}
                                {/*        <h4>Total Confirmed </h4>*/}
                                {/*        {JSON.stringify(response.data.Global.TotalConfirmed)} <hr/>*/}
                                {/*        <h4>New Deaths</h4>*/}
                                {/*        {JSON.stringify(response.data.Global.NewDeaths)} <hr/>*/}
                                {/*        <h4>Total Deaths</h4>*/}
                                {/*        {JSON.stringify(response.data.Global.TotalDeaths)} <hr/>*/}
                                {/*        <h4>New Recovered</h4>*/}
                                {/*        {JSON.stringify(response.data.Global.NewRecovered)} <hr/>*/}
                                {/*        <h4>Total Recovered </h4>*/}
                                {/*        {JSON.stringify(response.data.Global.TotalRecovered)}*/}
                                {/*    </Paper>*/}

                                {/*    <Paper className={classes.rightPaper}>*/}
                                {/*        <h2 className={classes.h2} > {countryAtTarget} </h2>*/}
                                {/*        <hr/>*/}
                                {/*        <h4 style={{color:"red"}} >Latest Confirmed</h4>*/}
                                {/*        {JSON.stringify(countryData.NewConfirmed)} <hr/>*/}
                                {/*        <h4>Total Confirmed</h4>*/}
                                {/*        {JSON.stringify(countryData.TotalConfirmed)} <hr/>*/}
                                {/*        <h4>New Deaths</h4>*/}
                                {/*        {JSON.stringify(countryData.NewDeaths)} <hr/>*/}
                                {/*        <h4>Total Deaths</h4>*/}
                                {/*        {JSON.stringify(countryData.TotalDeaths)} <hr/>*/}
                                {/*        <h4>New Recovered</h4>*/}
                                {/*        {JSON.stringify(countryData.NewRecovered)} <hr/>*/}
                                {/*        <h4>Total Recovered</h4>*/}
                                {/*        {JSON.stringify(countryData.TotalRecovered)}*/}
                                {/*    </Paper>*/}

                                {/*</div>*/}
                                <div className={classes.newGraph}>
                                    <LineGraph/>
                                </div>
                                <div className={classes.testsGraph}>
                                    <Tests/>
                                </div>
                            </div>

                        </div>

                    )
                    // return (<div>{response.data} <button onClick={() => makeRequest({ params: { refresh: true } })}>Refresh</button></div>)
                }
                return (<div>The request has not been made as yet.</div>)
            }}
        </Get>
    </div>
    );
}

export default Data;
