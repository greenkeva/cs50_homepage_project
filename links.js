function change_background_and_text(){
    document.addEventListener("mouseover", function (){
        let change = document.querySelector("#quote");
        change.style.backgroundColor = "blue";
        document.querySelector("#quote").innerHTML = ' If you are determined to learn, no one can stop you" -Zig Ziglar';

    })

}