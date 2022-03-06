## Create Docker image
```
docker build -t <your username>/server-app .
```
## Run Docker
```
docker run -p 49160:8080 -d --name server-app <your username>/server-app:latest
```
