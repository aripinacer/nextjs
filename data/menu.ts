export interface menuInterface {
    id : number;
    name : string;
    icon : string;
    link : string;
    path : string;
}

export type menuType =  {
    dataUser : menuInterface[];
    dataAdmin : menuInterface[];
}

export const menuDataUser = [
    { "id": 1, "name": "home", "icon": "fas fa-users", "link": "/user"  , "path" : "/user" },
]

export const menuDataAdmin = [
    { "id": 1, "name": "Home", "icon": "fas fa-users", "link": "/admin/user" , "path" : "/admin/user" },
]