import { useEffect, useReducer, useRef} from "react";

function useFetch(url, options) {
    const cache = useRef({});

    const cancelRequest = useRef(false);

    const initialState = {
        error: undefined,
        data: undefined,
        loading: false,
    };

    const fetchReducer = (state, action) => {
        switch (action.type) {
            case 'loading': 
            return {...initialState, loading: true};
            case 'fetched': 
            return {...initialState, data: action.payload, loading: false};
            case 'error':
                return {...initialState, error: action.payload, loading: false};
                default:
                    return state;
        }
    };

    const [state, dispatch] = useReducer
    (fetchReducer, initialState);

    useEffect (() =>{
        if(!url) return;

        cancelRequest.current = false;
        
        const fetchData = async () => {
            dispatch({type: 'loading',})
            
           if (cache.current[url]) {
            dispatch({type: 'fetched', payload: cache.current[url]});
            return;
           }
        

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(response.statusText);
            }

            const data = await response.json();
            cache.current[url] = data;
            if(cancelRequest.current) return;

            dispatch ({type: 'fetched', payload: data});
        } catch (error) {
            if(cancelRequest.current) return;

            dispatch({type:'error', payload: error});
        }

    };

    fetchData();

    return () => {
        cancelRequest.current = true;
    };


    }, [url]);

    return state;
}

export default useFetch;


// export default function useFetch() {
//     const [user, setUser] = React.useState({});

//   useEffect(() => {
//     async function fetchUser() {
//         const res = await fetch ('https://randomuser.me/api/')
//         const data = await res.json();
//         setUser[data];
//     }

//     fetchUser();
//   }, []);
// }

// fetch("https://randomuser.me/api/")
// .then ((response) => response.json())
// .then ((response) => {
//     this.setState({
//         items:response.results,
//         loading:true
//     })
// })

// }

