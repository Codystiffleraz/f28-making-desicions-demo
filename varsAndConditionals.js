let snowAttack = 25
let lanAttack = 35

if (snowAttack < lanAttack){
    console.log('Lancaster has a better attack than Snow')
}   
else if (snowAttack > lanAttack){
    console.log('Snow has a better attack than Lancaster')
}
else{ 
    console.log('Snow and Lancaster have the same attack')
}

let snowHealth = 100
let snowDefense = 0

if (snowHealth <= lanAttack ){
    console.log('Snow has been slain')
}
else{
    snowHealth -= lanAttack
    console.log(`Snows health is now at ${snowHealth}`)
}
snowDefense += 30

for(let i = 0; i < 5; i++){
    snowHealth -= (lanAttack - snowDefense)

    if (snowHealth <= 0){
        console.log('Snow was slain')
    }
        else {
            console.log(`Snows health is now at ${snowHealth}`)
        }
    }

while(snowHealth > 0){
    snowHealth -= (lanAttack - snowDefense)
    console.log(`Snows health is now at ${snowHealth}`)
    if(snowHealth <= 0){
        console.log('Snow was slain')
    }
}