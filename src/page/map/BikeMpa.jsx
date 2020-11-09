import React,{useEffect} from 'react';
import { Card} from 'antd';
import AMapLoader from '@amap/amap-jsapi-loader';

let map;
const BikeMpa = () => {
    const initMap=()=>{
        AMapLoader.load({
            "key": "0e733054578567988a9a1ad79d2673c1",         // 申请好的Web端开发者Key，首次调用 load 时必填
            "version": "1.4.15",   // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
            "plugins": [],           // 需要使用的的插件列表，如比例尺'AMap.Scale'等
            "AMapUI": {             // 是否加载 AMapUI，缺省不加载
                "version": '1.1',   // AMapUI 缺省 1.1
                "plugins":[],       // 需要加载的 AMapUI ui插件
            },
            "Loca":{                // 是否加载 Loca， 缺省不加载
                "version": '1.3.2'  // Loca 版本，缺省 1.3.2
            },
        }).then((AMap)=>{
            map = new AMap.Map('container',{
                zoom:12,
                center:[120.264619,30.305451],
                viewMode:'3D' // 地图模式
            });

            AMap.plugin(['AMap.ToolBar','AMap.Driving'],function(){//异步同时加载多个插件
                var toolbar = new AMap.ToolBar();
                map.addControl(toolbar);

                //规划线路
                var driving = new AMap.Driving({
                    // 驾车路线规划策略，AMap.DrivingPolicy.LEAST_TIME是最快捷模式
                    policy: AMap.DrivingPolicy.LEAST_TIME
                  })                  
                  var startLngLat = [120.264619,30.305451]
                  var endLngLat = [120.433362,30.235491]
                  
                  driving.search(startLngLat, endLngLat, function (status, result) {
                    // 未出错时，result即是对应的路线规划方案
                    let path=[];
                    result.routes[0].steps.forEach(item=>{
                        item.path.forEach(ite=>{
                            path.push([ite.lng,ite.lat])
                        })
                    })
                    //根据规划的路径添加路径图
                    var polyline = new AMap.Polyline({
                        path: path,  
                        borderWeight: 5, // 线条宽度，默认为 1
                        strokeColor: 'blue', // 线条颜色
                        lineJoin: 'round' // 折线拐点连接处样式
                        });                    
                        // 将折线添加至地图实例
                        map.add(polyline);
                  })

                });

            var marker = new AMap.Marker({
                position: new AMap.LngLat(120.264619,30.305451),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
                title: '杭州千锋教育'
            });
            map.add(marker);
        }).catch(e => {
            console.log(e);
        })
    }

    useEffect(()=>{
        initMap();
    },[])

    return (
        <>
            <Card>
                <div id="container" style={{width:'100%',height:'420px'}}>
                    
                </div>
            </Card>
        </>
    );
}

export default BikeMpa;