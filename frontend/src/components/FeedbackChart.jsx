import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const FeedbackChart = ({ feedbackData }) => {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);

    useEffect(() => {
        // Cleanup the previous chart instance if it exists
        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }

        // Get the canvas context
        const ctx = chartRef.current.getContext('2d');

        // Define chart options
        const options = {
            responsive: true,
            maintainAspectRatio: false, // Allow flexibility in height
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Categories',
                    },
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Ratings',
                    },
                },
            },
        };

        // Create a new chart instance
        chartInstanceRef.current = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: feedbackData.map(item => item.category),
                datasets: [{
                    label: 'Feedback Ratings',
                    data: feedbackData.map(item => item.rating),
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                }],
            },
            options: options, // Use the defined options
        });

        // Cleanup function to destroy the chart on unmount
        return () => {
            chartInstanceRef.current.destroy();
        };
    }, [feedbackData]);

    return (
        <div style={{ width: '100%', height: '400px' }}> {/* Set fixed height */}
            <canvas ref={chartRef} style={{ width: '100%', height: '100%' }} /> {/* Use full width and height */}
        </div>
    );
};

export default FeedbackChart;
