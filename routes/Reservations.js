import express from "express"
import Reservations from "../models/reservationsSchema.js"

const router = express.Router();


router.use(express.json());

router.get('/', async (req, res) => {
    try {
        let reservations = await Reservations.find({});
        console.log(reservations)
        res.send(reservations);

    } catch (e) {
        res.status(500).json({ message: e.message });
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

        return res.status(201).json({ message: 'Reservartion created successfully', result })
    });

} catch (e) {
    console.log(e.message);
    res.status(400).json({ message: e.message })
}

router.route("/:id")

    .get(async (req, res) => {
        const {id}= req.params

        let reservation = await Reservations.findById({ id });
        if (reservation) {
            return { reservation }
        } else {
            return res.status(404).send('Reservation not found')
        }

    }).put(async (req, res) => {

        const { date, phone, email } = req.body
        let reservation = await Reservations.findByIdAndUpdate({ id }, { date,phone, email });
        reservation.save()
        res.status(200).json({ message: 'Reservation updated', reservation });
       


    }).delete(async (req, res) => {
        const { id } = req.params
        let reservation = await Reservations.findByIdAndDelete(id);

        return res.status(204).json(`${reservation} deleted`);

    })

export default router;