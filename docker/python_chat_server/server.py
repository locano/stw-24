from http.server import BaseHTTPRequestHandler, HTTPServer
import json
import mysql.connector

db_config = {
    'host': 'mysql',
    'user': 'root',
    'password': 'secret',
    'database': 'chat'
}

class ChatServer(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/':
            html = """
            <!DOCTYPE html>
            <html lang="en">
            <body>
                <h1>Bienvenidos a la api UWU-GT</h1>
            </body>
            </html>
            """

            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()

            self.wfile.write(html.encode('utf-8'))

        elif self.path == '/messages':
            conn = mysql.connector.connect(**db_config)
            cursor = conn.cursor(dictionary=True)
            cursor.execute('SELECT * FROM messages ORDER BY created_at DESC')
            messages = cursor.fetchall()
            conn.close()

            messages_json = json.dumps(messages, indent=4, default=str)

            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()

            self.wfile.write(messages_json.encode('utf-8'))

    def do_POST(self):
        if self.path == '/messages':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            body = json.loads(post_data.decode('utf-8'))

            username = body['username']
            message = body['message']
            
            conn = mysql.connector.connect(**db_config)
            cursor = conn.cursor()
            cursor.execute('INSERT INTO messages (username, message, created_at) VALUES (%s, %s, NOW())', (username, message))
            conn.commit()
            conn.close()

            body = {
                "username": username,
                "message": message
            }
            body_json = json.dumps(body)

            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()

            self.wfile.write(body_json.encode('utf-8'))

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

server_address = '0.0.0.0'
server_port = 3000
httpd = HTTPServer((server_address, server_port), ChatServer)
print(f'Server running at http://{server_address}:{server_port}')
httpd.serve_forever()
