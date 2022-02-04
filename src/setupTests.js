import '@testing-library/jest-dom/extend-expect';
import EnzymeAdapter from "enzyme-adapter-react-16";
import { configure } from 'enzyme';
configure({ adapter: new EnzymeAdapter() });
