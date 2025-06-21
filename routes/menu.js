import express from "express"
import Menu from "../models/menuSchema.js"

const menuRoute = express.Router();



menuRoute.get('/', async (req, res) => {
    const menus = await Menu.find({})

    res.json(menus);

});




menuRoute.post('/', async (req, res) => {
    try {
        const { plate_name, plate_description, serving_size, price, vegan } = req.body;

        const newPlate = new Menu({
            plate_name,
            plate_description,
            serving_size,
            price,
            vegan
        });

        let plate = await newPlate.save()

        return res.status(201).json({ message: 'New plate added successfully', plate });

    } catch(e) {
        console.log(e.message);
        res.status(400).json({ message: e.message })

    }

});



menuRoute.route('/:id')

    .put(async (req, res) => {

        const { id } = req.params;
        const { price } = req.body;

        let plate = await Menu.findByIdAndUpdate(id, {price});

        if(!plate){
            return res.status(404).json({message:'Plate not found'})

        }
            res.status(200).json({ message: 'Plate updated', plate });

    }).delete( async (req, res) => {
try{ 
        const { id } = req.params;

        let plate = await Menu.findByIdAndDelete(id)

        if (!plate) {

            return res.status(404).json({message:'Plate not found'})
        }
        res.status(200).json({ message: 'Plate deleted', plate });
    }catch(e) {
        res.status(400).json({message:e.message})
    }

    });

export default menuRoute;