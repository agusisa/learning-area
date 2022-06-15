addEventListener("message", message => {
    if (message.data.command === 'generate') {
      postMessage(message.data.f +2);
    }

  });