require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');



const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());



// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Define User Schema and Model
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: Number, required: true },
});

const User = mongoose.model('User', userSchema);

// Routes
// Test route
app.get('/', (req, res) => {
    res.send('Server is running...');
});

// Signup route
app.post('/signup', async (req, res) => {
    try {
        const { name, mobile, gender, age } = req.body;

        // Validate input
        if (!name || !mobile || !gender || !age) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        // Check if mobile number already exists
        const existingUser = await User.findOne({ mobile });
        if (existingUser) {
            return res.status(400).json({ message: 'Mobile number already exists.' });
        }

        // Create and save the new user
        const newUser = new User({ name, mobile, gender, age });
        await newUser.save();

        res.status(201).json({ message: 'User signed up successfully!' });
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));