const cookieConsentKey = 'pamCookieConsent';
const cookieBanner = document.querySelector('#cookie-banner');

function safeStorageGet(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeStorageSet(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

function safeStorageRemove(key) {
  try {
    localStorage.removeItem(key);
  } catch {
    // ignore storage errors in restricted browsers
  }
}

function hideCookieBanner() {
  if (cookieBanner) cookieBanner.hidden = true;
}

function saveCookieConsent(value) {
  safeStorageSet(cookieConsentKey, value);
  hideCookieBanner();
}

if (cookieBanner) {
  if (safeStorageGet(cookieConsentKey)) {
    hideCookieBanner();
  }

  const acceptButton = cookieBanner.querySelector('[data-cookie-accept]');
  const rejectButton = cookieBanner.querySelector('[data-cookie-reject]');

  if (acceptButton) acceptButton.addEventListener('click', () => saveCookieConsent('accepted'));
  if (rejectButton) rejectButton.addEventListener('click', () => saveCookieConsent('rejected'));
}

document.querySelectorAll('[data-cookie-reset]').forEach((button) => {
  button.addEventListener('click', () => {
    safeStorageRemove(cookieConsentKey);
    if (cookieBanner) cookieBanner.hidden = false;
  });
});
