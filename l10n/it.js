module.exports = {
  choosecurrency: "Scegli una valuta",
  singlewallet: "Singolo portafogli",
  paperwallet: "Paper Wallet",
  bulkwallet: "Portafogli multipli",
  brainwallet: "Brain Wallet",
  vanitywallet: "Vanity Wallet",
  detailwallet: "Dettagli portafogli",
  singletip1:
    "<b>Un portafogli bitcoin</b> è composto semplicemente da una coppia di valori: l'indirizzo e la sua chiave privata. Un portafogli è stato appena generato sul tuo browser e mostrato sopra.",
  singletip2:
    "<b>Per mettere in sicurezza questo portafogli</b> devi stampare o quantomeno salvare l'indirizzo bitcoin e la Chiave privata. È molto importante fare una copia di backup della chiave privata e conservarla in un posto sicuro. Questo sito non conosce la tua chiave privata. Se hai familiarità con PGP, puoi scaricare per intero questa pagina HTML e controllare la sua autentiticità. Puoi confrontare il codice SHA1 della pagina scaricata con il codice firmato dall'autore che trovi nella cronologia delle versioni (in fondo alla pagina). Se abbandoni/aggiorni la pagina web oppure premi il tasto Genera, un nuovo indirizzo sostituirà quello vecchio che non potrà più essere recuperato. La chiave privata dovrebbe essere tenuta segreta, chiunque conosca la chiave privata può avere accesso e spendere i tuoi bitcoin. Se stampi il tuo portafogli conservalo in una busta di plastica sigillata per tenerla al riparo dall'acqua. Tratta quanto stampato alla stregua di una banconota.",
  singletip3:
    "<b>Ricevi fondi</b> su questo portafogli mostrando l'indirizzo bitcoin per il versamento.",
  singletip4:
    "<b>Controlla il saldo</b> visitando blockchain.info o blockexplorer.com cercando il tuo indirizzo bitcoin.",
  singletip5:
    "<b>Spendi i tuoi bitcoin</b> aprendo un account su blockchain.info o mtgox.com usando la chiave privata. Puoi anche spendere i tuoi bitcoin scaricando il popolare client p2p ed importando in esso il portafogli. Tieni presente che quando importi una chiave nel client p2p, nel momento in cui spendi le monete, la chiave viene raggruppata insieme alle altre presenti nel programma con i restanti bitcoin. Quando esegui una transazione gli spiccioli verranno invitati verso un altro indirizzo all'interno del tuo portafogli gestito dal client p2p. Quindi dovresti tenere un backup del portafogli contenuto nel client p2p e tenere questo in un posto sicuro fin tanto terrai dei bitcoin lì. Satoshi consiglia di non cancellare mai un portafogli. ",
  tagline: "Open Source JavaScript Client-Side Multi Coin Wallet Generator",
  donate: "Supporto",
  generatelabelbitcoinaddress: "Generazione Indirizzo Bitcoin...",
  generatelabelmovemouse:
    "MUOVI il tuo mouse per contribuire alla generazione dei numeri casuali...",
  generatelabelkeypress: "OPPURE digitare lettere casuali nel campo di testo",
  skipMessage:
    "È possibile saltare questo passaggio se non si desidera generare portafogli",
  singlelabelbitcoinaddress: "Indirizzo Pubblico",
  singleshare: "PUBBLICO",
  singlelabelprivatekey: "Chiave Privata (formato WIF)",
  singlesecret: "SEGRETO",
  securitystep0title:
    "Passo 0. Seguire le raccomandazioni dell'elenco di sicurezza",
  securitystep0:
    'Il primo passo è quello di <strong> scaricare </ strong> questo sito da <a href="https://github.com/MichaelMure/WalletGenerator.net/archive/master.zip">Github</a> ed aprire il file index.html direttamente nel computer.È troppo facile aggiungere codice dannoso alle oltre 6000 linee di script Java per intercettare la vostra chiave privata, e non vuoi vedere i tuoi fondi rubati, non è vero? La versione del codice sorgente rende molto più semplice verificare da parte di persone esterne il codice che viene eseguito. Per una maggiore sicurezza, <strong> scollegare l\'accesso a Internet </ strong> durante la generazione del portafogli.',
  securitystep1title: "Passo 1. Generare un nuovo indirizzo",
  securitystep1:
    'Scegli la tua valuta e fai clic sul pulsante "Generazione nuovo indirizzo".',
  securitystep2title: "Passo 2. Stampare il Vostro portafogli",
  securitystep2:
    'Fai clic sulla scheda "portafogli" e stampa la pagina in alta qualità. <strong> Non salvare mai la pagina in formato PDF in quanto è più probabile che sia violato un file piuttosto che un foglio di carta.</strong>',
  securitystep3title: "Passo 3. Piegare il portafogli",
  securitystep3:
    'Piegate il vostro nuovo portafogli seguendo le linee.\n<img src="images/foldinginstructions.png" alt="Piegare a metà longitudinalmente e poi in tre nella direzione della larghezza."><br>\nÈ possibile inserire un lato nell\'altro per chiudere il portafogli.',
  securitystep4title: "Passo 4. Condividi il tuo indirizzo pubblico",
  securitystep4:
    "Invia il tuo indirizzo pubblico per ricevere denaro da altri utenti nella stessa valuta. Puoi condividere l'indirizzo pubblico quanto vuoi.",
  securitystep5title: "Passo 5. Mantenere segreta la tua chiave privata",
  securitystep5:
    "La chiave privata è letteralmente la chiave per accedere ai tuoi soldi. Se qualcuno dovesse accedervi, potrebbe utilizzare tutti i fondi attualmente nel portafogli, nonché tutti i fondi che saranno depositati in futuro.",
  securitystep6:
    "Prima di ricevere grandi pagamenti fai alcune prove di piccolo importo.",
  securitychecktitle: "Controllo di sicurezza :",
  securitychecklivecd:
    "Utilizzi un sistema operativo garantito senza malware o virus, ad esempio un CD live-Ubuntu?",
  supportedcurrencylbl: "valute supportate !",
  paperlabelencrypt: "Crittografare in BIP38?",
  paperlabelBIPPassphrase: "Frase d'accesso:",
  bulklabelstartindex: "Indice iniziale:",
  bulklabelrowstogenerate: "Righe da generare:",
  bulklabelcompressed: "Indirizzo compresso?",
  bulkgenerate: "Genera",
  bulkprint: "Stampa",
  bulklabelcsv:
    "Valori Separati da virgola: (CSV): Indice, Indirizzo, Chiave privata (WIF)",
  brainlabelenterPassphraselbl: "Frase d'accesso:",
  brainlabelconfirmlbl: "Conferma Frase d'accesso:",
  brainalgorithm: "Algoritmo: SHA256(Frase d'accesso)",
  brainlabelbitcoinaddress: "Indirizzo pubblico",
  brainlabelprivatekey: "Chiave privata (formato WIF):",
  detaillabelenterprivatekey: "Inserisci la Chiave Privata",
  qrcaminstructiontitle: "Scansiona il tuo codice QR con la tua webcam",
  paperqrnotsupported:
    "Spiacenti, ma il tuo browser non supporta i controlli della webcam HTML5. Provare con una versione recente di Firefox (consigliata), Chrome o Opera",
  paperqrpermissiondenied:
    '<p>Permesso negato. Il tuo browser dovrebbe visualizzare un messaggio che richiede l\'autorizzazione per accedere alla tua webcam. Fare clic sul pulsante "Permetti" per attivare la webcam.</p>',
  detaillabelPassphrase: "Inserisci Passphrase BIP38",
  detaillabelnote1:
    "La tua Chiave privata Bitcoin è rappresentata da un numero segreto, unico al mondo, che dovresti conoscere soltanto tu. Può essere codificato in molti formati differenti. Di seguito verrà mostrato l'indirizzo e la chiave pubblica, con la corrispondente chiave privata, nei più diffusi formati di codifica (WIF, WIFC, HEX, B64, MINI).",
  detaillabelbitcoinaddress: "Indirizzo pubblico",
  detaillabelbitcoinaddresscomp: "Indirizzo pubblico compresso",
  detaillabelpublickey: "Chiave pubblica (130 caratteri [0-9A-F]):",
  detaillabelpublickeycomp:
    "Chiave pubblica compressa (66 caratteri [0-9A-F]):",
  detaillabelprivwif: "Chiave privata WIF<br>51 caratteri base58, inizia per a",
  detaillabelprivwifcomp:
    "Chiave privata WIF compressa<br>52 caratteri base58, inizia per 'a'",
  detaillabelprivhex:
    "Chiave privata formato esadecimale (64 caratteri [0-9A-F]):",
  detaillabelprivb64: "Chiave privata Base64 (44 caratteri):",
  detaillabelprivmini:
    "Chiave privata formato mini (22, 26 or 30 caratteri, inizia per 'S'):",
  detaildecrypt: "Decripta BIP38",
  detaillabelprivb6: "Chiave privata Base6 (99 caratteri [0-5]):",
  detaillabelprivbip38:
    "Chiave privata cifrata in formato BIP38 (58 caratteri Base58):",
  detaillabelq1:
    "Come generare un portafoglio con dadi? Che cosa è Base6 (B6)?",
  detaila1:
    "Una parte importante della creazione di un portafogli per le valute crittografiche è garantire che i numeri casuali utilizzati per la generazione siano effettivamente casuali. L'origine casuale fisica è migliore di quella pseudo-casuale generata da un computer. Il modo più semplice per generare un casuale fisico è quello di utilizzare i dadi. Per una chiave privata, è necessario solo un dado a 6 facciate che eseguirà 99 lanci. Arrestare dopo ogni lancio per registrare il valore. Per registrare il valore, seguire le seguenti regole: 1 = 1, 2 = 2, 3 = 3, 4 = 4, 5 = 5, 6 = 0. In questo modo, genera un numero casuale di grandi dimensioni, la chiave privata, in Base6 (B6). Potete inserire i 99 caratteri B6 della chiave privata nel campo di testo sopra e fare clic su \"View Details\". Vedrai poi l'indirizzo pubblico associato a questa chiave privata. Devi anche annotare la chiave privata in formato WIF, in quanto è più comune della chiave privata.",
  donatetextfooter:
    "Per sostenere lo sviluppo di questo generatore di portafogli, è possibile effettuare una donazione tramite i seguenti indirizzi. Quando il contributo di una valuta è stato aggiunto da un collaboratore al di fuori del progetto, le donazioni lo raggiungono direttamente. ",
  footerlabeldonations: "Donazioni:",
  footerlabeltranslatedby: "F3de81",
  footersupport: "Supportare WalletGenerator.net",
  footerlabelgithub: "Repository GitHub",
  footerlabelversion: "Cronologia Versioni",
  footerlabelcopyright1: "Copyright bitaddress.org.",
  footerlabelcopyright2:
    "Le note di copyright dei file JavaScript sono inclusi nei sorgenti stessi.",
  footerlabelnowarranty: "Nessuna garanzia.",
  defaultTitle:
    "Generatore universale di portafogli per Bitcoin e altre valute crittografiche",
  title: "Generatore di PaperWallet",
  brainalertPassphrasewarning:
    "Attenzione: La scelta di una Passphrase robusta è importante per evitare attacchi brute force in grado di indovinare la tua Passphrase e rubare i tuoi fondi",
  brainalertPassphrasetooshort: "La Passphrase inserita è troppo corta.\n\n",
  brainalertPassphrasedoesnotmatch:
    "La Passphrase non combacia con quella data per la conferma.",
  bulkgeneratingaddresses: "Generazione indirizzi...",
  bip38alertincorrectPassphrase:
    "Passphrase non corretta per questa chiave privata criptata.",
  bip38alertPassphraserequired: "Passphrase richiesta per chiave BIP38",
  detailconfirmsha256:
    'Il testo inserito non rappresenta una Chiave privata valida!\n\nVorresti usare il testo inserito come Passphrase e creare da questa un hash SHA256 e generare così una Chiave Privata?\n\nAvvertenza: La scelta di una Passphrase robusta è importante per evitare che attacchi di tipo "brute force" vadano a segno indovinando il testo segreto e di conseguenza far perdere i fondi.',
  detailalertnotvalidprivatekey:
    "Il testo inserito non rappresenta una Chiave Privata valida",
  securitychecklistrandomOK:
    "Il tuo browser è in grado di generare chiavi crittografiche sicure usando window.crypto.getRandomValues",
  securitychecklistrandomNOK:
    "Il tuo browser NON supporta window.crypto.getRandomValues (), importante per generare i portafogli più sicuri. Utilizza un browser più moderno. ",
  securitychecklistofflineNOK:
    "Sembra che utilizzi questo generatore direttamente dal sito web, che non è raccomandato per la generazione di portafogli. Utilizza invece il link di download in fondo a questa pagina per scaricare un archivio ZIP da Github e eseguire questo generatore offline come file HTML locale.",
  securitychecklistofflineOK: "Esegui questo generatore dal tuo download.",
  paperwalletback:
    "<ul><li>Per trasferire i fondi a questo portafogli, inviare i fondi all' indirizzo pubblico in qualsiasi momento.</li><li>Verificare il vostro saldo cercando l'Indirizzo pubblico in un Blockchain explorer.</li><li><b>NON RIVELARE LA CHIAVE PRIVATA</b> fino a quando non si desidera importare proprio saldo in un portafoglio software.</li></ul><b>Quantità :</b> ___________       <b>Data :</b> ________________<br /><b>Note :</b> ______________________________________",
  paperlabelbitcoinaddress: "Indirizzo Bitcoin:",
  paperlabelprivatekey: "Chiave privata (Wallet Import Format):",
  paperlabelencryptedkey: "Chiave privata criptata (password richiesta)",
  vanityinvalidinputcouldnotcombinekeys:
    "Dati inseriti non validi. Le chiavi non possono essere combinate.",
  vanityalertinvalidinputpublickeysmatch:
    "Dati inseriti non validi. Entrambe le chiavi pubbliche combaciano. Devi inserire due chiavi differenti.",
  vanityalertinvalidinputcannotmultiple:
    "Dati inseriti non validi. Impossibile moltiplicare due chiavi pubbliche. Seleziona 'Aggiungi' per inserire due chiavi pubbliche ed ottenere l'indirizzo Bitcoin.",
  vanityprivatekeyonlyavailable:
    "Non disponibile quando vengono combinate due chiavi private",
  vanityalertinvalidinputprivatekeysmatch:
    "Dati inseriti non validi. Entrambe le chiavi private combaciano. Devi inserire due chiavi differenti."
};
