let sidenav = document.getElementById("sidenav");
let overlay = document.getElementById("woh-overlay");

sidenav.style.display = 'none';

document.getElementById('open-sidebar').onclick = function () {


    if (sidenav.style.display === 'none' || overlay.style.display === 'none') {
        sidenav.style.display = "block";
        sidenav.style.left = "0px";
        overlay.style.display = "block";
    } else {
        sidenav.style.display = "none";
        overlay.style.display = "none";
    }

}


overlay.onclick = function () {
    sidenav.style.display = "none";
    overlay.style.display = "none";
}