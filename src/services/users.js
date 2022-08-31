/* eslint-disable no-underscore-dangle */
const BASE_URL = 'http://localhost:3030';

export async function getUsers() {
  try {
    const response = await fetch(`${BASE_URL}/api/users`);
    return response.json();
  } catch (error) {
    return new Error(error);
  }
}

export async function getUser() {
  try {
    const token = localStorage.getItem('token');
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(`${BASE_URL}/api/users/me`, options);
    return response.json();
  } catch (error) {
    return new Error(error);
  }
}

export async function createUser(user) {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };
    const response = await fetch(`${BASE_URL}/api/users/`, options);
    return response.json();
  } catch (error) {
    return new Error(error);
  }
}

export async function updateUser(user) {
  try {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };
    const response = await fetch(`${BASE_URL}/api/users/${user.id}`, options);
    return response.json();
  } catch (error) {
    return new Error(error);
  }
}
