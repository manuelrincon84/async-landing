const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCBVjMGOIkavEAhyqpxJ73Dw&part=snippet%2Cid&order=date&maxResults=9'

const content = null || document.getElementById('content')

const options = {
	method: 'GET',
	headers: {
        'X-RapidAPI-Key': '388e21648cmshede542c25ce7f54p1dbc5ajsn19d8e5a0d0d6',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

/*fetch('', options)git
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));*/

async function fetchdata(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const videos = await fetchdata(API);
        let view = `
        ${videos.items.map(video => `
        <div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
          </div>
            <div class="mt-4 flex justify-between">
             <h3 class="text-sm text-gray-800">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
             </h3>
          </div>
        </div>
        `).slice(0,4).join('')}
          
        `;
        content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
}) ();