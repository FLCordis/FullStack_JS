let speed = 40
let loop = 0

do{
    alert("Velocidade do carro está em " + speed + "km/h.")
    speed -= 20
    loop += 1
}while (speed >= 0)

alert("Carro estacionou depois de " + loop + " loops.")