# Use the official MySQL image as the base image
FROM mysql:latest

# Set environment variables for MySQL
ENV MYSQL_DATABASE=chat_db
ENV MYSQL_ROOT_PASSWORD=root_password

# Optionally, define the default user and password (if needed)
ENV MYSQL_USER=chat_user
ENV MYSQL_PASSWORD=chat_password

# Add your schema SQL script to the docker-entrypoint-initdb.d directory
COPY schema.sql ./docker-entrypoint-initdb.d/
