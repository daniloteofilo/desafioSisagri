import { useState } from 'react';

import DashboardPage from './components/DashboardPage';
import LoginPage from './components/LoginPage';

function App() {
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false)

  return (
    <div className='main'>
      { isUserAuthenticated 
        ? <DashboardPage/> 
        : (
          <LoginPage onSuccess={() => setIsUserAuthenticated(true)} />
        )
      }
    </div>
  );
}

export default App;
