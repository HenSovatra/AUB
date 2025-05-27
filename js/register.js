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
        window.location.href="index.html?theme="+theme
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
                <select class="form-select" id="majorCbo"><option value="0">(Select Item)</option><option value="7">Finance and Banking</option><option value="18">Logistics</option><option value="19">Export-Import Management</option><option value="20">Insurance</option><option value="35">English</option><option value="39">Accounting</option><option value="42">Marketing</option></select>
                `)
        }else if(selectedValue == "2"){
            $("#majorCbo").html(`
           <select class="form-select" id="majorCbo"><option value="0">(Select Item)</option><option value="6">Finance and Banking</option><option value="15">Risk Management and Insurance</option><option value="16">International Business</option><option value="17">Supply Chain Management and Logistics</option><option value="21">Financial Technology</option><option value="22">Business Information Technology</option><option value="23">Accounting</option><option value="36">English for Business Communication</option><option value="37">Teaching English as a Foreign Language</option><option value="38">English for Translation and Interpreting</option><option value="41">Computer Science and Engineering</option><option value="43">Marketing</option><option value="44">Law</option><option value="45">Business Economics</option><option value="46">Business and Enterprise Management</option></select>
            `)
        }else if(selectedValue == "3"){
            $("#majorCbo").html(`
                    <select class="form-select" id="majorCbo"><option value="0">(Select Item)</option><option value="25">Finance and Banking Course Work</option><option value="26">Finance and BankingCourse Work and Research</option><option value="27">Finance and BankingResearch</option><option value="28">Finance Course Work</option><option value="29">FinanceCourse Work and Research</option><option value="30">FinacneResearch</option><option value="31">ManagementCourse Work</option><option value="32">ManagementCourse Work and Research</option><option value="33">ManagementResearch</option></select>
                    `)
        }else{
            $("#majorCbo").html(`
                <select class="form-select" id="majorCbo"><option value="0">(Select Item)</option></select>
                    `)
        }
    })
})