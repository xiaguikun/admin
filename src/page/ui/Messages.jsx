import React from 'react';

import { Space,Card, Button,message } from 'antd';

const Messages = () => {

    const success = () => {
       return message.success('This is a success message');
      };
      
      const error = () => {
        message.error('This is an error message');
      };
      
      const warning = () => {
        message.warning('This is a warning message');
      };
    return (
        <>
             <Space direction='vertical' style={{width:'100%'}}>
                <Card title="全局提示框" >
                    <Space>
                        <Button onClick={success}>Success</Button>
                        <Button onClick={error}>Error</Button>
                        <Button onClick={warning}>Warning</Button>
                    </Space>
                </Card>
            </Space>
        </>
    );
}

export default Messages;