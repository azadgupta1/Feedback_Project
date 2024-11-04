import express from "express";
import cors from 'cors';
import feedbackRoutes from "./routes/feedback.js";

const PORT = 5000;
const app = express();

app.use(cors());
app.use(express.json());

// Mount the feedback routes
app.use('/api/feedback', feedbackRoutes);


app.get('/', (req, res) => {
    res.send("Hello There!!");
});

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});
