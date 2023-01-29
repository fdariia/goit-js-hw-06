const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    // ====================== Як правильно збирати значення полів ======================
    // const formData = new FormData(event.currentTarget); Вже так можна надсилати на сервер
    // formData.forEach((value, name) => {
    //     console.log('value', value);
    //     console.log('name', name);
    // })

    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    const formData = {
        email,
        password,
    }

    console.log(formData);

    if (email ==='' || password ===''){
        return alert('Please fill in all fields');
    }
    event.currentTarget.reset();
}