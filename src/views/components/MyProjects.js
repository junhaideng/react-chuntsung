import React from "react";
import {Badge, Button, Col, PageHeader, Row, Table} from "antd";
import {data} from "../../model/MyProjectsData";

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
            return <Button type={"link"}>{value}</Button>
        }
    },
];

class MyProjects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading: false,
                data: data.data
            })
        }, 1000)
    }

    render() {
        return <>
            <PageHeader title="我的课题"/>
            <Row>
                <Col span={22} offset={1}>
                    <Table dataSource={this.state.data} loading={this.state.loading} columns={columns} rowKey={"id"}
                           pagination={{pageSize: 8}}/>
                </Col>
            </Row>

        </>
    }
}

export default MyProjects