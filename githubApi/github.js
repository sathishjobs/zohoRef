class GitHub{
    constructor(){
        this.client_id = '5d2e36f1cad6c5d559bd',
        this.client_secret = 'a32fb493eddfcc0389040267061cf420af633e91'
    }

    async getUser(user){
        const profileResponse = await fetch(`
        https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json()

        return {
            profile
        }
    }

}