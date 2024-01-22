
const Product = require('../models/Expmodel');


exports.postProduct = async(req,res,next)=>{
    try{
        // console.log(req.body.exp);
        const Exp = req.body.exp;
        const Dis = req.body.dis;
        const Cat = req.body.cat;
        const data = await Product.create({
            exp:Exp,
            dis:Dis,
            cat:Cat
        });
        // console.log(data);
        res.status(201).json({key:"stored"})


    }catch(err){
        console.log("errr",err);
        res.status(500).json({
            error:err
        })

    }
}


exports.DeletePost = async(req, res, next )=>{
    try{
    ProdId = req.params.id;
    // console.log(ProdId);
   let DeleteItem = await Product.findByPk(ProdId)
  //  console.log(DeleteItem);
     Product.destroy({where : {id: ProdId}})
    res.status(200).json({deletedOrder: DeleteItem});
  } catch {
    console.log("Delete Error");
  }
  }
  

exports.GetAllData = async (req, res, next) => {
try{
    let product =   await Product.findAll()
    res.status(200).json({product: product})
} catch(err){
    res.status(500).json({Error : err});
}
}
  