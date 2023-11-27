import React, { useState } from 'react';
import { Welcome } from './components/Welcome/Welcome';
import { Home } from './screens/Home'; // Import your Home component

export const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcomeTimeout = () => {
    setShowWelcome(false);
  };

  return (
    <div>
      {showWelcome && <Welcome onTimeout={handleWelcomeTimeout} />}
      {!showWelcome && <Home />}
    </div>
  );
};
