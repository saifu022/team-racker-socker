import React from 'react';
import male from '../../images/male.png'
import female from '../../images/female.png'
import './TeamBanner.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faFlag, faFutbol, faVenusMars } from '@fortawesome/free-solid-svg-icons'

const TeamBanner = (props) => {
    const { strTeam, strCountry, strGender, strSport, intFormedYear } = props.team;
    //CONDITIONAL RENDER
    const teamPhotoURL = ((strGender + '').toLowerCase() === 'male') ? male : female;
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="team-banner row ">
                <div className="col-md-6">
                    <div className="p-3 team-banner-details">
                        <h1> {strTeam}</h1>
                        <br />
                        <h5> <FontAwesomeIcon icon={faMapMarkerAlt} /> Founded: {intFormedYear} </h5>
                        <h5> <FontAwesomeIcon icon={faFlag} /> Country: {strCountry} </h5>
                        <h5> <FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport} </h5>
                        <h5> <FontAwesomeIcon icon={faVenusMars} /> Gender: {strGender}</h5>
                    </div>
                </div>
                <div className="col-md-6 p-4 text-end">
                    <img src={teamPhotoURL} alt="" className="team-photo" />
                </div>
            </div>
        </div>
    );
};

export default TeamBanner;