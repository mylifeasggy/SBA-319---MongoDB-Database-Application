import express from 'express'
import mongoose from 'mongoose'
import reservationsRoutes from "./routes/Reservations.js";
import reviewsRoute from "./routes/reviews.js"
import menuRoute from "./routes/menu.js"

import 'dotenv/config'


await mongoose.connect(process.env.MONGO_URI)

console.log('Database Connected')

const app = express()
const port = process.env.PORT


//Routes 

app.use("/reservations", reservationsRoutes);
app.use("/reviews", reviewsRoute);
app.use('/menu', menuRoute);

app.get("/", (req, res) => {
    res.send('Hello')

});



app.listen(port, () => {
    console.log(`Server listening on port:http://localhost:${port}`)
});