import * as React from 'react';
import { IMainProps } from '../_interfaces';
import template from './template';

export default class Main extends React.Component<IMainProps> {

    state: any
    constructor(props: IMainProps) {
        super(props);
        this.state = {
            firstDataReceive: false
        }
    }

    componentWillReceiveProps() {
        if (this.props.data) {
            this.setState({
                firstDataReceive: true
            })
        }

        if (this.props.reset) {
            this.setState({
                firstDataReceive: false
            })
        }
    }

    render() {
        return template(this);
    }
}