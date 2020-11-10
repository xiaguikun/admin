import React,{useState,useEffect} from 'react';
import { Space, Transfer,Table,Card ,Button,Modal} from 'antd';
import {getLoginUser} from '../../utils/api.js';

const Permission = () => {
    const [state,setState]=useState({
        mockData:[
            {
                title: '首页',
                key: '1'
              },
              {
                title: 'UI',
                key: '2',
              },
              {
                title: '按钮',
                key: '12',
              },
              {
                title: '弹框',
                key: '13',
              },
              {
                title: 'Loading',
                key: '14',
              },
              {
                title: '通知提醒',
                key: '15',
              },
              {
                title: '全局Message',
                key: '16',
              },
              {
                title: 'Tab页签',
                key: '17',
              },
              {
                title: '图片画廊',
                key: '18',
              },
              {
                title: '轮播图',
                key: '19',
              },
              {
                title: '表单',
                key: '3',
              },
              {
                title: '登录',
                key: '20',
              },
              {
                title: '注册',
                key: '21',
              },
              {
                title: '表格',
                key: '4',
              },
              {
                title: '基础表格',
                key: '22',
              },
              {
                title: '高级表格',
                key: '23',
              },
              {
                title: '富文本',
                key: '5',
              },
              {
                title: '城市管理',
                key: '6',
              },
              {
                title: '订单管理',
                key: '7',
              },
              {
                title: '员工管理',
                key: '8',
              },
              {
                title: '车辆地图',
                key: '9',
              },
              {
                title: '图标',
                key: '10',
              },
              {
                title: '权限设置',
                key: '11',
              },
        ],
        targetKeys:[],
        selectedKeys:[],
        dataSource:[],
        columns:[
            {
                title: 'id',
                dataIndex: '_id',
                key: '_id',
              },
              {
                title: '账号',
                dataIndex: 'username',
                key: 'username',
              },
              {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                  <Space size="middle">
                    <Button onClick={() => openModal(record)}>设置权限</Button>
                  </Space>
                ),
              }
        ],
        visible:false
    })
    const openModal=()=>{
        setState((prevState)=>{
            return {
                ...prevState,
                visible:true
            }
        })
    }
    const handleOk = e => {
        setState((prevState)=>{
            return {
                ...prevState,
                visible:false
            }
        })
      };
    
      const handleCancel = e => {
        setState((prevState)=>{
            return {
                ...prevState,
                visible:false
            }
        })
      };
    const getuser=async()=>{
        const res=await getLoginUser();
        console.log(res);
        if(res.data.status===0){
            let list=res.data.result;
            list.forEach((item)=>{
                return item.key=item._id
            })
            setState((prevState)=>{
                return {
                    ...prevState,
                    dataSource:list
                }
            })
        }
    }
    useEffect(()=>{
        getuser()
    },[])
    const handleChange = (nextTargetKeys, direction, moveKeys) => {
        setState((prevState)=>{
            return {
                ...prevState,
                targetKeys: nextTargetKeys
            }
        })
        // this.setState({ targetKeys: nextTargetKeys });
        // console.log('targetKeys: ', nextTargetKeys);
        // console.log('direction: ', direction);
        // console.log('moveKeys: ', moveKeys);
    };

    const handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
        // this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });
        setState((prevState)=>{
            return {
                ...prevState,
                selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] 
            }
        })
        // console.log('sourceSelectedKeys: ', sourceSelectedKeys);
        // console.log('targetSelectedKeys: ', targetSelectedKeys);
    };
    return (
        <>
            <Space direction="vertical" style={{width: '100%'}}>
                <Card title="基础表格">
                    <Table 
                    bordered
                    dataSource={state.dataSource} 
                    columns={state.columns} 
                    pagination={false}
                    />
                </Card>
            </Space>
            <Modal
                title="修改权限"
                visible={state.visible}
                onOk={handleOk}
                onCancel={handleCancel}
                >
                    <Transfer
                        dataSource={state.mockData}
                        titles={['Source', 'Target']}
                        targetKeys={state.targetKeys}
                        selectedKeys={state.selectedKeys}
                        onChange={handleChange}
                        onSelectChange={handleSelectChange}
                        render={item => item.title}
                    />
            </Modal>
            
        </>
    );
}

export default Permission;