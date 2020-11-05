import React from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import { Menu } from 'antd';

import menuList from '@/resource/menuConfig.js';

const { SubMenu } = Menu;



const NavMemu = () => {
    const dispatch=useDispatch();

    // console.log(menuList);
    const history=useHistory()

    function handleClick(e) {
        dispatch({
            type:'toChangeTitle',
            title:e.item.props.title
        });
        sessionStorage.setItem('pageTitle',e.item.props.title);
        history.push(e.key);
        // console.log('click', e);
      }

    return (
        <div className='nav-menu'>
            <h1>后台管理系统</h1>
            <Menu onClick={handleClick} mode="vertical" theme='dark'>
                {
                    menuList.map((item)=>{
                        if(!!item.children){
                            return (
                                <SubMenu key={item.key} title={item.title}>
                                    {
                                        item.children.map((ite)=>{
                                            return (
                                                <Menu.Item key={ite.key} title={ite.title}>{ite.title}</Menu.Item>
                                            )
                                        })
                                    }
                                </SubMenu>
                            )
                        }else{
                            return <Menu.Item key={item.key} title={item.title}>{item.title}</Menu.Item>
                        }
                    })
                }
            </Menu>
        </div>
    );
}

export default NavMemu;