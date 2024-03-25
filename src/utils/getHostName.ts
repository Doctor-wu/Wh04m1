export function getHostName() {
  if (import.meta.env.DEV)
    return location.host
  return 'https://doctorwu.netlify.app'
}
