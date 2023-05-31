import './bootstrap.js';
import { createRoot } from "react-dom/client"

import HeaderComponent from "./components/HeaderComponent.js"

createRoot(document.getElementById('header')).render(<HeaderComponent />);