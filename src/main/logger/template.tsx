import logger from "./controller";
import * as React from 'react';
import ScreenShot from "./screenShot/controller";
import { IMessage } from "../../_interfaces";

export default (_this: logger) => {
    return (
        <div className="row">
            <div className="logs col-sm-3">
                {
                    _this.state.logData.map((val: IMessage, index: number) => {
                        return (
                            <div key={index}>
                                <div onClick={() => _this.setState({ image: val.image })}>
                                    <div><label>Type - </label><span className={`${val.error_type}`}>{val.error_type}</span></div>
                                    <div><label>Message - </label>
                                        <span className={`${val.error_type}`}>{val.message}
                                        </span>
                                    </div>
                                </div>
                                <hr />
                            </div>)
                    })
                }
            </div>

            <div className="col-sm-9">
                <div className="align-center">
                    <ScreenShot image={_this.state.image}></ScreenShot>
                </div>
            </div>
        </div>
    )
}