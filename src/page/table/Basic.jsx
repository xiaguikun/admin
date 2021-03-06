import React,{useEffect,useState} from 'react';

import { Card ,Space,Table,Modal,message,Button } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import {getBasicList,deleteData} from '../../utils/api.js';


const Basic = () => {
    const dataSource = [
        {
          key: '1',
          name: '胡彦斌',
          age: 32,
          address: '西湖区湖底公园1号',
        },
        {
          key: '2',
          name: '胡彦祖',
          age: 42,
          address: '西湖区湖底公园1号',
        },
      ];
      
    const columns = [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '住址',
          dataIndex: 'address',
          key: 'address',
        },
      ];
      
    const [state,setState]=useState({
        dataSource:[],
        columns:[
            {
                title:'id',
                dataIndex:'id',
                key:'id'
            },
            {
                title:'用户名',
                dataIndex:'userName',
                key:'userName'
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
        keys:[],
        keys2:[],
        selectedRows:[],
        total:1
    })

    const getList=async (page=1)=>{
      const res=await getBasicList({
          page:page
      });
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
    useEffect(()=>{
      getList();
    },[])

    const deleteItem=()=>{
      let names=state.selectedRows.map((item)=>{
        return item.userName
      })
      let str=names.join();
      Modal.confirm({
        title: '确定要删除?',
        icon: <ExclamationCircleOutlined />,
        content: `${str}这些信息吗?`,
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
          let arrPromise=[];
          state.keys2.forEach((item)=>{
            arrPromise.push(deleteData({id:item}))
          });
          // console.log(arrPromise);
          Promise.all(arrPromise).then(()=>{
            getList();
            message.success({
                content: '删除成功',
                className: 'custom-class',
                style: {
                  marginTop: '20vh',
                },
              });
          })
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    }
    return (
        <>            
            <Space direction='vertical' style={{width:'100%'}}>
                <Card title='基础表格'>
                    <Table columns={columns} dataSource={dataSource} bordered={true} pagination={false} />
                </Card>
                <Card title='动态数据渲染表格'>
                    <Table columns={state.columns} dataSource={state.dataSource} bordered={true} pagination={false} />
                </Card>
                <Card title='Mock-单选'>
                    <Table 
                    columns={state.columns} dataSource={state.dataSource} bordered={true} pagination={false}
                    rowSelection={{
                        type: 'radio',
                        selectedRowKeys:state.keys
                      }}
                      onRow={record => {
                        return {
                          onClick: () => {
                            //   console.log(record.key);
                            setState({
                                ...state,
                                keys:[record.key]
                            })
                              Modal.info({
                                title: '用户信息',
                                content: (
                                  <div>
                                    <span>{record.userName}</span>
                                    <span>--</span>
                                    <span>{record.address}</span>
                                  </div>
                                ),
                                onOk() {},
                              });
                          }
                        };
                      }}
                    />
                </Card>
                <Card title='Mock-删除'>
                  <Button style={{marginBottom:'10px'}} onClick={deleteItem}>删除</Button>
                    <Table 
                    columns={state.columns} dataSource={state.dataSource} bordered={true} pagination={false}
                    rowSelection={{
                        type: 'checkbox',
                        selectedRowKeys:state.keys2,
                        onChange(selectedRowKeys, selectedRows){
                          // console.log(selectedRowKeys,selectedRows);
                          setState((prevState)=>{
                              return {
                                ...prevState,
                                keys2:selectedRowKeys,
                                selectedRows:selectedRows
                              }
                          })
                        }
                      }}
                      // onRow={record => {
                      //   return {
                      //     onClick: () => {
                      //       console.log(record.key);
                      //       setState({
                      //           ...state,
                      //           keys2:[record.key]
                      //       })
                      //         Modal.info({
                      //           title: '确认删除',
                      //           content: (
                      //             <div>
                      //               <p>{record.userName}</p>
                      //             </div>
                      //           ),
                      //           onOk() {
                      //               async function fn(){
                      //                   const res=await deleteData({
                      //                       id:record.key
                      //                   });
                      //                   // console.log(res.data);
                      //                   fnn(res.data.msg)
                      //               }
                      //              fn()
                      //           },
                      //         });
                      //         const fnn=(msg)=>{
                      //           message.success({
                      //               content: msg,
                      //               className: 'custom-class',
                      //               style: {
                      //                 marginTop: '20vh',
                      //               },
                      //             });
                      //         }
                      //     }
                      //   };
                      // }}
                    />
                </Card>
                <Card title='Mock-分页'>
                    <Table 
                    columns={state.columns} dataSource={state.dataSource} bordered={true}
                    pagination={{
                      defaultCurrent:1,
                      total:state.total,
                      onChange(page){
                        getList(page)
                      },
                      showTotal:(total) => `总共有 ${total} 条数据`,
                      showQuickJumper:true
                    }}
                    />
                </Card>
               
            </Space>
        </>
    );
}

export default Basic;