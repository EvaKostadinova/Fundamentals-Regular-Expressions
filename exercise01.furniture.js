function furniture(input) {
    let pattern = />>(?<name>[A-Z][A-Za-z]*)<<(?<price>\d+(\.\d+)?)!(?<qty>\d+)/;
    let furniture = [];
    let totalPrice = 0;

    let command = input.shift();

    while(command !== 'Purchase'){
        let match = command.match(pattern);

        if(match){
            let { name, price, qty } = match.groups;
            furniture.push(name);
            totalPrice += Number(price) * Number(qty);
        }

        command = input.shift();
    }

    console.log(`Bought furniture:`);
    
    if(furniture.length > 0){
        furniture.forEach(f => console.log(f));
    }

    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);


}

furniture(['>>Sofa<<312.23!3',

'>>TV<<300!5',

'>Invalid<<!5',

'Purchase']);