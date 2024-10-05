// Função para reportar as métricas de Web Vitals
const reportWebVitals = onPerfEntry => {
  // Verifica se onPerfEntry é uma função válida
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Importa dinamicamente as funções de métricas do pacote 'web-vitals'
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Chama cada função de métrica, passando onPerfEntry como callback
      getCLS(onPerfEntry);  // Mudança Cumulativa de Layout
      getFID(onPerfEntry);  // Atraso da Primeira Entrada
      getFCP(onPerfEntry);  // Primeira Renderização de Conteúdo
      getLCP(onPerfEntry);  // Maior Renderização de Conteúdo
      getTTFB(onPerfEntry); // Tempo até o Primeiro Byte
    });
  }
};

export default reportWebVitals;
