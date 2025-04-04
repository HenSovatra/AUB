var degree = new function(){
    this.degreeButton = $(".degree-button");
}
var majors = {
    "master-finance-and-banking": {"Title":"Finance and Banking","Price":2400,"Study Year":2}
}

$(document).ready(function(){
    let lastScrollY = $(window).scrollTop();
    let scrollTimeout;
    let $registerBtn = $(".register");
    $("#owl-demo1").owlCarousel({
        items: 1, 
        loop: true, 
        autoplay: true, 
        autoplayTimeout: 3000,
        autoplayHoverPause: false, 
        nav: false, 
        dots: true,
    });
    $("#owl-demo-student").owlCarousel({
        items: 1, 
        loop: true, 
        autoplay: true, 
        autoplayTimeout: 3000,
        autoplayHoverPause: false, 
        nav: false, 
        dots: true,
    });
    
    $("#owl-demo2-master").owlCarousel({
        items: 3, 
        loop: false, 
        autoplay: false, 
        nav: false, 
        dots: false,
        margin: 15, 
        responsive: {
            0: { items: 2 },
            1400: { items: 5 } 
        }  
    });    
    $("#owl-demo2-bachelor").owlCarousel({
        items: 3, 
        loop: false, 
        autoplay: false, 
        nav: false, 
        dots: false,
        margin: 15, 
        responsive: {
            0: { items: 2 },
            1400: { items: 5 } 
        }  
    });
    $("#owl-demo2-associate").owlCarousel({
        items: 3, 
        loop: false, 
        autoplay: false, 
        nav: false, 
        dots: false,
        margin: 15, 
        responsive: {
            0: { items: 2 },
            1400: { items: 5 } 
        }  
    });

    showMajor("bachelor")
    degree.degreeButton.click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active")
        let degree = $(this).attr("id")
        showMajor(degree)
    })

    $(".carousel-degree .item").click(function(){
        var degreeid = $(".degree-button.active").index(".degree-button")+1;
        var majorid = $(this).data("id");
        window.location.href = "major.html?degreeid="+degreeid+"&majorid="+majorid;     
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
});
function showMajor(degree){
    $(".degree-button").removeClass("active");
    $("#" + degree).addClass("active");
    $("#owl-demo2-"+degree).show();
    $("#owl-demo2-"+degree).siblings(".carousel-degree").hide();
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
        $.each(languages[language], function (key, value) {
            $("#" + key).html(value);
        });

    } else {
        $("#language").attr("src", "img/cambodia.jpg");
        $("body").css("font-family","Montserrat");
        $.each(languages[language], function (key, value) {
            $("#" + key).html(value);
        });
    }
}

var languages = 
    {
        "Khmer":
            {
                "title1":"Academic Programs",
                "master":"Master",
                "bachelor":"Bachelor",
                "associate":"Associate",
                "finance-banking1":"Finance and banking",
                "finance-banking2":"Finance and banking",
                "finance-banking3":"Finance and banking",
                "finance1":"Finance",
                "accounting1":"Accounting",
                "accounting2":"Accounting",
                "english1":"English",
                "export-import-management1":"Export Import Management",
                "insurance1":"Insurance",
                "logistics1":"Logistics",
                "marketing1":"Marketing",
                "marketing2":"Marketing",
                "business-and-enterprise-management1":"Business and Enterprise Management",
                "business-economic1":"Business Economics",
                "business-it1":"Business IT",
                "computer-science-and-engineering1":"Computer Science and Engineering",
                "english-for-business-communication1":"English for Business Communication",
                "english-for-translation-and-interpreting1":"English for Translation and Interpreting",
                "fintech1":"Fintech",
                "internation-business1":"International Business",
                "law1": "Law",
                "risk-management-and-insurance1":"Risk Management and Insurance",
                "supply-chain-management-and-logistics1":"Supply Chain Management and Logistics",
                "teaching-english-as-a-foreign-language":"Teaching English as a Foreign Language",
                "management1":"Management",
                "news-and-events":"News and Events",
                "load-news":`Load News <i class="fa-solid fa-angles-right"></i>`,
                "student-achievements":"Student's Achievements",
                "register-button":"Register"
            }
        ,
        "English":
            {
                "title1":"កម្មវិធីថ្នាក់ឧត្តមសិក្សា និងថ្នាក់ក្រោយបរិញ្ញាបត្រ",
                "master":"បរិញ្ញាបត្រជាន់ខ្ពស់",
                "bachelor":"បរិញ្ញាបត្រ",
                "associate":"បរិញ្ញាបត្ររង",
                "finance-banking1":"ហិរញ្ញវត្ថុ និងធនាគារ",
                "finance-banking2":"ហិរញ្ញវត្ថុ និងធនាគារ",
                "finance-banking3":"ហិរញ្ញវត្ថុ និងធនាគារ",
                "finance1":"ហិរញ្ញវត្ថុ",
                "accounting1":"គណនេយ្យ",
                "accounting2":"គណនេយ្យ",
                "english1":"ភាសាអង់គ្លេស",
                "export-import-management1":"គ្រប់គ្រងអាហរ័ណ-នីហរ័ណ",
                "insurance1":"ធានារ៉ាប់រង",
                "logistics1":"ចលនូបត្ថម្ភ",
                "marketing1":"ទីផ្សារ",
                "marketing2":"ទីផ្សារ",
                "business-and-enterprise-management1":"គ្រប់គ្រងធុរកិច្ច និងសហគ្រាស",
                "business-economic1":"សេដ្ឋកិច្ចពាណិជ្ជកម្ម",
                "business-it1":"បច្ចេកវិទ្យាព័ត៌មានធុរកិច្ច",
                "computer-science-and-engineering1":"វិទ្យាសាស្រ្ត និងវិស្វកម្មកំព្យូទ័រ",
                "english-for-business-communication1":"ភាសាអង់គ្លេសសម្រាប់ទំនាក់ទំនងធុរកិច្ច",
                "english-for-translation-and-interpreting1":"ភាសាអង់គ្លេសសម្រាប់បំណិនបកប្រែ",
                "fintech1":"បច្ចេកវិទ្យាហិរញ្ញវត្ថុ",
                "internation-business1":"ពាណិជ្ជកម្មអន្តរជាតិ",
                "law1": "ពាណិជ្ជកម្មអន្តរជាតិ",
                "risk-management-and-insurance1":"គ្រប់គ្រងហានិភ័យ និងធានារ៉ាប់រង",
                "supply-chain-management-and-logistics1":"គ្រប់គ្រងបណ្ដាញផ្គត់ផ្គង់ និងចលនូបត្ថម្ភ",
                "teaching-english-as-a-foreign-language":"ការបង្រៀនភាសាអង់គ្លេស",
                "management1":"គ្រប់គ្រង",
                "news-and-events":"ព័ត៌មាន និង ព្រឹត្តិការណ៍",
                "load-news":`អានព័ត៌មាន <i class="fa-solid fa-angles-right"></i>`,
                "student-achievements":"ស្នាដៃនិស្សិត",
                "register-button":"ចុះឈ្មោះ"
            }
        
    }
