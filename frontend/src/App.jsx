import { useState } from 'react';
import MoodForm from './components/MoodForm';
import MoodResult from './components/MoodResult';
import MoodHistory from './components/MoodHistory';

function App() {
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);

  const handleAnalyze = (text) => {
    // For now, fake mood detection
    const fakeMood = text.includes('happy') ? 'Happy 😊' : 'Neutral 😐';

    setResult(fakeMood);
    setHistory([...history, { text, result: fakeMood }]);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center text-indigo-700">Mood Analyzer</h1>
      <MoodForm onAnalyze={handleAnalyze} />
      <MoodResult result={result} />
      <MoodHistory history={history} />
    </div>
  );
}

export default App;
