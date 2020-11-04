import React from 'react';
import { Space,Card, Button, notification } from 'antd';
import { SmileOutlined,RadiusUpleftOutlined,
    RadiusUprightOutlined,
    RadiusBottomleftOutlined,
    RadiusBottomrightOutlined, } from '@ant-design/icons';

const Notification = () => {

    const openNotification=()=>{
        notification.open({
            message: 'Notification Title',
            description:
              'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            icon: <SmileOutlined style={{ color: '#108ee9' }} />,
          });
    }

    const openNotification2 = placement => {
        notification.info({
          message: `Notification ${placement}`,
          description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
          placement,
        });
      };
    return (
        <>
            <Space direction='vertical' style={{width:'100%'}}>
                <Card title="通知提醒框" >
                    <Space>
                        <Button type="primary" onClick={openNotification}>Open the notification box</Button>
                    </Space>
                </Card>
                <Card title="通知提醒框" >
                    <Space>
                        <Button type="primary" onClick={() => openNotification2('topLeft')}>
                            <RadiusUpleftOutlined />
                            topLeft
                        </Button>
                        <Button type="primary" onClick={() => openNotification2('topRight')}>
                            <RadiusUprightOutlined />
                            topRight
                        </Button>
                        <Button type="primary" onClick={() => openNotification2('bottomLeft')}>
                            <RadiusBottomleftOutlined />
                            bottomLeft
                        </Button>
                        <Button type="primary" onClick={() => openNotification2('bottomRight')}>
                            <RadiusBottomrightOutlined />
                            bottomRight
                        </Button>
                    </Space>
                </Card>
            </Space>
        </>
    );
}

export default Notification;