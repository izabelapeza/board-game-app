import { defineStore } from "pinia";

export const useGamesStore = defineStore({
  id: "games",
  state: () => ({
    games: [
      {
        id: 0,
        title: "Wsiąść do Pociągu: Europa",
        publisher: "Rebel",
        category: "rodzinne",
        players: "2+",
        suggested_age: "8+",
        description:
          "Od urwistych wzgórz Edynburga po słoneczne nabrzeża Stambułu, z dusznych alej Pampeluny do wietrznego Berlina - Wsiąść do pociągu: Europa zabierze cię w wielką podróż przez wielkie miasta Starego Kontynentu u progu zeszłego stulecia. Czy odważysz się przebyć mroczne tunele Szwajcarii? Wsiądziesz na pokład promu przemierzającego Morze Czarne? Wzniesiesz dumne dworce w stolicach imperiów? Następne posunięcie może uczynić cię największym magnatem kolejowym Europy! Pakuj walizki, wołaj bagażowego i wsiądź do pociągu! Wsiąść do pociągu: Europa to druga część niezmiernie popularnej serii o wielkiej, kolejowej przygodzie. Gracze zbierają karty przedstawiające wagony i używają ich by budować dworce, pokonywać tunele, wsiadać na promy i zajmować trasy kolejowe jak Europa długa i szeroka. To gra prosta i elegancka, której można nauczyć się w 5 minut. Zapewni dobrą zabawę całej rodzinie, spodoba się też doświadczonym graczom.",
        image: "Wsiasc-do-pociagu.png",
      },
      {
        id: 1,
        title: "Karczma pod Pękatym Kuflem",
        publisher: "G3",
        category: "strategiczne",
        players: "2-4",
        suggested_age: "12+",
        description:
          "Lokalna karczma – pod pękatym kuflem jest najlepszym tego typu przybytkiem w okolicy. Jej właściciel postanowił przejść na emeryturę i zastanawia się komu powierzyć prowadzenie swojej karczmy. Ten kto poprowadzi najlepszą karczmę, komu uda się ściągnąć jak najwięcej gości, w czyje progi zechce przyjść szlachta, dostąpi zaszczytu prowadzenia Karczmy pod pękatym kuflem. Każdy z graczy wciela się w rolę gospodarza karczmy i stara się przyciągnąć do niej nowych gości, gotowych do wyzbycia się gotówki. Tylko w ten sposób uda się zgromadzić wystarczająco dużo pieniędzy na rozbudowę karczmy tak, aby w przyszłości stała się atrakcyjna także dla szlachciców i zapewniła prowadzenie najlepszej z karczm – Pod pękatym kuflem. Tylko w co inwestować? Dodatkowych stołów nigdy za wiele, ale może lepiej rozbudować magazyn z piwem? Oszczędzać? A może lepiej zarabiać, dbając o to, żeby piwo lało się strumieniami?\n W Karczmie pod pękatym kuflem gracze, aby wygrać, muszą odpowiednio wybierać kości i rozbudowywać talię zbierając w niej najlepszych pomocników i najbogatszych bywalców. Gra ma aż 5 modułów, dzięki nim można dopasować poziom trudności do graczy",
        image: "Karczma-pod-pekatym-kuflem.png",
      },
      {
        id: 2,
        title: "List Miłosny",
        publisher: "Rebel",
        category: "imprezowe",
        players: "2-6",
        suggested_age: "10+",
        description:
          "W grze List miłosny od 2 do 6 absztyfikantów rywalizuje o to, aby ich list trafił do rąk Królewny. Ta bowiem szuka idealnego kandydata na męża i powiernika, gdy już obejmie tron.\n Rozgrywka w List miłosnytrwa kilka rund, podczas których wykorzystujesz sojuszników, przyjaciół i członków rodziny królewskiej, aby doręczyli Królewnie napisany przez Ciebie list miłosny. Karta na ręce symbolizuje postać, która aktualnie niesie Twój list. Ta postać może się jednak zmienić w trakcie rundy, w miarę jak będziesz dobierać i zagrywać karty.\nKażda z postaci, którą możesz dostać na rękę, ma swój unikalny efekt działania. Warto zatem zagrywać je w sposób przemyślany i próbować kontrolować, jakie karty mogą mieć na ręce przeciwnicy. Niektóre efekty pozwalają eliminować innych uczestników zabawy!\nRundę wygrywa gracz, który kończy ją z najwyżej punktowaną kartą lub który jako jedyny z niej nie odpadł.",
        image: "List-milosny.png",
      },
      {
        id: 3,
        title: "Terraformacja Marsa",
        publisher: "Rebel",
        category: "strategiczne",
        players: "1-5",
        suggested_age: "12+",
        description:
          "Ludzkość rozpoczęła ekspansję w Układzie Słonecznym. Na Marsie założono już kilka niewielkich kolonii. Ich mieszkańcy są odgrodzeni od naturalnego środowiska straszliwie zimnej, suchej i niemal pozbawionej atmosfery planety.\nZwiększenie odsetka imigracji z Ziemi wymaga terraformacji Marsa, czyli dostosowania jego środowiska, aby ludzie mogli w nim przeżyć bez sprzętu ochronnego i aby zminimalizować śmiertelność w wyniku drobnych wypadków. W związku z tym Rząd Ziemi zdecydował się wesprzeć każdą organizację, która przyczyni się do tego wiekopomnego dzieła.\nHojne dofinansowanie przyciąga gigantyczne korporacje, które pragną zwiększyć swój udział w rynku i stać się najbardziej wpływowymi podmiotami realizującymi projekt terraformacji. Ujarzmienie Czerwonej Planety to dla wielu szansa na oszałamiający sukces.\nW Terraformacji Marsa gracz obejmie kontrolę nad jedną z korporacji i jako jej zarząd będzie kupować i zagrywać karty opisujące różne projekty inwestycyjne. Zazwyczaj projekty będą bezpośrednio lub pośrednio przyczyniać się do procesu terraformacji, mogą też jednak być przedsięwzięciami biznesowymi innego rodzaju.\nAby wygrać, gracz musi osiągnąć wysoki Współczynnik Terraformacji (WT) i zdobyć dużo Punktów Zwycięstwa (PZ). WT gracza wzrasta za każdym razem, kiedy podniesie on jeden ze Wskaźników Globalnych (Temperaturę, poziom Tlenu lub liczbę Oceanów). Od WT zależy podstawowy dochód gracza, a także jego podstawowy wynik.\nW miarę przebiegu procesu terraformacji gracze będą mogli realizować coraz większą liczbę projektów. Dodatkowe PZ można zdobyć za wszystko, co przyczyni się do zwiększenia panowania ludzkości nad Układem Słonecznym, na przykład za zakładanie miast, budowę infrastruktury lub ochronę środowiska.",
        image: "Terraformacja-Marsa.png",
      },
      {
        id: 4,
        title: "Najlepsza Gra o Psach",
        publisher: "FoxGames",
        category: "rodzinne",
        players: "2-4",
        suggested_age: "14+",
        description:
          "Czy lubisz słodkie pieseły? Chcesz pogłaskać każdego napotkanego szczeniaka, bo każdy dobry szczeniak zasługuje na czułości? Lubisz fajne gry z piękną grafiką?\nJeśli odpowiedziałeś twierdząco na którekolwiek lub wszystkie z tych pytań, jesteś we właściwym miejscu!\nNajlepsza gra o psach to urocza gra o zebraniu podwórka pełnego psów, które mają wspólny - być jak najbardziej rozkoszne.",
        image: "Najlepsza-gra-o-psach.png",
      },
    ],
  }),
  getters: {
    randomGame: (state) => {
      let randomGames = [];
      let randomItem;
      while (randomGames.length < 3) {
        randomItem =
          state.games[Math.floor(Math.random() * state.games.length)];
        if (!randomGames.includes(randomItem)) {
          randomGames.push(randomItem);
        }
      }
      return randomGames;
    },
  },
});

// export const useCounterStore = defineStore({
//   id: "counter",
//   state: () => ({
//     counter: 0,
//   }),
//   getters: {
//     doubleCount: (state) => state.counter * 2,
//   },
//   actions: {
//     increment() {
//       this.counter++;
//     },
//   },
// });
