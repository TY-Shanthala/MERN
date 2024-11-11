import React from 'react'
import { useRouteError } from 'react-router-dom'

function ErrorPage() {
    const error = useRouteError();
    console.log(error, "error from useRouteError")
    return (
        <div>
            <h1>OOPS!!!</h1>
            <h3>{error.status}</h3>
            <p>{ error.statusText}</p>
        </div>
    )
}

export default ErrorPage