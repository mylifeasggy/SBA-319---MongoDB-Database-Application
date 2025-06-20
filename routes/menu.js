import express from "express"
import Menu from "../models/menuSchema.js"

const menuRoute = express.Router();



menuRoute.get('/', async (req, res) => {
    const menus = await Menu.find({})

    res.json(menus);

});


try {

    menuRoute.post('/', (req, res) => {

        const { plate_name, plate_description, serving_size, price, vegan } = req.body;

        const newPlate = {
            plate_name,
            plate_description,
            serving_size,
            price,
            vegan
        }
        const result = newPlate.save()

        return res.status(201).json({ message: 'New plate added successfully', result });

    });

} catch {
    console.log(e.message);
    res.status(400).json({ message: e.message })

}


menuRoute.route('/:id')

    .put('/:id', async (req, res) => {

        const { id } = req.params;
        const { price } = req.params.price
        let plate = await Menu.findbyIdAndUpdate(id, { price });
        plate.save()
        res.status(200).json({ message: 'Plate updated', plate });

    }).delete('/:id', async (req, res) => {

        const { id } = req.params;
        let plate = await Menu.findbyIdAndDelete(id)
        return res.status(204).json({ message: 'Plate deleted', plate });
        
    });

export default menuRoute;