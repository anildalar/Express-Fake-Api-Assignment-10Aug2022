let testController = (req,res)=>{

    //Controller Logic Functions

    //Math.random()  0 - 0.99999
    if( Math.random() > 0.5 ?true:false){
        //True
        let order = {
            "order_id": 5477,
            "arrives_at_utc": 1660880998297,
            "paid_with": Math.random() < 0.5? "Cash":"Wallet",
            "total_paid": 13.99
        }


        res.status(200).json({
            orders:order
        });
    }else{
        //False
        res.status(503).send();
    }
    

}

exports.testController = testController;

