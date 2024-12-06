// 设置固定的背景图片URL
const backgroundImageUrl = 'https://api.suyanw.cn/api/sjbz.php';

// 设置背景图
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.setProperty('--bg-image', `url(${backgroundImageUrl})`);
});
