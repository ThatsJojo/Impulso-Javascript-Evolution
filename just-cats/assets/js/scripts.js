const img = document.getElementById("cat");
const URL = "https://api.thecatapi.com/v1/images/search?format=json&limit=1"

const atualizarImagem = async() => {
    let data = await fetch(URL).then(res => res.json());
    img.src = data[0].url;
}
atualizarImagem();
document.getElementById('change-cat').onclick = atualizarImagem;