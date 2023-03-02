## Recuerden que el 29 de Marzo de 2022 salio la nueva versión de React V18.0 por lo cual si instalan esta versión se van a topar con incovenientes más adelante. Si bien lo desesan pueden sar esta nueva versión pero si no pueden instalar la versión de React 17.0.2 con este comando.

npm install react@17.0.2 react-dom@17.0.2

## O si quieren usar la nueva versión de React V 18.0.0 Deben implementar este codigo en el index.js

import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App/>); */

