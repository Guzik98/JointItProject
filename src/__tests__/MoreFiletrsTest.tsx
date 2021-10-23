import { MoreFilters } from '../components/filterBar/buttons/moreFilters/moreFilters';
import { render, screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import { SettingsProvider } from '../Settings';
import { Context as ResponsiveContext } from 'react-responsive';

test('test more filters pop out, big screen', async () => {
    render(
        <SettingsProvider>
            <ResponsiveContext.Provider value={{ width: 1500 }}>
                <MoreFilters/>
            </ResponsiveContext.Provider>
        </SettingsProvider>
    );

    fireEvent.click(screen.getByRole('open-pop-out'));

    expect(screen.getByRole('presentation', { exact: false })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('show-offers'));

    await waitForElementToBeRemoved(screen.getByRole('presentation', { exact: false }));

} );


test('test more filters pop out, small screen', async () => {
    render(
        <SettingsProvider>
            <ResponsiveContext.Provider value={{ width: 700 }}>
                <MoreFilters/>
            </ResponsiveContext.Provider>
        </SettingsProvider>
    );

    fireEvent.click(screen.getByRole('open-pop-out'));

    expect(screen.getByRole('presentation', { exact: false })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('show-offers'));

    await waitForElementToBeRemoved(screen.getByRole('presentation', { exact: false }));

} );