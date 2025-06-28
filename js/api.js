
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/allysonaggp/Portifolio/refs/heads/main/data/profile.json';
    const fetching = await fetch(url)
    const profileData = await fetching.json()
    return profileData
}
