import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { useManga } from './components/Mangacontext';
import axios from 'axios';
import './items.css';

function Items() {
    const { fetchMangaList } = useManga(); 

    const mangaData = [
        { title: 'Berserk', src: './src/assets/Berserk.jpg' },
        { title: 'Bleach', src: './src/assets/bleach.jpg' },
        { title: 'Blue Lock', src: './src/assets/bluelock.jpg' },
        { title: 'Demon Slayer', src: './src/assets/demonslayer.jpg' },
        { title: 'Haikyuu', src: './src/assets/haikyuu.jpg' },
        { title: 'Hunter X Hunter', src: './src/assets/hxh.jpg' },
        { title: 'My Hero Academia', src: './src/assets/mha.jpg' },
        { title: 'Naruto', src: './src/assets/naruto.jpg' },
        { title: 'One Piece', src: './src/assets/onepiece.jpg' },
        { title: 'Samurai X', src: './src/assets/samurai.jpg' },
        { title: 'Attack on Titan', src: './src/assets/titan.jpg' },
        { title: 'Toriko', src: './src/assets/toriko.jpg' }
    ];

    const handleAdd = async (title, src) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/items', { title, src });
            fetchMangaList(); 
        } catch (error) {
            console.error('Error adding manga:', error);
        }
    };

    return (
        <div>
            <div className="gallery">
                {mangaData.map((manga, index) => (
                    <div className="image-holder" key={index}>
                        <a href="#">
                            <img src={manga.src} alt={manga.title} />
                        </a>
                        <div className="desc">
                            {manga.title}
                            <br />
                            <FontAwesomeIcon icon={faHeart} className='icon' aria-hidden="true" />
                            <button onClick={() => handleAdd(manga.title, manga.src)}>Add</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Items;
