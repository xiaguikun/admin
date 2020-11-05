import React,{useState} from 'react';
import { Form, Input, Card ,Button,Radio,InputNumber,Select,Switch ,DatePicker ,TimePicker,Upload,message,Checkbox,Typography  } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import moment from 'moment';


const { TextArea } = Input;
const { Link } = Typography;

const { Option } = Select;


const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 12,
    },
  };

const Register = () => {
    const [state,setState]=useState({
        loading: false,
})
    const onFinish = (formValues) => {
        const values={
            ...formValues,
            marry:formValues['marry'] ? 1 : 0,
            tongyi:formValues['tongyi'] ? 1 : 0,
            birthday:formValues['birthday'].format('YYYY-MM-DD'),
            time:formValues['time'].format('hh:mm:ss')
        }
        console.log(values);
      };

      const dateFormat = 'YYYY/MM/DD';
      const { loading, imageUrl } = state;
      const uploadButton = (
        <div>
          {loading ? <LoadingOutlined /> : <PlusOutlined />}
          <div style={{ marginTop: 8 }}>Upload</div>
        </div>
      );
      function beforeUpload(file) {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
          message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
      }
      function getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
      }
      const handleChange = info => {
        if (info.file.status === 'uploading') {
          setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, imageUrl =>
            this.setState({
              imageUrl,
              loading: false,
            }),
          );
        }
      };

    return (
        <>
            <Card title="注册表单" bordered={false}>
                <Form {...layout} name="nest-messages" onFinish={onFinish} 
                initialValues={{
                    age:20,
                    nowState:'0',
                    like:['爬山','打豆豆'],
                    marry:true,
                    birthday:moment('2020/01/01', dateFormat),
                    time:moment('12:08:23', 'HH:mm:ss')
                }}
                >
                    <Form.Item
                        name='username'
                        label="用户名"
                        rules={[
                        {
                            required: true,
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name='password'
                        label="密码"
                        rules={[
                        {
                            required: true,
                        },
                        ]}
                    >
                        <Input.Password placeholder="input password" />
                    </Form.Item>
                    <Form.Item
                        name='sex'
                        label="性别"
                    >
                        <Radio.Group >
                            <Radio value={1}>男</Radio>
                            <Radio value={0}>女</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        name='age'
                        label="年龄"
                        rules={[
                        {
                            type: 'number',
                            min: 18,
                            max: 99,
                        },
                        ]}
                    >
                        <InputNumber />
                    </Form.Item>
                    <Form.Item
                        name='nowState'
                        label="当前状态"
                    >
                        <Select  >
                            <Option value="0">帅</Option>
                            <Option value="1">超级帅</Option>
                            <Option value="2" disabled>
                                超级超级帅
                            </Option>
                            <Option value="3">超级超级超级帅</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name='like'
                        label="爱好"
                    >
                        <Select
                            mode="multiple"
                            placeholder="Please select"
                            style={{ width: '100%' }}
                            >
                                <Option value="爬山">爬山</Option>
                                <Option value="打豆豆">打豆豆</Option>
                                <Option value="吃饭">
                                    吃饭
                                </Option>
                                <Option value="睡觉">睡觉</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name='marry'
                        label="是否已婚"
                        valuePropName="checked"
                    >
                       <Switch />
                    </Form.Item>
                    <Form.Item
                        name='birthday'
                        label="生日"
                    >
                            <DatePicker />
                    </Form.Item>
                    <Form.Item
                        name='address'
                        label="联系地址"
                    >
                        <TextArea/>
                    </Form.Item>
                    <Form.Item
                        name='time'
                        label="早起时间"
                    >
                        <TimePicker  size="large" />
                    </Form.Item>
                    <Form.Item
                        name='touxiang'
                        label="头像"
                        valuePropName=''
                    >
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            beforeUpload={beforeUpload}
                            onChange={handleChange}
                        >
                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                        </Upload>
                    </Form.Item>
                    <Form.Item
                        name='tongyi'
                        wrapperCol={{...layout.wrapperCol,offset:4}}
                        valuePropName='checked'
                    >
                        <Checkbox >我已阅读过<Link>芋头协议</Link></Checkbox>
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol,offset:4 }}>
                        <Button type="primary" htmlType="submit">
                        注册
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </>
    );
}

export default Register;