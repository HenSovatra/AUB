
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
    loadLanguage();
    $("#language").click(function(){
        toggleLanguage();
        
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
                if(language=="English"){
                    $("#major-name").html(major.namekh);
                    $("#yearofstudy").html(major.yearOfStudy + " ឆ្នាំ ទទួលបានសរុប "+major.credits+" credits");
                    $("#description").html(major.descriptionkh)
                    $("#fee").html("$"+major.price+" ក្នុងមួយឆ្នាំ");
                    $("#major-pic").attr("src", "img/"+major.img);
                    $("#curr").attr("href",major.curriculaLink)
                    $("#curr").html("កម្មវិធីសឹក្សា");
                    $("#overview").html("លម្អិត");
                    $("#study-period").html("រយៈពេលសិក្សា");
                    $("#tution-fee").html("តម្លៃសិក្សា");
                    $("#youwilllearn").html("អ្នកនឹងសឹក្សាពី")
                    $(".degree-title").html(degree.namekh)
                    $("#willlearn").empty()
                    $("#register-button").html("ចុះឈ្មោះ");
                    for(var i =0 ;i<major.willLearn.length;i++){
                        $("#willlearn").append("<li>"+major.willLearnkh[i]+"</li>")
                    }
                }else{
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
                    for(var i =0 ;i<major.willLearn.length;i++){
                        $("#willlearn").append("<li>"+major.willLearn[i]+"</li>")
                    }
                }
            } else {
                console.log("Major not found");
            }
        } else {
            console.log("Degree not found or no majors available");
        }
    })
    .catch(error => console.error('Error loading JSON:', error));
}


function loadLanguage() {
    var language = localStorage.getItem("language") || "English";
    updateLanguageUI(language);
}

function toggleLanguage() {
    var language = localStorage.getItem("language") === "English" ? "Khmer" : "English";
    localStorage.setItem("language", language);
    updateLanguageUI(language);
}

function updateLanguageUI(language) {
    if (language === "English") {
        $("#language").attr("src", "img/american.jpg");
        $("body").css("font-family","Krasar");
        loadContent();

    } else {
        $("#language").attr("src", "img/cambodia.jpg");
        $("body").css("font-family","Montserrat");
        loadContent();
    }
}