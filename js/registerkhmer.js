$(document).ready(function(){
    const params = new URLSearchParams(window.location.search);
    var theme = params.get("theme");
    console.log(theme)
    if(theme=="light"){
        $("body").css("background","#E9E9E9");
        $(".bar").css("background","#E9E9E9");
        $(".degree-title").css("color","#1B3452").removeClass("text-white");
        $(".label-register").css("color","#1B3452");
        $("#btn-submit,#next-btn,#prev-btn").css("background","white");
        $("#btn-submit,#next-btn,#prev-btn").css("color","#1B3452");
        $("#btn-submit,#next-btn,#prev-btn").css("border","2px solid #1B3452");
    }

    $('#dateOfBirth').datepicker({
        dateFormat: 'yy-mm-dd', // Example: YYYY-MM-DD (e.g., 2025-05-27)
        changeMonth: true,      // Allow changing month via dropdown
        changeYear: true,       // Allow changing year via dropdown
        yearRange: 'c-100:c+10'
    });
        var phoneNumber;
    var parentPhoneNumber;
    var phoneNumbers = new function () {
        this.validate = function () {
            $('#phone').on('keypress', (e) => { (e.which == 32) ? false : true; }); //disable space in mobile phone textbox
            $("#phone").keyup(function (e) { // format number to (XXX-XXX-XXXX)
                let text = $(this).val()                             //Get the value
                text = text.replace(/\D/g, '')                        //Remove illegal characters 
                if (text.length > 3) text = text.replace(/.{3}/, '$&-')  //Add hyphen at pos.4
                if (text.length > 7) text = text.replace(/.{7}/, '$&-')  //Add hyphen at pos.8
                $(this).val(text);
            });
            $('#cpPhone').on('keypress', (e) => { (e.which == 32) ? false : true; }); //disable space in mobile phone textbox
            $("#cpPhone").keyup(function (e) { // format number to (XXX-XXX-XXXX)
                let text = $(this).val()                             //Get the value
                text = text.replace(/\D/g, '')                        //Remove illegal characters 
                if (text.length > 3) text = text.replace(/.{3}/, '$&-')  //Add hyphen at pos.4
                if (text.length > 7) text = text.replace(/.{7}/, '$&-')  //Add hyphen at pos.8
                $(this).val(text);
            });
        },
            this.initInput = function () {
                var input = document.querySelector("#phone");
                input.value = ""
                phoneNumber = intlTelInput(input, {
                    formatOnDisplay: false,
                    placeholderNumberType: "MOBILE",
                    preferredCountries: ['kh'],
                    // separateDialCode: true,
                    utilsScript: "../Scripts/utils.js",
                });
                var enput = document.querySelector("#cpPhone");
                enput.value = ""
                parentPhoneNumber = intlTelInput(enput, {
                    formatOnDisplay: false,
                    placeholderNumberType: "MOBILE",
                    preferredCountries: ['kh'],
                    // separateDialCode: true,
                    utilsScript: "../Scripts/utils.js",
                });
            }
    }


    phoneNumbers.validate();
    phoneNumbers.initInput();


    $(".back").click(function(){
        window.location.href="indexkhmer.html?theme="+theme
    })
    $("#next-btn").click(function(){
        $("#first-container").css("transform"," translateX(-100%)");
        $("#second-container").css("transform"," translateX(0%)");
    })
    $("#prev-btn").click(function(){
        $("#first-container").css("transform"," translateX(0%)");
        $("#second-container").css("transform"," translateX(100%)");
    })
    $("#degreeCbo").on("change",function(){
        var selectedValue = $(this).val();
        if(selectedValue == "1"){
            $("#majorCbo").html(`
                    <select class="form-select" id="majorCbo"><option value="0">(Select Item)</option><option value="7">ហិរញ្ញវត្ថុ និងធនាគារ</option><option value="18">ចលនូបត្ថម្ភ</option><option value="19">គ្រប់គ្រងអាហរ័ណ-នីហរ័ណ</option><option value="20">ធានារ៉ាប់រង</option><option value="35">ភាសាអង់គ្លេស</option><option value="39">គណនេយ្យ</option><option value="42">ទីផ្សារ</option></select>
                `)
        }else if(selectedValue == "2"){
            $("#majorCbo").html(`
                <select class="form-select" id="majorCbo"><option value="0">(Select Item)</option><option value="6">ហិរញ្ញវត្ថុ និងធនាគារ</option><option value="15">គ្រប់គ្រងហានិភ័យ និងធានារ៉ាប់រង</option><option value="16">ពាណិជ្ជកម្មអន្តរជាតិ</option><option value="17">គ្រប់គ្រងបណ្ដាញផ្គត់ផ្គង់ និងចលនូបត្ថម្ភ</option><option value="21">បច្ចេកវិទ្យាហិរញ្ញវត្ថុ </option><option value="22">បច្ចេកវិទ្យាព័ត៌មានធុរកិច្ច</option><option value="23">គណនេយ្យ</option><option value="36">ភាសាអង់គ្លេសសម្រាប់ទំនាក់ទំនងធុរកិច្ច</option><option value="37">ការបង្រៀនភាសាអង់គ្លេស</option><option value="38">ភាសាអង់គ្លេសសម្រាប់បំណិនបកប្រែ</option><option value="41">វិទ្យាសាស្ត្រ និងវិស្វកម្មកុំព្យូទ័រ</option><option value="43">ទីផ្សារ</option><option value="44">នីតិសាស្ត្រ</option><option value="45">សេដ្ឋកិច្ចពាណិជ្ជកម្ម </option><option value="46">គ្រប់គ្រងធុរកិច្ច និងសហគ្រាស</option></select>
            `)
        }else if(selectedValue == "3"){
            $("#majorCbo").html(`
                    <select class="form-select" id="majorCbo"><option value="0">(Select Item)</option><option value="25">ហិរញ្ញវត្ថុ និងធនាគារ</option><option value="26">ហិរញ្ញវត្ថុ និងធនាគារ</option><option value="27">ហិរញ្ញវត្ថុ</option><option value="28">ហិរញ្ញវត្ថុ </option><option value="29">ហិរញ្ញវត្ថុ</option><option value="30">ហិរញ្ញវត្ថុ</option><option value="31">គ្រប់គ្រង</option><option value="32">គ្រប់គ្រង</option><option value="33">គ្រប់គ្រង</option></select>
                    `)
        }else{
            $("#majorCbo").html(`
                <select class="form-select" id="majorCbo"><option value="0">(Select Item)</option></select>
                    `)
        }
    })
})