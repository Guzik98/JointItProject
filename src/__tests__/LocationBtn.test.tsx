import { render, screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import { LocationBtn } from '../components/filterBar/buttons/location/LocationBtn';
import { SettingsProvider } from '../Settings';
import { Context as ResponsiveContext } from 'react-responsive';

test('render location pop out on big screen', () => {

    render(<SettingsProvider>
            <ResponsiveContext.Provider value={{ width: 1500 }}>
                <LocationBtn/>
            </ResponsiveContext.Provider>
        </SettingsProvider>
    );

    const openPopOut =  screen.getByRole('open-location-pop-out');

    fireEvent.click(openPopOut);

    expect(screen.getByRole('presentation', { exact: false })).toBeInTheDocument();

} );

test('close location pop out on big screen', async () => {

    render(<SettingsProvider>
            <ResponsiveContext.Provider value={{ width: 1500 }}>
                <LocationBtn/>
            </ResponsiveContext.Provider>
        </SettingsProvider>
    );

    const openPopOut =  screen.getByRole('open-location-pop-out');

    fireEvent.click(openPopOut);

    const closePopOut = screen.getByRole('button', {
        name: /kraków/i
    });


    fireEvent.click(closePopOut);

    await waitForElementToBeRemoved(closePopOut);

} );


test('render location pop out on small screen', () => {

    render(<SettingsProvider>
            <ResponsiveContext.Provider value={{ width: 600 }}>
                <LocationBtn/>
            </ResponsiveContext.Provider>
        </SettingsProvider>
    );

    const openPopOut =  screen.getByRole('open-location-pop-out');

    fireEvent.click(openPopOut);

    expect(screen.getByRole('presentation', { exact: false })).toBeInTheDocument();

} );

test('close location pop out on small screen', async () => {

    render(<SettingsProvider>
            <ResponsiveContext.Provider value={{ width: 600 }}>
                <LocationBtn/>
            </ResponsiveContext.Provider>
        </SettingsProvider>
    );

    const openPopOut =  screen.getByRole('open-location-pop-out');

    fireEvent.click(openPopOut);

    const closePopOut = screen.getByRole('close-location-pop-out-small');

    fireEvent.click(closePopOut);

    await waitForElementToBeRemoved(() => screen.getByRole('presentation', { exact: false }));

} );