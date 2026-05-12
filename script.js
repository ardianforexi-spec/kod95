const storageKeys = {
  users: "kod95-users",
  session: "kod95-session",
  answers: "kod95-answers",
};

const questionCounts = {
  partOne: 30,
  partTwo: 12,
  partThree: 6,
};

const categoryConfig = {
  C: {
    id: "C",
    label: "Kategoria C",
    shortLabel: "C",
    description: "Pergatitje e plote per kandidatet qe ushtrojne per kategorine C.",
    testCount: 5,
  },
  D: {
    id: "D",
    label: "Kategoria D",
    shortLabel: "D",
    description: "Teste te plota per kandidatet qe pergatiten per kategorine D.",
    testCount: 4,
  },
  "D-PJESSHME": {
    id: "D-PJESSHME",
    label: "Kategoria D e pjesshme",
    shortLabel: "D e pjesshme",
    description: "Program i vecante per kandidatet qe kalojne ne kategorine D pas licences ekzistuese.",
    testCount: 3,
  },
};

const realTests = {
  C: {
    1: {
      name: "Testi 1",
      partOne: [
        {
          prompt: "Me qfare njesie matese zyrtarisht i shenojme fuqite e motoreve?",
          options: [
            "Me qift rrotullues ne Nm",
            "Me kuaj fuqi - HP",
            "Me kilovate - kW",
            "Me kilo amperes - kA",
          ],
          correctIndex: 2,
        },
        {
          prompt: "Perse nuk duhet te lyhen gomat me vaj motorik?",
          options: [
            "Sepse vaji i motorit zvogelon ferkimin mes rruges dhe gomes.",
            "Sepse vaji i motorit po ferkon gomen.",
            "Sepse vaji i motorit demton gomat e dimrit.",
            "Goma e lyer me vaj motorik shelqen mire dhe e zbukuron nga ana estetike.",
          ],
          correctIndex: 1,
        },
        {
          prompt: "Qfare lloj lyerjesh kane motoret me kater takte?",
          options: [
            "Lyerje me sperkatje.",
            "Lyerje me perzirje te vajit qe ja shtojme karburantit.",
            "Lyerje e kombinuar me sperkatje dhe lyerje me presion.",
            "Lyerje me presion.",
          ],
          correctIndex: 2,
        },
        {
          prompt: "Cila eshte detyra e katalizatorit tek motoret me ndezje kompresive?",
          options: [
            "Per te pastruar gazrat helmuese.",
            "Per t'i kthyer gazrat helmuese ne jo helmuese.",
            "Per t'i mbajtur gazrat helmuese.",
            "Per te mundesuar ndezje te lehte te motorit ne temperaturat e uleta.",
          ],
          correctIndex: 1,
        },
        {
          prompt: "Cila eshte detyra e diferencimit (diferencijalit)?",
          options: [
            "Mundeson shpejtesine e ndryshme rrotulluese te gomave gjate udhetimit ne kthesa.",
            "Sinkronizon diferencen e raportit te nderrimit te shpejtesise.",
            "Parandalon rreshqitjen e gomave ne terren rreshqites.",
            "Permirson kapjen e gomave dhe rrit stabilitetin e mjetit.",
          ],
          correctIndex: 0,
        },
        {
          prompt: "Cilen lidhje e shkyqim se pari, kur nderrojme akumulatorin ne mjet?",
          options: [
            "Lidhjen qe eshte e lidhur me starterin.",
            "Lidhjen qe eshte e lidhur me alternatorin.",
            "Lidhjen qe eshte e lidhur me masen e mjetit.",
            "Lidhjen qe eshte e lidhur me kontaktin ne kyqje.",
          ],
          correctIndex: 2,
        },
        {
          prompt: "A eshte harxhimi specifik i karburantit me i ulet gjate frekuences se larte te fuqise motorike?",
          options: [
            "Po.",
            "Jo.",
            "Vetem tek motoret me nafte (dizel).",
            "Vetem tek motoret me benzine.",
          ],
          correctIndex: 1,
        },
        {
          prompt: "Qfare duhet shoferi te heqe rregullisht nga sistemi ajror i frenimit?",
          options: [
            "Kondensin nga rezervuaret ajrore.",
            "Ajrin e tepert.",
            "Presionin e tepert te ajrit.",
            "Papastertit e jashtme.",
          ],
          correctIndex: 0,
        },
        {
          prompt: "ABS pajisja eshte e prishur, si punojne frenat ne kete rast?",
          options: [
            "Frenat punojne normalisht, vetem se ne frenimin e fuqishem munden te bllokohen.",
            "Frenat nuk punojne, para vazhdimit te rruges duhet te rregullohen.",
            "Frenat punojne me efekte te zvogluara frenuese. Udhetimin mund ta vazhdojme por me kujdes.",
            "Kompjuteri bllokon punimin e mjetit.",
          ],
          correctIndex: 0,
        },
        {
          prompt: "Si mund ta verejme defektin e amortizuesit ne gome?",
          options: [
            "Goma eshte e konsumuar ne menyre te pabarabarte, ne shkalle.",
            "Jane te konsumuara pjeset e jashtme te gomes.",
            "Jane te konsumuara te dy pjeset e jashtme te gomes.",
            "Jane te konsumuara pjeset e brendshme te gomes.",
          ],
          correctIndex: 0,
        },
        {
          prompt: "A mund te perdoren njekohesisht te dyja frenat, ajo punuese dhe ajo ndihmese?",
          options: [
            "Po.",
            "Gjate dimrit.",
            "Jo.",
            "Vetem gjate frenimit urgjent.",
          ],
          correctIndex: 0,
        },
        {
          prompt: "Cili nga gazerat e meposhtem eshte aq helmues, saqe koncentrimi i vogel ne mjedis te mbyllur mund te shkaktoje dhimbje koke dhe vjellje?",
          options: [
            "N2 - azot.",
            "CO2 - dioksidi i karbonit.",
            "H2O - avulli i thjeshte.",
            "CO - monoksid i karbonit.",
          ],
          correctIndex: 3,
        },
        {
          prompt: "Karakteristikat e motorit te naftes jane:",
          options: [
            "Ndezje e detyruar.",
            "Krijim i jashtem i nje perzierje ajer-karburant.",
            "Raport i larte presioni.",
            "Shpejtesi e larte e rrotullimit.",
          ],
          correctIndex: 2,
        },
        {
          prompt: "Cili pohim i kthimit te qlirimit te gazerave eshte i sakte?",
          options: [
            "I gjithe qlirimi eshte furnizuar ne perzierjen karburant-ajer.",
            "Ne perzierjen e fresket futen vetem oksidet e azotit.",
            "Nje pjese e perzierjes se fresket furnizohet me gazin tymues.",
            "Nje pjese e gazit shkarkues eshte furnizuar per marrjen e perzierjeve te fresketa.",
          ],
          correctIndex: 3,
        },
        {
          prompt: "Si i ndajme ngarkesat sipas vetive fizike?",
          options: [
            "Ngarkesa te forta dhe te thyeshme.",
            "Ngarkesa qe prishen shpejte, te rrezikshme dhe te jashtezakonshme.",
            "Ngarkesa me copa dhe te rrezuara.",
            "Te ngurta, te lengeta dhe te gazta.",
          ],
          correctIndex: 3,
        },
        {
          prompt: "Qfare pajisje transporti njohim?",
          options: [
            "Pirunar, karroca.",
            "Paketa, fuqi dhe lidhje.",
            "Aksesoret dhe mbajtesit.",
            "Paketa, paleta dhe arka (kontejner).",
          ],
          correctIndex: 0,
        },
        {
          prompt: "A eshte e nevojshme qe te kujdesemi per ndriqimin e arkes (kontejnerit) se mbyllur nese ngarkohet naten ose ne erresire?",
          options: [
            "Po.",
            "Jo.",
            "Jo, sepse ndriqimi i arkes nuk eshte i nevojshem.",
            "Jo, sepse naten dhe ne erresire nuk lejohet te ngarkohen arkat.",
          ],
          correctIndex: 0,
        },
        {
          prompt: "Ne te cilen kohe jeni te detyruar te transferoni te dhenat nga kartela e shoferit ne bazen e te dhenave te transportuesit?",
          options: [
            "Brenda nje periudhe kohore prej cdo 90 ditesh.",
            "Me se voni ne cdo fund jave.",
            "Jo me vone se ne periudhat kohore qe nuk jane me te gjata se 15 dite.",
            "Jo me vone se ne periudhat kohore qe nuk jane me te gjata se 28 dite.",
          ],
          correctIndex: 3,
        },
        {
          prompt: "Qfare duhet te beni me kartelen e shoferit te tahografit pas perfundimit te udhetimit ditor te automjetit me tahograf dixhital?",
          options: [
            "Karta e tahografit te shoferit mbetet ne automjet.",
            "Kartelen e tahografit te shoferit ia dorezoj punedhenesit.",
            "Kartelen e tahografit te shoferit e marr me vete, pasi ky eshte dokumenti im personal.",
            "Nuk eshte e percaktuar.",
          ],
          correctIndex: 2,
        },
        {
          prompt: "Si e percakton ligji kohen gjate nates ne transportin rrugor?",
          options: [
            "Kohen mes ores 23:00 dhe ores 6:00.",
            "Kohen mes ores 22:00 dhe ores 6:00.",
            "Kohen mes ores 22:00 dhe ores 5:00.",
            "Kohen mes ores 23:00 dhe ores 5:00.",
          ],
          correctIndex: 0,
        },
        {
          prompt: "Kujt i dorezohen fletet individuale te fletes se transportit (CMR-a)?",
          options: [
            "Kopja e pare marresit, e dyta transportuesit, e treta shpediterit ne dogane.",
            "Kopja e pare doganes eksportuese, e dyta marresit, e treta transportuesit.",
            "Kopja e pare marresit, e dyta doganes eksportuese, e treta transportuesit.",
            "Kopja e pare derguesit, e dyta shoqeron mallin dhe i dorezohet marresit, e treta mbahet nga transportuesi.",
          ],
          correctIndex: 3,
        },
        {
          prompt: "A vlen konventa CMR nese malli gjate transportit rrugor transportohet per nevoja personale?",
          options: [
            "Ne transportin per nevoja personale perdoret konventa CMR vetem ne territorin e BE-se.",
            "Po.",
            "Jo.",
            "Nuk ndikon ne vlefshmeri.",
          ],
          correctIndex: 2,
        },
        {
          prompt: "Qfare konfirmon marresi me nenshkrimin e fletes se ngarkeses CMR?",
          options: [
            "Arritjen e mallit ne vendin e caktuar.",
            "Pranimin e mallit.",
            "Arritjen me kohe.",
            "Permbylljen e procedures se tranzitit doganor.",
          ],
          correctIndex: 1,
        },
        {
          prompt: "Transportoni mall francez nga Franca nepermjet Zvicrres dhe Gjermanise. Me qfare dokumenti do ta beni transportin?",
          options: [
            "Mjafton vetem fatura, nuk kemi nevoje per dokument tjeter.",
            "Sipas procedures NCTS me T2, pasi kalojme territorin e Zvicrres qe nuk eshte pjese e BE-se.",
            "Me TIR shenjen.",
            "Me dokumentin EUR 1.",
          ],
          correctIndex: 1,
        },
        {
          prompt: "Po transportoni mallra nga Sllovenia ne panair ne Beograd. Cfare dokumenti doganor do te perdorni per te shmangur procedure periodike te importit-eksportit?",
          options: [
            "Formularin EUR 1.",
            "TIR shenjen.",
            "Formularin 302.",
            "ATA fleten.",
          ],
          correctIndex: 3,
        },
        {
          prompt: "Per demtim ne pune konsiderohet:",
          options: [
            "Demtimi i shkaktuar nga rekreacioni.",
            "Demtimi i shkaktuar ne punet e shtepise.",
            "Demtimi i shkaktuar ne rrugen per tek fqinjet.",
            "Demtimi i shkaktuar ne rrugen prej shtepise deri ne vendin e punes dhe kthimit ne shtepi.",
          ],
          correctIndex: 3,
        },
        {
          prompt: "Kush duhet te kujdeset per punen e sigurt?",
          options: [
            "Disponenti.",
            "Sinjalizuesi ne garazh.",
            "Shoferi dhe punetori mobil.",
            "Shoferi dhe punedhenesi i tij.",
          ],
          correctIndex: 3,
        },
        {
          prompt: "Nder masat e shumta per te kontrolluar dhe parandaluar migracionin e paligjshem jane:",
          options: [
            "Duke promovuar rrezikun e migracioneve te paligjshme.",
            "Kontrollimi me i rrepte ne kufij dhe pikat kufitare.",
            "Informimi i njerezve rreth punesimit.",
            "Kontrollim te transportuesit ne bileta.",
          ],
          correctIndex: 1,
        },
        {
          prompt: "Cfare duhet te sigurojme sa me shpejt nese kemi te bejme me aksident me demtime te renda?",
          options: [
            "Presim ndihmen e pare.",
            "Ta informojme Policine Rrugore per aksidentin.",
            "Te sigurojme ndihmen mjekesore profesionale.",
            "Te informojme te afermit e te lenduarve.",
          ],
          correctIndex: 2,
        },
        {
          prompt: "Qfare jane veprimtarit ndihmese te transportit?",
          options: [
            "Transport i mallit.",
            "Ngarkim, shkarkim dhe ringarkim i mallit.",
            "Pastrimi dhe servisi i mjetit transportues.",
            "Nderrim i mjetit transportues.",
          ],
          correctIndex: 1,
        },
      ],
      partTwo: [
        {
          prompt: "Specifikoni karakteristikat e motoreve benzine dhe nafte. Ne kolonat e dhena, shenoni me B per motoret benzine dhe me D per motoret me nafte.",
          answer:
            "B - Thithin perzierjen e karburantit me ajrin.\nB - Ndezja behet me ndihmen e kandeles elektrike.\nD - Karburanti ndizet per shkak te temperaturave te larta te ajrit te ngjeshur.\nD - Presioni i djegies eshte me i larte.\nB - Pajisja e injektimit fut lenden e karburantit ne qitjen e thithjes.",
        },
        {
          prompt: "Cfare qellime posedon etiketimi ne paketim?",
          answer:
            "Etiketat kane per qellim identifikimin e dergeses gjate ruajtjes dhe transportit, saktesine e dergeses dhe dorezimin te marresi, udhezimet per trajtim gjate ruajtjes dhe transportit, si dhe paralajmerimin per vecorite e mallrave si brishtesia.",
        },
        {
          prompt: "Si duhet bere shperndarja e mallit ne automjet?",
          answer:
            "Ngarkesa duhet te shperndahet ne menyre te barabarte ne tere hapesiren e ngarkeses. Qendra e gravitetit duhet te jete sa me poshte dhe ne mes te hapesires ngarkuese. Ngarkesat e gjata dhe te renda duhet te ngarkohen poshte, ndersa te lehtat anash dhe mbi ngarkesat e renda. Ngarkesa duhet te sigurohet mire, sidomos gjate frenimit, kthesave dhe situatave te paparashikueshme.",
        },
        {
          prompt: "Cfare do te thote disponimi i kohes? (te jesh ne dispozicion)",
          answer:
            "Ne dispozicion eshte koha kur shoferi duhet te jete gati per te vazhduar drejtimin, koha e kaluar ne ulesen e djathte kur drejtojne dy shofera, koha kur shoqeron mjetin ne tren ose traget pa kabine te posaçme per pushim, dhe kur shoferi nuk vozit, nuk punon e nuk pushon, pra nuk disponon kohen e lire. Para fillimit te punes shoferi duhet te informohet per kohezgjatjen e punes.",
        },
        {
          prompt: "Kur duhet te kete shoferi me ekuipazhin e dyfishte pushimin ditor?",
          answer:
            "Nje ekuipazh prej dy shoferesh brenda 30 oreve duhet bashkerisht te beje pushim ditor minimum prej 9 oresh.",
        },
        {
          prompt: "Me cilin dokument e deshmon shoferi permbushjen e kerkesave te kualifikimeve te fituara dhe trajnimin e rregullt?",
          answer:
            "Me certifikaten e kualifikimeve dhe trajnimeve te rregullta se bashku me kategorite perkatese ne patenten e shoferit ose me KOD 95 te Bashkimit Evropian ne patenten e shoferit. Leshimi i kartes behet nga organi administrativ i autorizuar.",
        },
        {
          prompt: "Cilat kushte duhet te plotesohen kur transportojme mallra per nevoja personale?",
          answer:
            "Mallrat duhet te jene ne pronesi te transportuesit ose te prodhuara, riparuara, shitura apo te marra me qira prej tij. Automjeti duhet te jete ne pronesi te operatorit ose i marre me qira pa shofer. Shoferi duhet te jete i punesuar te kontraktori i transportit. Marshruta duhet te jete deri te kontraktuesi ose prej tij dhe shoferi duhet te kete deshmi te mallit ne automjet si fature ose fletedorezim.",
        },
        {
          prompt: "Si e sigurojne autoritetet doganore qe te njejtat mallra po transportohen ashtu si specifikohet ne dokument?",
          answer:
            "Autoriteti doganor vendos pllombe doganore ne zonen e ngarkeses. Mjeti duhet te kete certifikate qe tregon se eshte i pajisur per transportin e mallrave doganore. Pllomba duhet te kete shenje identifikimi, te perdoret vetem nje here dhe çdo keqperdorim te jete i dukshem me sy te lire. Perveç pllombave mund te perdoren edhe shirita ngjites doganore.",
        },
        {
          prompt: "Specifikoni dokumentet qe kane te bejne me transportin e mallrave.",
          answer:
            "CMR, TIR-Karnet, SIL, EUL 4 dhe 5 per procedurat e tranzitit, ATA-Karnet, T2, T5, EUR 1 si deshmi e origjines se mallit, fatura, fletedorezim, flete pranimi dhe dokumenti NCT per proceduren e tranzitit.",
        },
        {
          prompt: "Cfare eshte kabotazhi?",
          answer:
            "Kabotazhi eshte transporti i udhetareve ose mallrave ndermjet dy vendeve brenda nje shteti, te cilin e kryen nje transportues i huaj qe nuk e ka seline e kompanise ne ate shtet.",
        },
        {
          prompt: "Ne cilat raste kompania e sigurimit mund te kerkoje regres nga i siguruari?",
          answer:
            "Kur mjeti perdoret per qellim tjeter nga ai i percaktuar ne kontrate, kur shoferi nuk ka patente te vlefshme ose i eshte hequr perkohesisht, kur drejton nen ndikimin e alkoolit, droges ose medikamenteve qetesuese, kur aksidenti shkaktohet me qellim, kur mjeti nuk eshte teknikisht ne rregull ose kur shoferi largohet nga vendi i aksidentit pa arsye. Shoqeria e sigurimit ka te drejte te kerkoje regres deri ne 12000 euro.",
        },
        {
          prompt: "Permblidhe shkurt dallimin kryesor mes pjeseve te provimit praktik dhe teorik ne kete test.",
          answer:
            "Pjesa e pare teston njohurite teorike me alternativa, pjesa e dyte kerkon pergjigje te drejtperdrejta me shpjegim, ndersa pjesa e trete zbaton dijen ne nje rast praktik transporti.",
        },
      ],
      partThree: {
        summary:
          "Ju do te vozisni mjetin transportues ne relacion Ljubljana (SLO) - Val Thorens (France). Do te beni 813 km ne nje kohe prej 13 ore. Ne mjet transportoni 500 kartona me bonbone.",
        subquestions: [
          {
            prompt: "Specifikoni llojin e transportit.",
            answer: "Transport nderkombetar i mallrave dy palesh (bilateral).",
          },
          {
            prompt: "Pershkruani aktivitetet tuaja para kryerjes se ketij transporti.",
            answer:
              "Kontrolloj gjendjen teknike te mjetit, kontrolloj dokumentacionin e nevojshem per transportin dhe kontrolloj pajisjet ne automjet duke marre edhe udhezimet per ngarkesen.",
          },
          {
            prompt: "Si do t'i organizoni oret e vozitjes dhe pushimet gjate kryerjes se ketij transporti?",
            answer:
              "4 ore e 30 minuta vozitje, 45 minuta pushim, 4 ore e 30 minuta vozitje, 45 minuta pushim, 1 ore vozitje, 11 ore pushim ditor ose 9 ore ne rastet e lejuara, dhe pastaj 3 ore vozitje. Zgjatja nga 9 ne 10 ore mund te perdoret vetem dy here ne jave.",
          },
          {
            prompt: "Me cilat pajisje do ta bashkangjitni dhe siguroni mallin?",
            answer:
              "Do te perdor shirita (rrypa) ose sajle per lidhjen e mallit. Nese malli eshte ne paleta, sigurohet edhe me streç foli.",
          },
          {
            prompt: "Pershkruani dokumentacionin e duhur per shoferin, automjetin dhe ngarkesen.",
            answer:
              "Dokumentacioni i shoferit: patente shoferi, pasaporte ose leternjoftim, certifikata e kualifikimit baze, KOD 95, kartela e tahografit ose shiritat e 28 diteve te kaluara dhe flet urdheresa e udhetimit. Dokumentacioni i mjetit: leja e qarkullimit, ekstrakti i licences per transport rrugor nderkombetar dhe sigurimi i automjetit. Dokumentacioni i ngarkeses: CMR, fature dhe flete dorezim.",
          },
          {
            prompt: "Pershkruani detyrat tuaja gjate pranimit dhe dorezimit te mallit, si dhe veprimin ne rast kur malli leviz dhe rrezikon stabilitetin e mjetit.",
            answer:
              "Gjate pranimit paraqitem te personi pergjegjes, vendos mjetin ne vendin e ngarkimit, hap hapesiren ngarkuese, kontrolloj procesin e ngarkimit, numerimin e pakove, saktesine e dokumenteve dhe cilesine e mallrave, pastaj mbyll hapesiren dhe firmos dokumentacionin. Gjate dorezimit paraqitem te personi pergjegjes, vendos mjetin ne vendin e shkarkimit, hap hapesiren, kontrolloj shkarkimin, mbyll mjetin dhe nenshkruaj dokumentacionin. Nese malli ka levizur, ndaloj ne vend te sigurt, perpiqem ta zgjidh problemin, njoftoj personin pergjegjes ne kompani dhe ne rast demtimi e shenoj ne flete ngarkese.",
          },
        ],
      },
    },
    2: {
      name: "Testi 2",
      partOne: [
        {
          prompt: "Ne cfare menyre e kane te rregulluar kamionet lubrifikimin ne pjeset e automjetit qe kerkojne lubrifikim?",
          options: [
            "Lubrifikimi kryhet ne cdo servis te rregullt.",
            "Lubrifikimi kryhet nga shoferi nese eshte e nevojshme.",
            "Automjetet kane nje sistem qendror te lubrifikimit te integruar.",
            "Automjetet moderne nuk kane nevoje per lubrifikim.",
          ],
          correctIndex: 2,
        },
        {
          prompt: "Cfare duhet te beje shoferi nese sistemi drejtues hidraulik deshton (servo timoni)?",
          options: [
            "Shoferi duhet te ndaloje automjetin menjehere pasi automjeti nuk mund te drejtohet me, dhe defekti te korrigjohet sa me shpejte.",
            "Shoferi ndalon ne nje vend te pershtatshem pasi drejtimi deshton ngadale, dhe defekti te korrigjohet sa me shpejte.",
            "Shoferi nuk ben asgje sepse automjetet nuk kane sistem drejtues hidraulik.",
            "Asgje ne ate moment pasi sistemi eshte ende duke punuar, dhe defekti te korrigjohet sa me shpejte.",
          ],
          correctIndex: 1,
        },
        {
          prompt: "Qfare mund te shkaktohet nga nderrimi i shtyllave ne bateri (akumulator) kur ndizni motorrin me kabllo ndihmese?",
          options: [
            "Asgje speciale.",
            "Eksplozion te baterise.",
            "Ndezje te motorrit.",
            "Nuk shkakton asgje tjeter vecse nje shkendije te vogel.",
          ],
          correctIndex: 1,
        },
        {
          prompt: "Qfare roli luan akumulatori? (cilindri fleksibil akumulues)",
          options: [
            "Qe automjeti nuk mund te levizet jashte vendit derisa te kete presion te mjaftueshem ne sistemin e frenave.",
            "Per te akumuluar ajrin ne frena.",
            "Per te na ndihmuar me frenimin.",
            "Sistemi i frenimit funksionon ne menyre me te barabarte.",
          ],
          correctIndex: 1,
        },
        {
          prompt: "Cfare tregon instrumenti mates ne figure? Me cilin sistem te automjetit eshte i lidhur?",
          options: [
            "Presioni i ajrit ne sistemin e frenave.",
            "Niveli i karburantit ne rezervuar.",
            "Niveli i vajit te motorit.",
            "Temperaturen e motorrit.",
          ],
          correctIndex: 0,
        },
        {
          prompt: "Kur konsiderohen kushtet e dimrit ne rruge?",
          options: [
            "Kur bora ngjitet ne rruge gjate reshjeve ose kur rruga eshte me deboreshte apo ujenete.",
            "Kur rruga eshte me debore ose e akullt.",
            "Kur rruga eshte me akull dhe fryn ere.",
            "Kur bora ngjitet ne rruge ose kur rruga eshte me debore dhe akull.",
          ],
          correctIndex: 3,
        },
        {
          prompt: "Shpejtesia maksimale e lejuar e automjetit ne nje zone ku shpejtesia eshte e kufizuar eshte:",
          options: ["10 km/h", "20 km/h", "30 km/h", "40 km/h"],
          correctIndex: 2,
        },
        {
          prompt: "Gjatesia maksimale e nje automjeti tjeter pervec autobusit eshte:",
          options: ["11 m", "12 m", "13 m", "14 m"],
          correctIndex: 1,
        },
        {
          prompt: "Masa maksimale e lejuar e mjetit motorik treshe (tre akse) eshte:",
          options: ["24 t", "25 t", "26 t", "27 t"],
          correctIndex: 2,
        },
        {
          prompt: "Qfare duhet te beje shoferi i kamionit kur ndodhin kushtet e dimrit dhe perdor goma verore me zinxhire ose pajisje ekuivalente?",
          options: [
            "Ai duhet te ngase me kujdes shtese.",
            "Nese nuk mund te niset me automjetin, vendos zinxhire ose pajisje shtese ekuivalente.",
            "Nese nuk mund te drejtoje me automjetin, vendos zinxhire ose pajisje ekuivalente.",
            "Ai duhet te vendose menjehere zinxhire ose pajisje ekuivalente te automjetit.",
          ],
          correctIndex: 1,
        },
        {
          prompt: "Cilat forca duhet te transmetohen duke siguruar ngarkesen gjate ngasjes?",
          options: [
            "Tendenca e ngarkeses per te levizur perpara, mbrapa, lart, poshte.",
            "Tendenca e ngarkeses per te levizur perpara dhe mbrapa.",
            "Tendenca e ngarkeses per te levizur majtas dhe djathtas.",
            "Tendenca e ngarkeses per te levizur mbrapa, perpara, majtas dhe djathtas.",
          ],
          correctIndex: 3,
        },
        {
          prompt: "Sipas udhezimeve evropiane per ngarkimin e ngarkesave, kur transportoni trungje deri ne nje gjatesi prej 3.3 m, te pakten:",
          options: [
            "Lidhja nuk eshte e nevojshme.",
            "Nje here.",
            "Dy here.",
            "Tri here.",
          ],
          correctIndex: 2,
        },
        {
          prompt: "A e vleresoni se ngarkesa ne figuren e dhene eshte shperndare si duhet apo jo?",
          options: [
            "E majta eshte e sakte.",
            "E djathta eshte e sakte.",
            "Te dyjat jane te pasakta.",
            "Te dyja jane te sakta.",
          ],
          correctIndex: 1,
        },
        {
          prompt: "Nese nje dergues ju dorezon mallra te rrezikshme per transport, ai duhet:",
          options: [
            "Pervec mallrave te paraqese edhe sigurimin e duhur per mallrat e rrezikshme.",
            "Te pershkruaje substancen e rrezikshme dhe nese eshte e nevojshme te kete masa sigurie.",
            "Te jape udhezime te sakta se ne cilen rruge te kryhet transporti.",
            "Pervec mallrave te siguroje aparate per fikjen e zjarrit dhe llamba.",
          ],
          correctIndex: 1,
        },
        {
          prompt: "Cilat mjete transporti marrin pjese ne transportin e kombinuar (hucke-pack)?",
          options: [
            "Rrugore dhe hekurudhore.",
            "Rrugor dhe detar.",
            "Kontejnera.",
            "Mjetet e transportit ajror.",
          ],
          correctIndex: 0,
        },
        {
          prompt: "Cili nga pohimet e meposhtme eshte me i sakte?",
          options: [
            "Transportuesi eshte pergjegjes per humbjen e ngarkeses.",
            "Transportuesi eshte pergjegjes per humbjen ose demtimin e ngarkeses.",
            "Transportuesi eshte pergjegjes per humbjen e ngarkeses, demtimin, vonesen dhe procedura te teperta doganore.",
            "Transportuesi eshte pergjegjes per humbjen ose demtimin e ngarkeses dhe per vonese.",
          ],
          correctIndex: 3,
        },
        {
          prompt: "Ne karnetin TIR keni shenuar te dhena te pasakta dhe i keni zbardhur e shenuar te reja. A keni bere gjene e duhur?",
          options: [
            "E sakte, nese informacioni i korrigjuar eshte vertetuar nga autoriteti doganor.",
            "Te dhenat ne karnetin TIR nuk guxojme t'i permirsojme.",
            "Po.",
            "Jo.",
          ],
          correctIndex: 3,
        },
        {
          prompt: "Ne cfare duhet te kemi kujdes te vecante ne procedurat doganore?",
          options: [
            "Te jemi te sjellshem me autoritetet doganore.",
            "Per te gjetur zyren doganore te duhur.",
            "Qe doganieri te na ktheje te gjitha dokumentet dhe te jene te vulosura.",
            "T'i kryejme procedurat doganore sa me shpejte.",
          ],
          correctIndex: 2,
        },
        {
          prompt: "A eshte i duhur leshimi i nje liste mallrash per transportin vendas - te brendshem?",
          options: ["Jo", "Po", "Varet nga lloji i transportit", "Per transport urgjent po"],
          correctIndex: 1,
        },
        {
          prompt: "A vlen konventa CMR perderisa mallrat transportohen pa pagese?",
          options: [
            "Po, nese transporti kryhet ne zonen e BE-se.",
            "Po.",
            "Jo.",
            "Nuk ka efekt ne vlefshmeri.",
          ],
          correctIndex: 1,
        },
        {
          prompt: "Po transportoni mallra prej Sllovenise ne panair ne Beograd. Cilin dokument doganor do te perdorni?",
          options: ["Fletushken EUR 1", "TIR fletoren", "Fletushken 302", "ATA fletoren"],
          correctIndex: 3,
        },
        {
          prompt: "Cfare mund te beje shoferi per te zvogeluar mundesine e kontrabandimit te emigranteve dhe lloje te tjera te krimit?",
          options: [
            "Nuk shkon ne nje udhetim per nje kohe te gjate.",
            "Drejton sebashku me bashkeshoferin.",
            "Nuk kryen transport pa shoqerimin e policise.",
            "Per aq sa eshte e mundur te kete kujdes ndaj automjetit gjate drejtimit.",
          ],
          correctIndex: 3,
        },
        {
          prompt: "Transportuesi slloven ngarkoi mallrat ne Frankfurt dhe i shkarkoi ne Bruksel. Cfare lloji transporti kreu?",
          options: [
            "Transport dypalesh.",
            "Transport tranzit.",
            "Kabotazh.",
            "Transport ne vendet e treta.",
          ],
          correctIndex: 3,
        },
        {
          prompt: "Kush eshte garantuesi kombetar slloven per procedurat ATA nga i cili mund te merrni edhe fletore ATA?",
          options: [
            "Oda e mjeshterise se Sllovenise (OZS).",
            "Oda e tregtise se Sllovenise (GZS).",
            "GIZ Intertransport Ljubljana.",
            "Zyra gjenerale doganore (GCU).",
          ],
          correctIndex: 1,
        },
        {
          prompt: "Pushimi qe shoferi duhet te kete pas kater ore e gjysme vozitje mund te zevendesohet sipas dispozitave te BE-se me:",
          options: [
            "20 minuta + 25 minuta",
            "15 minuta + 15 minuta + 15 minuta",
            "15 minuta + 30 minuta",
            "30 minuta + 15 minuta",
          ],
          correctIndex: 2,
        },
        {
          prompt: "A mund te beje shoferi pushimin ditor ne shtratin e automjetit?",
          options: [
            "Po, nese automjeti eshte i pajisur me shtrat dhe nese automjeti eshte i ndalur.",
            "Po, nese automjeti eshte i pajisur me shtrat.",
            "Po, por vetem nese ngas nje ekuipazh me nje shofer tjeter.",
            "Jo.",
          ],
          correctIndex: 0,
        },
        {
          prompt: "Krimi kryesor ne migrimin ilegal eshte:",
          options: [
            "Udhetimi pa bilete.",
            "Kalimi i kufirit shteteror.",
            "Kalimi i kufirit shteteror ilegal.",
            "Kalimi i shtetit.",
          ],
          correctIndex: 2,
        },
        {
          prompt: "Per arsye shendetesore, kur mbajme timonin, duart tona duhet te jene:",
          options: [
            "Te zgjatura.",
            "Te forta.",
            "Pak te thyera.",
            "Ne pjesen e brendshme te timonit.",
          ],
          correctIndex: 2,
        },
        {
          prompt: "Cfare shkaktohet nga aktiviteti i pamjaftueshem fizik i shoferit ne aspektin e mireqenies mendore?",
          options: [
            "Shume kilograme dhe shume holesterol.",
            "Levizshmeri e pamjaftueshme.",
            "Me pak durim, humor te keq dhe humbje te kembenguljes.",
            "Me pak aftesi per te perceptuar.",
          ],
          correctIndex: 2,
        },
        {
          prompt: "Kur transportojme mallra qe jane kimikisht ose biologjikisht te ndjeshme ndaj ndryshimeve te motit dhe temperatures, flasim per:",
          options: [
            "Transport te jashtezakonshem.",
            "Transport te mallrave qe prishen shpejte.",
            "Transport te ushqimit te ndjeshem.",
            "Transport te mallrave te rrezikshme.",
          ],
          correctIndex: 1,
        },
      ],
      partTwo: [
        {
          prompt: "Cfare duhet te kontrolloni ne automjet para ngarkimit te mallit, qe te sigurojme dhe fiksojme me lehtesi pas ngarkimit dhe gjate transportit? (3 pergjigje)",
          answer:
            "Para ngarkimit kontrollojme pastertine e hapesires ngarkuese, gjendjen e dyshemese, anesoreve, karroserise, cerades dhe hallkave. Kontrollojme nese kemi pajisje te mjaftueshme dhe ne gjendje te mire per sigurimin e ngarkeses. Duhet te dime peshen e ngarkeses, llojin e mallit, ambalazhin, piken e gravitetit, dimensionet, formen dhe rreshqitjen e mundshme.",
        },
        {
          prompt: "Ne cfare duhet te kete kujdes shoferi kur vozit automjetin e ftohte dhe kur motori eshte i ngarkuar qe te mos demtoje turbo mbushesin?",
          answer:
            "Ne fillim te vozitjes, derisa automjeti eshte i ftohte, duhet te vozisim me numer me te vogel rrotullimesh derisa automjeti te nxehet. Gazi duhet shtypur gradualisht qe pompa e vajit ta qarkulloje vajin ne pikat e lubrifikimit. Nese motori i ftohte ngarkohet me shume rrotullime, kushinetat mund te mbeten te thata dhe te palubrifikuara.",
        },
        {
          prompt: "Shkruani sa me shume masa per te zvogeluar harxhimin e karburantit.",
          answer:
            "Fikim motorin gjate ndalimeve me te gjata, vozisim me rrotullime mesatare, perdorim racionalisht transmisionin, levizim sa me barabarte, kontrollojme presionin e gomave, servisojme rregullisht automjetin, montojme spoilera aerodinamike, vezhgojme trafikun para automjetit, shmangim frenimet e ashpra, perdorim drejt tempomatin dhe retarderin, si dhe navigacionin e kompjuterin e udhetimit.",
        },
        {
          prompt: "Si duhet te shenohet nje kamion me rimorkio qe ndalon ne rruge per shkak te nje prishjeje?",
          answer:
            "Shoferi duhet te ndeze menjehere dritat paralajmeruese dhe te vendose dy trekendesha sigurie ne distance te duhur nga automjeti. Ato duhet te jene ne distance qe shoferet qe vijne pas te kene kohe te mjaftueshme per ta verejtur, ndalur dhe kaluar ne menyre te sigurt. Trekendeshat vendosen paralel me njeri-tjetrin ne gjeresine e mjetit.",
        },
        {
          prompt: "Cfare dokumenti duhet te kete drejtuesi i automjetit per te perdorur automjetin me tahograf dixhital? Kush e leshon dhe si perdoret?",
          answer:
            "Per te perdorur tahografin dixhital shoferi duhet te kete karten e shoferit (karte inteligjente), e leshuar nga organi i autorizuar ne R. Sllovenise. Gjate vozitjes karta duhet te futet ne tahograf. Shoferi mund te kete vetem nje karte dhe per zevendesim duhet te aplikoje 15 dite para skadimit te kartes se vjeter.",
        },
        {
          prompt: "Shoferi perfundoi punen javore te premten ne ora 22:00 dhe beri 48 ore vozitje. Kur mund te vazhdoje dhe sa ore mund te vozise javen e ardhshme?",
          answer:
            "E premte ora 22:00 + 45 ore pushim i rregullt javor = e diel ora 19:00. Pra, shoferi mund te vazhdoje te diel ne ora 19:00. Javen e ardhshme mund te vozise 42 ore, sepse 90 - 48 = 42.",
        },
        {
          prompt: "Si kryhet trajnimi i rregullt i shoferit, kush e kryen, sa zgjat dhe me cfare dokumenti deshmohet?",
          answer:
            "Trajnimi i rregullt zgjat 35 ore cdo 5 vjet ose 7 ore ne vit dhe kryhet nga qendra te autorizuara trajnimi. Ne baze te certifikates se trajnimit apo kualifikimit baze, shoferi regjistron KOD 95 ne patente ose ne karte speciale per nje periudhe 5-vjecare. Trajnimi zhvillohet teorikisht dhe praktikisht.",
        },
        {
          prompt: "Cfare dokumente duhet te kete shoferi ne automjet gjate drejtimit sipas Ligjit per Transportin Rrugor - ZPCP?",
          answer:
            "Patente shoferi te vlefshme me KOD 95, vertetim punesimi per shtetas jo-BE, leja e qarkullimit ose marreveshje qiraje/leasigu, kopje e licences, leje e posacme per autobuse nese kryejne transport per nevoja personale, dhe leje shtese nese eshte e nevojshme.",
        },
        {
          prompt: "Shkruaj masat per te ruajtur aftesine psiko-fizike per te drejtuar automjetin.",
          answer:
            "Te ushqyerit e rregullt, kujdesi per kondicionin fizik, pushimi cilesor, ruajtja e aftesive psikofizike gjate vozitjes, respektimi i kohes se vozitjes dhe pushimeve, ecja dhe aktiviteti fizik gjate ndalesave me te gjata, pirja e ujit dhe lengjeve joalkoolike, ajrosja e kabines dhe shmangia e duhanit, si dhe kontrollet e rregullta mjekesore.",
        },
        {
          prompt: "Per cilat lloje transporti ose mallrash eshte konventa ATA dhe me cfare dokumenti behen keto transporte?",
          answer:
            "Marreveshja ATA vlen per eksport/import te perkohshem te mallrave si mallra per panair, mostra dhe mallra profesionale. Dokumenti i nevojshem eshte ATA Carnet. Garantuesi kombetar slloven dhe botuesi i fletores ATA eshte Dhoma e Tregtise se Sllovenise dhe garanton kthimin e mallit ne vendin e origjines.",
        },
        {
          prompt: "Cilat lloje te mallrave mbi sasi te caktuara nuk mund te transportohen me librin TIR ne zonen BE?",
          answer:
            "BageTi te gjalla, mish vici, qumesht dhe salce kosi, gjalpe, banane te fresketa, alkool dhe pije alkoolike, si dhe duhan e produkte duhani.",
        },
        {
          prompt: "Per cfare duhet te udhezohet personeli drejtues ne raste aksidenti?",
          answer:
            "Transportuesi duhet ta udhezoje personelin mbi sjelljen ne vendin e aksidentit, obligimin per te informuar ndihmen e shpejte, plotesimin e dokumentacionit te nevojshem, njohurine e shkalles se pare, te dyte dhe te trete te aksidenteve, si dhe mbi detyrimin qe shoferet t'i njohin keto rregulla.",
        },
      ],
      partThree: {
        summary:
          "Ju do te vozisni nje kamion ne relacionin Stamboll (Turqi) - Maribor (SLO). Do te beni 1425 km ne kohezgjatje prej 22 oresh. Ne mjet mbani 200 kartone produkti tekstili. Tranzitin do ta beni me fletoren TIR.",
        subquestions: [
          {
            prompt: "Specifikoni llojin e transportit.",
            answer: "Transport nderkombetar mallrash dy palesh (bilateral).",
          },
          {
            prompt: "Pershkruani aktivitetet tuaja para se te kryeni kete transport.",
            answer:
              "Kontrolloj dokumentacionin e nevojshem, gjendjen teknike te automjetit, nese i kam te gjitha pajisjet e nevojshme ne automjet dhe njihem me flet-urdheresen per ngarkim.",
          },
          {
            prompt: "Si do t'i planifikoni oret e udhetimit dhe pushimet per ta kryer kete transport?",
            answer:
              "4 ore e 30 minuta vozitje, 45 minuta pushim, 4 ore e 30 minuta vozitje, 45 minuta pushim, 1 ore vozitje, 11 ose 9 ore pushim ditor sipas mundesive te lejuara, pastaj perseritet cikli: 4 ore e 30 minuta vozitje, 45 minuta pushim, 4 ore e 30 minuta vozitje, 45 minuta pushim, 1 ore vozitje, 11 ore pushim ditor dhe ne fund edhe 2 ore vozitje.",
          },
          {
            prompt: "Me cfare pajisje do ta fiksoni ngarkesen?",
            answer: "Do te perdorja streç foli - PVC ose canta qe fryhen.",
          },
          {
            prompt: "Pershkruani dokumentacionin e duhur per drejtuesin, mjetin dhe ngarkesen.",
            answer:
              "Dokumentacioni i shoferit: patente shoferi, pasaporte ose leternjoftim, certifikata e kualifikimit baze, KOD 95, shiritat e tahografit per 28 ditet e kaluara ose kartela e tahografit dhe flet-urdheresa e udhetimit. Dokumentacioni i mjetit: leja e qarkullimit, ekstrakti i licences dhe leje per drejtim nen garancionin TIR. Dokumentacioni i ngarkeses: CMR, fature, flete dorezim dhe TIR Karnet.",
          },
          {
            prompt: "Si do te veproni nese gjate rruges ngarkesa permbysent ne kamion, zbuloni te dhena te pasakta ne fletoren TIR, pranoni/dorezoni ngarkesen dhe kryeni kontrollin doganor?",
            answer:
              "Ndaloj mjetin ne vend te sigurt, telefonoj administraten doganore me te afert, e riorganizoj dhe e siguroj serish ngarkesen, raportoj te punedhenesi dhe njoftoj pronarin e ngarkeses e kompanine e sigurimit nese ka demtim te madh. Te dhenat ne TIR nuk korrigjohen me zbardhues; korrigjimet duhet te vertetohen nga dogana, ndersa seksionet 1-3 ne faqen e pare mund t'i korrigjoje vetem organi i autorizuar leshues. Gjate pranimit dhe dorezimit paraqitem te personi pergjegjes, kontrolloj procesin, numrin e pakove, dokumentet dhe cilesine e mallit, pastaj nenshkruaj dokumentacionin. Ne kontrollin doganor dorezoj dokumentet, pres udhezime, ndihmoj ne inspektim dhe ne asnje menyre nuk demtoj ose largoj pllomben pa pranine e doganierit.",
          },
        ],
      },
    },
    3: {
      name: "Testi 3",
      partOne: [
        {
          prompt: "A eshte e lejuar ngasja e automjetit ne kthes kur eshte i leshuar bllokimi diferencial?",
          options: ["Po", "Jo", "Po, me shume kujdes.", "Kthimi behet ne shpejtesi te ulet."],
          correctIndex: 1,
        },
        {
          prompt: "Pse nuk duhet te mbajme pjesen nga qelqi me gishta kur nderrojme llamben?",
          options: [
            "Ne pjesen e qelqit mund te behen qarje nga tensioni.",
            "Pas nxehjes, reflektori terhiqet nga shtresa e yndyres.",
            "Nxihet - erresohet.",
            "Me duar te pasterta nuk eshte problem.",
          ],
          correctIndex: 0,
        },
        {
          prompt: "Qfare kuptojme me mbushje te thate te baterise (dry-charge)?",
          options: [
            "Bateria humbi ngarkesen e acidit sulfurik per shkak te qendrimit te gjate.",
            "Bateria furnizohet e ngarkuar dhe duhet te shtohet vete para perdorimit.",
            "Eshte nje bateri e ngarkuar plotesisht.",
            "Pllakat e baterise jane ne gjendje te ngarkuar dhe nevojitet vetem mbushja.",
          ],
          correctIndex: 3,
        },
        {
          prompt: "Me sa bar mbushim gomat?",
          options: [
            "Aq sa eshte e pershkruar nga prodhuesi i gomave.",
            "Aq sa eshte e pershkruar nga prodhuesi i automjetit.",
            "Aq sa eshte e pershkruar nga prodhuesi i automjetit dhe ai i gomave.",
            "Gomat duhet te jene te mbushura deri 3 bar.",
          ],
          correctIndex: 1,
        },
        {
          prompt: "Si eshte e harxhuar goma nese presioni i gomave eshte shume i ulet?",
          options: [
            "Goma eshte e harxhuar ne menyre te pabarabarte, e shkallezuar.",
            "Te harxhuara jane skajet e jashtme te gomes.",
            "Te harxhuara jane te dy skajet e gomes.",
            "Te harxhuara jane skajet e brendshme te gomes.",
          ],
          correctIndex: 2,
        },
        {
          prompt: "Sa shpesh e nderrojme pastruesin e ajrit (filtrin)?",
          options: [
            "Ne cdo servis.",
            "Nje here ne vit.",
            "Kur eshte pastruesi i zene, e nderrojme pavaresisht kilometrave te kaluara.",
            "Dy here ne vit.",
          ],
          correctIndex: 2,
        },
        {
          prompt: "Cili nga gazrat e meposhtem eshte aq toksik saqe edhe nje perqendrim i vogel ne ambiente te mbyllura mund te shkaktoje dhimbje koke dhe te vjella?",
          options: [
            "N2 - azotit",
            "CO2 - dioksid karboni",
            "H2O - avull i zakonshem",
            "CO - oksid karboni",
          ],
          correctIndex: 3,
        },
        {
          prompt: "Si e perdorim aparatin e fikjes se zjarrit 'S'?",
          options: [
            "Marrim aparatin, hapim valvulen dhe fillojme me fikjen.",
            "Marrim aparatin, terheqim siguresen, shtypim leven, presim 2 - 3 sekonda, pastaj fillojme me fikje.",
            "Marrim aparatin, terheqim siguresen, hapim valvulen dhe fillojme.",
            "Nuk ka udhezime te vecanta.",
          ],
          correctIndex: 1,
        },
        {
          prompt: "Detyra e turbo mbushesit te shkarkimi i plinit ne nje motorr nafte eshte:",
          options: [
            "Shperndarje karburant nafte.",
            "Zvogelon proporcionin e dioksidit te karbonit ne gazrat e shkarkimit.",
            "Zvogelon proporcionin e oksideve te azotit ne gazrat e shkarkimit.",
            "Rritje e mbushjes se cilindrave me ajer.",
          ],
          correctIndex: 3,
        },
        {
          prompt: "Sa eshte kapaciteti mbajtes i nje euro-palete nga druri?",
          options: ["1000 kg", "500 kg", "1200 kg", "1500 kg"],
          correctIndex: 3,
        },
        {
          prompt: "A mund te perdoret nje ashensor makine nga nje shofer i cili nuk eshte posaçerisht i trajnuar per te?",
          options: [
            "Po, por vetem gjate shkarkimit.",
            "Jo.",
            "Po.",
            "Rekomandohet shmangia e ketyre detyrave.",
          ],
          correctIndex: 1,
        },
        {
          prompt: "Gjate ngarkimit te llojeve dhe peshave te ndryshme te ngarkeses ne automjet, duhet pasur kujdes qe:",
          options: [
            "Te ngarkohen ne menyre alternative.",
            "Me pare te ngarkohet ngarkesa me e madhe.",
            "Ngarkesat me te renda te ngarkohen nen ato me te lehtat.",
            "Se pari ngarkohet nje ngarkese me e lehte.",
          ],
          correctIndex: 2,
        },
        {
          prompt: "Qfare duhet te beje shoferi nese ne kontejner ngarkohen lengje gerryese?",
          options: [
            "Asgje.",
            "Kontrollimi i kontejnerit, sipas nevojes te pastrohet.",
            "Kontejneri duhet te jete i regjistruar dhe i fiksuar mire.",
            "Pjesa e poshtme e kontejnerit duhet te sperkatet me tallash ose material te ngjashem.",
          ],
          correctIndex: 1,
        },
        {
          prompt: "Sa eshte koha mesatare javore e punes per nje punetor te levizshem gjate kater muajve?",
          options: ["48 ore", "56 ore", "60 ore", "40 ore"],
          correctIndex: 0,
        },
        {
          prompt: "Orari i rregullt i pushimit duhet te jete se paku 11 ore. Si mund te ndahet ne dy periudha te panderprera?",
          options: [
            "Periudha e pare prej 3 oresh, periudha e dyte prej 9 oresh.",
            "Periudha e pare prej 2 oresh, periudha e dyte prej 9 oresh.",
            "Periudha e pare prej 3 oresh, periudha e dyte prej 8 oresh.",
            "Periudha e pare prej 3 oresh, periudha e dyte prej 6 oresh.",
          ],
          correctIndex: 0,
        },
        {
          prompt: "Kush eshte pergjegjes per organizimin e punes se shoferit ne menyre qe shoferi te respektoje kohen e vozitjes, pushimeve dhe periudhave te pushimit?",
          options: [
            "Shoferi dhe drejtori i kompanise se transportit.",
            "Kompania e transportit.",
            "Drejtori i kompanise se transportit.",
            "Shoferi.",
          ],
          correctIndex: 1,
        },
        {
          prompt: "Shoferi ka keto ore drejtimi: java e pare 56 ore, java e dyte 34 ore, java e trete 25 ore. Sa ore mund te beje ne javen e katert?",
          options: ["25 ore", "56 ore", "65 ore", "31 ore"],
          correctIndex: 3,
        },
        {
          prompt: "Kohezgjatja totale e trajnimit te rregullt te shofereve cdo pese vjet eshte:",
          options: ["Se paku 7 ore.", "Se paku 14 ore.", "Se paku 35 ore.", "Se paku 53 ore."],
          correctIndex: 2,
        },
        {
          prompt: "Qfare eshte nje parking publik per kamiona ose autobusa?",
          options: [
            "Eshte nje parking qe duhet te sigurohet nga transportuesi per automjetet e tij.",
            "Eshte nje vend parkimi ne qytete me te medha me pagese sipas rregullores se qytetit.",
            "Eshte nje vend parkimi ku eshte i siguruar parkimi dhe kushtet minimale higjienike per personelin drejtues.",
            "Eshte nje parking me pagese i shenuar me vije ngjyre te kalter.",
          ],
          correctIndex: 2,
        },
        {
          prompt: "Qfare eshte kabotazhi?",
          options: [
            "Transport autotaksi i kryer nga nje transportues vendas ne baze te nje leje.",
            "Transport i udhetareve ose mallrave nen licence nga nje transportues vendas ne trafikun nderkombetar.",
            "Transport i udhetareve ose mallrave midis vendeve individuale brenda nje vendi nga nje transportues vendas.",
            "Transport i udhetareve ose mallrave midis vendeve individuale brenda nje vendi nga nje transportues i huaj.",
          ],
          correctIndex: 3,
        },
        {
          prompt: "Per cilat lloje te automjeteve nuk kerkohet licence dhe kopje e licences ne kryerjen e transportit?",
          options: [
            "Deri ne 3,5 t te mases maksimale te lejuar.",
            "Deri ne 7 t te mases maksimale te lejuar.",
            "Deri ne 12 t te mases maksimale te lejuar.",
            "Deri ne 16 t te mases maksimale te lejuar.",
          ],
          correctIndex: 0,
        },
        {
          prompt: "A eshte kopja e licences e transferueshme tek automjetet individuale ne pronesi te licensuarit?",
          options: [
            "Nje kopje e licences lidhet me nje automjet individual dhe per kete arsye nuk eshte e transferueshme.",
            "Nje kopje e licences eshte e transferueshme tek automjetet qe nuk jane ne pronesi te licensuarit.",
            "Nje kopje e licences nuk eshte e transferueshme tek automjetet individuale ne pronesi te licensuarit.",
            "Nje kopje e licences eshte e transferueshme tek automjetet individuale ne pronesi te licensuarit.",
          ],
          correctIndex: 0,
        },
        {
          prompt: "Kur duhet punedhenesi te regjistroje punetorin per sigurim shoqeror?",
          options: [
            "Ne diten e fillimit te punes sipas kontrates se punes.",
            "Brenda 8 diteve nga fillimi i punes.",
            "Kur behet marreveshja per kontrate pune.",
            "Brenda 30 diteve pas marreveshjes se kontrates se punes.",
          ],
          correctIndex: 0,
        },
        {
          prompt: "Cila eshte e drejta e kompanise se sigurimit nga nje rast demtimi nese automjeti drejtohej nga nje shofer pa patente te vlefshme?",
          options: [
            "Kompania nuk mund te rimbursoje shumen e paguar nga shoferi.",
            "Kompania ka te drejte te kerkoje rimbursim deri ne 1.500.000 EUR.",
            "Kompania ka te drejte te kerkoje rimbursim deri ne 12.000 EUR.",
            "Kompania nuk mbulon demin e te demtuarit.",
          ],
          correctIndex: 2,
        },
        {
          prompt: "A duhet te kete transportuesi vendas akte te brendshme qe detajojne kontrollin e brendshem?",
          options: [
            "Po, por vetem nje transportues qe kryen transport per nevojat e veta.",
            "Po.",
            "Jo, sepse kontrolli i brendshem rregullohet me hollësi me ligj.",
            "Jo.",
          ],
          correctIndex: 1,
        },
        {
          prompt: "Cfare merr persiper transportuesi me kontraten e transportit?",
          options: [
            "Te kryeje transportin ne perputhje me kontraten nese eshte e mundur.",
            "Te kryeje transportin ne perputhje me kontraten ne menyre cilesore dhe ne kohe.",
            "T'i dorezoje mallrat per transport.",
            "Pas marrjes se mallit do ta paguaje ate dhe do ta ruaje.",
          ],
          correctIndex: 1,
        },
        {
          prompt: "A eshte e mundur te kryhet transporti me disa automjete me nje karnet TIR?",
          options: [
            "Nuk eshte e mundur, sepse nuk eshte i mundur kontrollimi i sakte.",
            "Po.",
            "Jo.",
            "Nuk eshte e mundur sepse nuk e lejon marreveshja TIR.",
          ],
          correctIndex: 1,
        },
        {
          prompt: "Cfare mund te beje shoferi per te zvogeluar mundesine e kontrabandimit te emigranteve te paligjshem dhe lloje tjera te krimit?",
          options: [
            "Shpesh therret ne shtepi ose ne seline e kompanise.",
            "Drejton sebashku me bashkeshoferin.",
            "Nuk kryen transport pa shoqerine e policise.",
            "Sigurohet qe automjeti te jete sa me pak pa mbikqyrje.",
          ],
          correctIndex: 3,
        },
        {
          prompt: "Kush duhet te kujdeset per pune te sigurt?",
          options: [
            "Perdoruesi.",
            "Nje roje trafiku ne nje garazh.",
            "Shoferi dhe punetori i levizshem.",
            "Shoferi dhe punedhenesi i tij.",
          ],
          correctIndex: 3,
        },
        {
          prompt: "Kur duhet te therrasim policine ne rast aksidenti trafiku me deme te vogla?",
          options: [
            "Gjithmone.",
            "Ne rast se nuk mund te bien dakord kush eshte shkaktari i aksidentit.",
            "Asnjehere.",
            "Ne rast se ndonjeri nga pjesemarresit refuzon te jape te dhenat.",
          ],
          correctIndex: 1,
        },
      ],
      partTwo: [
        {
          prompt: "Cilat forca veprojne ne automjet gjate drejtimit?",
          answer:
            "Forca gravitacionale (forca e peshes), forca e ferkimit dhe forca centrifugale.",
        },
        {
          prompt: "Cila eshte procedura per shkeputjen e rimorkios?",
          answer:
            "Fikim motorin, aktivizojme frenen ndihmese ne mjetin terheqes dhe rimorkio, vendosim pyka, terheqim lidhjen e kuqe te ajrit, pastaj te verdhen dhe lidhjen elektrike, ngrijme pyken dhe levizim rimorkion.",
        },
        {
          prompt: "Cili eshte rregulli baze ne rast se perfshihemi ne nje aksident trafiku ose hasim ne te?",
          answer:
            "Sigurojme vendin e aksidentit, vleresojme demin, ndihmojme te lenduarit ne menyren e duhur, telefonojme ndihmen mjekesore dhe policine, plotesojme raportin evropian dhe shkembejme informacionet me pjesemarresit e tjere.",
        },
        {
          prompt: "Shkruaj sa me shume masa te mundshme per te zvogeluar harxhimin e karburantit.",
          answer:
            "Fikim motorin gjate ndalimeve me te gjata, vozisim me rrotullime mesatare, perdorim racionalisht transmisionin, levizim sa me barabarte, kontrollojme rregullisht presionin e gomave, servisojme automjetin, montojme spoilera aerodinamike, vezhgojme trafikun dhe reagojme ne kohe, shmangim frenimet e ashpra, perdorim drejt tempomatin dhe retarderin, si dhe navigacionin e kompjuterin e udhetimit.",
        },
        {
          prompt: "Cfare dokumenta duhet te kete shoferi ne automjet gjate drejtimit ne perputhje me Ligjin e Transportit Rrugor - ZPCP?",
          answer:
            "Patente shoferi te vlefshme me KOD 95, vertetim punesimi per shtetas jo-BE, leja e qarkullimit ose marreveshje qiraje/leasingu, kopje e licences, leje shtese nese eshte e nevojshme, leje e posacme per autobuse ne transport per nevoja personale, kontrate pune per drejtues autobusi ose taksie sipas rastit.",
        },
        {
          prompt: "Tregoni cilat pajisje te brendshme te makines ndihmojne ne kontrollin dhe zvogelimin e harxhimit te karburantit.",
          answer:
            "Eko matesi i rrotullimeve, transmisioni, tempomati, shapka e gazit, navigacioni, kompjuteri i udhetimit dhe kilometrazhi.",
        },
        {
          prompt: "Cfare lloji te paketimit njeh?",
          answer:
            "Ambalazhat ndahen ne transportuese dhe konsumatore (komerciale). Materialet mund te jene leter, metal, qelq, qeramike, dru, plastike, tekstil dhe kombinime nga materiale te ndryshme.",
        },
        {
          prompt: "Shkruani dhe shpjegoni rolin e pajisjeve te transportit ne transportin e mallrave.",
          answer:
            "Paketa, paleta dhe kontejneret mbrojne ngarkesen nga humbja, demtimi dhe vjedhja.",
        },
        {
          prompt: "Sa here dhe per sa kohe shoferi mund te zgjas udhetimin dhe me sa mund ta shkurtoje pushimin ditor ne nje jave te caktuar?",
          answer:
            "Shoferi mund t'i zgjase oret e vozitjes nga 9 ne 10 ore dy here brenda javes. Pushimin ditor mund ta shkurtoje tri here brenda javes, nga 11 ore ne 9 ore.",
        },
        {
          prompt: "Pershkruani si shoferi mund te beje nje pushim javor ne cdo dy jave rresht dhe cfare duhet te beje nese ben nje pushim te shkurtuar.",
          answer:
            "Ne dy jave rresht shoferi mund te kete dy pushime te rregullta prej 45 oresh ose nje pushim prej 45 oresh dhe nje pushim te shkurtuar prej 24 oresh. Periudha e shkurtuar duhet te kompensohet deri ne fundin e javes se trete.",
        },
        {
          prompt: "Cili eshte qellimi i dokumentit shoqerues te eksportit SIL dhe cfare duhet te beje shoferi me te?",
          answer:
            "SIL eshte dokument shoqerues i eksportit doganor dhe sherben si deshmi per daljen e mallit nga zona doganore e BE-se. Shoferi duhet ta konfirmoje ne dogane para daljes nga BE-ja dhe pastaj dokumenti i kthehet pronarit te mallit per rregullimin e TVSH-se.",
        },
        {
          prompt: "Si mund te permirsohen te dhenat e shkruara ne librin TIR dhe kush mund t'i permirsoje te dhenat ne faqen e pare prej 1-3?",
          answer:
            "Te dhenat nuk duhet te fshihen me zbardhues. Nese shoferi i permirson me nenshkrim dhe mbishkrim, ato duhet te vertetohen ne dogane. Te dhenat ne rubrikat 1 deri 3 ne faqen e pare mund t'i permirsoje vetem institucioni qe leshon TIR Karnetin dhe i vulos.",
        },
      ],
      partThree: {
        summary:
          "Do te udhetoni me nje kamion ne relacionin Ljubljana (SLO) - Munchen (Gjermani). Do te beni 408 km ne kohen 6 ore e 30 minuta. Ne mjet keni 20 ene me kimikate.",
        subquestions: [
          {
            prompt: "Shkruani llojin e transportit.",
            answer: "Transporti nderkombetar dy palesh (bilateral) i mallrave te rrezikshme.",
          },
          {
            prompt: "Pershkruani aktivitetet tuaja para se te kryeni kete transport.",
            answer:
              "Kontrolloj dokumentacionin e nevojshem, gjendjen teknike te automjetit, pajisjet e nevojshme ne automjet dhe njihem me flet-urdheresen per ngarkim.",
          },
          {
            prompt: "Si do ta planifikoni kohen e udhetimit dhe pushimet? Ne cfare menyre mund te perdoret ndryshe pushimi?",
            answer:
              "Udhetimi zgjat 6 ore e 30 minuta. Vozis maksimumi 4 ore e 30 minuta, bej nje pushim prej 45 minutash dhe pastaj vazhdoj me 2 ore vozitje deri ne destinacion.",
          },
          {
            prompt: "Me cfare pajisje do ta fiksoni ngarkesen?",
            answer:
              "Do te perdorim pyka me maje per sigurimin e ngarkeses, pyka me kend 45% per objekte te rrumbullaketa, dy pyka te gjata me mbrojtes fleksibel, si dhe zinxhire ose vida per te shmangur levizjen. Lidhjet duhet te vendosen ne kend 90 shkalle ne raport me ngarkesen mbajtese.",
          },
          {
            prompt: "Pershkruani dokumentacionin e duhur per drejtuesin, mjetin dhe ngarkesen.",
            answer:
              "Dokumentacioni i shoferit: patente shoferi, pasaporte ose leternjoftim, certifikata e kualifikimit baze, KOD 95, ADR kualifikimi, shiritat e tahografit per 28 ditet e kaluara ose kartela e tahografit dhe flet-urdheresa e udhetimit. Dokumentacioni i mjetit: leja e qarkullimit, ekstrakti i licences, leje ADR dhe sigurimi. Dokumentacioni i ngarkeses: flete dorezimi, fatura dhe CMR.",
          },
          {
            prompt: "Emertoni dokumentin ne figure, pershkruani detyrat tuaja ne marrjen dhe dorezimin e ngarkeses, si dhe si veproni nese prishet tahografi analog ose bateria.",
            answer:
              "Dokumenti eshte flete ngarkesa nderkombetare CMR dhe transportuesi ploteson seksionet 16, 17, 18 dhe 23. Gjate pranimit paraqitem te personi pergjegjes, vendos mjetin ne vendin e ngarkimit, hap hapesiren ngarkuese, kontrolloj procesin e ngarkimit, numrin e pakove, saktesine e dokumentit dhe cilesine e mallit, pastaj mbyll hapesiren dhe firmos dokumentacionin. Ne rast prishjeje te tahografit analog, i shkruaj te dhenat ne shirit ose ne nje flete te bardhe me emer, mbiemer, numer patente, date dhe oret e vozitjes, e firmos dhe e rregulloj defektin ne fund te udhetimit ose brenda 7 diteve nese zgjat me shume. Nese bateria nuk punon me, fillimisht heq polin negativ, pastaj pozitivin, nxjerr baterine, pastroj shtratin, vendos bateri te re me te njejtat vlera, lidh fillimisht polin pozitiv dhe pastaj negativin, ndez automjetin dhe kontrolloj instrument tabelen.",
          },
        ],
      },
    },
  },
};

