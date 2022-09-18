// import GoodVibeModal from "../components/Navigation/GoodVibeModal";
// import { useState, useEffect } from 'react';

// const [compliments, setCompliments] = useState([]);
//     const [error, setError] = useState('');
//     // let [fontsLoaded] = useFonts({
//     //     IndieFlower_400Regular,
//     //   });
//     const getCompliments = async () => {
//         const url = "https://complimentr.com/api" 
//         setError('')
//         try {
//           const response = await fetch(url)
//           const compliments = await response.json()
//           setCompliments(compliments)
//         } catch(error) {
//           setError(error.message)
//         }
//       }

const data = 
  [
    {
        id: 1,
        title: "Tell Me Something Good",
        // description: "Lotus flower icon",
        image: require("../assets/active-lotus-icon-8.png"),
        motto: "Press Here for Your Dose of Good Vibes",
        // modal: <GoodVibeModal />,
      },
     {
        id: 2,
        title: "Checklist",
        // description: "Daily Routine Checklist",
        image: require("../assets/checkList.png"),
        motto: "Press Here to See Your Daily Routines Checklist"  
      },
    
      {
        id: 3,
        title: "Calendar",
        // description: "User Calendar",
        image: require("../assets/calendar.png"),
        motto: "Press Here to See Your Calendar"
      },
      {
        id: 4,
        title: "Favorites",
        // description: "List of favorite compliments",
        image: require("../assets/favorite.png"),
        motto: "Press Here to See Your Favorites"
      },
    ];

  export default data;