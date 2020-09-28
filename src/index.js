import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import routes from "./routes/routes";
import {Provider} from "react-redux"; // 提供全局状态
import {applyMiddleware, createStore} from "redux";
import reducer from "./redux/reducers";
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render(
    // <React.StrictMode>
    <Provider store={store}>
        <HashRouter>
            <App>
                <Switch> {/*Switch 只匹配一个， 不使用switch的话，全部被渲染的都会被匹配*/}
                    <Route path='/' exact render={() => (
                        <Redirect to="/dashboard"/>
                    )}/>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            render={() => {
                                if(route.meta.title){
                                    document.title = route.meta.title
                                }
                                return <route.component/>
                            }}

                        />
                    ))}
                </Switch>
            </App>
        </HashRouter>
    </Provider>
    // </React.StrictMode>
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
