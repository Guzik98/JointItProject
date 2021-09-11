import BrandStories from '../../../../../../assets/icons/header-icons/BrandStories';
import Offers from '../../../../../../assets/icons/header-icons/Offers';
import Geek from '../../../../../../assets/icons/header-icons/Geek';
import Matchmaking from '../../../../../../assets/icons/header-icons/Matchmaking';

export type HeaderLinkType = {
    text: string,
    href: string
    svg?: JSX.Element
};

export const RightSiderReferenceArray = [
    {
        text: 'Offers',
        href: 'http://localhost:3000',
        svg: <Offers/>
    },
    {
        text: 'Brand Stories',
        href: 'https://justjoin.it/brands',
        svg: <BrandStories/>
    },
    {
        text: 'Geek',
        href: 'https://geek.justjoin.it',
        svg: <Geek/>
    },
    {
        text: 'Matchmaking',
        href: 'https://geek.justjoin.it',
        svg: <Matchmaking/>
    }
];

export default RightSiderReferenceArray;