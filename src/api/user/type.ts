
export interface LoginData {
    email: string;
    password: string;
};

export interface RegisterData {
    username: string;
    password: string;
    code: string;
    email: string;
};

export interface GetUserInfoData {
    token: string
}

export interface GetCode {
	email: string
}
