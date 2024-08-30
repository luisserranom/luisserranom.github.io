function updatePosition() {
    x += dx;
    y += dy;

    if (x + dvdLogo.clientWidth >= window.innerWidth || x <= 0) {
        dx = -dx * speedReduction;
        changeImage();
    }

    if (y + dvdLogo.clientHeight >= window.innerHeight || y <= 0) {
        dy = -dy * speedReduction;
        changeImage();
    }

    dvdLogo.style.left = x + 'px';
    dvdLogo.style.top = y + 'px';

    if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        requestAnimationFrame(updatePosition);
    }
}

// Iniciar animación después de inactividad
function resetInactivityTimer() {
    clearTimeout(inactivityTimeout);
    dvdLogo.style.display = 'none';
    inactivityTimeout = setTimeout(() => {
        dvdLogo.style.display = 'block';
        requestAnimationFrame(updatePosition);
    }, inactivityTime);
}

// Ejecutar las animaciones de manera separada
window.onload = () => {
    displayRandomPhrase();
    resetInactivityTimer();
};
window.onmousemove = resetInactivityTimer;
window.onkeydown = resetInactivityTimer;
