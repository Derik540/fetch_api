// Selecionar o avatar do perfil

document.addEventListener("DOMContentLoaded", function () {
  let apiURL = "https://api.github.com/users/Derik540";

  const handleError = (error) => {
    if (error.response) {
      console.error("API request failed:", error.response.status);
      document.getElementById("error-message").innerText =
        "Failed to fetch data from the API. Please check your internet connection and try again.";
    } else {
      console.error("An unexpected error occurred:", error);
      document.getElementById("error-message").innerText =
        "An unexpected error occurred. Please try again.";
    }
  };

  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      let profileAvatar = document.querySelector(".profile-avatar");
      profileAvatar.src = data.avatar_url;

      let profileName = document.querySelector(".profile-name");
      profileName.innerText = data.name;

      let profileUsername = document.querySelector(".profile-username");
      profileUsername.innerText = data.login;

      let repositories = document.querySelector(
        ".numbers-item:nth-child(1) h4"
      );
      repositories.innerText = "Repositórios: " + data.public_repos;

      let followers = document.querySelector(".numbers-item:nth-child(2) h4");
      followers.innerText = "Seguidores: " + data.followers;

      let following = document.querySelector(".numbers-item:nth-child(3) h4");
      following.textContent = "Seguindo: " + data.following;

      let profileLink = document.querySelector(".profile-link");
      profileLink.href = data.html_url;
    })
    .catch(handleError);
});
