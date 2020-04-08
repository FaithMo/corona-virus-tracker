import React from 'react';
import { Get } from 'react-axios';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) =>({
    // leftCnt: {
    //     marginLeft: '-100em',
    //     // width: '60px',
    //     // height: '90px',
    //     position: 'relative',
    // },
    // rightCnt: {
    //    marginRight: '-100em',
    //     // width: '60px',
    //     // height: '90px'
    // },
    network: {
        marginTop: '12em',
    },
    btn: {
        border: '1px solid darkorange',
        borderRadius: '40px',
    },
    paper: {
        fontSize: '0.7em',
        backgroundColor: 'grey',
        display: 'flex',
        '& > *': {
            margin: theme.spacing(5),
            width: theme.spacing(50),
            height: theme.spacing(74),
        },
    },
    leftPaper: {
        borderRadius: '30px',
        marginLeft: '24em',
        backgroundColor: 'darkgrey',
    },
    rightPaper: {
        borderRadius: '30px',
        backgroundColor: 'darkgrey',
    },
    h2: {
        color: 'black',
    },
}));

const Data = () => {

    const classes = useStyles();
    // key={object.Global, object.Countries, object.Date} data={object}
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
                    return (
                        <div className={classes.paper} >
                            <Paper className={classes.leftPaper} >
                                <h2 className={classes.h2} >GLOBAL</h2> <hr/>
                                <h4 style={{color:"red"}} >New Confirmed Cases</h4>
                                {JSON.stringify(response.data.Global.NewConfirmed)} <hr/>
                                <h4>Total Confirmed </h4>
                                {JSON.stringify(response.data.Global.TotalConfirmed)} <hr/>
                                <h4>New Deaths</h4>
                                {JSON.stringify(response.data.Global.NewDeaths)} <hr/>
                                <h4>Total Deaths</h4>
                                {JSON.stringify(response.data.Global.TotalDeaths)} <hr/>
                                <h4>New Recovered</h4>
                                {JSON.stringify(response.data.Global.NewRecovered)} <hr/>
                                <h4>Total Recovered </h4>
                                {JSON.stringify(response.data.Global.TotalRecovered)} <hr/>
                            </Paper>

                            <Paper className={classes.rightPaper}>
                                <h2 className={classes.h2} >
                                    {((JSON.stringify(response.data.Countries[205].Country)).toUpperCase()).slice(1, -1)} {"\n"}
                                    ( {JSON.stringify(response.data.Countries[205].CountryCode).slice(1, -1)} )
                                </h2>
                                 <hr/>
                                <h4 style={{color:"red"}} >Latest Confirmed</h4>
                                {JSON.stringify(response.data.Countries[205].NewConfirmed)} <hr/>
                                <h4>Total Confirmed</h4>
                                {JSON.stringify(response.data.Countries[205].TotalConfirmed)} <hr/>
                                <h4>New Deaths</h4>
                                {JSON.stringify(response.data.Countries[205].NewDeaths)} <hr/>
                                <h4>Total Deaths</h4>
                                {JSON.stringify(response.data.Countries[205].TotalDeaths)} <hr/>
                                <h4>New Recovered</h4>
                                {JSON.stringify(response.data.Countries[205].NewRecovered)} <hr/>
                                <h4>Total Recovered</h4>
                                {JSON.stringify(response.data.Countries[205].TotalRecovered)} <hr/>
                                <h4>Date</h4>
                                {JSON.stringify(response.data.Countries[205].Date).slice(1,-1)} <hr/>
                            </Paper>

                        </div>
                    )
                    // return (<div>{response.data} <button onClick={() => makeRequest({ params: { refresh: true } })}>Refresh</button></div>)
                }
                return (<div>The request has not been made as yet.</div>)
            }}

        </Get>
        {/*<TableContainer component={Paper}>*/}
        {/*    <Table className={classes.table} size="small" aria-label="a dense table">*/}
        {/*        <TableHead>*/}
        {/*            <TableRow>*/}
        {/*                <TableCell>Cases</TableCell>*/}
        {/*                <TableCell align="right">Calories</TableCell>*/}

        {/*            </TableRow>*/}
        {/*        </TableHead>*/}
        {/*        <TableBody>*/}
        {/*            {rows.map((row) => (*/}
        {/*                <TableRow key={row.name}>*/}
        {/*                    <TableCell component="th" scope="row">*/}
        {/*                        {row.name}*/}
        {/*                    </TableCell>*/}
        {/*                    <TableCell align="right">{row.calories}</TableCell>*/}
        {/*                </TableRow>*/}
        {/*            ))}*/}
        {/*        </TableBody>*/}
        {/*    </Table>*/}
        {/*</TableContainer>*/}
    </div>
    );

}

export default Data;
