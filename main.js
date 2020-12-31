
let url = document.getElementById("youtubeURL"),
    getImage = document.getElementById("getimage"),
    dispImg = document.getElementById("images"),
    loadingIcon = document.getElementById("loadingGif"),
    firstIMG = document.getElementById("img1"),
    secondIMG = document.getElementById("img2"),
    thirdIMG = document.getElementById("img3"),
    forthIMG = document.getElementById("img4"),
    fifthIMG = document.getElementById("img5");


function renderImage(realID) {
    firstIMG.src = `https://img.youtube.com/vi/${realID}/maxresdefault.jpg`;
    secondIMG.src = `https://img.youtube.com/vi/${realID}/sddefault.jpg`;
    thirdIMG.src = `https://img.youtube.com/vi/${realID}/mqdefault.jpg`;
    forthIMG.src = `https://img.youtube.com/vi/${realID}/hqdefault.jpg`;
    fifthIMG.src = `https://img.youtube.com/vi/${realID}/default.jpg`;
}

getImage.addEventListener('click', () => {
    let validURL = /youtube.com\/watch\?v=/g;
    let validURL2 = /youtu.be\//g;
    let valid = validURL.test(url.value);
    let valid2 = validURL2.test(url.value);
    // alert(valid);
    if (valid || valid2) {
        if (valid) {
            let video_id = url.value.split('v=')[1];
            let remove_extra = video_id.indexOf("&");
            if (remove_extra != -1) {
                let real_id = video_id.substring(0, remove_extra);
                // alert(real_id);
                if (real_id.length == 11) {
                    dispImg.style.display = "block";
                    renderImage(real_id);
                } else if (real_id.length != 11) {
                    alert('Video ID Missing');
                }
                // clear input field
                url.value = "";
                loadingIcon.style.display = "inline";
            } else {
                let real_id = video_id;
                // alert(real_id);
                if (real_id.length == 11) {
                    dispImg.style.display = "block";
                    renderImage(real_id);
                } else if (real_id.length != 11) {
                    alert('Video ID Missing');
                }

                // clear input field
                url.value = "";
                loadingIcon.style.display = "inline";
            }
        }

        else if (valid2) {
            let video_id = url.value.split('be/')[1];
            let remove_extra = video_id.indexOf("&");
            if (remove_extra != -1) {
                let real_id = video_id.substring(0, remove_extra);
                // alert(real_id);
                if (real_id.length == 11) {
                    dispImg.style.display = "block";
                    renderImage(real_id);
                } else if (real_id.length != 11) {
                    alert('Video ID Missing');
                }

                // clear input field
                url.value = "";
                loadingIcon.style.display = "inline";
            } else {
                let real_id = video_id;
                // alert(real_id);
                if (real_id.length == 11) {
                    dispImg.style.display = "block";
                    renderImage(real_id);
                } else if (real_id.length != 11) {
                    alert('Video ID Missing');
                }

                // clear input field
                url.value = "";
                loadingIcon.style.display = "inline";
            }
        }

        // code for loading icon
        firstIMG.addEventListener("load", event => {
            var isLoaded = firstIMG.complete && firstIMG.naturalHeight !== 0;
            if (isLoaded) {
                loadingIcon.style.display = "none";
            }
        });
    } else if (!valid || !valid2) {
        // alert("Bad URL");
        url.value = "Bad URL";
        let number = 1;
        let vanis = setInterval(function () {
            number++;
            if (number == 3) {
                url.value = "";
                clearInterval(vanis);
            }
        }, 1000)
    }
})
