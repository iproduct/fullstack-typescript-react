import { Role, User } from "./user.model"
const MOCK_USERS = [
{
    "firstName": "Trayan",
    "lastName": "Iliev",
    "username": "trayan",
    "email": "t_iliev@fmi.uni-sofia.bg",
    "password": "$2a$10$GVX82cfYHdo3ebD.8./Fsuwa6YroQM2VKfJpkTg9yGbpoIHuugOiS",
    "imageUrl": "https://avatars2.githubusercontent.com/u/8014435?s=460&u=b71421722a561314935ee12ff33d49ecd0518045&v=4",
    "roles": [Role.ADMIN]
},
{
    "firstName": "Georgi",
    "lastName": "Petrov",
    "username": "georgi",
    "email": "george123@gmail.com",
    "password": "$2a$10$GVX82cfYHdo3ebD.8./Fsuwa6YroQM2VKfJpkTg9yGbpoIHuugOiS",
    "imageUrl": "https://avatars2.githubusercontent.com/u/8014435?s=460&u=b71421722a561314935ee12ff33d49ecd0518045&v=4",
    "roles": [Role.READER, Role.AUTHOR]
},

] as User[];

export default MOCK_USERS;