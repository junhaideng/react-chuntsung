import React from "react";
import {Button, Result} from 'antd';
import {Link} from "react-router-dom";

export default function NotFound() {
    return (<>
        <Result
            status="404"
            title="404"
            subTitle="抱歉，你请求的页面不存在"
            extra={<Button type="primary"><Link to="/dashboard">返回主页面</Link></Button>}
        />
    </>)
}