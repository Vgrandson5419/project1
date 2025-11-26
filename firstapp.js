'use strict '
function askUser(){
const userAnswers = {
numberOffilms :prompt ("Сколко фильмов вы уже посмотрели ?",""),
     lwf : prompt("One of last whatched films "),
     genre : prompt ("What was the genre of the film ?") ,
     rating : prompt ("Who much you wil give it ?"), 
     actors : prompt('What actor played the best ?'),
     ratings : prompt ("How much would you give him ? "),
}
     if (userAnswers != "" || userAnswers != null || userAnswers.length > 50 ){
      console.log("done")
    } else {
console.log("Error")
     }
    }

 
    askUser();

const personalMovieDb = {

    count:numberOffilms ,
    movies: {
         
    },
    actors: {},
    genres:[],
    privat:false,
}

for (let i = 0 ; i < 2 ; i ++){

}


console.log(personalMovieDb)

personalMovieDb.movies[lwf] = rating;
personalMovieDb.actors[actors] = ratings;
personalMovieDb.genres = genre;



for(let i = 0; i <=6; i++  ){


if (numberOffilms === "" || numberOffilms === null  || numberOffilms.length > 50){
    numberOffilms
}
}


if ( personalMovieDb > 0 && personalMovieDb.count < 10 ){

    alert ("You have whatched not too much films")
}else if (10  <personalMovieDb.count && personalMovieDb.count <50){
    alert("You are average watcher")
}else if ( personalMovieDb.count >50) {
    alert("You are very big fun of films")
}else 
    {
    alert ("Enter proper number of films")
}



function getMathresult (base ,times){



}


getMathresult();