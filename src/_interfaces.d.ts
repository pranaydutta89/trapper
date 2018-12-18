import { errorType } from "./enums";

export interface IMainProps{
    data:IMessage
}

export interface ILoggerProps{
    data:IMessage
}

export interface IScreenShotProps{
    image:string
}

export interface IStartProps{
    devMode:boolean
}

export interface IMessage{
    error_type:errorType,
    message:string,
    image:string
}