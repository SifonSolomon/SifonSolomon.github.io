import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App'
import ErrorBoundary from './Components/ErrorBoundary.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
  <BrowserRouter>
	<React.StrictMode>
		<App />
	</React.StrictMode>
     </BrowserRouter>
  </ErrorBoundary>
)