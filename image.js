const imageSources=['t1.jpg','S1.jpg','r1.jpg','s2.avif','f3.jpg','r2.jpg','r3.webp','s1.jpg','f2.jpg','s3.jpg','s6.webp'];
function changeBackgroundImage() {
    const randomIndex = Math.floor(Math.random() * imageSources.length);
    document.body.style.backgroundImage = `url(${imageSources[randomIndex]})`;
    }
    //Change the background image every 1 seconds (1000 milliseconds)
    setInterval(changeBackgroundImage, 1000);
