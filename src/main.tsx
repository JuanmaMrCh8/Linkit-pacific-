import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

if (typeof global === 'undefined') {
  (window as any).global = window;
}

try {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
} catch (error) {
  console.error("Critical rendering error:", error);
  const root = document.getElementById('root');
  if (root) {
    root.innerHTML = `
      <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #f9fafb; font-family: sans-serif; padding: 20px; text-align: center;">
        <div>
          <h1 style="font-size: 24px; color: #111827; margin-bottom: 8px;">Algo salió mal</h1>
          <p style="color: #4b5563;">Error al cargar la aplicación. Por favor, intenta recargar.</p>
          <button onclick="window.location.reload()" style="margin-top: 16px; background: #000; color: #fff; border: none; padding: 10px 24px; border-radius: 9999px; font-weight: bold; cursor: pointer;">
            Recargar
          </button>
        </div>
      </div>
    `;
  }
}
