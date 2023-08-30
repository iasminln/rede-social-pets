// export const API_URL = 'https://dogsapi.origamid.dev/json/api';
// export const API_URL_JWT = 'https://dogsapi.origamid.dev/json';

export const API_URL = 'https://pet.iasminln.cloud/wp-json/v1';
export const API_URL_JWT = 'https://pet.iasminln.cloud/wp-json';

// export const API_URL = 'https://petapi.local/wp-json/v1';
// export const API_URL_JWT = 'https://petapi.local/wp-json';



export const TOKEN_POST = (body) => {
  return {
    url: `${API_URL_JWT}/jwt-auth/v1/token`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  }
}

export const TOKEN_VALIDATE_POST = (token) => {
  return {
    url: `${API_URL_JWT}/jwt-auth/v1/token/validate`,
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  }
}

export const USER_GET = (token) => {
  return {
    url: `${API_URL}/user`,
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      }
    }
  }
}

export const USER_POST = (body) => {
  return {
    url: `${API_URL}/user`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  }
}

export const PHOTO_POST = (formData, token) => {
  return {
    url: `${API_URL}/photo`,
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData
    }
  }
}

export const PHOTOS_GET = ({ page, total, user }) => {
  return {
    url: `${API_URL}/photo/?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: 'GET',
      cache: 'no-store',
      headers: {
        Accept: "application/json, text/plain, */*"
      },
    }
  }
}


export const PHOTO_GET = (id) => {
  return {
    url: `${API_URL}/photo/${id}`,
    options: {
      method: 'GET',
      cache: 'no-store',
      headers: {
        Accept: "application/json, text/plain, */*"
      },
    }
  }
}

export const COMMENT_POST = (id, body, token) => {
  return {
    url: `${API_URL}/comment/${id}`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      },
      body: JSON.stringify(body)

    }
  }
}

export const COMMENT_DELETE = (id, token) => {
  return {
    url: `${API_URL}/comment/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + token
      },
    }
  }
}

export const PHOTO_DELETE = (id, token) => {
  return {
    url: `${API_URL}/photo/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + token
      },
    }
  }
}

export const PASSWORD_LOST = (body) => {
  return {
    url: `${API_URL}/password/lost`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    }
  }
}

export const PASSWORD_RESET = (body) => {
  return {
    url: `${API_URL}/password/reset`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    }
  }
}