import React from "react";
import {Button, Col, Form, Input, PageHeader, Row, Select, Spin} from "antd";

const {Option} = Select;

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const onFinish = (values) => {
    console.log(values);
};

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            // username: "", //TODO: 从后端获取
            // gender: "",
            // studentID: "",
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading: false,
                username: "Edgar", //TODO: 从后端获取
                gender: "男",
                studentID: "xxxxxxxx",
            })
        }, 2000)
        // TODO：如何更新表单里面的值
        this.forceUpdate()
    }

    render() {
        return <>
            <PageHeader title="修改信息"/>
            <Row>
                <Col span={14} offset={4}>
                    <Spin spinning={this.state.loading}>
                        <Form {...layout} name="form" onFinish={onFinish}>
                            <Form.Item
                                name="username"
                                label="姓名"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input placeholder="姓名"/>
                            </Form.Item>
                            <Form.Item
                                name="gender"
                                label="性别"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Select placeholder="性别">
                                    <Option value="男">男</Option>
                                    <Option value="女">女</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                name="studentID"
                                label="学号"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input placeholder="学号"/>
                            </Form.Item>

                            <Form.Item
                                name="grade"
                                label="年级"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input placeholder="年级"/>
                            </Form.Item>
                            <Form.Item
                                name="department"
                                label="院系"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input placeholder={"院系"}/>
                            </Form.Item>
                            <Form.Item
                                name="email"
                                label="E-mail"
                                rules={[
                                    {
                                        required: true,
                                        type: "email"
                                    },
                                ]}
                            >
                                <Input placeholder={"E-mail"}/>
                            </Form.Item>
                            <Form.Item
                                name="phone"
                                label="手机"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input placeholder={"手机"}/>
                            </Form.Item>
                            <Form.Item
                                name="telephone"
                                label="电话"
                            >
                                <Input placeholder={"电话"}/>
                            </Form.Item>

                            <Form.Item
                                name="major"
                                label="专业"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input placeholder={"专业"}/>
                            </Form.Item>

                            <Form.Item
                                name="ranking"
                                label="综合排名"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input placeholder={"综合排名(999/999)"}/>
                            </Form.Item>

                            <Form.Item
                                name="experiences"
                                label="科研经历"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input.TextArea autoSize={{minRows: 3}} placeholder={"科研经历"}/>

                            </Form.Item>


                            <Form.Item
                                name="result"
                                label="研究成果"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input.TextArea autoSize={{minRows: 3}} placeholder={"研究成果"}/>

                            </Form.Item>

                            <Form.Item
                                name="honors"
                                label="个人荣誉"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input.TextArea autoSize={{minRows: 3}} placeholder={"个人荣誉"}/>

                            </Form.Item>

                            <Form.Item wrapperCol={{...layout.wrapperCol, offset: 8}}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Spin>
                </Col>
            </Row>
        </>
    }
}

export default Profile