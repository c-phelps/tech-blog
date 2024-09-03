const logIn = async () =>{
    document.location.replace('/api/user/login');
}
document.querySelector('#login').addEventListener('click', logIn);