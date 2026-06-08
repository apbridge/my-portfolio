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
    };

    return (
        <div className={styles.container}>
            {/* STEP 0: PASSWORD WELCOME SCREEN */}
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
                        <button type="submit" className={styles.submitButton}>
                            Unlock Game
                        </button>
                    </form>
                </div>
            )}

            {/* STEP 1: HEADPHONE USER WARNING */}
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
                    <button className={styles.submitButton} onClick={() => setStep(2)}>
                        I'm Ready!
                    </button>
                </div>
            )}

            {/* STEP 2: FAKE LIABILITY WAIVER (WIDE LAYOUT) */}
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

            {/* STEP 3: HOW TO PLAY */}
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
                            <img 
                                src={tacoImage} 
                                alt="Delicious Case Study Taco" 
                                className={styles.exampleImage} 
                            />
                        </div>
                        <div className={styles.argumentBox}>
                            <h4>Example: The Taco</h4>
                            <p>How could you possibly classify this? Let's break down the arguments:</p>
                            <ul>
                                <li><strong>🥪 Sandwich:</strong> You can pick up a sandwich like you can pick up a taco. It also has layers.</li>
                                <li><strong>🥗 Salad:</strong> Shaved lettuce, diced tomatoes, cheese, and meat tossed together could be more like the consistency of a salad. Any sauce could be considered dressing. You can also pretty easily pull this apart.</li>
                                <li><strong>🥣 Soup:</strong> I guess if you put enough sauce on it... If you pick this one you would definitely not win here... an example argument for soup in a different case could be that you can't pull it apart easily or it's more liquid than solid.</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.buttonGroup}>
                        <button className={styles.backButton} onClick={() => setStep(2)}>Back</button>
                        <button className={styles.submitButton} onClick={() => setStep(4)}>Read the Rules →</button>
                    </div>
                </div>
            )}

            {/* STEP 4: THE RULES */}
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
                        <li>⏱️ <strong>Buzzer Priority:</strong> The first person to buzz in with a correct, logical argument receives the points by default—<em>unless</em> it is overwhelmingly clear that a later speaker brought a vastly superior or legendary argument to the floor.</li>
                        <li>🛠️ <strong>The Executive Clause:</strong> Belle reserves the right to retroactively modify points, invent new constraints, or alter the fabric of the game entirely at any given moment.</li>
                        <li>🤡 <strong>The Jester Bonus:</strong> The most ridiculous, unhinged, or hilariously creative argument will get <strong>500 points</strong> added to their score (if there is a clear winner). You do not have to be structurally correct to win this!</li>
                        <li>🃏 <strong>The Gambit Clause:</strong> If you win a round, you can choose to claim the points for yourself, **reward your points** to someone else, or **deduct that point value** from a rival of your choice.</li>
                        <li>🤝 <strong>Ties are Allowed:</strong> If two arguments are equally flawless, points may be split.</li>
                    </ol>

                    <div className={styles.buttonGroup}>
                        <button className={styles.backButton} onClick={() => setStep(3)}>Back</button>
                        <button className={styles.submitButton} onClick={() => setStep(5)}>Connect Buzzers →</button>
                    </div>
                </div>
            )}

            {/* STEP 5: BUZZER SETUP SCREEN */}
            {step === 5 && (
                <div className={styles.infoCard}>
                    <div className={styles.headerContent}>
                        <h1>🚨 Sync Your Buzzers</h1>
                        <h3>Get Ready to Click Fast</h3>
                    </div>
                    <hr />
                    
                    {/* Room Code Display Banner */}
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
                            
                            <img 
                                src={buzzerQR} 
                                alt="Scan to join Buzzin.live" 
                                className={styles.qrImage}
                            />
                            <a href="https://buzzin.live/" target="_blank" rel="noopener noreferrer" className={styles.buzzerLink}>
                                buzzin.live
                            </a>
                        </div>
                        
                        <div className={styles.argumentBox}>
                            <h4>📱 Pro-Tip: Use Your Phone!</h4>
                            <p>
                                It is <strong>highly recommended</strong> to open the buzzer link on your phone rather than a laptop. 
                                Tapping a mobile touchscreen is physically faster than aiming a mouse!
                            </p>
                            
                            <h4 style={{marginTop: '24px'}}>⚡ How it Works:</h4>
                            <ol className={styles.buzzerExplanation}>
                                <li>Once an item appears on screen, the floor is open.</li>
                                <li>Smash your big red buzzer button to lock in your chance to talk.</li>
                                <li>If you are first, the game will halt and highlight your name. You have a limited time to state your case!</li>
                            </ol>
                        </div>
                    </div>

                    <div className={styles.buttonGroup}>
                        <button className={styles.backButton} onClick={() => setStep(4)}>Back</button>
                        <button className={styles.submitButton} onClick={() => setStep(6)}>LAUNCH GAME 🎉</button>
                    </div>
                </div>
            )}

            {/* STEP 6: ACTUAL JEOPARDY GAME */}
            {step === 6 && (
                <GameBoard 
                    roomCode={roomCode} 
                    handleResetGame={handleResetGame} 
                    styles={styles} 
                />
            )}
        </div>
    );
};

/* JEOPARDY BOARD GRID ENGINE AND MODAL DISCUSSION COMPONENT */
const GameBoard = ({ roomCode, handleResetGame, styles }) => {
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
        const confirmation = window.confirm("Are you sure you want to reset all squares on the board? (This keeps your room code active)");
        if (!confirmation) return;
        
        const wipedBoard = board.map(cat => ({
            ...cat,
            questions: cat.questions.map(q => ({ ...q, completed: false }))
        }));
        setBoard(wipedBoard);
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

            {/* VIEWPORT CONTRASTED GRID ENGINE */}
            <div className={styles.jeopardyGrid}>
                {board.map((cat, catIndex) => (
                    <div key={cat.category} className={styles.gridColumn}>
                        <div className={styles.categoryHeaderCard}>
                            {cat.category}
                        </div>
                        {cat.questions.map((q, qIndex) => (
                            <div 
                                key={q.id} 
                                className={`${styles.questionSquare} ${q.completed ? styles.squareCompleted : ''}`}
                                onClick={() => handleSquareClick(catIndex, qIndex)}
                            >
                                {/* Display raw point metrics instead of currency signs */}
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