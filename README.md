#Dependency's

* Restify
* Sequelize
* Sequelize-cli
* sqlite

## Why these Libraries

### Rest service
I made the decision to use Restify instead of Express (the two most supported
		frameworks to build a rest api) after long consideration and testing of both
frameworks.
#### Express
I noticed while using Express there was a lot of example projects and
documentation, while these example projects did work I found them to be bloated
with code for different things than serving a rest api. I found out that express
was so called a multi functional framework that happened to support making a rest api
while being capable and requiring dependency's (of witch some are where out of date
		and had seurity issues) of doing a lot more. The fact that Express is not soly
intended for making a rest api verry litte information could be found after the basic
"how to get it working".

#### Restify
Restify's documentation is short but to the point, getting it to work was as
more easy than with express and required less set up, yet it looked a little
messy (all code was in one file), and there was no documentation on how to
clean it up. I gave up after this and started working with express, yet I came
back with new knowledge about node.js and with this the knowledge to clean up my
code, since the reason there was no documentation on making a maintainable Restify
project was since it allowed for default node.js structure's (unlike express).

### ORM

#### Sequelize

This choice was easy, it was the only well maintened and uptodate ORM framework

### Database

#### Sqlite

I picked sqlite since I am familiar with sql and sqlite offers the easy and
server less use of a database, this was the most easy to use and robust option.
