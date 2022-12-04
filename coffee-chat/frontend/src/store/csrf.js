export const storeCSRFToken = async (response) => {
    const csrfToken = response.headers.get('X-CSRF-Token');
    if (csrfToken) sessionStorage.setItem('X-CSRF-Token', csrfToken);
}
  
export const restoreCSRF = async () => {
    const response = await csrfFetch('/api/session');
    storeCSRFToken(response);
    return response;
}
  
export const csrfFetch = async (url, options = {}) => {
    options.method ||= 'GET';
    options.headers ||= {};
    if (options.method.toUpperCase() !== 'GET') {
      options.headers['Content-Type'] ||= 'application/json';
      options.headers['X-CSRF-Token'] = sessionStorage.getItem('X-CSRF-Token');
    }
    debugger
    const res = await fetch(url, options);
    if (res.status >= 400) throw res;
    return res;
}