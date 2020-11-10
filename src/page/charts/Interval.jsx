import React,{useEffect} from 'react';
import { Card ,Space} from 'antd';
import { Chart } from '@antv/g2';

let initChart1;
let initChart2;
const Interval = () => {
    const data = [
        { genre: 'Sports', sold: 275 },
        { genre: 'Strategy', sold: 115 },
        { genre: 'Action', sold: 120 },
        { genre: 'Shooter', sold: 350 },
        { genre: 'Other', sold: 150 },
      ];
      const data2 = [
        { name: 'London', 月份: 'Jan.', 月均降雨量: 18.9 },
        { name: 'London', 月份: 'Feb.', 月均降雨量: 28.8 },
        { name: 'London', 月份: 'Mar.', 月均降雨量: 39.3 },
        { name: 'London', 月份: 'Apr.', 月均降雨量: 81.4 },
        { name: 'London', 月份: 'May', 月均降雨量: 47 },
        { name: 'London', 月份: 'Jun.', 月均降雨量: 20.3 },
        { name: 'London', 月份: 'Jul.', 月均降雨量: 24 },
        { name: 'London', 月份: 'Aug.', 月均降雨量: 35.6 },
        { name: 'Berlin', 月份: 'Jan.', 月均降雨量: 12.4 },
        { name: 'Berlin', 月份: 'Feb.', 月均降雨量: 23.2 },
        { name: 'Berlin', 月份: 'Mar.', 月均降雨量: 34.5 },
        { name: 'Berlin', 月份: 'Apr.', 月均降雨量: 99.7 },
        { name: 'Berlin', 月份: 'May', 月均降雨量: 52.6 },
        { name: 'Berlin', 月份: 'Jun.', 月均降雨量: 35.5 },
        { name: 'Berlin', 月份: 'Jul.', 月均降雨量: 37.4 },
        { name: 'Berlin', 月份: 'Aug.', 月均降雨量: 42.4 },
        { name: 'aaa', 月份: 'Jan.', 月均降雨量: 12 },
        { name: 'aaa', 月份: 'Feb.', 月均降雨量: 22 },
        { name: 'aaa', 月份: 'Mar.', 月均降雨量: 35 },
        { name: 'aaa', 月份: 'Apr.', 月均降雨量: 97 },
        { name: 'aaa', 月份: 'May', 月均降雨量: 56 },
        { name: 'aaa', 月份: 'Jun.', 月均降雨量: 5 },
        { name: 'aaa', 月份: 'Jul.', 月均降雨量: 34 },
        { name: 'aaa', 月份: 'Aug.', 月均降雨量: 44 },
      ];

      initChart1=()=>{
            // Step 1: 创建 Chart 对象
        const chart = new Chart({
            container: 'container1', // 指定图表容器 ID
            width: 600, // 指定图表宽度
            height: 300, // 指定图表高度
        });

        // Step 2: 载入数据源
        chart.data(data);

        // Step 3：创建图形语法，绘制柱状图
        chart.interval().position('genre*sold');

        // Step 4: 渲染图表
        chart.render();
      }

      initChart2=()=>{   
          const chart = new Chart({
            container: 'container2',
            autoFit: true,
            height: 500,
          });
          
          chart.data(data2);
          chart.scale('月均降雨量', {
            nice: true,
          });
          chart.tooltip({
            showMarkers: false,
            shared: true,
          });
          
          chart
            .interval()
            .position('月份*月均降雨量')
            .color('name')
            .adjust([
              {
                type: 'dodge',
                marginRatio: 0,
              },
            ]);
          
          chart.interaction('active-region');
          
          chart.render();
      }
      useEffect(()=>{
        initChart1();
        initChart2();
      },[])

    return (
        <>
             <Space direction='vertical' style={{width:'100%'}}>
                    <Card title='柱形图表一'>
                        <div id="container1"></div>
                    </Card>
                    <Card title='柱形图表二'>
                        <div id="container2"></div>
                    </Card>
                </Space>
        </>
    );
}

export default Interval;