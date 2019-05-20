module.exports = {
  succeed,
  fail,
  repair,
  get
};
//===============================
function succeed(item) {
  const enhancedItem =
    item.enhancement < 20 ? item.enhancement + 1 : item.enhancement;
  const newItem = {
    name: item.name,
    durability: item.durability,
    enhancement: enhancedItem
  };
  return newItem;
}
//===============================
function fail(item) {
  if(item.enhancement<=15){
  const newItem = {
      name: item.name,
      durability: item.durability - 5,
      enhancement: item.enhancement
    };
    return newItem;
  }
  
  
}
//===============================
function repair(item) {
  const newItem = {
    name: item.name,
    durability: 100,
    enhancement: item.enhancement
  };
  return newItem;
}
//===============================
function get(item) {
  return { ...item };
}

// function objChecker(item) {
//   if (item && typeof item === 'object') {
//     const objProp = Object.getOwnPropertyNames(item);
//     const objNames = ["name", "durability", "enhancement"];
//   } else {
//     return null;
//   }
// }

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
