const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

function checkTime() {
    const now = new Date();
    let hour = now.getHours(), minutes = now.getMinutes(), seconds = now.getSeconds(), greeting = `Go' morron`, after = 'FM';
    if (hour >= 12) greeting = `Go' middag`;
    if (hour >= 16) greeting = `Go' kväll`;
    if (hour >= 20) greeting = `Go' natt`; 
    if (hour > 12) {
        after = 'EM';
        hour = hour - 12;
    }
    $(document).attr('title', greeting);
    $('#time').text(`${hour}:${minutes.toString().padStart(2, 0)}:${seconds} ${after}`);
    $('#greeting').text(`${greeting}`);
    $('#date').text(`${now.toLocaleDateString('sv-SE', opts)}`);
}

function setImage() {
  
  const images = [
    'https://images5.alphacoders.com/699/699273.png',
    'https://images6.alphacoders.com/712/712437.jpg',
    'https://images8.alphacoders.com/617/617304.jpg',
    'https://4.bp.blogspot.com/-grNTvilYuvU/XHku7q1lkVI/AAAAAAAAC-w/d6DfH0QmPKYjwncJS8iGBNJJ3ofNeMlEgCKgBGAs/w0/anime-night-sky-stars-clouds-scenery-4K-uhdpaper.com-94.jpg',
    'https://i.pinimg.com/originals/10/22/34/102234877a75fbd08e3d1e36386906f0.jpg',
    'http://hdqwalls.com/wallpapers/anime-landscape-waterfall-cloud-5k-mq.jpg',
    'https://3.bp.blogspot.com/-kztZsQ3tYA0/XHXEgKrD6lI/AAAAAAAAC68/9qMXQyIB8BwIDB7IiMc-bPFUp9IkITORwCKgBGAs/w0/anime-girl-sky-clouds-sunrise-scenery-4K-67.jpg',
    'https://www.elsetge.cat/myimg/f/26-265899_trend-anime-night-scenery-4k-wallpaper-best-wallpapers.jpg',
    'https://free4kwallpapers.com/uploads/originals/2019/06/02/anime-city-scenery-wallpaper.jpg',
    'https://images5.alphacoders.com/882/882424.jpg',
    'https://wallpaperaccess.com/full/3438.jpg',
    'https://2.bp.blogspot.com/-C8vnMOJVWRI/XIkaFbYfEcI/AAAAAAAAAgo/FIBvarQjNwwTVb5OPnpRhUjTU1lcnuQMwCKgBGAs/w0/anime-scenery-sunset-uhdpaper.com-4K-112.jpg',
];
  
  const url = images[Math.floor(Math.random() * images.length)];

  $('body').css('background-image', `url(${url})`)
  
}


const checkWindowSize = () => $(window).width() < 1224 ? $('#dock').attr('hidden', 'true') : $('#dock').removeAttr('hidden');
checkWindowSize();
$(window).resize(checkWindowSize);

setImage();
setInterval(setImage, 10*1000)
checkTime();
setInterval(checkTime, 1000);
