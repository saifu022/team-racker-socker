import React from 'react';
import './TopBanner.css';


const TopBanner = (props) => {
    const { topBannerContent, topBannerPhoto } = props;
    const bannerStyle = {
        backgroundImage: `url(${topBannerPhoto})`
    }
    return (
        <div className="top-banner" style={bannerStyle}>
            {topBannerContent}
        </div>
    );
};

export default TopBanner;