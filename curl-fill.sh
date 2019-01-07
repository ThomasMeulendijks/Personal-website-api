#!/bin/bash

sendPostRequest(){
	requesttype="POST"
	endpoint=$1
	param=$2
	link="http://localhost"
	port="8090"
	curl -X $requesttype -H "Content-Type:application/json" "$link:$port$endpoint" -d "$param"
}

sendPostRequest "/pages" '{"name": "Home"}'
sendPostRequest "/categories" '{"name": "Cat1", "PageId":1}'
sendPostRequest "/categories" '{"name": "Cat2", "PageId":1}'
sendPostRequest "/items" '{"name": "Item1","link":"iAmAlink","img":"ImgIsMe","CategoryId":1}'
sendPostRequest "/items" '{"name": "Item2","link":"iAmAlink","img":"ImgIsMe","CategoryId":1}'
sendPostRequest "/items" '{"name": "Item3","link":"iAmAlink","img":"ImgIsMe","CategoryId":2}'
