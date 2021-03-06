import React from 'react';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'

import {Home} from '../home/index.js';

import Welcome from '../page/welcome/Welcome.jsx';
import Buttons from '../page/ui/Button.jsx';
import Modals from '../page/ui/Modals.jsx';
import Spin from '../page/ui/Spin.jsx';
import Notification from '../page/ui/Notification.jsx';
import Messages from '../page/ui/Messages.jsx';
import Tabs from '../page/ui/Tabs.jsx';
import Gallery from '../page/ui/Gallery.jsx';
import Login from '../page/form/Login.jsx';
import Register from '../page/form/Register.jsx';
import Basic from '../page/table/Basic.jsx';
import HeightTabs from '../page/table/HeightTabs.jsx';
import City from '../page/city/Citys.jsx';
import Order from '../page/order/Order.jsx';
import BikeMap from '../page/map/BikeMpa.jsx';
import Interval from '../page/charts/Interval.jsx';
import Pre from '../page/charts/Pie.jsx';
import Line from '../page/charts/Line.jsx';
import Login2 from '../login/Login.jsx';
import Permission from '../page/permission/Permission.jsx';
import Rich from '../page/rich/Rich.jsx';


const AppRouter = () => {
    return (
        <BrowserRouter>
                <Switch>
                    <Redirect from='/' to='/login' exact></Redirect>
                    <Route path='/login' component={Login2}></Route>
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
                            <Route path='/admin/form/login' component={Login}></Route>
                            <Route path='/admin/form/reg' component={Register}></Route>
                            <Route path='/admin/table/basic' component={Basic}></Route>
                            <Route path='/admin/table/high' component={HeightTabs}></Route>
                            <Route path='/admin/city' component={City}></Route>
                            <Route path='/admin/order' component={Order}></Route>
                            <Route path='/admin/bikeMap' component={()=><BikeMap></BikeMap>}></Route>
                            <Route path='/admin/charts/bar' component={Interval}></Route>
                            <Route path='/admin/charts/pie' component={Pre}></Route>
                            <Route path='/admin/charts/line' component={Line}></Route>
                            <Route path='/admin/permission' component={Permission}></Route>
                            <Route path='/admin/rich' component={Rich}></Route>
                        </Switch>
                    </Home>}>
                        
                    </Route>
                </Switch>
        </BrowserRouter>
    );
}

export default AppRouter;

//  component可以渲染类组件和函数组件(可以拿到this.props)
// render只能接受函数组件，如果非要传入类组件，则用箭头函数，返回值是函数组价的标签(函数组件可以拿到props，类组件需要处理后拿到props)
// children不管路径有没没有匹配，都会被渲染，不能使用类组件，不在switch中，要不然是排他性，就失效了(函数组件可以拿到props，类组件需要处理后拿到props)
// 在<Route></Route>标签的中间直接写入一个标签 拿不到props