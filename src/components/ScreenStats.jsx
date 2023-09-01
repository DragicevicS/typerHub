/* eslint-disable react/prop-types */
const ScreenStats = ({ accuracyCounter, text, speed }) => {
  return (
    <div className="flex flex-col h-full justify-center items-center gap-2">
      <p>
        Accuracy: {Math.round((accuracyCounter * 100) / text.length)}% (
        {accuracyCounter}/{text.length} letters)
      </p>
      <p>Speed: {speed} WPM</p>
      <button
        onClick={() => location.reload()}
        className="p-2 rounded-xl bg-slate-600 hover:bg-slate-50 hover:text-black cursor-pointer"
      >
        Next
      </button>
    </div>
  );
};

export default ScreenStats;
