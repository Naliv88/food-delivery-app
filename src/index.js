import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';
import './index.css';
import { NotesProvider } from 'context/notesContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NotesProvider>
      <BrowserRouter basename="/food-delivery-app">
        <App />
      </BrowserRouter>
    </NotesProvider>
  </React.StrictMode>
);

// AIzaSyAn6yCYR7-TXsSvS2UfJISAaKdoTzMrIIg  apiKey="ВAIzaSyAn6yCYR7-TXsSvS2UfJISAaKdoTzMrIIg"
