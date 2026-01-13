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
