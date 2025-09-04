// loggingMiddleware.js

const LOGGING_API_URL = 'http://20.244.56.144/evaluation-service/logs';

/**
 * Function to send logs to the logging server.
 * 
 * @param {string} stack - The stack of the log (frontend/backend).
 * @param {string} level - The level of the log (debug, info, warn, error, fatal).
 * @param {string} packageName - The package name where the log is generated.
 * @param {string} message - The message describing the event.
 */
export function logEvent(stack, level, packageName, message) {
  // Prepare the log data
  const logData = {
    stack: stack,
    level: level,
    package: packageName,
    message: message,
  };

  // Send the log data to the server
  fetch(LOGGING_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(logData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Log sent successfully:', data);
    })
    .catch((error) => {
      console.error('Error sending log:', error);
    });
}
