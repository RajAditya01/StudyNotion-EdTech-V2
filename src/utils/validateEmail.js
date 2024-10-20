const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function validateEmail(email) {
    return emailRegex.test(email);
}
