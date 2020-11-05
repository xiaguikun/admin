import React,{useEffect,useState} from 'react';
import { Row, Col ,Card,Modal,Image } from 'antd';
import {getPic} from '../../utils/api.js';


const { Meta } = Card;

const Gallery = () => {

    const [state,setState]=useState({
        list:[],
        visible:false,
        modalImg:''
    })    
    useEffect(()=>{
        async function fn(){
            const res= await getPic();
            // console.log(res.data.list);
            setState((prevState)=>{
                return {
                    ...prevState,
                    list:res.data.list
                }
            })
        }
        fn();
    },[])
    const modalClick=(ite)=>{
        // console.log(1);
        setState((prevState)=>{
            return {
                ...prevState,
                modalImg:ite,
                visible:true
            }
        })
    }
    const handleCancel=()=>{
        setState((prevState)=>{
            return {
                ...prevState,
                visible:false
            }
        })
    }
    return (
        <>
            <Row gutter={10}>
                {
                    state.list.map((item,index)=>{
                        return (
                            <Col span={index===2 ? 4 : 5} key={index}>
                                {
                                    item.map((ite,ind)=>{
                                        return (
                                            <Card
                                            hoverable
                                            cover={<img alt="example" src={ite} />}
                                            key={ind}
                                            style={{marginBottom:'10px'}}
                                            onClick={()=>modalClick(ite)}
                                            >
                                                <Meta title="Europe Street beat" description="www.instagram.com" />
                                            </Card>
                                        )
                                    })
                                }
                            </Col> 
                        )
                    })
                }
            </Row>
            <Modal
                title="图片画廊"
                visible={state.visible}
                footer={null}
                onCancel={handleCancel}
                width={350}
                >
                     <Image
                    width={300}
                    src={state.modalImg}
                    />
            </Modal>
        </>
    );
}

export default Gallery;
