import React from 'react';
import AssignmentTurnedInTwoToneIcon from '@material-ui/icons/Accessibility';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import AirlineSeatIndividualSuiteIcon from '@material-ui/icons/AirlineSeatIndividualSuite';
import HowToRegIcon from '@material-ui/icons/HowToReg';

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
    papers: {
        marginLeft: 'auto',
        background: 'transparent',
        marginRight: 'auto',
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(3),
            width: theme.spacing(26),
            height: theme.spacing(18),
        },
    }

}));


const General = () => {

    const classes = useStyles();

    return (
        <div>
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
                        var countryAtTarget;
                        var countryData;

                        for(var i in response.data.Countries){
                            if(Object.values(response.data.Countries[i]).includes( "South Africa")){
                                countryData = response.data.Countries[i];
                                var General = {
                                    positive: response.data.Countries[i].TotalConfirmed,
                                    recoveries: response.data.Countries[i].TotalRecovered,
                                    deaths: response.data.Countries[i].TotalDeaths,
                                }
                                console.log(countryData);
                            }
                        }

                        return (

                            <div className={classes.papers} style={{marginLeft: '27em', marginTop: '4em'}}>
                                <Paper variant="outlined">
                                    <AssignmentTurnedInTwoToneIcon style={{ fontSize: 45 }} />
                                    <h2>{General.positive} {'\n'}</h2>
                                    <h5>Tests Conducted</h5>
                                </Paper>
                                <Paper variant="outlined">
                                    <AddToQueueIcon style={{ fontSize: 45 }} />
                                    <h2>{General.positive} {'\n'}</h2>
                                    <h5>Positive Cases</h5>
                                </Paper>
                                <Paper variant="outlined">
                                    <HowToRegIcon style={{ fontSize: 45 }} />
                                    <h2>{General.recoveries} {'\n'}</h2>
                                    <h5>Recoveries</h5>
                                </Paper>
                                <Paper variant="outlined">
                                    <AirlineSeatIndividualSuiteIcon style={{ fontSize: 45 }} />
                                    <h2>{General.deaths} {'\n'}</h2>
                                    <h5>Deaths</h5>
                                </Paper>

                            </div>
                        )
                    }
                    return (<div>The request has not been made as yet.</div>)
                }}

            </Get>
        </div>
    )
}

export default  General;



