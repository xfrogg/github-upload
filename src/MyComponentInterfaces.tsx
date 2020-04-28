export interface IThing{
    id:string;
    message:string;
}
export interface IMyComponentProps{
    message:string;
    things: IThing[];
}

export interface IChildComponentProps{
    id:string;
    message:string;
    fooHandler:(t:IChildComponentProps)=>void;
}