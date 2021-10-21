import { fireEvent, render, screen } from '@testing-library/react';
import SideBarButton from '../components/common/header/sideBar/SideBarButton';

test('Opening side bar',  () => {
    render(<SideBarButton/>);

    const button = screen.getByRole('open-side-bar');

    fireEvent.click(button);

    const sideBar = screen.getByText('MENU');

    expect(sideBar).toBeTruthy();
});
