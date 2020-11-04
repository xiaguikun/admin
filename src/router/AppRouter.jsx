import React from 'react';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'

import {Home} from '../home/index.js';

import Welcome from '../page/welcome/Welcome.jsx';
import Buttons from '../page/ui/Button.jsx';


const AppRouter = () => {
    return (
        <BrowserRouter>
                <Switch>
                    <Redirect from='/' to='/admin' exact></Redirect>
                    <Route path='/admin' component={()=><Home>
                        <Switch>
                            <Redirect from='/admin' to='/admin/home' exact></Redirect>
                            <Route path='/admin/home' component={Welcome}></Route>
                            <Route path='/admin/ui/buttons' component={Buttons}></Route>
                        </Switch>
                    </Home>}>
                        
                    </Route>
                </Switch>
        </BrowserRouter>
    );
}

export default AppRouter;