import { useEffect } from 'react';

const useScrollAnimation = (className) => {
  useEffect(() => {
    const elements = document.querySelectorAll(`.${className}`);

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(`${className}-visible`);
        } else {
          entry.target.classList.remove(`${className}-visible`);
        }
      });
    }, { threshold: 0.1 }); // Adjust threshold as needed

    elements.forEach(element => {
      observer.observe(element);
    });

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, [className]);
};

export default useScrollAnimation;
