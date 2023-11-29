

    // active navbar
    let nav = document.querySelector(".navigation-wrap");
    window.onscroll = function(){
        if(document.documentElement.scrollTop > 20){
            nav.classList.add("scroll-on");
        }else{
            nav.classList.remove("scroll-on");
        }
    }

    // nav hide

    let navBar = document.querySelectorAll('.nav-link');
    let navCollapse = document.querySelector('.navbar-collapse.collapse');
    navBar.forEach(function(a){
        a.addEventListener("click", function(){
            navCollapse.classList.remove("show");
        })
    })

    //counter design

    document.addEventListener("DOMContentLoaded",()=>{
        function counter(id, start, end, duration){
            let obj= document.getElementById(id),
            current =start,
            range= end - start,
            increment = end > start ? 1 : -1,
            step= Math.abs(Math.floor(duration / range)),
            timer= setInterval(()=>{
                current += increment;
                obj.textContent= current;
                if(current ==end){
                    clearInterval(timer);
                }
            }, step);
        }
        counter("count1", 0, 1000, 3567);
        counter("count2", 100, 3764, 2500);
        counter("count3", 0, 1400, 3007);
        counter("count4", 0, 4454, 3567);


    });

    //scroll design
    function scrollUp(){
        const scrollUp=document.getElementById('scrollbtn');
        if(this.scrollY >=500)
        {
            scrollUp.classList.add('scrollbtn');
          
            
        }else{
            scrollUp.classList.remove('scrollbtn')
             }
    }
    window.addEventListener('scroll',scrollUp)
   
    function topFunction(){
        document.body.scrollTop=0;
        document.documentElement.scrollTop = 0;
   }