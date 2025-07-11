export const fadInUp ={
    initial:{
        y:20,
        opacity:0
    },
    animate:{
        y:0,
         opacity:1

    }
}

export const fadIn ={
    initial:{
        opacity:0
    },
    animate:{
         opacity:1

    }
}

export const transition ={
    default:{
        duration:0.5
    },
    delayed:{
        duration:0.5,
        delay:0.3
    },
    slow:{
        duration:0.8
    }
}

export const nameAnimation ={
    initial:{
        x:-20,
        opacity:0,
        rotate:-10

    },
    animate:{
        x:0,
        opacity:1,
        rotate:-10,
        y:[-3, 3, -3]

    },
    transition:{
        x:{duration:0.5, delay:0.3},
        y:{duration:2, repeat:Infinity, ease:'easeInOut'}
    }
}