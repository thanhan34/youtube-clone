import React from 'react'
import './SearchPage.css'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow
                image="https://scontent.fbne6-1.fna.fbcdn.net/v/t1.0-9/113185043_158749415732776_2542907241341825600_n.png?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=7ehwVYBd_KIAX8qHOge&_nc_ht=scontent.fbne6-1.fna&oh=5cc1fccb02ba8c72b741400c466c9a0f&oe=5FA27D3C"
                channel="PTE Intensive"
                verified
                subs="800K"
                noOfVideos={382}
                description="You can find awesome PTE learning videos. Plus, you can pick up tricks and tips to upgrade your PTE score in the shortest time."
            />
            <hr />

        </div>
    )
}

export default SearchPage
