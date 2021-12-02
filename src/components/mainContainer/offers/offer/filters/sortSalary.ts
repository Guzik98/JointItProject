import { OfferType } from '../../../../../types/offerType';
import { useSettings } from '../../../../../Settings';

const eur = 4.6;
const usd = 4.0;
const gbp = 5.35;
const chf = 4.25;

export const checkCurrency = (currency: string | undefined) : number => {

    let exchangeRate;

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
        case 'chf':
            exchangeRate = chf;
            break;
        default :
            exchangeRate = 1 ;
            break;
    }

    return exchangeRate;
};

export const sortSalary = function (a :OfferType, b : OfferType ) :number {
    const { sortBy, employmentType } = useSettings();
        let exchangeRate = 1, helpATo = 1, helpBTo  = 1,
         helpAFrom  = 1,  helpBFrom = 1,
         indexA = 0, indexB = 0,
            mandate = '';

        if (employmentType === 'Mandate Contract') {
             mandate = 'mandate_contract';
        }

        a.employment_types.map(item => {
            if (item.salary?.currency != null) {
                exchangeRate  =  checkCurrency(item?.salary?.currency);
            }
            if (employmentType != 'All') {
                if (item.type === (employmentType.toLowerCase() || mandate) && item.salary != null) {
                  return  (
                      (helpATo = item?.salary?.to * exchangeRate)
                      &&
                      (helpAFrom = item?.salary?.from * exchangeRate)
                  );
                }
            }
            if ( indexA === 1 ){
                return  null ;
            }
            indexA++;

            if (item.salary == null && sortBy === 'Lowest Salary') {
                return (
                    (helpATo = 10000000)
                    &&
                    (helpAFrom = 1000000)
                );
            }
            if (item.salary != null && employmentType === 'All') {
                return (
                    (helpATo = item.salary?.to * exchangeRate)
                    &&
                    (helpAFrom = item?.salary?.from * exchangeRate)
                );
            }
        });

        b.employment_types.map(item => {
            if (item.salary?.currency !== null) {
                exchangeRate  =  checkCurrency(item?.salary?.currency);
            }
            if (employmentType !== 'All') {
                indexB++;
                if (item.type === (employmentType.toLowerCase() || mandate)
                    && item.salary !== null
                ) {
                   return (
                       (helpBTo = item?.salary?.to * exchangeRate)
                       &&
                       (helpBFrom = item?.salary?.from * exchangeRate)
                   );
                }
            }
            if (indexB === 1) {
                return null;
            }
            indexB++;
            if (item.salary === null && sortBy === 'Lowest Salary' ) {
                return (
                    ( helpBTo = 10000000 ) &&
                    ( helpBFrom = 1000000 )
                );
            }
            if (item.salary !== null && employmentType === 'All') {
                return (
                    (helpBTo = item.salary?.to * exchangeRate)
                    &&
                    (helpBFrom = item?.salary?.from * exchangeRate)
                );
            }
        });

    if ( sortBy === 'Highest Salary'){
        if ( helpBTo === helpATo ) {
            if ( helpBFrom > helpAFrom ) {
                return 1;
            }
        }
        if ( helpBTo > helpATo ) {
            return  1;
        }
    }

    if ( sortBy === 'Lowest Salary'){
        if ( helpBFrom === helpAFrom ) {
            if ( helpBTo < helpATo) {
                return 1;
            }
        }
        if ( helpBFrom < helpAFrom ) {
            return  1;
        }
    }
    return  -1;
};

