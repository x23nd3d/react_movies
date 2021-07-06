import React, {Component} from 'react';
import './navigationList.css';

export default class navigationList extends Component {


    render() {

        return (
            <div className="navlist">
                <NavigationListItem date="05.05" title="White river" description="Fogs and forests of the Bashkir mountains"/>
                <NavigationListItem date="08.06" title="The Urals" description="We born in the Urals"/>
                <NavigationListItem date="25.06" title="Moscow trip" description="Country in country"/>
            </div>

        )
    }

}

const NavigationListItem = ({ date, title, description }) => {

    const wordLength = description.length < 30 ? "100%" : "75%"

    return (
            <div className="navlist-item">
                <p className="nav-date">{date}</p>
                <p className="nav-title">{title}</p>
                <p style={{
                    fontFamily: 'Georgia, sans-serif',
                    fontStyle: 'italic',
                    width: wordLength,
                    height: 35
                }}>{description}</p>
        </div>

    )
}
