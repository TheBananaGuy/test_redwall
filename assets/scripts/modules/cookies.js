const setCookie = (name, value, days) => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

$(() => {
  const cookieBox = $('#js-cookie-conatiner');
  const cookieButton = $('#js-cookie-consent');

  const cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith('consent'))
  
  if(!cookieValue) {
    cookieBox.fadeIn()
  }
  
  cookieButton.click(() => {
    cookieButton.prop('disabled');
    setCookie('consent', 'agreed', 365);
    cookieBox.fadeOut();
  })
})