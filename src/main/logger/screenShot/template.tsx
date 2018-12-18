import ScreenShot from "./controller";
import * as React from 'react';

export default (_this: ScreenShot) => {
    return (<div>
        <img src={_this.props.image} />
    </div>)
}