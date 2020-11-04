import React from 'react';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'

import {Home} from '../home/index.js';

import Welcome from '../page/welcome/Welcome.jsx';
import Buttons from '../page/ui/Button.jsx';
import Modals from '../page/ui/Modals.jsx';
import Spin from '../page/ui/Spin.jsx';
import Notification from '../page/ui/Notification.jsx';
import Messages from '../page/ui/Messages.jsx';
import Tabs from '../page/ui/Tabs.jsx'
import Gallery from '../page/ui/Gallery.jsx'


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
                            <Route path='/admin/ui/modals' component={Modals}></Route>
                            <Route path='/admin/ui/loadings' component={Spin}></Route>
                            <Route path='/admin/ui/notification' component={Notification}></Route>
                            <Route path='/admin/ui/messages' component={Messages}></Route>
                            <Route path='/admin/ui/tabs' component={Tabs}></Route>
                            <Route path='/admin/ui/gallery' component={Gallery}></Route>
                        </Switch>
                    </Home>}>
                        
                    </Route>
                </Switch>
        </BrowserRouter>
    );
}

export default AppRouter;