// 方法一
// https://dotblogs.com.tw/ShihGoGo/2017/05/18/115614

const menu_icon = document.querySelector('.menu-icon')
const menu = document.querySelector('.menu')

let mm = window.matchMedia("(max-width:900px)");
mm.addListener(resizeWidth)
resizeWidth(mm)

function resizeWidth(pMatchMedia) {

    if (pMatchMedia.matches) {
        menu_icon.classList.remove('disappear')
        menu.style.display = 'none'

    } else {
        menu_icon.classList.add('disappear')
        menu.style.display = 'flex'
    }

}



menu_icon.addEventListener('click', function() {
    if (menu.style.display == "block") {
        menu.setAttribute('style', '')
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
    }
})


// console.log(window.screen.width)