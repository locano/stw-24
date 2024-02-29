-- Create the database
CREATE DATABASE IF NOT EXISTS chat_db;
USE chat_db;

-- Create a user and grant privileges
CREATE USER IF NOT EXISTS 'chat_user'@'%' IDENTIFIED BY 'chat_password';
GRANT ALL PRIVILEGES ON chat_db.* TO 'chat_user'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;

CREATE TABLE IF NOT EXISTS chats (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    content TEXT NOT NULL
);