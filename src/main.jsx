
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserContext from './components/context/user-context.jsx'

createRoot(document.getElementById('root')).render(
    <UserContext>
        <App />
    </UserContext>

)
