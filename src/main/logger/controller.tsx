
import * as React from 'react';
import { ILoggerProps } from '../../_interfaces';
import template from './template';


export default class logger extends React.Component<ILoggerProps>{

    state: any
    constructor(props: ILoggerProps) {
        super(props);
        this.state = {
            image: null,
            logData: []
        }
    }

    render() {
        return template(this);
    }
    componentWillReceiveProps(nextProps: ILoggerProps) {
        if (nextProps.data) {
            this.setState({ logData: this.state.logData.concat([nextProps.data]) });
        }
    }
}