realTests.C[4] = {
  name: "Testi 4",
  partOne: [
    {
      prompt:
        "Sa eshte masa totale maksimale e lejuar e nje mjeti motorik dhe rimorkio me ngarkese te perbere nga nje mjet motorik me dy boshte dhe nje rimorkio me dy boshte?",
      options: ["30 t", "32 t", "36 t", "40 t"],
      correctIndex: 2,
    },
    {
      prompt: "Pse nuk duhet ta mbajme balonen e qelqit direkt me gishta gjate nderrimit te llambes?",
      options: [
        "Ne balonen e qelqit mund te krijohen carje stresi.",
        "Reflektori eshte i veshur me shtrese yndyre gjate ngrohjes.",
        "Balona e qelqit behet e zeze.",
        "Me gishta te paster, nuk paraqet problem.",
      ],
      correctIndex: 0,
    },
    {
      prompt: "Cfare kuptojme me termin bateri me ngarkese te thate?",
      options: [
        "Bateria ka humbur ngarkesen e saj te acidit sulfurik per shkak te ruajtjes se gjate.",
        "Bateria dorezohet ne gjendje te ngarkuar. Kur pergatiteni per funksionim, duhet te shtoni vetem uje te distiluar.",
        "Eshte bateri plotesisht e ngarkuar.",
        "Panelet e baterise jane ne gjendje te ngarkuar. Eshte e nevojshme vetem te derdhni acidin sulfurik te holluar te furnizuar.",
      ],
      correctIndex: 3,
    },
    {
      prompt: "Me sa bar/ajer i mbushim gomat?",
      options: [
        "Aq sa pershkruhet nga prodhuesi i gomave.",
        "Aq sa pershkruhet nga prodhuesi i automjetit.",
        "Aq sa pershkruhet nga prodhuesi i automjetit dhe prodhuesi i gomave.",
        "Gomat duhet te fryhen ne maksimum 3 bare.",
      ],
      correctIndex: 2,
    },
    {
      prompt: "Si konsumohet goma nese presioni i gomave eshte shume i ulet?",
      options: [
        "Goma eshte konsumuar ne menyre te pabarabarte, me hapa.",
        "Skajet e jashtme te gomes jane konsumuar.",
        "Te dy skajet e gomes jane te konsumuara.",
        "Skajet e brendshme te gomes jane konsumuar.",
      ],
      correctIndex: 2,
    },
    {
      prompt: "Sa shpesh e nderrojme pastruesin e ajrit?",
      options: [
        "Ne cdo sherbim te rregullt.",
        "Nje here ne vit.",
        "Kur pastruesi eshte i bllokuar, e zevendesojme ate pavaresisht kilometrazhit.",
        "Dy here ne vit.",
      ],
      correctIndex: 2,
    },
    {
      prompt:
        "Cili nga gazrat e meposhtem eshte aq toksik sa qe edhe nje perqendrim i vogel i ketij gazi ne hapesire te mbyllur mund te shkaktoje dhimbje koke dhe te vjella, kurse perqendrim me i larte mund te coje ne humbje te vetedijes apo edhe vdekje ne nje kohe te shkurter?",
      options: ["N2 - azoti", "CO2 - dyoksid karboni", "H2O - avull i zakonshem", "CO - monoksidi i karbonit"],
      correctIndex: 3,
    },
    {
      prompt: "Si e perdorim zjarrfikesin 'S'?",
      options: [
        "Marrim pajisjen, hapim valvulin dhe fillojme te shuajme.",
        "Marrim pajisjen, heqim siguresen, shtypim leven, presim 2-3 sekonda, pastaj fillojme te shuajme.",
        "Marrim pajisjen, heqim siguresen, hapim valvulin dhe fillojme te shuajme.",
        "Nuk ka udhezime specifike.",
      ],
      correctIndex: 1,
    },
    {
      prompt: "Detyra e turbongarkuesit te gazit te shkarkimit ne nje motor nafte eshte...",
      options: [
        "te shperndan karburantin nafte.",
        "te zvogelon perqindjen e dyoksidit te karbonit ne gazrat e shkarkimit.",
        "te zvogelon perqindjen e oksideve te azotit ne gazrat e shkarkimit.",
        "te rrit mbushjen e cilindrave me ajer.",
      ],
      correctIndex: 3,
    },
    {
      prompt: "Sa eshte kapaciteti i ngarkeses se nje euro-palete prej druri te sheshte?",
      options: ["1.000 kg", "500 kg", "1.200 kg", "1.500 kg"],
      correctIndex: 0,
    },
    {
      prompt:
        "Sa duhet te jete mosha minimale e shoferit te nje kamioni mbi 3,5 t peshe maksimale te lejueshme, i cili drejton automjete te kategorive C dhe C + E dhe qe ka certifikate qe konfirmon kualifikimet baze te pershpejtuara?",
      options: ["18 vjet", "20 vjet", "21 vjet", "23 vjet"],
      correctIndex: 2,
    },
    {
      prompt: "Gjate ngarkimit te llojeve dhe peshave te ndryshme te ngarkesave ne automjet, duhet pasur kujdes qe:",
      options: [
        "Te ngarkohen ne menyre alternative.",
        "Ngarkesa me e rende ngarkohet se pari.",
        "Ngarkese me e rende te vendoset ne maje te nje me te lehte.",
        "Ngarkesa me e lehte te ngarkohet se pari.",
      ],
      correctIndex: 1,
    },
    {
      prompt: "Cfare duhet te beje shoferi nese ne kontejner futen lengje korozive?",
      options: [
        "Asgje.",
        "Te inspekton dyshemene e enes dhe ta pastron nese eshte e nevojshme.",
        "Ena duhet te regjistrohet dhe te fiksohet mire.",
        "Dyshemeja e enes duhet te sperkatet me tallash ose material te ngjashem.",
      ],
      correctIndex: 1,
    },
    {
      prompt: "Sa eshte koha mesatare javore e punes per nje punetor te levizshem gjate kater muajve?",
      options: ["48 ore", "56 ore", "60 ore", "40 ore"],
      correctIndex: 0,
    },
    {
      prompt: "Periudha e rregullt e pushimit ditor zgjat te pakten 11 ore. Si mund te ndahet ne dy periudha te vazhdueshme?",
      options: [
        "Periudha e pare e vazhdueshme 3 ore, periudha e dyte e vazhdueshme 9 ore.",
        "Periudha e pare e vazhdueshme eshte 2 ore, periudha e dyte e vazhdueshme eshte 9 ore.",
        "Periudha e pare e vazhdueshme eshte 3 ore, periudha e dyte e vazhdueshme eshte 8 ore.",
        "Periudha e pare e vazhdueshme eshte 3 ore, periudha e dyte e vazhdueshme eshte 6 ore.",
      ],
      correctIndex: 0,
    },
    {
      prompt:
        "Kush eshte pergjegjes qe puna e shoferit te organizohet ne ate menyre qe shoferi te mund te respektoje kohen e vozitjes, pushimet dhe kohen e pushimit?",
      options: [
        "Shoferi dhe drejtori i kompanise per transport.",
        "Kompania per transport.",
        "Drejtori i kompanise per transport.",
        "Shoferi.",
      ],
      correctIndex: 1,
    },
    {
      prompt:
        "Shoferi ka numrin e meposhtem te oreve te drejtimit ne jave. Java e pare eshte 56 ore, java e dyte 34 ore dhe java e trete 25 ore. Bazuar ne rregulloret e BE-se, sa ore vozitje mund te behet ne javen e katert?",
      options: ["25 ore", "56 ore", "65 ore", "31 ore"],
      correctIndex: 3,
    },
    {
      prompt: "Sa kohe duhet te zgjase gjithsej trajnimi i rregullt i shoferit cdo pese vjet?",
      options: ["Te pakten 7 ore.", "Te pakten 14 ore.", "Te pakten 35 ore.", "Te pakten 53 ore."],
      correctIndex: 2,
    },
    {
      prompt: "Cfare eshte parkingu publik per kamione apo autobuse?",
      options: [
        "Eshte parkim qe duhet te ofrohet nga transportuesi per mjetet e tij, me te cilat do te kryeje veprimtarine e transportuesit.",
        "Eshte zone e caktuar per parkim ne qytetet me te medha, perdorimi i se ciles paguhet ne perputhje me urdheresat e qytetit.",
        "Eshte vend parkimi i rregulluar, ku garantohet parkim i sigurt dhe kushte minimale higjienike per stafin e shoferit.",
        "Eshte parking me pagese i shenuar me shenim te katit te kalter.",
      ],
      correctIndex: 2,
    },
    {
      prompt: "Cfare eshte kabotazhi?",
      options: [
        "Transporti me autotaksi, i cili kryhet nga nje transportues vendas ne baze te lejes.",
        "Transporti i udhetareve ose mallrave i kryer nga nje transportues vendas ne trafikun nderkombetar ne baze te licences.",
        "Transporti i udhetareve ose mallrave ndermjet vendeve individuale brenda cdo vendi, i kryer nga nje transportues vendas.",
        "Transporti i udhetareve ose mallrave ndermjet vendeve individuale brenda cdo vendi, i kryer nga nje transportues i huaj.",
      ],
      correctIndex: 3,
    },
    {
      prompt: "Per cilat lloje automjetesh gjate kryerjes se transportit tregtar nuk kerkohet licence dhe kopje te licences se automjetit?",
      options: [
        "Pesha maksimale e lejuar deri ne 3.5 t.",
        "Pesha maksimale e lejuar deri ne 7 t.",
        "Pesha maksimale e lejuar deri ne 12 t.",
        "Pesha maksimale e lejuar deri ne 16 t.",
      ],
      correctIndex: 0,
    },
    {
      prompt: "A eshte e transferueshme nje kopje e licences ne automjete individuale ne pronesi te mbajtesit te licences?",
      options: [
        "Kopja e licences eshte e lidhur me nje automjet individual, keshtu qe nuk eshte e transferueshme.",
        "Kopja e licences mund te transferohet ne automjete qe nuk jane ne pronesi te mbajtesit te licences.",
        "Kopja e licences nuk mund te transferohet ne automjete individuale ne pronesi te mbajtesit te licences.",
        "Kopja e licences mund te transferohet ne automjete individuale ne pronesi te mbajtesit te licences.",
      ],
      correctIndex: 0,
    },
    {
      prompt: "Kur punedhenesi duhet te regjistroje nje punonjes per sigurimet shoqerore?",
      options: [
        "Nga data e fillimit te punes sipas kontrates se punes.",
        "Brenda 8 diteve pas fillimit te punes.",
        "Me lidhjen e vete kontrates se punes.",
        "Brenda 30 diteve nga nenshkrimi i kontrates.",
      ],
      correctIndex: 0,
    },
    {
      prompt:
        "Cfare te drejte ka shoqeria e sigurimit ne rast demi nese mjeti eshte drejtuar nga shofer i cili nuk ka patente shoferi te vlefshem te kategorise apo kategorive te ciles i perket mjeti?",
      options: [
        "Kjo nuk ka asnje efekt ne pagesen e demeve dhe kompania e sigurimit nuk mund te rikuperoje shumen e paguar nga shoferi.",
        "Shoqeria e sigurimit ka te drejte te kerkoje rimbursimin e shumave te paguara deri ne 1 500 000 euro maksimale.",
        "Shoqeria e sigurimit ka te drejte te kerkoje rimbursimin e shumave te paguara deri ne 12 000 euro maksimale.",
        "Kompania e sigurimit nuk mbulon demin ndaj te demtuarit te cilit i eshte shkaktuar dem nga nje person i tille.",
      ],
      correctIndex: 2,
    },
    {
      prompt: "A duhet qe transportuesi vendas te kete dokumente te brendshme qe rregullojne ne detaje kontrollin e brendshem?",
      options: [
        "Po, por vetem nje transportues qe kryen transportin per nevojat e veta.",
        "Po.",
        "Jo, sepse kontrolli i brendshem rregullohet ne detaje me ligj.",
        "Jo.",
      ],
      correctIndex: 1,
    },
    {
      prompt: "Cfare merr persiper transportuesi me kontraten e transportit?",
      options: [
        "Se ai do te kryeje transportin ne perputhje me kontraten nese kjo eshte e mundur.",
        "Se transportin do ta kryeje ne perputhje me kontraten ne menyre cilesore dhe ne kohe.",
        "Se ai do te dorezoje mallin per transport.",
        "Qe pas marrjes se mallit te paguaje transportin dhe magazinimin e mallit.",
      ],
      correctIndex: 1,
    },
    {
      prompt: "A mund te kryhet transport me disa automjete se bashku me nje karnet TIR?",
      options: [
        "Nuk eshte e mundur sepse kontrolli i sakte nuk eshte i mundur.",
        "Po.",
        "Jo.",
        "Nuk eshte e mundur sepse nuk e lejon marreveshja TIR.",
      ],
      correctIndex: 1,
    },
    {
      prompt:
        "Cfare nga veprimet e meposhtme mund te beje nje shofer per te reduktuar mundesine e kontrabandes se paligjshme te emigranteve dhe llojeve te tjera te krimit?",
      options: [
        "Te telefonon disa here shtepine ose seline e kompanise.",
        "Vozit me nje udhetar.",
        "Nuk e kryen transportin pa shoqerim nga policia.",
        "Te sigurohet qe te ngase sa me pak te jete e mundur pa mbikeqyrje.",
      ],
      correctIndex: 3,
    },
    {
      prompt: "Kush duhet te kujdeset per punen e sigurt?",
      options: ["Dispeceri.", "Shoferi i trafikut ne garazh.", "Shoferi dhe punetori i levizshem.", "Shoferi dhe punedhenesi i tij."],
      correctIndex: 3,
    },
    {
      prompt: "Kur lajmerojme policine ne rast te nje aksidenti trafiku me deme te vogla materiale?",
      options: [
        "Gjithmone.",
        "Ne rast se nuk mund te biem dakord se kush e shkaktoi aksidentin.",
        "Kurre.",
        "Ne rast se njeri prej pjesemarresve ne aksident nuk deshiron te na jape te dhenat e tij.",
      ],
      correctIndex: 1,
    },
  ],
  partTwo: [
    {
      prompt: "Cilat forca veprojne ne mjet gjate ngasjes?",
      answer: "Forca e peshes, forca centrifugale dhe forca e friksionit.",
    },
    {
      prompt: "Cila eshte procedura per shkeputjen e rimorkios?",
      answer:
        "Vendos rimorkion ne vend te pershtatshem, aplikoj frenat e kamionit dhe rimorkios, vendos shufra nese eshte e nevojshme, heq tubin e ajrit te kuq, heq tubin e ajrit te verdhe, heq lidhjet elektrike, zbres rimorkion ne kembet e zbritjes, ngre kingpin dhe leviz kamionin perpara.",
    },
    {
      prompt: "Rendisni rregullat baze te vendosjes se rripit te sigurimit.",
      answer:
        "Se pari rregullojme karrigen dhe rripin sipas lartesise. Rripi nuk duhet te jete i kthyer, duhet te vendoset ne menyre te pershtatshme dhe te barabarte mbi trup, mekanizmi duhet te jete funksional dhe nuk duhet te bllokohet.",
    },
    {
      prompt: "Rendisni sa me shume masa per te ulur konsumin e karburantit.",
      answer:
        "Fikni motorin per ndalje me te gjata se 3 minuta, vozitni me shpejtesi mesatare ne fushe te gjelber, perdorni racionalisht kontrollin e shpejtesise, navigacionin, zvogeluesin e shpejtesise dhe metrin e distances, vezhgoni trafikun perpara, kontrolloni presionin e gomave, kryeni servis rregullisht, ndryshoni filtrin e ajrit, perdorni spoilera per aerodinamike dhe nderroni shpejtesite ne kohe.",
    },
    {
      prompt: "Cilat dokumente duhet te kete shoferi ne automjet gjate drejtimit te automjetit ne perputhje me Aktin e Transportit Rrugor - ZPCP?",
      answer:
        "Kopje te licences, kualifikimin e shoferit dhe patent shoferin, certifikate te vecante punesimi nese shoferi nuk eshte shtetas i BE-se, kontrate qiraje ose dokument qe verteton te drejten e perdorimit nese automjeti nuk eshte ne pronesi te transportuesit, lejet e nevojshme, vertetim per transport per llogari te vet me autobus, kontrate pune per shofer autobusi dhe per autotaksi kontrate pune me kohe te plote.",
    },
    {
      prompt:
        "Perpara se te nisim drejtimin, duhet te percaktojme nese automjeti yne eshte teknikisht i patemete dhe gati per te vozitur. Cfare duhet te kontrollohet si pjese e kontrollit ditor parandalues te automjetit dhe ku i vendosim gjetjet?",
      answer:
        "Bejme inspektim vizual te mjedisit te makines per rrjedhje lengjesh, lidhje, demtime fizike dhe pajisje. Kontrollojme timonin, frenat, dritat dhe sinjalet e ndricimit, si dhe pajisjet e makines. Verejtjet regjistrohen ne librin e perditshem te inspektimit parandalues.",
    },
    {
      prompt: "Cfare konsiderohet transport emergjent ne komunikacionin rrugor? Cfare dokumenti ju nevojitet dhe ne cfare kushtesh mund ta beni?",
      answer:
        "Transport i jashtezakonshem eshte transportimi i nje mjeti ose mjeti me ngarkese qe tejkalon dimensionet, peshen, kapacitetin ose ngarkesen ne aks te lejuar me ligj. Nevojitet leje nga institucioni i autorizuar dhe transporti kryhet sipas kushteve te lejes: kohe, rruge, shoqerues dhe kushte te tjera.",
    },
    {
      prompt: "Rendisni dhe shpjegoni rolin e preparateve transportuese ne transportin e mallrave.",
      answer:
        "Mjetet e transportit jane paketa, paleta dhe kontejneri. Ato mbrojne ngarkesen nga demtimi, vjedhja ose humbja, lehtesojne trajtimin, depozitimin dhe transportin, si dhe zvogelojne kostot e transportit.",
    },
    {
      prompt: "Shoferi ka vozitur vazhdimisht per me shume se 4 ore dhe ka ne plan te pushoje ne parkingun e kamioneve, por nuk kishte vend. Cfare duhet te beje?",
      answer:
        "Nese ka ende kohe deri ne 4 ore e 30 minuta, vazhdon perpara dhe kerkon parkingun e pare te pershtatshem ku mund te pushoje. Nese vozitja zgjat me shume se 4 ore e 30 minuta, e regjistron arsyen ne printimin nga tahografi, e mban ne mjet per 28 dite dhe ne rast kontrolli e informon autoritetin mbikeqyres per zgjatjen e kohes se drejtimit.",
    },
    {
      prompt: "Pershkruani se si nje shofer mund te perdore pushim javor ne cdo dy jave rresht dhe cfare duhet te beje nese shkurton pushimin javor.",
      answer:
        "Ne cdo dy jave rresht shoferi duhet te kete dy periudha te rregullta javore pushimi nga 45 ore secila, ose nje periudhe te rregullt prej 45 oresh dhe nje periudhe te reduktuar javore prej te pakten 24 oresh. Zvogelimi duhet te kompensohet me nje periudhe pushimi me te njejten gjatesi, ne nje pjese, para fundit te javes se trete pas javes perkatese.",
    },
    {
      prompt: "Per cfare sherben dokumenti shoqerues i eksportit SIL dhe cfare duhet te beje shoferi me te?",
      answer:
        "SIL eshte dokument doganor ku regjistrohen informacione per pronarin e mallrave dhe mallrat. Certifikohet kur malli del nga BE-ja dhe i kthehet pronarit si deshmi qe mallrat kane dale nga BE-ja. Me kete dokument pronari mund te kerkoje rimbursimin e TVSH-se.",
    },
  ],
  partThree: {
    summary:
      "Ju do te vozitni nje kamion ne itinerarin Zagreb (CRO) - Nuremberg (Gjermani). Ju do te kaloni 708 km per 11 ore e 30 minuta. Jeni duke transportuar 20 fuci kimikate ne automjetin tuaj.",
    subquestions: [
      {
        prompt: "Specifikoni llojin e transportit.",
        answer: "Transport nderkombetar i mallrave te rrezikshme i vendeve te treta.",
      },
      {
        prompt: "Cfare leje apo licence ju nevojitet per kete transport?",
        answer: "Nuk kam nevoje per leje, por mjafton nje kopje e licences pasi Kroacia eshte anetare e BE-se.",
      },
      {
        prompt:
          "Kur mund te filloni transportin ne javen aktuale nese transportin e fundit javen e kaluar e keni perfunduar te shtunen ne oren 14:30 dhe nuk do te perfitoni nga pushimi javor i shkurtuar? Si do te planifikoni oret e vozitjes dhe pushimet?",
        answer:
          "Mund te nis transportin te henen ne oren 11:30, sepse e shtuna 14:30 plus 45 ore pushim javor i rregullt eshte e hena 11:30. Vozis 4 ore e 30 minuta nga 11:30 deri 16:00, pushoj 45 minuta nga 16:00 deri 16:45, vozis 4 ore e 30 minuta nga 16:45 deri 21:15, bej pushim ditor 11 ore deri 08:15, pastaj vozis 2 ore e 30 minuta deri ne 10:45 dhe arrij ne Nuremberg te marten ne oren 10:45.",
      },
      {
        prompt: "Ne cfare lloj ambalazhi mund te transportoni mallra te rrezikshme qe keni ngarkuar ne automjet?",
        answer:
          "Per mallra te rrezikshme perdoret vetem ambalazhi qe per nga cilesia dhe dizajni i pergjigjet sasise dhe karakteristikave te mallrave, eshte i lejuar sipas ADR, eshte testuar dhe miratuar sipas rregullave dhe ka etiketat ose shenjat e nevojshme per rrezikun dhe informacionet per kimikatet.",
      },
      {
        prompt: "Per transportin e cilit lloj te mallrave te rrezikshme kerkohet leje?",
        answer: "Kerkohet leje per transport te substancave eksplozive, radioaktive dhe nukleare.",
      },
      {
        prompt: "Pershkruani dokumentacionin per shoferin, mjetin dhe ngarkesen qe eshte e nevojshme per te kryer kete transport.",
        answer:
          "Dokumentacioni i shoferit: patente shoferi me Kod 95, karte tahografi, patente/certifikate ADR dhe karte identifikimi ose pasaporte. Dokumentacioni i mjetit: certifikate e regjistrimit te vlefshem, kopje e licences dhe certifikate ADR qe konfirmon pershtatshmerine per mallra te rrezikshme. Dokumentacioni i ngarkeses: CMR, fature dhe dokumentacion ADR per ngarkesen.",
      },
      {
        prompt: "Emertoni dokumentin ne figure. Kush duhet ta marre kete dokument? A eshte dokument transporti apo dokument mallrash?",
        answer: "Dokumenti eshte lista/flete ngarkesa nderkombetare CMR. E marrin derguesi, marresi dhe transportuesi. Ky eshte dokument transporti.",
      },
      {
        prompt: "Pershkruani detyrat tuaja kur pranoni ngarkesen: si e pergatitni mjetin, si e kontrolloni ngarkimin dhe cfare beni me dokumentacionin?",
        answer:
          "Raportohem te personi pergjegjes ne vendin e ngarkimit, vendos mjetin ne vendin e ngarkimit dhe pergatis hapesiren. Jap udhezime, organizoj, numeroj dhe krahasoj te dhenat nga dokumentet me ngarkesen reale, kontrolloj vizualisht cilesine dhe paketimin, siguroj ngarkesen ne mjet, nenshkruaj dokumentet dhe pergatis mjetin per nisje. Nese ka kundershtime, i regjistroj ne seksionin 18 te CMR.",
      },
      {
        prompt: "Gjate vozitjes kuptoni se bateria e automjetit nuk po punon me. Si do ta zevendesoni?",
        answer:
          "Ndalohem ne vend te sigurt, heq fillimisht terminalin negativ dhe pastaj pozitiv, e largoj baterine nga mjeti, pastroj vendin e baterise, vendos baterine e re me te njejtat vlera, lidh fillimisht terminalin pozitiv dhe pastaj negativ, ndez mjetin dhe kontrolloj treguesin e baterise ne panel.",
      },
    ],
  },
};

