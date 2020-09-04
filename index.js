//populate 16 divs into .boxContainer
let i = 0
while(i < 16) {
    $('.boxContainer').append('<div class="box"> </div>');
    i++
}
// Changes color on click
$('.boxContainer').on('click', 'div', function() {
    $(this).toggleClass('clicked').toggleClass('box');
});