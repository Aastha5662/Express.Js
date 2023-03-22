function home(req,res,next){

    res.send('this is home method of index controller')
    
    }
 
    const contact=(req,res,next)=>{

        res.send('this is contact method of index controller')
        res.send('this is contact method of index controller')
        res.send('this is contact method of index controller')


    }
module.exports={
 
    home:home,
    contact:contact

}