realTests.C[5] = {
  name: "Testi 5",
  partOne: [
    {
      prompt:
        "Cila eshte marredhenia midis presionit maksimal te injektimit dhe emetimeve te grimcave ne nje motor nafte me injeksion te drejtperdrejte?",
      options: [
        "Sa me i ulet te jete presioni, aq me i ulet eshte emetimi i grimcave.",
        "Vecanerisht per sistemet me rrotullim te ulet te karburantit, vlen fjalia vijuese: sa me i larte te jete presioni, aq me i ulet eshte emetimi i grimcave.",
        "Ne presione mbi 1000 bar, emetimet e grimcave nuk ulen me.",
        "Ne sistemet qe mbeshtesin rrotullimin e karburantit me injeksion, emetimet e grimcave bien, por vetem deri ne perafersisht 900 bar, pastaj mbetet konstantet.",
      ],
      correctIndex: 1,
    },
    {
      prompt: "Detyra e turbongarkuesit te gazit te shkarkimit ne nje motor nafte eshte?",
      options: [
        "te shperndan karburantin nafte.",
        "te zvogelon perqindjen e dyoksidit te karbonit ne gazrat e shkarkimit.",
        "te zvogelon perqindjen e oksideve te azotit ne gazrat e shkarkimit.",
        "te rrit mbushjen e cilindrave me ajer.",
      ],
      correctIndex: 3,
    },
    {
      prompt: "Cfare bejme me driten e perparme, xhami i te cilit eshte pak i demtuar?",
      options: [
        "Demtimet e vogla (gervishtjet) nuk kane nevoje te riparohen.",
        "Nese nuk ka demtime ne qender te drites se perparme, e ngjisim ate, perndryshe e zevendesojme.",
        "E nderrojme driten per rrezet e uleta, nuk eshte e nevojshme ta zevendesojme ate per rrezet e gjata.",
        "E nderrojme pa marr parasysh.",
      ],
      correctIndex: 3,
    },
    {
      prompt: "Me sa bar/ajer i mbushim gomat?",
      options: [
        "Aq sa pershkruhet nga prodhuesi i gomave.",
        "Aq sa pershkruhet nga prodhuesi i automjetit.",
        "Aq sa pershkruhet nga prodhuesi i automjetit dhe prodhuesi i gomave.",
        "Gomat duhet te fryhen ne maksimum 3 bare.",
      ],
      correctIndex: 2,
    },
    {
      prompt: "Si konsumohet goma nese presioni i gomave eshte shume i ulet?",
      options: [
        "Goma eshte konsumuar ne menyre te pabarabarte, me hapa.",
        "Skajet e jashtme te gomes jane konsumuar.",
        "Te dy skajet e gomes jane te konsumuara.",
        "Skajet e brendshme te gomes jane konsumuar.",
      ],
      correctIndex: 2,
    },
    {
      prompt: "Sa shpesh e nderrojme pastruesin e ajrit?",
      options: [
        "Ne cdo sherbim te rregullt.",
        "Nje here ne vit.",
        "Kur pastruesi eshte e bllokuar, e zevendesojme ate pavaresisht kilometrazhit.",
        "Dy here ne vit.",
      ],
      correctIndex: 2,
    },
    {
      prompt:
        "Cili nga gazrat e meposhtem eshte aq toksik sa qe edhe nje perqendrim i vogel i ketij gazi ne hapesire te mbyllur mund te shkaktoje dhimbje koke dhe te vjella. Kurse perqendrim me i larte mund te coje ne humbje te vetedijes apo edhe vdekje ne nje kohe te shkurter.",
      options: ["N2 - azoti", "CO2 - dyoksid karboni", "H2O - avull i zakonshem", "CO - monoksidi i karbonit"],
      correctIndex: 3,
    },
    {
      prompt: "Si e perdorim zjarrfikesin 'S'?",
      options: [
        "Marrim pajisjen, hapim valvulin dhe fillojme te shuajme.",
        "Marrim pajisjen, heqim siguresen, shtypim leven, presim 2-3 sekonda, pastaj fillojme te shuajme.",
        "Marrim pajisjen, heqim siguresen, hapim valvulin dhe fillojme te shuajme.",
        "Nuk ka udhezime specifike.",
      ],
      correctIndex: 1,
    },
    {
      prompt: "Si transportojme ngarkesa te gjata dhe te shkurtra ne te njejten kohe...",
      options: [
        "Ngarkesat me te shkurtra vendosen nen ato me te gjata.",
        "Ngarkesat me te gjata duhet te vendosen nen ngarkesat me te shkurtra.",
        "Ngarkesat me te gjata vendosen ne maje te ngarkesave me te shkurtra.",
        "Nje transport i tille nuk lejohet.",
      ],
      correctIndex: 1,
    },
    {
      prompt: "Sa eshte kapaciteti i ngarkeses se nje euro-palete prej druri te sheshte?",
      options: ["1.000 kg", "500 kg", "1.200 kg", "1.500 kg"],
      correctIndex: 0,
    },
    {
      prompt: "A mund nje shofer i cili nuk eshte i trajnuar posacerisht per te drejtuar nje ashensor makine vetem ta perdore?",
      options: ["Po, por vetem kur shkarkohet.", "Jo.", "Po.", "Rekomandohet te shmangni keto detyra"],
      correctIndex: 1,
    },
    {
      prompt: "Gjate ngarkimit te llojeve dhe peshave te ndryshme te ngarkesave ne automjet, duhet pasur kujdes qe:",
      options: [
        "Te ngarkohen ne menyre alternative,",
        "Ngarkesa me e rende ngarkohet se pari.",
        "Ngarkese me e rende te vendoset ne maje te nje me te lehte,",
        "Ngarkesa me e lehte te ngarkohet se pari.",
      ],
      correctIndex: 1,
    },
    {
      prompt: "Cfare duhet te beje shoferi nese ne kontejner futen lengje korozive?",
      options: [
        "Asgje",
        "Te inspekton dyshemene e enes dhe ta pastron nese eshte e nevojshme",
        "Ena duhet te regjistrohet dhe te fiksohet mire",
        "Dyshemeja e enes duhet te sperkatet me tallash ose material te ngjashem",
      ],
      correctIndex: 1,
    },
    {
      prompt: "Sa eshte koha mesatare javore e punes per nje punetor te levizshem gjate kater muajve?",
      options: ["48 ore", "56 ore", "60 ore", "40 ore"],
      correctIndex: 0,
    },
    {
      prompt: "Periudha e rregullt e pushimit ditor zgjat te pakten 11 ore. Si mund te ndahet ne dy periudha te vazhdueshme?",
      options: [
        "Periudha e pare e vazhdueshme 3 ore, periudha e dyte e vazhdueshme 9 ore.",
        "Periudha e pare e vazhdueshme eshte 2 ore, periudha e dyte e vazhdueshme eshte 9 ore.",
        "Periudha e pare e vazhdueshme eshte 3 ore, periudha e dyte e vazhdueshme eshte 8 ore.",
        "Periudha e pare e vazhdueshme eshte 3 ore, periudha e dyte e vazhdueshme eshte 6 ore.",
      ],
      correctIndex: 0,
    },
    {
      prompt:
        "Kush eshte pergjegjes qe puna e shoferit te organizohet ne ate menyre qe shoferi te mund te respektoje kohen e vozitjes, pushimet dhe kohen e pushimit?",
      options: ["Shoferi dhe drejtori i kompanise per transport.", "Kompania per transport.", "Drejtori i kompanise per transport.", "Shoferi."],
      correctIndex: 1,
    },
    {
      prompt:
        "Shoferi ka numrin e meposhtem te oreve te drejtimit ne jave. Java e pare eshte 56 ore, java e dyte 34 ore dhe java e trete 25 ore. Bazuar ne rregulloret e BE-se, sa ore vozitje mund te behet ne javen e katert?",
      options: ["25 ore", "56 ore", "65 ore", "31 ore"],
      correctIndex: 3,
    },
    {
      prompt: "Sa kohe duhet te zgjase gjithsej trajnimi i rregullt i shoferit cdo pese vjet?",
      options: ["Te pakten 7 ore.", "Te pakten 14 ore.", "Te pakten 35 ore.", "Te pakten 53 ore."],
      correctIndex: 2,
    },
    {
      prompt: "Cfare eshte parkingu publik per kamione apo autobuse?",
      options: [
        "Eshte parkim qe duhet te ofrohet nga transportuesi per mjetet e tij, me te cilat do te kryeje veprimtarine e transportuesit.",
        "Eshte zone e caktuar per parkim ne qytetet me te medha, perdorimi i se ciles paguhet ne perputhje me urdheresen e qytetit.",
        "Eshte vend parkimi te rregulluar, ku garantohet parkim i sigurt dhe kushte minimale higjienike per stafin e shoferit.",
        "Eshte parking me pagese i shenuar me shenim te katit te kalter (zona e kalter).",
      ],
      correctIndex: 2,
    },
    {
      prompt: "Cfare eshte kabotazhi?",
      options: [
        "Transporti me autotaksi, i cili kryhet nga nje transportues vendas ne baze te lejes.",
        "Transporti i udhetareve ose mallrave i kryer nga nje transportues vendas ne trafikun nderkombetar ne baze te licences.",
        "Transporti i udhetareve ose mallrave ndermjet vendeve individuale brenda cdo vendi, i kryer nga nje transportues vendas.",
        "Transporti i udhetareve ose mallrave ndermjet vendeve individuale brenda cdo vendi, i kryer nga nje transportues i huaj.",
      ],
      correctIndex: 3,
    },
    {
      prompt: "Per cilat lloje automjetesh gjate kryerjes se transportit tregtar nuk kerkohet licence dhe kopje te patentes se automjetit?",
      options: [
        "Pesha maksimale e lejuar deri ne 3.5 t.",
        "Pesha maksimale e lejuar deri ne 7 t.",
        "Pesha maksimale e lejuar deri ne 12 t.",
        "Pesha maksimale e lejuar deri ne 16 t.",
      ],
      correctIndex: 0,
    },
    {
      prompt: "A eshte e transferueshme nje kopje e licences ne automjete individuale ne pronesi te mbajtesit te licences?",
      options: [
        "Kopja e licences eshte e lidhur me nje automjet individual, keshtu qe nuk eshte e transferueshme.",
        "Kopja e licences mund te transferohet ne automjete qe nuk jane ne pronesi te mbajtesit te licences.",
        "Kopja e licences nuk mund te transferohet ne automjete individuale ne pronesi te mbajtesit te licences.",
        "Kopja e licences mund te transferohet ne automjete individuale ne pronesi te mbajtesit te licences.",
      ],
      correctIndex: 0,
    },
    {
      prompt: "Kur punedhenesi duhet te regjistroje nje punonjes per sigurimet shoqerore?",
      options: [
        "Nga data e fillimit te punes sipas kontrates se punes.",
        "Brenda 8 diteve pas fillimit te punes.",
        "Me lidhjen e vete kontrates se punes.",
        "Brenda 30 diteve nga nenshkrimi i kontrates.",
      ],
      correctIndex: 0,
    },
    {
      prompt:
        "Cfare te drejte ka shoqeria e sigurimit ne rast demi nese mjeti eshte drejtuar nga shofer i cili nuk ka patente shoferi te vlefshem te kategorise apo kategorive te ciles i perket mjeti?",
      options: [
        "Kjo nuk ka asnje efekt ne pagesen e demeve dhe kompania e sigurimit nuk mund te rikuperoje shumen e paguar nga shoferi.",
        "Shoqeria e sigurimit ka te drejte te kerkoje rimbursimin e shumave te paguara, nga i siguruari ose nga personi pergjegjes, por deri ne 1 500 000 euro maksimale.",
        "Shoqeria e sigurimit ka te drejte te kerkoje rimbursimin e shumave te paguara, nga i siguruari ose nga personi pergjegjes, por deri ne 12 000 euro maksimale.",
        "Kompania e sigurimit nuk mbulon demin ndaj te demtuarit te cilit i eshte shkaktuar dem nga nje person i tille.",
      ],
      correctIndex: 2,
    },
    {
      prompt: "A duhet qe transportuesi vendas te kete dokumente te brendshme qe rregullojne ne detaje kontrollin e brendshem?",
      options: [
        "Po, por vetem nje transportues qe kryen transportin per nevojat e veta.",
        "Po.",
        "Jo, sepse kontrolli i brendshem rregullohet ne detaje me ligj.",
        "Jo.",
      ],
      correctIndex: 1,
    },
    {
      prompt: "Cfare merr persiper transportuesi me kontraten e transportit?",
      options: [
        "Se ai do te kryeje transportin ne perputhje me kontraten nese kjo eshte e mundur.",
        "Se transportin do ta kryeje ne perputhje me kontraten ne menyre cilesore dhe ne kohe.",
        "Se ai do te dorezoje mallin per transport.",
        "Qe pas marrjes se mallit te paguaje transportin dhe magazinimin e mallit.",
      ],
      correctIndex: 1,
    },
    {
      prompt: "A mund te kryhet transport me disa automjete se bashku me nje karnet TIR?",
      options: [
        "Nuk eshte e mundur sepse kontrolli i sakte nuk eshte i mundur.",
        "Po.",
        "Jo.",
        "Nuk eshte e mundur sepse nuk e lejon marreveshja TIR.",
      ],
      correctIndex: 1,
    },
    {
      prompt:
        "Cfare nga veprimet e meposhtme mund te beje nje shofer per te reduktuar mundesine e kontrabandes se paligjshme te emigranteve dhe llojeve te tjera te krimit?",
      options: [
        "Te telefonon disa here shtepine ose seline e kompanise.",
        "Vozit me nje udhetar.",
        "Nuk e kryen transportin pa shoqerim nga policia.",
        "Te sigurohet qe te ngase sa me pak te jete e mundur pa mbikeqyrje.",
      ],
      correctIndex: 3,
    },
    {
      prompt: "Kush duhet te kujdeset per punen e sigurt?",
      options: ["Dispeceri.", "Shoferi i trafikut ne garazh.", "Shoferi dhe punetori i levizshem.", "Shoferi dhe punedhenesi i tij."],
      correctIndex: 3,
    },
    {
      prompt: "Transportuesi siguron gjendjen e duhur higjeno-teknike te mjetit kur?",
      options: [
        "Sigurohet qe automjeti te kete mjete adekuate per pastrimin dhe dezinfektimin e automjetit.",
        "Sigurohet qe te kete vend per agjente pastrimi ne automjet.",
        "Siguron sasi te mjaftueshme te ujit te pijshem te lengshem.",
        "Siguron mjete per pastrimin dhe lubrifikimin e automjetit.",
      ],
      correctIndex: 0,
    },
  ],
  partTwo: [
    {
      prompt: "Si do ta ndryshonit kandelin nese eshte i yndyrshem?",
      answer:
        "Procesi i pergatitjes: pastroni siperfaqet e lidhura mes buzhqes dhe kryqin e motorit, kontrollojeni pershtatshmerine e vleres se ngrohjes se buzhqes, shqyrtoni gomen e mbajteses dhe me ndihmen e nje letre matese vendosni distancen mes elektrodave. Procedura e instalimit: vendosim buzhqen ne rosqen duke siguruar qe te kapet ne vend dhe e kthejme me dore te pakten tre here, pastaj shtypim buzhqen me celesin e buzhqes deri ne fund. Kujdesemi te mos demtojme izolatorin dhe respektojme normat e prodhimit te rekomanduara.",
    },
    {
      prompt: "Cila eshte procedura per shkeputjen e rimorkios?",
      answer:
        "Vendos rimorkion ne vendin e pershtatshem, aplikoj frenat e kamionit dhe rimorkios duke perdorur frenen e parkimit, vendosim shufra nese eshte e nevojshme, heq tubin e ajrit te kuq, heq tubin e ajrit te verdhe, heq lidhjet elektrike, zbres rimorkion ne kembet e tij te zbritjes nese eshte e nevojshme, ngre kingpin dhe leviz kamionin perpara.",
    },
    {
      prompt:
        "Si sigurohen autoritetet kompetente doganore qe te njejtat mallra sic thuhet ne dokumente me te vertet transportohen ne trafikun rrugor nderkombetar?",
      answer:
        "Organet per sigurimin e identitetit me se shpeshti perdorin plumbat doganore, te cilat vendosen ne vendin ku eshte vendosur malli. Mjeti transportues duhet te kete certifikate per pershtatshmeri per transport nen shenje doganore ose te jete i pershtatshem per vendosjen e shenjave doganore. Plumbat doganore duhet te kene shenje identifikimi, te jene per perdorim njehereshe dhe cdo demtim ose heqje e tyre duhet te jete e dukshme me sy te lire. Pervec plumbave mund te perdoren edhe etiketat doganore ne paketimet individuale.",
    },
    {
      prompt: "Rendisni sa me shume masa per te ulur konsumin e karburantit.",
      answer:
        "Mbyllni motorin per ndalje me te gjata se 3 minuta, ecni ne shpejtesi mesatare ne fushe jeshile, perdorni racionalisht shfaqjen e shpejtesise, kontrollin e shpejtesise, navigacionin, zvogeluesin e shpejtesise dhe metrin e distances, vezhgoni trafikun perpara qe te mos akceleroni pa nevoje, kontrolloni rregullisht presionin e gomave, kryeni sherbimin e makines rregullisht, ndryshoni filtrin e ajrit, perdorni spoilere per aerodinamike dhe kaloni shpejtesite ne kohen e duhur.",
    },
    {
      prompt: "Cilat dokumente duhet te kete shoferi ne automjet gjate drejtimit te automjetit ne perputhje me Aktin e Transportit Rrugor - ZPCP?",
      answer:
        "Nje kopje te licences, kualifikimin e shoferit, certifikate te vecante nese shoferi nuk eshte shtetas i BE-se, kontrate qiraje ose dokument tjeter nese automjeti nuk eshte ne pronesi te transportuesit, lejet e kerkuara nese jane te nevojshme, vertetim te vecante per transport udhetaresh me autobus per llogari te vet, kontraten e punes per shofer autobusi dhe per autotaksi kontrate pune shoferi me kohe te plote.",
    },
    {
      prompt: "Shenoni masat per ruajtjen e aftesise psiko-fizike per te drejtuar makinen.",
      answer:
        "Ndaloni sa me shpesh, ecni perreth per te reduktuar lodhjen dhe per te pershpejtuar qarkullimin e gjakut. Uluni me gjunjet me larte se ijet dhe afer timonit duke u ndjere te sigurt, uluni drejt dhe me mjekren nga brenda, mos u ulni mbi sende qe perkulen shpinen, perdorni mbeshtetje shtese per shpine nese ulesja nuk mjafton, gjate drejtimit duart jane te perkulura, hapni shpesh dritaret e kabines dhe pini shume lengje pa alkool dhe pa gaz.",
    },
    {
      prompt: "Shenoni llojet e paketimit.",
      answer: "Ambalazh letre dhe kartoni, ambalazh plastik, ambalazh metalik, ambalazh prej gjami, ambalazh druri dhe ambalazh tekstili.",
    },
    {
      prompt: "Sa here dhe per sa kohe mund te zgjatet vozitja e shoferit dhe sa here dhe sa mund te shkurtohet pushimi ditor i shoferit ne nje jave individuale?",
      answer: "Shoferi mund te zgjase udhetimin dy here ne jave prej 9 deri ne 10 ore. Pushimin ditor mund ta shkurtoje tri here prej 11 ne 9 ore.",
    },
    {
      prompt: "Pershkruani se si nje shofer mund te perdore pushim javor ne cdo dy jave rresht dhe cfare duhet te beje nese e shkurton pushimin javor.",
      answer:
        "Ne cdo dy jave rresht shoferi ka te pakten dy periudha te rregullta javore pushimi, dy here nga 45 ore, ose nje kohe normale javore pushimi prej 45 oresh dhe nje kohe te shkurtuar javore pushimi qe zgjat te pakten 24 ore. Zvogelimi zevendesohet me nje periudhe te njejte pushimi ne nje here, bashke me nje pushim tjeter te pakten 9 ore, para fundit te javes se trete pas atij te perfshire.",
    },
    {
      prompt: "Per cfare sherben dokumenti shoqerues i eksportit SIL dhe cfare duhet te beje shoferi me te?",
      answer:
        "Dokumenti i eksportit SIL sherben si deshmi e eksportimit te mallrave nga zona doganore e BE-se. Shoferi duhet ta dorezoje ate per verifikim ne daljen nga BE tek zyrtari i doganes, i cili i kthen listen e konfirmuar. Dokumentin SIL duhet ta ktheje pronari i mallrave, ne baze te se ciles eshte i perjashtuar nga pagesa e TVSH-se ne vendin e tij.",
    },
    {
      prompt: "Si mund te korrigjohen te dhenat e futura ne karnetin TIR dhe kush mund te korrigjoje te dhenat ne faqen e pare te kopertinave ne fushat 1-3?",
      answer:
        "Te dhenat ne librin TIR mund te korrigjohen vetem duke bere vije mbi te dhenat e pasakta dhe duke shkruar te dhenat e sakta mbi to. Te shkrimi i permirsuar duhet te jape nenshkrim ai qe e ka permirsuar dhe te vuloset nga organet doganore. Nuk lejohet te fshihen ose te zbardhohen te dhenat. Ne faqen e pare te kopertinave ne kutite 1-3 te dhenat mund te permirsohen vetem nga shoqata kombetare qe ka leshuar librin, me vulen e shoqates.",
    },
    {
      prompt: "Cilet drejtues mjetesh perjashtohen nga marrja e kualifikimeve baze dhe trajnimi i rregullt ne perputhje me Aktin e Transportit Rrugor?",
      answer:
        "Shoferet e makinave ne te cilat shpejtesia maksimale e lejuar nuk kalon 45 km/ore; qe perdoren nga ushtria slovene, policia, sherbimi civil i mbrojtjes ose zjarrfikesit; per udhetime provuese per permiresime teknike, riparime ose mirembajtje; qe perdoren ne raste emergjente ose per shpetim; qe perdoren per mesimin e drejtimit ose per certifikate kualifikimi dhe trajnimi te rregullt; qe transportojne materiale dhe pajisje qe shoferi i perdor ne pune nese drejtimi nuk eshte aktiviteti kryesor; dhe qe perdoren per nevojat e veta dhe personale.",
    },
  ],
  partThree: {
    summary:
      "Do te vozitni nje kamion ne itinerarin Stamboll (Turqi) - Celje (SLO). Ju do te vozitni 1425 km ne 22 ore. Jeni duke transportuar 200 kuti me produkte tekstili ne automjet. Tranzitin do ta perfundoni me karnet TIR.",
    subquestions: [
      {
        prompt: "Specifikoni llojin e transportit.",
        answer: "Transport nderkombetar i mallrave - dypalesh.",
      },
      {
        prompt: "Pershkruani aktivitetet tuaja perpara se te kryeni kete transport.",
        answer:
          "Kontrollimi i automjetit nese eshte teknikisht ne rregull, kontrollimi i dokumenteve te nevojshme per zbatimin e ketij transporti, kontrollimi i te gjitha pajisjeve ne automjet qe jane te nevojshme per te kryer kete transport, njihemi me detyrat gjate udhetimit dhe bejme planin e rruges.",
      },
      {
        prompt: "Si do t'i caktoni oret e vozitjes dhe pushimet gjate kryerjes se ketij transporti?",
        answer:
          "Vozitja do te zgjase 22 ore. Dita e pare: vozis me se shumti 4 ore e 30 minuta, pastaj pushoj 45 minuta, vazhdoj vozitjen 4 ore e 30 minuta dhe bej 11 ore pushim ditor. Dita e dyte: vozis 4 ore e 30 minuta, pushoj 45 minuta, vazhdoj 4 ore e 30 minuta dhe bej 11 ore pushim ditor. Dita e trete: 4 ore vozitje dhe arrij ne destinacionin e duhur.",
      },
      {
        prompt: "Cfare pajisje do te perdorni per te siguruar ngarkesen?",
        answer: "Do te perdori PVC folij dhe qese me fryme.",
      },
      {
        prompt: "Pershkruani dokumentacionin per drejtuesin, mjetin dhe ngarkesen, qe eshte e nevojshme per te kryer kete transport.",
        answer:
          "Dokumentacioni per shoferat: leja e drejtimit me kodin 95 te regjistruar ose karte e vecante me kodin 95, karta e tahografit dhe dokumenti personal/pasaporta. Dokumentacioni per mjet: leje qarkullimi e vlefshme, kopje e licences dhe leja per udhetim me garanci TIR. Dokumentacioni per mallra: CMR fletedergesa nderkombetare, faktura, fleta TIR dhe SIL.",
      },
      {
        prompt: "Emertoni dokumentin ne figuren me poshte dhe shenoni pjeset ne dokument qe duhet te plotesohen nga shoferi - transportuesi.",
        answer: "Lista nderkombetare e transportit te mallrave CMR. Shoferi ose transportuesi duhet te plotesoje rubrikat 16, 17, 18 dhe 23.",
      },
      {
        prompt: "Pershkruani detyrat tuaja kur pranoni dhe dorezoni ngarkesen.",
        answer:
          "Detyrat tek pranimi i mallit: lajmerohem te personi pergjegjes te vendi i ngarkimit, vendos mjetin aty ku behet ngarkimi dhe e hap, kontrolloj gjate ngarkimit, jap udhezime per shperndarjen e mallit, kontrolloj sasine, perputhjen me dokumentet dhe kualitetin, fiksoj mallin, mbyll mjetin dhe nenshkruaj e pranoj dokumentacionin per mallra. Detyrat kur dorezoj mallin: lajmerohem te personi pergjegjes te vendi i shkarkimit, vendos mjetin, e hap, kontrolloj shkarkimin, e mbyll mjetin dhe jap per nenshkrim dokumentet per mallrat e dorezuara.",
      },
      {
        prompt: "Pershkruani detyrat tuaja ne zbatimin e kontrollit doganor nga autoritetet mbikeqyrese.",
        answer:
          "Dokumentet ia dorezoj shpeditorit ne doganen e eksportit dhe pres udhezime nga organet kompetente. Nese vendosin kontrollimin e mallit, ua mundesoj dhe u ndihmoj nese eshte e nevojshme. Pas perfundimit te doganes duhet te jap te vertetojne fleten TIR. Ne proceduren e tranzitit gjate hyrjes dhe daljes nga territori i vendit tranzit, jap per miratim fleten TIR. Ne hyrjen e territorit te Komunitetit Evropian deklaroj mallrat tek autoriteti doganor dhe ua jap fleten TIR per miratim. Autoritetit doganor ia dorezoj mallrat se bashku me fleten TIR permes agjentit shpeditor, pres udhezime, mundesoj kontrollin nese kerkohet dhe pas lejes vazhdoj rrugen deri te pranuesi i mallit.",
      },
    ],
  },
};

