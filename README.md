## Zaliczenie `front-end`


### Opis projektu

#### Temat: ```Autentykacja w aplikacji webowej na przykładzie frameworka React.js```

#### Ważne

Przed przystąpieniem do testowania, ważne jest zainstalowanie wszystkich zależności za pomocą komendy 
```bash
yarn
```

#### "Autoryzacja" po storonie front-endu

Warto pamiętać że nie ma czegoś takiego jak "bezpieczny" dostęp do zasowób po stronie front-end'u. Wszelakie dane powinny zostać zabezpieczone backenowo, ponieważ złamanie zabezpieczeń na froncie jest bardzo proste.
Podane implementacje służą do bezpiecznego przechowywania:
- `access_tokenu`
- `refresh_tokenu`

Trzeba pamiętać, że nie zależnie od wybranej metody autentykacji tokeny te są łatwo dostępne dla użytkownika. Domyślną lokalizacją tokenu przeważnie są:
- `localStorage`
- `sessionStorage` - dla danych tymczasowych
- `cookie`

Tokeny można również bez problemu podejrzeć w zakładce `Network` w przeglądarce, oraz rozszyfrować za pomocą np `jwt.io`.

#### Testowanie
## Branche:
- [x] main
- [x] `react-auth-kit`
-  [x] `basic-auth`

## React-auth-kit

`react-auth-kit` jako biblioteka posiada miała za zadanie ułatwić autentykację w aplikacji webowej. Jej głównym założeniem ora zaletami miały być:
- prostota implementacji
- mały rozmiar biblioteki

Biblioteka nadaje się do wykonania podstaowych zadań takich jak blokowanie dostpęu do określonych ścieżek dla użytkownika. Jendakże posiada ona wiele mankanemów do których możemy zaliczć:
- brak możliwośći wprowadzenia `RBAC (Role-Based Access Control)` uznawanego za standard oraz wymaganego prze dyrektywę `NIS2` (Dyrektywa mówiąca  o  bezpieczeństwie danych w obrębie aplikacji komputerowych - bardzo ogólnie wyjaśnione)
- nie jasna dokumentacja
- brak obsługi błędów, wręcz nie możliwe do obsłużenie scenariusze:
  - wygaśnięcia tokenu
  - nie poprawnego tokenu
  - tokenu bez `exp` (czasu wygaśnięcia)
  - `refresh token` wymaga dodatkowej implemetacji (biblioteka sugeruje sposób w jaki powinien być wykonana, ale nie podaje żadnych innych danych. Dodatkowo, bo przeananlizowaniu sposobu działania odświerzania tokenu, w oparciu o `timeout` tokenu)

## Basic-auth

Autoryzacja w oparciu o bibliotekę `react-jwt`. Autoryzacja ta opiera się na sprawdzeniu poprawności tokenu, `RBAC` oraz innych możliwośćiach.
Zaimplementowany sposób posiada możliwość:
- blokowania dostępu do określonych ścieżek
- sprawdzania poprawności tokenu
- sprawdzania roli użytkownika

Podaną autoryzację można w dowolny sposób rozbudowywać o dodatkowe funkcje, np `refresh token`, `wygaśnięcie tokenu` oraz inne.