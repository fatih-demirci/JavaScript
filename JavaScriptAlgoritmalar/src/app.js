function findPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let asalMi = true
        for (let j = 2; j <= numbers[i]/2; j++) {
            if(numbers[i]%j==0){
                asalMi=false
                break
            }
        }
        if(asalMi&&numbers[i]!=1){
            console.log("Asal Sayı: ")
            console.log(numbers[i])
        }else{
            console.log("Asal Sayı değil:")
            console.log(numbers[i])
        }
    }
}

function arkadasSayilarMi(sayi1,sayi2) {
    let sayi1Toplam = 0
    let sayi2Toplam = 0
    for (let i = 1; i <= sayi1/2; i++) {
        if(sayi1%i==0){
            sayi1Toplam+=i;
        }
    }
    for (let i = 1; i <= sayi2/2; i++) {
        if(sayi2%i==0){
            sayi2Toplam+=i;
        }
    }
    console.log(sayi1+" Bölenlerinin toplamı: "+sayi1Toplam+" "+sayi2+" Bölenlerinin toplamı "+sayi2Toplam)
    if(sayi1Toplam==sayi2&&sayi2Toplam==sayi1){
        console.log("Arkadaş Sayılar")
    }else{
        console.log("Arkadaş Sayı Değiller")
    }
}

function mukkemmelSayilar() {
    for (let i = 1; i <= 1000; i++) {
        let toplam = 0
        for (let j = 1; j <= i; j++) {
            if (i%j==0) {
                toplam+=j
            }
        }
        if(toplam==i*2){
            console.log(i)
        }
        toplam=0
    }
}

function asalSayilar() {
    for (let i = 2; i < 1000; i++) {
        let asalMi = true
        for (let j = 2; j <=i/2; j++) {
            if(i%j==0){
                asalMi=false
                break
            }
        }
        if(asalMi&&i!=1){
            console.log("Asal Sayı: ")
            console.log(i)
        }
    }
}



//findPrime(1,2,3,4,5,6,7,8,9,10,11,12,13,53,59,61,997,991,947)
//arkadasSayilarMi(1184,1210)
//mukkemmelSayilar()
//asalSayilar()