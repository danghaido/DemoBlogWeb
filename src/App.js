import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import Everything from './Everything';


function App() {
  const [user, setUser] = useState();

  return (
    <Router>
      <Everything user={user} setUser={setUser} />
    </Router>
  );
}
  
export default App;