//PHASE ONE
//The user should be able to input a title and URL into the appropriate fields


var enterBtn = $('.enter');

enterBtn.on('click', function(){
  var $userInput = $('.website-title-inputs').val();
  var $urlInput = $('.website-url-inputs').val();
  $('.bookmarks').prepend('<section class="bookmark-temp first-bookmark">' +
'<h2>' + $userInput + '</h2>' +
 '<a href= "' + $urlInput + '">' + $urlInput + '</a>' +   //<a href="url">link text</a>
 '<button class="readbkm bookmark-button">Read</button >' +
 '<button class="deletebkm bookmark-button">Delete</button >' +
'</section>');
});

//When the user clicks on the button for creating the bookmark, it should be added to the bookmarks section




//When the user clicks on the “Mark as Read” button:A class of .read should be added to the bookmark If it already has the class of .read, it should be removed

$('.bookmarks').on('click', '.readbkm', function(){
  $(this).parent().toggleClass('read');
});

$('.bookmarks').on('click', '.deletebkm', function(){
  $(this).parent().remove('.bookmark-temp');
});

//When the user clicks on the “Remove” button, the link should be removed from the page




//PHASE TWO
//If the user omits the title or the URL, the application should not create the link and should instead display an error.



//CSS The application should be resposive and work equally well on desktop and mobile. (Flexbox is your friend here.)



//PHASE THREE
//The button for creating links should be disabled if there are no contents in the title or URL fields.



//The application should be able to keep count of the total number of links currently on the page.



//The application should be able to keep count of the total number of read and unread links currently on the page.



//PHASE FOUR: The Project Strikes Back
//Add a “Clear Read Bookmarks” button which clears all the read bookmarks when clicked.



//The user should not to be able to add a URL that isn’t valid.
