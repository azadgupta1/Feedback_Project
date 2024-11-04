// src/controllers/feedbackController.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createFeedback = async (req, res) => {
    try {
        const { rating, comment, feedbackType, name, email } = req.body;

        // Create new feedback entry
        const feedback = await prisma.feedback.create({
            data: {
                rating: parseInt(rating, 10),
                comment,
                feedbackType,
                name,
                email,
            },
        });

        res.status(201).json({ message: 'Feedback submitted successfully', feedback });
    } catch (error) {
        console.error('Error creating feedback:', error);
        res.status(500).json({ error: 'An error occurred while submitting feedback' });
    }
};

export const getFeedback = async (req, res) => {
    try {
        const feedback = await prisma.feedback.findMany({
            orderBy: {
                createdAt: 'desc' // Order by most recent
            }
        });
        res.status(200).json(feedback);
    } catch (error) {
        console.error('Error fetching feedback:', error);
        res.status(500).json({ error: 'An error occurred while fetching feedback' });
    }
};