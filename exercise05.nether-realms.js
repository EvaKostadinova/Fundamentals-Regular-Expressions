function netherRealms(str) {
    let healthPattern = /[^0-9+\-*\/.]/g;
    let damagePattern = /[+-]?\d+(\.\d+)?/g;
    let factorSignPattern = /[*\/]/g;

    let demons = str.split(/\s*,\s*/);

    let demonsStats = [];

    for(let demon of demons){
        let healthMatches = demon.match(healthPattern);
        let health = 0;
        
    if(healthMatches){
        for(let match of healthMatches){
            let ascii = match.charCodeAt();
            health += ascii;
        }
    }

        let damageMatches = demon.match(damagePattern);
        let damage = 0;
    
    if(damageMatches){
        for(let match of damageMatches){
            match = Number(match);
            damage += match;
        }
    }

        let factorSignMatches = demon.match(factorSignPattern);

    if(factorSignMatches){
        for(let match of factorSignMatches){
            if(match === '*'){
                damage *= 2;
            } else {
                damage /= 2;
            }
        }
    }

        demonsStats.push({ demon, health, damage });
    }

    demonsStats.sort((a, b) => a.demon.localeCompare(b.demon));

    for(let demonObj of demonsStats){
        console.log(`${demonObj.demon} - ${demonObj.health} health, ${demonObj.damage.toFixed(2)} damage`);
        
    }

} 

netherRealms(`M3ph-0.5s-0.5t0.0**`);