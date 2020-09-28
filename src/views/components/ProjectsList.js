import React from "react";
import {Badge, Button, Col, message, PageHeader, Row, Select, Space, Table} from "antd";
import {SearchOutlined} from "@ant-design/icons"
import {data} from "../../model/ProjectsListData"
import "./ProjectsList.css"

const {Option} = Select;

const columns = [
    {
        title: '编号',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: '课题名称',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '导师',
        dataIndex: 'mentor',
        key: 'mentor',
    }, {
        title: '学生',
        dataIndex: 'student',
        key: 'student',
    }, {
        title: '学科',
        dataIndex: 'subject',
        key: 'subject',
    }, {
        title: '批次',
        dataIndex: 'term',
        key: 'term',
    }, {
        title: '积分',
        dataIndex: 'points',
        key: 'points',
    }, {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        render: value => {
            return <Badge status={value ? "processing" : "success"} text={value ? "进行中" : "已完成"}/>
        }
    }, {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        render: value => {
            return <Button type="link" onClick={(e) => {
                e.preventDefault();
                message.info("点击查看详情了")
            }}>{value}</Button>
        }
    },
];


class ProjectsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            period: "",
            type: "",
            status: "",
            loading: true,
            data: [],
        }
        this.handleStatus = this.handleStatus.bind(this)
        this.handleType = this.handleType.bind(this)
        this.handlePeriod = this.handlePeriod.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        // 请求数据模拟
        // TODO: ajax请求数据
        setTimeout(() => {
            this.setState({
                loading: false,
                data: data.list,
            })
        }, 1000)
    }

    handlePeriod(value) {
        this.setState({
            period: value
        })
    }

    handleType(value) {
        this.setState({
            type: value
        })
    }

    handleStatus(value) {
        this.setState({
            status: value
        })
    }

    handleClick() {
        this.setState({
            loading: true
        })
        setTimeout(() => {
            this.setState({
                loading: false
            },)
        }, 1000)
        console.log(this.state)
    }

    render() {
        return <>
            <PageHeader title="课题列表"/>
            <div className="search">
                <Space>
                    <span style={{fontSize: 16, minWidth: 40}}>筛选</span>
                    <Select placeholder={"期数"} style={{width: 240}} onChange={this.handlePeriod}>
                        <Option value={"6"}>䇹政项目第六期</Option>
                        <Option value={"7"}>䇹政项目第七期</Option>
                        <Option value={"8"}>䇹政项目第八期</Option>
                    </Select>
                    <Select placeholder={"类别"} style={{width: 240}} onChange={this.handleType}>
                        <Option value={"1"}>生农医药类</Option>
                        <Option value={"2"}>人文社科类</Option>
                        <Option value={"3"}>机械控制自动化类</Option>
                        <Option value={"4"}>数理类</Option>
                        <Option value={"5"}>能源化工材料类</Option>
                        <Option value={"6"}>信息技术类</Option>
                    </Select>
                    <Select placeholder={"状态"} style={{width: 240}} onChange={this.handleStatus}>
                        <Option value={"1"}>自主立项待审核</Option>
                        <Option value={"2"}>等待审核</Option>
                        <Option value={"3"}>尚未开放申请</Option>
                        <Option value={"4"}>等待学生申请</Option>
                        <Option value={"5"}>等待导师审核</Option>
                        <Option value={"6"}>师生匹配成功</Option>
                        <Option value={"7"}>自主立项</Option>
                        <Option value={"8"}>进行中</Option>
                        <Option value={"9"}>结项完毕</Option>
                        <Option value={"10"}>已终止</Option>
                    </Select>
                    <Button type="primary" icon={<SearchOutlined/>} onClick={this.handleClick}>搜索</Button>
                </Space>
            </div>
            <Row>
                <Col offset={1} span={22}>
                    <Table dataSource={this.state.data} loading={this.state.loading} columns={columns} rowKey={"id"}
                           pagination={{pageSize: 8}}/>
                </Col>
            </Row>
        </>
    }
}

export default ProjectsList