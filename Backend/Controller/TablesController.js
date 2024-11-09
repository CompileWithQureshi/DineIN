import { Tables } from "../models/Table.model.js";

const CreateTable = async (req, res) => {
    const { tableNumber, status } = req.body;

    if ( !tableNumber || status === undefined) {
        return res.status(400).json({
            message: 'Input field is empty'
        });
    }

    try {
        const existing = await Tables.findOne({ tableNumber });
    // console.log(typeof existing);

        if (existing) {
            return res.status(400).json({
                message: 'Table already exists'
            });
        }

        const newTable = new Tables({
            tableNumber,
            status,
            qrCodeData: tableNumber
        });

        const savedTable = await newTable.save();
        return res.status(201).json({
            message: 'Table created',
            data: savedTable
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            error: error.message
        });
    }
};


const UpdateTable=async(req,res)=>{
    const {tableNumber,userName,status}=req.body;


    if (!tableNumber || !userName ) {
        return res.status(400).json({
            message: 'Input is empty or invalid'
        });
    }
console.log("Received input:", req.body); 
   try {
        const UpdateTable=await Tables.findOneAndUpdate(
            {tableNumber},
            {
                userName,
                status:false,
            },
            { 
                new: true, // Return the updated document
                runValidators: true // Run schema validators on update
            }
        )

        if (!UpdateTable) {
            return res.status(404).json({
                message:'Table not found '
            })
        }

        res.status(200).json({
            message:'Table updated successfully',
            data:UpdateTable
        })

   } catch (error) {
    res.status(500).json({
        message:`Error:${error}`
    })
    
   }
}



const getAllTables = async (req, res) => {
    const {id}=req.query
    let query={}
    try {
        if (id) {
            query._id = id; // Use `_id` if querying by order ID
        }
        const getAll = await Tables.find(query); // Use find() instead of findAll()

        if (!getAll || getAll.length === 0) {
            return res.status(404).json({
                message: 'No tables found',
            });
        }

        res.status(200).json(getAll);
    } catch (error) {
        res.status(500).json({
            message: `Server error: ${error.message}`,
        });
    }
};


export { CreateTable ,getAllTables,UpdateTable};



