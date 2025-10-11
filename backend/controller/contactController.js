const Contacts = require('../models/Contact')

async function contactUs(req, res) {
    try {
        const { fullName, email, message } = req.body;

        if (!fullName || !email || !message) {
            return res.status(400).json({message : "All fields are required"})
        }

        const newContact = new Contacts({
            fullName,
            email,
            message
        })

        await newContact.save()
        return res.status(200).json({message : "Message send successfully"})
    } catch (error) {
        console.error(error.message)
        res.status(500).json({message : "Server error", error: error.message})
    }
}

module.exports = { contactUs }