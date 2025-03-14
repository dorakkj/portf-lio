function mostrarMateria(materia) {
    // Esconde todas as seções
    const materias = document.querySelectorAll('.materia');
    materias.forEach(materia => {
        materia.style.display = 'none';
    });

    // Exibe a seção clicada
    const materiaSelecionada = document.getElementById(materia);
    if (materiaSelecionada) {
        materiaSelecionada.style.display = 'block';
    }
}
