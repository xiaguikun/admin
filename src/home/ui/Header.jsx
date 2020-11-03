import React , {useState,useEffect} from 'react';

import { Row, Col, Typography } from 'antd';
const { Text, Link } = Typography;



const Header = () => {
    const [state,setState]=useState({
        username:'张三',
        pageTitle:'首页',
        time:new Date().toLocaleString()
    })
    useEffect(()=>{
        setTimeout(()=>{
            console.log(1111);
            setState({
                ...state,
                time:new Date().toLocaleString()
            })
        },1000)
        // setInterval(()=>{
        //     console.log(2222);
        //     setState({
        //         ...state,
        //         time:new Date().toLocaleString()
        //     })
        // },1000)
    },[state])
    return (
        <header>
            <Row justify='end' className='header-top'>
                <Col>
                    <Text style={{marginRight:'15px'}}>欢迎 {state.username}</Text>
                    <Link>退出</Link>
                </Col>
            </Row>
            <Row className='header-bottom'>
                <Col span={5} className='title'>{state.pageTitle}</Col>
                <Col span={19} className='time'> {state.time} </Col>
            </Row>

        </header>
    );
}

export default Header;