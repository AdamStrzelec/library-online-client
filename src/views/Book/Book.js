import React from 'react';
import BookItem from '../../components/BookItem/BookItem';
import './Book.css';


const inMemoryBooks = [
    {
        id: 1,
        name: 'Ślepnąc od świateł',
        author: 'Jakub Żulczyk',
        author_id: 1,
        description: 'Zawsze chodzi wyłącznie o pieniądze. O nic innego. Ktoś może powiedzieć ci, że to niska pobudka. To nieprawda - oświadcza bohater powieści Jakuba Żulczyka. Ten młody człowiek przyjechał z Olsztyna do Warszawy, gdzie prawie skończył ASP. By uniknąć powielania egzystencjalnych schematów swoich rówieśników – przyszłych meneli, ludzi mogących w najlepszym razie otrzeć się o warstwy klasy średniej, niepoprawnych idealistów – dokonał życiowego wyboru według własnych upodobań: Zawsze lubiłem ważyć i liczyć.',
        image_url: 'https://s.lubimyczytac.pl/upload/books/4863000/4863015/691149-352x500.jpg',
        rating: 4.5,
    },
    {
        id: 2,
        name: 'Rok 1984',
        author: 'George Orwell',
        author_id: 2,
        description: 'Wielki Brat Patrzy – to właśnie napisy tej treści, w antyutopii Orwella krzyczące z plakatów rozlepionych po całym Londynie, natchnęły twórców telewizyjnego show „Big Brother”. Czyżby wraz z upadkiem komunizmu wielka, oskarżycielska powieść straciła swoją rację bytu, stając się zaledwie inspiracją programu rozrywkowego? Nie. Bo ukazuje świat, który zawsze może powrócić. Świat pustych sklepów, permanentnej wojny, jednej wiary.',
        image_url: 'https://s.lubimyczytac.pl/upload/books/241000/241181/338839-352x500.jpg',
        rating: 4.8,
    },
    {
        id: 3,
        name: 'HOBBIT',
        author: 'J.R.R. Tolkien',
        author_id: 3,
        description: 'Pełne magii i przygód wspaniałe preludium do Władcy Pierścieni.Wydanie ilustrowane z genialnymi ilustracjami Alana Lee, które zainspirowały twórców kinowego przeboju. Bilbo Baggins to hobbit, który lubi wygodne, pozbawione niespodzianek życie, rzadko podróżując dalej niż do swojej piwnicy. Jego błogi spokój zostaje jednak zakłócony, gdy pewnego na jego progu pojawia się czarodziej Gandalf z gromadą krasnoludów, by porwać go na prawdziwą przygodę. Wszyscy wyruszają po wielkie skarby strzeżone przez Smauga Wspaniałego, wielkiego i bardzo niebezpiecznego smoka. Bilbo niechętnie dołącza do ich misji, nie zdając sobie sprawy, że w drodze do Samotnej Góry spotka zarówno magiczny pierścień, jak i przerażające stworzenie zwane Gollumem.        Oszałamiająca opowieść o wielkiej przygodzie, wypełniona napięciem i zaprawiona subtelnym humorem, któremu nie sposób się oprzeć”.       – New York Times Book Review',
        image_url: 'https://s.lubimyczytac.pl/upload/books/4821000/4821058/628377-352x500.jpg',
        rating: 4.8,
    },
]

class Book extends React.Component {

    state = {
        books: []
    }


    componentDidMount = () => {
        fetch('http://localhost:4000/books')
            .then(response => response.json())
            .then(json => this.setState({ books: json.books }))
    }
    render() {
        const { books } = this.state;

        const filter = this.props.match.params.id
        
        var filteredBooks = books.filter(function (books) {
           
            if (books.id ==filter)
                return books
        })

        return (
            <div className="homeWrapper">
                <div>searchbar</div>
                <div className="items">

                    {filteredBooks.map(book => <BookItem key={book.id} book={book} full={true}  />)}
                </div>
            </div>
        )
    }
};

export default Book;