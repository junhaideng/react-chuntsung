import * as Mock from "mockjs";

export const data = Mock.mock({
    "data|20-60": [{
        id: "@increment",
        name: "@cword(2,3)",
        department: "@cword(3,6)",
        direction: "@cword(3,6)",
        email: "@email()",
        action: "操作"
    }]
})