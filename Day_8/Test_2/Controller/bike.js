let bike= {
    speed:'120mph',
    milage:60,
    color:'red',
    weight:'300Kg',
    displaySpeed:function(){
        return this.speed
    },
    displayMilage:function(){
        return this.milage
    },
    displaycolor:function(){
        return this.color
    },
    displayweight:function(){
        return this.weight
    }
}

module.exports={bike}