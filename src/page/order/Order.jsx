import React ,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { Space, Card,Button ,Table} from 'antd';


// 	行驶时长	状态	开始时间	结束时间	订单金额	实付金额
const Order = () => {
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
            key:'status'
        },
        {
            title:'开始时间',
            dataIndex:'start_time',
            key:'start_time'
        },
        {
            title:'结束时间',
            dataIndex:'end_time',
            key:'end_time'
        },
        {
            title:'实付金额',
            dataIndex:'user_pay',
            key:'user_pay'
        },
    ]
    const dispatch=useDispatch();
    const store = useSelector(store=>store)
    console.log(store);
    useEffect(()=>{
        dispatch({
            type:'typeOrder',
            page:1,
            page_size:20
        })
    },[dispatch])
    return (
        <>
            <Space direction='vertical' style={{width:'100%'}}>
                <Card>

                </Card>
                <Card>
                    <Button type='primary' style={{marginRight:'10px'}}>订单详情</Button>
                    <Button type='primary'>结束订单</Button>
                    <Table columns={columns} dataSource={store.orderList} />
                </Card>
            </Space>
        </>
    );
}

export default Order;