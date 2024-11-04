// // src/App.js
// import React from 'react';
// import FeedbackForm from './components/FeedbackForm';
// import FeedbackChart from './components/FeedbackFormChart';


// function App() {
//     return (
//         <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//             <FeedbackForm />
//             <FeedbackChart />
//         </div>
//     );
// }

// export default App;

// import React from 'react';
// import FeedbackForm from './components/FeedbackForm';
// import FeedbackChart from './components/FeedbackFChart';

// function App() {
//     return (
//         <div className="min-h-screen bg-gray-100 flex flex-col items-center">
//             <h1>Hello World</h1> {/* Simple test to ensure rendering */}
//             <FeedbackForm />
            
//         </div>
//     );
// }

// export default App;


// src/App.js
import React from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackChart from './components/FeedbackChart';

function App() {
    const feedbackData = [
        { category: 'Service', rating: 4.5 },
        { category: 'Quality', rating: 4.0 },
        { category: 'Delivery', rating: 4.8 },
        { category: 'Value', rating: 4.2 },
    ];


    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            <h1>Feedback System</h1>
            <FeedbackForm />
            <FeedbackChart feedbackData={feedbackData} />{/* Display the feedback chart below the form */}
        </div>
    );
}

export default App;
