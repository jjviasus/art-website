interface Props {
  selectors: string
}

export function fadeInAnimation({selectors}: Props) {
  const images = document.querySelectorAll(selectors);

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate'); // Add the 'animate' class to trigger the animation
        observer.unobserve(entry.target); // Stop observing once the animation is triggered
      }
    });
  });

  images.forEach(image => {
    imageObserver.observe(image);
  });
}
