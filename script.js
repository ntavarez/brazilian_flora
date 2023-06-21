function loadPlants() {
    let plants = [
        {
            name: "Petúnia",
            image: "https://cdn.pixabay.com/photo/2019/05/09/15/29/petunia-4191380_1280.jpg",
            description: "Petúnia remete ao termo tupi-guarani grafado petum ou betum. É originária de locais tropicais e sub-tropicais da América do Sul. A maioria das petúnias que se encontram em jardins são híbridas. As petúnias são herbáceas anuais e atingem 15 a 30 cm de altura. A planta prefere estar exposta ao Sol. Floresce na primavera e verão e podem apresentar-se nas cores: vermelha, azul, rosa, laranja, salmão, púrpura e branca. Seu principal pigmento é uma antocianida denominada petunidina, que tem seu nome derivado da palavra Petúnia, sendo um corante presente em algumas outras flores e frutas.",
            alt_name:"Não possui.",
            cientific_name: "Petunia integrifolia",
            family: "Solanaceae"
        },
        {
            name: "Alamanda",
            image: "https://cdn.pixabay.com/photo/2020/07/16/06/07/flower-5409809_1280.jpg",
            description: "É uma planta tóxica ornamental nativa do Brasil. É uma trepadeira arbustiva e latescente. Possui quatro folhas verticiladas, oblongas ou ovadas, acuminadas e glabras. As flores são amarelas, fasciculadas, axilares e campanuladas. A simetria de sua flor é actinomorfa; é cíclica, dialisépala, gamopétala e diclamídia; o seu estigma é ramificado; seus estames são livres, possuindo deiscência rimosa, isostêmone e epipétala. As folhas são verticiladas e apresentam nervação peninérvea. O fruto é do tipo cápsula bivalve, contendo poucas sementes.",
            alt_name: "Alamanda-amarela, Carolina e Dedal-de-dama.",
            cientific_name: "Allamanda cathartica",
            family: "Apocynaceae"
        },
        {
            name: "Onze-horas",
            image: "https://cdn.pixabay.com/photo/2018/10/02/14/42/portulaca-grandiflora-3718997_1280.jpg",
            description: "É uma planta nativa da América do Sul, ocorrendo desde o sudeste brasileiro até o Uruguai e a Argentina. Também pode ser encontrada no sul do continente asiático. É uma planta anual, muito pequena e de crescimento rápido, atingindo 30 cm de altura. As folhas são espessas e carnudas, com 2 cm de comprimento e dispostas alternadamente em pequenos grupos. As flores possuem diâmetro entre 2 e 3 cm com 5 pétalas, que podem ser vermelhas, laranjas, salmão, rosas, brancas e amarelas. No Brasil, ela recebe o nome de onze horas, porque começa a abrir suas flores próximo às 11 horas.",
            alt_name: "Portulaca.",
            cientific_name: "Portulaca grandiflora",
            family: "Portulacaceae"
        },
        {
            name: "Flor-de-maio",
            image: "https://cdn.pixabay.com/photo/2020/02/27/09/04/schlumbergera-truncata-4883942_1280.jpg",
            description: "É uma cactácea epífita originária do Brasil, na Serra dos Órgãos e Serra do Mar. Tem cerca de 30 cm de altura e não apresenta espinhos. Seus nomes populares são flor-de-maio, cacto-de-natal, cacto-de-páscoa, flor-de-seda. Seu ciclo de vida é perene. Floresce em maio. As flores medem até 8 cm, em tons de rosa, branco, laranja e vermelho. O caule é formado por vários artículos que podem ser destacados para formar novas plantas. Um solo bem drenado e fértil, adubação mensal sem que encoste na planta ajuda no desenvolvimento da planta, assim como também uma sombra parcial com boa luminosidade.",
            alt_name: "Cacto-da-páscoa, Cacto-de-natal e Flor-de-seda.",
            cientific_name: "Schlumbergera truncata",
            family: "Cactaceae"
        },
        {
            name: "Gloxínia",
            image: "https://cdn.pixabay.com/photo/2021/10/20/20/13/hardy-gloxinia-6727227_1280.jpg",
            description: "Foi encontrada primeiramente nos Andes da América do Sul. Também é encontrada na America Central e parte da Ásia. Entre as cores de seus variados tipos encontramos tons laranjas, rosas, vermelhos, roxos e algumas compostas, como púrpura ou vinho com branco nas bordas das pétalas. Devido sua beleza extremamente marcante, as Gloxínias tem como significado o amor à primeira vista, e, quando utilizada como presente, pode expressar a intenção de namoro ou casamento.",
            alt_name: "Cachimbo e Siníngia.",
            cientific_name: "Sinningia speciosa",
            family: "Gesneriaceae"
        },
        {
            name: "Caliandra",
            image: "https://cdn.pixabay.com/photo/2014/03/30/11/15/calliandra-haematocephala-301331_1280.jpg",
            description: "É uma planta originária do Cerrado brasileiro, que cresce em arbustos lenhosos de até 4 metros. Suas flores aparecem na primavera e no verão e suas folhas são perenes. É uma planta muito florífera, sensível ao frio. Tem um crescimento intenso por todo o ano, mas lento sob temperaturas baixas. Seu caule é ramificado e suas folhas são compostas, bipinadas e opostas, com folíolos pequenos, de cor verde escura. uma espécie de grande beleza e muito indicada para quem está começando na arte do Bonsai.",
            alt_name: "Flor-do-cerrado, Arbusto-chama, Diadema, Esponjinha, Esponjinha-sangue, Esponjinha-vermelha, Mandararé e Topete-de-pavão.",
            cientific_name: "Calliandra tweedii",
            family: "Fabaceae"
        }
    ];

    function sortCatalog(){
        plants.sort(function (a, b) {
            if (a.name > b.name) {
            return 1;
            }
            if (a.name < b.name) {
            return -1;
            }
            return 0;
        });
    }

    sortCatalog();

    let content = document.getElementById("content");

    for (let plant in plants) {
        content.innerHTML +=
            '<div class="card">' +
            '<div class="card-img">' +
            '<img src="' +
            plants[plant].image +
            '"/>' + '</div>' +
            '<details>' +
            '<summary>' +
            plants[plant].name +
            '</summary>' +
            '<p>' + '<b>Nome científico: </b>' + '<i>' + plants[plant].cientific_name + '</i>' +
            '</p>' +
            '<p>' + plants[plant].description +
            '</p>' +
            '<p>' + '<b>Nomes alternativos: </b>' + plants[plant].alt_name +
            '</p>' +
            '<p>' + '<b>Família: </b>' +
            plants[plant].family +
            '</p>' +
            '</details>' +
            '</div>';
    }
}

loadPlants();