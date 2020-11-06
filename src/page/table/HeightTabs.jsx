import React,{useState,useEffect} from 'react';

import { Card ,Space,Table,Button} from 'antd';

import {getHeightList} from '../../utils/api.js';



const HeightTabs = () => {
    const getList=async ()=>{
        const res=await getHeightList();
        const list=res.data.result;
        list.forEach((item)=>{
             return item.key=item._id
        })
        // console.log(res);
        setState((prevState)=>{
            return {
                ...prevState,
                dataSource:list,
                total:res.data.total
            }
        })
     }
     
    const [state,setState]=useState({
        columns:[
            {
                title:'id',
                dataIndex:'id',
                key:'id'
            },
            {
                title:'用户名',
                dataIndex:'username',
                key:'username'
            },
            {
                title:'性别',
                dataIndex:'sex',
                key:'sex',
                render:(value)=>{
                    return value===1 ? '女' : '男'
                },
                sorter:(a,b)=>a.sex-b.sex
            },
            {
                title:'爱好',
                dataIndex:'interest',
                key:'interest',
                render:(value)=>{
                    // console.log(value);
                    let obj={
                        1:'游泳',
                        2:'打篮球',
                        3:'踢足球',
                        4:'跑步',
                        5:'爬山',
                        6:'骑行',
                        7:'桌球',
                        8:'麦霸',
                    }
                    return obj[value];
                },
                sorter:(a,b)=>a.interest-b.interest
            },
            {
                title:'状态',
                dataIndex:'state',
                key:'state',
                render:(value)=>{
                    let obj={
                        1:'咸鱼一条',	
                        2:'风华浪子',	 
                        3:'北大才子', 
                        4:'百度FE' ,
                        5:'创业者'
                    }
                    return obj[value];
                }
            },
            {
                title:'生日',
                dataIndex:'birthday',
                key:'birthday'
            },
            {
                title:'地址',
                dataIndex:'address',
                key:'address'
            },
            {
                title:'早起时间',
                dataIndex:'time',
                key:'time'
            }
        ],
        columns3:[
            {
                title:'id',
                dataIndex:'id',
                key:'id'
            },
            {
                title:'用户名',
                dataIndex:'username',
                key:'username'
            },
            {
                title:'性别',
                dataIndex:'sex',
                key:'sex',
                render:(value)=>{
                    return value===1 ? '女' : '男'
                },
                sorter:(a,b)=>a.sex-b.sex
            },
            {
                title:'爱好',
                dataIndex:'interest',
                key:'interest',
                render:(value)=>{
                    // console.log(value);
                    let obj={
                        1:'游泳',
                        2:'打篮球',
                        3:'踢足球',
                        4:'跑步',
                        5:'爬山',
                        6:'骑行',
                        7:'桌球',
                        8:'麦霸',
                    }
                    return obj[value];
                },
                sorter:(a,b)=>a.interest-b.interest
            },
            {
                title:'状态',
                dataIndex:'state',
                key:'state',
                render:(value)=>{
                    let obj={
                        1:'咸鱼一条',	
                        2:'风华浪子',	 
                        3:'北大才子', 
                        4:'百度FE' ,
                        5:'创业者'
                    }
                    return obj[value];
                }
            },
            {
                title:'生日',
                dataIndex:'birthday',
                key:'birthday'
            },
            {
                title:'地址',
                dataIndex:'address',
                key:'address'
            },
            {
                title:'早起时间',
                dataIndex:'time',
                key:'time'
            },
            {
                title:'操作',
                dataIndex:'',
                key:'',
                render:(text,record)=>{
                    return <Button onClick={()=>handleDelete(text,record)}>删除</Button>
                }
            }
        ],
        columns2:[
            {
                title:'id',
                dataIndex:'id',
                key:'id',
                fixed:'left',
                width:100
            },
            {
                title:'用户名',
                dataIndex:'username',
                key:'username',
                fixed:'left',
                width:150
            },
            {
                title:'性别',
                dataIndex:'sex',
                key:'sex',
                render:(value)=>{
                    return value===1 ? '女' : '男'
                }
            },
            {
                title:'爱好',
                dataIndex:'interest',
                key:'interest',
                render:(value)=>{
                    // console.log(value);
                    let obj={
                        1:'游泳',
                        2:'打篮球',
                        3:'踢足球',
                        4:'跑步',
                        5:'爬山',
                        6:'骑行',
                        7:'桌球',
                        8:'麦霸',
                    }
                    return obj[value];
                }
            },
            {
                title:'状态',
                dataIndex:'state',
                key:'state',
                render:(value)=>{
                    let obj={
                        1:'咸鱼一条',	
                        2:'风华浪子',	 
                        3:'北大才子', 
                        4:'百度FE' ,
                        5:'创业者'
                    }
                    return obj[value];
                }
            },
            {
                title:'状态',
                dataIndex:'state',
                key:'state',
                render:(value)=>{
                    let obj={
                        1:'咸鱼一条',	
                        2:'风华浪子',	 
                        3:'北大才子', 
                        4:'百度FE' ,
                        5:'创业者'
                    }
                    return obj[value];
                }
            },
            {
                title:'状态',
                dataIndex:'state',
                key:'state',
                render:(value)=>{
                    let obj={
                        1:'咸鱼一条',	
                        2:'风华浪子',	 
                        3:'北大才子', 
                        4:'百度FE' ,
                        5:'创业者'
                    }
                    return obj[value];
                }
            },
            {
                title:'状态',
                dataIndex:'state',
                key:'state',
                render:(value)=>{
                    let obj={
                        1:'咸鱼一条',	
                        2:'风华浪子',	 
                        3:'北大才子', 
                        4:'百度FE' ,
                        5:'创业者'
                    }
                    return obj[value];
                }
            },
            {
                title:'状态',
                dataIndex:'state',
                key:'state',
                render:(value)=>{
                    let obj={
                        1:'咸鱼一条',	
                        2:'风华浪子',	 
                        3:'北大才子', 
                        4:'百度FE' ,
                        5:'创业者'
                    }
                    return obj[value];
                }
            },
            {
                title:'状态',
                dataIndex:'state',
                key:'state',
                render:(value)=>{
                    let obj={
                        1:'咸鱼一条',	
                        2:'风华浪子',	 
                        3:'北大才子', 
                        4:'百度FE' ,
                        5:'创业者'
                    }
                    return obj[value];
                }
            },
            {
                title:'状态',
                dataIndex:'state',
                key:'state',
                render:(value)=>{
                    let obj={
                        1:'咸鱼一条',	
                        2:'风华浪子',	 
                        3:'北大才子', 
                        4:'百度FE' ,
                        5:'创业者'
                    }
                    return obj[value];
                }
            },
            {
                title:'状态',
                dataIndex:'state',
                key:'state',
                render:(value)=>{
                    let obj={
                        1:'咸鱼一条',	
                        2:'风华浪子',	 
                        3:'北大才子', 
                        4:'百度FE' ,
                        5:'创业者'
                    }
                    return obj[value];
                }
            },
            {
                title:'生日',
                dataIndex:'birthday',
                key:'birthday'
            },
            {
                title:'地址',
                dataIndex:'address',
                key:'address'
            },
            {
                title:'早起时间',
                dataIndex:'time',
                key:'time',
                fixed:'right',
                width:100
            }
        ],
        dataSource:[],
        total:1,
        keys:[]
    })
    useEffect(()=>{
        getList();
    },[])
    const handleDelete=(text,record)=>{
        console.log(text,record);
    }
    return (
        <>
            <Space direction='vertical' style={{width:'100%'}}>
                <Card title='头部固定'>
                    <Table columns={state.columns} dataSource={state.dataSource} bordered={true} pagination={false} 
                    scroll={{ y: 240 }}
                    />
                </Card>
                <Card title='左侧固定'>
                    <Table columns={state.columns2} dataSource={state.dataSource} bordered={true} pagination={false} 
                    scroll={{ x: 2000 }}
                    />
                </Card>
                <Card title='表格排序'>
                    <Table columns={state.columns} dataSource={state.dataSource} bordered={true} pagination={false} 
                    />
                </Card>
                <Card title='操作按钮'>
                    <Table columns={state.columns3} dataSource={state.dataSource} bordered={true} pagination={false}
                    />
                </Card>
            </Space>
        </>
    );
}

export default HeightTabs;