function MoodResult({ result }) {
  if (!result) return null;

  return (
    <div className="mt-6 text-center">
      <h2 className="text-xl font-semibold">Mood Detected:</h2>
      <p className="text-2xl text-green-600 mt-2">{result}</p>
    </div>
  );
}

export default MoodResult;