realTests["D-PJESSHME"] = {
  1: {
    name: "Testi 1",
    partOne: [
      {
        prompt:
          "Ne stacionin e autobusit udhetari deshiron te ju dorezoje si bagazh nje pako te madhe me permasa 2x2 m dhe te rende 1.500 kg. Ku do ta vendosni ne autobus dhe si do ta perforconi?",
        options: [
          "E vendos ne rimorkio, ku fiksimi nuk eshte i nevojshem.",
          "E vendos ne bagazh (bunker) dhe e lidh me rripa.",
          "Ngarkesen nuk e pranoj per transport pasi i kalon permasat dhe peshen e lejuar per transport ne autobus.",
          "E vendos ne bagazhin e autobusit dhe e lidh me rripa.",
        ],
        correctIndex: 2,
      },
      {
        prompt:
          "Gjate linjes publike te autobusit per transportin e udhetarve ne autobus hyjne dy udhetare, te cilet ulen ne karriget e para te autobusit. Cila eshte detyra e juaj?",
        options: [
          "Qe ti paralajmroj se duhet te lidhen me rrypin e sigurimit.",
          "Per t'i drejtuar ato ne sediljet e pasme, sepse eshte me e sigurt.",
          "Per t'i paralajmeruar se kur do te arrije autobusi ne stacionin e fundit.",
          "Per t'i pyetur nese kane bagazh.",
        ],
        correctIndex: 0,
      },
      {
        prompt:
          "Me cilat nga masat e meposhtme preventive, ka mundesi qe shoferi te zvogloj mundesin e formave te ndryshme kriminele gjat rruges ose ne kohen qe ben transportin e udhetarve?",
        options: [
          "Qe pasagjeret te mos dalin nga autobusi gjate transportit.",
          "Qe mjetin, udhetaret dhe bagazhet gjate gjith kohes i mbikqyr.",
          "Per te vulosur bagazhin e autobusit.",
          "Per te mos u larguar nga autobusi.",
        ],
        correctIndex: 1,
      },
      {
        prompt: "Cili bagazh eshte bagazh i pashoqeruar?",
        options: [
          "Ai qe udheton me te njejtin mjet me pasagjerin.",
          "Ai qe transportohet pavarsisht nga udhetimi i udhetarit.",
          "Ai qe humbet ose demtohet gjate transportit.",
          "Nje qe nuk humbet apo demtohet gjate transportit.",
        ],
        correctIndex: 1,
      },
      {
        prompt: "Qfare eshte linja e veqante e transportit te udhetarve?",
        options: [
          "Transport i nje lloji te udhetarve.",
          "Transporti i te gjithe pasagjereve ne kushte te barabarta.",
          "Transporti me linje ne zonen e qytetit.",
          "Transporti i udhetareve ne nje itinerar te percaktuar nga vete ata.",
        ],
        correctIndex: 0,
      },
      {
        prompt:
          "Ku eshte i percaktuar lloji i transportit, rendi i stacioneve te autobuseve, koha e mberritjes dhe e nisjes, dhe ndalesa e autobusit?",
        options: [
          "Ne orarin e transportit.",
          "Ne fleten shoqeruese per pasagjeret.",
          "Ne kushtet e pergjithshme te transportit.",
          "Ne aktin per kontrollin e brendshem.",
        ],
        correctIndex: 0,
      },
      {
        prompt: "Kur duhet shoferi i transportuesit te informoj stacionin me te afert te autobusit per vonesen?",
        options: [
          "Nese gjate udhetimit krijohen rrethana qe shkaktojne nje vonese me shume se 15 minuta.",
          "Nese gjate udhetimit formohen rrethanat, per te cilat do te kishte me shume se 30 min vonese.",
          "Ai nuk eshte i detyruar te informoje.",
          "Nese lindin rrethana gjate udhetimit, per shkak te te cilave ai parashikon nje vonese prej me shume se nje ore.",
        ],
        correctIndex: 1,
      },
      {
        prompt: "Qfare eshte itenerari i udhetimit?",
        options: [
          "Eshte dokument, qe zavendeson lejen per transporte te perkohshme ne qarkullimin e transportit te udhetarve.",
          "Urdher udhetimi per transport te rastesishem te mallrave.",
          "Dokument shoqerues qe zevendeson licencen per transportin liner ne transportin rrugor nderkombetar te udhetareve.",
          "Dokument shoqerues qe zevendeson lejen e transportit te pasagjereve me autotaksi.",
        ],
        correctIndex: 0,
      },
      {
        prompt: "A duhet te kete shoferi gjate kryerjes se linjes se veqant te transportit te udhetarve kontrat koncesionare?",
        options: [
          "Po gjithmone.",
          "Po, ose vetem kur kryen transport te rastesishem.",
          "Jo.",
          "Jo, sepse kundershtimi nuk eshte konkluduar per kryerjen e trafikut te planifikuar te vecante.",
        ],
        correctIndex: 2,
      },
      {
        prompt: "A mundet qe udhetari te kerkoje kthimin e pageses se biletes?",
        options: [
          "Po, gjithsesi.",
          "Jo, ne asnje rrethane.",
          "Po, nese transporti nuk fillon ne kohen e caktuar.",
          "Po, nese transporti ka filluar ne kohe ose ka perfunduar me vonese per shkak te trafikut te renduar.",
        ],
        correctIndex: 2,
      },
    ],
    partTwo: [
      {
        prompt: "Qfare kushte duhet te plotesohen gjate transportit te personave me nevoja personale?",
        answer:
          "Konsiderohet transport i personave per nevojat e tyre nese transporti kryhet per qellime jokomerciale dhe jofitimprurese nga persona fizike ose juridike dhe autoritete shteterore, ne lidhje me veprimtarine ose detyrat e tyre. Automjetet duhet te jene ne pronesi te ketij personi ose autoriteti, ose ne perdorim me kontrate qiraje ose leasing. Mjetet motorike duhet te drejtohen nga punonjes te transportuesit vendas dhe mjetet duhet te jene ne pronesi te transportuesit vendas ose te marra me qira pa shofer sipas kushteve per transportin rrugor.",
      },
      {
        prompt: "Qfare eshte linja e transportit te udhetarve?",
        answer:
          "Transporti i rregullt i udhetareve eshte metode transporti ku pasagjeret hyjne dhe dalin sipas orarit te udhetimit ne te gjitha stacionet e autobuseve, stacionet kryesore dhe ndalesat e percaktuara me orar.",
      },
      {
        prompt: "Qfare eshte transporti i perkohshem i udhetarve?",
        answer:
          "Transporti i rastesishem i udhetareve ne transportin rrugor eshte transporti i nje grupi te paracaktuar udhetaresh, te mbledhur me iniciativen e klientit ose te vete transportuesit, i cili kryhet sipas vertetimit te transportit te rastit. Nuk duhet te permbaje elemente te perseritura te transportit te planifikuar ose te vecante, si itinerari, koha e nisjes dhe mberritjes, si dhe vendi i hipjes dhe zbarkimit.",
      },
      {
        prompt: "Pershkruaj karakteristikat themelore te transportit te pasagjereve me udhetime alternative ne transportin rrugor nderkombetar.",
        answer:
          "Transporti i kembyeshem i udhetareve ne transportin rrugor nderkombetar eshte transporti i grupeve te udhetareve te mbledhur me pare, ne intervale te caktuara kohore, ne te dy drejtimet nga nje pike e vetme nisjeje ne nje pike te vetme mberritjeje. Grupi duhet te udhetoje ne te dy drejtimet ne te njejten perberje. Cdo grup transportohet perseri ne vendin e nisjes nga i njejti transportues ne udhetimin pasues. Transporti i pare ne kthim dhe transporti i fundit ne nisje kryhet me mjet bosh.",
      },
      {
        prompt: "Cilat kushte duhet te plotesohen nga shoferi per transportimin e femijeve me autobus?",
        answer:
          "Drejtuesit qe transportojne grup femijesh duhet te kene patente shofer per mjetin perkates per te pakten tre vjet dhe te kene drejtuar profesionalisht autobusin e kategorise perkatese D1 ose D per te pakten nje vit. Nese kane me pak se nje vit ne kategorine D, mund te transportojne femije nese me pare kane drejtuar profesionalisht mjete te kategorise C per te pakten dy vjet. Per D1 me me pak se nje vit, mund te transportojne grup femijesh ne autobus deri 16 ulese nese me pare kane drejtuar profesionalisht kategorine B per te pakten dy vjet.",
      },
      {
        prompt: "Qfare rregullon marreveshja nderkombetare per transporte te perkohshme INTERBUS?",
        answer:
          "Marreveshja shume paleshe INTERBUS rregullon fushen e transportit publik te rastit, te cilen Bashkimi Evropian e ka nenshkruar me vendet e treta. Qellimi kryesor eshte te pershpejtoje zhvillimin e transportit nderkombetar ne Evrope, te lehtesoje organizimin dhe funksionimin e transportit te rastit dhe te pershpejtoje turizmin dhe shkembimin kulturor midis vendeve.",
      },
    ],
    partThree: {
      summary:
        "Ne kete pjese te provimit do te shqyrtoni me detyre nje proces te caktuar transporti. Tek pyetje qe kane te bejne me studimin e rastit te transportit, pergjigjuni konkretisht dhe merrni parasysh udhezimet per zgjidhje.",
      subquestions: [
        {
          prompt: "Pershkruani me detaje dokumentin ne foto me poshte!",
          image: {
            src: "assets/potniska-spremnica.png",
            alt: "Potniska spremnica per transport nderkombetar te udhetareve.",
          },
          answer:
            "Dokumenti ne foto eshte dokument udhetimi ne komunitet per transport nderkombetar te udhetareve. Plotesohet para fillimit te transportit, ne dy kopje: njera qendron ne automjet dhe tjetra ne seline e kompanise.",
        },
        {
          prompt: "Lloji i dokumentit?",
          answer: "Dokumenti i udhetimit ne komunitet.",
        },
        {
          prompt: "Ne teritorin e te cilave shtete perdoret ky lloj i dokumentit?",
          answer: "Ne territorin e vendeve te Komunitetit Evropian.",
        },
        {
          prompt: "Kur plotesohet?",
          answer: "Perfundohen/plotesohen para fillimit te transportit.",
        },
        {
          prompt: "Ne sa kopje plotesohet ky dokument?",
          answer: "Duhet te plotesohet ne dy kopje ne gjuhen sllovene.",
        },
        {
          prompt: "Ku gjenden kopjet e veqanta te dokumentit?",
          answer:
            "Nje kopje eshte ne automjet gjate transportit te pasagjereve, kopja tjeter mbetet ne seline e kompanise.",
        },
      ],
    },
  },
};

