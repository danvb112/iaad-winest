import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './pages/Landing/Landing'
import WineForm from './pages/WineForm/WineForm'
import ListWines from './pages/ListWines/ListWines'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Landing} />
                <Route path='/wineForm' component={WineForm} />
                <Route path='/list-wine' component={ListWines} />
            </Switch>
        </BrowserRouter>
    )
}