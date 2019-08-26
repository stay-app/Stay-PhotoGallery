const App = require('../public/main.js');

it('App', () => {
  const app = shallow(<App />);
  expect(1).toEqual(1);
});