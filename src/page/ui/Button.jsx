import React,{useState} from 'react';

import { Card,Button,Space} from 'antd';
import {
    PlusOutlined,EditOutlined, DeleteOutlined,SearchOutlined,ArrowDownOutlined,
    PoweroffOutlined 
    } from '@ant-design/icons';

const Buttons = () => {
    const [state,setState]=useState({
        loadingFlag:true
    })

    const handleChange=()=>{
        setState((prevState)=>{
            return {
                loadingFlag:!prevState.loadingFlag
            }
        })
    }
    return (
        <>
            <Space direction='vertical' style={{width:'100%'}}>
                <Card title="基础按钮" bordered={false}>
                    <Space>
                        <Button type="primary"> Button </Button>
                        <Button>Default Button</Button>
                        <Button type="dashed">Dashed Button</Button>
                        <Button type="primary" danger>Primary</Button>
                        <Button type="primary" disabled>disabled</Button>
                    </Space>
                </Card>
                <Card title="图形按钮" bordered={false}>
                    <Space>
                        <Button icon={<PlusOutlined />}>创建</Button>
                        <Button icon={<EditOutlined />}>编辑</Button>
                        <Button icon={<DeleteOutlined />}>删除</Button>
                        <Button type="primary" icon={<SearchOutlined />}>搜索</Button>
                        <Button type="primary" icon={<ArrowDownOutlined />}>下载</Button>
                    </Space>
                </Card>
                <Card title="Loading按钮" bordered={false}>
                    <Space>
                        <Button type="primary" loading={state.loadingFlag}>确定</Button>
                        <Button type="primary" shape='circle' icon={<PoweroffOutlined />}  loading={state.loadingFlag} />
                        <Button   loading={state.loadingFlag}>点击加载</Button>
                        <Button  shape='circle' icon={<PoweroffOutlined />}  loading={state.loadingFlag} />
                        <Button type="primary" onClick={handleChange}>{state.loadingFlag ? '关闭' : '开启'}</Button>      
                    </Space>
                </Card>
            </Space>
        </>
    );
}

export default Buttons;