realTests["D-PJESSHME"][2] = {
  name: "Testi 2",
  partOne: [
    {
      prompt:
        "Si duhet te rregulloje shoferi ndihmesit pedagoge qe shoqerojne transportin e femijeve ne automjet?",
      options: [
        "Asistentet e mesimdhenies duhet te ulen ne sediljet e perparme.",
        "Nje pedagog shoqerues duhet te ulet perpara dhe dy ne pjesen e pasme te mjetit.",
        "Nese i shoqerojne me shume se nje pedagog, ato duhet te shperndahen mes femijeve ne automjet: para, mbrapa dhe ne mes.",
        "Nese jane disa pedagoge qe i shoqerojne, ata duhet te sistemohen ne automjet sipas moshes se femijeve.",
      ],
      correctIndex: 2,
    },
    {
      prompt: "Cila eshte mosha minimale e nje shoqeruesi pedagogjik kur transporton nje grup femijesh?",
      options: ["18 vjec.", "21 vjec.", "16 vjec.", "25 vjet."],
      correctIndex: 1,
    },
    {
      prompt:
        "Sa eshte kufiri i shpejtesise per autobuset ne rruget jashte vendbanimit, ne te cilet udhetaret qendrojne gjate vozitjes?",
      options: ["80 km/h.", "70 km/h.", "60 km/h.", "50 km/h."],
      correctIndex: 2,
    },
    {
      prompt:
        "Cili eshte kufiri i shpejtesise per mjetet motorike qe transportojne udhetare ne stenda ose sedilje te ngjitura ne pjesen e jashtme te mjetit dhe per trenat turistike rrugore?",
      options: ["50 km/h.", "40 km/h.", "30 km/h.", "20 km/h."],
      correctIndex: 3,
    },
    {
      prompt:
        "Ju kryeni transport te kohepaskohshem midis Romes dhe Dubrovnikut. Cilin dokument kontrolli transporti duhet te keni ne autobus?",
      options: [
        "Porosia e udhetimit.",
        "Kontrollo fletoren CEMT.",
        "Dokumenti i udhetimit ne BE.",
        "Karta e udhetimit INTERBUS.",
      ],
      correctIndex: 2,
    },
    {
      prompt: "Ju ofroni nje sherbim te vecante autobusi midis Udine dhe Trieste. Si do ta plotesoni pasaporten?",
      options: [
        "Ashtu si transporti me udhetime te alternuara.",
        "Si nje liber kontrolli CEMT.",
        "Ne bileten e pasagjerit do te shenoj transportin atje me mjet te plote, por me mjet te zbrazet mbrapa.",
        "Ne forme te nje raporti mujor.",
      ],
      correctIndex: 3,
    },
    {
      prompt:
        "Ku mund te mbikeqyre transportin rrugor nje inspektor trafiku? Zgjidhni deklaraten me te sakte.",
      options: [
        "Ne seline e transportuesit.",
        "Gjate transportit.",
        "Ne seline e transportuesit dhe gjate transportit.",
        "Ne seline e transportuesit, gjate rrjedhes se transportit dhe kur perfundon nje kundershtim per transportin.",
      ],
      correctIndex: 2,
    },
    {
      prompt: "Cfare duhet t'i kushtoni vemendje te vecante ne procedurat doganore?",
      options: [
        "Te jesh i sjellshem me autoritetet doganore.",
        "Per te gjetur degen e duhur doganore, d.m.th. zyren doganore.",
        "Qe doganieri te na ktheje te gjitha dokumentet dhe t'i vulose ne perputhje me rrethanat.",
        "Le te bejme procedurat sa me shpejt te jete e mundur.",
      ],
      correctIndex: 2,
    },
    {
      prompt: "A lejon leja e hyrjes per nje autobus bosh kabotazh?",
      options: ["Jo.", "Po.", "Ndonjehere.", "Nese kjo eshte dakorduar."],
      correctIndex: 0,
    },
    {
      prompt:
        "Nga pikepamja e pergjegjesise se transportuesit, cfare duhet te beje shoferi kur pranon bagazhin e dorezuar per transport?",
      options: [
        "Per te percaktuar madhesine dhe peshen e bagazhit.",
        "Per te percaktuar gjeresine e tij.",
        "Per t'i leshuar pasagjerit nje fature per marrjen e bagazhit.",
        "Te kontrollon nese informacioni per mallrat korrespondon me gjendjen aktuale.",
      ],
      correctIndex: 3,
    },
  ],
  partTwo: [
    {
      prompt:
        "Kur, gjate kryerjes se nje sherbimi te rregullt te vecante, mund te merrni edhe udhetare te rastesishem?",
      answer:
        "Nese klienti dhe ofruesi i transportit bien dakord ne kontrate, dhe nese ka kapacitet te mjaftueshem ne mjet. Per te marre pasagjere te rastesishem, transportuesi duhet te marre leje nga autoriteti PPP.",
    },
    {
      prompt:
        "Pershkruani menyren e plotesimit te pasaportes se udhetarit: kush e ploteson, kur plotesohet, cila kopje duhet te jete ne automjet, kush e miraton dhe kush eshte pergjegjes per saktesine?",
      answer:
        "Para fillimit te cdo transporti periodik te udhetareve, transportuesi duhet te plotesoje formularin e pasagjereve ne dy kopje. Kopja e pare duhet te jete ne automjet gjate gjithe transportit dhe shoferi duhet ta tregoje me kerkese te autoriteteve te kontrollit. Kopja e dyte dhe libreza mbahen ne seline e kompanise. Autoritetet kufitare e vulosin pasaporten e pasagjerit ne hyrje dhe dalje nga vendi. Transportuesi mund ta pergatise listen e pasagjereve ne flete te vecante, duke e bashkangjitur me pasaporten. Lista dhe karta duhet te vulosen ose nenshkruhen kur kerkohet. Kur automjeti eshte bosh gjate rruges per atje, lista mund te plotesohet kur hipin pasagjeret. Transportuesi eshte pergjegjes per plotesimin e sakte dhe formulari duhet te plotesohet me shkronja bllok te pashlyeshme.",
    },
    {
      prompt:
        "Cilat mjete transporti perdoren per kryerjen e formave te vecanta te transportit ne transportin e udhetareve dhe kush i percakton kushtet?",
      answer:
        "Forma te vecanta te transportit jane, per shembull, transporti i udhetareve me rimorkio te pershtatura te terhequra nga traktor, treni turistik rrugor ose mjete te tjera rrugore te pershtatura per udhetare. Bashkesia vendore vetqeverisese percakton organizimin, menyren dhe kushtet e kryerjes se ketyre transporteve.",
    },
    {
      prompt: "Ne cilat raste transporti i grupeve te femijeve mund te behet me autobus urban?",
      answer:
        "Autobusi urban mund te perdoret gjate transportit te nje grupi femijesh ne sherbime te rregullta, te rastit dhe te vecanta, ne distance jo me shume se 10 kilometra nga vendbanimi ku ka filluar sherbimi.",
    },
    {
      prompt: "Cfare merr persiper transportuesi duke lidhur kontrate me nje udhetar ne transportin publik me orar?",
      answer:
        "Transportuesi merr persiper ta transportoje pasagjerin sipas kushteve te publikuara te transportit, deri ne destinacion, ne menyre te sigurt, ne kohe, me mjetin e percaktuar ne kontrate dhe ne kushte komode e higjienike qe jane te zakonshme ne trafikun rrugor.",
    },
    {
      prompt:
        "Pershkruani karakteristikat themelore te transportit te udhetareve me udhetime te alternuara ne transportin rrugor nderkombetar.",
      answer:
        "Transporti i kembyeshem i udhetareve ne transportin rrugor nderkombetar eshte transporti i grupeve te udhetareve te mbledhur me pare, ne intervale te caktuara kohore, ne te dy drejtimet nga nje pike e vetme nisjeje ne nje pike te vetme mberritjeje. Grupi duhet te udhetoje ne te dy drejtimet ne te njejten perberje, si deshmohet nga fletet e pasagjereve. Cdo grup transportohet perseri ne vendin e nisjes nga i njejti transportues ne udhetimin pasues. Transporti i pare ne kthim dhe transporti i fundit ne nisje kryhen me mjet bosh.",
    },
  ],
  partThree: {
    summary:
      "Jeni shofer per transportuesin BUSKO doo, Gornja dolina 2, Kranj. Sot filloni udhetimin ne Koper me autobus bosh. Klienti eshte Turizem doo. Shkoni ne Venedik ku merrni 35 turiste amerikane ne aeroport dhe i coni ne vende te ndryshme ne veri te Italise: 15 turiste zbresin ne Verona, 12 ne Bolzano dhe te tjeret ne Trieste. Autobusi ka 48 vende te regjistruara per udhetare. Distancat jane: Koper-Venedik 190 km, Venedik-Verona 120 km, Verona-Bolzano 70 km, Bolzano-Trieste 210 km. Numri i regjistrimit te automjetit eshte LJ 400-5C.",
    subquestions: [
      {
        prompt: "Cfare lloj transporti nderkombetar udhetaresh do te beni?",
        answer: "Transport i rastit ne forme kabotazhi.",
      },
      {
        prompt: "Si do ta shenoni mjetin per kryerjen e ketij transporti?",
        answer:
          "Mjeti shenohet si autobus qe perdoret per transport te herepashershem te turisteve, ekskursione e te ngjashme. Duhet te kete tabele me mbishkrimin TRANSPORT RASTI, me madhesi se paku 500 mm x 140 mm. Mbishkrimi mund te jete edhe ne ekran elektronik.",
      },
      {
        prompt: "Plotesoni formularin e udhetareve per transportin e pershkruar.",
        image: {
          src: "assets/potniska-spremnica-kabotazh.png",
          alt: "Formular i plotesuar i udhetareve per transport kabotazhi.",
        },
        answer:
          "Formulari duhet te plotesohet me te dhenat e transportuesit BUSKO doo, selia Gornja dolina 2, Kranj, regjistrimi i autobusit LJ 400-5C, klienti Turizem doo, lloji i transportit kabotazh/transport i rastit, vendet e nisjes dhe destinacionet ne Itali, numri i udhetareve dhe kilometrat per secilin segment: Koper-Venedik 190 km, Venedik-Verona 120 km, Verona-Bolzano 70 km dhe Bolzano-Trieste 210 km.",
      },
    ],
  },
};

