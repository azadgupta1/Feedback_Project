
import React, { useState } from 'react';

const FeedbackForm = () => {
    const [rating, setRating] = useState('');
    const [comment, setComment] = useState('');
    const [feedbackType, setFeedbackType] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const feedbackData = {
            rating: parseInt(rating, 10),
            comment,
            feedbackType,
            name,
            email,
        };

        try {
            const response = await fetch('http://localhost:5000/api/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(feedbackData),
            });

            const data = await response.json();
            alert(data.message); // Show success message
        } catch (error) {
            console.error('Error submitting feedback:', error);
            alert('Failed to submit feedback');
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Feedback Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="rating">Rating (1-5):</label>
                    <input
                        type="number"
                        id="rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        className="border border-gray-300 rounded-md w-full p-2"
                        min="1"
                        max="5"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="comment">Comment:</label>
                    <textarea
                        id="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="border border-gray-300 rounded-md w-full p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="feedbackType">Feedback Type:</label>
                    <select
                        id="feedbackType"
                        value={feedbackType}
                        onChange={(e) => setFeedbackType(e.target.value)}
                        className="border border-gray-300 rounded-md w-full p-2"
                        required
                    >
                        <option value="" disabled>Select feedback type</option>
                        <option value="Website Experience">Website Experience</option>
                        <option value="Product Feedback">Product Feedback</option>
                        <option value="Event Review">Event Review</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border border-gray-300 rounded-md w-full p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-gray-300 rounded-md w-full p-2"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white rounded-md w-full p-2">Submit</button>
            </form>
        </div>
    );
};

export default FeedbackForm;
