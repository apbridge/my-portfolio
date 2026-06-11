import { useState, useEffect } from 'react'; 
import styles from "../../styles/jeopardy.module.css";
import tacoImage from '../../assets/jeopardy/taco.jpg'; 
import buzzerQR from '../../assets/jeopardy/qr.png'; 
import cerealwithmilk from '../../assets/jeopardy/cerealwithmilk.jpg'; 
import beansontoast from '../../assets/jeopardy/beansontoast.jpg'; 
import beefwellington from '../../assets/jeopardy/beefwellington.jpg'; 
import biscuitsandgravy from '../../assets/jeopardy/biscuitsandgravy.jpg'; 
import breadbowl from '../../assets/jeopardy/breadbowl.jpg'; 
import cheesecake from '../../assets/jeopardy/cheesecake.jpg'; 
import chickenandwaffles from '../../assets/jeopardy/chickenandwaffles.jpg'; 
import chipsandsalsa from '../../assets/jeopardy/chipsandsalsa.jpg'; 
import curry from '../../assets/jeopardy/curry.jpg'; 
import dairyqueenblizzard from '../../assets/jeopardy/dairyqueenblizzard.png'; 
import jellydoughnut from '../../assets/jeopardy/jellydoughnut.jpg'; 
import lasagna from '../../assets/jeopardy/lasagna.jpg'; 
import omelette from '../../assets/jeopardy/omlette.jpg'; 
import parfait from '../../assets/jeopardy/parfait.jpg'; 
import pierogidumpling from '../../assets/jeopardy/pierogidumpling.jpg'; 
import popsicle from '../../assets/jeopardy/popsicle.jpg'; 
import poutine from '../../assets/jeopardy/poutine.jpg'; 
import sliceofpizza from '../../assets/jeopardy/sliceofpizza.png'; 
import sushiroll from '../../assets/jeopardy/sushiroll.jpg'; 
import tiramisu from '../../assets/jeopardy/tiramisu.jpg'; 

