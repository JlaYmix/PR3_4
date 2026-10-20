const createClickCounter = (limit = 6) => {
  let clicks = 0;

  return () => {
    if (clicks >= limit) {
      console.log('Ліміт натискань вичерпано');
      return;
    }
    clicks++;
    console.log(`Натискань: ${clicks}, залишилось: ${limit - clicks}`);
  };
};

document.querySelectorAll('button').forEach((btn) =>
  btn.addEventListener('click', createClickCounter(6))
);