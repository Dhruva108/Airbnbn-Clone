const BASE_URL = process.env.REACT_APP_DB_URL;

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

export async function createSpace(spaceRegister) {
  const token = localStorage.getItem('token');
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(spaceRegister),
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
