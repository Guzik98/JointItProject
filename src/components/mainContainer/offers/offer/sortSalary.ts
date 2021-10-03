import { OfferType } from '../../../../offerType';
import { useSettings } from '../../../../Settings';

const eur = 4.6;
const usd = 4.0;
const gbp = 5.35;

export const checkCurrency = (currency: string | undefined) => {

    let exchangeRate = 1;

    switch (currency){
        case 'eur':
            exchangeRate = eur;
            break;
        case 'usd':
            exchangeRate = usd;
            break;
        case 'gbp':
            exchangeRate = gbp;
            break;
        default :
            exchangeRate = 1 ;
            break;
    }

    return exchangeRate;
};

export const sortSalary = function (a :OfferType, b : OfferType ) :number {
    const { sortBy, employmentType } = useSettings();
        let exchangeRate = 1 ;
        let helpA  = 1;
        let helpB  = 1;
        a.employment_types.map(item => {
            if (item.salary?.currency != null) {
                exchangeRate  =  checkCurrency(item?.salary?.currency);
            }
            if (employmentType != 'All') {
                if (item.type === employmentType.toLowerCase() && item.salary != null) {
                  return   helpA = item?.salary?.to * exchangeRate;
                }
                if (employmentType == 'Mandate Contract' && item.salary != null) {
                    if (item.type === 'mandate_contract '){
                        return   helpA = item?.salary?.to * exchangeRate;
                    }
                }
            }  else {
                if (item.salary != null) {
                   return  helpA = item.salary?.to * exchangeRate;
                }
            }
        });
        b.employment_types.map(item => {
            if (item.salary?.currency != null) {
                exchangeRate  =  checkCurrency(item?.salary?.currency);
            }
            if (employmentType != 'All') {
                if (item.type === employmentType.toLowerCase() && item.salary != null) {
                   return  helpB = item?.salary?.to * exchangeRate;
                }
                if (employmentType == 'Mandate Contract' && item.salary != null) {
                    if (item.type === 'mandate_contract '){
                        return   helpB = item?.salary?.to * exchangeRate;
                    }
                }
            } else {
                if (item.salary != null) {
                  return   helpB = item.salary?.to * exchangeRate;
                }
            }
        });
    if ( sortBy === 'Highest Salary'){
        if ( helpB > helpA ) {
            return  1;
        }
    }
    if ( sortBy === 'Lowest Salary'){
        if (helpA === 1 || helpB == 1 ) {
            return 0;
        }
        if ( helpA > helpB ) {
            return  1;
        }
    }

    return  -1;
};

