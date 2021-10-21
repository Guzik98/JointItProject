import { render, screen, fireEvent } from '@testing-library/react';
import { LocationBtn } from '../components/filterBar/buttons/location/LocationBtn';
import { SettingsProvider } from '../Settings';
import { Context as ResponsiveContext } from 'react-responsive';

test('on click change text in label', () => {

    render(<SettingsProvider>
            <ResponsiveContext.Provider value={{ width: 1200 }}>
                <LocationBtn/>
            </ResponsiveContext.Provider>
        </SettingsProvider>
    );

    const openPopOut =  screen.getByRole('open-location-pop-out');

    fireEvent.click(openPopOut);

    const remoteSet = screen.getByRole('set-city-remote');

    fireEvent.click(remoteSet);

    expect(openPopOut).toBe('Remote Poland');

} );