import React from 'react';

import { Tabs,Space,Card } from 'antd';

const { TabPane } = Tabs;

const Tabss = () => {
    return (
        <>
             <Space direction='vertical' style={{width:'100%'}}>
                <Card title="Tab页签" >
                    <Space>
                        <Tabs defaultActiveKey="1" animated={true} tabPosition="top">
                            <TabPane tab="Tab 1" key="1">
                            Content of Tab Pane 1
                            </TabPane>
                            <TabPane tab="Tab 2" key="2" disabled>
                            Content of Tab Pane 2
                            </TabPane>
                            <TabPane tab="Tab 3" key="3">
                            Content of Tab Pane 3
                            </TabPane>
                        </Tabs>
                    </Space>
                </Card>
            </Space>
        </>
    );
}

export default Tabss;