realTests["D-PJESSHME"][3] = {
  name: "Testi 3",
  partOne: [
    {
      prompt: "Në cilin rast transportuesi nuk lëshon një biletë?",
      options: [
        "Kada operon me transport publik me orar.",
        "Kur një pasagjer tregon kartën e aftësisë së kufizuar.",
        "Kada kryen transport me linje speciale.",
        "Ndonjëherë nuk mund të sigurojë një vend të lirë për një pasagjer që transferohet në një fluturim më të shkurtër.",
      ],
      correctIndex: 2,
    },
    {
      prompt: "Cilat dy udhëtime janë bosh kur kryeni transport me udhëtime të alternuara?",
      options: [
        "Kodi i parë i kthimit dhe kodi i fundit i nisjes.",
        "Dy kodet e para të nisjes.",
        "Dy kodet e fundit të kthimit.",
        "Kodi i parë i nisjes dhe kodi i fundit i kthimit.",
      ],
      correctIndex: 0,
    },
    {
      prompt: "Çfarë i jepet pasagjerit të cilit i është konfiskuar bileta?",
      options: [
        "Dënim për një biletë të pavlefshme.",
        "Vërtetim për heqjen e biletës së drejtimit.",
        "Thirrni për një seancë dëgjimore në selinë e transportuesit.",
        "Asgjë.",
      ],
      correctIndex: 1,
    },
    {
      prompt: "Cili bagazh është bagazh i kontrolluar?",
      options: [
        "Ai që udhëton me të njëjtin mjet me pasagjerin.",
        "Ai që transportohet në mënyrë të pavarur nga udhëtimi i pasagjerit.",
        "Ai që humbet ose dëmtohet gjatë transportit.",
        "Një që nuk humbet apo dëmtohet gjatë transportit.",
      ],
      correctIndex: 1,
    },
    {
      prompt:
        "Kur duhet që pasagjeri të sigurohet që pasagjeri të hipë në autobusin e duhur në stacionin e nisjes ose të ndalojë dhe të zbresë nga autobusi në destinacionin përfundimtar?",
      options: [
        "Transportuesi.",
        "Stafi i stacionit ose stacionit të autobusit.",
        "Një udhëtar.",
        "Stafi i vozitjes.",
      ],
      correctIndex: 2,
    },
    {
      prompt:
        "Ku tregohet lloji i transportit, sekuenca e ndalesave të autobusit, koha e mbërritjes, nisjes dhe pushimet për autobusin?",
      options: [
        "Në orar.",
        "Në fletën shoqëruese për pasagjerët.",
        "Në kushtet e përgjithshme të transportit.",
        "Në aktin për kontrollin e brendshëm.",
      ],
      correctIndex: 0,
    },
    {
      prompt: "Kur duhet shoferi të informojë stacionin më të afërt të autobusit për vonesën?",
      options: [
        "Nëse gjatë udhëtimit krijohen rrethana që shkaktojnë një vonesë më shumë se 15 minuta.",
        "Nëse gjatë udhëtimit krijohen rrethana që shkaktojnë një vonesë më shumë se 30 minuta.",
        "Ai nuk është i detyruar të informojë.",
        "Nëse lindin rrethana gjatë udhëtimit, për shkak të të cilave ai parashikon një vonesë prej më shumë se një ore.",
      ],
      correctIndex: 1,
    },
    {
      prompt: "Çfarë është fatura e udhëtarëve?",
      options: [
        "Dokument shoqërues që zëvendëson lejen për transport të rastit në transportin rrugor ndërkombëtar të udhëtarëve.",
        "Urdhër udhëtimi për transport të rastësishëm të mallrave.",
        "Dokument shoqërues që zëvendëson licencën për transportin liner në transportin rrugor ndërkombëtar të udhëtarëve.",
        "Dokument shoqërues që zëvendëson lejen e transportit të pasagjerëve me autotaksi.",
      ],
      correctIndex: 0,
    },
    {
      prompt:
        "Gjatë kryerjes së një transporti të posaçëm me orar, a duhet shoferi të ketë patentë në mjet nëse merr edhe pasagjerë të rastësishëm?",
      options: [
        "Po gjithmone.",
        "Po, ose vetëm kur kryen transport të rastësishëm.",
        "Nr.",
        "Jo, sepse kundërshtimi nuk është konkluduar për kryerjen e trafikut të planifikuar të veçantë.",
      ],
      correctIndex: 0,
    },
    {
      prompt: "A mundet pasagjeri të kërkojë rimbursim të shumës së paguar për udhëtimin?",
      options: [
        "Po, gjithsesi.",
        "Jo, në asnjë rrethanë.",
        "Po, nëse transporti nuk bëhet në kohën e paracaktuar.",
        "Po, nëse transporti ka filluar në kohë ose ka përfunduar me vonesë për shkak të trafikut të rënduar.",
      ],
      correctIndex: 2,
    },
  ],
  partTwo: [
    {
      prompt: "Shkruaj fjalet qe mungojne!",
      answer:
        "Vendi i autoritetit është vendi ku në bazë të kundërshtimit të transportit përfundon transporti.\nBagazhi i kontrolluar janë sende ose objekte që pasagjeri i dorëzon për transport bazuar në një kundërshtim ndaj transportit të bagazheve.\nKërkesa personale janë pretendime që kanë lindur për shkak të vdekjes, problemeve shëndetësore ose lëndimeve të pasagjerëve.\nTransporti sezonal i udhëtarëve në komunikacionin rrugor është transporti që nuk klasifikohet as si transport publik me orar dhe as si transport i veçantë me orar, dhe ku transportohet një grup udhëtarësh të paracaktuar sipas kushteve të përcaktuara me marrëveshje ndërmjet transportuesit dhe personit që urdhëron transportin.",
    },
    {
      prompt: "Për çfarë angazhohet transportuesi duke lëshuar një biletë?",
      answer:
        "Transportuesi angazhohet që vozitja të kryhet sipas orarit, në mënyrë të sigurt, në kohë, me vend për pasagjerin, me autobus të pastër e të rehatshëm, pasi udhëtari paguan për transportin.",
    },
    {
      prompt: "Në cilin rast shoferi ose kontrollori mund të konfiskojë biletën e kohës?",
      answer:
        "Kur bileta është e dëmtuar dhe të dhënat nuk mund të shihen, kur përdoret jashtë rrugës së vlefshme, kur është e falsifikuar, ose kur e përdor një person tjetër.",
    },
    {
      prompt: "Çfarë kushtesh duhet të plotësojë një shofer autobusi për të transportuar fëmijët?",
      answer:
        "Shoferi duhet të ketë kategorinë përkatëse dhe përvojën e kërkuar: për kategorinë D së paku 1 vit përvojë në D; për D1 deri në 16 vende kërkohet përvojë paraprake sipas rregullave; ose përvojë në kategorinë C kur kjo parashihet për transportin e fëmijëve.",
    },
    {
      prompt: "Cilat kushte duhet të plotësohen gjatë transportimit të pasagjerëve për nevojat e tyre?",
      answer:
        "Transporti kryhet për qëllime jokomerciale dhe lidhet me pronarin ose veprimtarinë e tij. Automjeti është në pronësi ose me qira, ndërsa shoferi është pronari, anëtar i familjes ose punonjës i pronarit.",
    },
  ],
  partThree: {
    summary:
      "Në Austri, në bazë të një kundërshtimi, Alpine Fun Sports transporton grupe fëmijësh nga shkolla fillore në Altenmarkt në vendpushimin e skive në Flachau. Ju kryeni transport tre herë në javë. Jeni të punësuar në kompaninë e transportit Zima Tours, Ulica Maršala Tita 17, Jesenice. Numri i regjistrimit të autobusit është KR 673- CR. Distanca midis Altenmarkt dhe Flachau është 11 km. Do të nisni me transportin në datën 1 dhjetor 2017. Të hënën 34 fëmijë shkojnë në qendrën e skive dhe 28 largohen nga qendra; të mërkurën 25 shkojnë dhe 25 kthehen; të premten 30 shkojnë dhe 24 kthehen.",
    subquestions: [
      {
        prompt: "Plotësoni dokumentin e udhëtimit për 1 javë.",
        image: {
          src: "assets/potniska-spremnica.png",
          alt: "Potniska spremnica per transport nderkombetar te udhetareve.",
        },
        answer:
          "Dokumenti i udhëtimit plotësohet për transportuesin Zima Tours, Ulica Maršala Tita 17, Jesenice, me autobus KR 673-CR, klient Alpine Fun Sports, relacion Altenmarkt - Flachau, distancë 11 km. Shënohen udhëtimet javore: e hënë 34 fëmijë për në qendrën e skive dhe 28 kthim, e mërkurë 25 për në qendrën e skive dhe 25 kthim, e premte 30 për në qendrën e skive dhe 24 kthim.",
      },
      {
        prompt: "Çfarë rregullash duhet të respektoni kur kryeni transport të tillë në Republikën e Austrisë?",
        answer:
          "Duhet të respektohen rregulloret për peshën dhe dimensionet, rregulloret për transportin e fëmijëve, taksat si TVSH-ja, si dhe rregullat për kohën e vozitjes, pushimet dhe periudhat e pushimit.",
      },
    ],
  },
};

