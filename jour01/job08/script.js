function sommenombrespremiers(nombre1, nombre2){
    for(var i = 2; i < nombre1 && i < nombre2; i++)
        if(nombre1%i === 0 || nombre2%i === 0)
            return false;
        else
            return nombre1 + nombre2;
}

alert(sommenombrespremiers(3, 5));