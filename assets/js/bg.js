function getRandomBackgroundImage() {
    const images = [
        '/assets/img/bei.jpg',
        '/assets/img/bei1.jpg',
        '/assets/img/bei2.jpg',
       '/assets/img/bei3.jpg',
       '/assets/img/bei4.jpg',
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

// 设置背景图
document.addEventListener('DOMContentLoaded', () => {
    const randomImage = getRandomBackgroundImage();
    document.body.style.setProperty('--bg-image', `url('${randomImage}')`);
});
