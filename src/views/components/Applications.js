import React from "react";
import {Badge, Button, Col, PageHeader, Row, Table} from "antd";
import {data} from "../../model/ApplicationsData";
// 我的报名
const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    }, {
        title: '课题',
        dataIndex: 'name',
        key: 'name',
    }, {
        title: '导师',
        dataIndex: 'mentor',
        key: 'mentor',
    }, {
        title: '申请人',
        dataIndex: 'applicant',
        key: 'applicant',
    }, {
        title: '批次',
        dataIndex: 'term',
        key: 'term',
    }, {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        render: value => {
            return <Badge status={value ? "processing" : "success"} text={value ? "审核中" : "已通过"}/>
        }
    },
    {
        title: '申请时间',
        dataIndex: 'apply_time',
        key: 'apply_time',
    }, {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        render: value => {
            return <Button type={"link"}>{value}</Button>
        }
    }
]

class Applications extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true,
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
            <PageHeader title={"我的报名"}/>
            <Row>
                <Col span={22} offset={1}>
                    <Table dataSource={this.state.data} loading={this.state.loading} columns={columns} rowKey={"id"}
                           pagination={{pageSize: 8}}/>

                </Col>
            </Row>
        </>
    }
}


export default Applications

