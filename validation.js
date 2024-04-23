function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


function validatePhone(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}


function validateProductForm() {
    const productName = document.querySelector('#product-form input[type="text"]').value;
    const email = document.querySelector('#product-form input[type="email"]').value;
    const phone = document.querySelector('#product-form input[type="tel"]').value;
    
    if (productName.trim() === '') {
        alert('Введите название продукта или услуги');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Введите корректный email');
        return false;
    }

    if (!validatePhone(phone)) {
        alert('Введите корректный номер телефона');
        return false;
    }

    return true;
}


function validateCallbackForm() {
    const name = document.querySelector('#callback-form input[type="text"]').value;
    const email = document.querySelector('#callback-form input[type="email"]').value;
    const phone = document.querySelector('#callback-form input[type="tel"]').value;
    const subject = document.querySelector('#callback-form input[type="text"]').value;

    if (name.trim() === '') {
        alert('Введите ваше имя');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Введите корректный email');
        return false;
    }

    if (!validatePhone(phone)) {
        alert('Введите корректный номер телефона');
        return false;
    }

    if (subject.trim() === '') {
        alert('Введите тему');
        return false;
    }

    return true;
}


document.getElementById('product-form').addEventListener('submit', function(event) {
    if (!validateProductForm()) {
        event.preventDefault(); 
    }
});

document.getElementById('callback-form').addEventListener('submit', function(event) {
    if (!validateCallbackForm()) {
        event.preventDefault(); 
    }
});