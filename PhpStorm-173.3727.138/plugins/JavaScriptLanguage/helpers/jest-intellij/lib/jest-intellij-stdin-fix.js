if (typeof process.stdin.setRawMode !== 'function') {
  process.stdin.setRawMode = function () {};
}
