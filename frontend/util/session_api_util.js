export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    user,
  })
);

export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    user,
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session',
  })
);