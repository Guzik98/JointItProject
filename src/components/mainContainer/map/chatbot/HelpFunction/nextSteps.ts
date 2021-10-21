type Question = {
    purpose: string;
    message: string;
    options?: string[];
};

export const nextSteps = ( step: number, userResponse : string ) : Question | null => {

    return   step === 0
        ? userResponse === 'Tak'
            ? {
                purpose: 'specify experience',
                message: 'Jak oceniasz swoje doświadczenie z programowaniem',
                options: ['Junior', 'Mid', 'Senior']
            }
    :  null
        : step === 1
            ? {
                purpose: 'specify employment type',
                message: 'Na jakiej umowie chciałbyś pracować',
                options:  ['B2B', 'Permanent', 'Mandate Contract']
            }
    : step === 2 ? {
                    purpose: 'specify employment type',
                    message: 'Aby zobaczyć spersonalizowane oferty kliknij przycisk, pokaż oferty',
                    options:  ['pokaż oferty']
                }
    : step == 3 ? {
                    purpose: 'specify employment type',
                    message: 'Dziękujęmy za skorzystanie z naszych usług',
                } : null;

};
