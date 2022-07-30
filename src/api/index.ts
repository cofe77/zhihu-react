import { myAxios as axios } from "./myAxios"

interface ApiBase {
    baseUrl: string,
    users: string,
    questions: string,
    answers: string,
    getCommentsList: string,
    updateAnswerMeta: string,
    newComment:string,
    userSetting:string,
    userCenter:string
}

const base:ApiBase = {
    baseUrl: "/api",
    users: "/users",
    questions: "/questions",
    answers:"/answers",
    getCommentsList: "/comments/getCommentsByAnswerId",
    updateAnswerMeta: "/answers/updateAnswerMeta",
    newComment: "/comments",
    userSetting: "/userSetting",
    userCenter: "/userCenter"
}

interface ApiObject {
    login:(data:{})=>Promise<any>,
    register:(data:{})=>Promise<any>,
    getUserInfoById: (userId: string) => Promise<any>,
    getUserInfoByName: (username: string) => Promise<any>,
    getQuestionByCategory:()=>Promise<any>,
    getAnswersList: (req: {})=>Promise<any>,
    getCommentsList: (req: {})=>Promise<any>,
    updateAnswerMeta: (param: {}) => Promise<any>,
    getQuestionById: (questionId: string) => Promise<any>,
    newComment: (comment:{})=>Promise<any>,
    newQuestion: (question:{})=>Promise<any>,
    newAnswer: (answer:{})=>Promise<any>,
    toggleFollow: (data:{userId:string,targetUserId:string})=>Promise<any>,
    updateNick: (data:{id:string,nick:string})=>Promise<any>,
    updateUserSex: (data: { id: string, sex: string }) => Promise<any>,
    updateUserSlogan: (data: { id: string, slogan: string }) => Promise<any>,
    updateUserAddress: (data: { id: string, address: string }) => Promise<any>,
    updateUserProfession: (data: { id: string, profession: string }) => Promise<any>,
    updateUserOccupation: (data: { userId: string, organization: string, position: string }) => Promise<any>,
    deleteUserOccupation: (id: string) => Promise<any>,
    updateUserUserDesc: (data: { id: string, userDesc: string }) => Promise<any>,
    addUserEducation: (data: { userId: string, school: string, major: string, dgree: number, hireTime: number, graduTime: number}) => Promise<any>,
    deleteUserEducation: (id: string) => Promise<any>,
    getUserDynamicByUsername: (username: string) => Promise<any>,
}

const api: ApiObject = {
    login(data) {
        return axios.post(base.baseUrl + base.users + "/login", data)
    },
    register(data) {
        return axios.post(base.baseUrl + base.users + "/register", data)
    },
    getUserInfoById(userId) {
        return axios.get(base.baseUrl + base.users + "/" + userId)
    },
    getUserInfoByName(username) {
        return axios.get(base.baseUrl + base.users + "/getUserInfoByName/" + username)
    },
    getQuestionByCategory() {
        return axios.get(base.baseUrl + base.questions, {
            data: {
                type: "hot",
                pageIndex: 2,
                pageSize: 10
            }
        })
    },
    getAnswersList(questionId) {
        return axios.get(base.baseUrl + base.answers + "/" + questionId)
    },
    getCommentsList(answerId) {
        return axios.get(base.baseUrl + base.getCommentsList + "/" + answerId)
    },
    updateAnswerMeta(data) {
        return axios.post(base.baseUrl + base.updateAnswerMeta, data)
    },
    getQuestionById(questionId) {
        return axios.get(base.baseUrl + base.questions + "/" + questionId)
    },
    newComment(data) {
        return axios.post(base.baseUrl + base.newComment, data)
    },
    newQuestion(data) {
        return axios.post(base.baseUrl + base.questions, data)
    },
    newAnswer(data) {
        return axios.post(base.baseUrl + base.answers, data)
    },
    toggleFollow(data) {
        return axios.post(base.baseUrl + base.users + "/follow", data)
    },
    updateNick(data) {
        return axios.post(base.baseUrl + base.userSetting + "/nick", data)
    },
    updateUserSex(data) {
        return axios.post(base.baseUrl + base.userSetting + "/sex", data)
    },
    updateUserSlogan(data) {
        return axios.post(base.baseUrl + base.userSetting + "/slogan", data)
    },
    updateUserAddress(data) {
        return axios.post(base.baseUrl + base.userSetting + "/address", data)
    },
    updateUserProfession(data) {
        return axios.post(base.baseUrl + base.userSetting + "/profession", data)
    },
    updateUserOccupation(data) {
        return axios.post(base.baseUrl + base.userSetting + "/occupation", data)
    },
    deleteUserOccupation(id) {
        return axios.delete(base.baseUrl + base.userSetting + "/occupation/" + id)
    },
    updateUserUserDesc(data) {
        return axios.post(base.baseUrl + base.userSetting + "/desc", data)
    },
    addUserEducation(data) {
        return axios.post(base.baseUrl + base.userSetting + "/education", data)
    },
    deleteUserEducation(id) {
        return axios.delete(base.baseUrl + base.userSetting + "/education/" + id)
    },
    getUserDynamicByUsername(name) {
        return axios.get(base.baseUrl + base.userCenter + "/dynamic/" + name)
    }
}

export default api
