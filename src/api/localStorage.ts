const CREDENTIALS_LOCALSTORAGE_NAME = 'EFuserCredentials';
const PROFILEID_LOCALSTORAGE_NAME = 'EFuserProfileId';

export function storeCredentialsInLocalStorage(jwt: string) {
  localStorage.setItem(CREDENTIALS_LOCALSTORAGE_NAME, jwt);
}

export function getCredentialsFromLocalStorage() {
  return localStorage.getItem(CREDENTIALS_LOCALSTORAGE_NAME);
}

export function storeProfileIdInLocalStorage(profileId: string) {
  localStorage.setItem(PROFILEID_LOCALSTORAGE_NAME, profileId);
}

export function getProfileIdInLocalStorage() {
  return localStorage.getItem(PROFILEID_LOCALSTORAGE_NAME);
}
