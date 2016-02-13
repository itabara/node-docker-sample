=== Node on Docker with HAProxy ===
## Run the ubuntu docker image
docker run -i -t ubuntu /bin/bash

## clone image locally
git https://github.com/itabara/node-docker-sample.git

## build the app docker image
cd node-docker-sample/src
sudo docker build -t node-docker-sample .

## create logs dir into host
sudo mkdir /mnt/logs

docker run -d -v /mnt/logs/:/logs -p 80:80 node-docker-sample
docker ps
curl localhost:80

## inspect the container
docker ps
docker inspect <container_id>
curl http://ip:8081

## stop current instance
docker stop <container_id>

## start two instances of app
docker run -d -v /mnt/logs/:/logs -p 81:80 node-docker-sample
docker run -d -v /mnt/logs/:/logs -p 82:80 node-docker-sample
ps aux | grep node

## build haproxy image
cd haproxy
docker build -t haproxy .

## start the haproxy
docker run -d -v /mnt/logs/:/logs -p 80:80 haproxy

curl http://localhost


ifconfig /all -> get ip of localserver

##attach to the haproxy running image
docker exec -i -t <container_id> bash

vim /opt/haproxy-1.5.3/haproxy.cfg
##replace the 127.0.0.1 with server ip

supervisorctl
restart haproxy

##The TEST
curl http://localhost:80

sudo apt-get install apache2-utils
ab -n 10000 -c 10 http://localhost/
