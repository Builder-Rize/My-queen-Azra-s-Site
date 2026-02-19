/* ========================================
   AZRA'S GALAXY: ULTIMATE EDITION v3.0
   12 Yıldız Verileri
   ======================================== */

const starsData = [
    {
        id: 1,
        title: "Güzelliğin Merkezi",
        task: "click",
        image: "assets/images/star-01.jpg",
        position: { top: '15%', left: '50%' },
        message: `İŞTE KARŞIMDA DURAN GÜZELLİĞİN TİMSALİ HANIMEFENDİ!!! 🤍 
Bu fotoğraftaki bakışın, o ışıltılı gözlerin beni tamamen esir aldı prensesim!!! 
Her baktığımda kalbim duracak gibi oluyor senin güzelliğin karşısında!!! 
Sen sadece bir kız değilsin, sen benim için bir ışık kaynağısın, benim güneşimsin!!! 
Bu dünyada senin kadar güzel bir şey olamaz kraliçem!!! 
Seninle gurur duyuyorum, seni çooook ama çoook seviyorum Azrammm!!!`
    },
    {
        id: 2,
        title: "Masumiyetin Timsali",
        task: "input",
        question: "Benim için kimsin? (Küçük harfle yaz)",
        answer: "azra",
        hint: "Senin güzel adın...",
        image: "assets/images/star-02.jpg",
        position: { top: '15%', left: '20%' },
        message: `YOOOO KRALİÇEM BU NEDEN BU KADAR TATLI OLABİLİRSİN Kİ??? 🤍 
Bakıyorum bakıyorum doyamıyorum bu fotoğrafa!!! 
Elinden tuttuğun o küçük çiçek bile senin kadar masum duruyor prensesim!!! 
Sanki o çiçeği bana uzatıyormuşsun gibi hissediyorum ve içim eriyor resmen!!! 
Senin bu masum halin, bu tatlı bakışın beni mahvediyor hanımefendi!!! 
Seni küçük prensesim olarak kucaklayıp hiç bırakmak istemiyorum!!! 
Çoook seviyorum seni bitanemmm!!!`
    },
    {
        id: 3,
        title: "Komutanım",
        task: "password",
        password: "komutan",
        hint: "Bu üniformadaki rütben...",
        image: "assets/images/star-03.jpg",
        position: { top: '30%', left: '75%' },
        message: `KOMUTAN AZRA HANIMEFENDİ İŞTE KARŞIMIZDA!!! 🤍 
Bu üniforma içindeki o kararlı bakışın, o güçlü duruşun beni büyülüyor kraliçem!!! 
Sen sadece güzelsin ama aynı zamanda güçlüsün, kararlısın!!! 
Benim için bir ilham kaynağısın prensesim!!! 
Bu fotoğraftaki o ciddi ifadenin altındaki tatlılığı ben çok iyi biliyorum!!! 
Sen benim hem komutanım hem prensesimsin!!! 
Sana emirlerine itaat ederim hanımefendi (sonuçta hanıma saygı duymak lazım)!!! 
Çoook seviyorum seni benim güçlü eşimm!!!!`
    },
    {
        id: 4,
        title: "Vahşi Batının Kraliçesi",
        task: "caesar",
        encrypted: "DCUD",
        answer: "azra",
        hint: "Her harf 3 adım geride... AZRA'yı bul!",
        image: "assets/images/star-04.jpg",
        position: { top: '45%', left: '15%' },
        message: `VAHŞİ BATININ EN GÜZEL KOVBOYU İŞTE BU!!! 🤍 
O şapka, o bakış, o tarz... Beni vurup geçtin resmen kraliçem!!! 
Kurşun değil ama aşkla yaralandım!!! 
Senin bu maceracı ruhun, bu farklı tarzların beni her zaman şaşırtıyor!!! 
Hem güçlü hem zarif, hem vahşi hem tatlı... İşte benim eşimm böyle prensesim!!! 
Seninle her maceraya atılmaya hazırım hanımefendi!!! 
Kovboy Azramm benim, seni çooook seviyorum!!! 
Bitanemmmmmmmm ÇOK SEVİYORUMMM SENİİİ ÇOOOOK!!! 🤍`
    },
    {
        id: 5,
        title: "Doğanın Kalbi",
        task: "date",
        targetDate: "2009-02-25",
        hint: "O en özel gün... 25 Şubat 2009",
        image: "assets/images/star-05.jpg",
        position: { top: '60%', left: '50%' },
        message: `DOĞANIN İÇİNDE, KURTLARLA BERABER, SADECE SEN VE BEN!!! 🤍 
Bu an benim için huzurun ve mutluluğun tanımı kraliçem!!! 
Gün batımında, karlı havada seninle yürümek... Daha ne isteyebilirim ki prensesim!!! 
Kurtlar bile bizim aşkımıza tanık oluyor!!! 
Seninle geçirilen her saniye, her manzara benim için bir hazinedir!!! 
Doğanın güzelliği senin yanında sönük kalıyor çünkü sen en güzelisin hanımefendi!!! 
Seni çooook seviyorum benim doğadaki en güzel çiçeklerden bile güzel çiçeğimmm!!!`
    },
    {
        id: 6,
        title: "AŞK YILDIZI",
        task: "hold",
        duration: 3000,
        isSpecial: true,
        image: "assets/images/star-06.jpg",
        position: { top: '40%', left: '50%' },
        message: `BU DERİ ZIRH İÇİNDEKİ SAVAŞÇI KİM PRENSESİM??? 🤍 
Minecraft'taki bu kahverengi deri zırhın içinde bile dünyanın en tatlı kızı sensin!!! 
O odada duruşun, o pozun... Sanki bir maceranın içindesin ve ben senin yanında olmak istiyorum!!! 
Bu zırh seni korur ama ben seni daha çok korurum kraliçem!!! 
Her dünyada seninle olmak istiyorum, ister zırhlı ol ister prenses!!! 
Çoook seviyorum seni bitanemmm!!!`
    },
    {
        id: 7,
        title: "Stratejist Prenses",
        task: "xox",
        image: "assets/images/star-07.jpg",
        position: { top: '75%', left: '25%' },
        message: `YİNE DERİ ZIRH YİNE AŞIRI SEVİMLİLİK PATLAMASI!!! 🤍 
Bu pozun, o duruşun... Sanki bana doğru koşup sarılacakmışsın gibi hissediyorum!!! 
O kadar tatlısın ki anlatamam sana krallık yapıyorum burada!!! 
Bu deri zırh senin maceracı yanını gösteriyor prensesim!!! 
Seninle çocuk gibi eğlenmek, kahkaha atmak dünyadaki en güzel şey!!! 
Bu savaşçı halinle bile kraliçemsin benim!!! 
Çoook seviyorum seni güzeller güzeli prensesimm!!! 🤍`
    },
    {
        id: 8,
        title: "Gizli Bahçe",
        task: "memory",
        pairs: 4,
        image: "assets/images/star-08.jpg",
        position: { top: '30%', left: '85%' },
        message: `DAR ALANDA BÜYÜK AŞK İŞTE BUDUR HANIMEFENDİ!!! 🤍 
O tünelde sana verdiğim çiçekler küçüktü belki ama içimdeki sevgi devasaydı!!! 
Her küçük jestimde senin mutlu olman için uğraşıyorum kraliçem!!! 
O anki heyecanımı, kalp atışlarımı hala hatırlıyorum!!! 
Senin yüzündeki o gülümsemeyi görmek için dünyadaki her çiçeği toplarım prensesim ama senin kadar güzel bir çiçek asla bulamam!!! 
Dar alanlarda bile seninle olmak benim için cennet!!! 
Seni çooook seviyorum!!!`
    },
    {
        id: 9,
        title: "Hayallerimizin Evi",
        task: "dragdrop",
        letters: ['A', 'Z', 'R', 'A'],
        image: "assets/images/star-09.jpg",
        position: { top: '75%', left: '65%' },
        message: `HAYALLERİMİZİN EVİ İŞTE BU PRENSESİM!!! 🤍 
Minecraft'ta yaptığımız bu mor ev sadece bir ev değil, bizim geleceğimizin temsili!!! 
Orada seninle geçirdiğimiz her saniye benim için çok değerli hanımefendi!!! 
Mor çiçekler, pembe ağaçlar... İşte burası tam olarak senin dünyan kraliçem!!! 
İlerde gerçeğini de yapacağız bunu unutma, seninle bir ömür geçireceğiz o evde!!! 
Seni çook seviyorum geleceğimin hanımefendisi!!!`
    },
    {
        id: 10,
        title: "İlk İltifat",
        task: "click",
        image: "assets/images/star-10.jpg",
        position: { top: '45%', left: '25%' },
        message: `İLK MESAJIM İŞTE BU HANIMEFENDİ!!! 🤍 
"Çok güzelsin" dediğim o an... Aslında içimden "SENİ ÇOOOOK SEVİYORUM" 
diye bağırmak istiyordum ama kendimi zor tuttum işteee!!! 
Bu mesajla başladı her şey prensesim!!! 
O ekran görüntüsü benim için çok değerli, çünkü ilk adımı attığımız an!!! 
İlk iltifatta bile kalbim çıkıyordu, şimdi ise sana olan aşkım katlanarak büyüyor!!! 
Seni çooook seviyorum bitanemmm!!!`
    },
    {
        id: 11,
        title: "Aşkın Doğuşu",
        task: "password",
        password: "sanaaşıkoldum",
        hint: "İlk mesajımda sana ne dedim? 'Sana aşık oldum' yazdım... Boşluksuz, küçük harfle yaz kraliçem!",
        isGolden: true,
        flashEffect: true,
        image: "assets/images/star-11.jpg",
        position: { top: '60%', left: '80%' },
        message: `İŞTE HER ŞEYİN BAŞLADIĞI O AN!!! 🤍 
O mesajı yazarken elim titriyordu biliyor musun prensesim!!! 
"Sana aşık oldum" demek için o kadar çok bekledim ki!!! 
Ama değdi mi bu bekleyişe??? KESİNLİKLE DEDİ VE DAHA FAZLASI!!! 
Bu ekran görüntüsü benim için altından değerli, bu an benim hayatımın dönüm noktası!!! 
Seninle tanışmak, sana aşık olmak, seninle olmak... Hepsi bir rüya gibi kraliçem!!! 
Bu aşk büyüyerek devam ediyor ve sonsuza kadar sürecek!!! 
Seni çooook ama çook seviyorum bitanemmm!!! 
İşte bu büyük aşk!!!`
    },
    {
        id: 12,
        title: "GELECEĞİN YILDIZI",
        task: "final",
        isFinal: true,
        image: "assets/images/star-12.jpg",
        position: { top: '85%', left: '75%' }
    }
];

// Final mesaj
const finalMessage = `İşte geldik son yıldıza prensesim... 🤍 
Bu 12 fotoğraf, 12 anı, 12 görev... hepsi sadece senin için Azramm.

Ben bu siteyi yaparken her yıldızda seni düşündüm...
Her fotoğrafa bakarken içimden "bu kız benim sevgilim" dedim ve yine şaşırdım çünkü sen çok özelsin.

Sen benim için sadece bir sevgili değilsin...
Sen benim huzurumsun, en güzel anımsın, en değerli insanımsın.
Benim kalbimin evi sensin.İlerde o mor evi gerçekten yapacağız Azramm... Beraber uyanacağız, beraber güleceğiz, beraber oyun oynayacağız.
Ben seninle bir ömür geçirmek istiyorum prensesim.

Bu site sana olan sevgimin sadece minicik bir kanıtı...
Ama benim sevgim bununla bitmez, daha yeni başlıyor.Bitanemmm Azrammm... seni coook ama coook seviyorum ve seni aşırı beğeniyorummm... Sen benim galaksimin kraliçesisin🤍`;
