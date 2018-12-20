import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Main from './main/controller';
import testDataJson from './testData';
import { IStartProps } from './_interfaces';

class App extends React.Component<IStartProps> {

    state: any;
    constructor(props: IStartProps) {

        super(props);
        this.state = {
            messageData: null
        }
        this.init();

    }

    private init() {
        if (!this.props.devMode) {
            chrome.runtime.onMessage.addListener(
                (message, sender, sendResponse: any) => {
                    if (message.error_type && message.message && message.image) {
                        this.setState({
                            messageData: {
                                error_type: message.error_type,
                                message: message.message,
                                image: message.image
                            }
                        });
                    }
                });
        }
        else {
            let count = 0;
            setInterval(() => {
                if (count === testDataJson.length) {
                    count = 0;
                }
                const obj = testDataJson[count];
                this.setState({
                    messageData: {
                        error_type: obj.error_type,
                        message: obj.message,
                        image: obj.image
                    }
                });
                count += 1;
            }, 1000);
        }
    }

    render() {
        return (
            <div>
                start
                <Main data={this.state.messageData} />
            </div>
        )
    }
}


ReactDOM.render((
    <App devMode={false} />
), document.getElementById('app'))