export function hozzaad() {

    if (szam >= 0) {
        lista.push(szam);
    } else {
        console.log("A beírt szám kisebb mint nulla!");
    }
}

export function atlag() {
    let ossz = 0;
    for (let i = 0; i< lista.length; i++) {
      ossz += lista[i]; 
    }

    return ossz / lista.length;

}
