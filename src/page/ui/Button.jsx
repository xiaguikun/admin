import React,{useState} from 'react';

import { Card,Button,Space,Radio } from 'antd';
import {
    PlusOutlined,EditOutlined, DeleteOutlined,SearchOutlined,ArrowDownOutlined,
    PoweroffOutlined,
    LeftOutlined ,RightOutlined
    } from '@ant-design/icons';

const Buttons = () => {
    const [state,setState]=useState({
        loadingFlag:true,
        value:1,
        size:'small'
    })

    const handleChange=()=>{
        setState((prevState)=>{
            return {
                ...state,
                loadingFlag:!prevState.loadingFlag
            }
        })
    }
    const onChange=(ev)=>{
        let size=''
        if(ev.target.value===1){
            size='small'
        }else if(ev.target.value===2){
            size='middle'
        }else{
            size='large'
        }
        setState({
            ...state,
            value:ev.target.value,
            size:size
        })
    }
    return (
        <div>
            <Space direction='vertical' style={{width:'100%'}}>
                <Card title="基础按钮" >
                    <Space>
                        <Button type="primary"> Button </Button>
                        <Button>Default Button</Button>
                        <Button type="dashed">Dashed Button</Button>
                        <Button type="primary" danger>Primary</Button>
                        <Button type="primary" disabled>disabled</Button>
                    </Space>
                </Card>
                <Card title="图形按钮" >
                    <Space>
                        <Button icon={<PlusOutlined />}>创建</Button>
                        <Button icon={<EditOutlined />}>编辑</Button>
                        <Button icon={<DeleteOutlined />}>删除</Button>
                        <Button type="primary" icon={<SearchOutlined />}>搜索</Button>
                        <Button type="primary" icon={<ArrowDownOutlined />}>下载</Button>
                    </Space>
                </Card>
                <Card title="Loading按钮" >
                    <Space>
                        <Button type="primary" loading={state.loadingFlag}>确定</Button>
                        <Button type="primary" shape='circle' icon={<PoweroffOutlined />}  loading={state.loadingFlag} />
                        <Button   loading={state.loadingFlag}>点击加载</Button>
                        <Button  shape='circle' icon={<PoweroffOutlined />}  loading={state.loadingFlag} />
                        <Button type="primary" onClick={handleChange}>{state.loadingFlag ? '关闭' : '开启'}</Button>      
                    </Space>
                </Card>
                <Card title="按钮组" >
                    <Space>
                        <Button type="primary" icon={<LeftOutlined />} >后退</Button>    
                        <Button type="primary" icon={<RightOutlined />} >前进</Button>    
                    </Space>
                </Card>
                <Card title="按钮尺寸" >
                    <Space>
                        <Radio.Group onChange={onChange} value={state.value}>
                            <Radio value={1}>小</Radio>
                            <Radio value={2}>中</Radio>
                            <Radio value={3}>大</Radio>
                        </Radio.Group>  
                        <Button type="primary" size={state.size}>Primary Button</Button>
                        <Button size={state.size}>Default Button</Button> 
                    </Space>
                </Card>
            </Space>
        </div>
    );
}

export default Buttons;