import useLocalStorage from "../hooks/useLocalStorage";
import initialUserData from "../data/initialUserData";

const PersonalStats = () => {
  const [userData, setUserData] = useLocalStorage("userData", initialUserData);

  const handleReset = () => {
    const currentPreferences = userData.preferences;
    setUserData({
      ...initialUserData,
      preferences: currentPreferences,
    });
    location.reload();
  };
  return (
    <>
      <h2 className="font-cursive text-2xl">Personal Stats</h2>
      <h2>To be added...</h2>
      <button
        className="h-min px-3 py-1 font-cursive text-blue-100 bg-gray-600 hover:bg-blue-100 hover:text-gray-900 ease-in-out duration-500"
        onClick={handleReset}
      >
        Reset progress
      </button>
    </>
  );
};

export default PersonalStats;
