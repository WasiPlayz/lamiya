// Animate the profile image on load
window.addEventListener('load', () => {
    const profileImage = document.querySelector('.profile-image');
    profileImage.style.transform = 'scale(1.1)';
    profileImage.style.transition = 'transform 0.5s ease-in-out';
    setTimeout(() => {
        profileImage.style.transform = 'scale(1)';
    }, 500);
});
