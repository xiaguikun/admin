import React,{useState} from 'react';

import { Card,Button,Space,Modal } from 'antd';

const Modals = () => {
    const [state,setState]=useState({
        visible: false,
        visible2:false,
        modal1Visible:false,
        modal1Visible2:false
    })

    const showModal=()=>{
        setState({
            ...state,
            visible:true
        })
    }
    const handleOk=()=>{
        setState({
            ...state,
            visible:false
        })
    }
    const handleCancel=()=>{
        setState({
            ...state,
            visible:false
        })
    }
    const showModal2=()=>{
        setState({
            ...state,
            visible2:true
        })
    }
    const handleOk2=()=>{
        setState({
            ...state,
            visible2:false
        })
    }
    const handleCancel2=()=>{
        setState({
            ...state,
            visible2:false
        })
    }

    const setModal1Visible=()=>{
        setState({
            ...state,
            modal1Visible:true
        })
    }
    const setModal1Visible1=()=>{
        setState({
            ...state,
            modal1Visible:false
        })
    }

    const setModal1Visible2=()=>{
        setState({
            ...state,
            modal1Visible2:true
        })
    }
    const setModal1Visible3=()=>{
        setState({
            ...state,
            modal1Visible2:false
        })
    }

    const comfirm=(type)=>{
        Modal[type]({
            title: `This is an ${type} message`,
            content: 'some messages...some messages...',
          });
    }
    return (
        <>
            <Space direction='vertical' style={{width:'100%'}}>
                <Card title="基础模态框" >
                    <Space>
                        <Button type="primary" onClick={showModal}>Open Modal</Button>
                        <Modal
                                title="Basic Modal"
                                visible={state.visible}
                                onOk={handleOk}
                                onCancel={handleCancel}
                                >
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                        </Modal>
                        <Button type="primary" onClick={showModal2}>Open Modal</Button>
                        <Modal
                                title="Basic Modal"
                                visible={state.visible2}
                                onOk={handleOk2}
                                onCancel={handleCancel2}
                                okText='确定'
                                cancelText='取消'
                                >
                                <p>Some contents...</p>
                        </Modal>
                        <Button type="primary" onClick={setModal1Visible}>顶部20px</Button>
                        <Modal
                        title="20px to Top"
                        style={{ top: 20 }}
                        visible={state.modal1Visible}
                        onOk={setModal1Visible1}
                        onCancel={setModal1Visible1}
                        >
                        <p>some contents...</p>
                        <p>some contents...</p>
                        <p>some contents...</p>
                        </Modal>
                        <Button type="primary" onClick={setModal1Visible2}>顶部20px</Button>
                        <Modal
                        title="20px to Top"
                        centered
                        visible={state.modal1Visible2}
                        onOk={setModal1Visible3}
                        onCancel={setModal1Visible3}
                        >
                        <p>some contents...</p>
                        <p>some contents...</p>
                        <p>some contents...</p>
                        </Modal>
                    </Space>
                </Card>
                <Card title='信息确认框'>
                    <Space>
                    <Button onClick={()=>comfirm('info')}>Info</Button>
                    <Button onClick={()=>comfirm('success')}>Success</Button>
                    <Button onClick={()=>comfirm('error')}>Error</Button>
                    <Button onClick={()=>comfirm('warning')}>Warning</Button>
                    </Space>
                </Card>
            </Space>
        </>
    );
}

export default Modals;