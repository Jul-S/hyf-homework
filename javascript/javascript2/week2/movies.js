//1.Create an array of movies containing the movies with a short title (you define what short means)
const shortTitle = movies.filter(movie => movie.title.length < 10);

//2.Create an array of movie titles with long movie titles
const longTitle = movies.filter(movie => movie.title.length > 10);

//3.Count the number of movies made between 1980-1989 (including both the years)
const count = movies.filter(movie => movie.year > 1979 && movie.year < 1990).length;

//4.Create a new array that has an extra key called tag. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)
const moviesWithTag = movies.map(movie => {
if (movie.rating >= 7) {
    movie.tag = "Good";
} else if (movie.rating >= 4) {
    movie.tag = "Avarage";
} else {
    movie.tag = "Bad";
}
return movie;
})

//5. Using chaining, first filter the movies array to only contain the movies rated higher than 6. Now map the movies array to only the rating of the movies.
const moviesTopRatings = movies.filter(m => m.rating > 6).map(m => m.rating);

//6.Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin. So if there were 3 movies that contained Surfer, 1 with Alien and 2 with Benjamin, you would return 6. 
const moviesWithWords = movies.filter(m => m.title.toLowerCase().includes("surfer") || m.title.toLowerCase().includes("alien") || m.title.toLowerCase().includes("benjamin")).length;

//7. Create an array of movies where a word in the title is duplicated. 
const moviesWithDuplicatedWords = movies.filter(m => m.title.toLowerCase().split(" ").filter((word, index, array) => array.indexOf(word) != index).length > 0);

//8. Calculate the average rating of all the movies using reduce
let avrgRating = movies.map(m => m.rating).reduce((sum, rating) => sum += rating) / movies.length;

//9. Count the total number of Good, Average and Bad movies using reduce
// I`m using reduce with initial empty Object, accumulating by property movie.tag count if property not present (in first round) will add property with count 1
const countMovies = moviesWithTag.reduce((acc, movie) => ({...acc, [movie.tag] : (++acc[movie.tag] || 1)}), {});

console.log(countMovies)