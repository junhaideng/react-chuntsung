import {Affix, Layout} from "antd";
import React from "react";
import "./GlobalLayout.css"

const {Header, Sider, Content, Footer} = Layout

class GlobalLayout extends React.Component {
    render() {
        return <>
            <Layout>
                <Affix>
                    <Header className="light">{this.props.header}</Header>
                </Affix>

                <Layout>
                    <Affix offsetTop={74}>
                        <Sider theme={this.props.theme}>{this.props.sider}</Sider>
                    </Affix>

                    <Content className={"content"}>{this.props.content}</Content>
                </Layout>
                <Footer>{this.props.footer}</Footer>

            </Layout>
        </>
    }
}

GlobalLayout.defaultProps = {
    header: "Header",
    sider: "sider",
    content: "content",
    footer: "footer",
    theme: "light",
}

export default GlobalLayout