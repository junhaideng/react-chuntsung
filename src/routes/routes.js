import DashBoard from "../views/components/DashBoard";
import ProjectsList from "../views/components/ProjectsList";
import MyProjects from "../views/components/MyProjects";
import Applications from "../views/components/Applications";
import Mentors from "../views/components/Mentors";
import Profile from "../views/components/Profile";
import Tasks from "../views/components/Tasks";
import NotFound from "../views/common/NotFound";

let routes = [
    {
        path: "/dashboard",
        component: DashBoard,
        exact: true,
        meta: {
            title: "我的主页",
            key: ["dashboard"],
        }
    }, {
        path: "/projects/list",
        component: ProjectsList,
        exact: true,
        meta: {
            title: "课题列表",
            key: ["project-list"]
        }
    },
    {
        path: "/projects/me",
        component: MyProjects,
        exact: true,
        meta: {
            title: "我的课题",
            key: ["project-mine"]
        }
    },
    {
        path: "/applications",
        component: Applications,
        exact: true,
        meta: {
            title: "我的报名",
            key: ["applications"]
        }
    },
    {
        path: "/tasks/me",
        component: Tasks,
        exact: true,
        meta: {
            title: "我的活动",
            key: ["tasks"]
        }
    },
    {
        path: "/mentors",
        component: Mentors,
        exact: true,
        meta: {
            title: "导师列表",
            key: ["mentors"]
        }
    },
    {
        path: "/user/profile",
        component: Profile,
        exact: true,
        meta: {
            title: "修改信息",
            key: ["profile"]
        }
    },
    {
        // 放在最后
        path: "*",
        component: NotFound,
        exact: false,
        meta: {
            title: "404 Not Found",
            key: null
        }
    }
]

export default routes