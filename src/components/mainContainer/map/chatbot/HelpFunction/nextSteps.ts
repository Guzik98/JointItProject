type Question = {
    purpose: string;
    message: string;
    options?: string[];
};

export const nextSteps = ( step: number, userResponse : string ) : Question | null => {

    return  step === 0
            ? userResponse === 'Developer'
                ? {
                    purpose: 'specify experience',
                    message: 'Super, właśnie dla takich ludzi jak ty, jest nasza strone. Chciałbyś odpowiedzieć na kilka nayszhc pytań?',
                    options: ['Tak', 'Nie']

                }
                :
                {
                    purpose: 'specify Offer',
                    message: 'Super, idz do menu głównego wybierz opcje post a job, a jesteśmy przekonani że wspólnie znajdziemy dla ciebie idealnego kandytata',
                }
                : step === 1
                    ? userResponse === 'Tak'
                        ? {
                            purpose: 'specify experience',
                            message: 'Jak oceniasz swoje doświadczenie z programowaniem',
                            options: ['Junior', 'Mid', 'Senior']
                        }
                        :  null
                        : step === 2
                            ? {
                                purpose: 'specify employment type',
                                message: 'Na jakiej umowie chciałbys pracować',
                                options:  ['B2B', 'Permanent', 'Mandate Contract']
                            }
                            : step === 3
                                ? {
                                    purpose: 'specify employment type',
                                    message: 'Aby zobaczyć spersonalizowane oferty kliknij przycisk',
                                    options:  ['pokaż oferty']
                                } 
                                : step == 4
                                    ? {
                                        purpose: 'specify employment type',
                                        message: 'Dziękujemy za korzystanie z naszych usług',
                                    } : null;         

};
