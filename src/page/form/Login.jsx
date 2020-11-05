import React from 'react';
import { Card ,Space,Form, Input, Button,Checkbox,Typography} from 'antd';
// import './style.less';

const {Link}=Typography;


const Login=()=> {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Finish:', values);
      };
      const onFinish2 = (values) => {
        console.log('Received values of form: ', values);
      };
        return (
            <>
                <Space direction='vertical' style={{width:'100%'}}>
                    <Card title='登录行内表单'>
                        <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
                            <Form.Item
                                name="username"
                                rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
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
                                    message: 'Please input your password!',
                                },
                                ]}
                            >
                                <Input
                                type="password"
                                placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item shouldUpdate={true}>
                                {() => (
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    disabled={
                                    !form.isFieldsTouched(true) ||
                                    form.getFieldsError().filter(({ errors }) => errors.length).length
                                    }
                                >
                                    Log in
                                </Button>
                                )}
                            </Form.Item>
                        </Form>
                    </Card>
                    <Card title='登录水平表单'>
                        <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish2}
                        // id='components-form-demo-normal-login'
                        style={{width:'300px'}}
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
            </>
        );
}

export default Login;