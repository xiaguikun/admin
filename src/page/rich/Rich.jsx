import React,{useState} from 'react';
import {Card, Space, Button} from 'antd';


import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Rich = () => {
    const [data,setData]=useState({
        editorState: EditorState.createEmpty(),
        contentState:{}
    })

    const onEditorStateChange=(editorState)=>{
        // console.log(editorState);
        setData((prevData)=>{
            return {
                ...prevData,
                editorState:editorState,
            }
        })
    }

    const onContentStateChange=(contentState)=>{
        // console.log(contentState);
        setData((prevData)=>{
            return {
                ...prevData,
                contentState:contentState
            }
        })
    }

    const onUpdata=()=>{
        //draftToHtml()将内容转化成html格式
        console.log(draftToHtml(data.contentState));
    }
    const onReset=()=>{
        setData((prevData)=>{
            return {
                ...prevData,
                editorState: EditorState.createEmpty(),
            }
        })
    }
    return (
        <>
            <Space style={{width:'100%'}}>
                <Card title='富文本编辑器'>
                    <Button type='primary' style={{marginRight:'10px',marginBottom:'10px'}} onClick={onReset}>重置</Button>
                    <Button type='primary' onClick={onUpdata}>上传</Button>
                    <Editor
                        editorState={data.editorState}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        onEditorStateChange={onEditorStateChange}
                        onContentStateChange={onContentStateChange}
                    />
                </Card>
            </Space>
        </>
    );
}

export default Rich;