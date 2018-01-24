export function cls(namesObj) {
  return Object.keys(namesObj).filter(key => !!namesObj[key]).join(' ');
}
