import React , {useState,useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

import {getWeather} from '../../utils/api.js'

import { Row, Col, Typography } from 'antd';
const { Text, Link } = Typography;



const Header = () => {

    const history=useHistory();
    const pageTitle=useSelector(store=>store.pageTitle)

    const [state,setState]=useState({
        username:'芋头',
        weather:{}
    })
    const [newTime,setnewTime]=useState({
        time:new Date().toLocaleString()
    })
    useEffect(()=>{
        async function fn(){
            const res=await getWeather();
            // console.log(res.data.result);
            setState((prevState)=>{
                return {
                    ...prevState,
                    weather:res.data.result,
                    username:sessionStorage.getItem('username')
                }
            })
        }
        fn();
        let timer = setInterval(()=>{
            // console.log(1111);
            setnewTime((prev)=>{
                return {
                    ...prev,
                    time:new Date().toLocaleString()
                }
            })
        },1000)
        return ()=>{
            clearInterval(timer);
        }
    },[])

    const userExit=()=>{
        history.push('/login');
        sessionStorage.clear();
    }
    return (
        <header>
            <Row justify='end' className='header-top'>
                <Col>
                    <Text style={{marginRight:'15px'}}>欢迎 {state.username}</Text>
                    <Link onClick={userExit}>退出</Link>
                </Col>
            </Row>
            <Row className='header-bottom'>
                <Col span={5} className='title'>{pageTitle}</Col>
                <Col span={19} className='time'>{state.weather.citynm}--{state.weather.weather_curr}--{state.weather.temperature_curr} <span>--</span> <img src={state.weather.weather_icon} alt=""/> <span>--</span> {newTime.time} </Col>
            </Row>

        </header>
    );
}

export default Header;