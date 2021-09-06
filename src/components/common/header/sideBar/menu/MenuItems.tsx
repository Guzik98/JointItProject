import React from 'react';

import BreakfastWithPrograming from '../../../../../assets/icons/header-icons/BreakfastWithPrograming';
import Olympics from '../../../../../assets/icons/header-icons/Olympics';
import Event from '../../../../../assets/icons/header-icons/Event';
import Juniors from '../../../../../assets/icons/header-icons/Juniors';
import Index from '../../../../../assets/icons/header-icons/Index';
import Report from '../../../../../assets/icons/header-icons/Report';
import RSS from '../../../../../assets/icons/header-icons/RSS';
import Terms from '../../../../../assets/icons/header-icons/Terms';
import Help from '../../../../../assets/icons/header-icons/Help';
import Facebook from '../../../../../assets/icons/header-icons/Facebook';
import YouTube from '../../../../../assets/icons/header-icons/YouTube';
import Instagram from '../../../../../assets/icons/header-icons/Instagram';
import Linkedin from '../../../../../assets/icons/header-icons/Linkedin';

export type MenuElements = {
    text?: string,
    svg: JSX.Element,
    href?: string,
};

export const FirstItemList = [
    {
        text: 'Śniadanie z Programowaniem', svg: <BreakfastWithPrograming/>
    },
    {
        text: 'Just Join Olympics', svg: <Olympics/>
    },
    {
        text: 'Event', svg: <Event/>
    },
    {
        text: 'For Juniors', svg: <Juniors/>
    },
    {
        text: 'IT Index', svg: <Index/>
    },
    {
        text: 'Report', svg: <Report/>
    },
];

export const SecondItemList = [
    {
        text: 'RSS', svg: <RSS/>
    },
    {
        text: 'Help', svg: <Help/>
    },
    {
        text: 'Terms', svg: <Terms/>
    }
];

export const SocialLinks = [
    {
        svg: <Facebook/>, href: 'https://www.facebook.com/JustJoinIT/'
    },
    {
        svg: <Linkedin/>, href: 'https://www.linkedin.com/company/just-join-it/'
    },
    {
        svg: <YouTube/>, href: 'https://www.youtube.com/channel/UCYG1Pkg1jbnYxfJvM-1K5yg'
    },
    {
        svg: <Instagram/>, href: 'https://www.instagram.com/justjoin.it/'
    }
];