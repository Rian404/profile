const nama = "tugeldel";
let usia = 2;

// pemanggilan id dari html
let myidentity = document.getElementById(`data`)

function telusuriBiodata() {
    let golongan;

    if (usia > 10 && usia < 18) {
        golongan = "golongan remaja";
    }
    else if (usia > 18 && usia < 30) {
        golongan = "golongan dewasa";
    }
    else if (usia > 30) {
        golongan = "anda golongan tua yaaa";
    }
    else if (usia > 3 && usia < 10) {
        golongan = "golongan bayi anda";
    }
    else {
        golongan = "wah si anying🤦‍♂️";
    }
    // menampilkan data dlaam website
    return myidentity.innerHTML = golongan;
}
// menampilkan pada console
console.log (nama);
console.log (usia);
console.log (data)
console.log (`nama saya adalah ${nama} dan usia saya adalah ${usia}`);

// pemanggilan function
telusuriBiodata();