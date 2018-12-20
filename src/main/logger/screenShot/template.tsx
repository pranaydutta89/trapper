import ScreenShot from "./controller";
import * as React from 'react';

export default (_this: ScreenShot) => {
    return (<div>
        {_this.props.image ?
            <div>
                <img className="img-fluid" src={_this.props.image} />
            </div>:
            <div className='no_message'>
                Click on log for state
            </div>
    }
    </div>)
}