    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email.value)) {
        alert('Valid email')
    } else {
        alert('Invalid email')
    }
