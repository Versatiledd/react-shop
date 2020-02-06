export const items = [
  {
    sys: { id: 0 },
    fields: {
      title: "HTML - Full Course for beginners",
      price: 100,
      company: "Simple Code",
      description:
        "Kurs przeznaczony dla osób, które pragną wyruszyć w długą i ciężką podróż związaną z programowaniem. Prowadzący w sposób przemyślany omawia podstawowe zagadnienia dotyczące semantyki, sposobu zagnieżdzania elementów oraz wiele więcej.",
      featured: true,
      image: { fields: { file: { url: "img/html.webp" } } }
    }
  },
  {
    sys: { id: 1 },

    fields: {
      title: "Advanced Node - be ekspert",
      price: 450,
      description:
        "Node.js – wieloplatformowe środowisko uruchomieniowe o otwartym kodzie do tworzenia aplikacji typu server-side napisanych w języku JavaScript. Przyczynił się do stworzenia paradygmatu „JavaScript everywhere”[3] umożliwiając programistom tworzenie aplikacji w obrębie jednego języka programowania zamiast polegania na odrębnych po stronie serwerowej.",
      featured: false,
      image: { fields: { file: { url: "img/react.png" } } }
    }
  },
  {
    sys: { id: 2 },
    fields: {
      title: "Node",
      price: 450,
      description:
        "Node.js – wieloplatformowe środowisko uruchomieniowe o otwartym kodzie do tworzenia aplikacji typu server-side napisanych w języku JavaScript. Przyczynił się do stworzenia paradygmatu „JavaScript everywhere”[3] umożliwiając programistom tworzenie aplikacji w obrębie jednego języka programowania zamiast polegania na odrębnych po stronie serwerowej.",
      featured: false,
      image: { fields: { file: { url: "img/node.jpg" } } }
    }
  },
  {
    sys: { id: 3 },

    fields: {
      title: "Kurs CSS - zacznij budować piękne strony internetowe",
      price: 150,
      description:
        "Kaskadowe arkusze stylów (ang. Cascading Style Sheets, w skrócie CSS) – język służący do opisu formy prezentacji (wyświetlania) stron WWW. CSS został opracowany przez organizację W3C w 1996 r. jako potomek języka DSSSL przeznaczony do używania w połączeniu z SGML-em. Pierwszy szkic CSS zaproponował w 1994 r.",
      featured: true,
      image: { fields: { file: { url: "img/css.webp" } } }
    }
  },
  {
    sys: { id: 4 },

    fields: {
      title: "Graph QL",
      price: 420,
      description:
        "GraphQL pochodzi z Facebooka, który wewnętrznie szukał sposobu na zwiększenie wydajności ładowania newsfeedu w telefonach komórkowych. Korzystając z tradycyjnej struktury REST API, newsfeed wysyłał zapytania do wielu endpointów API, aby uzyskać wszystkie potrzebne dane. W tym czasie wywołania API również ładowały dodatkowe dane, których newsfeed wcale nie potrzebował. Dodatkowo po otrzymaniu całości inżynierowie front-endowi nadal musieli analizować dane, aby znaleźć poszukiwane pola.",
      featured: true,

      image: { fields: { file: { url: "img/graphql.jpeg" } } }
    }
  },
  {
    sys: { id: 5 },

    fields: {
      title: "React",
      price: 350,
      description:
        "React.js (inne stosowane nazwy: React, ReactJS) – biblioteka języka programowania JavaScript, która wykorzystywana jest do tworzenia interfejsów graficznych aplikacji internetowych. Została stworzona przez Jordana Walke, programistę Facebooka, a zainspirowana przez rozszerzenie języka PHP - XHP Z głównych cech wyróżniających bibliotekę React.js jest wirtualny DOM (Document Object Model, po polsku Obiektowy Model Dokumentu). React przechowuje cały DOM aplikacji w pamięci, po zmianie stanu wyszukuje różnice między wirtualnym i prawdziwym DOM i aktualizuje zmiany. Drugą z cech szczególnych React jest język JSX. Jest on nakładką na JavaScript, która dodaje możliwość wstawiania kodu html (lub komponentów React) bezpośrednio w kodzie, zamiast ciągu znaków",
      featured: true,

      image: { fields: { file: { url: "img/js.png" } } }
    }
  }
];
