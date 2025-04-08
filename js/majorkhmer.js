
$(document).ready(function(){

    let lastScrollY = $(window).scrollTop();
    let scrollTimeout;
    let $registerBtn = $(".register");
    

    $('#detail').on('click', function() {
        $('#feeDetailModel').modal('show'); // Show the modal when the button is clicked
      });


    $(".back").click(function(){
        window.location.href="indexkhmer.html";
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
        let newurl = window.location.href.replace("majorkhmer.html", "major.html");
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
                    $("body").css("font-family","Krasar");
                    $("#language").attr("src", "img/american.jpg");
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
                    $("#img-style").attr("src","img/"+major.styleimg);
                    for(var i =0 ;i<major.willLearnkh.length;i++){
                        $("#willlearn").append("<li>"+major.willLearnkh[i]+"</li>")
                    }
            } else {
                $("body").css("font-family","Krasar");
                $("#language").attr("src", "img/american.jpg");
                $("#major-detail").empty();
                $(".degree-title").html("មិនអាចរកមុខវិជ្ជានេះឃើញទេ");
            }
        } else {
            console.log("Degree not found or no majors available");
        }
    })
    .catch(error => console.error('Error loading JSON:', error));
}