// Productcard.test.js
import React from 'react'
import '@testing-library/jest-dom/extend-expect' //# Capacidades Extendidas
import { render } from '@testing-library/react' //! Render devuelve un objeto que representa el árbol de componentes
import Productcard from './Productcard' //% Componente al que se realiza el test

test('El componente Productcard se renderiza correctamente', () => {
    //! Renderiza el componente Productcard
    const { getByAltText, getByText } = render(<Productcard />);

    //% Verifica si alt está presente en el DOM y contiene un texto
    const imagenCurso1 = getByAltText('imagen curso');
    expect(imagenCurso1).toBeInTheDocument();

    //! Verifica si el texto 'Figma paso a paso' está presente en el DOM
    const textoCurso = getByText('Figma paso a paso');
    expect(textoCurso).toBeInTheDocument();

    //% Verifica si el texto 'principiante' está presente en el DOM
    const textoNivel = getByText('principiante');
    expect(textoNivel).toBeInTheDocument();

    //! Verifica si el texto '25,99€' está presente en el DOM
    const textoPrecio = getByText('25,99€');
    expect(textoPrecio).toBeInTheDocument();

    //% Verifica si el texto 'Comprar' está presente en el DOM
    const textoComprar = getByText('Comprar');
    expect(textoComprar).toBeInTheDocument();

    //! Verifica si la imagen play.png está presente en el DOM
    const imagenPlay = getByAltText('imagen play');
    expect(imagenPlay).toBeInTheDocument();
});

