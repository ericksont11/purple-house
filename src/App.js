import EnemyContextProvider from './contexts/enemyContext';
import CharacterContextProvider from "./contexts/characterContext";
import LevelContextProvider from "./contexts/levelContext";
import Homepage from "./pages/homepage";


function App() {

  return (
    <LevelContextProvider>
    <CharacterContextProvider>
    <EnemyContextProvider>
      <Homepage/>
    </EnemyContextProvider>
    </CharacterContextProvider>
    </LevelContextProvider>
  );
}

export default App;
