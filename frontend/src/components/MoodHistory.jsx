function MoodHistory({ history }) {
  if (!history.length) return null;

  return (
    <div className="mt-10 max-w-md mx-auto">
      <h3 className="text-lg font-medium mb-2">Mood History</h3>
      <ul className="list-disc list-inside bg-gray-100 p-4 rounded">
        {history.map((item, idx) => (
          <li key={idx}>
            <span className="font-semibold">{item.text}:</span> {item.result}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoodHistory;
