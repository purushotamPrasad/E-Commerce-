# Full-Stack-E-Commerce-MERN-APP
Full Stack E-Commerce MERN APP

Backend .env file 

MONGODB_URI = 
TOKEN_SECRET_KEY = 
FRONTEND_URL

Frontend .env file

REACT_APP_CLOUD_NAME_CLOUDINARY = 


<!-- purushotam797032@gmail.com
admin password Puma@123 -->
pravindkumarsharma7050@gmail.com
Pravind7050

note one thing == always when you start and stop the instance ip will be change that way you allwayes in your project ip
in backen 
 backend/index.js
in fornten
    frontend/src/common/index.js

for https ke liye is fil ko change kare 
backend/controller/user/userSignIn.js 
     const tokenOption = {
                httpOnly: true,
                secure: false,      // HTTP
                sameSite: "Lax",
                maxAge: 8*60*60*1000 // 8 hours
            }
 
secure ko tru kar de jis se https secure login le



jenkins port confilct setup 
change in 2 file mendetry 
1- sudo vi /etc/default/jenkins
2- sudo vi /usr/lib/systemd/system/jenkins.service 
jenins add success  
email notification try to add
then enable 
  3  sudo systemctl daemon-reload
  4  sudo systemctl enable jenkins
  5  sudo systemctl start jenkins
  6  sudo systemctl status jenkins

sonarqube docker composer file is here 
ubuntu@ip-172-31-17-90:/opt/sonarqube$ ls
docker-compose.yml


for monitoring ke liye setup all thing in monitoring folder like docker-compose file and it set up graphana and promithius 
