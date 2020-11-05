import React,{useEffect} from 'react';

import { Card ,Space} from 'antd';

import {getBasicList} from '../../utils/api.js';


const Basic = () => {
    useEffect(()=>{
        async function fn(){
           const res=await getBasicList({
               page:1
           });
           console.log(res);
        }
        fn();
    },[])
    return (
        <>
            
            <Space direction='vertical' style={{width:'100%'}}>
                <Card title='基础表格'>
                    
                </Card>
            </Space>
        </>
    );
}

export default Basic;