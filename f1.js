function login()
{
    let userinfo = document.getElementById('form2Example1');
    console.log(userinfo);
    const request = new XMLHttpRequest()
    request.open('POST','http://127.0.0.1:5000/login/${JSON.stringify(userinfo)}')
}