let car= {
    speed:'300mph',
    milage:15,
    color:'green',
    weight:'3000kg',
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

module.exports={car}