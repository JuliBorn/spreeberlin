import Image from 'next/image'
import Link from 'next/link'
import prisma from '../../lib/prisma.tsx'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import Article from '../../components/Article'
import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Card,
  Paper,
} from '@mui/material'

export default function Artikel(props) {
  const router = useRouter()
  //console.log(router.pathname.slice(0, 11));

  const [moreOpen, setMoreOpen] = useState(false)

  useEffect(() => {
    //console.log('content type udated');

    setMoreOpen(false)
  }, [router.asPath])

  return (
    <>
      <Box sx={{ minHeight: '128px' }}></Box>
      <img src="/static/images/Stroke-1.svg" className="myInfoDivider" />
      <Accordion
        sx={{
          backgroundColor: '#2473ff',
          color: '#ffffff',
          '&:before': {
            display: 'none',
          },
        }}
        elevation={0}
        disableGutters
      >
        <AccordionSummary elevation={0} className="infoAccordionText">
          2025
        </AccordionSummary>
        <AccordionDetails>
          <Card>
            <Grid container spacing={1}>
              <Grid item xs={12} lg={6}>
                <Box m={2}>
                  <p className="flowing-text flowing-text-black">
                    Es war ein heißer Sonntag, an dem wir zu einem Open Air beim
                    Badeschiff fuhren. <br />
                    Eine DJ legte auf, es war voll und schwitzig. Die Leute
                    tanzten in luftigen Kleidern. Mir war einfach nur heiß.
                    Schon kurz nachdem wir ein bisschen getanzt hatten, tropfte
                    mir Schweiß von der Nase. Ich ging zur Bar, holte mir einen
                    Sekt und lief runter zum Badeschiff, einem riesigen Pool
                    direkt in der Spree. ‍<br /> <br />
                    Süße Erleichterung, wenn heiße Füße in kaltes Wasser
                    tauchen.«Ist schon toll, oder?», sagte jemand neben mir. Der
                    Typ grinste. Ich lächelte zurück.«Super toll! Im Herzen
                    Berlins, gute Musik, ab und zu kommt ein Bötchen
                    vorbei…»«Aber irgendwie auch komisch, oder?», unterbrach er
                    mich. «Dass wir in einem Pool hocken, der in einem Fluss
                    schwimmt? Wäre doch viel schöner, wenn wir direkt in der
                    Spree baden könnten und den Pool gar nicht bräuchten.»«Ja,
                    aber die Spree ist halt viel zu dreckig zum
                    Schwimmen.»«Stimmt genau,» er lachte. «Liegt an der
                    Kanalisation.»«Wie?».«Naja, die Kanalisation läuft über,
                    wenn‘s heftig regnet und dann fließt die ganze Scheiße in
                    die Spree.» ‍<br />
                    <br /> Davon hatte ich noch nie gehört. Und auch nicht von
                    dem, was er dann erzählte: Dass durch das Abwasser bei Regen
                    der Sauerstoff im Fluss rapide sinke. Dass dadurch die
                    Fische kaum noch atmen und Wasserpflanzen nicht wachsen
                    könnten. Dass deswegen im Sommer extra ein Boot jede Nacht
                    über die Spree und den Landwehrkanal tuckere, um Sauerstoff
                    in den Fluss zu pumpen. «Und das Boot heißt einfach Rudolf
                    Kloos! Was ist denn das für ein Name?», sagte der Typ und
                    lachte wieder. «Und jedes Jahr zahlt die Stadt eine halbe
                    Million Euro dafür – das ist doch völlig absurd. » ‍ <br />
                    <br />
                    Schwer zu sagen, was mich an diesem Gespräch mehr traf: Dass
                    es der Spree so schlecht ging? Oder, dass ich nie wirklich
                    darüber nachgedacht hatte? Warum nur, fragte ich mich,
                    während ich in der Bahn auf dem Weg nach Hause saß,
                    interessieren wir uns so wenig für den Fluss in unserer
                    Stadt? Oder war nur ich einfach unwissend? <br />
                    Zuhause begann ich, nach weiteren Infos zu suchen. Ich
                    erfuhr, dass ein Fluss natürliche Uferflächen braucht, die
                    nicht mit Stahl- oder Betonwänden verbaut sind. Dass in
                    Gewässern normalerweise Schilfe und andere Pflanzen den
                    Sauerstoff bringen und die vor allem an solchen Ufern
                    wachsen. Dass es aber durchaus Leute in Berlin gibt, die
                    sich mit diesen Problemen beschäftigen. Und dass einige auch
                    ziemlich gute Ideen haben. Ich las von einem Ingenieur, der
                    direkt auf der anderen Seite vom Badeschiff ein
                    Unterwasser-Auffangbecken installiert hatte, das das
                    Abwasser daran hindert, in die Spree zu gelangen. <br />
                    <br />
                    Dass dieser Ingenieur gerne überall in der Spree solche
                    Becken bauen würde, um eines Tages im Fluss baden zu können.
                    Dass er aber immer wieder an der Berlin Bürokratie
                    scheitert. Ich las vom Projekt Flussbad, das in Berlin-Mitte
                    an der Museumsinsel einen Teil der Spree renaturieren und
                    ökologisch säubern will, damit dort ebenfalls ein für
                    Menschen zugänglicher Badeort geschaffen wird. Aber dass
                    auch hier noch immer nicht absehbar sei, wann dies
                    eigentlich realisiert werden könnte, obwohl die Pläne dafür
                    schon lange stehen. Je mehr ich über die Spree las, desto
                    mehr begriff ich, wie wenig ich über sie wusste. Wie selten
                    ich bewusst an diesem Fluss gewesen war. Ich beschloss, dies
                    zu ändern. <br />
                    <br />
                    Ein paar Wochen später stand ich mit meinem Fahrrad in
                    Spandau und schaute auf den Punkt, an dem die Spree in die
                    Havel fließt. Hier sollte es losgehen. Mein Ziel: die
                    Berliner Spree abfahren. Vom tiefen Westen bis in den Osten
                    zur Rummelsburger Bucht. Ich wollte die Spree aktiv
                    wahrnehmen, wollte schauen, wie es ihr geht – ihr und der
                    Natur an ihren Ufern. Doch das erste, was ich sah, war:
                    nichts. Entlang der Spree konnte ich mit dem Fahrrad nicht
                    fahren. Zumindest nicht in Spandau, wo der Fluss von
                    Industriebauten eingerahmt ist. Kein Fahrradweg, kaum einmal
                    ein Blick auf den Fluss. Stattdessen lange Zeit nichts als
                    das Rauschen der vorbeidonnernden Autos in meinem Kopf. ‍
                    <br />
                  </p>
                </Box>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Box m={2}>
                  <p className="flowing-text flowing-text-black">
                    Anders wurde das erst, als ich in Charlottenburg ankam, wo
                    die Spree gegen die Betonmauern des Schlossgartens schwabt
                    und sich Buchen übers Wasser neigen. Ein hübscher Weg führt
                    von hier am Fluss entlang bis zum Tiergarten. Unterwegs
                    umkurvte ich Menschen, die relaxt am Ufer flanierten, auf
                    Bänken saßen und lasen oder an Fitnessgeräten trainierten.
                    Es war ein herrlicher Tag. Dort, wo man ihnen die Chance
                    gibt, dachte ich im Stillen, suchen die Menschen die Nähe
                    zum Fluss. Und: Meine Güte, wie schön ist Berlin am Wasser?
                    Unwillkürlich musste ich lächeln. ‍ <br />
                    <br />
                    Es hätte ewig so weitergehen können. Natürlich tat es das
                    nicht. Gerade hatte ich den dicht bewachsenen Tiergarten
                    hinter mir gelassen, da stand ich an der riesigen Kreuzung
                    bei der Neuen Nationalgalerie und wartete darauf, endlich
                    auf die andere Straßenseite zu kommen. Autos hupten, es
                    stank nach Abgas. Vor mir der Landwehrkanal. Das Wasser kann
                    man von hier oben nicht sehen. Fünf Meter unterhalb der
                    Straße dümpelt der braune Kanal entlang der hohen
                    Steinwände, ohne eine Möglichkeit für Mensch oder Natur nah
                    heran zu kommen.
                    <br />
                    Überhaupt, die Natur. So richtig bekam ich sie erst wieder
                    zu Gesicht, als ich schon im Osten war. Kurz hinterm
                    Badeschiff beginnt der Treptower Park und auf gleicher Höhe,
                    nur auf der anderen Seite von Stralau, die Rummelsburger
                    Bucht. Im Grunde beginnt hier der Teil der Spree, an dem die
                    verschiedenen Interessen am Fluss am besten vereint werden:
                    Erholung und Freizeit für uns Menschen, Schutz- und
                    Entfaltungsraum für die Tier- und Pflanzenwelt. Nach allem,
                    was ich an diesem Tag gesehen hatte, brachte mich das am
                    meisten zum Staunen. ‍<br />
                    <br />
                    Auf dem See in der Rummelsburger Bucht schaukelten dutzende
                    von Hausbooten, teilweise eng miteinander verbunden. An Deck
                    standen Blumenbeete, Liegestühle und Fahrräder. Es wirkte,
                    als würde hier ein kleines Flussdorf leben. Und an den Ufern
                    durfte die Natur Natur sein. Große Schilfflächen sorgen dort
                    nicht nur für Reinigung des Wassers, sondern auch für die
                    Sauerstoffzufuhr für Kleinstlebewesen. Im dichten Dickicht
                    dahinter nisten Rohrammern, Haubentaucher und Eisvögel. Der
                    Mensch, darf diese Biotope mitten in der Stadt nicht
                    betreten und kann dennoch daran teilhaben. Hier und da
                    führen Hochstege in die Naturflächen bis zur Uferkante. Nah
                    und doch ausreichend entfernt kann man hier einen Blick in
                    eine Welt werfen, die sonst an Berlins Flüssen und Kanälen
                    nicht vorkommt. Dieser Ort war so idyllisch und auch so
                    ungewöhnlich, verglichen mit allem, was ich den ganzen Tag
                    entlang der Spree gesehen hatte. ‍
                    <br /> ‍<br /> In Berlin ist der Fluss nur in Teilen für den
                    Menschen da, ansonsten wird er vor allem vom Verkehr
                    beansprucht. Das wusste ich nach diesem Tag an der Berliner
                    Spree. Einen Raum am Fluss, an dem sich die Natur ungestört
                    entwickeln kann, gibt es kaum. Ich musste an den Typen vom
                    Badeschiff denken: «Irgendwie ist das alles doch ziemlich
                    absurd», hatte er gesagt. Und er hatte Recht: gesund ist das
                    noch lange nicht.
                  </p>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </AccordionDetails>
      </Accordion>
      <img src="/static/images/Stroke-1.svg" className="myInfoDivider" />
      <Accordion
        sx={{
          backgroundColor: '#2473ff',
          color: '#ffffff',
          '&:before': {
            display: 'none',
          },
        }}
        elevation={0}
        disableGutters
      >
        <AccordionSummary elevation={0} className="infoAccordionText">
          2035
        </AccordionSummary>
        <AccordionDetails>
          <Card>
            <Grid container spacing={1}>
              <Grid item xs={12} lg={6}>
                <Box m={2}>
                  <p className="flowing-text flowing-text-black">
                    Mark und ich spazieren gerade entlang des Maybachufers am
                    Landwehrkanal, als es anfängt zu regnen. Um uns herum kramen
                    hastig Menschen ihre Regenschirme hervor. Es war schon den
                    ganzen Tag ziemlich grau in Berlin. «So ein Mist», sagt
                    Mark. «Wieso, ist doch toll, jetzt können wir uns das
                    endlich mal in Aktion ansehen», sage ich und deute auf die
                    Regenrinnen, die sich auf hohen Stelzen von den Dächern der
                    Häuser über die Straße hin zum Kanal beugen. Ihre Enden sind
                    verziert mit kunstvollen Drachenköpfen, aus denen es jetzt
                    tröpfelt. Mark und ich stellen uns unter einen
                    Hausvorsprung. Überall fängt es langsam an zu plätschern.
                    Die Regenrinnen finden sich überall entlang des
                    Landwehrkanals. Sie leiten das Wasser von den Dächern direkt
                    ins Kanalwasser. Eine, wie ich finde, großartige Lösung, um
                    die Kanalisation zu entlasten und sauberes Wasser in den
                    Kanal zu bringen. ‍
                    <br />
                    <br /> «Hört sicher gleich wieder auf», sage ich zu Mark.
                    Irre, wie lang ich ihn jetzt schon kenne. Zehn Jahre ist es
                    jetzt her, dass er mir beim Badeschiff den kleinen Vortrag
                    über die Spree hielt. In den Wochen danach haben wir uns
                    immer wieder getroffen und sind mit der Zeit gute Freunde
                    geworden. Gedankenverloren schauen wir jetzt unter unserem
                    Vorsprung dem hektischen Treiben auf der Straße zu. «Echt
                    schön, oder», sagt Mark. Ich folge seinem Blick. Unweit der
                    Brücke des Kottbusser Damms, liegt eine schwimmende und
                    bewachsene Insel im Wasser. Vor ein paar Jahren wurde hier
                    das Pilotprojekt zur Renaturierung im Kanal gestartet. Die
                    schwimmenden Inseln, von denen es jetzt schon eine ganze
                    Menge gibt, bestehen aus Kokosmatten, die in der Sohle
                    verankert sind. Auf den Matten wachsen Schilfe,
                    Wasserschwaden und Rohrkolben. Röhrichte nennt man diese
                    schwimmenden Ufer-Biotope. «Schau mal», flüstere ich, «da
                    sind Nester». Als könnten mich die Küken von hier oben
                    hören. <br />
                    Regenrinnen, Biotop-Inseln. In den letzten Jahren hat sich
                    eine Menge getan in Berlin. «Ey», sagt Mark und grinst,
                    «wenn wir schon mal hier sind, lass mal checken, wie es dem
                    Kanal heute so geht». Er holt sein Smartpohone raus und
                    öffnet die SpreeBerlin-App. Auf der Karte, die sich nun
                    öffnet, erscheinen überall kleine Punkte entlang des
                    Wassers. Sie stehen für die vielen Bojen, die kontinuierlich
                    Sauerstoff in den Kanal pumpen und die Daten über die
                    Wasserqualität sammeln. Die nächste ist nur wenige hundert
                    Meter entfernt. Es hat nun auch wieder aufgehört zu regnen.
                    «So cool, dass es die jetzt gibt», sagt Mark. ‍<br />
                    <br /> Eingeweiht wurden sie beim Tag der Spree, vor zwei
                    Wochen. Veranstaltet wird dieser Tag zu Ehren des Flusses
                    einmal im Jahr von der Stadt Berlin. Und das jetzt schon zum
                    fünften Mal. Überall entlang der Spree stehen Buden, am Ufer
                    und auch schwimmend auf dem Fluss. «Wie lecker war bitte
                    diese Algenpasta», sage ich zu Mark auf dem Weg zu der Boje.
                    «Oha!», Mark bekommt einen träumerischen Gesichtsausdruck.
                    Ein Start-Up-Restauarant hatte da auf einem Floß auf dem
                    Fluss essbare Wasserpflanzen zu köstlichen Gerichten
                    gezaubert. Die Wasserpflanzen baut das Restaurant selber in
                    der Spree an – mitten in Berlin in der Nähe der
                    Oberbaumbrücke. Natürlich komplett frei von Rückständen und
                    super lecker.
                    <br />
                    Jedes Mal, wenn wieder der Tag der Spree stattfindet,
                    klopfen Mark und ich uns ein bisschen auf die Schulter.
                    Immerhin ist die Idee zu dem Festtag in unserem SymbioticLab
                    entstanden. Schon immer haben Mark und ich viel über die
                    Spree philosophiert. Das hat sich seit unserem ersten
                    Treffen nicht geändert. Wir merkten, dass ein Wandel her
                    muss. Nicht nur für uns Menschen, die diesen Fluss viel
                    aktiver nutzen könnten. Sondern vor allem auch für die
                    Pflanzen und Tiere, die so lange aus der Stadt vertrieben
                    worden waren. Und wir merkten, dass dieser Wandel nicht
                    durch Verbote herbeigeführt werden muss, sondern es eine
                    totale Bereicherung sein kann, wenn sich kluge, junge
                    Menschen aus unterschiedlichen Richtungen innovative Ideen
                    ausdenken. Seien es Designerinnen, Ingenieure,
                    Umwelttechnikerinnen, Künstler oder Programmiererinnen.{' '}
                  </p>
                </Box>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Box m={2}>
                  <p className="flowing-text flowing-text-black">
                    Beim SymbioticLab bringen wir diese Menschen an einen Tisch.
                    Wir veranstalten Urban Gardening Projekte entlang der Spree
                    und dem Landwehrkanal, machen Ausstellungen und treiben so
                    Ideen voran. Vor allem das Vernetzen der verschiedenen
                    Disziplinen steht im Vordergrund. Das Ganze kam genau zur
                    rechten Zeit. Vor zehn Jahren schon hatten ja erste Gruppen
                    angefangen, Projekte für die Spree zu entwickeln. Wie das
                    Flussbad, das heute der absolute Touristenmagnet ist. Solche
                    Ideen waren Ausdruck eines sich langsam wandelnden
                    gesellschaftlichen Klimas. Und selbst auf politischer Ebene
                    hat sich einiges getan. ‍
                    <br />
                    <br /> Ein wichtiger Meilenstein war auf jeden Fall, dass
                    dieses völlig veraltete Gesetz abgeschafft wurde, wegen dem
                    man in der Spree nicht schwimmen durfte. Die galt nämlich
                    als Bundeswasserstraße, obwohl kaum noch Schiffe darauf
                    fuhren. Vor kurzem haben wir auch erfahren, dass jetzt
                    endlich Auffangbecken überall in der Spree und auch dem
                    Landwehrkanal gebaut werden sollen, für die seit mehr als 30
                    Jahren gekämpft wurde. In ein paar Jahren dürften die
                    Gewässer endlich frei von Scheiße sein – sorry für den
                    Kraftausdruck, aber ist doch so. In allen Klärwerken werden
                    mittlerweile UV-Anlagen eingesetzt, um auch die kleinsten
                    Bakterien und Medikamenten-Rückstände aus dem Wasser zu
                    filtern. Und neulich kam in der Abendschau die Meldung, dass
                    die BSR von der Stadt beauftragt wurde, eine Lösung für das
                    Müllproblem in den Berliner Gewässern zu finden.
                    <br />
                    <br />
                    ‍ «Dem Wasser geht’s super», sagt Mark. Wir stehen nun vor
                    der kleinen, grauen SpreeBerlin-Boje, die leise brummt. Um
                    sie herum ein Meer aus blubbernden Luftblasen. «Sauerstoff
                    gut - okay, das kommt jetzt auch durch den Regen – aber
                    schau PH-Wert, Algenbelastung – alles bestens.» Er hält mir
                    sein Smartphone vor die Nase. «Der Balken ist auf grün, wir
                    könnten also jetzt schwimmen gehen, hast du Badesachen
                    dabei?» Ich schaue ihn an, die Augenbraue hochgezogen und
                    deute mit dem Finger nach oben. Am Himmel sieht es noch
                    immer ziemlich grau aus. «Nee lass mal», sage ich. «Aber wir
                    könnten was essen gehen, ich hab echt Hunger.» Und so machen
                    wir uns auf zum Ostbahnhof. Dort haben jetzt neue
                    Restaurants am Fluss aufgemacht. Auf Trassen, die bis hinab
                    zum Wasser reichen. Und auf Plattformen, die am Ufer
                    schwimmen, gibt es ein paar ziemlich coole Bars. ‍
                    <br />
                    <br /> Wir nehmen unsere Fahrräder. Leider kann man an
                    vielen Teilen des Landwehrkanals noch immer nicht mit dem
                    Fahrrad fahren. Aber, wie uns eine Freundin neulich bei
                    einem Meeting im Lab erzählte, in der Senatsverwaltung wurde
                    wohl der Beschluss gefasst, entlang der Spree und des Kanals
                    Fahrradwege zu bauen – und zwar flächendeckend. Nur eben
                    dort nicht, wo Häuser stehen oder Raum für Naturschutzräume
                    sein soll. «Es tut sich langsam was in Berlin», rufe ich zu
                    Mark und trete in die Pedale. «Ja», ruft er zurück, «aber
                    meine Güte, das dauert alles …»
                  </p>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </AccordionDetails>
      </Accordion>
      <img src="/static/images/Stroke-1.svg" className="myInfoDivider" />
      <Accordion
        sx={{
          backgroundColor: '#2473ff',
          color: '#ffffff',
          '&:before': {
            display: 'none',
          },
        }}
        elevation={0}
        disableGutters
      >
        <AccordionSummary elevation={0} className="infoAccordionText">
          2045
        </AccordionSummary>
        <AccordionDetails>
          <Card>
            <Grid container spacing={1}>
              <Grid item xs={12} lg={6}>
                <Box m={2}>
                  <p className="flowing-text flowing-text-black">
                    Fritz macht einen Salto. Vom Einer. Und Rückwärts. Vor
                    seinen Augen dreht sich die Welt auf den Kopf, blitzschnell.
                    Ganz kurz nur hängen die Bäume, das Schilf, der stahlblaue
                    Himmel verkehrt herum. Dann macht es Platsch! Er taucht ein,
                    ins frisch-kühle Nass der Spree. Er reist die Augen auf,
                    sieht alles nur verschwommen: die Umrisse der Fische, die
                    vor ihm Reiss-aus nehmen, das dunkle Grün der
                    Wasserpflanzen. Tausende Luftblasen steigen auf zur
                    Oberfläche. Und er mit ihnen. Er saugt die warme Luft ein,
                    reibt sich das Wasser aus den Augen, sieht sich um, erst
                    verwirrt, dann entdeckt er das Ufer. Er schreit: «Nochmal!»
                    Seine Stimme geht unter im Geplantsche der Anderen.
                    Sommerferien. Es ist heiß in Berlin. Zu heiß. Die Spree ist
                    einer der wenigen Orte in der Stadt, an denen es sich
                    aushalten lässt. <br />
                    <br />
                    ‍Osthafen. Hier, wo jahrzehntelang dieselbetriebene
                    Touri-Boote entlangtuckerten. Wo früher das Badeschiff war.
                    Ein Pool mitten im Fluss. Absurd! Jetzt ragen hier
                    Springtürme aus Holz in die Luft. Das Wasser ist klar. Der
                    stinkende Inhalt der Kanalisation findet schon lange nicht
                    mehr seinen Weg in die Gewässer. Große unterirdische Becken
                    fangen alles auf und spülen es zurück. ‍<br />
                    <br />
                    Auf den Becken Plattformen. Mal sind sie wild und grün
                    bewachsen. Libellen schwirren dort umher, man hört Vögel
                    zwitschern. Auf anderen herrscht vor kleinen Buden reges
                    Treiben. Dort hat sich Fritz jetzt angestellt. Das Wasser
                    auf seiner Haut ist schon getrocknet. «Gebratene
                    Wasserkastanien aus der Berliner Spree», preist ein Schild
                    die Köstlichkeit an. Gemüse aus dem Fluss ist in Berlin
                    keine Seltenheit. Aber Fritz hat Bock auf Pommes.
                    <br />
                    <br /> Letzte Woche, am letzten Schultag, haben sie einen
                    Ausflug gemacht. Alle haben ihr Fahrrad mitgebracht und dann
                    ging’s von Spandau bis zur Rummelsburger Bucht. Immer am
                    Fluss entlang. Seine Mutter hat ihm erzählt, dass das vor
                    zwanzig Jahren noch nicht ging, als sie das mal versuchte.
                    «Das war kurz nachdem ich deinen Vater kennengelernt hab»,
                    hat sie zu ihm gesagt. ‍
                    <br />
                  </p>
                </Box>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Box m={2}>
                  <p className="flowing-text flowing-text-black">
                    Es hat Spaß gemacht auf den breiten Fahrradwegen zu fahren.
                    Unter den Holzplanken konnte man die Pflanzen sehen, die das
                    Wasser reinigen. Die Tour führte sie auch zum Landwehrkanal
                    an der Nationalgalerie. Das Reichpietschufer wird heute
                    inoffiziell als Berliner Urwald bezeichnet. Alles ist dicht
                    bewachsen. Autos fahren hier ja schon lange nicht mehr. Die
                    Spundwände am Kanal sind teils zurückgebaut, teils
                    überwuchert von Hängepflanzen. Eisvögel und
                    Flussregenpfeifer flattern zwischen den Ästen der Weiden
                    umher. Reiher warten am Ufer auf Beute. Die Klasse hat eine
                    Führung mit einem Flussranger gemacht. Und Fritz hat sogar
                    einen Fischotter gesehen. <br />
                    <br />
                    Am Abend hat er das ganz stolz seinen Eltern erzählt. Aber
                    die haben gar nicht richtig zugehört. Viel zu aufgeregt
                    waren sie. Denn am nächsten Tag sollte in den Räumen ihres
                    Labs eine Gala veranstaltet werden. Weil Berlin einen
                    internationalen Preis erhalten hat, für den visionären
                    Umgang mit seinen Gewässern. Promis sind gekommen,
                    Politiker, sogar die Bundespräsidentin. Daran denkt Fritz
                    jetzt, während er seine Pommes verschlingt. Und daran, dass
                    er im nächsten Schuljahr ein Praktikum machen soll. Er hat
                    lange nicht gewusst, was das sein könnte. Aber dann hat bei
                    der Fahrradtour der Flussranger erzählt, dass Freunde von
                    ihm am Rande der Stadt Moore entstehen lassen. Er wird
                    darüber mit seinem Papa sprechen, denkt Fritz. Denn auch,
                    wenn er nicht so genau weiß, was das eigentlich heißt –
                    Moore entstehen lassen – so findet er doch, dass das
                    verdammt cool klingt. Aber jetzt sind erstmal Ferien, und er
                    muss unbedingt nochmal einen Salto machen. Es ist heiß in
                    Berlin und der schönste Ort ist hier am Fluss.
                  </p>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </AccordionDetails>
      </Accordion>

      <img src="/static/images/Stroke-1.svg" className="myInfoDivider" />
      <Box ml={2} sx={{ display: 'flex' }}>
        <Box>
          <p className="flowing-text">{`Texte von `}</p>
        </Box>
        <Box ml={1} sx={{ display: 'inline' }}>
          <Link href="http://www.niklasliebetrau.de/">
            <a className="flowing-text">{`Niklas Liebetrau`}</a>
          </Link>
        </Box>
      </Box>
      <div>
        <div
          className="moreButton"
          onClick={() => {
            setMoreOpen(!moreOpen)
          }}
        >
          WEITERES
        </div>
        <div className="mySpacer"></div>
      </div>
      {moreOpen && (
        <Box display="flex" alignItems="center" margin={2}>
          <Grid container spacing={1}>
            {props.more.map((item) => {
              return (
                <>
                  <Grid item xs={12} md={4}>
                    <Article
                      name={item.name}
                      pic_url={item.pic_url}
                      subheading1={item.subheading1}
                      subheading2={item.subheading2}
                      link={`/${props.moreType}/${item.id}`}
                    />
                  </Grid>
                </>
              )
            })}
          </Grid>
        </Box>
      )}
      <div className="mySpacer"></div>
    </>
  )
}

export async function getServerSideProps(context) {
  //console.log('loading article context', context.query.id);

  //console.log('context', context.query.type);

  let article = []

  let moreCount = 0
  let moreArticle = []
  let images = []
  let moreType = ''

  // article = await prisma.visionen.findMany({
  //     where: { id: parseInt(context.query.id) },
  // });
  // images = await prisma.images.findMany({
  //     where: {
  //         type: 'visionen',
  //         article_id: parseInt(context.query.id),
  //     },
  // });
  moreCount = await prisma.geschichte.count()
  const skip = Math.floor(Math.random() * moreCount)

  moreArticle = await prisma.geschichte.findMany({
    skip: skip,
    take: 3,
  })
  moreType = 'geschichte'

  const post = article[0]

  const more = JSON.parse(JSON.stringify(moreArticle.reverse()))
  //console.log('more', more);

  return {
    props: {
      id: 3,
      name: 'post.name',
      subheading1: 'post.subheading1',
      subheading2: 'post.subheading2',
      more,
      moreType,
    },
  }
}
