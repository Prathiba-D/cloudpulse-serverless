<h3>🚀 CloudPulse Serverless</h3>
<p>⚡ A real-time, event-driven serverless web application built on AWS demonstrating scalable cloud architecture with automated backend workflows.</p>
<h3>📌 Overview</h3>
<p>CloudPulse Serverless is a fully serverless web application designed to demonstrate real-world cloud architecture using AWS services.It simulates a real-time user interaction system where form submissions trigger backend workflows including data persistence and email notifications.This project highlights event-driven architecture, backend automation, and cloud-native design principles.</p>
<h3>🧠 Architecture Philosophy</h3>
The name CloudPulse Serverless represents:<br>
CloudPulse → Real-time flow of data and system responsiveness<br>
Serverless → Fully managed, auto-scaling AWS backend with no server management<br>
It reflects a system that reacts instantly to user input using event-driven AWS services.<br>
<h3>🏗️ Architecture Diagram (Flow)</h3>
<h3>⚙️ Tech Stack</h3>

<h4>☁️ AWS Services</h4>
<ul>
  <li>Amazon S3 (Static Hosting)</li>
  <li>Amazon CloudFront (CDN)</li>
  <li>API Gateway (REST APIs)</li>
  <li>AWS Lambda (Serverless Compute)</li>
  <li>Amazon DynamoDB (NoSQL Database)</li>
  <li>Amazon SES (Email Notifications)</li>
  <li>IAM (Access Control & Security)</li>
</ul>

<h4>🌐 Frontend</h4>
<ul>
  <li>HTML5</li>
  <li>CSS3</li>
  <li>Vanilla JavaScript</li>
</ul>

<h3>🚀 Features</h3>
🔹 Serverless form submission workflow <br>
🔹 Real-time data storage in DynamoDB <br>
🔹 Automated email notifications via SES <br>
🔹 REST API integration using API Gateway <br>
🔹 Secure IAM-based service-to-service communication <br>
🔹 CDN-backed static frontend for global performance <br>

<h3>🔄 Workflow</h3>

<h4>1️⃣ User Interaction Flow</h4>
<ol>
  <li>User accesses the website via CloudFront</li>
  <li>Static frontend is served from S3</li>
  <li>User submits form (name & email)</li>
  <li>API Gateway receives request</li>
  <li>Lambda processes data</li>
  <li>Data is stored in DynamoDB</li>
  <li>Email notification is sent via SES</li>
</ol>

<h4>2️⃣ Admin Interaction Flow</h4>
<ol>
  <li>Admin accesses a separate dashboard page (leads.html)</li>
  <li>Frontend calls GET API via API Gateway</li>
  <li>Lambda retrieves data from DynamoDB</li>
  <li>User submissions are displayed in a structured table</li>
</ol>

<h3>✨ Key Features</h3>
<ul>
  <li>Serverless form submission workflow</li>
  <li>Real-time backend processing using AWS Lambda</li>
  <li>Persistent storage using DynamoDB</li>
  <li>Automated email notifications via SES</li>
  <li>REST API integration via API Gateway</li>
  <li>CDN-backed static frontend for performance and scalability</li>
</ul>

<h3>🧠 Key Learnings</h3>

<ul>
  <li>Designing serverless architectures using AWS services</li>
  <li>Event-driven system design patterns</li>
  <li>API Gateway and Lambda integration</li>
  <li>NoSQL data modeling with DynamoDB</li>
  <li>IAM role-based security design</li>
  <li>End-to-end cloud application deployment</li>
</ul>

<h3>📊 Real-World Relevance</h3>
<p>This architecture closely mirrors production use cases such as:</p>
<ul>
  <li>Lead capture systems</li>
  <li>Marketing landing pages</li>
  <li>Event-driven notification systems</li>
</ul>
