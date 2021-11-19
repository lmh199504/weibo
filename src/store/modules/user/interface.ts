

export default interface UserModuleTypes {
    userInfo: UserInfo
    token: string
}


interface UserInfo {
	username: string
	email: string
	header: string
	status: number
	id: number
}