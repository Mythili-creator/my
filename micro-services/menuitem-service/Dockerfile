FROM openjdk:8-jdk-alpine
COPY target/menuitem-service-0.0.1-SNAPSHOT.jar menuitem.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom -Djava.net.preferIPv4Stack=true","-jar","/menuitem.jar"]