
// switcher color 

$(function(){
    let showSwitcher = $('#showSwitcher');
    let switcher = $('#switcher');
    let hideSwitcher = $('#hideSwitcher');

    showSwitcher.click(()=>{
        showSwitcher.animate({
            display: 'none',
            width: 0,
            opacity: 0,
            left: '-100%',
        })
        switcher.animate({
            display: 'block',
            width: '250px',
            opacity: 1,
            zIndex: 110,
            left: 0,
        })
    })

    hideSwitcher.click(()=>{
        showSwitcher.animate({
            display: 'block',
            width: '60px',
            opacity: 1,
            left: 0,
        })
        switcher.animate({
            display: 'none',
            width: 0,
            opacity: 0,
            zIndex: 100,
            left: '-100%',
        })
    })
})

// responsive navbar mobile 

$(function(){
    let togglebtn = $('.toggle-menu');
    togglebtn.click(()=>{
        $('header.menyu-responsive ul.ul-2').toggleClass('active');
    })
})

// active style 

