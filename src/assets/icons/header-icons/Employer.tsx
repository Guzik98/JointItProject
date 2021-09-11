import React from 'react';
import '../icon.sass';

const Employer = (): JSX.Element => {
    return (
        <svg className="icon-person icon-employer" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z">
            </path>
        </svg>
    );
};

export default Employer;