import React from "react";
import {data} from "../../model/DashboardData"
import {Button, Col, List, PageHeader, Row, Tag} from "antd";
import "./DashBoard.css"
import {Link} from "react-router-dom";


class DashBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            loadMore: false,
            data: [],
            count: 0, //
        }
        this.handleClick = this.handleClick.bind(this)
        this.loadMore = this.loadMore.bind(this)
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading: false,
                data: data.list.slice(0, 8),
            })
        }, 500)

    }

    handleClick(e) {
        console.log(e)
    }

    loadMore() {
        this.setState({
            loadMore: true
        })
        setTimeout(() => {
            this.setState({
                data: this.state.data.concat(this.state.data),
                loadMore: false
            })
        }, 1000)
    }


    render() {
        const {data, loading} = this.state;
        return <>
            <PageHeader title={"通知"}/>
            <Row>
                <Col span={14} offset={1}>
                    <List
                        size="small"
                        loading={loading}
                        dataSource={data}
                        split={false}
                        loadMore={
                            loading ? null : <Row>
                                <Col span={2} offset={11}>
                                    <Button style={{
                                        textAlign: 'center',
                                        marginTop: 12,
                                        height: 32,
                                    }} onClick={this.loadMore} loading={this.state.loadMore}
                                            type={"primary"}>加载更多</Button>
                                </Col>
                            </Row>
                        }
                        renderItem={item =>
                            <List.Item onClick={this.handleClick.bind(this, item.id)}>
                                <Link to={"#"}>{item.title}</Link>
                                <Tag style={{float: "right"}}>{item.date}</Tag>
                            </List.Item>
                        }
                    />
                </Col>
            </Row>
        </>
    }
}


export default DashBoard