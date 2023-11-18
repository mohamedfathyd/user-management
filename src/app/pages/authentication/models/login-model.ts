export interface LoginInterFace{
    success:boolean,
    message:string,
    description:string
    data: [{
        id:string,
        name:string,
        phone:string,
        email:string,
        type:string,
        }]
}