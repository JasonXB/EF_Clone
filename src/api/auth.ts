export async function signup(
  username: string,
  email: string,
  password: string
) {
  console.log(username, email, password, '2rm');
  const details = {
    username: username,
    email: email,
    password: password,
    role: 'MENTEE',
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
}

export async function login(username: string, email: string, password: string) {
  console.log(username, password, '35rm');
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
