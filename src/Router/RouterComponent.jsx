
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import App from './../App';
import BookModal from '../Modal/BookModal';
import Dashboard from '../dashboard/Dashboard';

export default function RouterComponent(){
    return(
        <>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/books" component={Dashboard}/>
                <Route exact path="/book" component={BookModal}/>
            </Switch>
        </>
    );
}