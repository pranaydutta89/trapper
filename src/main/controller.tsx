import * as React from 'react';
import { IMainProps } from '../_interfaces';
import template from './template';

export default class Main extends React.Component<IMainProps> {

    constructor(props: IMainProps) {
        super(props);
    }

    render() {
        return template(this);
    }
}