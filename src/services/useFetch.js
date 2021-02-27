import { useEffect, useState } from 'react'

export const useFetch = (url, body) => {
    const [state, setState] = useState({ data: null, loading: true });

    useEffect(() => {
        fetch(url, {
            body: JSON.stringify(body),
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(x => x.text())
            .then(res => { 
                console.log(res);
                setState({data: res, loading: false})
            })
    }, [url]);

    return state;
}