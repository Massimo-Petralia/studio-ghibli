stories = [
    ghibli_story = 'Lo Studio Ghibli, Inc. (株式会社スタジオジブリ Kabushiki-gaisha Sutajio Jiburi?) è uno studio cinematografico di film d\'animazione giapponese, noto soprattutto per essere il produttore delle opere di Hayao Miyazaki e Isao Takahata. Molto popolare in Giappone, i suoi film sono tra i più visti nella storia del Sol Levante. Gran parte dei lavori dello studio ha vinto premi nel campo dell\'animazione, tra cui l\'Anime Grand Prix; inoltre sono stati acclamati dalla critica sia giapponese sia occidentale, al punto che il critico Roger Ebert ha classificato Il mio vicino Totoro e Kiki - Consegne a domicilio tra i più bei film per bambini mai realizzati, e Janet Maslin del New York Times ha definito Principessa Mononoke una pietra miliare del cinema d\'animazione. Nel 2002, La città incantata vinse l\'Oscar al miglior film d\'animazione, diventando il primo film anime a vincere un Academy Award.',
    trama_mononoke = 'Ashitaka, un giovane guerriero della dinastia Emishi, è costretto a uccidere un cinghiale selvatico posseduto da una divinità malvagia. Ferito al braccio dall\'animale, il giovane colpito da una maledizione mortale, deve lasciare il suo villaggio. Durante il suo viaggio si imbatte nella giovane San, una ragazza selvatica allevata dai lupi e soprannominata Principessa Mononoke.',
    trama_cittàIncantata = 'Chihiro è una bambina di dieci anni molto capricciosa e viziata e quando i suoi genitori le dicono che devono trasferirsi, ovviamente reagisce in modo irritante, arrabbiandosi. Durante il viaggio per raggiungere la nuova casa, i tre si fermano in una città fantasma governata da una strega malvagia con al suo seguito antiche divinità e creature magiche.',
    trama_terramare = 'L\'equilibrio del mondo sta cambiando da quando i draghi, che controllano il confine estremo di Terramare, si spingono minacciosamente fino alle terre abitate dagli esseri umani. Per Ged, un giovane mago, comincia così il lungo viaggio alla ricerca della misteriosa e terribile forza che sta minacciando il pianeta intero.',
    trama_nausicaa = 'Sono passati mille anni dai sette giorni del fuoco, una spaventosa guerra termonucleare che ha annientato la civiltà umana e buona parte dell\'ecosistema terrestre originale. Il Mare della Rovina si è espanso drammaticamente, occupando i regni degli uomini e invadendo la Terra con i suoi insetti giganti e le sue spore velenose. I pochi esseri umani superstiti vivono in due grandi regni, Tolmechia e Pejite.',
    trama_totoro = 'Le sorelline Satsuki e Mei si trasferiscono insieme al padre in una nuova casa in campagna, in attesa che la madre venga dimessa dal vicino ospedale. Per le due bambine inizia un viaggio alla scoperta di un mondo sconosciuto, abitato da creature fantastiche: i nerini del buio, spiritelli della fuliggine che occupano le vecchie dimore abbandonate.',
]

var menù_items = [
    {
        title: 'Studio Ghibli',
        story: this.ghibli_story,
        img: 'imm/ghibli.jpg'
    },
    {
        title: 'La principessa Mononoke',
        story: this.trama_mononoke,
        img: 'imm/mononoke.jpg'
    },
    {
        title: 'La città incantata',
        story: this.trama_cittàIncantata,
        img: 'imm/cittàIncantata.jpg'
    },
    {
        title: 'I racconti di Terramare',
        story: this.trama_terramare,
        img: 'imm/terramare.jpg'
    },
    {
        title: 'Nausicaa della valle del vento',
        story: this.trama_nausicaa,
        img: 'imm/nausicaa.jpg'
    },
    {
        title: 'Il mio vicino Totoro',
        story: this.trama_totoro,
        img: 'imm/totoro.jpg'
    },];


var ghibli_data = [{
    ghibliTitle: 'Studio Ghibli',
    ghibliText: this.ghibli_story,
    img: 'imm/ghibli.jpg'
},];

