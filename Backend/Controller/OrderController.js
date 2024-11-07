import Orders from'../models/Order.model.js'
import {Items} from '../models/Items.model.js'



const CreateOrder =async(req,res)=>{
    const {user,product}=req.body
    //  console.log(product);
     // output  [
    //     { item: '672779bb6092e0490b11717e', quantity: 2 },
    //     { item: '672779bb6092e0490b11717e', quantity: 3 }
    //   ]
     

    if (!product || product.length ===0 ) {
        return res.status(400).json({
            message:'product List is empty'
        })
    }
     

    try {

        let  totalPrice=0;
        
        for (const  data of product) {
            // console.log(data);
            
            const {item,quantity }=data
            // console.log(data);
            

            const Product=await Items.findById(item)
            // console.log(Product);
            if (!Product) {
                return res.status(404).json({
                    message: `Product with ID ${item} not found`
                });
            }
            const Price=Product.itemPrice *quantity
            
            totalPrice+=Price
            // console.log(typeof totalPrice);
            
        }

        const newOrder =new Orders({
            user:user,
            product,
            totalPrice
        })

        const saveorder= await newOrder.save()
        res.status(200).json(
            {
                message:'Order Created success',
                data:saveorder
            }
        )
        

    } catch (error) {
        res.status(500).json({
            message:`Error :${error}`
        })
    }
} 

const GetAllOrders=async(req,res)=>{

    try {

        const getData=await Orders.find().populate('product.item').populate('user')
        if (!getData) {
            return res.status(404).json({
                message: `Order not found`
            });
        }

        console.log(getData);
        

        res.status(200).json(
            {
                message:'Success',
                data:getData
            }
        )
        
    } catch (error) {
        res.status(500).json({
            message:`Error :${error}`
        })
    }
}

const getOrderId=async(req,res)=>{
    const {id}=req.params

    if (!id || id===undefined) {
        res.status(400).json(
            {
                message:'id is Invalid'
            }
        )
    }

    try {
       
        const getDataId=await Orders.findById(id).populate('product.item').populate('user')
    console.log(getDataId);

    if (!getDataId) {
        res.status(500).json({
            message:'Server Error'
        })
    }

    res.status(200).json(
        {
            message:'Data by Id',
            data:getDataId
        }
    )

    } catch (error) {
        res.status(500).json({
            message:`Error :${error}`
        })
    }
    
}


export {CreateOrder,GetAllOrders,getOrderId}