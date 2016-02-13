# Node on Docker with HAProxy

Run the ubuntu docker image

```javascript
docker run -i -t ubuntu /bin/bash
```

Clone image locally

```javascript
git https://github.com/itabara/node-docker-sample.git
```

Build the app docker image
```javascript
cd node-docker-sample/src
sudo docker build -t node-docker-sample .
```

Create logs dir into host
```javascript
sudo mkdir /mnt/logs
```
```javascript
docker run -d -v /mnt/logs/:/logs -p 80:80 node-docker-sample
docker ps
```
Quick test
```javascript
curl localhost:80
```

Inspect the container
```javascript
docker ps
docker inspect <container_id>
curl http://ip:8081
```

Stop current instance
```javascript
docker stop <container_id>
```

Scale out: start two instances of app
```javascript
docker run -d -v /mnt/logs/:/logs -p 81:80 node-docker-sample
docker run -d -v /mnt/logs/:/logs -p 82:80 node-docker-sample
ps aux | grep node
```

Build haproxy image
```javascript
cd haproxy
docker build -t haproxy .
```

Start the haproxy
```javascript
docker run -d -v /mnt/logs/:/logs -p 80:80 haproxy
```

```javascript
curl http://localhost
```

```javascript
ifconfig /all -> get ip of localserver
```

Attach to the haproxy running image
```javascript
docker exec -i -t <container_id> bash
```

```javascript
vim /opt/haproxy-1.5.3/haproxy.cfg
##replace the 127.0.0.1 with server ip
```

Supervisorctl

```javascript
supervisorctl
restart haproxy
```

# The test
```javascript
curl http://localhost:80
```

Let's stress our app:
```javascript
sudo apt-get install apache2-utils
ab -n 10000 -c 10 http://localhost/
```
