// loading screen
$(window).load(function () {
    "use strict";
    $(".loading-overlay .sk-cube-grid").fadeOut(500, function () {
        // show the scroll
        $("html,body").css("overflow", "auto");
        $(this).parent().fadeOut(500, function () {
            $(this).remove();
        });
    });


});
// family number input
const decrementBtn = document.querySelector('.decrement');
  const incrementBtn = document.querySelector('.increment');
  const inputField = document.querySelector('#family_num_input');

  decrementBtn.addEventListener('click', () => {
    if(inputField.value<1){
        inputField.value==0;
    }
    else{
        inputField.value--;
    }
  });

  incrementBtn.addEventListener('click', () => {
    inputField.value++;
  });

  // AddToCard
  const AddToCard = document.querySelector('.add_toCard');
  AddToCard.addEventListener('click', () => {
    $('#addToCard').modal('show')
    setTimeout(function() {
      $('#addToCard').modal('hide')
    }, 3000);
  });

  // currentYear
  const currentYear = new Date().getFullYear();
  const currentYearSpan = document.querySelector('#currentYear');
  currentYearSpan.innerHTML=currentYear+" Ù… "

  // islamicYear
  const today = new Date();
  const options = { timeZone: 'UTC', calendar: 'islamic' };
  const islamicYear = new Intl.DateTimeFormat('en-EG-u-ca-islamic', options).format(today).slice(5, 10);
  const islamicYearSpan = document.querySelector('#islamicYear');
  islamicYearSpan.innerHTML=islamicYear+' Ù‡Ù€'
