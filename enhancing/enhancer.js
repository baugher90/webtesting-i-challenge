module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  const newItem = {
    name: item.name,
    durability: 100,
    enhancement: item.enhancement,
 }
 return newItem
}

function get(item) {
  return { ...item };
}

function objChecker(item) {
  if (item && typeof item === 'object') {
    const objProp = Object.getOwnPropertyNames(item);
    const objNames = ["name", "durability", "enhancement"];
  } else {
    return null;
  }
}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
