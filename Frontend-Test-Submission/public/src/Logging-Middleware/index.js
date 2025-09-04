export const logEvent = async (stack, level, packageName, message) => {
  const payload = {
    stack,
    level,
    package: packageName,
    message
  };

  try {
    const response = await fetch('http://20.244.56.144/evaluation-service/logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    if (response.status === 200) {
      console.log('Log created successfully:', data);
    } else {
      console.error('Failed to create log:', data);
    }
  } catch (error) {
    console.error('Error sending log:', error);
  }
};