const makeMultipleChoiceQuestions = (category, testNumber) => {
  const realTest = realTests[category]?.[testNumber];
  if (realTest?.partOne) {
    return realTest.partOne.map((question, index) => ({
      id: `${category}-${testNumber}-mc-${index + 1}`,
      ...question,
    }));
  }

  return Array.from({ length: questionCounts.partOne }, (_, index) => {
    const questionNo = index + 1;

    return {
      id: `${category}-${testNumber}-mc-${questionNo}`,
      prompt: `${category}: Pyetja ${questionNo}. Ketu e vendos pyetjen reale me alternativat A, B, C, D.`,
      options: [
        `Alternativa A per pyetjen ${questionNo}`,
        `Alternativa B per pyetjen ${questionNo}`,
        `Alternativa C per pyetjen ${questionNo}`,
        `Alternativa D per pyetjen ${questionNo}`,
      ],
      correctIndex: questionNo % 4,
    };
  });
};

const makeWrittenQuestions = (category, testNumber) => {
  const realTest = realTests[category]?.[testNumber];
  if (realTest?.partTwo) {
    return realTest.partTwo.map((question, index) => ({
      id: `${category}-${testNumber}-wr-${index + 1}`,
      ...question,
    }));
  }

  return Array.from({ length: questionCounts.partTwo }, (_, index) => {
    const questionNo = index + 1;

    return {
      id: `${category}-${testNumber}-wr-${questionNo}`,
      prompt: `${category}: Pyetje me shkrim ${questionNo}. Ketu vendoset teksti real i pyetjes ku kandidati duhet te shkruaje pergjigjen.`,
      answer: `Pergjigjja orientuese per pyetjen ${questionNo} te testit ${testNumber}.`,
    };
  });
};

const makeTask = (category, testNumber) => {
  const realTest = realTests[category]?.[testNumber];
  if (realTest?.partThree) {
    return {
      id: `${category}-${testNumber}-task`,
      summary: realTest.partThree.summary,
      subquestions: realTest.partThree.subquestions.map((question, index) => ({
        id: `${category}-${testNumber}-task-${index + 1}`,
        ...question,
      })),
    };
  }

  return {
    id: `${category}-${testNumber}-task`,
    summary: `Detyra finale e testit ${testNumber} per kategorine ${category}. Ketu shkruhet rasti praktik ose skenari qe pasohet nga nenpyetjet.`,
    subquestions: Array.from({ length: questionCounts.partThree }, (_, index) => ({
      id: `${category}-${testNumber}-task-${index + 1}`,
      prompt: `Nenpyetja ${index + 1} e detyres finale.`,
      answer: `Pergjigjja orientuese per nenpyetjen ${index + 1}.`,
    })),
  };
};

const buildTests = (categoryId, amount) =>
  Array.from({ length: amount }, (_, index) => {
    const testNumber = index + 1;
    return {
      id: `${categoryId.toLowerCase()}-${testNumber}`,
      name: `Testi ${testNumber}`,
      categoryId,
      partOne: makeMultipleChoiceQuestions(categoryId, testNumber),
      partTwo: makeWrittenQuestions(categoryId, testNumber),
      partThree: makeTask(categoryId, testNumber),
    };
  });

const appData = {
  categories: Object.values(categoryConfig).map((category) => ({
    ...category,
    tests: buildTests(category.id, category.testCount),
  })),
};

const state = {
  currentUser: null,
  selectedTestId: null,
  answers: {},
  questionSearch: "",
  questionFilter: "all",
};

let saveAnswersTimer = null;
let activeImageEditor = null;

const authShell = document.getElementById("auth-shell");
const appShell = document.getElementById("app-shell");
const loginTab = document.getElementById("login-tab");
const registerTab = document.getElementById("register-tab");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const authStatus = document.getElementById("auth-status");
const testList = document.getElementById("test-list");
const testCategoryLabel = document.getElementById("test-category-label");
const testTitle = document.getElementById("test-title");
const testMeta = document.getElementById("test-meta");
const testContainer = document.getElementById("test-container");
const profileName = document.getElementById("profile-name");
const profileCategory = document.getElementById("profile-category");
const activeCategoryBadge = document.getElementById("active-category-badge");
const activeCategoryDescription = document.getElementById("active-category-description");
const logoutButton = document.getElementById("logout-btn");
const progressLabel = document.getElementById("progress-label");
const progressCount = document.getElementById("progress-count");
const progressBar = document.getElementById("progress-bar");
const questionSearch = document.getElementById("question-search");
const questionFilter = document.getElementById("question-filter");
const clearTestButton = document.getElementById("clear-test-btn");

const safeReadJson = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  } catch (error) {
    localStorage.removeItem(key);
    return fallback;
  }
};

const normalizeUser = (user) => {
  if (!user) {
    return null;
  }

  const categoryId = categoryConfig[user.categoryId]?.id || categoryConfig[user.category]?.id || "C";

  return {
    ...user,
    categoryId,
  };
};

const readUsers = () => {
  const users = safeReadJson(storageKeys.users, []);
  return (Array.isArray(users) ? users : []).map(normalizeUser).filter(Boolean);
};
const writeUsers = (users) =>
  localStorage.setItem(storageKeys.users, JSON.stringify(users.map(normalizeUser)));
const saveSession = (user) =>
  localStorage.setItem(storageKeys.session, JSON.stringify(normalizeUser(user)));
const readSession = () => normalizeUser(safeReadJson(storageKeys.session, null));
const clearSession = () => localStorage.removeItem(storageKeys.session);
const readSavedAnswers = () => safeReadJson(storageKeys.answers, {});
const writeSavedAnswers = (answers) =>
  localStorage.setItem(storageKeys.answers, JSON.stringify(answers));

const apiRequest = async (url, options = {}) => {
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const error = new Error(data.message || "Kerkesa nuk u krye.");
    error.status = response.status;
    throw error;
  }

  return data;
};

const authRequest = (payload) =>
  apiRequest("/api/auth", {
    method: "POST",
    body: JSON.stringify(payload),
  });

const loadRemoteAnswers = async (testId = state.selectedTestId) => {
  if (!state.currentUser?.email || !testId) {
    return null;
  }

  const params = new URLSearchParams({
    email: state.currentUser.email,
    testId,
  });
  const data = await apiRequest(`/api/answers?${params.toString()}`);
  return data.answers || {};
};

const saveRemoteAnswers = async (testId = state.selectedTestId, answers = state.answers) => {
  if (!state.currentUser?.email || !testId) {
    return;
  }

  await apiRequest("/api/answers", {
    method: "POST",
    body: JSON.stringify({
      email: state.currentUser.email,
      testId,
      answers,
    }),
  });
};

const getCurrentCategory = () =>
  appData.categories.find((category) => category.id === state.currentUser.categoryId) ||
  appData.categories[0];

const getSelectedTest = () =>
  getCurrentCategory().tests.find((test) => test.id === state.selectedTestId) ||
  getCurrentCategory().tests[0];

const getAnswerStorageKey = (testId = state.selectedTestId) =>
  `${state.currentUser.email}:${testId}`;

const saveAnswersLocally = (testId = state.selectedTestId, answers = state.answers) => {
  if (!state.currentUser || !testId) {
    return;
  }

  const savedAnswers = readSavedAnswers();
  savedAnswers[getAnswerStorageKey(testId)] = answers;
  writeSavedAnswers(savedAnswers);
};

