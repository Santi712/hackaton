// app.test.js
import App from '../App';

it.skip("should render the App component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App").exists()).toEqual(true);
});