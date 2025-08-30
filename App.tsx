import React, { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { SignUpForm } from './components/SignUpForm';
import { Dashboard } from './components/Dashboard';
import { AnimatePresence, motion } from 'framer-motion';
import { UserRole } from './types';

type AppView = 'landing' | 'signup' | 'dashboard';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>('landing');
  const [initialRole, setInitialRole] = useState<UserRole | null>(null);

  const handleGetStarted = (role: UserRole) => {
    setInitialRole(role);
    setView('signup');
  };

  const renderView = () => {
    switch (view) {
      case 'landing':
        return (
            <motion.div key="landing" exit={{ opacity: 0 }}>
                <LandingPage onGetStarted={handleGetStarted} />
            </motion.div>
        );
      case 'signup':
        return (
            <motion.div key="signup" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <SignUpForm 
                  initialRole={initialRole}
                  onSignUpComplete={() => setView('dashboard')} 
                />
            </motion.div>
        );
      case 'dashboard':
        return (
            <motion.div key="dashboard" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Dashboard />
            </motion.div>
        );
      default:
        return <LandingPage onGetStarted={handleGetStarted} />;
    }
  };

  return (
    <main>
        <AnimatePresence mode="wait">
            {renderView()}
        </AnimatePresence>
    </main>
  );
};

export default App;