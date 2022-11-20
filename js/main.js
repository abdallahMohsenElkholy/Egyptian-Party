$(window).ready(function(){
    $('.icon , .fa-x').click(function () {
        $('.menu-list').toggle(500)
    })
    
    $('.singer h3').click((e) => {
        let href = e.target.id
        $(e.target).siblings('p').not(`p[href="${href}"]`).slideUp()
        $(`p[href="${href}"]`).slideToggle()
    })
    
    
    
    let offseTop = $('#details').offset().top
    $(window).scroll(()=>{
        let windowScroll = $(window).scrollTop()
    
        if(windowScroll > offseTop){
            $('.moveUp').fadeIn(500)
        }else{
            $('.moveUp').fadeOut(500)  
        }
    })
    
    $('.moveUp').click(()=>{
        $(window).scrollTop(0)
    })
})




function getleftTime() {
    let now = new Date().getTime()
    var countDownDate = new Date("oct 30, 2022 11:0:0").getTime();
    var timeleft = countDownDate - now;

    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days + "d "
    document.getElementById("hours").innerHTML = hours + "h "
    document.getElementById("mins").innerHTML = minutes + "m "
    document.getElementById("secs").innerHTML = seconds + "s"
    setTimeout(getleftTime, 1000)
}
getleftTime()


