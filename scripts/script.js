function renderStars() {
  const numStars = 800;
  for(let i=0; i <= numStars; i++)
  {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.opacity = Math.random() * (0.8 - 0.2) + 0.2;
    star.style.animation = `blink ${Math.random() * (7 - 3) + 3}s infinite`
    document.body.append(star);

  }

}

renderStars();

