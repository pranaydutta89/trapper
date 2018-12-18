import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Main from './main/controller';
import * as testDataJson from './testData.json';

class App extends React.Component {

    state: any;
    constructor(props: any) {

        super(props);
        this.state = {
            messageData: null
        }
        this.init();

    }

    private init() {
        if (chrome) {
            // chrome.runtime.onMessage.addListener(
            //     async (request, sender, sendResponse: any) => {
            //         console.log("background.js got a message")
            //         console.log(request);
            //         console.log(sender);
            //         const image = await new Promise((res, rej) => {
            //             chrome.tabs.captureVisibleTab(null, {}, (image: string) => {
            //                 // You can add that image HTML5 canvas, or Element.
            //                 res(image);
            //             });
            //         })
            //         this.setState({
            //             alert: {
            //                 error_type: sendResponse.error_type,
            //                 message: sendResponse.message,
            //                 image
            //             }
            //         });
            //     });
        }
        else {
            let count = 0;
            setInterval(() => {
                if (count === testDataJson.length) {
                    count = 0;
                }
                const obj = testDataJson[count];
                this.setState({
                    alert: {
                        error_type: obj.error_type,
                        message: obj.message,
                        image: obj.image
                    }
                });
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
    <App />
), document.getElementById('app'))