import React, { useEffect, useState } from 'react';

const Chatbot = () => {
  const [botInitialized, setBotInitialized] = useState(false);

  useEffect(() => {
    const initializeBot = () => {
      if (window.botpressWebChat && !botInitialized) {
        window.botpressWebChat.init({
          // Botpress WebChat initialization options
          // These options have been removed for security reasons
        });
        setBotInitialized(true);
      }
    };

    const loadBotpressScript = () => {
      const botpressScript = document.createElement('script');
      botpressScript.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
      botpressScript.async = true;
      botpressScript.onload = initializeBot;
      document.body.appendChild(botpressScript);
    };

    const loadConfigScript = () => {
      const configScript = document.createElement('script');
      configScript.src = 'https://mediafiles.botpress.cloud/your-bot-id/webchat/config.js';
      configScript.defer = true;
      configScript.onload = initializeBot;
      document.body.appendChild(configScript);
    };

    loadBotpressScript();
    loadConfigScript();

    return () => {
      // Clean up
      const botpressScript = document.querySelector('script[src="https://cdn.botpress.cloud/webchat/v1/inject.js"]');
      const configScript = document.querySelector('script[src="https://mediafiles.botpress.cloud/your-bot-id/webchat/config.js"]');
      if (botpressScript) document.body.removeChild(botpressScript);
      if (configScript) document.body.removeChild(configScript);
    };
  }, [botInitialized]);

  return <div id="webchat" />;
};

export default Chatbot;
