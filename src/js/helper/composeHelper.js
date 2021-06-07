export const compose = (...funcs) => {
  // middleware 없음
  if (funcs.length === 0) return (arg) => arg;
  // middleware 1개
  if (funcs.length === 1) return funcs[0];
  // middleware 1 < n개
  return funcs.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  );
};
