// /^[^/s@] = before @ there must be other chararacters @[^/s@] == after @ there must be other thing
// \.[^/s@]+$/ = after a period there must be a char
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email.value)) {
        alert('Valid email')
    } else {
        alert('Invalid email')
    }
