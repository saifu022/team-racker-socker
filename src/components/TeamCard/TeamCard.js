import React from 'react';
import { Link } from 'react-router-dom';
import './TeamCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const TeamCard = (props) => {
    const { strTeam, strTeamBadge, strSport, idTeam } = props.team;
    return (
        <div className="">
            <div className="glass-card card card-width m-4">
                <div className="d-flex justify-content-center">
                    <img src={strTeamBadge} className="card-img-top card-img" alt="" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{strTeam}</h5>
                    <p className="card-text">Sports type: {strSport}</p>
                    <Link to={`/team/${strTeam}/id=${idTeam}`}><button className="btn btn-primary ">Explore <FontAwesomeIcon icon={faArrowRight} /></button></Link>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;