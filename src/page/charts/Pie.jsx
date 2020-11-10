import React,{useEffect} from 'react';
import { Card ,Space} from 'antd';
import { Chart } from '@antv/g2';

let initCharts1;
const Pie = () => {
    const data1 = [
        { item: '事例一', count: 40, percent: 0.4 },
        { item: '事例二', count: 21, percent: 0.21 },
        { item: '事例三', count: 17, percent: 0.17 },
        { item: '事例四', count: 13, percent: 0.13 },
        { item: '事例五', count: 9, percent: 0.09 },
      ];
      
      initCharts1=()=>{
        const chart = new Chart({
            container: 'container1',
            // autoFit: true,
            height: 500,
            width:800
          });
          
          chart.coordinate('theta', {
            radius: 0.75,
          });
          
          chart.data(data1);
          
          chart.scale('percent', {
            formatter: (val) => {
              val = val * 100 + '%';
              return val;
            },
          });
          
          chart.tooltip({
            showTitle: false,
            showMarkers: false,
          });
          
          chart
            .interval()
            .position('percent')
            .color('item')
            .label('percent', {
              content: (data) => {
                return `${data.item}: ${data.percent * 100}%`;
              },
            })
            .adjust('stack');
          
          chart.interaction('element-active');
          
          chart.render();
      }

      useEffect(()=>{
        initCharts1()
      },[])
    return (
        <>
            <Space style={{width:'100%'}}>
                <Card title='饼形图表一' >
                    <div id="container1" ></div>
                </Card>
                <Card title='饼形图表二' >
                    <div id="container2" ></div>
                </Card>
            </Space>
        </>
    );
}

export default Pie;