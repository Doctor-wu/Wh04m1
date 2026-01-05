export function getHostName() {
  if (typeof window === 'undefined')
    return ''
  return new URL(location.href).origin
}
