const express = require('express');
const Contact = require('../models/Contact');
const { body, validationResult } = require('express-validator');

const router = express.Router();

// GET all contacts
router.get('/', async (req, res) => {
    const contacts = await Contact.find();
    res.json(contacts);
});

// POST new contact
router.post('/', [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email required'),
    body('phone').notEmpty().withMessage('Phone number required')
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, phone, address } = req.body;
    try {
        const newContact = new Contact({ name, email, phone, address });
        await newContact.save();
        res.status(201).json(newContact);
    } catch (err) {
        res.status(500).json({ error: 'Server Error' });
    }
});

// PUT update contact
router.put('/:id', async (req, res) => {
    const { name, email, phone, address } = req.body;
    try {
        const updatedContact = await Contact.findByIdAndUpdate(
            req.params.id,
            { name, email, phone, address },
            { new: true }
        );
        if (!updatedContact) return res.status(404).json({ error: 'Contact not found' });
        res.json(updatedContact);
    } catch (err) {
        res.status(500).json({ error: 'Server Error' });
    }
});

// DELETE contact
router.delete('/:id', async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);
        if (!contact) return res.status(404).json({ error: 'Contact not found' });
        res.json({ message: 'Contact deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Server Error' });
    }
});

// GET single contact
router.get('/:id', async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) return res.status(404).json({ error: 'Contact not found' });
        res.json(contact);
    } catch (err) {
        res.status(500).json({ error: 'Server Error' });
    }
});

module.exports = router;
