import React from 'react';

import './Bar.sass';

import SearchIcon from '@material-ui/icons/Search';

// import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
// import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';

function Bar(): JSX.Element {
    return (
        <div className="filter-bar">
            <div className="filter-bar-elements">
                <div className="manual-search">
                    <div className="manual-search-level2">
                        <a className="search-expand">
                            <button className="manual-search-btn">
                                <SearchIcon/>
                                <input autoComplete="off" placeholder="Search" type="text"
                                       className="search-input"
                                       aria-autocomplete="list" autoCapitalize="none" spellCheck="false" value=""
                                       id="mui-85635"/>
                            </button>
                        </a>
                    </div>
                </div>

                <div className="location">
                    <button className="location-btn">
                        <span className="location-btn-span">Location<span>

                        </span>

                            <svg
                                className="MuiSvgIcon-root css-6pdw0s" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z">

                                </path>
                            </svg>
                    </span>
                        <span
                            className="MuiTouchRipple-root">

                    </span>
                    </button>
                </div>
                <div className="icon-bar">
                    <div className="icon-bar-level2">
                        <div className="icon">
                            <div className="circle all-icon">
                                <a>
                                    All
                                </a>
                            </div>
                            <span className="under-icon">
                                All
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="icon-bar-level2">
                            <div className="icon circle java-script-icon">
                                <a className="circle java-script-icon"  href="/all/javascript">
                                        <svg className="java-script-icon-background" width="25" height="25" viewBox="0 0 32 32"><path d="M0 0v32h32v-32zM16.921 27.266c-0.468 0.964-1.374 1.593-2.426 1.9-1.607 0.365-3.142 0.161-4.281-0.526-0.761-0.499-1.364-1.182-1.755-1.987l-0.013-0.029 2.44-1.49c0.015 0.015 0.088 0.131 0.175 0.278 0.307 0.526 0.584 0.891 1.111 1.154 0.511 0.175 1.651 0.292 2.089-0.628 0.263-0.468 0.19-1.958 0.19-3.595 0-2.586 0.015-5.173 0.015-7.73h2.995c0 2.82 0.015 5.479 0 8.226 0 1.666 0.146 3.171-0.541 4.427zM29.355 26.418c-1.037 3.565-6.853 3.682-9.176 1.33-0.497-0.555-0.804-0.848-1.096-1.49 1.227-0.716 1.227-0.716 2.44-1.403 0.658 1.008 1.257 1.549 2.338 1.783 1.476 0.175 2.952-0.321 2.616-1.885-0.336-1.271-3.010-1.593-4.837-2.952-1.841-1.242-2.279-4.252-0.76-5.976 0.511-0.643 1.374-1.111 2.279-1.344l0.95-0.117c1.812-0.044 2.952 0.438 3.784 1.374 0.289 0.304 0.546 0.644 0.76 1.012l0.014 0.026c-0.964 0.614-0.964 0.614-2.352 1.505-0.25-0.567-0.713-1.001-1.285-1.208l-0.015-0.005c-0.804-0.248-1.812 0.015-2.031 0.877-0.073 0.263-0.058 0.511 0.058 0.935 0.321 0.745 1.417 1.067 2.396 1.52 2.82 1.14 3.784 2.367 4.018 3.828 0.234 1.257-0.058 2.075-0.102 2.192z"></path></svg>
                                </a>
                                <span className="under-icon">
                                JS
                            </span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="more-filters">
                    <button className="more-filters-btn" type="button">
                        <span className="more-filters-btn-label">
                            <span
                        className="MuiButton-startIcon MuiButton-iconSizeSmall">
                                <svg className="MuiSvgIcon-root"
                                                                                     focusable="false"
                                                                                     viewBox="0 0 24 24"
                                                                                     aria-hidden="true">
                                    <path
                        d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z">

                                    </path>
                                </svg>
                            </span>
                            More filters
                            <span
                        className="MuiButton-endIcon MuiButton-iconSizeSmall">
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
            </div>
        </div>
    )
}

export default Bar