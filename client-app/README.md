# ClientApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.2.

## Create Docker image
```
docker build -t <your username>/client-app .
```
## Run Docker
```
docker run -d -it -p 80:80/tcp --name client-app <your username>/client-app:latest
```