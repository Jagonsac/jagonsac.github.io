const content = document.getElementById('content');
const languageSelector = document.getElementById('language-selector');

languageSelector.addEventListener('change'), () => {
  const selectedLanguage = languageSelector.value;
  if (selectedLanguage === 'en') {
    content.innerHTML = '<h2>Hello!</h2> <p>My name is Jaime González Sacristán and I\'m an International Baccalaureate student</p>';
  } else if (selectedLanguage === 'es') {
    content.innerHTML = '<h2>¡Hola!</h2> <p>Me llamo Jaime González Sacristán y soy un estudiante del Bachillerato Internacional (IB) en el IES Ramiro de Maeztu</p>';
  }
}