document.addEventListener("DOMContentLoaded", () => {
    let meme = document.getElementById("meme");
    let title = document.getElementById("title");
    let getmemeBtn = document.getElementById("get-meme-btn");
    let url = "https://meme-api.com/gimme/";

    let subreddits = ["catmemes", "wholesomemems", "dogmemes", "me_irl"];

    let getmeme = () => {
        let randomSubreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
        fetch(url + randomSubreddit)
            .then(resp => resp.json())
            .then(data => {
                console.log(data);

                let memeImg = new Image();
                memeImg.onload = () => {
                    meme.src = data.url;
                    title.innerHTML = `Subreddit: ${data.subreddit} <br> Title: ${data.title}`;
                };
                memeImg.src = data.url;
            })
            .catch(err => {
                console.error("Error fetching meme:", err);
                title.innerHTML = "Failed to load meme. Please try again.";
            });
    };

    getmemeBtn.addEventListener("click", getmeme);
    window.addEventListener("load", getmeme);
});
