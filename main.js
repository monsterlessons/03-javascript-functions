function showName (name, surname) {
  var fullName = name + ' ' + surname;
  return fullName;
}

// showName('Ivan', 'Ivanovich');
// showName('Vova', 'Vovovich');
// showName('Lena', 'Lenovna');
// showName('Katya', 'Katevna');

var ivanName = 'Ivan';
var ivanSurname = 'Ivanovich';
var ivanFullName = showName(ivanName, ivanSurname);

console.log(ivanFullName);

var lenaName = 'Lena';
var lenaSurname = 'Lenovna';
var lenaFullName = showName(lenaName, lenaSurname);

console.log(lenaFullName);
