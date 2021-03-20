import React, { useEffect, useState } from 'react';
import './Home.css'
import TeamCard from '../TeamCard/TeamCard';
import TopBanner from '../TopBanner/TopBanner';
import topBannerPhoto from '../../images/top-banner-background.jpg'

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        // const url_LaLeaga = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain';
        const url_EPL = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        fetch(url_EPL)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [])
    const topBannerContent = <h1>Team Tracker</h1>;
    return (
        <div>
            <TopBanner topBannerContent={topBannerContent}
                topBannerPhoto={topBannerPhoto} />
            <div className="team-cards d-flex justify-content-center align-items-center flex-wrap">
                {
                    teams.map(team => <TeamCard
                        key={team.idTeam}
                        team={team} />)
                }
            </div>
        </div>
    );
};

export default Home;