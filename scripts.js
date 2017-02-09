//PHASE ONE
//The user should be able to input a title and URL into the appropriate fields

//NOTE!!had to add || user was still able to leave URL blank and create a bookmark.  NOTE
var enterBtn = $('.enter');

enterBtn.on('click', function(){
  var $userInput = $('.website-title').val();
  var $urlInput = $('.website-url').val();
  if ($userInput === "" || $urlInput === "") {
    // NOTE I can't get it to turn back on once it's off.
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

//When the user clicks on the button for creating the bookmark, it should be added to the bookmarks section



//When the user clicks on the “Mark as Read” button:A class of .read should be added to the bookmark If it already has the class of .read, it should be removed

$('.bookmarks').on('click', '.readbkm', function(){
  $(this).parent().toggleClass('read');
  var bmRead = $('.read').length;
  var bmCount = $('.bookmark-temp').length;
  var unRead = bmCount - bmRead;
  $('.bm-read-Counter').text(bmRead);
  $('.bm-unread').text(unRead);
});


//When the user clicks on the “Remove” button, the link should be removed from the page .bm-read-Counter


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
