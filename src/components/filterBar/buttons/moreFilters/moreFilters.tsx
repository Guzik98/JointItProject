import React from 'react';
import './MoreFilters.sass';

const MoreFilters = (): JSX.Element=> {
    return (
        <div className="more-filters">
            <button className="more-filters-btn" type="button">
                        <span className="more-filters-btn-label">
                            <span
                                className="MuiButton-startIcon MuiButton-iconSizeSmall">
                                <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z">
                                    </path>
                                </svg>
                            </span>
                            More filters
                            <span>
                                <svg
                                    className="MuiSvgIcon-root css-6pdw0s" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z">
                                    </path>
                                </svg>
                            </span>
                        </span>
                <span
                    className="MuiTouchRipple-root">
                        </span>
            </button>
        </div>
    );
};

export default MoreFilters;