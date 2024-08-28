document.getElementById('giftContainer').addEventListener('click', function() {
    document.getElementById('giftContainer').classList.add('hidden');
    
    const balloonContainer = document.getElementById('balloonContainer');
    balloonContainer.classList.remove('hidden');
    for (let i = 0; i < 30; i++) {
        let balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = `${Math.random() * 100}vw`;
        balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        balloon.style.animationDuration = `${Math.random() * 2 + 3}s`;
        balloonContainer.appendChild(balloon);
    }
    
    setTimeout(() => {
        balloonContainer.classList.add('hidden');
        document.getElementById('giftContainer2').classList.remove('hidden');
    }, 4000);
});

document.getElementById('geserButton').addEventListener('click', function() {
    document.getElementById('giftContainer2').classList.add('hidden');
    document.getElementById('giftContainer3').classList.remove('hidden');
});

document.getElementById('nextToGift4Button').addEventListener('click', function() {
    document.getElementById('giftContainer3').classList.add('hidden');
    document.getElementById('giftContainer4').classList.remove('hidden');
});

document.getElementById('finalButton').addEventListener('click', function() {
    document.getElementById('giftContainer4').classList.add('hidden');
    document.getElementById('giftContainer5').classList.remove('hidden');
});

document.getElementById('finalGiftButton').addEventListener('click', function() {
    document.getElementById('giftContainer5').classList.add('hidden');
    document.getElementById('bookContainer').style.display = 'block';
});
