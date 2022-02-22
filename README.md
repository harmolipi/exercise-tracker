# Exercise Tracker

Created as part of [freeCodeCamp](https://www.freecodecamp.org) curriculum.

View on [Github](https://github.com/harmolipi/url-shortener-microservice).

## Functionality

This is the [Exercise Tracker](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/exercise-tracker) project, where I make an API that creates users, assigns exercises to those users, and allows those exercises to be queried.

## Thoughts

This was the most involved of these final projects. It involved a little bit of everything, and was the first where creating a database made sense. I created schemas for users and exercises, and got some practice in working with relations between them.

One piece that I don't think I did well was in working with a formatted date. Exercises have dates on them, and I created a `date_formatted` virtual, but when it came time to actually displaying the date, I had to `.map` over the exercise query results, changing the date to the formatted date. I think there must be a way to just include a virtual in the results of the query itself, but I couldn't figure it out.

All in all, this was good practice.

God bless.

-Niko Birbilis
