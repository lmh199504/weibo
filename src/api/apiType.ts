
export interface LoginData {
    username: string;
    password: string;
};

export interface RegisterData {
    username: string;
    password: string;
    repassword: string;
    header: string;
};

export interface GetUserInfoData {
    token: string
}