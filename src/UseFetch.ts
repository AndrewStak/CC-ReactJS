import { useEffect, useState } from "react";
import { PostItem } from "./models";

export default function UseFetch<T>(url: string) {
    const [data, setData] = useState<T|null>(null);
    const [isPending, setisPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url).then(res => {
            if (!res.ok) throw Error('Could not fetch the data');
            return res.json();
        })
            .then(data => {
                setData(data);
                setisPending(false);
                setError(null);
                console.log(data);
            })
            .catch(err => {
                setisPending(false);
                setError(err.message);
            });

        return () => {

        };
    }, [url]);

    return { data, isPending, error };
}

