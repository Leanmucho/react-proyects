import { createRoot } from 'react-dom/client'
import { App } from './src/App.jsx'


//renderiza el app 
const root = createRoot(document.getElementById('app'));
root.render(<App />);