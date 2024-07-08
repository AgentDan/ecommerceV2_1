import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ConfiguratorProviderRender} from "./context/ConfiguratorRender.jsx"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ConfiguratorProviderRender>
            <App/>
        </ConfiguratorProviderRender>
    </React.StrictMode>
)
