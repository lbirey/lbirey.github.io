// 设置固定的背景图片URL
const backgroundImageUrl = 'https://example.com/img/bgx/bg1.webp';

// 设置背景图
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.setProperty('--bg-image', `url(${backgroundImageUrl})`);
});
