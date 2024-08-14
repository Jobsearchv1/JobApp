const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.js');

require('dotenv').config();


// Register a new user
exports.registerUser = async (req, res) => {
    const {
        firstName, lastName, email, password, phone, mobile, address,
        github, twitter, instagram, facebook, job_title, location, website,
        experience, education, skills
    } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            role: 'user',
            phone,
            mobile,
            address,
            github,
            twitter,
            instagram,
            facebook,
            job_title,
            location,
            website,
            experience,
            education,
            skills
        });

        res.status(201).json({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone,
            mobile: user.mobile,
            address: user.address,
            github: user.github,
            twitter: user.twitter,
            instagram: user.instagram,
            facebook: user.facebook,
            job_title: user.job_title,
            location: user.location,
            website: user.website,
            experience: user.experience,
            education: user.education,
            skills: user.skills,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Authenticate a user
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(404).json({ error: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({
            token,
            user: {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phone: user.phone,
                mobile: user.mobile,
                address: user.address,
                github: user.github,
                twitter: user.twitter,
                instagram: user.instagram,
                facebook: user.facebook,
                job_title: user.job_title,
                location: user.location,
                website: user.website,
                experience: user.experience,
                education: user.education,
                skills: user.skills
            }
        });
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get user by ID
exports.getUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({ error: 'User not found' });

        res.status(200).json({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone,
            mobile: user.mobile,
            address: user.address,
            github: user.github,
            twitter: user.twitter,
            instagram: user.instagram,
            facebook: user.facebook,
            job_title: user.job_title,
            location: user.location,
            website: user.website,
            experience: user.experience,
            education: user.education,
            skills: user.skills,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        });
    } catch (error) {
        console.error('Error retrieving user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Update user by ID
exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const {
        firstName, lastName, email, phone, mobile, address,
        github, twitter, instagram, facebook, job_title, location, website,
        experience, education, skills
    } = req.body;

    try {
        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({ error: 'User not found' });

        // Update the user with new information
        await user.update({
            firstName,
            lastName,
            email,
            phone,
            mobile,
            address,
            github,
            twitter,
            instagram,
            facebook,
            job_title,
            location,
            website,
            experience,
            education,
            skills
        });

        res.status(200).json({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone,
            mobile: user.mobile,
            address: user.address,
            github: user.github,
            twitter: user.twitter,
            instagram: user.instagram,
            facebook: user.facebook,
            job_title: user.job_title,
            location: user.location,
            website: user.website,
            experience: user.experience,
            education: user.education,
            skills: user.skills,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

/// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll(); // Fetch all users from the database
        res.status(200).json(users); // Return the users as a JSON response
    } catch (error) {
        console.error('Error retrieving users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Delete user by ID
exports.deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({ error: 'User not found' });

        await user.destroy();

        res.status(204).json(); // No content
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};