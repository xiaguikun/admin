import React ,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { Space, Card,Button ,Table,Form , DatePicker,Select,message} from 'antd';

import {finishItem} from '../../utils/api.js';



import useGetTime from './useTimer.js'

const { Option } = Select;

const Order = () => {
    const format=useGetTime();

    const [form] = Form.useForm();
    const columns=[
        {
            title:'订单编号',
            dataIndex:'order_sn',
            key:'order_sn'
        },
        {
            title:'车辆编号',
            dataIndex:'bike_sn',
            key:'bike_sn'
        },
        {
            title:'用户名',
            dataIndex:'user_name',
            key:'user_name'
        },
        {
            title:'手机号',
            dataIndex:'mobile',
            key:'mobile'
        },
        {
            title:'里程',
            dataIndex:'distance',
            key:'distance'
        },
        {
            title:'状态',
            dataIndex:'status',
            key:'status',
            render:value=>{
                return value===1 ? '进行中' : '已完成'
            }
        },
        {
            title:'开始时间',
            dataIndex:'start_time',
            key:'start_time',
            render:value=>{
                return format(value)
            }
        },
        {
            title:'结束时间',
            dataIndex:'end_time',
            key:'end_time',
            render:value=>{
                if(+value>1){
                    return format(value)
                }else{
                    return ''
                }
            }
        },
        {
            title:'订单金额',
            dataIndex:'total_fee',
            key:'total_fee'
        },
        {
            title:'实付金额',
            dataIndex:'user_pay',
            key:'user_pay'
        },
    ]

    const dispatch=useDispatch();
    const store = useSelector(store=>store)
    // console.log(store);
    const [state,setState]=useState({
        selectRow:[]
    })
    useEffect(()=>{
        dispatch({
            type:'typeOrder',
            page:1,
            page_size:50
        })
    },[dispatch])

    const onFinish=(value)=>{
        const obj=value;
        if(obj.start_time){
            obj.start_time=obj.start_time.valueOf();
        }
        if(obj.end_time){
            obj.end_time=obj.end_time.valueOf();
        }
        obj.page=1;
        obj.page_size=50;
        // console.log(obj);
        dispatch({type:'typeOrder',...obj})
    }
    const resteData=()=>{
        form.resetFields();
        dispatch({
            type:'typeOrder',
            page:1,
            page_size:50
        })
    }

    const finishOrder=async ()=>{
        // console.log(state.selectRow[0]);
        const res=await finishItem({
            id:state.selectRow[0],
            end_time:new Date().getTime()
        })
        // console.log(res);
        if(res.status===200){
            dispatch({
                type:'typeOrder',
                page:1,
                page_size:50
            })
            message.success({
                content: '订单结束成功',
                className: 'custom-class',
                style: {
                  marginTop: '45vh',
                },
              });
        }
        
    }
    return (
        <>
            <Space direction='vertical' style={{width:'100%'}}>
                <Card>
                <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
                        <Form.Item
                            label='开始时间'
                            name="start_time"
                        >
                            <DatePicker showTime  />
                        </Form.Item>
                        <Form.Item
                            label='结束时间'
                            name="end_time"
                        >
                            <DatePicker showTime  />
                        </Form.Item>
                        <Form.Item
                            label='状态'
                            name="status"
                        >
                           <Select  style={{ width: 120 }} allowClear >
                                <Option value='1' >进行中</Option>
                                <Option value='2' >已完成</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item>
                           <Space>
                               <Button type='primary' htmlType='submit'>查询</Button>
                               <Button onClick={resteData}>重置</Button>
                           </Space>
                        </Form.Item>
                    </Form>
                </Card>
                <Card>
                    <Button type='primary' style={{marginRight:'10px',marginBottom:'10px'}} >订单详情</Button>
                    <Button type='primary' onClick={finishOrder}>结束订单</Button>
                    <Table columns={columns} dataSource={store.orderList} 
                    rowSelection={{
                        type:'radio',
                        selectedRowKeys:state.selectRow
                    }}
                    onRow={record=>{
                        return {
                            onClick:()=>{
                                // console.log(record);
                                setState(prevState=>{
                                    return {
                                        ...prevState,
                                        selectRow:[record.key]
                                    }
                                })
                            }
                        }
                    }}
                    pagination={{
                        defaultCurrent:1,
                        defaultPageSize:20,
                        total:store.total,
                        showSizeChanger:true,
                        showQuickJumper:true
                    }}
                    />
                </Card>
            </Space>
        </>
    );
}

export default Order;