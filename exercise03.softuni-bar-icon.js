function barIcon(input) {
    let totalIncome = 0;

    let pattern = /%(?<name>[A-z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>\d+(\.\d+)?)\$/;

    let command = input.shift();

    while(command !== `end of shift`){
        let match = command.match(pattern);

        if(match){
            let { name, product, count, price } = match.groups;
            let totalPrice = Number(count) * Number(price);

            console.log(`${name}: ${product} - ${totalPrice.toFixed(2)}`);
            
            totalIncome += totalPrice;

        }

        command = input.shift();
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`);
    

}

barIcon(['%George%<Croissant>|2|10.3$',

'%Peter%<Gum>|1|1.3$',

'%Maria%<Cola>|1|2.4$',

'end of shift']);