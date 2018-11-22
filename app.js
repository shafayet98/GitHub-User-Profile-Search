const github = new Github();
const ui = new Ui();
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup',(e)=>{
  const usertext = e.target.value;

  if(usertext !== ''){
    github.getUser(usertext)
      .then((res)=>{
        if(res.profile.message === 'Not Found'){
          //show alert
          ui.showAlert('User Not Found','alert alert-danger');
        }else{
          //show profile
          ui.showProfile(res.profile);
          ui.showRepos(res.latestRepos);
          // console.log(res);
        }
      })
  }else{
    // clear profile
    ui.clearProfile();
  }
})
