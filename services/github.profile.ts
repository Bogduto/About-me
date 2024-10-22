export const getProfile = () => {
  return fetch(`https://api.github.com/users/bogduto`, {
    cache: "force-cache",
    method: "GET",
  })
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
};
