// Cat class without using constructor

class Cat {    
        color = 'black'          // creating properties
        fur = 'soft'
        eyes = 2
                                    //    creating methods
    eat(){
        console.log('likes to eat fish')
    }
    grooming(){
        console.log('likes grooming')
    }
    talk(){
        console.log('says meow')
    }
}
                                //  creating instances of cat class
const simba = new Cat
const pumpkin = new Cat
console.log(simba)              //  log both instances to see their properties
console.log(pumpkin)
 simba.eat()                    //  invoke each method from both instances
 simba.grooming()
 simba.talk()
 pumpkin.eat()
 pumpkin.grooming()
 pumpkin.talk()


 //Pirate class using constructor

 class Pirates {    
       constructor(name, age, weapon ){
        this.name = name
        this.age = age
        this.weapon = weapon
     }
    captain(){
        console.log('he hold ultimate command of merchant vessel')
    }
    cook(){
        console.log('he have knowledge of nutritional values and knows how to cook')
    }
    surgeon(){
        console.log('he deals with sick and wounded people')
    }
   
 } 

 const pirate1 = new Pirates('KT', 20, 'gun')
 const pirate2 = new Pirates('CBN', 40, 'knife')
 const pirate3 = new Pirates('KCR', 50, 'sword')
 const pirate4 = new Pirates('NTR', 45, 'sword')
 const pirate5 = new Pirates('MB', 50, 'knife')
 const pirate6 = new Pirates('PK', 55, 'gun')
 const blackPearl = [pirate1,pirate2,pirate3]
 console.log('blackPearl pirates :')
 blackPearl.forEach(pirate => {
 console.log(pirate) 
});

const jollyRoger = [pirate4,pirate5,pirate6]
console.log('jollyRoger pirates:')
jollyRoger.forEach(pirates => {
    console.log(pirates)
});


 // Using Factory
 
//  class Ships {
//     constructor(shipType){
//         this.shipType = shipType
//         this.pirates = []
//     }

//     addPirates(name, age, weapon){
//         let pirate = new Pirates(name, age, weapon)
//         this.pirates.push(pirate)

//     }
//     piratesList(){
//         this.pirates.forEach(pirate => {
//             console.log(pirate)
//         });
//     }
    
//  }
//  const blackPearl = new Ships ('blackpearl')
//  const jollyRoger = new Ships ('jollyRoger') 
//  blackPearl.addPirates('KT', 20, 'gun')
//  blackPearl.addPirates('CBN', 40, 'knife')
//  blackPearl.addPirates('KCR', 50, 'sword')
//  blackPearl.piratesList()
//  jollyRoger.addPirates('NTR', 45, 'sword')
//  jollyRoger.addPirates('MB', 50, 'knife')
//  jollyRoger.addPirates('PK', 55, 'gun')
//  jollyRoger.piratesList()



 
