export function createApi(fetch) {
  function reqJson(...args) {
    return fetch(...args).then(res => {
      if (!res.ok) {
        throw new HTTPError(res.status, res.statusText);
      }
      return res.json();
    });
  }

  return {
    async login(creds) {
      return await reqJson('/login', {
        method: 'POST',
        credentials: true,
        body: creds
      });
    }
  };
}
