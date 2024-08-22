import React, { useContext, useEffect, useState } from 'react';
import { useManga } from './components/Mangacontext';
import { authentication } from './components/authentication';
import { useNavigate } from 'react-router-dom';
import './mangatable.css';

function MangaTable() {
    const { mangaList, removeManga, editManga, viewManga } = useManga();
    const { isAuthenticated } = useContext(authentication);
    const navigate = useNavigate();
    const [selectedManga, setSelectedManga] = useState(null);

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated, navigate]);

    const handleEdit = async (id) => {
        const updatedTitle = prompt('Enter the new title:');
        if (updatedTitle) {
            await editManga(id, updatedTitle);
        }
    };

    const handleView = (manga) => {
        setSelectedManga(manga);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            await removeManga(id);
        }
    };

    if (!isAuthenticated) {
        return null; 
    }

    return (
        <div className="container">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Title</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {mangaList.map((manga, index) => (
                        <tr key={manga.id}>
                            <td>{index + 1}</td>
                            <td>{manga.title}</td>
                            <td>
                                <button onClick={() => handleView(manga)} className="btn btn-success mx-2">View</button>
                                <button onClick={() => handleEdit(manga.id)} className="btn btn-info mx-2">Edit</button>
                                <button onClick={() => handleDelete(manga.id)} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {selectedManga && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setSelectedManga(null)}>&times;</span>
                        <img src={selectedManga.src} alt={selectedManga.title} />
                        <p>{selectedManga.title}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MangaTable;
