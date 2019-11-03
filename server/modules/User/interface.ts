export interface IUser {

    readonly id: number,
    username: string,
    password: string,
    email: string
}

export interface IUserDetail extends IUser {
    id: number,
    username: string,
    password: string,
    email: string
}

export function createUser({id, username, password, email}: any): IUser {
    return {
        id, username, password, email
    }
}

export function createUsers(data: any): IUser[] {
    return data.map(createUser);
}

export function createUserById({id, username, password, email}: any): IUserDetail {
    return {
        id, username, password, email
    }
}

export function createUserByEmail({id, username, password, email}: any): IUserDetail {
    return {
        id, username, password, email
    }
}