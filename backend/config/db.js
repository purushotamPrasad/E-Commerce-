const mongoose = require("mongoose")

async function connectDB() {
    try {
        console.log("Mongo URI loaded")

        await mongoose.connect(process.env.MONGODB_URI)

        console.log("✅ MongoDB Connected Successfully")
    } catch (err) {
        console.error("❌ MongoDB connection failed:", err.message)
        process.exit(1)
    }
}

module.exports = connectDB

