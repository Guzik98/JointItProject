import { OfferType } from '../../../../offerType';
import { useSettings } from '../../../../Settings';

const sortSalary = function (a :OfferType, b : OfferType ) : number {
    const { sortBy } = useSettings();
    const eur = 4.6;
    const usd = 4.0;
    const gbp = 5.35;

    let exchangeRateA = 1;
    let exchangeRateB = 1;
    switch (a.employment_types[0].salary?.currency) {
        case 'eur':
            exchangeRateA = eur;
            break;
        case 'usd':
            exchangeRateA = usd;
            break;
        case 'gbp':
            exchangeRateA = gbp;
            break;
        default :
            exchangeRateA = 1 ;
            break;
    }
    switch (b.employment_types[0].salary?.currency) {
        case 'eur':
            exchangeRateB = eur;
            break;
        case 'usd':
            exchangeRateB = usd;
            break;
        case 'gbp':
            exchangeRateA = gbp;
            break;
        default :
            exchangeRateB = 1 ;
            break;
    }
    if ( sortBy == 'Highest Salary'){
        if ( !b.employment_types[0]?.salary?.to || !a.employment_types[0]?.salary?.to) {
            return  0;
        }
        if (b.employment_types[0].salary?.to * exchangeRateB > a.employment_types[0]?.salary?.to * exchangeRateA) {
            return 1;
        } else {
            return -1;
        }
    }
    if ( sortBy == 'Lowest Salary'){
        if ( !b.employment_types[0]?.salary?.to || !a.employment_types[0]?.salary?.to) {
            return  0;
        }
        if (a.employment_types[0].salary?.from * exchangeRateA > b.employment_types[0]?.salary?.from * exchangeRateB) {
            return 1;
        } else {
            return -1;
        }
    }
    return 0;
};

export  default sortSalary;