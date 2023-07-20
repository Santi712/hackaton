// Link.test.js
import renderer from 'react-test-renderer';
import Link from '../Link';

it('pruebas', () => {
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot(); // Comprobar el estado inicial

});