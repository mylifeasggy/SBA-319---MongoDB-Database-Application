import express from "express"
import Reservations from "../models/reservationsSchema.js"

const router = express.Router();


router.use(express.json());

router.get('/', async (req, res) => {
    try{
let reservations = await Reservations.find({});
    console.log(reservations)
    res.send(reservations);

    }catch (e) {
        res.status(500).json({message: e.message});
    }
});


try {

    router.post('/', (req, res) => {
        const { firstName, lastName, date, time, email, phone, people, } = req.body;
        const newReservation = new Reservations({
            firstName,
            lastName,
            date,
            time,
            email,
            phone,
            people,
        });

        const result = newReservation.save()
        console.log(newReservation)

        return res.status(201).send({ message: 'Reservartion created successfully', result })
    });

} catch (e) {
    console.log(e.message);
    res.status(400).json({message:e.message})
}

router.route("/:id")

.get(async (req,res)=> {

    let reservation = await Reservations.findById({id});
    if (reservation) {
        return {reservation}
    }else {
         return  res.status(404).send('Reservation not found')
    }

}).put(async (req, res)=> {
    let reservations = await Reservations.find({id});
    reservations = req.body;


}).delete (async(req,res) => { 
        let reservation = await Reservations.deleteOne({id})

        return res.status(204).send(`${reservation} deleted`)

}) 

export default router;