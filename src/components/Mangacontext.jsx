import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const Mangacontext = createContext();

export function MangacontextProvider({ children }) {
    const [mangaList, setMangaList] = useState([]);

    useEffect(() => {
        fetchMangaList(); 
    }, []);

    const fetchMangaList = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/items');
            setMangaList(response.data);
        } catch (error) {
            console.error('Error fetching manga list:', error);
        }
    };

    const addManga = async (title) => {
        try {
            await axios.post('http://127.0.0.1:8000/api/items', { title });
            fetchMangaList(); 
        } catch (error) {
            console.error('Error adding manga:', error);
        }
    };

    const removeManga = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/items/${id}`);
            fetchMangaList(); 
        } catch (error) {
            console.error('Error removing manga:', error);
        }
    };

    const editManga = async (id, updatedTitle) => {
        try {
            await axios.put(`http://127.0.0.1:8000/api/items/${id}`, { title: updatedTitle });
            fetchMangaList(); 
        } catch (error) {
            console.error('Error updating manga:', error);
        }
    };

    const viewManga = (id) => {
        console.log(`View manga with id ${id}`);
    };

    return (
        <Mangacontext.Provider value={{ mangaList, addManga, removeManga, editManga, viewManga, fetchMangaList }}>
            {children}
        </Mangacontext.Provider>
    );
}

export const useManga = () => useContext(Mangacontext);
