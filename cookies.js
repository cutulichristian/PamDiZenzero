const cookieConsentKey = 'pamCookieConsent';
const cookieBanner = document.querySelector('#cookie-banner');

function hideCookieBanner() {
  cookieBanner.hidden = true;
}

function saveCookieConsent(value) {
  localStorage.setItem(cookieConsentKey, value);
  hideCookieBanner();
}

if (cookieBanner) {
  if (localStorage.getItem(cookieConsentKey)) {
    hideCookieBanner();
  }

  cookieBanner.querySelector('[data-cookie-accept]').addEventListener('click', () => saveCookieConsent('accepted'));
  cookieBanner.querySelector('[data-cookie-reject]').addEventListener('click', () => saveCookieConsent('rejected'));
}

document.querySelectorAll('[data-cookie-reset]').forEach(button => {
  button.addEventListener('click', () => {
    localStorage.removeItem(cookieConsentKey);
    if (cookieBanner) cookieBanner.hidden = false;
  });
});
