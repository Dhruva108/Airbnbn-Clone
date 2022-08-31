const BASE_URL = 'http://localhost:3030';

export async function getSpaces() {
  try {
    const response = await fetch(`${BASE_URL}/api/spaces`);
    return response.json();
  } catch (error) {
    return new Error(error);
  }
}

export async function getSpace(_id) {
  try {
    const response = await fetch(`${BASE_URL}/api/spaces/${_id}`);
    return response.json();
  } catch (error) {
    return new Error(error);
  }
}

export async function createSpace(space) {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(space),
    };
    const response = await fetch(`${BASE_URL}/api/spaces/`, options);
    return response.json();
  } catch (error) {
    return new Error(error);
  }
}

export async function deleteSpace(id) {
  try {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(`${BASE_URL}/api/spaces/${id}`, options);
    return response.json({ response, message: 'space deleted' });
  } catch (error) {
    return new Error(error);
  }
}
