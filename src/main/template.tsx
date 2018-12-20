import mainController from "./controller";
import * as React from 'react';
import Logger from "./logger/controller";

export default (_this: mainController) => {
    return (
        <div className="main_panel">
            {_this.state.firstDataReceive ?
                < div >
                    <div className="row">
                        <div className="heading col-sm-3">Logs</div>
                        <div className="heading col-sm-9">Application State</div>
                    </div>
                    <hr />
                    <div>
                        <Logger data={_this.props.data} />
                    </div>
                </div> : <div className="no_message"> No Message Received Yet. </div>
            }
        </div>
    )
}