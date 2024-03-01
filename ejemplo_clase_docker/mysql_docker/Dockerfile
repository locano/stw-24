# Get the latest mysql image
FROM mysql:latest

#Set environment variables for MySQL
ENV MYSQL_DATABASE=blog_db
ENV MYSQL_ROOT_PASSWORD=root_password

# User and password for mysql
ENV MYSQL_USER=blog_user
ENV MYSQL_PASSWORD=blog_password

# Copy the database schema to the image
COPY schema.sql ./docker-entrypoint-initdb.d/
