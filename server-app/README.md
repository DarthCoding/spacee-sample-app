## Create Docker image

docker build -t beautato/server-app .
## Run Docker

docker run -p 49160:8080 -d --name server-app beautato/server-app:latest
