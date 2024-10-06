// Importa as bibliotecas e componentes necessários
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Cria a raiz do React para renderizar o aplicativo
// Isso usa a nova API do React 18 para melhor performance
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o componente App dentro do StrictMode
// StrictMode ajuda a identificar problemas potenciais no aplicativo
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Chama a função para reportar as métricas de desempenho web
// Isso ajuda a monitorar e melhorar o desempenho do aplicativo
reportWebVitals();
