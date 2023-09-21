import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import App from '../App';
import renderWithRouter from '../../renderWithRouter';

test('Testes App', () => {
  renderWithRouter(<App />, { route: '/' });
  const routeRecents = screen.getByRole('img', {
    name: /imagem da notícia/i
  });

  expect(routeRecents).toBeInTheDocument();
});
