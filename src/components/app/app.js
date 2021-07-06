import React, {Component} from "react";
import Main from "../main/main";
import './app.css';
import Spinner from "../spinner";
import bgImage from '../main/main.jpg';

export default class App extends Component {

    state = {
        loading: true
    }


    componentDidMount() {
        console.log('mounted')
        setTimeout(() => {
            this.setState(({loading}) => {
                return {
                    loading:!loading
                }
            })
        }, 1000)

    }

    render() {

        const app = this.state.loading ? <Spinner/> : <Main/>;
        const body = document.getElementsByTagName('body')[0];
        body.style.backgroundImage = this.state.loading ? "none" : `url(${bgImage})`
        body.style.backgroundColor = this.state.loading ? "black" : "unset";

        return(
            <>
                {app}
                    {/*<Main/>*/}
            </>

        )
    }
}