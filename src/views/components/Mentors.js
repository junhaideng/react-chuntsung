import React from "react";
import {Button, Col, PageHeader, Row, Table} from "antd";
import {data} from "../../model/MentorsData"
// ID	姓名	院系	方向	E-mail	操作
const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    }, {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    }, {
        title: '院系',
        dataIndex: 'department',
        key: 'department',
    }, {
        title: '方向',
        dataIndex: 'direction',
        key: 'direction',
    }, {
        title: 'E-mail',
        dataIndex: 'email',
        key: 'email',
    }, {
        // TODO: action对应的是某个数据的操作
        // 应该可以获取id，然后通过id来查找对应的数据
        // 使用render属性，可以对数据进行自定义显示，做个超链接即可
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        render: value => {
            return <Button type={"link"}>{value}</Button>
        }
    },
]

class Mentors extends React.Component {
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
                data: data.data,
                loading: false
            })
        }, 1000)
    }


    render() {
        return <>
            <PageHeader title="导师列表"/>
            <Row>
                <Col span={22} offset={1}>
                    <Table dataSource={this.state.data} loading={this.state.loading} columns={columns} rowKey={"id"}
                           pagination={{pageSize: 8}}/>
                </Col>
            </Row>

        </>
    }
}

export default Mentors