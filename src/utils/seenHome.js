const KEY = 'seenHome';

export const hasSeenHome = () =>
  typeof window !== 'undefined' && window.sessionStorage.getItem(KEY) === '1';

export const markSeenHome = () => {
  if (typeof window !== 'undefined') {
    window.sessionStorage.setItem(KEY, '1');
  }
};
