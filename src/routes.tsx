import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './pages/Landing/Landing'
import WineForm from './pages/WineForm/WineForm'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Landing} />
                <Route path='/wineForm' component={WineForm} />
            </Switch>
        </BrowserRouter>
    )
}