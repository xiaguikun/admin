import React from 'react';

import { Menu } from 'antd';

import menuList from '@/resource/menuConfig.js';

const { SubMenu } = Menu;



const NavMemu = () => {
    // console.log(menuList);
    function handleClick(e) {
        console.log('click', e);
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
                                                <Menu.Item key={ite.key} >{ite.title}</Menu.Item>
                                            )
                                        })
                                    }
                                </SubMenu>
                            )
                        }else{
                            return <Menu.Item key={item.key}>{item.title}</Menu.Item>
                        }
                    })
                }
            </Menu>
        </div>
    );
}

export default NavMemu;