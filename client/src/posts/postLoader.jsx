export async function postsLoader() {
    const posts = {};

    let data = await safeFetchJson("http://localhost:3000/posts");
    console.log(data);


    await new Promise(resolve => setTimeout(resolve, 500));
    return posts;
}

// async function addIngredient(ingredient, inventory) {
//     const ingredients = await safeFetchJson(`http://localhost:8080/${ingredient}`);
//     await Promise.all(ingredients.map(async name => {
//         inventory[name] = await safeFetchJson(`http://localhost:8080/${ingredient}/${name}`)
//     }));
//     return;
// }


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
