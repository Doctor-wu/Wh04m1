export function getHostName() {
  return new URL(location.href).origin
}
