import React from 'react';
import BookItem from '../../components/BookItem/BookItem';

const inMemoryBooks = [
    {
        id: 1,
        name: 'Ślepnąc od świateł',
        author: 'Jakub Żulczyk',
        description: 'Zawsze chodzi wyłącznie o pieniądze. O nic innego. Ktoś może powiedzieć ci, że to niska pobudka. To nieprawda - oświadcza bohater powieści Jakuba Żulczyka. Ten młody człowiek przyjechał z Olsztyna do Warszawy, gdzie prawie skończył ASP. By uniknąć powielania egzystencjalnych schematów swoich rówieśników – przyszłych meneli, ludzi mogących w najlepszym razie otrzeć się o warstwy klasy średniej, niepoprawnych idealistów – dokonał życiowego wyboru według własnych upodobań: Zawsze lubiłem ważyć i liczyć.',
        image_url: 'https://s.lubimyczytac.pl/upload/books/4863000/4863015/691149-352x500.jpg',
    }
]

const Home = () => (
    <div>
        <div>searchbar</div>
        <div>
            <BookItem book={inMemoryBooks[0]}/>
            <BookItem book={inMemoryBooks[0]}/>
            <BookItem book={inMemoryBooks[0]}/>
            <BookItem book={inMemoryBooks[0]}/>
        </div>
    </div>

);

export default Home;