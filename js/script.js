/* global $ */

// BELOW Update the songs array with four of your favorites songs.

var songs = [
    {
        name: "Sunflower",
        image: "https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2Ff8df6f94846dc4a8f2e1b94d7abd1cb5.1000x1000x1.jpg",
        artist: "Swae Lee, Post Malone",
        songlength: "2:38",
        link: "https://www.youtube.com/watch?v=ApXoWvfEYVU" },
    {
        name: "Monster",  
        image: "https://images.rapgenius.com/6a89651a53ebadf375d20b33f412b087.500x438x1.jpg",
        artist: "Kanye West, Jay-Z, Nicki Minaj, Rick Ross",
        songlength: "6:10",
        link: "https://www.youtube.com/watch?v=Idz9aYXq98U" },
    {
        name: "MAMA",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/6ix9ine_%E2%80%93_Dummy_Boy.png/220px-6ix9ine_%E2%80%93_Dummy_Boy.png",
        artist: "6ix9ine, Kanye West, Nicki Minaj",
        songlength: "3:10",
        link: "https://www.youtube.com/watch?v=gJ-bD1pU7hM" },
    {
        name: "Get You",
        image: "https://i.ytimg.com/vi/EQWKdwvXh-o/maxresdefault.jpg",
        artist: "Daniel Caesar, Kali Uchi",
        songlength: "2:38",
        link: "https://www.youtube.com/watch?v=uQFVqltOXRg" },
    {
        name: "Middle Child",
        image: "https://static.stereogum.com/uploads/2019/01/Middle-Child-1548260765-640x640.jpg",
        artist: "J. Cole",
        songlength: "3:33",
        link: "https://www.youtube.com/watch?v=e8CLsYzE5wk" }
    ];
function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    songs.forEach(function(song){
    $("#songs").append("<p>" + song.name + "</p>");
 });
    songs.forEach(function(image){
    $("#images").append("<img src=" + image.image + ">");
 });
    songs.forEach(function(artistspersong){
    $("#artists").append("<p>" + songs.artist + "</p>");
 });
    songs.forEach(function(length){
    $("#lengths").append("<p>" + length.songlength + "</p>");
 });
    songs.forEach(function(link){
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
    var newObj = {
        name: $("#song").val(),
        image: $("#images").val(),
        artist: $("#artist").val(),
        songlength: $("#lengths").val(),
        link: $("#link").val()
    }

    songs.push(newObj);

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
