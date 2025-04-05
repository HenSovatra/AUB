
$(document).ready(function(){

    let lastScrollY = $(window).scrollTop();
    let scrollTimeout;
    let $registerBtn = $(".register");
    
    $(".back").click(function(){
        window.location.href="index.html";
    })

    $(window).on("scroll", function () {
        clearTimeout(scrollTimeout);
        $registerBtn.addClass("hidden").removeClass("bounce");
        let currentScrollY = $(window).scrollTop();
        if (currentScrollY < lastScrollY) {
            $registerBtn.removeClass("hidden"); 
        }
        lastScrollY = currentScrollY;

        scrollTimeout = setTimeout(function () {
            $registerBtn.removeClass("hidden").addClass("bounce");
        }, 1500);
    });
    loadContent();
    $("#language").click(function(){        
        let newurl = window.location.href.replace("major.html", "majorkhmer.html");
        window.location.href = newurl;
    })
})

function loadContent(){
    const params = new URLSearchParams(window.location.search);
    var degreeid = params.get("degreeid");
    var majorid = params.get("majorid");
    var language = localStorage.getItem("language") || "English";
    fetch('data/data.json')
    .then(response => response.json()) 
    .then(data => {
        const degree = data[0].degree.find(d => d.id == degreeid);

        if (degree && degree.majors) {
            const major = degree.majors.find(m => m.id == majorid);
        
            if (major) {
                    $("body").css("font-family","Montserrat");
                    $("#language").attr("src", "img/cambodia.jpg");
                    $("#major-name").html(major.name);
                    $("#yearofstudy").html(major.yearOfStudy + " Years with total "+major.credits+" credits");
                    $("#description").html(major.description)
                    $("#fee").html("$"+major.price+" per year");
                    $("#major-pic").attr("src", "img/"+major.img);
                    $("#curr").attr("href",major.curriculaLink);
                    $("#curr").html("Find out more about curricula");
                    $("#overview").html("Overview");
                    $("#study-period").html("Study Period");
                    $("#tution-fee").html("Tution Fee");
                    $("#youwilllearn").html("You will learn")
                    $(".degree-title").html(degree.name)
                    $("#willlearn").empty()
                    $("#register-button").html("Register");
                    $("#img-style").attr("src","img/"+major.styleimg);
                    for(var i =0 ;i<major.willLearn.length;i++){
                        $("#willlearn").append("<li>"+major.willLearn[i]+"</li>")
                    }
            } else {
                $("body").css("font-family","Montserrat");
                $("#language").attr("src", "img/cambodia.jpg");
                $("#major-detail").empty();
                $(".degree-title").html("Major not found");
            }
        } else {
            console.log("Degree not found or no majors available");
        }
    })
    .catch(error => console.error('Error loading JSON:', error));
}

