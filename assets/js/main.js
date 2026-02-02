const countdownElement = document.querySelector("[data-countdown]");

if (countdownElement) {
  const targetDate = new Date(countdownElement.dataset.countdown);

  const updateCountdown = () => {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      countdownElement.textContent = "Bootcamp registration is now open!";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    countdownElement.textContent = `${days}d ${hours}h ${minutes}m to next cohort start`;
  };

  updateCountdown();
  setInterval(updateCountdown, 60000);
}
