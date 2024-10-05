// Importa as funções necessárias do pacote @testing-library/react
import { render, screen } from '@testing-library/react';
// Importa o componente App que será testado
import App from './App';

// Define um teste para verificar se o link "learn react" é renderizado
test('renders learn react link', () => {
  // Renderiza o componente App
  render(<App />);
  
  // Procura por um elemento que contenha o texto "learn react" (case insensitive)
  const linkElement = screen.getByText(/learn react/i);
  
  // Verifica se o elemento encontrado está presente no documento
  expect(linkElement).toBeInTheDocument();
});
