class Github{
  constructor(){
    this.cliet_id = 'dd0e5c4e9e21c5f3a965';
    this.client_secret = '91da46ced9792845c4d58e23406bdb5d0e1f844f';
    this.repos_count = 5 ;
    this.repos_sort = 'created: asc';
  }


  async getUser(user){
    const profileResponse = await fetch(`https:/api.github.com/users/${user}?cliet_id = ${this.cliet_id}&client_secret=${this.client_secret}`);
    const repoResponse = await fetch(`https:/api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&cliet_id = ${this.cliet_id}&client_secret=${this.client_secret}`);
    const profileData = await profileResponse.json();
    const repos = await repoResponse.json();
    return {
      profile: profileData,
      latestRepos: repos
    }

  }
}
