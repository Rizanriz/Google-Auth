import { useEffect } from 'react';

export const useAnimationEffect = () => {
  useEffect(() => {
    const container = document.getElementById('container');
    const toggleClass = (action) => container.classList[action]('active');
    
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    
    registerBtn.addEventListener('click', () => toggleClass('add'));
    loginBtn.addEventListener('click', () => toggleClass('remove'));

    return () => {
      registerBtn.removeEventListener('click', () => toggleClass('add'));
      loginBtn.removeEventListener('click', () => toggleClass('remove'));
    };
  }, []);
};
