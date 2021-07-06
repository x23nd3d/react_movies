import React, {Component} from "react";
import './main.css';
import Hamburger from "../hamburger";
import Navigation from "../navigation";
import Button from "../button";
import NavigationList from '../navigationList/navigationList';

export default class Main extends Component {
render() {
    return(
        <>
            <div className="container">
            <div className="top-panel">
                <Hamburger/>
                <Navigation/>
            </div>

                <div className="middle-panel">
                    <div className="greet">
                        <p className="greet-big">We make just a good</p>
                        <p className="greet-descr">Professional shooting and editing. Short video of the day of filming.</p>
                        <Button href="/projects" text="Our Projects"/>
                    </div>
                        <div className="rectangle">
                            <div className="rectangle-item"></div>
                        </div>

                </div>

                <div className="bottom-panel">
                    <ul className="footer-nav">
                        <li className="footer-navbar">
                            <a href="/instagram" className="footer-navbar-link">instagram</a>
                        </li>
                        <li className="footer-navbar">
                            <a href="/facebook" className="footer-navbar-link">facebook</a>
                        </li>
                        <li className="footer-navbar">
                            <a href="/telegram" className="footer-navbar-link">telegram</a>
                        </li>
                    </ul>
                    <NavigationList/>
                </div>
            </div>
            </>

    )
}
}
