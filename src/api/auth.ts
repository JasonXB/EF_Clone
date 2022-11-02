import { Roles } from '../enum/role.enum';

export async function signupAPI(
  username: string,
  email: string,
  password: string,
  role: Roles
) {
  console.log(email, password, '2rm');
  const details = {
    username: username,
    email: email,
    password: password,
    role: role === Roles.mentee ? 'MENTEE' : 'MENTOR',
  };
  const formBody = [];
  for (let i = 0; i < Object.keys(details).length; i++) {
    const property = Object.keys(details)[i];
    const value = Object.values(details)[i];
    const encodedKey = encodeURIComponent(property);
    const encodedValue = encodeURIComponent(value);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  const response = await fetch('http://localhost:1992/api/users/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(details),
  });
  const responseData = await response.json();
  console.log(responseData, '29rm');
  // todo: check shpae of resp data
  if (responseData._id) return true;
  return false;
}

export async function loginAPI(
  username: string,
  email: string,
  password: string
) {
  console.log(password, '35rm');
  const details = {
    username: username,
    email: email,
    password: password,
  };
  const formBody = [];
  for (let i = 0; i < Object.keys(details).length; i++) {
    const property = Object.keys(details)[i];
    const value = Object.values(details)[i];
    const encodedKey = encodeURIComponent(property);
    const encodedValue = encodeURIComponent(value);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  const response = await fetch('http://localhost:1992/api/users/authenticate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(details),
  });
  const responseData = await response.json();
  console.log(responseData, '54rm');
  return responseData.accessToken;
}

export async function isLoggedInAPI(token: string) {
  const res = await fetch('http://localhost:1992/api/users/check/status', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  const responseData = await res.json();
  if (responseData.status === 'Mentee' || responseData.status === 'Mentor')
    return true;
  else return false;
}