const JeopardyPage = () => {
    const [step, setStep] = useState(0);
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [roomCode, setRoomCode] = useState('');

    // --- SCOREBOARD STATE ---
    const [players, setPlayers] = useState([
        { id: 1, name: 'August', score: 0 },
        { id: 2, name: 'Colin', score: 0 },
        { id: 3, name: 'Connor', score: 0 },
        { id: 4, name: 'Isaiah', score: 0 },
        { id: 5, name: 'Justine', score: 0 },
        { id: 6, name: 'Laurine', score: 0 },
        { id: 7, name: 'Nate', score: 0 },
        { id: 8, name: 'Trevor', score: 0 },
        { id: 9, name: 'Zack', score: 0 },
    ]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const CORRECT_PASSWORD = 'nonerdsallowed'; 

    useEffect(() => {
        const originalMinHeight = document.body.style.minHeight;
        document.body.style.minHeight = '100vh';
        return () => { document.body.style.minHeight = originalMinHeight; };
    }, []);

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        if (password.toLowerCase().trim() === CORRECT_PASSWORD) {
            setErrorMessage('');
            setPassword('');
            setStep(1);
        } else {
            setErrorMessage('Incorrect password. Please try again!');
        }
    };

    const handleResetGame = () => {
        setPassword('');
        setErrorMessage('');
        setRoomCode('');
        setStep(0);
        setIsSidebarOpen(false);
        
        setPlayers([
            { id: 1, name: 'August', score: 0 },
            { id: 2, name: 'Colin', score: 0 },
            { id: 3, name: 'Connor', score: 0 },
            { id: 4, name: 'Isaiah', score: 0 },
            { id: 5, name: 'Justine', score: 0 },
            { id: 6, name: 'Laurine', score: 0 },
            { id: 7, name: 'Nate', score: 0 },
            { id: 8, name: 'Trevor', score: 0 },
            { id: 9, name: 'Zack', score: 0 },
        ]);
    };

    // --- SCOREBOARD HANDLERS ---
    const handleNameChange = (id, newName) => {
        setPlayers(prev => prev.map(p => p.id === id ? { ...p, name: newName } : p));
    };

    const handleScoreChange = (id, newScore) => {
        const parsedScore = parseInt(newScore);
        setPlayers(prev => prev.map(p => p.id === id ? { ...p, score: isNaN(parsedScore) ? 0 : parsedScore } : p));
    };

    const adjustScore = (id, amount) => {
        setPlayers(prev => prev.map(p => p.id === id ? { ...p, score: p.score + amount } : p));
    };

    // Helper to format 1 -> 1st, 2 -> 2nd, 3 -> 3rd, etc.
    const getOrdinalSuffix = (i) => {
        const j = i % 10, k = i % 100;
        if (j === 1 && k !== 11) return i + "st";
        if (j === 2 && k !== 12) return i + "nd";
        if (j === 3 && k !== 13) return i + "rd";
        return i + "th";
    };

    return (
        <div className={styles.container}>
            {/* GLOBAL SCOREBOARD SIDEBAR BUTTON */}
            {step === 6 && (
                <button 
                    className={styles.sidebarToggleBtn} 
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    {isSidebarOpen ? '❌ Close Scores' : '🏆 View Scores'}
                </button>
            )}

            {/* SIDEBAR DRAWER COMPONENT */}
            <div className={`${styles.sidebarDrawer} ${isSidebarOpen ? styles.sidebarOpen : ''}`}>
                <div className={styles.sidebarHeader}>
                    <h2>Game Scoreboard</h2>
                    <p>Edit names and scores manually below:</p>
                </div>
                <div className={styles.sidebarList}>
                    {players.map((player) => (
                        <div key={player.id} className={styles.playerRow}>
                            <input 
                                type="text"
                                className={styles.playerNameInput}
                                value={player.name}
                                onChange={(e) => handleNameChange(player.id, e.target.value)}
                            />
                            <div className={styles.scoreControlGroup}>
                                <button type="button" onClick={() => adjustScore(player.id, -100)}>-100</button>
                                <input 
                                    type="number"
                                    className={styles.playerScoreInput}
                                    value={player.score}
                                    onChange={(e) => handleScoreChange(player.id, e.target.value)}
                                />
                                {/* FIXED LINE HERE: Changed onClick={() => ...}+100</button> to onClick={() => ...}>+100</button> */}
                                <button type="button" onClick={() => adjustScore(player.id, 100)}>+100</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* STEP 0 to 5: (Kept exactly as original) */}
            {step === 0 && (
                <div className={styles.cardCenter}>
                    <div className={styles.headerContent}>
                        <h1>Welcome to Soup, Salad, or Sandwich!</h1>
                        <h3>By Belle (and AI)</h3>
                    </div>
                    <hr />
                    <form onSubmit={handlePasswordSubmit} className={styles.form}>
                        <p>Please enter the access password to unlock the game:</p>
                        <input 
                            type="password" 
                            placeholder="Enter password..." 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={styles.passwordInput}
                        />
                        {errorMessage && <p className={styles.errorText}>{errorMessage}</p>}
                        <button type="submit" className={styles.submitButton}>Unlock Game</button>
                    </form>
                </div>
            )}

            {step === 1 && (
                <div className={styles.cardCenter}>
                    <div className={styles.headerContent}>
                        <h1>⚠️ Audio Warning</h1>
                    </div>
                    <hr />
                    <div className={styles.warningContent}>
                        <p>This game utilizes sound effects and audio cues for the ultimate experience!</p>
                        <p>Please ensure your volume is adjusted to a comfortable level... you have been warned...</p>
                    </div>
                    <button className={styles.submitButton} onClick={() => setStep(2)}>I'm Ready!</button>
                </div>
            )}

            {step === 2 && (
                <div className={styles.infoCard}>
                    <div className={styles.headerContent}>
                        <h1>⚖️ Liability Release</h1>
                        <h3>By Participating, You Automatically Agree to the Following Terms:</h3>
                    </div>
                    <hr />
                    <div className={styles.legalContent}>
                        <ul className={styles.legalList}>
                            <li>👊 <strong>Physical or Verbal Altercations:</strong> Any fistfights, shouting matches, lifelong grudges, or broken friendships resulting from aggressive debates over food structures.</li>
                            <li>🛠️ <strong>Property Damage:</strong> Destruction of personal property, corporate hardware, or smashed phone screens caused by rage or throwing objects in frustration.</li>
                            <li>🧠 <strong>Existential Dread:</strong> Emotional distress or psychological harm caused by the content of this game, others, or yourself.</li>
                            <li>🤤 <strong>Extreme Munchies:</strong> Staring at delicious imagery and intensely debating culinary arts will cause severe cravings. <strong>Belle is not at fault for you being hungry</strong>, nor is she legally obligated to provide snacks. Proceed at your own stomach's risk.</li>
                        </ul>
                        <p className={styles.legalFinePrint}>Play at your own risk. Belle's decisions are absolute, legally binding within this room, and non-negotiable.</p>
                    </div>
                    <div className={styles.buttonGroup}>
                        <button className={styles.backButton} onClick={() => setStep(1)}>Back</button>
                        <button className={styles.submitButton} onClick={() => setStep(3)}>Next: How to Play →</button>
                    </div>
                </div>
            )}

            {step === 3 && (
                <div className={styles.infoCard}>
                    <div className={styles.headerContent}>
                        <h1>🍲 How To Play 🥗</h1>
                        <h3>The Rules of Classification</h3>
                    </div>
                    <hr />
                    <p className={styles.introText}>
                        Every item in this game must be forcefully categorized into one of three structural pillars: 
                        <strong> Soup, Salad, or Sandwich</strong>—even if it technically isn't one!
                    </p>
                    <div className={styles.exampleSection}>
                        <div className={styles.exampleImageWrapper}>
                            <img src={tacoImage} alt="Delicious Case Study Taco" className={styles.exampleImage} />
                        </div>
                        <div className={styles.argumentBox}>
                            <h4>Example: The Taco</h4>
                            <p>How could you possibly classify this? Let's break down the arguments:</p>
                            <ul>
                                <li><strong>🥪 Sandwich:</strong> You can pick up a sandwich like you can pick up a taco. It also has layers.</li>
                                <li><strong>🥗 Salad:</strong> Shaved lettuce, diced tomatoes, cheese, and meat tossed together could be more like the consistency of a salad. Any sauce could be considered dressing. You can also pretty easily pull this apart.</li>
                                <li><strong>🥣 Soup:</strong> I guess if you put enough sauce on it...</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.buttonGroup}>
                        <button className={styles.backButton} onClick={() => setStep(2)}>Back</button>
                        <button className={styles.submitButton} onClick={() => setStep(4)}>Read the Rules →</button>
                    </div>
                </div>
            )}

            {step === 4 && (
                <div className={styles.infoCard}>
                    <div className={styles.headerContent}>
                        <h1>📜 The Official Rules</h1>
                        <h3>Law of the Land</h3>
                    </div>
                    <hr />
                    <ol className={styles.rulesList}>
                        <li>🚫 <strong>No Cheating:</strong> Seriously, don't look up answers. This is supposed to be fun!</li>
                        <li>👑 <strong>Belle's Dictatorship:</strong> Belle's culinary opinion trumps all logic, science, and history. She decides who gets the points. No appeals. #notsorry</li>
                        <li>⏱️ <strong>Buzzer Priority:</strong> The first person to buzz in with a correct, logical argument receives the points by default.</li>
                        <li>🤡 <strong>The Jester Bonus:</strong> The most ridiculous, unhinged, or hilariously creative argument will get <strong>500 points</strong> added to their score.</li>
                        <li>🃏 <strong>The Gambit Clause:</strong> If you win a round, you can choose to claim the points, reward them to someone else, or deduct them from a rival.</li>
                    </ol>
                    <div className={styles.buttonGroup}>
                        <button className={styles.backButton} onClick={() => setStep(3)}>Back</button>
                        <button className={styles.submitButton} onClick={() => setStep(5)}>Connect Buzzers →</button>
                    </div>
                </div>
            )}

            {step === 5 && (
                <div className={styles.infoCard}>
                    <div className={styles.headerContent}>
                        <h1>🚨 Sync Your Buzzers</h1>
                        <h3>Get Ready to Click Fast</h3>
                    </div>
                    <hr />
                    <div className={styles.roomCodeBanner}>
                        {roomCode ? (
                            <h2>Room Code: <span className={styles.roomCodeHighlight}>{roomCode}</span></h2>
                        ) : (
                            <h2 className={styles.roomCodePlaceholder}>Type room code below...</h2>
                        )}
                    </div>
                    <div className={styles.exampleSection}>
                        <div className={styles.qrContainer}>
                            <input 
                                type="text"
                                placeholder="Type Room Code Here..."
                                value={roomCode}
                                onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
                                className={styles.roomCodeInput}
                                maxLength={8}
                            />
                            <img src={buzzerQR} alt="Scan to join Buzzin.live" className={styles.qrImage} />
                            <a href="https://buzzin.live/" target="_blank" rel="noopener noreferrer" className={styles.buzzerLink}>buzzin.live</a>
                        </div>
                        <div className={styles.argumentBox}>
                            <h4>📱 Pro-Tip: Use Your Phone!</h4>
                            <p>It is <strong>highly recommended</strong> to open the buzzer link on your phone rather than a laptop.</p>
                        </div>
                    </div>
                    <div className={styles.buttonGroup}>
                        <button className={styles.backButton} onClick={() => setStep(4)}>Back</button>
                        <button className={styles.submitButton} onClick={() => setStep(6)}>LAUNCH GAME 🎉</button>
                    </div>
                </div>
            )}

            {/* STEP 6: JEOPARDY BOARD */}
            {step === 6 && (
                <GameBoard 
                    roomCode={roomCode} 
                    handleResetGame={handleResetGame} 
                    triggerFinishGame={() => {
                        setIsSidebarOpen(false);
                        setStep(7);
                    }}
                    styles={styles} 
                />
            )}

            {/* STEP 7: FINAL LEADERBOARD PAGE */}
            {step === 7 && (
                <div className={styles.leaderboardContainer}>
                    <div className={styles.leaderboardCard}>
                        <div className={styles.leaderboardHeader}>
                            <h1>🏆 Final Standings 🏆</h1>
                            <p>The culinary debate has settled. Here are your official scores:</p>
                        </div>
                        
                        <hr />

                        <div className={styles.leaderboardList}>
                            {[...players]
                                .sort((a, b) => b.score - a.score)
                                .map((player, index) => {
                                    const rankPosition = index + 1;
                                    let rankClass = styles.normalRank;
                                    
                                    // Give custom shine styles to top 3
                                    if (rankPosition === 1) rankClass = styles.firstPlace;
                                    if (rankPosition === 2) rankClass = styles.secondPlace;
                                    if (rankPosition === 3) rankClass = styles.thirdPlace;

                                    return (
                                        <div key={player.id} className={`${styles.leaderboardRow} ${rankClass}`}>
                                            <div className={styles.leaderboardPosition}>
                                                {getOrdinalSuffix(rankPosition)}
                                            </div>
                                            <div className={styles.leaderboardName}>
                                                {player.name}
                                            </div>
                                            <div className={styles.leaderboardPoints}>
                                                {player.score} points
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>

                        <hr />

                        <div className={styles.leaderboardFooter}>
                            <button className={styles.restartGameButton} onClick={handleResetGame}>
                                Play Again 🔄
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

/* JEOPARDY BOARD GRID ENGINE */
const GameBoard = ({ roomCode, handleResetGame, triggerFinishGame, styles }) => {
    const initialBoard = [
        {
            category: "Breakfast Chaos",
            questions: [
                { id: "bc-200", value: 200, item: "Beans on Toast", imgUrl: beansontoast, completed: false },
                { id: "bc-400", value: 400, item: "Omelette", imgUrl: omelette, completed: false },
                { id: "bc-600", value: 600, item: "Chicken and Waffles", imgUrl: chickenandwaffles, completed: false },
                { id: "bc-800", value: 800, item: "Biscuits and Gravy", imgUrl: biscuitsandgravy, completed: false },
                { id: "bc-1000", value: 1000, item: "Cereal with Milk", imgUrl: cerealwithmilk, completed: false },
            ]
        },
        {
            category: "Carb Crisis",
            questions: [
                { id: "cc-200", value: 200, item: "Slice of Pizza", imgUrl: sliceofpizza, completed: false },
                { id: "cc-400", value: 400, item: "Jelly Donut", imgUrl: jellydoughnut, completed: false },
                { id: "cc-600", value: 600, item: "Bread Bowl", imgUrl: breadbowl, completed: false },
                { id: "cc-800", value: 800, item: "Lasagna", imgUrl: lasagna, completed: false },
                { id: "cc-1000", value: 1000, item: "Cheesecake", imgUrl: cheesecake, completed: false },
            ]
        },
        {
            category: "Global Debates",
            questions: [
                { id: "gd-200", value: 200, item: "Curry", imgUrl: curry, completed: false },
                { id: "gd-400", value: 400, item: "Pierogi / Dumplings", imgUrl: pierogidumpling, completed: false },
                { id: "gd-600", value: 600, item: "Sushi Roll", imgUrl: sushiroll, completed: false },
                { id: "gd-800", value: 800, item: "Chips and Salsa", imgUrl: chipsandsalsa, completed: false },
                { id: "gd-1000", value: 1000, item: "Poutine", imgUrl: poutine, completed: false },
            ]
        },
        {
            category: "Dessert Crucible",
            questions: [
                { id: "dc-200", value: 200, item: "Beef Wellington", imgUrl: beefwellington, completed: false },
                { id: "dc-400", value: 400, item: "Tiramisu", imgUrl: tiramisu, completed: false },
                { id: "dc-600", value: 600, item: "Parfait", imgUrl: parfait, completed: false },
                { id: "dc-800", value: 800, item: "Dairy Queen Blizzard", imgUrl: dairyqueenblizzard, completed: false },
                { id: "dc-1000", value: 1000, item: "Popsicle", imgUrl: popsicle, completed: false },
            ]
        }
    ];

    const [board, setBoard] = useState(initialBoard);
    const [activeQuestion, setActiveQuestion] = useState(null);

    const handleSquareClick = (catIndex, qIndex) => {
        const target = board[catIndex].questions[qIndex];
        if (target.completed) return;
        setActiveQuestion({ ...target, catIndex, qIndex });
    };

    const handleResetBoardOnly = () => {
        const confirmation = window.confirm("Are you sure you want to reset all squares on the board?");
        if (!confirmation) return;
        setBoard(board.map(cat => ({
            ...cat,
            questions: cat.questions.map(q => ({ ...q, completed: false }))
        })));
    };

    const handleCloseQuestion = (markAsCompleted = true) => {
        if (!activeQuestion) return;
        if (markAsCompleted) {
            const updatedBoard = [...board];
            updatedBoard[activeQuestion.catIndex].questions[activeQuestion.qIndex].completed = true;
            setBoard(updatedBoard);
        }
        setActiveQuestion(null);
    };

    return (
        <div className={styles.boardWrapper}>
            <div className={styles.gameHeaderRow}>
                <h1 className={styles.gameMainTitle}>Soup, Salad, or Sandwich?</h1>
            </div>

            <div className={styles.jeopardyGrid}>
                {board.map((cat, catIndex) => (
                    <div key={cat.category} className={styles.gridColumn}>
                        <div className={styles.categoryHeaderCard}>{cat.category}</div>
                        {cat.questions.map((q, qIndex) => (
                            <div 
                                key={q.id} 
                                className={`${styles.questionSquare} ${q.completed ? styles.squareCompleted : ''}`}
                                onClick={() => handleSquareClick(catIndex, qIndex)}
                            >
                                {!q.completed && `${q.value}`}
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {/* CONTROL PANEL UTILITIES POSITIONED UNDERNEATH THE BOARD */}
            <div className={styles.gameFooterRow}>
                <button className={styles.resetBoardOnlyButton} onClick={handleResetBoardOnly}>
                    Reset Board Squares 🔄
                </button>
                
                {/* NEW FINISH GAME ACTION LINK */}
                <button className={styles.finishGameButton} onClick={triggerFinishGame}>
                    Finish Game 🏆
                </button>

                <button className={styles.resetGameTinyButton} onClick={handleResetGame}>
                    Exit Game completely 🚪
                </button>
            </div>

            {/* FULLSCREEN DISCUSSION MODAL */}
            {activeQuestion && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalCard}>
                        <div className={styles.modalScrollContainer}>
                            <h3>For {activeQuestion.value} Points...</h3>
                            <hr />
                            <h1 className={styles.modalFoodItem}>{activeQuestion.item}</h1>
                            {activeQuestion.imgUrl && (
                                <div className={styles.modalImageContainer}>
                                    <img src={activeQuestion.imgUrl} alt={activeQuestion.item} className={styles.modalFoodImage} />
                                </div>
                            )}
                            <hr />
                            <div className={styles.modalControlActionRow}>
                                <button className={styles.submitButton} onClick={() => handleCloseQuestion(true)}>
                                    Award Points & Clear Card 👑
                                </button>
                                <button className={styles.dismissCardButton} onClick={() => handleCloseQuestion(false)}>
                                    Return to Board (Keep Square Active) ↩️
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JeopardyPage;