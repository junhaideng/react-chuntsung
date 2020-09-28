import * as Mock from "mockjs";

export const data = Mock.mock({
    "data|8-20": [{
        id: "@increment",
        name: "@cword(2,5)",
        task: "@cword(2,5)",
        activity: "@cword(2,5)",
        status: "@boolean()",
        evaluation: "@sentence",
        points: "@integer(0,10)",
        action: "操作"
    }]
})