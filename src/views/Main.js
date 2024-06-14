import { useCallback, useState } from 'react';
import AboutPop from './AboutPop';
import Board from './Board';
import Deck from '../data/DeckData';
import Nav from './Nav';
import SettingsPop from './SettingsPop';
import Shuffle from '../components/Shuffle';
import UserData from '../data/UserData';

// Full Page Layout, Contains All Components
// TBD
// Prevent Accidental Refresh
// Log/Reg For Persistent Stats, User Data

const Main = () => {
    const [about, setAbout] = useState(false);
    const [blur, setBlur] = useState(false);
    const [deck, setDeck] = useState(Shuffle(Deck()));
    const [settings, setSettings] = useState(false);
    const [user, setUser] = useState(UserData());

    // Handle User Update From Settings
    // Used In Settings Pop
    const handleUserUpdate = (updatedUser) => {
        setUser(updatedUser);
    };

    // Resets Deck w/out Resetting UserData
    // Used In Nav
    const newGame = () => {
        const newDeck = [...Shuffle(Deck())];
        setBlur(false);
        setDeck(newDeck);
    };

    const toggleAbout = () => {
        const toggle = about ? false : true;
        setBlur(toggle);
        setAbout(toggle);
    };

    // Changes Background Dim For Pop Ups
    const toggleBlur = useCallback((setTo = true) => {
        setBlur(setTo);
    }, []);

    // Toggle Show Settings Pop
    // Used In Board Buttons
    const toggleSettings = () => {
        const toggle = settings ? false : true;
        setBlur(toggle);
        setSettings(toggle);
    };

    return (
        <div className='main fx-c'>
            <Nav newGame={newGame} toggleAbout={toggleAbout} />
            <Board
                deck={deck}
                newGame={newGame}
                toggleBlur={toggleBlur}
                toggleSettings={toggleSettings}
                user={user}
            />
            {blur ? <div className='main-blur h-100 w-100' /> : ''}
            {about ?
                <AboutPop toggleAbout={toggleAbout} />
                : ''}
            {settings ?
                <SettingsPop
                    toggleSettings={toggleSettings}
                    user={user}
                    userUpdate={handleUserUpdate}
                />
                : ''}
        </div>
    );
};

export default Main;