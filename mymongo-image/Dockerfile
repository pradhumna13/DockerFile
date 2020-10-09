# step 1 : Installing OS / getting a base image. to interact with the docker kernel
FROM alpine
#A minimal docker image ALpine linux with a size of 5 mb

# step 2 : Install a software
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/main' >> /etc/apk/repositories
# from where to look for the software
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/community' >> /etc/apk/repositories


#apt-get for ubuntu
#yum for fedora
#apk for alpine
RUN apk update
#skipping version will result in latest version : r0 (revision 0)
RUN apk add mongodb=3.4.4-r0

#to learn about caching
RUN apk add binutils

# step 2.5 : Configure the software
#makes you computer into a server - server provides service - configure it sp that it provides us service

#specific folder to be created for mongo db to work
VOLUME  ["/data/db"]
#workdir - anybody logs in and wants to work on this machine
WORKDIR /data
#since it is a service, it has to have a port
EXPOSE 27017

#For fun
RUN apk add isl

# step 3 : Set default commands
#command
#start the mongo daemon
CMD ["mongod"]