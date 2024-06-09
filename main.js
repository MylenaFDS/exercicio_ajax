document.addEventListener("DOMContentLoaded", () => {
    fetchGitHubProfile();
});

async function fetchGitHubProfile() {
    const username = "ogiansouza"; 
    const url = `https://api.github.com/users/${username}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erro ao buscar dados: ${response.statusText}`);
        }
        const data = await response.json();

        document.getElementById("avatar").src = data.avatar_url;
        document.getElementById("name").innerText = data.name;
        document.getElementById("username").innerText = `@${data.login}`;
        document.getElementById("repos").innerText = data.public_repos;
        document.getElementById("followers").innerText = data.followers;
        document.getElementById("following").innerText = data.following;
        document.getElementById("github-link").href = data.html_url;
    } catch (error) {
        console.error("Erro ao buscar os dados do GitHub:", error);
    }
}
