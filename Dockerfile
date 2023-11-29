FROM ameenulislam/centos-base:latest

#LABEL "Ameen ul islam"
MAINTAINER ameen.ulislam786@gmail.com

RUN yum install nginx -y

COPY index.html /usr/share/nginx/html

WORKDIR /usr/share/nginx/html

CMD ["nginx" , "-g" , "daemon off;"]
