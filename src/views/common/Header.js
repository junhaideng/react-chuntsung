import React from "react";
import {SET_LOGIN} from "../../redux/actions/action-types";
import {connect} from "react-redux";
import {Button, Col, Dropdown, Menu, message, Row, Space} from "antd";
import {DownOutlined, LogoutOutlined} from "@ant-design/icons";
import LoginModal from "./LoginModal";
import img from "../../symbol.png"

const menu = (
    <Menu>
        {/*<Menu.Item icon={<ProfileOutlined />} onClick={()=>{message.info("查看个人信息")}}>*/}
        {/*    个人信息*/}
        {/*</Menu.Item>*/}
        <Menu.Item icon={<LogoutOutlined/>} onClick={()=>{message.info("退出登录")}}>
                退出登录
        </Menu.Item>
    </Menu>
);


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            username: "Edgar",
        }
        this.handleLogin = this.handleLogin.bind(this)
        this.handleRegister = this.handleRegister.bind(this)
        this.handleHidden = this.handleHidden.bind(this)
    }

    handleLogin() {
        this.setState({
            visible: true
        })
    }

    handleHidden() {
        this.setState({
            visible: false
        })
    }

    handleRegister() {
        console.log("注册")
    }

    render() {
        const {isLogin} = this.props;
        return <>
            <Row justify={"space-between"} align={"middle"}>
                {/*左边的标题*/}
                <Col span={12}>
                        <img src={img} alt="sjtu" style={{height: "64px", marginLeft: "-60px"}}/>
                </Col>
                {/*右边的登录注册或者显示相关登录之后的信息*/}
                {isLogin ?
                    <Col span={2} offset={5}>
                        <Dropdown overlay={menu}><Button type={"link"} className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            {this.state.username} <DownOutlined/>
                        </Button></Dropdown>
                    </Col>
                    : <Col span={3} offset={9}>
                        <Row align={"middle"}>
                            <Space>
                                <Button onClick={this.handleLogin} type={"primary"}>登录</Button>
                                <Button onClick={this.handleRegister} type={"primary"}>注册</Button>
                            </Space>
                        </Row>
                    </Col>}
            </Row>
            <LoginModal hidden={this.handleHidden} visible={this.state.visible} setLogin={this.props.setLogin}/>
        </>
    }

}

// 如果每一个组件都要访问state，那么每个组件都要定义需要的方法
function mapStateToProps(state) {
    return {
        isLogin: state.isLogin
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setLogin: (payload) => dispatch({type: SET_LOGIN, payload: payload})
    }
}

Header.defaultProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Header)