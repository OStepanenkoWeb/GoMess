import React from 'react'
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Layout from './hoc/Layout/Layout'
import ChatList from './containers/ChatList/ChatList'

function App() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={ChatList}/>
                </Switch>
            </Router>
        )
}
export default App
