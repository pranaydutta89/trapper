
import * as React from 'react';
import { ILoggerProps } from '../../_interfaces';


export default class logger extends React.Component<ILoggerProps>{

    state: any
    constructor(props: ILoggerProps) {
        super(props);
        this.state = {
            image: null,
            logData: []
        }
    }
    
    
    componentWillReceiveProps() {
        if (this.props.data) {
            this.setState({ logData: this.state.logData.push(this.props.data) });
        }
    }
}