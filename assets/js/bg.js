function getRandomBackgroundImage() {
    const images = [
        '../img/bei.jpg',
        '../img/bei1.jpg',
        '../img/bei2.jpg',
       '../img/bei3.jpg',
       '../img/bei4.jpg',
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

// 设置背景图
document.addEventListener('DOMContentLoaded', () => {
    const randomImage = getRandomBackgroundImage();
    document.body.style.setProperty('--bg-image', `url('${randomImage}')`);
});
