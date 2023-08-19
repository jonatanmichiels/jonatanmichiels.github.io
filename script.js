const birthday = new Date(1995, 11, 20);
const today = new Date();
let age = today.getFullYear() - birthday.getFullYear();
const monthDiff = today.getMonth() - birthday.getMonth();
if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
  age--;
}
document.getElementById('age').textContent = age + ' years old 🎂';
document.getElementById('year').textContent = new Date().getFullYear();
