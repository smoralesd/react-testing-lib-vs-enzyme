import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
// const enzymeAdapter = require('enzyme-adapter-react-16');
// const enzyme = require('enzyme');

// enzyme.configure({adapter: new enzymeAdapter.Adapter()});
configure({ adapter: new Adapter.default() });