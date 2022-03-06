## Run Docker

docker build -t beautato/server-app .
docker run -p 49160:8080 -d --name server-app beautato/server-app:latest
