import { useSettings } from '../../../../../Settings';
import { OfferType } from '../../../../../types/offerType';
import { programingLanguageIconArray } from '../../../iconBar/programing-language';

const ConcatFunction = () : { name: string; category: string }[] => {
    const { data } = useSettings();
    let category: string;

    const cityAll = data?.map((item: OfferType) => {
        return (item.city);
    });
    const companyAll = data?.map((item: OfferType) => {
        return (item.company_name);
    });

    const companyUnig = companyAll?.filter(function (item, pos, self) {
        return self.indexOf(item) == pos;
    });

    const CityUnig = cityAll?.filter(function (item, pos, self) {
        return self.indexOf(item) == pos;
    });

    const city = CityUnig?.map((item) => {
        category = 'Location';
        return ({ name: item, category: category });
    });

    const company = companyUnig?.map((item) => {
        category = 'Company';
        return ({ name: item, category: category });
    });

    const skill = programingLanguageIconArray?.map((item) => {
        category = 'Skill';
        return ({ name: item.name, category: category });
    });

    if ( !city || !company || !skill){
        throw new Error('wait for data');
    }

    return skill.concat(city).concat(company);

};

export default ConcatFunction;