
var enterBtn = $('.enter');

enterBtn.on('click', function(){
  var $userInput = $('.website-title').val();
  var $urlInput = $('.website-url').val();
  if ($userInput === "" || $urlInput === "") {
      alert("Error, you did not enter anything!");
  } else {
      $('.bookmarks').prepend('<section class="bookmark-temp">' +
      '<h2>' + $userInput + '</h2>' +
      '<a href= "' + $urlInput + '">' + $urlInput + '</a>' +
      '<button class="readbkm bookmark-button">Read</button >' +
      '<button class="deletebkm bookmark-button">Delete</button >' +
      '</section>');
      var bmCount = $('.bookmark-temp').length;
      $('.bm-Counter').text(bmCount);
}
});



$('.bookmarks').on('click', '.readbkm', function(){
  $(this).parent().toggleClass('read');
  var bmRead = $('.read').length;
  var bmCount = $('.bookmark-temp').length;
  var unRead = bmCount - bmRead;
  $('.bm-read-Counter').text(bmRead);
  $('.bm-unread').text(unRead);
});

$('.bookmarks').on('click', '.deletebkm', function(){
  $(this).parent().remove('.bookmark-temp');
});


$('.inputs').on('keyup', function() {
 var $userInput = $('.website-title').val();
 var $urlInput = $('.website-url').val();
 if ($userInput === "" || $urlInput === "") {
   $('.enter').prop("disabled", true);
 } else {
   $('.enter').prop("disabled", false);
 }
});
