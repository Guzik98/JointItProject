import  Header from '../components/common/header/Header';
import { fireEvent, render, screen } from '@testing-library/react';


test( 'open user menu ', async () => {
    render(<Header/>);

    const openPopOut = screen.getByRole('open-user-menu');

    fireEvent.click(openPopOut);

    expect(screen.getByRole('presentation', { exact: false })).toBeInTheDocument();
});