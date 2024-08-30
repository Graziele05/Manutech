//direcionando componentes
document.getElementById('top').innerHTML = fetch('components/top.html').then(response => response.text());
document.getElementById('form').innerHTML = fetch('components/form.html').then(response => response.text());
document.getElementById('rodape').innerHTML = fetch('components/rodape.html').then(response => response.text());

document.addEventListener("DOMContentLoaded", function () {

    fetch('components/top.html')
        .then(response => {
            return response.text();
        })
        .then(data => {
            document.getElementById('top').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar topo.html:', error));

    
    fetch('components/form.html')
        .then(response => {
            return response.text(); 
        })
        .then(data => {
            document.getElementById('form').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar form.html:', error));

 
    fetch('components/rodape.html')
        .then(response => {
            return response.text(); 
        })
        .then(data => {
            document.getElementById('rodape').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar rodape.html:', error));
});
