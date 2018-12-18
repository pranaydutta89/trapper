import * as React from 'react'
import { IScreenShotProps } from '../../../_interfaces';
import template from './template';


export default class ScreenShot extends React.Component<IScreenShotProps>{
    constructor(props:IScreenShotProps){
        super(props);
    }

    render(){
        return template(this);
    }
}