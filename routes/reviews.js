import express from "express";
import Reviews from "../models/reviewsSchema.js"

const reviewsRouter = express.Router()


reviewsRouter.get('/', async (req, res) => {
    try {
        let reviews = await Reviews.find({})
        res.json(reviews)
        console.log(reviews)
    } catch (e) {

        console.log(e.message);
        res.status(500).json({ message: e.message });

    }


});



reviewsRouter.post('/', async (req, res) => {

    try {
        const { email, rating, comment } = req.body

        const newReview = new Reviews({
            email,
            rating,
            comment
        });

        let review = await newReview.save()

        res.status(201).json({ message: "Review created", review });

    } catch (e) {
        res.status(400).json({ message: e.message })
    }

});


reviewsRouter.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        let review = await Reviews.findByIdAndDelete(id);

        if (!review) {
            res.status(404).json({ message: 'Review no found' });
        }

        res.status(200).json({ message: 'Review delete ' });

    } catch (e) {
        console.log(e.message);
        res.status(400).json({ message: e.message });
    }

});

export default reviewsRouter;