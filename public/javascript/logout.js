async function logout() {
  const response = await fetch('/api/users/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  });
// if iddle for too long. log out or if closing app
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}

// logout timer
// setInterval(function() {
// logout()
// }, 30000)

document.querySelector('#logout').addEventListener('click', logout);