const saveAnswers = () => {
  if (!state.currentUser || !state.selectedTestId) {
    return;
  }

  saveAnswersLocally();

  window.clearTimeout(saveAnswersTimer);
  saveAnswersTimer = window.setTimeout(() => {
    saveRemoteAnswers().catch(() => {
      authStatus.textContent = "Pergjigjet u ruajten lokalisht. Databaza nuk eshte lidhur ende.";
    });
  }, 450);
};

const clearCurrentTestAnswers = async () => {
  if (!state.currentUser || !state.selectedTestId) {
    return;
  }

  const testId = state.selectedTestId;
  state.answers = {};
  saveAnswersLocally(testId, {});
  window.clearTimeout(saveAnswersTimer);

  try {
    await saveRemoteAnswers(testId, {});
  } catch (error) {
    if (authStatus) {
      authStatus.textContent = "Testi u pastrua lokalisht. Databaza nuk eshte lidhur ende.";
    }
  }
};

const loadAnswers = async () => {
  const savedAnswers = readSavedAnswers();
  state.answers = savedAnswers[getAnswerStorageKey()] || {};

  try {
    const remoteAnswers = await loadRemoteAnswers();
    state.answers = remoteAnswers;
    saveAnswersLocally();
  } catch (error) {
    if (authStatus && state.currentUser) {
      authStatus.textContent = "Databaza nuk u lexua, po perdoren pergjigjet lokale.";
    }
  }
};

const createMetaPill = (label) => {
  const pill = document.createElement("span");
  pill.className = "meta-pill";
  pill.textContent = label;
  return pill;
};

const setAuthMode = (mode) => {
  const isLogin = mode === "login";
  loginTab.classList.toggle("is-active", isLogin);
  registerTab.classList.toggle("is-active", !isLogin);
  loginForm.classList.toggle("is-hidden", !isLogin);
  registerForm.classList.toggle("is-hidden", isLogin);
  authStatus.textContent = "";
};

const getAnswerState = (questionId, correctIndex) => {
  const selectedIndex = state.answers[questionId];
  if (selectedIndex === undefined) {
    return "unanswered";
  }
  return selectedIndex === correctIndex ? "correct" : "wrong";
};

const getAllQuestions = (test) => [
  ...test.partOne.map((question) => ({ ...question, type: "choice" })),
  ...test.partTwo.map((question) => ({ ...question, type: "written" })),
  ...test.partThree.subquestions.map((question) => ({ ...question, type: "written" })),
];

const isQuestionAnswered = (question) => {
  const answer = state.answers[question.id];
  if (question.type === "choice") {
    return answer !== undefined;
  }

  return typeof answer === "string" && answer.trim().length > 0;
};

const getProgress = (test) => {
  const questions = getAllQuestions(test);
  const answered = questions.filter(isQuestionAnswered).length;
  const total = questions.length;
  const percent = total ? Math.round((answered / total) * 100) : 0;

  return { answered, total, percent };
};

const renderProgress = () => {
  const test = getSelectedTest();
  const { answered, total, percent } = getProgress(test);

  if (!progressLabel || !progressCount || !progressBar) {
    return;
  }

  progressLabel.textContent = `${percent}% e perfunduar`;
  progressCount.textContent = `${answered}/${total}`;
  progressBar.style.width = `${percent}%`;
};

const normalizeSearch = (value) => value.toLowerCase().trim();

const questionMatchesSearch = (question) => {
  const search = normalizeSearch(state.questionSearch);
  if (!search) {
    return true;
  }

  const searchableText = [
    question.prompt,
    question.answer,
    ...(question.options || []),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return searchableText.includes(search);
};

const questionMatchesFilter = (question) => {
  if (state.questionFilter === "all") {
    return true;
  }

  if (state.questionFilter === "unanswered") {
    return !isQuestionAnswered(question);
  }

  if (state.questionFilter === "wrong") {
    return question.type === "choice" && getAnswerState(question.id, question.correctIndex) === "wrong";
  }

  return true;
};

const getVisibleQuestions = (questions, type) =>
  questions
    .map((question) => ({ ...question, type }))
    .filter((question) => questionMatchesSearch(question) && questionMatchesFilter(question));

const createEmptyState = () => {
  const empty = document.createElement("p");
  empty.className = "empty-state";
  empty.textContent = "Nuk ka pyetje qe perputhen me kerkimin ose filtrin aktual.";
  return empty;
};

const getImageNotesKey = (questionId) => `${questionId}-image-notes`;

const getImageNotes = (questionId) => {
  const notes = state.answers[getImageNotesKey(questionId)];
  return Array.isArray(notes) ? notes : [];
};

const saveImageNotes = (questionId, notes) => {
  state.answers[getImageNotesKey(questionId)] = notes;
  saveAnswers();
};

const closeImageEditor = () => {
  if (!activeImageEditor) {
    return;
  }

  activeImageEditor.remove();
  activeImageEditor = null;
  document.body.classList.remove("is-editor-open");
};

const openImageEditor = (question) => {
  closeImageEditor();

  const notes = getImageNotes(question.id).map((note) => ({ ...note }));
  let zoom = 1;

  const modal = document.createElement("div");
  modal.className = "image-editor-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");

  const panel = document.createElement("div");
  panel.className = "image-editor-panel";

  const toolbar = document.createElement("div");
  toolbar.className = "image-editor-toolbar";

  const title = document.createElement("div");
  title.className = "image-editor-title";
  title.textContent = "Sheno mbi foto";

  const actions = document.createElement("div");
  actions.className = "image-editor-actions";

  const addTextButton = document.createElement("button");
  addTextButton.type = "button";
  addTextButton.className = "image-editor-btn";
  addTextButton.textContent = "Shto tekst";

  const zoomOutButton = document.createElement("button");
  zoomOutButton.type = "button";
  zoomOutButton.className = "image-editor-btn image-editor-btn--icon";
  zoomOutButton.textContent = "-";
  zoomOutButton.setAttribute("aria-label", "Zvogelo foton");

  const zoomLabel = document.createElement("span");
  zoomLabel.className = "image-editor-zoom";

  const zoomInButton = document.createElement("button");
  zoomInButton.type = "button";
  zoomInButton.className = "image-editor-btn image-editor-btn--icon";
  zoomInButton.textContent = "+";
  zoomInButton.setAttribute("aria-label", "Zmadho foton");

  const closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.className = "image-editor-btn image-editor-btn--secondary";
  closeButton.textContent = "Mbyll";

  const viewport = document.createElement("div");
  viewport.className = "image-editor-viewport";

  const stage = document.createElement("div");
  stage.className = "image-editor-stage";

  const image = document.createElement("img");
  image.src = question.image.src;
  image.alt = question.image.alt || "";
  image.className = "image-editor-image";

  const noteLayer = document.createElement("div");
  noteLayer.className = "image-editor-note-layer";

  const updateZoom = () => {
    stage.style.transform = `scale(${zoom})`;
    zoomLabel.textContent = `${Math.round(zoom * 100)}%`;
  };

  const renderNotes = () => {
    noteLayer.innerHTML = "";

    notes.forEach((note) => {
      const noteElement = document.createElement("div");
      noteElement.className = "image-note";
      noteElement.style.left = `${note.x}%`;
      noteElement.style.top = `${note.y}%`;

      const handle = document.createElement("button");
      handle.type = "button";
      handle.className = "image-note__handle";
      handle.textContent = "Leviz";

      const text = document.createElement("div");
      text.className = "image-note__text";
      text.contentEditable = "true";
      text.textContent = note.text || "Shkruaj ketu";
      text.setAttribute("aria-label", "Teksti mbi foto");

      const removeButton = document.createElement("button");
      removeButton.type = "button";
      removeButton.className = "image-note__remove";
      removeButton.textContent = "x";
      removeButton.setAttribute("aria-label", "Hiqe tekstin");

      text.addEventListener("input", () => {
        note.text = text.textContent.trim();
        saveImageNotes(question.id, notes);
      });

      removeButton.addEventListener("click", () => {
        const index = notes.findIndex((item) => item.id === note.id);
        if (index >= 0) {
          notes.splice(index, 1);
          saveImageNotes(question.id, notes);
          renderNotes();
        }
      });

      handle.addEventListener("pointerdown", (event) => {
        event.preventDefault();
        handle.setPointerCapture(event.pointerId);

        const moveNote = (moveEvent) => {
          const rect = stage.getBoundingClientRect();
          const x = ((moveEvent.clientX - rect.left) / rect.width) * 100;
          const y = ((moveEvent.clientY - rect.top) / rect.height) * 100;
          note.x = Math.max(0, Math.min(92, x));
          note.y = Math.max(0, Math.min(92, y));
          noteElement.style.left = `${note.x}%`;
          noteElement.style.top = `${note.y}%`;
        };

        const stopMove = () => {
          handle.removeEventListener("pointermove", moveNote);
          handle.removeEventListener("pointerup", stopMove);
          handle.removeEventListener("pointercancel", stopMove);
          saveImageNotes(question.id, notes);
        };

        handle.addEventListener("pointermove", moveNote);
        handle.addEventListener("pointerup", stopMove);
        handle.addEventListener("pointercancel", stopMove);
      });

      noteElement.append(handle, text, removeButton);
      noteLayer.appendChild(noteElement);
    });
  };

  addTextButton.addEventListener("click", () => {
    notes.push({
      id: `note-${Date.now()}`,
      text: "Shkruaj ketu",
      x: 12,
      y: 12,
    });
    saveImageNotes(question.id, notes);
    renderNotes();
  });

  zoomOutButton.addEventListener("click", () => {
    zoom = Math.max(0.5, Number((zoom - 0.25).toFixed(2)));
    updateZoom();
  });

  zoomInButton.addEventListener("click", () => {
    zoom = Math.min(3, Number((zoom + 0.25).toFixed(2)));
    updateZoom();
  });

  closeButton.addEventListener("click", closeImageEditor);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeImageEditor();
    }
  });

  document.addEventListener(
    "keydown",
    (event) => {
      if (event.key === "Escape") {
        closeImageEditor();
      }
    },
    { once: true }
  );

  actions.append(addTextButton, zoomOutButton, zoomLabel, zoomInButton, closeButton);
  toolbar.append(title, actions);
  stage.append(image, noteLayer);
  viewport.appendChild(stage);
  panel.append(toolbar, viewport);
  modal.appendChild(panel);
  document.body.appendChild(modal);
  document.body.classList.add("is-editor-open");
  activeImageEditor = modal;

  updateZoom();
  renderNotes();
};

const createMultipleChoiceCard = (question, index) => {
  const card = document.createElement("article");
  card.className = "question-card";

  const title = document.createElement("div");
  title.className = "question-card__title";
  title.innerHTML = `
    <span class="question-number">${index + 1}</span>
    <p class="question-text">${question.prompt}</p>
  `;

  const answerGrid = document.createElement("div");
  answerGrid.className = "answer-grid";

  question.options.forEach((option, optionIndex) => {
    const button = document.createElement("button");
    button.type = "button";

    const isSelected = state.answers[question.id] === optionIndex;
    const answerState = getAnswerState(question.id, question.correctIndex);
    let visualState = "is-neutral";

    if (isSelected && answerState === "correct") {
      visualState = "is-correct";
    }

    if (isSelected && answerState === "wrong") {
      visualState = "is-wrong";
    }

    button.className = `answer-option ${visualState}`;
    button.innerHTML = `<span>${["A", "B", "C", "D"][optionIndex]}</span>${option}`;
    button.addEventListener("click", () => {
      state.answers[question.id] = optionIndex;
      saveAnswers();
      renderTestContent();
    });
    answerGrid.appendChild(button);
  });

  card.append(title, answerGrid);
  return card;
};

const createRevealAnswerCard = (question, index, labelPrefix) => {
  const card = document.createElement("article");
  card.className = "question-card";

  const wrapper = document.createElement("div");
  wrapper.className = "write-answer";

  const title = document.createElement("div");
  title.className = "question-card__title";
  title.innerHTML = `
    <span class="question-number">${index + 1}</span>
    <p class="question-text">${labelPrefix} ${index + 1}: ${question.prompt}</p>
  `;

  const textarea = document.createElement("textarea");
  textarea.className = "text-answer";
  textarea.placeholder = "Shkruaj pergjigjen tende ketu...";
  textarea.value = state.answers[question.id] || "";
  textarea.addEventListener("input", (event) => {
    state.answers[question.id] = event.target.value;
    saveAnswers();
    renderProgress();
  });

  const actionRow = document.createElement("div");
  actionRow.className = "action-row";

  const toggleButton = document.createElement("button");
  toggleButton.type = "button";
  toggleButton.className = "action-btn";
  toggleButton.textContent = "Shiko pergjigjen";

  const resetButton = document.createElement("button");
  resetButton.type = "button";
  resetButton.className = "action-btn action-btn--secondary";
  resetButton.textContent = "Pastro";

  const answerReveal = document.createElement("div");
  answerReveal.className = "answer-reveal";
  answerReveal.textContent = question.answer;

  const media = question.image ? document.createElement("img") : null;
  if (media) {
    media.className = "question-image";
    media.src = question.image.src;
    media.alt = question.image.alt || "";
    media.title = "Kliko per ta zmadhuar dhe per te shkruar mbi foto";
    media.tabIndex = 0;
    media.addEventListener("click", () => openImageEditor(question));
    media.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openImageEditor(question);
      }
    });
  }

  toggleButton.addEventListener("click", () => {
    answerReveal.classList.toggle("is-visible");
    const isVisible = answerReveal.classList.contains("is-visible");
    toggleButton.textContent = isVisible ? "Fshih pergjigjen" : "Shiko pergjigjen";
  });

  resetButton.addEventListener("click", () => {
    state.answers[question.id] = "";
    textarea.value = "";
    saveAnswers();
    renderProgress();
  });

  actionRow.append(toggleButton, resetButton);
  wrapper.append(title);
  if (media) {
    wrapper.appendChild(media);
  }
  wrapper.append(textarea, actionRow, answerReveal);
  card.appendChild(wrapper);
  return card;
};

const createSectionCard = (titleText, introText) => {
  const section = document.createElement("section");
  section.className = "section-card";

  const title = document.createElement("h3");
  title.textContent = titleText;

  const intro = document.createElement("p");
  intro.className = "section-card__intro";
  intro.textContent = introText;

  section.append(title, intro);
  return section;
};

const renderTestContent = () => {
  const test = getSelectedTest();
  testContainer.innerHTML = "";
  renderProgress();

  const visiblePartOne = getVisibleQuestions(test.partOne, "choice");
  const visiblePartTwo = getVisibleQuestions(test.partTwo, "written");
  const visiblePartThree = getVisibleQuestions(test.partThree.subquestions, "written");

  const partOne = createSectionCard(
    "Pjesa 1: Pyetje me alternativa",
    "Zgjidh nje alternative. Secila pyetje vlen 1 pike. Nese eshte e sakte shfaqet me ngjyre te gjelber, nese eshte gabim shfaqet me te kuqe dhe mund ta permiresosh menjehere."
  );
  partOne.classList.add("section-card--multiple-choice");
  visiblePartOne.length
    ? visiblePartOne.forEach((question, index) => {
        partOne.appendChild(createMultipleChoiceCard(question, index));
      })
    : partOne.appendChild(createEmptyState());

  const partTwo = createSectionCard(
    "Pjesa 2: Pergjigje me shkrim",
    "Kjo pjese ruan gjeresine e plote te faqes. Kandidati shkruan pergjigjen dhe mund ta hape zgjidhjen orientuese me nje klikim."
  );
  visiblePartTwo.length
    ? visiblePartTwo.forEach((question, index) => {
        partTwo.appendChild(createRevealAnswerCard(question, index, "Pyetja"));
      })
    : partTwo.appendChild(createEmptyState());

  const partThree = createSectionCard(
    "Pjesa 3: Detyra finale me nenpyetje",
    "Edhe pjesa e trete mbetet me te njejten gjeresi si pjeset tjera, me nje skenar praktik dhe nenpyetje me shkrim."
  );

  const taskSummary = document.createElement("div");
  taskSummary.className = "task-summary";
  taskSummary.textContent = test.partThree.summary;
  partThree.appendChild(taskSummary);

  visiblePartThree.length
    ? visiblePartThree.forEach((question, index) => {
        partThree.appendChild(createRevealAnswerCard(question, index, "Nenpyetja"));
      })
    : partThree.appendChild(createEmptyState());

  testContainer.append(partOne, partTwo, partThree);
};

const renderHeader = () => {
  const category = getCurrentCategory();
  const test = getSelectedTest();

  testCategoryLabel.textContent = category.label;
  testTitle.textContent = test.name;
  testMeta.innerHTML = "";
  testMeta.append(
    createMetaPill(`${test.partOne.length} pyetje me alternativa nga 1 pike`),
    createMetaPill(`${test.partTwo.length} pyetje me shkrim`),
    createMetaPill(`1 detyre me ${test.partThree.subquestions.length} nenpyetje`)
  );
};

const renderTestList = () => {
  const category = getCurrentCategory();
  const savedAnswers = readSavedAnswers();
  testList.innerHTML = "";

  category.tests.forEach((test) => {
    const originalAnswers = state.answers;
    state.answers = savedAnswers[getAnswerStorageKey(test.id)] || {};
    const { percent } = getProgress(test);
    state.answers = originalAnswers;

    const button = document.createElement("button");
    button.type = "button";
    button.className = `test-btn${test.id === state.selectedTestId ? " is-active" : ""}`;
    button.innerHTML = `<span>${test.name}</span><small>${percent}%</small>`;
    button.addEventListener("click", () => {
      state.selectedTestId = test.id;
      state.questionSearch = "";
      state.questionFilter = "all";
      renderApp();
    });
    testList.appendChild(button);
  });
};

const renderProfile = () => {
  const category = getCurrentCategory();
  profileName.textContent = state.currentUser.name;
  profileCategory.textContent = category.label;
  activeCategoryBadge.textContent = category.shortLabel;
  activeCategoryDescription.textContent = category.description;
};

const renderApp = async () => {
  if (!state.currentUser) {
    authShell.classList.remove("is-hidden");
    appShell.classList.add("is-hidden");
    return;
  }

  authShell.classList.add("is-hidden");
  appShell.classList.remove("is-hidden");

  const category = getCurrentCategory();
  if (!state.selectedTestId || !category.tests.some((test) => test.id === state.selectedTestId)) {
    state.selectedTestId = category.tests[0].id;
  }

  await loadAnswers();
  if (questionSearch) {
    questionSearch.value = state.questionSearch;
  }

  if (questionFilter) {
    questionFilter.value = state.questionFilter;
  }

  renderProfile();
  renderTestList();
  renderHeader();
  renderTestContent();
};

loginTab?.addEventListener("click", () => setAuthMode("login"));
registerTab?.addEventListener("click", () => setAuthMode("register"));

if (questionSearch) {
  questionSearch.addEventListener("input", (event) => {
    state.questionSearch = event.target.value;
    renderTestContent();
  });
}

if (questionFilter) {
  questionFilter.addEventListener("change", (event) => {
    state.questionFilter = event.target.value;
    renderTestContent();
  });
}

if (clearTestButton) {
  clearTestButton.addEventListener("click", async () => {
    await clearCurrentTestAnswers();
    renderTestList();
    renderTestContent();
  });
}

registerForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const users = readUsers();
  const name = document.getElementById("register-name").value.trim();
  const email = document.getElementById("register-email").value.trim().toLowerCase();
  const password = document.getElementById("register-password").value;
  const categoryId = document.getElementById("register-category").value;

  authStatus.textContent = "Duke krijuar account...";

  let user = null;
  try {
    const data = await authRequest({
      action: "register",
      name,
      email,
      password,
      categoryId,
    });
    user = data.user;
  } catch (error) {
    if (error.status && error.status < 500) {
      authStatus.textContent = error.message;
      return;
    }

    const exists = users.some((item) => item.email === email);
    if (exists) {
      authStatus.textContent = "Ky email ekziston. Provo login ose nje email tjeter.";
      return;
    }

    user = { name, email, password, categoryId };
    users.push(user);
    writeUsers(users);
    authStatus.textContent = "API nuk eshte gati ende, account u ruajt lokalisht.";
  }

  state.currentUser = user;
  state.selectedTestId = null;
  state.questionSearch = "";
  state.questionFilter = "all";
  saveSession(user);
  registerForm.reset();
  await renderApp();
});

loginForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("login-email").value.trim().toLowerCase();
  const password = document.getElementById("login-password").value;
  const users = readUsers();

  authStatus.textContent = "Duke hyre...";

  let user = null;
  try {
    const data = await authRequest({
      action: "login",
      email,
      password,
    });
    user = data.user;
  } catch (error) {
    if (error.status && error.status < 500) {
      authStatus.textContent = error.message;
      return;
    }

    user = users.find((item) => item.email === email && item.password === password);
    if (!user) {
      authStatus.textContent = "Email ose fjalekalim jo i sakte.";
      return;
    }

    authStatus.textContent = "API nuk eshte gati ende, po hyn me account lokal.";
  }

  state.currentUser = user;
  state.selectedTestId = null;
  state.questionSearch = "";
  state.questionFilter = "all";
  saveSession(user);
  loginForm.reset();
  await renderApp();
});

logoutButton?.addEventListener("click", () => {
  state.currentUser = null;
  state.selectedTestId = null;
  state.answers = {};
  state.questionSearch = "";
  state.questionFilter = "all";
  clearSession();
  renderApp();
});

const boot = async () => {
  try {
    const existingSession = readSession();
    if (existingSession) {
      state.currentUser = existingSession;
    }
    setAuthMode("login");
    await renderApp();
  } catch (error) {
    state.currentUser = null;
    clearSession();
    setAuthMode("login");
    authShell.classList.remove("is-hidden");
    appShell.classList.add("is-hidden");
    if (authStatus) {
      authStatus.textContent = "Aplikacioni u rifreskua. Provo regjistrimin edhe nje here.";
    }
  }
};

boot();
