import { OfferType } from '../../../../types/offerType';
import { useSettings } from '../../../../Settings';

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
        let exchangeRate = 1 ;
        let helpATo  = 1;
        let helpBTo  = 1;
        let helpAFrom  = 1;
        let helpBFrom = 1;
        a.employment_types.map(item => {
            if (item.salary?.currency != null) {
                exchangeRate  =  checkCurrency(item?.salary?.currency);
            }
            if (employmentType != 'All') {
                if (item.type === employmentType.toLowerCase() && item.salary != null) {
                  return  (
                      (helpATo = item?.salary?.to * exchangeRate)
                      &&
                      (helpAFrom = item?.salary?.from * exchangeRate)
                  );
                }
                if (employmentType == 'Mandate Contract' && item.salary != null) {
                    if (item.type === 'mandate_contract '){
                        return (
                            (helpATo = item?.salary?.to * exchangeRate)
                            &&
                            (helpAFrom = item?.salary?.from * exchangeRate)
                        );
                    }
                }
                if (item.salary == null && sortBy === 'Lowest Salary' ) {
                    return (
                        (helpATo = 10000000)
                        &&
                        (helpAFrom = 1000000)
                    );
                }
            }  else {
                if (item.salary == null && sortBy === 'Lowest Salary' ) {
                    return  (
                        (helpATo = 10000000)
                        &&
                        (helpAFrom = 1000000)
                    );
                }
                if (item.salary != null) {
                   return  (
                       (helpATo = item.salary?.to * exchangeRate)
                       &&
                       (helpAFrom = item?.salary?.from * exchangeRate )
                   );
                }
            }
        });
        b.employment_types.map(item => {
            if (item.salary?.currency != null) {
                exchangeRate  =  checkCurrency(item?.salary?.currency);
            }
            if (employmentType != 'All') {
                if (item.type === employmentType.toLowerCase() && item.salary != null) {
                   return (
                       (helpBTo = item?.salary?.to * exchangeRate)
                       &&
                       (helpBFrom = item?.salary?.from * exchangeRate)
                   );
                }
                if (employmentType == 'Mandate Contract' && item.salary != null) {
                    return (
                        (helpBTo = item?.salary?.to * exchangeRate)
                        &&
                        (helpBFrom = item?.salary?.from * exchangeRate)
                    );
                }
                if (item.salary == null && sortBy === 'Lowest Salary' ) {
                    return (
                        ( helpBTo = 10000000 ) &&
                        ( helpBFrom = 1000000 )
                    );
                }
            } else {
                if (item.salary == null && sortBy === 'Lowest Salary' ) {
                    return (
                        ( helpBTo = 10000000 ) &&
                        ( helpBFrom = 1000000 )
                    );
                }
                if (item.salary != null) {
                  return (
                      (helpBTo = item.salary?.to * exchangeRate)
                      &&
                      (helpBFrom = item?.salary?.from * exchangeRate)
                  );
                }

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