classMainElements = [];

console.log(menù_items);
console.log(trama_cittàIncantata);
console.log(ghibli_story)

function myFunction() {
    if (document.getElementById && document.createElement) {
        var container = document.createElement('div');
        container.setAttribute('id', 'container');
        document.getElementsByTagName('body')[0].appendChild(container);
        var header = document.createElement('div');
        header.setAttribute('id', 'header');
        container.appendChild(header);
        var logo = document.createElement('h1');
        logo.setAttribute('id', 'logo');
        logo.innerHTML = 'Studio Ghibli';
        home = document.createElement('a');
        home.setAttribute('id', 'tasto-home');
        home.setAttribute('onclick', 'buildAll(0)');
        home.setAttribute('href', 'javascript:void(0)');
        home.innerHTML = 'Home';
        header.appendChild(logo);
        header.appendChild(home);
        navigation = document.createElement('div');
        navigation.setAttribute('id', 'navigation');
        container.appendChild(navigation);
        var menù = document.createElement('ul');
        navigation.appendChild(menù);
        menù_items.forEach((item, index) => {
            if (index > 0) {
                buildTitles(item.title, index, menù);

            }
        });
        var content = document.createElement('div');
        content.setAttribute('id', 'content');

        container.appendChild(content);
        this.buildAll(0);
        var footer = document.createElement('div');
        footer.setAttribute('id', 'footer');
        footer.innerHTML = '<blockquote style=\'margin: 2px\' class="firma">by Massimo P.</blockquote>';
        container.appendChild(footer);


    }

}

function buildTitles(title, i, varMenù) {
    item_menù = document.createElement('li');
    item_menù.setAttribute('class', 'item-menù');

    item_menù.setAttribute('onclick', 'buildAll(' + i + ')');
    item_menù.innerHTML = title;
    varMenù.appendChild(item_menù);
}

function buildMain(i) {
    ghibli_data.forEach(element => {
        title = document.createElement('h2');
        title.setAttribute('class', 'titleStory');
        title.innerHTML = element.ghibliTitle;
        text = document.createElement('p');
        text.setAttribute('id', 'textStory');
        text.innerHTML = element.ghibliText;
        img = document.createElement('img');
        img.setAttribute('class', 'img');
        img.setAttribute('src', element.img);

        content.appendChild(text);
        content.appendChild(title);
        content.appendChild(img);
    });
}

function buildStory(i) {

    _title = this.menù_items[i].title;
    _story = this.menù_items[i].story;
    heading = document.createElement('h2');
    heading.setAttribute('class', 'titleStory');
    heading.innerHTML = _title
    text = document.createElement('p');
    text.setAttribute('class', 'textStory');
    text.innerHTML = _story;
    if (content.hasChildNodes() === true) {
        var oldTitle = document.getElementsByClassName('titleStory')[0];
        var oldStory = document.getElementsByClassName('textStory')[0];
        content.replaceChild(heading, oldTitle);
        content.replaceChild(text, oldStory);

    } else {

        content.appendChild(heading);
        content.appendChild(text);

    }

}

function buildImg(i) {
    url_img = this.menù_items[i].img;
    img = document.createElement('img');
    img.setAttribute('class', 'img');
    img.setAttribute('src', url_img);
    if (document.getElementsByClassName('img')[0]) {
        oldImg = document.getElementsByClassName('img')[0];
        content.replaceChild(img, oldImg);
    } else {
        oldImg = document.getElementsByClassName('img')[0];
        content.appendChild(img);
    }
}

function buildAll(i) {
    buildStory(i);
    buildImg(i);
    myAnimate('animate');
}

function myAnimate(_className) {
    var classes = ['titleStory', 'textStory', 'img']
    var elementArray = this.getFirstElemetnsByClassName(classes)
    elementArray.forEach(element => element.classList.toggle(_className))
}

function getFirstElemetnsByClassName(classes) {
    var newArray = classes.map((classElement) => { return document.getElementsByClassName(classElement)[0]}) 
   return newArray;
}









