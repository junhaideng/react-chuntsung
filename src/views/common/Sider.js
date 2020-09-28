import React from "react";
import {Menu} from "antd";
import {DashboardOutlined, ProfileOutlined, SendOutlined, UserOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

const {SubMenu} = Menu;

class Sider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

//TODO: 这里要设置openKeys 和 selectedKeys, 使用全局变量？
    render() {
        return <>
            <Menu mode={"inline"} defaultOpenKeys={["control"]} defaultSelectedKeys={["dashboard"]} >
                <SubMenu key={"control"} title={
                    <span>
                        <DashboardOutlined/>
                        <span>管理面板</span>
                    </span>}>
                    <Menu.Item key={"dashboard"}><Link to={"/dashboard"}>我的主页</Link></Menu.Item>
                </SubMenu>
                <SubMenu key={"management"} title={
                    <span>
                        <SendOutlined/>
                        <span>流程管理</span>
                    </span>}>
                    <Menu.ItemGroup>
                        <Menu.Item key={"project-list"}><Link to="/projects/list">课题列表</Link></Menu.Item>
                        <Menu.Item key={"project-mine"}><Link to="/projects/me">我的课题</Link></Menu.Item>
                        <Menu.Item key={"applications"}><Link to="/applications">我的报名</Link></Menu.Item>
                        <Menu.Item key={"tasks"}><Link to="/tasks/me">我的活动</Link></Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <SubMenu key={"user-management"} title={
                    <span>
                        <UserOutlined/>
                        <span>用户管理</span>
                    </span>
                }>
                    <Menu.Item key={"mentors"}><Link to="/mentors">导师列表</Link></Menu.Item>
                </SubMenu>
                <SubMenu key={"info"} title={<span>
                    <ProfileOutlined/>
                    <span>个人信息</span>
                </span>}>
                    <Menu.Item key={"profile"}><Link to="/user/profile">修改信息</Link></Menu.Item>
                </SubMenu>
            </Menu>
        </>
    }
}

export default Sider