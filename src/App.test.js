import { render, screen } from '@testing-library/react';
import App from './App';
import store from "./data/redux-store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

test('renders learn react link', () => {
  render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
