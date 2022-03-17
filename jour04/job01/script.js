document.addEventListener('DOMContentLoaded', (event) => {

    let btn = $("#button")
    let p = document.querySelector("p")

    btn.click(function(){
        Promise.all([
            fetch('expression.txt').then(x => x.text())
        ])
        .then(([sampleResp]) => {
            p.innerHTML = sampleResp
        });
    })
})