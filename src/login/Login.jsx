import React from 'react';
import {useHistory} from 'react-router-dom';
import { Card ,Space,Form, Input, Button,Checkbox,Typography} from 'antd';

import {userLogin} from '../utils/api.js';

const {Link}=Typography;


const Login=()=> {
    const history=useHistory()
    const [form] = Form.useForm();
    const onFinish = async (values) => {
        // console.log('Finish:', values);
        const res=await userLogin(values);
        // console.log(res.data);
        if(res.data.status===0){
            sessionStorage.setItem('username',res.data.result[0].username);
            // console.log(JSON.stringify(res.data.result[0].auth)); 
            sessionStorage.setItem('auth',JSON.stringify(res.data.result[0].auth));
            history.push('/admin');
        }
      };
        return (
            <div style={{width:'400px',height:'500px',margin:'50px auto',border:'1px solid #ccc'}}>
                <Space direction='vertical' style={{width:'100%'}}>
                    <Card title='登录页面'>
                        <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        // id='components-form-demo-normal-login'
                        style={{width:'300px'}}
                        form={form}
                        >
                        <Form.Item
                            name="username"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                            ]}
                        >
                            <Input  placeholder="Username" />
                        </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                                ]}
                            >
                                <Input
                                type="password"
                                placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>记住密码</Checkbox>
                                </Form.Item>

                                <Link className="login-form-forgot" href="" style={{float:'right'}}>
                                忘记密码
                                </Link>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Space>
            </div>
        );
}

export default Login;