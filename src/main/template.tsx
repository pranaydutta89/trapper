import mainController from "./controller";
import * as React from 'react';
import Logger from "./logger/controller";

export default (_this:mainController)=>{
    return (
        <div>
            main
             <Logger data={_this.props.data}/>
            </div>
    )
}