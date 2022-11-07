import { useState, useEffect } from 'react';
const useFetch = (url) => {
    const [ data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState (null);

    useEffect(() => {
        const abortFetch = new AbortController ();


        setTimeout(() => {
            fetch(url, {signal: abortFetch.signal})
                .then(res => {
                    if (!res.ok) {
                        throw Error ('Could not reach the server')
                    }
                    return res.json();
                })
                .then (data => {
                    setData(data);
                    setIsPending(false);
                    setError(null)
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log ('fetch aborted');
                    } else {
                        setIsPending(false);
                        setError(err.message);
                    }
                  
                })
        
        }, 1000);

        return () => abortFetch.abort();
    },[]);

    return { data, isPending, error }
}

export default useFetch;