import React from 'react';

import { Row, Col } from 'antd';
import NavMenu from './NavMemu.jsx';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';

import './index.less';

const HomeUi = (props) => {
    // console.log(props);
    return (
        <div className='home-wrap'>
            <Row>
                <Col span={4}>
                    <NavMenu></NavMenu>
                </Col>
                <Col span={20} style={{height:'100vh',overflow:'auto'}}>
                    <Header></Header>
                    <Main children={props.children}></Main>
                    <Footer></Footer>
                </Col>
            </Row>
        </div>
    );
}

export default HomeUi;