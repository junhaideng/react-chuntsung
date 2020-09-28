import React from "react";
import {Badge, Button, Col, PageHeader, Row, Table, Tooltip} from "antd";
import {data} from "../../model/TasksData";

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: '课题',
        dataIndex: 'name',
        key: 'name',
        ellipsis: true
    },
    {
        title: '任务',
        dataIndex: 'task',
        key: 'task',
    },
    {
        title: '活动',
        dataIndex: 'activity',
        key: 'activity',
    },
    // ID	课题	任务	活动	状态	评价	积分	操作
    {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        render: value => {
            return <Badge status={value ? "processing" : "success"} text={value ? "进行中" : "已完成"}/>
        }
    }, {
        title: '评价',
        dataIndex: 'evaluation',
        key: 'evaluation',
        ellipsis: {
            showTitle: false,
        },
        // 对数据进行自定义设置
        render: evaluation => (
            <Tooltip placement="topLeft" title={evaluation}>
                {evaluation}
            </Tooltip>
        ),
    },
    {
        title: '积分',
        dataIndex: 'points',
        key: 'points',
    },
    {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        render: value => {
            return <Button type={"link"}>{value}</Button>
        }
    },
]

class Tasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState(
                {
                    data: data.data,
                    loading: false
                }
            )
        })
    }

    render() {
        return <>
            <PageHeader title="我的活动"/>
            <Row>
                <Col span={22} offset={1}>
                    <Table dataSource={this.state.data} loading={this.state.loading} columns={columns} rowKey={"id"}
                           pagination={{pageSize: 8}}/>
                </Col>
            </Row>
        </>
    }
}

export default Tasks