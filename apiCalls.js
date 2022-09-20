// import CarouselItem from "./components/Carousel/CarouselItem";

// const APICalls = () => {
//     const [quote, setQuote] = useState('')  
    
//     const fetchApiCall = () => {
//         return fetch("http://localhost:3001/mantra")
//             .then(response => response.json())
//             .then(data => {
//                 setQuote(data)
//             console.log('data: ', data);
//             })
//             .catch(err => {
//             console.log(err);
//             });
//         }
    
//         useEffect(() => {
//             fetchApiCall();
//         }, [])
    
// //pass through quote={quote.mantra} fetch={fetchApiCall} title=''
// return (
//     <CarouselItem quote={quote.mantra} fetch={fetchApiCall} title=''/>
// )

// }

// export default APICalls

const APICalls = (props) => {
    const getUrl = useCallback(() => {
      return "http://localhost:3001/mantra";
    }, []); // <-- Note that we can't add id to the deps array in this case
 
    //do some other stuff here that might cause re-renders, like setting state
    return <DataFetcher getUrl={getUrl}>
 }

 export default APICalls