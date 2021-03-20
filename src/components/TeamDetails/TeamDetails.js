import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetails.css'
import TopBanner from '../TopBanner/TopBanner';
import TeamBanner from '../TeamBanner/TeamBanner';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";



const TeamDetails = () => {
    const { id } = useParams();
    const [team, setTeam] = useState({});
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
    }, [id])
    const { strTeamBadge, strTwitter, strWebsite, strYoutube, strFacebook, strTeamFanart1, strDescriptionEN } = team;
    const topBannerContent = <a href={`http://${strWebsite}`} target="_blank" rel="noopener noreferrer"><img src={strTeamBadge} alt="" className="team-badge" /></a>
    const topBannerPhoto = strTeamFanart1;
    console.log('team: ', team)
    return (
        <div className="team-details">
            <TopBanner topBannerContent={topBannerContent}
                topBannerPhoto={topBannerPhoto} />
            <TeamBanner team={team} />
            <div className="d-flex justify-content-center">
                <div className="team-details-text">
                    <p>{strDescriptionEN} </p>
                    <div className="social-media-icons text-center">
                        <a href={`https://${strFacebook}`} target="_blank" rel="noopener noreferrer" className="facebook social"> <FontAwesomeIcon icon={faFacebook} size="2x" /> </a>
                        <a href={`https://${strTwitter}`} target="_blank" rel="noopener noreferrer" className="twitter social"> <FontAwesomeIcon icon={faTwitter} size="2x" /> </a>
                        <a href={`https://${strYoutube}`} target="_blank" rel="noopener noreferrer" className="youtube social"> <FontAwesomeIcon icon={faYoutube} size="2x" /> </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamDetails;