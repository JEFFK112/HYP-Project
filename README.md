**Universitatea Hyperion**

Nume - Mahdi Jafer-Rafed

Stiinte Exacte si Ingineresti                     Automatizarea Calculatorelor si Informatica Aplicata III

**Proiect**

**Ingineria Sistemelor de Programare**

**Cuprins Proiect**

1. Introducere...................................................................................................................................3
1. Definitia Stackului MERN...............................................................................................3
1. Importanța stack-ului MERN în dezvoltarea web modernă.............................................4
1. Motivația alegerii stack-ului MERN................................................................................4
2. MongoDB....................................................................................................................................5
1. Ce este MongoDB............................................................................................................5
1. funcționalități ale MongoDB............................................................................................6
1. Dezavantaje MongoDB....................................................................................................6
1. Configurarea și conectarea unei baze de date MongoDB în proiect................................7
1. Schema.............................................................................................................................8
3. Express.........................................................................................................................................8
1. Ce este Express.................................................................................................................8
1. Caracteristici și funcționalități ale Express......................................................................9
1. Despre Nodemon............................................................................................................10
1. Model-View-Controller..................................................................................................10
1. Schema...........................................................................................................................11
4. React..........................................................................................................................................12
1. Ce este React..................................................................................................................12
1. Care sunt avantajele utilizării React pentru construirea interfețelor de utilizator?........12
1. despre useState...............................................................................................................12
1. Despre useEffect.............................................................................................................13
1. Despre RxJS...................................................................................................................13
1. Despre Axios..................................................................................................................13
1. Schema...........................................................................................................................14
1. **Introducere**

<a name="_page2_x56.70_y66.70"></a>În era digitală actuală, dezvoltarea aplicațiilor web moderne necesită tehnologii și framework-uri puternice care să ofere flexibilitate, scalabilitate și performanță. În acest context, stack-ul MERN (MongoDB, Express, React, Node.js) a devenit una dintre alegerile preferate ale dezvoltatorilor datorită multiplelor sale avantaje și beneficii pe care le oferă în dezvoltarea aplicațiilor web full- stack.

Acest proiect se concentrează pe explorarea și înțelegerea stack-ului MERN și a modului în care fiecare componentă contribuie la construirea unei aplicații web complete și moderne. Vom explora fundamentul tehnologic al fiecărei componente, vom discuta despre sinergia lor și vom analiza importanța acestui stack în contextul dezvoltării web moderne.

1. **Definitia<a name="_page2_x56.70_y262.75"></a> Stackului MERN**

Stack-ul MERN reprezintă un set de tehnologii pentru dezvoltarea aplicațiilor web full-stack, utilizând JavaScript atât pe partea de client (frontend) cât și pe partea de server (backend). Denumirea MERN provine de la inițialele celor patru tehnologii principale care compun acest stack:

MongoDB: O bază de date NoSQL document-oriented, utilizată pentru stocarea datelor în format JSON-like (BSON). MongoDB este scalabilă și flexibilă, permițând dezvoltatorilor să gestioneze date structurate și semi-structurate cu ușurință.

Express: Un framework web minimalist pentru Node.js, care oferă un set robust de caracteristici pentru aplicații web și mobile. Express simplifică gestionarea rutelor, middleware-ului și cererilor HTTP, facilitând crearea rapidă a backend-urilor eficiente și scalabile.

React: O bibliotecă JavaScript pentru construirea interfețelor de utilizator (UI) dezvoltate de Facebook. React permite dezvoltatorilor să creeze componente UI reutilizabile, să gestioneze starea aplicației și să ofere o experiență de utilizare fluidă prin actualizări eficiente ale DOM-ului (Document Object Model).

Node.js: Un runtime environment pentru execuția codului JavaScript pe server, construit pe motorul V8 de la Google Chrome. Node.js permite dezvoltarea de aplicații backend asyncrone, bazate pe evenimente, care sunt extrem de performante și scalabile.

Sinergia Stack-ului MERN

Stack-ul MERN este valoros deoarece toate componentele sale utilizează JavaScript. Aceasta înseamnă că un dezvoltator poate lucra atât pe partea de frontend cât și pe cea de backend, folosind același limbaj de programare, ceea ce simplifică procesul de dezvoltare și învățare.

MongoDB și Node.js: Node.js poate utiliza driverele MongoDB pentru a interacționa direct cu baza de date, făcând operațiunile de citire și scriere rapide și eficiente.

Express și Node.js: Express rulează pe platforma Node.js, oferind un mod simplificat de gestionare a rutelor și cererilor HTTP.

React și Express: React poate comunica cu serverele Express prin cereri HTTP, de obicei folosind librării precum Axios sau Fetch API pentru a prelua și trimite date către backend.

React și MongoDB: Prin intermediul Express și Node.js, React poate obține date din MongoDB și le poate afișa utilizatorilor într-un mod dinamic și interactiv.

Această combinație de tehnologii oferă o soluție completă și unificată pentru dezvoltarea aplicațiilor web moderne, acoperind toate aspectele, de la gestionarea bazelor de date și serverele web, până la interfețele de utilizator interactive.

2. **Importanța<a name="_page3_x56.70_y117.90"></a> stack-ului MERN în dezvoltarea web modernă**

Stack-ul MERN (MongoDB, Express, React, Node.js) reprezintă o alegere semnificativă în dezvoltarea web modernă, datorită multiplelor beneficii pe care le oferă dezvoltatorilor și proiectelor lor. Iată de ce stack-ul MERN este considerat important:

Unificarea Utilizării JavaScript:

Consistență: Utilizarea JavaScript pe întregul stack (atât pe frontend, cât și pe backend) oferă consistență în întreaga aplicație, eliminând nevoia de a învăța și utiliza mai multe limbaje de programare.

Eficiență: Dezvoltatorii familiarizați cu JavaScript pot lucra eficient atât la partea de client, cât și la cea de server, ceea ce reduce curba de învățare și timpul necesar pentru a dezvolta aplicații web. Scalabilitate și Performanță:

Node.js: Motorul V8 din spatele Node.js oferă performanțe ridicate și scalabilitate, permițând aplicațiilor MERN să gestioneze un volum mare de cereri fără a pierde performanța.

MongoDB: Baza de date NoSQL este proiectată pentru scalabilitate și poate gestiona seturi mari de date și încărcări sporite fără a compromite performanța.

Rapiditate în Dezvoltare:

React și Express: Aceste framework-uri sunt cunoscute pentru eficiența lor în dezvoltare și pentru faptul că permit dezvoltatorilor să creeze rapid aplicații web complexe cu un efort minim. Componente Reutilizabile: React încurajează dezvoltatorii să creeze componente reutilizabile, ceea ce duce la o dezvoltare mai rapidă și la un cod mai curat și mai modular.

Ecosistem și Suport Comunitar:

Comunitate Activă: Toate componentele stack-ului MERN au comunități mari și active de dezvoltatori care contribuie la dezvoltarea și îmbunătățirea continuă a acestor tehnologii.

Resurse Abundente: Există o gamă largă de tutoriale, documentații și resurse online disponibile pentru a ajuta dezvoltatorii să învețe și să utilizeze cu succes acest stack.

Adaptabilitate și Versatilitate:

Potrivit pentru Diverse Aplicații: Stack-ul MERN poate fi utilizat pentru o varietate de aplicații web, de la site-uri web simple la aplicații web complexe, platforme de comerț electronic și aplicații de analiză și monitorizare.

3. **Motivația<a name="_page3_x56.70_y571.50"></a> alegerii stack-ului MERN**

Alegerea stack-ului MERN pentru dezvoltarea aplicațiilor web moderne aduce multiple beneficii, care îl fac atractiv atât pentru dezvoltatori individuali, cât și pentru echipe și companii. Iată câteva dintre principalele motive pentru care MERN este preferat:

Utilizarea Unui Limbaj de Programare Unificat: JavaScript

Unul dintre cele mai importante avantaje ale stack-ului MERN este utilizarea JavaScript pe toate nivelurile aplicației:

Frontend: React este o bibliotecă JavaScript folosită pentru construirea interfețelor de utilizator dinamice și interactive.

Backend: Node.js permite rularea JavaScript pe server, oferind un mediu rapid și eficient pentru dezvoltarea backend-ului.

Middleware: Express, un framework minimalist pentru Node.js, folosește tot JavaScript pentru a facilita dezvoltarea și gestionarea serverelor.

Bază de date: MongoDB stochează datele în format JSON-like (BSON), ceea ce se integrează perfect cu JavaScript.

Această consistență în utilizarea aceluiași limbaj de programare simplifică procesul de dezvoltare, reduce curba de învățare și îmbunătățește colaborarea între dezvoltatorii frontend și backend.

Flexibilitate și Scalabilitate

MongoDB: Oferă o structură de date flexibilă și scalabilă, ideală pentru aplicațiile moderne care necesită stocarea și gestionarea unor volume mari de date.

Node.js: Este cunoscut pentru capacitatea sa de a gestiona un număr mare de cereri simultane datorită modelului său non-blocant, bazat pe evenimente.

React: Permite dezvoltarea de interfețe de utilizator rapide și reactive, care pot fi ușor scalate și întreținute.

Rapiditate și Eficiență în Dezvoltare

Express: Simplifică configurarea și gestionarea rutelor și a cererilor HTTP, permițând dezvoltatorilor să creeze rapid API-uri și backend-uri robuste.

React: Oferă componente reutilizabile și gestionarea eficientă a stării, ceea ce reduce timpul de dezvoltare și facilitează întreținerea codului.

Ecosistem și Comunitate Puternică

Fiecare componentă a stack-ului MERN are o comunitate activă și vastă de dezvoltatori:

Resurse Abundente: Existența unei documentații extinse, tutoriale, cursuri online și forumuri facilitează învățarea și rezolvarea problemelor.

Suport Comunitar: Comunitatea oferă sprijin constant și contribuie la dezvoltarea și îmbunătățirea continuă a tehnologiilor.

Arhitectură Full-Stack Completă

Stack-ul MERN permite dezvoltatorilor să construiască aplicații web complete, acoperind toate aspectele necesare pentru dezvoltarea unei aplicații moderne:

Frontend: React pentru construirea interfețelor de utilizator.

Backend: Node.js și Express pentru gestionarea logicii serverului și a cererilor HTTP.

Bază de date: MongoDB pentru stocarea și gestionarea datelor.

Adaptabilitate și Versatilitate

MERN este extrem de versatil și poate fi utilizat pentru o gamă largă de aplicații web, de la proiecte mici la aplicații enterprise complexe:

Platforme de Social Media: Pentru gestionarea utilizatorilor și a conținutului generat de aceștia. Aplicații de Comerț Electronic: Pentru gestionarea produselor, comenzilor și plăților. Dashboard-uri de Analiză și Monitorizare: Pentru vizualizarea datelor în timp real.

Sisteme de Management al Conținutului: Pentru gestionarea și publicarea conținutului digital.

2. **MongoDB**
1. <a name="_page4_x56.70_y646.30"></a>**Ce<a name="_page4_x56.70_y676.75"></a> este MongoDB**

MongoDB este un sistem de gestionare a bazelor de date NoSQL, cunoscut pentru abordarea sa orientată pe documente. Este proiectat pentru a gestiona volume mari de date și pentru a oferi scalabilitate și performanță într-un mediu distribuit. Iată câteva caracteristici cheie ale MongoDB: Bază de Date NoSQL: MongoDB este un sistem de bază de date NoSQL, ceea ce înseamnă că nu utilizează un model relațional tradițional. În schimb, datele sunt stocate sub formă de documente JSON-like, numite BSON (Binary JSON), care sunt flexibile și ușor de manipulat.

Documente: Datele sunt organizate în documente, care sunt colecții de câmpuri și valori în stil JSON. Aceste documente pot fi grupate în colecții, oferind o structură de date flexibilă și dinamică.

Schema Flexibilă: MongoDB oferă o schemă flexibilă, care permite adăugarea și modificarea câmpurilor în documente fără a fi nevoie să se actualizeze schemele de bază de date. Acest lucru oferă o agilitate semnificativă în dezvoltarea aplicațiilor.

Scalabilitate Orizontală: MongoDB este proiectat pentru a fi scalabil orizontal, ceea ce înseamnă că poate crește capacitatea de stocare și de procesare prin adăugarea de noduri suplimentare într-un cluster. Această abordare permite să se gestioneze volume mari de date și să se facă față creșterii traficului fără a compromite performanța.

Reproducere și Înregistrare: MongoDB oferă funcționalități integrate pentru reproducerea datelor și înregistrarea clusterelor, asigurând disponibilitatea și durabilitatea datelor în cazul unor eventuale eșecuri ale sistemului.

Interogări Avansate: MongoDB oferă un limbaj de interogare puternic și flexibil, care permite dezvoltatorilor să efectueze interogări complexe și să filtreze și să sorteze datele în mod eficient.

MongoDB este utilizat într-o varietate largă de aplicații, de la aplicații web și mobile la analiza datelor și sistemele IoT (Internet of Things). Este apreciat pentru scalabilitatea sa, flexibilitatea schemațiilor și performanța sa în gestionarea datelor în timp real.

2. **funcționalități<a name="_page5_x56.70_y435.30"></a> ale MongoDB**

Replicare: Replicația în MongoDB permite crearea de copii ale datelor și distribuirea acestora pe mai multe noduri, asigurând disponibilitatea și fiabilitatea sistemului.

Partiționare (Sharding): Shardingul permite distribuirea datelor pe mai multe servere, ceea ce permite gestionarea eficientă a unor volume mari de date și a unor încărcări mari de trafic.

Indexare: MongoDB suportă crearea de indici pentru a accelera interogările și a îmbunătăți performanța interogărilor de date.

Aggregare: MongoDB oferă un set bogat de operații de agregare care permit dezvoltatorilor să efectueze analize complexe și să extragă informații valoroase din datele lor.

Gestiunea Memoriei și a Cache-ului: MongoDB are mecanisme integrate pentru gestionarea memoriei și a cache-ului, permițând optimizarea performanței și reducerea timpului de acces la date.

3. **Dezavantaje<a name="_page5_x56.70_y695.70"></a> MongoDB**

Consistență Laxă a Datelor: Deoarece MongoDB nu impune un format strict pentru date, există riscul de a avea date inconsistente sau incomplete în baza de date. Aceasta poate necesita o atenție suplimentară la nivelul aplicației pentru a asigura integritatea datelor.

Interogări și Agregări Complexe: Comparativ cu bazele de date relaționale, MongoDB poate fi mai dificil de interogat și de agregat pentru anumite operațiuni complexe, cum ar fi algoritmi de agregare avansate sau interogări complexe care implică mai multe colecții.

Neajunsuri în Tranzacții și Consistență ACID: MongoDB nu suportă tranzacții și consistență ACID în toate situațiile, ceea ce poate fi un dezavantaj pentru aplicațiile care necesită manipulări tranzacționale complexe.

Curba de Învățare pentru Dezvoltatori Relaționali: Pentru dezvoltatorii care sunt obișnuiți cu lucrul cu baze de date relaționale, trecerea la MongoDB poate necesita o perioadă de adaptare și învățare a unor noi concepte și paradigme de lucru.

4. **Configurarea<a name="_page6_x56.70_y228.30"></a> și conectarea unei baze de date MongoDB în proiect**

Folosește gestionarul de pachete npm pentru a instala pachetul mongodb în directorul proiectului tău. Poți face acest lucru folosind comanda:

` `**npm install mongodb** 

În fișierul de configurare al serverului Express ‘index.js’, adaugă următorul cod pentru a te conecta la baza de date MongoDB:

` `**mongoose**

`    `**.connect(mongoDBURL)**

`    `**.then(()=>{**

`        `**console.log('App connected to DB');**

`        `**app.listen(PORT,() => {**

`            `**console.log(`App is listening to port: ${PORT}`);         });**

`    `**})**

`    `**.catch((error)=>{**

`        `**console.log(error);**

`    `**});**

În acest cod:

mongoose este modulul pentru a lucra cu MongoDB în Node.js.

mongoose.connect este folosit pentru a stabili conexiunea cu baza de date MongoDB. localhost:27017 este adresa și portul implicit pentru serverul MongoDB local. nume-baza-date este numele bazei de date la care te conectezi.

Definirea Modelului pentru Colecțiile MongoDB

pentru a interacționa cu colecțiile din baza de date MongoDB, poți defini un model folosind mongoose.Schema:

**const bookSchema = mongoose.Schema(     {**

`        `**title: {**

`            `**type: String,**

`            `**required: true,**

`        `**},**

`        `**author: {**

`            `**type: String,**

`            `**required: true,**

`        `**},**

`        `**publishYear: {**

`            `**type: Number,**

`            `**required: true,**

`        `**},**

`    `**},**

`    `**{**

`        `**timestamps: true,**

`    `**}**

**);**

**export const Book = mongoose.model('books', bookSchema);**

5. **Schema**

![](Aspose.Words.3e5fd2d3-3f16-41a7-8bbb-43050a29eadf.001.png)

3. **Express**
1. <a name="_page7_x56.70_y672.25"></a><a name="_page7_x56.70_y435.30"></a>**Ce<a name="_page7_x56.70_y702.70"></a> este Express**

Express este un framework minimalist și flexibil pentru Node.js, conceput pentru a facilita dezvoltarea aplicațiilor web și a API-urilor în JavaScript. Este unul dintre cele mai populare cadre de lucru pentru Node.js și oferă un set de funcționalități robust pentru gestionarea cererilor HTTP, rutele aplicației, gestionarea ședințelor, șabloanele, și multe altele. Iată câteva caracteristici cheie ale Express:

Simplu și Minimalist: Express este proiectat să fie ușor de înțeles și de utilizat, permițând dezvoltatorilor să înceapă rapid cu dezvoltarea aplicațiilor web în Node.js.

Flexibilitate: Express este un framework minimal, care oferă o serie de funcționalități de bază, dar este și extrem de flexibil, permițând dezvoltatorilor să își extindă și să își personalizeze aplicațiile conform nevoilor lor.

Gestionarea Cererilor HTTP: Express facilitează gestionarea cererilor HTTP, inclusiv analiza și parsarea datelor trimise de la client, manipularea răspunsurilor HTTP și gestionarea sesiunilor.

Rutarea Aplicației: Express permite definirea rutelor aplicației, ceea ce permite maparea cererilor la funcții de controler care gestionează cererile și generează răspunsuri.

Middleware-uri: Middleware-urile sunt funcții care pot fi definite între cererea clientului și răspunsul serverului, permițând executarea de cod suplimentar înainte sau după procesarea unei cereri HTTP. Express este construit în jurul conceptului de middleware-uri, ceea ce permite dezvoltatorilor să definească ușor funcționalități suplimentare în aplicațiile lor.

Motor de Șabloane (Template Engine) Opcional: Express permite utilizarea diferitelor motoare de șabloane (precum EJS, Handlebars, Pug etc.) pentru a genera și afișa pagini web dinamice în funcție de datele din aplicație.

Compatibilitate cu Middleware-uri Terțe: Există o gamă largă de middleware-uri terțe disponibile pentru Express, care pot fi utilizate pentru adăugarea de funcționalități suplimentare, cum ar fi autentificarea, autorizarea, logarea și multe altele.

2. **Caracteristici<a name="_page8_x56.70_y462.90"></a> și funcționalități ale Express**

Express este un framework web minimalist pentru Node.js, care oferă un set de funcționalități esențiale pentru dezvoltarea rapidă și eficientă a aplicațiilor web și API-urilor. Iată principalele caracteristici și funcționalități ale Express:

Middleware-uri

Definiție: Middleware-urile sunt funcții care au acces la obiectele de cerere (request) și răspuns (response), precum și la următorul middleware în lanț.

Funcționalitate: Middleware-urile pot efectua diverse sarcini, cum ar fi autentificarea, logarea, parsarea datelor din corpul cererilor, gestionarea sesiunilor, manipularea răspunsurilor, etc.

**app.use('/books', booksRoute);**

Rutare

Definiție: Rutarea se referă la modul în care aplicația răspunde la cererile clientului pentru un anumit endpoint (URI).

Funcționalitate: Express permite definirea de rute pentru a gestiona diferite metode HTTP (GET, POST, PUT, DELETE).

**// Route create book router.post('/', bookCreate);** **// Route for get all books router.get('/', getBooks);**

**// Route for get one book from database by id router.get('/:id', getBookById);**

**// Route for update a Book router.put('/:id', updateBook);**

**// Route for Delete a book router.delete('/:id', deleteBook);**

Gestionarea Erorilor

Definiție: Express oferă mecanisme pentru a prinde și a gestiona erorile care apar în timpul executării.

Funcționalitate: Middleware-urile de eroare sunt definite cu patru argumente (err, req, res, next).

**catch (error) {**

`        `**console.log(error.message);**

`        `**response.status(500).send({ message: error.message});     }**

3. **Despre<a name="_page9_x56.70_y380.10"></a> Nodemon**

Nodemon este un utilitar de dezvoltare pentru aplicațiile Node.js care monitorizează automat modificările fișierelor sursă și repornește aplicația serverului. Este foarte util în timpul dezvoltării deoarece elimină necesitatea de a opri și reporni manual serverul de fiecare dată când se face o modificare în cod.

Caracteristici principale ale Nodemon:

Monitorizare fișiere: Nodemon monitorizează modificările fișierelor din proiect și repornește automat aplicația atunci când detectează modificări.

Configurare flexibilă: Nodemon poate fi configurat pentru a monitoriza anumite tipuri de fișiere sau directoare specifice.

Suport pentru diferite limbaje: Deși este creat în principal pentru aplicațiile Node.js, Nodemon poate fi folosit și cu alte limbaje prin configurare suplimentară.

Integrare cu scripturi npm: Nodemon poate fi integrat cu scripturile din fișierul package.json al unui proiect Node.js pentru a simplifica rularea comenzii.

4. **Model-View-Controller<a name="_page9_x56.70_y681.90"></a>**Model (Modelul):

   Reprezintă logica de date a aplicației. Este responsabil pentru gestionarea datelor, logica de afaceri și regulile de afaceri.

Funcții: Manipulează datele (creare, citire, actualizare, ștergere), comunică cu baza de date și gestionează validările.

View (Vederea):

Reprezintă interfața utilizator (UI). Este responsabilă pentru afișarea datelor către utilizator și pentru captarea input-ului de la utilizator.

Funcții: Prezintă datele într-un format specific (de exemplu, HTML pentru aplicații web), afișează mesajele de eroare și alte informații relevante utilizatorului.

Controller (Controlorul):

Reprezintă logica de control. Este responsabil pentru gestionarea input-ului utilizatorului, interacționarea cu modelul și selectarea vederii corespunzătoare pentru a afișa datele.

Funcții: Primește input-ul de la utilizator, apelează metodele modelului pentru a manipula datele și selectează vederea corectă pentru a prezenta rezultatele.

5. **Schema**

![](Aspose.Words.3e5fd2d3-3f16-41a7-8bbb-43050a29eadf.002.png)

4. <a name="_page10_x56.70_y338.70"></a>**React**
1. <a name="_page11_x56.70_y66.70"></a>**Ce<a name="_page11_x56.70_y97.15"></a> este React**

React este o bibliotecă JavaScript open-source utilizată pentru construirea de interfețe de utilizator (UI) și componente UI într-un mod eficient și scalabil. A fost dezvoltată de Facebook și este folosită pentru a crea aplicații web interactive și performante.

2. **Care<a name="_page11_x56.70_y191.95"></a> sunt avantajele utilizării React pentru construirea interfețelor de utilizator?**

Componente reutilizabile: React se bazează pe conceptul de componente, ceea ce înseamnă că puteți construi părți ale interfeței de utilizator ca entități izolate și reutilizabile. Aceasta duce la un cod mai curat, mai organizat și mai ușor de întreținut.

Performanță ridicată: React utilizează un algoritm numit Virtual DOM pentru a minimiza actualizările DOM-ului reale. Acest lucru duce la o performanță mai bună în aplicații cu interfețe de utilizator complexe, deoarece React face actualizări selective și eficiente ale DOM-ului.

JSX: React utilizează JSX (JavaScript XML), care permite scrierea de cod HTML-like în interiorul codului JavaScript. Acest lucru face codul mai ușor de înțeles și de scris, în special pentru cei care sunt obișnuiți să lucreze cu HTML și CSS.

Comunitate și suport larg: React are o comunitate activă și mare, ceea ce înseamnă că există o mulțime de resurse disponibile, cum ar fi biblioteci, instrumente și tutoriale. De asemenea, este susținut de Facebook, ceea ce asigură că va continua să fie dezvoltat și îmbunătățit în viitor.

React Native: Dacă doriți să construiți aplicații mobile, React Native vă permite să utilizați aceleași cunoștințe și abilități pentru a crea aplicații native pentru iOS și Android. Acest lucru face ca dezvoltarea cross-platform să fie mai eficientă și mai accesibilă.

3. **despre<a name="_page11_x56.70_y507.55"></a> useState**

‘useState’ este un hook fundamental în React, folosit pentru a gestiona starea în componente funcționale.

Pentru a utiliza useState, trebuie să-i oferi o valoare inițială. De asemenea, este comun să destructurezi array-ul returnat de useState, pentru a obține valoarea stării și funcția care o actualizează

**const [books, setBooks] = useState();**

‘books’ este valoarea curentă a stării, iar ‘setBooks’ este funcția pe care o vei folosi pentru a actualiza această stare.

Pentru a accesa valoarea stării, folosește pur și simplu ‘books’. Pentru a actualiza valoarea stării, 

folosește funcția ‘setBooks’.

4. **Despre<a name="_page12_x56.70_y56.70"></a> useEffect**

‘useEffect’ este un alt hook esențial în React, utilizat pentru a efectua efecte secundare în componente funcționale. Efectele secundare pot fi lucruri precum accesarea datelor dintr-o API, abonarea la evenimente DOM sau curățarea resurselor.

‘useEffect’ primește două argumente: o funcție care reprezintă efectul secundar și un array opțional de dependențe. Funcția de efect secundar este apelată de fiecare dată când componenta se re- renderează, iar array-ul de dependențe controlează când efectul trebuie să fie reaplicat.

În interiorul funcției de efect secundar, poți efectua orice operații dorite, cum ar fi accesarea datelor, abonarea la evenimente sau actualizarea stării. Dacă efectul necesită o curățare, poți returna o funcție de cleanup din efect. Această funcție va fi apelată înainte ca efectul să fie reaplicat sau când componenta este demontată.

5. **Despre<a name="_page12_x56.70_y275.70"></a> RxJS**

RxJS este o bibliotecă JavaScript reactivă care se bazează pe conceptul de programare reactivă. Este inspirată de conceptele Observables din ReactiveX (Rx), care sunt secvențe de evenimente care pot fi manipulate într-un mod declarativ și compus.

Observables sunt surse de date care emit evenimente sau valori în timp. Acestea pot fi folosite pentru a gestiona evenimente de la utilizatori, date de la servere sau orice alt tip de flux de date asincron.

RxJS oferă o mulțime de operatori puternici pentru a transforma, combina și filtra observabilele. Acestea sunt folosite pentru a efectua diverse operații asupra fluxurilor de date, cum ar fi map(), filter(), mergeMap(), switchMap(), etc.

Subscrierile sunt folosite pentru a consuma observabilele și pentru a reacționa la evenimentele pe care le emit. Odată ce vă abonați la un observabil, puteți să definiți logica de manipulare a datelor pentru fiecare eveniment emis.

6. **Despre<a name="_page12_x56.70_y536.10"></a> Axios**

Axios este o bibliotecă JavaScript utilizată pentru a efectua cereri HTTP din browser sau din Node.js. Este populară datorită simplității sale și a funcționalităților avansate pe care le oferă pentru lucrul cu cererile HTTP.

Axios oferă o sintaxă simplă și intuitivă pentru a efectua cereri HTTP. Aceasta utilizează metode simple precum axios.get(), axios.post(), axios.put(), axios.delete() etc., pentru a trimite cererile HTTP către server.

se bazează pe Promises pentru a gestiona răspunsurile asincrone de la server. Acest lucru facilitează gestionarea fluxului de date și gestionarea erorilor într-un mod elegant și simplu.


7. **Schema**

![](Aspose.Words.3e5fd2d3-3f16-41a7-8bbb-43050a29eadf.003.png)

<a name="_page13_x56.70_y76.50"></a>https://github.com/JEFFK112/HYP-Project Fisiere Proiect:

Backend→index.js

import express from "express";

import { PORT, mongoDBURL } from "./config.js"; import mongoose from "mongoose";

import booksRoute from './routes/booksRoute.js' import cors from 'cors';

const app = express();

app.use(express.json()); app.use(cors());

app.use('/books', booksRoute);

mongoose

.connect(mongoDBURL)

.then(()=>{

`        `console.log('App connected to DB');

`        `app.listen(PORT,() => {

`            `console.log(`App is listening to port: ${PORT}`);         });

`    `})

.catch((error)=>{

`        `console.log(error);

`    `});

Backend → routes → bookRoute.js

import express from 'express';

import { bookCreate, deleteBook, getBookById, getBooks, updateBook } from '../controller/booksController.js';

const router = express.Router();

// Route create book router.post('/', bookCreate);

// Route for get all books router.get('/', getBooks);

// Route for get one book from database by id router.get('/:id', getBookById);

router.put('/:id', updateBook);

router.delete('/:id', deleteBook); export default router;

Backend → controller → booksController.js import { Book } from '../models/bookModel.js';

export const bookCreate = async (request,response) =>{

`    `try {

`        `if(

`            `!request.body.title || 

`            `!request.body.author || 

`            `!request.body.publishYear

`        `) {

`            `return response.status(400).send({

`                `message: 'Send all required fields: title, author, publishYear',             });

`        `}

`        `const newBook = {

`            `title: request.body.title,

`            `author: request.body.author,

`            `publishYear: request.body.publishYear,

`        `};

`        `const book = await Book.create(newBook);

`        `return response.status(201).send(book)

`    `} catch (error) {

`        `console.log(error.message);

`        `response.status(500).send({ message: error.message});     }

} 

export const getBooks = async (request,response)=>{     try {

`        `const books = await Book.find({});

`        `return response.status(200).json({

`            `count: books.length,

`            `data: books

`        `});

`    `} catch (error) {

`        `console.log(error.message);

`        `response.status(500).send({message: error.message});     }

}

export const getBookById = async (request,response)=>{     try {

`        `const { id } = request.params;

`        `const book = await Book.findById(id);

`        `return response.status(200).json(book);

`    `} catch (error) {

`        `console.log(error.message);

`        `response.status(500).send({message: error.message});     }

}

export const updateBook = async(request,response)=>{

`    `try {

`        `if(

`            `!request.body.title || 

`            `!request.body.author || 

`            `!request.body.publishYear

`        `) {

`            `return response.status(400).send({

`                `message: 'Send all required fields: title, author, publishYear',             });

`        `}

`        `const { id } = request.params;

`        `const result = await Book.findByIdAndUpdate(id, request.body);

`        `if(!result){

`            `return response.status(404).json({ message: 'Book not found'});         }

`        `return response.status(200).send({ message: `Book updated successfuly`});     } catch (error) {

`        `console.log(error.message);

`        `response.status(500).send({ message: error.message })

`    `}

}

export const deleteBook = async (request, response)=>{     try {

`        `const { id } = request.params;

`        `const result= await Book.findByIdAndDelete(id);

`        `if(!result) {

`            `return response.status(404).json({ message: 'Book not found'});         }

`        `return response.status(200).send({ message: 'Book deleted successfully'});     } catch (error) {

`        `console.log(error.message);

`        `response.status(500).send({ message: error.message });

`    `}

}

Backend → models → bookModel.js

import mongoose from "mongoose";

const bookSchema = mongoose.Schema(     {

`        `title: {

`            `type: String,

`            `required: true,

`        `},

`        `author: {

`            `type: String,

`            `required: true,

`        `},

`        `publishYear: {

`            `type: Number,

`            `required: true,

`        `},

`    `},

`    `{

`        `timestamps: true,

`    `}

);

export const Book = mongoose.model('books', bookSchema); Frontend → App.jsx

import React from 'react'

import {Routes, Route} from 'react-router-dom' import Home from './pages/Home';

import CreateBook from './pages/CreateBook'; import ShowBook from './pages/ShowBook'; import EditBook from './pages/EditBook'; import DeleteBook from './pages/DeleteBook';

export const App = () => {

`  `return (

`    `<Routes>

`      `<Route path='/' element={ <Home /> } />

`      `<Route path='/books/create' element={ <CreateBook /> } />

`      `<Route path='/books/details/:id' element={ <ShowBook /> } />       <Route path='/books/edit/:id' element={ <EditBook /> } />

`      `<Route path='/books/delete/:id' element={ <DeleteBook /> } />     </Routes>

`  `);

};

export default App

Frontend → pages → CreateBook.jsx

import React, { useState } from 'react'

import BackButton from '../components/BackButton'; import Spinner from '../components/Spinner';

import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const CreateBook = () => {

`  `const [title, setTitle] = useState('');

`  `const [author, setAuthor] = useState('');

`  `const [publishYear, setPublishYear] = useState('');   const [loading, setLoading] = useState(false);

`  `const navigate = useNavigate();

`  `const handleSaveBook = () => {

`    `const data = {

`      `title,

`      `author,

`      `publishYear

`    `};

`    `setLoading(true);

`    `axios

.post('http://localhost:5555/books', data)

.then(()=>{

`        `setLoading(false);

`        `navigate('/');

`      `})

.catch((error)=>{

`        `setLoading(false);

`        `alert('An error hapened. Please check console');         console.log(error);

`      `});

`  `};

`  `return (

`    `<div className='p-4'>

`      `<BackButton />

`      `<h1 className='text-3xl my-4'>Create Book</h1>

`      `{loading ? <Spinner /> : ''}

`      `<div className='flex flex-col border-2 border-sky-400 w-[600px] p-4 mx-auto'>         <div className='my-4'>

`          `<label className='text-xl mr-4 text-gray-500'>Title</label>

`          `<input 

`          `type="text"

`          `value={title}

`          `onChange={(e) => setTitle(e.target.value)}

`          `className='border-2 border-gray-500 px-4 py-2 w-full'

`          `/>

`        `</div>

`        `<div className='my-4'>

`          `<label className='text-xl mr-4 text-gray-500'>Author</label>

`          `<input 

`          `type="text"

`          `value={author}

`          `onChange={(e) => setAuthor(e.target.value)}

`          `className='border-2 border-gray-500 px-4 py-2 w-full'

`          `/>

`        `</div>

`        `<div className='my-4'>

`          `<label className='text-xl mr-4 text-gray-500'>Publish Year</label>

`          `<input 

`          `type="text"

`          `value={publishYear}

`          `onChange={(e) => setPublishYear(e.target.value)}

`          `className='border-2 border-gray-500 px-4 py-2 w-full'

`          `/>

`        `</div>

`        `<button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}>         Save

`        `</button>

`      `</div>

`    `</div>

`  `)

}

export default CreateBook

Frontend → pages → DeleteBook.jsx

import React, { useState } from 'react'

import BackButton from '../components/BackButton'; import Spinner from '../components/Spinner';

import axios from 'axios';

import { useNavigate,useParams } from 'react-router-dom';

const DeleteBook = () => {

`  `const [loading, setLoading] = useState(false);

const navigate = useNavigate();

const { id } = useParams();

const handleDeleteBook = () => {

`  `setLoading(true);

`  `axios

.delete(`http://localhost:5555/books/${id}`)

.then(()=>{

`      `setLoading(false);

`      `navigate('/');

`    `})

.catch((error)=>{

`      `setLoading(false);

`      `alert(`an Error happened. Please check console`);       console.log(error);

`    `});

};

`  `return (

`    `<div className='p-4'>

`      `<BackButton />

`      `<h1 className='text-3xl my-4'>Delete Book</h1>

`      `{loading ? <Spinner /> : ''}

`      `<div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>

`        `<h3 className='text-2xl'>Are you sure you want to delete this book?</h3>

`        `<button 

`        `className='p-4 bg-red-600 text-white m-8 w-full'

`        `onClick={handleDeleteBook}

`        `>

`          `Yes, Delete it

`        `</button>

`      `</div>

`    `</div>

`  `)

}

export default DeleteBook Frontend → pages → EditBook.jsx

import React, { useState, useEffect } from 'react'

import BackButton from '../components/BackButton'; import Spinner from '../components/Spinner';

import axios from 'axios';

import { useNavigate, useParams } from 'react-router-dom';

const EditBook = () => {

`  `const [title, setTitle] = useState('');

`  `const [author, setAuthor] = useState('');

`  `const [publishYear, setPublishYear] = useState('');   const [loading, setLoading] = useState(false);

`  `const navigate = useNavigate();

`  `const {id}=useParams();

`  `useEffect(()=>{

`    `setLoading(true);

`    `axios

.get(`http://localhost:5555/books/${id}`)

.then((response)=>{

`        `setAuthor(response.data.author);

`        `setPublishYear(response.data.publishYear);

`        `setTitle(response.data.title);

`        `setLoading(false);

`      `})

.catch((error)=>{

`        `setLoading(false);

`        `alert('An error happened. Please check console');         console.log(error);

`      `});   },[])

`  `const handleEditBook = () => {

`    `const data = {

`      `title,

`      `author,

`      `publishYear

`    `};

`    `setLoading(true);

`    `axios

.put(`http://localhost:5555/books/${id}`, data)

.then(()=>{

`        `setLoading(false);

`        `navigate('/');

`      `})

.catch((error)=>{

`        `setLoading(false);

`        `alert('An error hapened. Please check console');         console.log(error);

`      `});

`  `};

`  `return (

`    `<div className='p-4'>

`      `<BackButton />

`      `<h1 className='text-3xl my-4'>Edit Book</h1>

`      `{loading ? <Spinner /> : ''}

`      `<div className='flex flex-col border-2 border-sky-400 w-[600px] p-4 mx-auto'>         <div className='my-4'>

`          `<label className='text-xl mr-4 text-gray-500'>Title</label>

`          `<input 

`          `type="text"

`          `value={title}

`          `onChange={(e) => setTitle(e.target.value)}

`          `className='border-2 border-gray-500 px-4 py-2 w-full'

`          `/>

`        `</div>

`        `<div className='my-4'>

`          `<label className='text-xl mr-4 text-gray-500'>Author</label>

`          `<input 

`          `type="text"

`          `value={author}

`          `onChange={(e) => setAuthor(e.target.value)}

`          `className='border-2 border-gray-500 px-4 py-2 w-full'

`          `/>

`        `</div>

`        `<div className='my-4'>

`          `<label className='text-xl mr-4 text-gray-500'>Publish Year</label>

`          `<input 

`          `type="text"

`          `value={publishYear}

`          `onChange={(e) => setPublishYear(e.target.value)}

`          `className='border-2 border-gray-500 px-4 py-2 w-full'

`          `/>

`        `</div>

`        `<button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>         Save

`        `</button>

`      `</div>

`    `</div>

`  `)

}

export default EditBook Frontend → pages → Home.jsx

import React, { useEffect, useState } from 'react';

import axios from 'axios';

import Spinner from '../components/Spinner';

import { Link } from 'react-router-dom';

import { AiOutlineEdit } from 'react-icons/ai';

import { BsInfoCircle } from 'react-icons/bs';

import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'; import { Subject } from 'rxjs';

import { IoReloadCircleOutline } from "react-icons/io5";

const reload$ = new Subject();

const Home = () => {

`  `const [books, setBooks] = useState([]);

`  `const [loading, SetLoading] = useState(false);

`  `const fetchBooks = () => {

`    `SetLoading(true);

`    `axios

.get('http://localhost:5555/books')       .then((response) => {

`        `setBooks(response.data.data);

`        `SetLoading(false);

`      `})

.catch((error) => {

`        `console.log(error);

`        `SetLoading(false);

`      `});

`  `};

`  `useEffect(() => {

`    `const subscription = reload$.subscribe(fetchBooks);

`    `// Emit the first load event to load data initially     reload$.next();

`    `// Cleanup subscription on unmount

`    `return () => subscription.unsubscribe();   }, []);

`  `const handleReload = () => {     reload$.next();

`  `};

`  `return (

`    `<div className='p-4'>

`      `<div className='flex justify-between items-center'>

`        `<h1 className='text-3xl my-8'>Books List</h1>

`        `<div className='flex gap-3'>

`          `<Link to='/books/create'>

`            `<MdOutlineAddBox size={30} className='text-sky-800 text-4xl' />

`          `</Link>

`          `<IoReloadCircleOutline size={30} onClick={handleReload}/>

`        `</div>

`      `</div>

`      `{loading ? (

`        `<Spinner />

`      `) : (

`        `<table className='w-full border-separate border-spacing-2'>

`          `<thead>

`            `<tr>

`              `<th className='border border-slate-600 rounded-md'>No</th>

`              `<th className='border border-slate-600 rounded-md'>Title</th>

`              `<th className='border border-slate-600 rounded-md max-md:hidden'>Author</th>

`              `<th className='border border-slate-600 rounded-md max-md:hidden'>Publish Year</th>               <th className='border border-slate-600 rounded-md'>Operations</th>

`            `</tr>

`          `</thead>

`          `<tbody>

`            `{books.map((book, index) => (

`              `<tr key={book.\_id} className='h-8'>

`                `<td className='border border-slate-700 rounded-md text-center'>{index + 1}</td>

`                `<td className='border border-slate-700 rounded-md text-center'>{book.title}</td>

`                `<td className='border border-slate-700 rounded-md text-center max- md:hidden'>{book.author}</td>

`                `<td className='border border-slate-700 rounded-md text-center max- md:hidden'>{book.publishYear}</td>

`                `<td className='border border-slate-700 rounded-md text-center'>

`                  `<div className='flex justify-center gap-x-4'>

`                    `<Link to={`/books/details/${book.\_id}`}>

`                      `<BsInfoCircle className='text-2xl text-green-800' />

`                    `</Link>

`                    `<Link to={`/books/edit/${book.\_id}`}>

`                      `<AiOutlineEdit className='text-2xl text-yellow-800' />

`                    `</Link>

`                    `<Link to={`/books/delete/${book.\_id}`}>

`                      `<MdOutlineDelete className='text-2xl text-red-800' />

`                    `</Link>                   </div>                 </td>

`              `</tr>

`            `))}

`          `</tbody>

`        `</table>

`      `)}

`    `</div>

`  `);

};

export default Home;

Frontend → pages → ShowBook.jsx

import React, {useEffect, useState} from 'react' import axios from 'axios';

import { useParams } from 'react-router-dom'; import BackButton from '../components/BackButton' import Spinner from '../components/Spinner'

const ShowBook = () => {

`  `const [book, setBook] = useState([]);

`  `const [loading,setLoading] = useState(false);   const { id } = useParams();

`  `useEffect(()=>{

`    `setLoading(true);

`    `axios

.get(`http://localhost:5555/books/${id}`)       .then((response)=>{

`        `setBook(response.data);

`        `setLoading(false);

`      `})

.catch((error)=>{

`        `console.log(error);

`        `setLoading(false);

`      `});

`  `},[])

`  `return (

`    `<div className='p-4'>

`      `<BackButton />

`      `<h1 className='text-3xl my-4'>Show Book</h1>

`      `{loading ? (

`        `<Spinner />

`      `) : (

`        `<div className='flex flex-col border-2 border-sky-400 rounded-xl w-fut p-4'>           <div className='my-4'>

`            `<span className='text-xl mr-4 text-gray-500'>Id</span>

`            `<span>{book.\_id}</span>

`          `</div>

`          `<div className='my-4'>

`            `<span className='text-xl mr-4 text-gray-500'>Title</span>

`            `<span>{book.title}</span>

`          `</div>

`          `<div className='my-4'>

`            `<span className='text-xl mr-4 text-gray-500'>Author</span>

`            `<span>{book.author}</span>

`          `</div>

`          `<div className='my-4'>

`            `<span className='text-xl mr-4 text-gray-500'>Publish Year</span>

`            `<span>{book.publishYear}</span>

`          `</div>

`          `<div className='my-4'>

`            `<span className='text-xl mr-4 text-gray-500'>Create Time</span>

`            `<span>{new Date(book.createdAt).toString()}</span>

`          `</div>

`          `<div className='my-4'>

`            `<span className='text-xl mr-4 text-gray-500'>Last Update Time</span>             <span>{new Date(book.updatedAt).toString()}</span>

`          `</div>

`        `</div>

`      `)}

`    `</div>

`  `)

}

export default ShowBook
