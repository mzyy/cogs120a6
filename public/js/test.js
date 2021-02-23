$(document).ready(function() {
	initializePage();
})

function initializePage() {
	//in main page
	$(".back").click(backClick);
    $(".profile").click(ProfileClick);
    $(".collection").click(CollectionClick);
    $(".group").click(GroupClick);
	//in profile page
	$(".backProfile").click(backProfileClick);
	$(".account").click(AccountClick);
	$(".achievement").click(Achievementlick);
	$(".record").click(RecordClick);
	$(".settings").click(SettingsClick);

}

function backClick(e) {
    // prevent the page from reloading
    window.location.href='/';
}

function backProfileClick(e) {
    // prevent the page from reloading
    window.location.href='/PPH';
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

function AccountClick(e) {
    // prevent the page from reloading
    window.location.href='APH';
}

function Achievementlick(e) {
    // prevent the page from reloading
    window.location.href='AchPH';
}

function RecordClick(e) {
    // prevent the page from reloading
    window.location.href='RPH';
}

function SettingsClick(e) {
    // prevent the page from reloading
    window.location.href='SPH';
}

function ProfileGroupClick(e){
	// prevent the page from reloading
    window.location.href='APH';
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
