const allLinks = Array.from(document.links).map(link => link.href);

function changeStyle() {
    document.body.style.backgroundColor = 'yellow';
    document.body.style.fontFamily = 'Arial, sans-serif';
    document.body.style.fontSize = '12px';
    document.body.style.color = 'blue';
    const images = document.querySelectorAll('img');
            images.forEach(img => {
                img.style.border = '1px solid green';
            });
}