const toast = document.getElementById('server-status-toast');

export function showToast() {
  toast?.classList.remove('visually-hidden');
  setTimeout(() => toast?.classList.add('visible'), 1000);
}

export function hideToast() {
  toast?.classList.add('hidden');
  setTimeout(() => toast?.classList.add('visible'), 1000);
}

const capitalLetter = (letter: string) =>
  letter.charAt(0).toUpperCase() + letter.slice(1);

const upperCaseLetter = (letter: string) => letter.toUpperCase();

const checkMatch = (stringA: string, stringB: string, property: string) =>
  stringA === stringB ? property : '';

export { capitalLetter, checkMatch, upperCaseLetter };
