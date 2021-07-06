import React, {Component} from "react";
import './main.css';
import Hamburger from "../hamburger";
import Navigation from "../navigation";
import Button from "../button";
import NavigationList from '../navigationList/navigationList';
import Greet from "../greet";
import FooterNavigation from "../footer-navigation";
require('typeface-montserrat');
require('animate.css');

export default class Main extends Component {
render() {
    return(
        <> <Hamburger/>
            <div className="container">
            <div className="top-panel">

                <Navigation/>
            </div>

                <div className="middle-panel">
                        <Greet title="We make just a good" descr="Professional shooting and editing. Short video of the day of filming.">
                            <Button href="/projects" text="Our Projects"/>
                        </Greet>

                        <div className="rectangle">
                            <div className="rectangle-item"></div>
                        </div>

                </div>

                <div className="bottom-panel">
                    <FooterNavigation/>
                    <NavigationList/>
                </div>
            </div>
            </>

    )
}
}
