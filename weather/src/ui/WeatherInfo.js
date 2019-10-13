import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

let WeatherInfo = (props) => {
    const getTempInCelsius = (temp) => Math.floor((temp - 273.15) * 10) / 10
    const useStyles = makeStyles(theme => ({
        root: {
            width: '300px',
            display: 'inline-block'
        },
    }));
    const classes = useStyles();

    return (

        <Paper className={classes.root}>
            <Typography  component="h3">
                {props.title}
            </Typography>
            <Typography  component="p">
                Temperature: {getTempInCelsius(props.mainWeather.temp)} &deg;C
            </Typography>
            <Typography component="p">
                Humidity: {props.mainWeather.humidity} %
            </Typography>
            <Typography component="p">
                Pressure: {props.mainWeather.pressure} hPa
            </Typography>
        </Paper>
    )
}

export default WeatherInfo