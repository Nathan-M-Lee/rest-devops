const url = `http://localhost:5000/api/users/add`



let btn = document.getElementById('btn');
btn.addEventListener("click", addUser);

function addUser() {

    let ifirstName = document.getElementById('firstName').value;
    let ilastName = document.getElementById('lastName').value;
    let iusername = document.getElementById('username').value;
    let ipassword = document.getElementById('password').value;
    let iemail = document.getElementById('email').value;

    let user = {
        firstName: ifirstName,
        lastName: ilastName,
        username: iusername,
        password: ipassword,
        email: iemail
    };

    const options = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    // const options2 = new Request(url, {
    //     method: 'POST',
    //     body: JSON.stringify(user),
    //     headers = new Headers ({
    //         'Content-Type': 'application/json'
    //     })
    // });

    fetch(url, options)
        .then(res => res.json())
        .then(res => console.log(res));
}