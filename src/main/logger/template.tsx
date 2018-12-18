import logger from "./controller";
import * as React from 'react';
import ScreenShot from "./screenShot/controller";
import { IMessage } from "../../_interfaces";

export default (_this: logger) => {
    return (
        <div>
            logger
            <div>
                log data here
                {
                    _this.state.logData.map((val: IMessage, index: number) => {
                        return (
                            <div key={index} onClick={() => _this.setState({ image: val.image })}>
                                <div>{val.error_type}</div>
                                <div>{val.message}</div>
                            </div>)
                    })
                }
            </div>

            <div>
                show screen shots here
                <ScreenShot image={_this.state.image}></ScreenShot>
            </div>
        </div>
    )
}