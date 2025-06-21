import express from 'express'
import mongoose from 'mongoose'
import reservationsRoutes from "./routes/Reservations.js";
import reviewsRoute from "./routes/reviews.js"
import menuRoute from "./routes/menu.js"

import 'dotenv/config'

try {
    await mongoose.connect(process.env.MONGO_URI)

    console.log('Database Connected')
} catch (e) {
    console.log(e.message)
}


const app = express()
const port = process.env.PORT


//Routes 

app.use("/reservations", reservationsRoutes);
app.use("/reviews", reviewsRoute);
app.use('/menu', menuRoute);

app.get("/", (req, res) => {
    res.send('Hello')

});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something Broke!');
});


app.listen(port, () => {
    console.log(`Server listening on port:http://localhost:${port}`)
});