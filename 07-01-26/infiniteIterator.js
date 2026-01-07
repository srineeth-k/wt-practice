function infiniteCounter(limit) {
  let count = 1;

  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (count <= limit) {
        return { value: count++, done: false };
      }
      return { done: true };
    }
  };
}
