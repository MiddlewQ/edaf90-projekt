export async function postsLoader() {
    // const posts = {};

    const data = await safeFetchJson("http://localhost:3000/posts");


    await new Promise(resolve => setTimeout(resolve, 500));
    console.log(data);
    return data;
}

function safeFetchJson(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`${url} returned status ${response.status}`);
            }
            return response.json();
        });
}

export default postsLoader;
