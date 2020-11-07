import React,{useEffect,useState} from 'react';

import { Button, Space,Card,Table,Form,Select ,Modal ,Input,DatePicker,message } from 'antd';

import {postCityList,getCityList,addCityList,delItem} from '../../utils/api.js';
// import moment from 'moment';

const { Option } = Select;

const Citys = () => {
    const [form] = Form.useForm();
    const [form2] = Form.useForm();
    //转换时间格式
    function add0(m){return m<10?'0'+m:m }
    function format(shijianchuo){
        var time = new Date(parseInt(shijianchuo));
        var y = time.getFullYear();
        var m = time.getMonth()+1;
        var d = time.getDate();
        var h = time.getHours();
        var mm = time.getMinutes();
        var s = time.getSeconds();
        return y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm)+':'+add0(s);
        }
    const [state,setState]=useState({
        cityList:[],
        columns:[
            {
                title:'城市名称',
                dataIndex:'city',
                key:'city'
            },
            {
                title:'用车模式',
                dataIndex:'useCar',
                key:'useCar',
                render:value=>{
                    return value==='1' ? '停车点' : '禁停区'
                }
            },
            {
                title:'营运模式',
                dataIndex:'operating',
                key:'operating',
                render:value=>{
                    return value==='1' ? '自营' : '加盟'
                }
            },
            {
                title:'城市管理员',
                dataIndex:'admin',
                key:'admin'
            },
            {
                title:'城市开放时间',
                dataIndex:'openTime',
                key:'openTime',
                render:value=>{
                    return format(value);
                }
            },
            {
                title:'操作时间',
                dataIndex:'handleTime',
                key:'handleTime',
                render:value=>{
                    return format(value);
                }
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
        total:1,
        citys:[],
        visible:false,
        defaultCurrent:1
    })

    const handleDelete=async (text)=>{
        // console.log(text);
        const res=await delItem({
            id:text.key
        });
        // console.log(res);
        if(res.status===200){
            getList();
            message.success({
                content:res.data.msg,
                style:{
                    marginTop:'35vh'
                }
            });
        }
    }
    const getList=async (value)=>{
        const res=await postCityList(value);
        // console.log(res.data);
        const list=res.data.result;
        list.forEach(item=>{
            return item.key=item._id
        })
        // console.log(list);
        setState(prevState=>{
            return {
                ...prevState,
                cityList:list,
                total:res.data.total
            }
        })
    }

    const getCity= async()=>{
        const res = await getCityList();
        // console.log(res);
        setState(prevState=>{
            return {
                ...prevState,
                citys:res.data.cts
            }
        })
    }

    
    useEffect(()=>{
        getList();
        getCity();
    },[])

    const onFinish=(value)=>{
        getList(value);
        // console.log(value);
        setState(prevState=>{
            return {
                ...prevState,
                defaultCurrent:1
            }
        })
    }   
    const resteData=()=>{
        getList();
        form.resetFields()//可以将form表单内的所有内容清空
    }
    const addData=async (obj)=>{
        const res=await addCityList(obj);
        // console.log(res);
        if (res.status===200){
            getList();
            setState(prevState=>{
                return {
                    ...prevState,
                    visible:false
                }
            });
            form2.resetFields();
            message.success({
                content:res.data.msg,
                style:{
                    marginTop:'35vh'
                }
            });
        }
    }
    const handleOk = () => {
        const obj =form2.getFieldsValue();
        // obj.openTime=moment(obj.openTime).valueOf();
        obj.openTime=obj.openTime.valueOf();
        // console.log(obj.openTime)
        obj.handleTime=new Date().getTime();
        // console.log(obj);
        addData(obj);
      };
    
      const handleCancel = (e) => {
        setState(prevState=>{
            return {
                ...prevState,
                visible:false
            }
        })
        form2.resetFields();
      };
    const showModal=()=>{
        setState(prevState=>{
            return {
                ...prevState,
                visible:true
            }
        })
    }

    return (
        <>
            <Space direction='vertical' style={{width:'100%'}}>
                <Card bordered={false}>
                    <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}
                    initialValues={{
                        // city:'全部',
                        // useCar:'全部',
                        // operating:'全部'
                    }}
                    >
                        <Form.Item
                            label='城市'
                            name="city"
                        >
                             <Select  style={{ width: 120 }} allowClear >
                                 {
                                     state.citys.map(item=>{
                                         return (
                                         <Option value={item.nm} key={item.py}>{item.nm}</Option>
                                         )
                                     })
                                 }
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label='用车模式'
                            name="useCar"
                        >
                           <Select  style={{ width: 120 }} allowClear >
                                <Option value='1' >停车点</Option>
                                <Option value='2' >禁停区</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label='运营模式'
                            name="operating"
                        >
                           <Select  style={{ width: 120 }} allowClear >
                                <Option value='1' >自营</Option>
                                <Option value='2' >加盟</Option>
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
                <Card bordered={false} >
                    <Button type='primary' style={{marginBottom:'10px'}} onClick={showModal}>开通城市</Button>
                    <Modal
                        title="开通城市"
                        visible={state.visible}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        >
                            <Form form={form2} name="horizontal_login" 
                             labelCol= { {span: 8 }}
                             wrapperCol={ {span: 16} }
                            >
                        <Form.Item
                            label='城市'
                            name="city"
                        >
                             <Select  style={{ width: 160 }} allowClear >
                                 {
                                     state.citys.map(item=>{
                                         return (
                                         <Option value={item.nm} key={item.py}>{item.nm}</Option>
                                         )
                                     })
                                 }
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label='用车模式'
                            name="useCar"
                        >
                           <Select  style={{ width: 160 }} allowClear >
                                <Option value='1' >停车点</Option>
                                <Option value='2' >禁停区</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label='运营模式'
                            name="operating"
                        >
                           <Select  style={{ width: 160 }} allowClear >
                                <Option value='1' >自营</Option>
                                <Option value='2' >加盟</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label='城市管理员'
                            name="admin"
                        >
                            <Input placeholder="城市管理员" style={{width:'200px'}} />
                        </Form.Item>
                        <Form.Item
                            label='城市开放时间'
                            name="openTime"
                        >
                            <DatePicker showTime  />
                        </Form.Item>
                    </Form>
                    </Modal>
                    <Table columns={state.columns} dataSource={state.cityList} 
                    pagination={{
                        defaultCurrent:state.defaultCurrent,
                        total:state.total,
                        showTotal:()=>{
                            return `总共有${state.total}条数据`
                        },
                        showQuickJumper:true,
                        showSizeChanger:true
                        // pageSize:5
                    }}
                    />
                </Card>
            </Space>
        </>
    );
}

export default Citys;