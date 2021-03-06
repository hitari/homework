export const compose = (...funcs) => {
  // middleware ėė
  if (funcs.length === 0) return (arg) => arg;
  // middleware 1ę°
  if (funcs.length === 1) return funcs[0];
  // middleware 1 < nę°
  return funcs.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  );
};
