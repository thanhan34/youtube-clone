import React from 'react'
import './SearchPage.css'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
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
            <VideoRow
                views="200K"
                subs="880K"
                description="Most repeated questions"
                timestamp="3 weeks ago"
                channel="PTE Intensive"
                title="Reading Intensive"
                image="https://scontent.fbne5-1.fna.fbcdn.net/v/t1.0-9/p843x403/119205828_172268961047488_3829120666834806483_o.jpg?_nc_cat=111&_nc_sid=730e14&_nc_ohc=oOgf479LA6IAX_5-u1-&_nc_ht=scontent.fbne5-1.fna&tp=6&oh=6189da0a971c477e282113add43f6f51&oe=5FA47741" />
            <VideoRow
                views="200K"
                subs="880K"
                description="Best learning material"
                timestamp="3 weeks ago"
                channel="PTE Intensive"
                title="How to learn RS - Ease method"
                image="https://scontent.fbne6-1.fna.fbcdn.net/v/t15.5256-10/118702638_398117391159000_5852704232567277208_n.jpg?_nc_cat=106&_nc_sid=ad6a45&_nc_ohc=OwvVdLl5sqAAX8wrCGC&_nc_ht=scontent.fbne6-1.fna&oh=1f7451f2182b5004f7806963b674885f&oe=5FA560E2" />
            <VideoRow
                views="200K"
                subs="880K"
                description="Best learning material"
                timestamp="3 weeks ago"
                channel="PTE Intensive"
                title="Tool to practice repeat sentence"
                image="https://scontent.fbne5-1.fna.fbcdn.net/v/t1.0-9/118934178_171194454488272_7640266917383394037_n.png?_nc_cat=100&_nc_sid=730e14&_nc_ohc=QbG_Dhh0hCIAX9PhjSG&_nc_ht=scontent.fbne5-1.fna&oh=4f08522c9da9313fa8a80b5d8948a089&oe=5FA6FEB4" />

            <VideoRow
                views="200K"
                subs="880K"
                description="Most repeated questions"
                timestamp="3 weeks ago"
                channel="PTE Intensive"
                title="Reading Intensive"
                image="https://scontent.fbne5-1.fna.fbcdn.net/v/t1.0-9/p843x403/119205828_172268961047488_3829120666834806483_o.jpg?_nc_cat=111&_nc_sid=730e14&_nc_ohc=oOgf479LA6IAX_5-u1-&_nc_ht=scontent.fbne5-1.fna&tp=6&oh=6189da0a971c477e282113add43f6f51&oe=5FA47741" />
            <VideoRow
                views="200K"
                subs="880K"
                description="Best learning material"
                timestamp="3 weeks ago"
                channel="PTE Intensive"
                title="How to learn RS - Ease method"
                image="https://scontent.fbne6-1.fna.fbcdn.net/v/t15.5256-10/118702638_398117391159000_5852704232567277208_n.jpg?_nc_cat=106&_nc_sid=ad6a45&_nc_ohc=OwvVdLl5sqAAX8wrCGC&_nc_ht=scontent.fbne6-1.fna&oh=1f7451f2182b5004f7806963b674885f&oe=5FA560E2" />
            <VideoRow
                views="200K"
                subs="880K"
                description="Best learning material"
                timestamp="3 weeks ago"
                channel="PTE Intensive"
                title="Tool to practice repeat sentence"
                image="https://scontent.fbne5-1.fna.fbcdn.net/v/t1.0-9/118934178_171194454488272_7640266917383394037_n.png?_nc_cat=100&_nc_sid=730e14&_nc_ohc=QbG_Dhh0hCIAX9PhjSG&_nc_ht=scontent.fbne5-1.fna&oh=4f08522c9da9313fa8a80b5d8948a089&oe=5FA6FEB4" />
            <VideoRow
                views="200K"
                subs="880K"
                description="Most repeated questions"
                timestamp="3 weeks ago"
                channel="PTE Intensive"
                title="Reading Intensive"
                image="https://scontent.fbne5-1.fna.fbcdn.net/v/t1.0-9/p843x403/119205828_172268961047488_3829120666834806483_o.jpg?_nc_cat=111&_nc_sid=730e14&_nc_ohc=oOgf479LA6IAX_5-u1-&_nc_ht=scontent.fbne5-1.fna&tp=6&oh=6189da0a971c477e282113add43f6f51&oe=5FA47741" />
            <VideoRow
                views="200K"
                subs="880K"
                description="Best learning material"
                timestamp="3 weeks ago"
                channel="PTE Intensive"
                title="How to learn RS - Ease method"
                image="https://scontent.fbne6-1.fna.fbcdn.net/v/t15.5256-10/118702638_398117391159000_5852704232567277208_n.jpg?_nc_cat=106&_nc_sid=ad6a45&_nc_ohc=OwvVdLl5sqAAX8wrCGC&_nc_ht=scontent.fbne6-1.fna&oh=1f7451f2182b5004f7806963b674885f&oe=5FA560E2" />
            <VideoRow
                views="200K"
                subs="880K"
                description="Best learning material"
                timestamp="3 weeks ago"
                channel="PTE Intensive"
                title="Tool to practice repeat sentence"
                image="https://scontent.fbne5-1.fna.fbcdn.net/v/t1.0-9/118934178_171194454488272_7640266917383394037_n.png?_nc_cat=100&_nc_sid=730e14&_nc_ohc=QbG_Dhh0hCIAX9PhjSG&_nc_ht=scontent.fbne5-1.fna&oh=4f08522c9da9313fa8a80b5d8948a089&oe=5FA6FEB4" />
            <VideoRow
                views="200K"
                subs="880K"
                description="Most repeated questions"
                timestamp="3 weeks ago"
                channel="PTE Intensive"
                title="Reading Intensive"
                image="https://scontent.fbne5-1.fna.fbcdn.net/v/t1.0-9/p843x403/119205828_172268961047488_3829120666834806483_o.jpg?_nc_cat=111&_nc_sid=730e14&_nc_ohc=oOgf479LA6IAX_5-u1-&_nc_ht=scontent.fbne5-1.fna&tp=6&oh=6189da0a971c477e282113add43f6f51&oe=5FA47741" />
            <VideoRow
                views="200K"
                subs="880K"
                description="Best learning material"
                timestamp="3 weeks ago"
                channel="PTE Intensive"
                title="How to learn RS - Ease method"
                image="https://scontent.fbne6-1.fna.fbcdn.net/v/t15.5256-10/118702638_398117391159000_5852704232567277208_n.jpg?_nc_cat=106&_nc_sid=ad6a45&_nc_ohc=OwvVdLl5sqAAX8wrCGC&_nc_ht=scontent.fbne6-1.fna&oh=1f7451f2182b5004f7806963b674885f&oe=5FA560E2" />
            <VideoRow
                views="200K"
                subs="880K"
                description="Best learning material"
                timestamp="3 weeks ago"
                channel="PTE Intensive"
                title="Tool to practice repeat sentence"
                image="https://scontent.fbne5-1.fna.fbcdn.net/v/t1.0-9/118934178_171194454488272_7640266917383394037_n.png?_nc_cat=100&_nc_sid=730e14&_nc_ohc=QbG_Dhh0hCIAX9PhjSG&_nc_ht=scontent.fbne5-1.fna&oh=4f08522c9da9313fa8a80b5d8948a089&oe=5FA6FEB4" /><VideoRow
                views="200K"
                subs="880K"
                description="Most repeated questions"
                timestamp="3 weeks ago"
                channel="PTE Intensive"
                title="Reading Intensive"
                image="https://scontent.fbne5-1.fna.fbcdn.net/v/t1.0-9/p843x403/119205828_172268961047488_3829120666834806483_o.jpg?_nc_cat=111&_nc_sid=730e14&_nc_ohc=oOgf479LA6IAX_5-u1-&_nc_ht=scontent.fbne5-1.fna&tp=6&oh=6189da0a971c477e282113add43f6f51&oe=5FA47741" />
            <VideoRow
                views="200K"
                subs="880K"
                description="Best learning material"
                timestamp="3 weeks ago"
                channel="PTE Intensive"
                title="How to learn RS - Ease method"
                image="https://scontent.fbne6-1.fna.fbcdn.net/v/t15.5256-10/118702638_398117391159000_5852704232567277208_n.jpg?_nc_cat=106&_nc_sid=ad6a45&_nc_ohc=OwvVdLl5sqAAX8wrCGC&_nc_ht=scontent.fbne6-1.fna&oh=1f7451f2182b5004f7806963b674885f&oe=5FA560E2" />
            <VideoRow
                views="200K"
                subs="880K"
                description="Best learning material"
                timestamp="3 weeks ago"
                channel="PTE Intensive"
                title="Tool to practice repeat sentence"
                image="https://scontent.fbne5-1.fna.fbcdn.net/v/t1.0-9/118934178_171194454488272_7640266917383394037_n.png?_nc_cat=100&_nc_sid=730e14&_nc_ohc=QbG_Dhh0hCIAX9PhjSG&_nc_ht=scontent.fbne5-1.fna&oh=4f08522c9da9313fa8a80b5d8948a089&oe=5FA6FEB4" /><VideoRow
                views="200K"
                subs="880K"
                description="Most repeated questions"
                timestamp="3 weeks ago"
                channel="PTE Intensive"
                title="Reading Intensive"
                image="https://scontent.fbne5-1.fna.fbcdn.net/v/t1.0-9/p843x403/119205828_172268961047488_3829120666834806483_o.jpg?_nc_cat=111&_nc_sid=730e14&_nc_ohc=oOgf479LA6IAX_5-u1-&_nc_ht=scontent.fbne5-1.fna&tp=6&oh=6189da0a971c477e282113add43f6f51&oe=5FA47741" />
            <VideoRow
                views="200K"
                subs="880K"
                description="Best learning material"
                timestamp="3 weeks ago"
                channel="PTE Intensive"
                title="How to learn RS - Ease method"
                image="https://scontent.fbne6-1.fna.fbcdn.net/v/t15.5256-10/118702638_398117391159000_5852704232567277208_n.jpg?_nc_cat=106&_nc_sid=ad6a45&_nc_ohc=OwvVdLl5sqAAX8wrCGC&_nc_ht=scontent.fbne6-1.fna&oh=1f7451f2182b5004f7806963b674885f&oe=5FA560E2" />
            <VideoRow
                views="200K"
                subs="880K"
                description="Best learning material"
                timestamp="3 weeks ago"
                channel="PTE Intensive"
                title="Tool to practice repeat sentence"
                image="https://scontent.fbne5-1.fna.fbcdn.net/v/t1.0-9/118934178_171194454488272_7640266917383394037_n.png?_nc_cat=100&_nc_sid=730e14&_nc_ohc=QbG_Dhh0hCIAX9PhjSG&_nc_ht=scontent.fbne5-1.fna&oh=4f08522c9da9313fa8a80b5d8948a089&oe=5FA6FEB4" /><VideoRow
                views="200K"
                subs="880K"
                description="Most repeated questions"
                timestamp="3 weeks ago"
                channel="PTE Intensive"
                title="Reading Intensive"
                image="https://scontent.fbne5-1.fna.fbcdn.net/v/t1.0-9/p843x403/119205828_172268961047488_3829120666834806483_o.jpg?_nc_cat=111&_nc_sid=730e14&_nc_ohc=oOgf479LA6IAX_5-u1-&_nc_ht=scontent.fbne5-1.fna&tp=6&oh=6189da0a971c477e282113add43f6f51&oe=5FA47741" />
            <VideoRow
                views="200K"
                subs="880K"
                description="Best learning material"
                timestamp="3 weeks ago"
                channel="PTE Intensive"
                title="How to learn RS - Ease method"
                image="https://scontent.fbne6-1.fna.fbcdn.net/v/t15.5256-10/118702638_398117391159000_5852704232567277208_n.jpg?_nc_cat=106&_nc_sid=ad6a45&_nc_ohc=OwvVdLl5sqAAX8wrCGC&_nc_ht=scontent.fbne6-1.fna&oh=1f7451f2182b5004f7806963b674885f&oe=5FA560E2" />
            <VideoRow
                views="200K"
                subs="880K"
                description="Best learning material"
                timestamp="3 weeks ago"
                channel="PTE Intensive"
                title="Tool to practice repeat sentence"
                image="https://scontent.fbne5-1.fna.fbcdn.net/v/t1.0-9/118934178_171194454488272_7640266917383394037_n.png?_nc_cat=100&_nc_sid=730e14&_nc_ohc=QbG_Dhh0hCIAX9PhjSG&_nc_ht=scontent.fbne5-1.fna&oh=4f08522c9da9313fa8a80b5d8948a089&oe=5FA6FEB4" />
        </div>
    )
}

export default SearchPage
