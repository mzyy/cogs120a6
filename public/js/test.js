$(document).ready(function() {
	initializePage();
})

function initializePage() {
	$(".back").click(backClick);
    $(".profile").click(ProfileClick);
    $(".collection").click(CollectionClick);
    $(".group").click(GroupClick);
}

function backClick(e) {
    // prevent the page from reloading
    window.location.href='/';
}

function CollectionClick(e) {
    // prevent the page from reloading
    window.location.href='CPH';
}

function ProfileClick(e) {
    // prevent the page from reloading
    window.location.href='PPH';
}

function SearchClick(e) {
    // prevent the page from reloading
    window.location.href='search';
}

function GroupClick(e) {
    // prevent the page from reloading
    window.location.href='GPH';
}

function searchWord(e) {
    word = req.query.word;
    const settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://twinword-word-graph-dictionary.p.rapidapi.com/examhistory/?entry=mask",
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "1db4c8f7e1msh630a5ef79301c90p19a55bjsn4e6d426ef3c4",
        "x-rapidapi-host": "twinword-word-graph-dictionary.p.rapidapi.com"
      }
    };
    
    $.ajax(settings).done(function(response) {
      console.log(response);
    });
}

