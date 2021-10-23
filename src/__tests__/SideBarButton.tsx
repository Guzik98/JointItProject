import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import SideBarButton from '../components/common/header/sideBar/SideBarButton';

test('Opening side bar',  () => {
    render(<SideBarButton/>);

    const button = screen.getByRole('open-side-bar');

    fireEvent.click(button);

    const sideBar = screen.getByText('MENU');

    expect(sideBar).toBeTruthy();
});


test('Close side bar', async () => {
    render(<SideBarButton/>);

    const button = screen.getByRole('open-side-bar');

    fireEvent.click(button);

    const sideBar = screen.getByText('MENU');

    const closeButton = screen.getByRole('close-side-bar');

    fireEvent.click(closeButton);

   await waitForElementToBeRemoved(sideBar);
});