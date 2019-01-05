#!/bin/bash

sendPostRequest(){
	requesttype="POST"
	endpoint=$1
	param=$2
	url="http://localhost"
	port="8090"
	curl -X $requesttype -H "Content-Type:application/json" "$url:$port$endpoint" -d "$param"
}

sendPostRequest "/pages" '{"name": "Home"}'
sendPostRequest "/sections" '{"name": "sectionname", "PageId":1}'
sendPostRequest "/links" '{"name": "link1","url":"iAmAUrl","img":"ImgIsMe","SectionId":1}'
