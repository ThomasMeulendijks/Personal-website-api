requesttype=$1
endpoint=$2
param=$3
url="http://localhost"
port="3000"

curl -i -X $requesttype -H "Accept:application/json" "$url:$port$endpoint" -d $param


