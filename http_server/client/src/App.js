import React, {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Layout from './hoc/Layout/Layout'
import ChatList from './containers/ChatList/ChatList'

export default class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path={"/"} component={ChatList}/>
                    <Redirect to="/"/>
                </Switch>
            </Layout>
        )
    }
}
