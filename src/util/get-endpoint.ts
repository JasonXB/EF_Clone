export function getEndpoint(path: string) {
  return process.env.NODE_ENV === 'production'
    ? `https://efback.azurewebsites.net/api${path}`
    : `http://localhost:5200/api${path}`;
}
