let herois = [
    { nome: "Atlas", xp: 9200 },
    { nome: "Kairah", xp: 4500 },
    { nome: "Darius", xp: 1200 },
    { nome: "Ares", xp: 15000 }
];

function classificarNivel(xp) {
    if (xp < 1000) return "Ferro";
    else if (xp >= 1001 && xp <= 2000) return "Bronze";
    else if (xp >= 2001 && xp <= 5000) return "Prata";
    else if (xp >= 5001 && xp <= 7000) return "Ouro";
    else if (xp >= 7001 && xp <= 8000) return "Platina";
    else if (xp >= 8001 && xp <= 9000) return "Ascendente";
    else if (xp >= 9001 && xp <= 10000) return "Imortal";
    else if (xp >= 10001) return "Radiante";
    else return "Nível desconhecido";
}

for (let i = 0; i < herois.length; i++) {
    let heroi = herois[i];
    let nivel = classificarNivel(heroi.xp);
    console.log(`O Herói de nome ${heroi.nome} está no nível de XP ${nivel}`);
}
