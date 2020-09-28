import * as Mock from "mockjs";


export const data = Mock.mock({
        "list|10-20": [{
            id: "@increment()",
            name: "@cword(3,20)",
            mentor: "@cword(1,5)",
            student: "@cword(1,5)",
            subject: "@cword(1,5)",
            term: "@cword(1,5)",
            points: "@integer(0,100)",
            status: "@boolean",
            action: "详情"
        }]
    }
)