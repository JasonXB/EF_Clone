const CREDENTIALS_LOCALSTORAGE_NAME = 'EFuserCredentials';

export function storeCredentialsInLocalStorage(jwt: string) {
  localStorage.setItem(CREDENTIALS_LOCALSTORAGE_NAME, jwt);
}

export function getCredentialsFromLocalStorage() {
  return localStorage.getItem(CREDENTIALS_LOCALSTORAGE_NAME);
}
