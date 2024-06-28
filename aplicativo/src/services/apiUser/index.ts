import { AxiosResponse } from "axios";
import axios  from 'axios';

export const apiUser = axios.create({
    baseURL: "https://e0c3249e44b6fbc3ec2d3bb8f5ad42dd.serveo.net/users",  

});
    
export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
}

export function getUser(id: number): Promise<AxiosResponse<IUser, any>> {
    const url = 'email';

    return apiUser.get(url);
}

// export function createUser(user: IUser): Promise<AxiosResponse<IUser>> {
//     return apiUser.post<IUser>('', user);
// }
