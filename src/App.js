import React from 'react';
import './App.css';
import GlobalLayout from "./views/common/GlobalLayout";
import Header from "./views/common/Header";
import Sider from "./views/common/Sider";
import Footer from "./views/common/Footer";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKeys:[]
        }
    }

    render() {
        return <>
            <GlobalLayout header={<Header/>} sider={<Sider/>} footer={<Footer/>} content={this.props.children}/>
        </>
    }
}

export default App
