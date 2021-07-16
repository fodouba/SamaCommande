const images = [
    {
        'id': 0001,
        'categorieProduit': 'Telephone-Portable',
        'nomProduit': 'Samsung-Galaxy-S10e',
        'couleurProduit': 'Prisme-Bleu',
        'capaciteMemoire': '128GB',
        'nomImage': 'Samsung-Galaxy-S10e-Telephone-Portable-128GB-Prisme-Bleu.jpg',
        'imageUrl': '../images/Samsung-Galaxy-S10e-Telephone-Portable-128GB-Prisme-Bleu.jpg',
        'description': ()=>{
            return `
                    Votre ${nomProduit} ${couleurProduit} avec ${capaciteMemoire} de mémoire intégrée; Vous bénéficiez d'un
                    ${categorieProduit} de dernière génération. 
            `
        },
        'détails': '',
    }
]
export default images;