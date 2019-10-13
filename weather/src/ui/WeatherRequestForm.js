import React from 'react'
import {Field, Form, reduxForm} from "redux-form";
import {Button} from "./Button";
import WeatherInfo from "./WeatherInfo";

let WeatherRequestForm = (props) => {
    const {handleSubmit, getCurrentWeatherTC, setCityTitle} = props

    return (
        <>
            {
            <Form onSubmit={handleSubmit(data => {
                    setCityTitle(data.city)
                    getCurrentWeatherTC(data.city)
                }
            )}>
                <Field name={'city'} component={'input'} placeholder={'Enter city'}>
                </Field>
                <Field name={'submitButton'} component={Button}>
                </Field>
            </Form>}
            {props.city.mainWeather ? <WeatherInfo {...props.city}/> : null}
        </>
    )
}

WeatherRequestForm = reduxForm({
    form: 'weather'
})(WeatherRequestForm)

export default WeatherRequestForm