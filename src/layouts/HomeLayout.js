import React from 'react';
import {Link} from 'react-router-dom';
import classnames from 'classnames';
import './index.scss';

class HomeLayout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: 'agent',
            visibleTabMenu: false,
        };
    }

    setActive = (activePage) => {
        if (this.state.activePage === activePage) {
            return;
        }

        this.setState({
            activePage,
        });
    }

    visibleTabMenu = () => {
        this.setState({
            visibleTabMenu: ! this.state.visibleTabMenu,
        });
    }
    
    render () {
        const {children} = this.props;
        
        return (
            <div className="app">
                <div className="header">
                    <div className="header-menu" onClick={this.visibleTabMenu}>
                        <svg className="icon iconnine10 header-visible-menu" aria-hidden="true">
                            <use xlinkHref="#iconnine10"></use>
                        </svg>
                    </div>
                    <div>
                        <Link to="/">
                            <img className="avatar" src={require('../assets/logo/logo.svg')} alt="SRUISE" />
                        </Link>
                    </div>
                    <div>
                        <img className="header-avatar-img" src={require('../assets/logo/avatar.jpg')} alt="avatar" />
                    </div>
                </div>
                <div className="container">
                    <div className={`left-tab ${this.state.visibleTabMenu ? "active" : ''}`}>
                        <div className="tab-menu-container">
                            <div onClick={this.visibleTabMenu} className="hide-tab-menu-icon">
                                <svg className="icon icondelete1" aria-hidden="true">
                                    <use xlinkHref="#icondelete1"></use>
                                </svg>
                            </div>
                            <div className={classnames("left-tab-item", {active: this.state.activePage === "agent"})} onClick={() => this.setActive("agent")}>
                                <svg className="icon icondashboard" aria-hidden="true">
                                    <use xlinkHref="#icondashboard"></use>
                                </svg>
                                DASHBOARD
                            </div>
                            <div className={classnames("left-tab-item", {active: this.state.activePage === "agent"})} onClick={() => this.setActive("agent")}>
                                <Link to="/agent">
                                    <svg className="icon iconsitemap" aria-hidden="true">
                                        <use xlinkHref="#iconsitemap"></use>
                                    </svg>
                                    AGENT
                                </Link>
                            </div>
                            <div className={classnames("left-tab-item", {active: this.state.activePage === "settings"})} onClick={() => this.setActive("settings")}>
                                <Link to="/settings">
                                    <svg className="icon iconLC_icon_setting_line" aria-hidden="true">
                                        <use xlinkHref="#iconLC_icon_setting_line"></use>
                                    </svg>
                                    SETTINGS
                                </Link>
                            </div>
                            {/* <div className={classnames("left-tab-item", {active: this.state.activePage === "personal"})} onClick={() => this.setActive("personal")}>Personal</div> */}
                            {/* <div className={classnames("left-tab-item", {active: this.state.activePage === "others"})} onClick={() => this.setActive("others")}>Others</div> */}
                        </div>
                        <div className="history-container">
                            <h3>History</h3>
                            <ul className="history-list">
                                <li className="history-item">bjstdmngbgr02/Acceptance_texst</li>
                                <li className="history-item">bjstdmngbgr03/Acceptance_texst</li>
                                <li className="history-item">bjstdmngbgr04/Acceptance_texst</li>
                                <li className="history-item">bjstdmngbgr05/Acceptance_texst</li>
                                <li className="history-item">bjstdmngbgr06/Acceptance_texst</li>
                                <li className="history-item">bjstdmngbgr07/Acceptance_texst</li>
                            </ul>
                        </div>
                    </div>
                    <div className="main">
                        {children}
                    </div>
                </div>
                <div className="footer">&copy;2018</div>
            </div>
        );
    }
}

export default HomeLayout;
