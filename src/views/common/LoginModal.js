import React from "react";
import {Button, Checkbox, Col, Form, Input, Modal, Row} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import "./LoginModal.css"





class LoginModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        }
        this.handleCancel = this.handleCancel.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleCancel() {
        this.props.hidden();
    }

    handleLogin(values){
        // value 是表单中的字段
        this.setState({
            loading: true
        })
        setTimeout(()=>{
            this.setState({
                loading: false,
            })
            console.log('Success:', values);
            this.props.hidden();
            this.props.setLogin(true)

        }, 1000)
    }


    render() {
        return <>
            <Modal
                title="登录"
                visible={this.props.visible}
                footer={null}
                onCancel={this.handleCancel}
            >
                <Row style={{marginTop: 20}}>
                    <Col span={16} offset={4}>
                        <Form
                            layout={{
                                labelCol: {span: 8},
                                wrapperCol: {span: 16},
                            }}
                            name="basic"
                            initialValues={{remember: true}}
                            className={"login-form"}
                            onFinish={this.handleLogin}
                        >
                            <Form.Item
                                name="username"
                                rules={[{required: true, message: '请输入用户名!'}]}
                            >
                                <Input prefix={<UserOutlined/>} placeholder="用户名"/>
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{required: true, message: '请输入密码!'}]}
                            >
                                <Input
                                    prefix={<LockOutlined/>}
                                    type="password"
                                    placeholder="密码"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>记住我</Checkbox>
                                </Form.Item>
                                {/*TODO: 这里之后可以使用Link*/}
                                <Button className="login-form-forgot" type="link">
                                    忘记密码
                                </Button>
                            </Form.Item>
                            <Form.Item style={{textAlign: "center"}}>
                                <Button loading={this.state.loading} type="primary" htmlType="submit" className="login-form-button">
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </Modal>
        </>
    }
}


export default LoginModal