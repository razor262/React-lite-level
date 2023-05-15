let car = {
    model: 'Tesla',
    weight: 1.8,
    color: 'red',
    go: function(){
        console.log('go and model')
    }
}

car.go()

let ford = {
    year: 2056,
}

console.log(ford)

Object.setPrototypeOf(ford, car);
// ford.__proto__ = car
console.log(ford);

console.log(ford.model + '\n' + ford.weight + '\n' + ford.color);
ford.go()

car.mileage = 45235
console.log(ford.mileage)

ford.go = function() {
    console.log(ford.year, ford.color)
}

ford.__proto__.go()

let chevrolet = {};

Object.setPrototypeOf(chevrolet, ford);
console.log([ chevrolet.model, chevrolet.color, chevrolet.mileage, chevrolet.go].join('\n'))

chevrolet.go = 'my method';

// Добавьте для chevrolet два свойства body_style, drive_type.
chevrolet.body_style = '1400 kg';
chevrolet.drive_type = 'sport';
console.log(chevrolet.drive_type);

// Переберите и выведите с помощью цикла все свойства объекта chevrolet.
for (const key in chevrolet) {
    console.log(chevrolet[key])
}
