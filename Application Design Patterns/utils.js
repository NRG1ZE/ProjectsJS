const debounce = (func, delay = 1000) => {
  let timeoutId;
  return (...args) => {
    //will seperat the arguments into an array
    if (timeoutId) {
      clearInterval(timeoutId);
    }
    setTimeout(() => {
      func.apply(null, args);
      //apply will track the ...args and apply them each to the func
    }, delay);
  };
};
