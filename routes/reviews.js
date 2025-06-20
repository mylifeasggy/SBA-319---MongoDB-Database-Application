import express from "express";
import Reviews from "../models/reviewsSchema.js"

const reviewsRouter = express.Router()


reviewsRouter.get('/', async (req, res)=>{
    let reviews = await Reviews.find({})
    res.json(reviews)
    console.log(reviews)
})


try{
    reviewsRouter.post('/', (req, res)=> {
        const {email, rating, comment} = req.body

        const newReview = new Reviews ({
            email,
            rating,
            comment 
        });

        const result = newReview.save()

        res.status(200).json({message: "Review created", result});
    });

}catch (e){
    res.status(400).json({message:e.message})

}

try {
    reviewsRouter.delete('/:id', async (req,res)=> {
     
        const review = await Reviews.findOneAndDelete({id})

        if(!review) {
            res.status(204).json({message: 'Content no found'})
        }

        res.status(200).json({message:'Review delete '})
        return review

    });

} catch (e) {
    console.log(e.message)
    throw e
}

export default reviewsRouter