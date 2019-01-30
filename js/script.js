/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Sunflower", "Monster", "MAMA", "Get You", "Middle Child"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var img_links = ["https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2Ff8df6f94846dc4a8f2e1b94d7abd1cb5.1000x1000x1.jpg",
    "https://images.rapgenius.com/6a89651a53ebadf375d20b33f412b087.500x438x1.jpg", 
    "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/6ix9ine_%E2%80%93_Dummy_Boy.png/220px-6ix9ine_%E2%80%93_Dummy_Boy.png",
    "https://i.ytimg.com/vi/EQWKdwvXh-o/maxresdefault.jpg", "https://static.stereogum.com/uploads/2019/01/Middle-Child-1548260765-640x640.jpg"];
var artists = ["Swae Lee, Post Malone", "Kanye West, Jay-Z, Nicki Minaj, Rick Ross", "6ix9ine, Kanye West, Nicki Minaj", 
    "Daniel Caesar, Kali Uchi", "J. Cole"];
var song_lengths = ["2:38","6:10","3:10","2:38","3:33"];
var links = ["https://www.youtube.com/watch?v=ApXoWvfEYVU", "https://www.youtube.com/watch?v=Idz9aYXq98U", 
    "https://www.youtube.com/watch?v=gJ-bD1pU7hM", "https://www.youtube.com/watch?v=uQFVqltOXRg", "https://www.youtube.com/watch?v=e8CLsYzE5wk"];

function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    songs.forEach(function(song){
    $("#songs").append("<p>" + song + "</p>");
 });
    img_links.forEach(function(image){
    $("#images").append("<img src=" + image + ">");
 });
    artists.forEach(function(artistspersong){
    $("#artists").append("<p>" + artistspersong + "</p>");
 });
    song_lengths.forEach(function(songlength){
    $("#lengths").append("<p>" + songlength + "</p>");
 });
    links.forEach(function(link){
    $("#links").append("<p>" + "<a href=" + link + ">" + "Listen!" + "</a>" + "</p>");
 });
}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();

}

function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    var newSong = $("#song").val();
    var newArtist = $("#artist").val();
    var newSongLength = $("#length").val();
    var newImage = $("#image").val();
    var newLink = $("link").val();

    songs.push(newSong);
    artists.push(newArtist);
    song_lengths.push(newSongLength);
    img_links.push(newImage);
    links.push(newLink);
    
    $("#add").click(function() {
       $(newSong).append("#songs");
       $(newArtist).append("#artists");
       $(newSongLength).append("#lengths");
       $(newImage).append("#images");
       $(newLink).append("#links");
    });
    
}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
