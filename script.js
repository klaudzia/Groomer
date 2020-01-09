function validate() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    // const form = document.getElementById('myform').value;
    const errorElement = document.getElementById('errorElement');

    errorElement.style.padding = "10px";

    var text;
    // var re = /^[a-z]{2,30} [a-z]{2,30}$/i;
    // if (!re.test(name.value)) // 2
    // {
    //     text = "Wpisz co najmniej dwa znaki"
    //     errorElement.innerHTML = text;
    //     return false;
    // } 

    if (name.length < 3) {
        text = "Wpisz imię";
        errorElement.innerHTML = text;
        return false;
    }

    if (email.indexOf("@") == -1 || email.length < 6) {
        text = "Wpisz poprawnie adres emial";
        errorElement.innerHTML = text;
        return false;
    }
    if (message.length <= 20) {
        text = "Wprowadź minimum 20 znaków";
        errorElement.innerHTML = text;
        return false;
    }
    alert("Formularz wysłany!");
    return true;
}



function conf() {
    var d = document.getElementById("btn1");
    var d1 = document.getElementById("btn2");
    var cena1 = d.options[d.selectedIndex].value;
    var cena2 = d1.options[d1.selectedIndex].value;
    var cena3 = cena2 * cena1;
    document.getElementById("price").innerHTML = cena3 + 'zł';
}



function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Zobacz więcej";
        moreText.style.display = "none";

    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Zobacz mniej";
        moreText.style.display = "inline";
    }
}

function initMap() {
    //mapa opcje
    var options = {
        zoom: 13,
        center: {
            lat: 54.6054,
            lng: 18.3472
        }
    }
    //nowa mapa
    var map = new google.maps.Map(document.getElementById('map'), options);

    //pinezka
    var marker = new google.maps.Marker({
        position: {
            lat: 54.610040,
            lng: 18.349380
        },
        map: map,

    })

}



$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('#btnscroll').fadeIn();
        } else {
            $('#btnscroll').fadeOut();
        }

    });
    $("#btnscroll").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });
});
