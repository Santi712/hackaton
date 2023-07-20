// Navbar.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

test('El Navbar se renderiza correctamente', () => {
    render(<Navbar />);

    // Verificar si el logo está presente en el DOM
    const logoElement = screen.getByText('GeeksForGeeks');
    expect(logoElement).toBeInTheDocument();

    // Verificar el fondo del navbar inicial
    const navbarElement = screen.getByTestId('navbar');
    expect(navbarElement).toHaveClass('navbar');

    // Simular un desplazamiento (scroll) de la ventana
    const scrollEvent = new Event('scroll');
    window.scrollY = 100;
    window.dispatchEvent(scrollEvent);

    // Verificar el fondo del navbar después del desplazamiento
    expect(navbarElement).toHaveClass('navbar colorChange');

});