import './bootstrap.js';
import { createRoot } from "react-dom/client"

import HeaderComponent from "./components/HeaderComponent.js"
import FooterComponent from './components/FooterComponent.js';

createRoot(document.getElementById('header')).render(<HeaderComponent />);
createRoot(document.getElementById('footer')).render(<FooterComponent />);