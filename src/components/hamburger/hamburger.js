import React, {Component} from 'react';
import './hamburger.css';


export default class Hamburger extends Component {

    state = {
        toggle: false,
        active: null
    }

    toggleHamburger = () => {
            this.setState(({toggle}) => {
                return {
                    toggle: !toggle
                }
            });

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.toggle !== this.state.toggle) {
            console.log('state changed')
            this.setState(({active}) => {
                const newClazz = this.state.toggle ?
                    "hamburger__hovered animate__animated animate__bounceInDown" :
                    "hamburger__hovered animate__animated animate__bounceOutUp";

                return {
                    active: newClazz
                }
            });

            if (!this.state.toggle) {
                setTimeout(() => {
                    this.setState(({active}) => {
                        const newClazz = null
                        return {
                            active: newClazz
                        }
                    });
                }, 1000)
            }


        }
    }


    render() {

        const view = this.state.active ? <ExtendedHam clazz={this.state.active} toggle={this.toggleHamburger}/> : null;

        const hamClickable = this.state.toggle ? {pointerEvents: "none"} : null;

        return (
            <>
                <div className="hamburger" style={hamClickable} onClick={this.toggleHamburger}>
                    <div className="main-part">
                        <div className="line-1">
                            <div className="line-2">
                                <div className="line-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
                {view}
            </>
        )
    }


}

const ExtendedHam = ({clazz, toggle}) => {

    return (
        <div className={clazz}>
            <ul className="hamburger__hovered-list animate__animated ">
                <li className="hamburger__hovered-item">
                    <a href="/wedding" className="hamburger__hovered-link">Wedding video</a>
                </li>
                <li className="hamburger__hovered-item">
                    <a href="/music" className="hamburger__hovered-link">Music videos</a>
                </li>
                <li className="hamburger__hovered-item">
                    <a href="/commercials" className="hamburger__hovered-link">Commercials</a>
                </li>
                <li className="hamburger__hovered-item">
                    <a href="/videos" className="hamburger__hovered-link">Creating videos</a>
                </li>
                <li className="hamburger__hovered-item">
                    <a href="/travel" className="hamburger__hovered-link"><s style={{borderWidth: 10}}>Travel video</s></a>
                </li>
                <div className="hamburger__hovered-close" onClick={toggle.bind(this)}></div>
            </ul>

        </div>
    )
}
