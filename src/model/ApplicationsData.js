import * as Mock from "mockjs";

export const data = Mock.mock({
    "data|6-20": [{
        id: "@increment()",
        name: "@cword(2,10)",
        mentor: "@cword(2,3)",
        applicant: "@cword(2,3)",
        term: "@cword(6)",
        status: "@boolean()",
        apply_time: "@date(yyyy-mm-dd)",
        action: "操作"
    }]
})