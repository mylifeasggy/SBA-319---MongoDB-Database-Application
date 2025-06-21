import express from "express"
import Reservations from "../models/reservationsSchema.js"

const router = express.Router();


router.use(express.json());

router.get('/', async (req, res) => {
    try {
        let reservations = await Reservations.find({});
        console.log(reservations)
        res.status(200).json(reservations);

    } catch (e) {
        res.status(500).json({ message: e.message });
    }
});




router.post('/', async (req, res) => {
    try {

        const { firstName, lastName, date, time, email, phone, people, } = req.body;

        let newReservation = new Reservations({
            firstName,
            lastName,
            date,
            time,
            email,
            phone,
            people,
        });

        await newReservation.save()
        console.log(newReservation)

        return res.status(201).json({ message: 'Reservartion created successfully', newReservation })


    } catch (e) {
        console.log(e.message);
        res.status(400).json({ message: e.message })
    }

});

router.route("/:id")

    .get(async (req, res) => {
        try {
            let reservation = await Reservations.findById(req.params.id);
            if (!reservation) {
                return res.status(404).json('Reservation not found')

            }
            res.status(200).json(reservation)
        } catch (e) {
            res.status(400).json({ message: e.message });
        }

    }).put(async (req, res) => {

        try {
            const { id } = req.params;
            const { date, phone, email } = req.body //ASK ABOUT THIS...
            let reservation = await Reservations.findByIdAndUpdate(id, { date, phone, email });

            if (!reservation) {
                return res.status(404).json({ message: 'Reservation not found' });


            }

            res.status(200).json({ message: 'Reservation updated', reservation });
        } catch (e) {
            res.status(400).json({ message: e.message });
        }


    }).delete(async (req, res) => {
        try {
            const { id } = req.params
            let reservation = await Reservations.findByIdAndDelete(id);

            if (!reservation) {

                return res.status(404).json({ message: 'Reservation not found' });

            }

            res.status(200).json({ message: 'Reservation deleted successfully', reservation });

        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    })

export default router;