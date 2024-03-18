import React, { useState, useEffect } from "react";

type IPFetcherProps = {
    ip: string;
}

type IPFetcherResult = {
    ip: string;
    city: string;
    region: string;
    country: string;
    loc: string;
    org: string;
    postal: string;
    timezone: string;
    readme: string;
}
// AJAX - Asynchronous JavaScript and XML
// XHR request to fetch the IP details (XML Http Request)
// axios
// fetch

// Promise - then (100,200,300), catch (400,500)

export const IPFetcher: React.FC<IPFetcherProps> = ({ ip }) => {
    const [result, setResult] = useState<IPFetcherResult | null>(null);
    const [error, setError] = useState<Error | null>(null);
    useEffect(() => {
        fetch(`https://ipinfo.io/${ip}/geo`, {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    })
    .then((response) => {console.log(response); return response.json()})
    .then((data) => {
        console.log(data);
        setResult(data);
    })
    .catch((error) => {
        console.error(error);
        setError(error);
    });
    }, [ip]);
return (
    <div>
        <pre>
            {JSON.stringify(result, null, 2)}
        </pre>
    </div>
);
};

export default IPFetcher;