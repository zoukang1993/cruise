import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

@withRouter
class Settings extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return(
            <div>
                {/* <svg className="icon icondelete" aria-hidden="true">
                    <use xlinkHref="#icondelete"></use>
                </svg> */}

                Settings
            </div>
        );
    }
}

export default Settings;
