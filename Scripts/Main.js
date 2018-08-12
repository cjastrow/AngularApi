$("#searchBtn").click(function (){
	searchIt();
})


$(document).keypress(function(e) {
	if(e.which == 13) {
	    searchIt();
	}
});


let quote = 'https://talaikis.com/api/quotes/random/';

function searchIt(){

	$("#picture").animate({opacity:'0'},700);
	$("#quoteBox").animate({opacity:'0'},700);
	$("#imageDescription").animate({opacity:'0'},700);


	setTimeout(function(){
		let str = $("#type").val();
		
		if( str == ""){
		
			alert("You must type something before searching.");
		
		} 
		else {
			let unsplash = 'https://api.unsplash.com/search/photos/?client_id=d8ba850a24e78fb254312b97c575e9dac5e07887bb961e906d0f5f681cf8df6a&query=' + str;
		
			$.getJSON(unsplash, function(pictureInfo){
				let pic = pictureInfo.results[0].urls.regular;
				console.log(pic);
				let description = pictureInfo.results[0].description;
				$("#picture").css('background-image','url(' + pic + ')')
				$("#imageDescription").html('Description: ' + description + '.');
				if(description === null){
					$("#imageDescription").html('Description: Unavailable.');
				}
				$("#picture").css('background-color','white');
				$("#picture").css('border','4px solid white');
				$("#picture").css('box-shadow','2px 2px 2px rgba(0,0,0,.4)');
			});

			$.getJSON(quote, function(QuoteInfo){
					
				$("#quoteBox").css('background-color','rgba(0,0,0,.4)');
				$("#q").html('&ldquo;' + QuoteInfo.quote + '&rdquo;');
				$("#a").html('-' + QuoteInfo.author);	
					
			});
		}
	},700);
	$("#picture").load = showIt();

};

function showIt(){

		$("#picture").animate({opacity:'1'},700);
		$("#quoteBox").animate({opacity:'1'},700);
		$("#imageDescription").animate({opacity:'1'},700);

}

