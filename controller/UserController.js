class UserController{
constructor(){

// super()

}

create(req,res,next){
res.send('user controller create')


}
show(req,res,next){

    res.send('user controller show')
}

}
module.exports=UserController;