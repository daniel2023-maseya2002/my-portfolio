// src/pages/DigitalTwin.jsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DigitalTwinHome from '../components/DigitalTwin/DigitalTwinHome';
import DigitalTwinLayout from '../components/DigitalTwin/DigitalTwinLayout';
import { trackEvent } from '../utils/analytics';

const DigitalTwin = () => {
  const { t } = useTranslation();
  const [hasEntered, setHasEntered] = useState(false);

  const handleEnter = () => {
    trackEvent('digital-twin-started', {});
    setHasEntered(true);
  };

  // If not entered, show the home/landing page
  if (!hasEntered) {
    return <DigitalTwinHome onEnter={handleEnter} />;
  }

  // Otherwise, show the main Digital Twin experience
  return <DigitalTwinLayout />;
};

export default DigitalTwin;