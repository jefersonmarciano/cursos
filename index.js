document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleSidebar');
    const sidebar = document.querySelector('.sidebar');
    const container = document.querySelector('.container');
    
    // Abrir/fechar menu com o botão
    toggleButton.addEventListener('click', function(e) {
        e.stopPropagation(); // Previne que o click se propague para o document
        sidebar.classList.toggle('active');
        container.classList.toggle('sidebar-active');
    });
    
    // Fechar menu quando clicar fora
    document.addEventListener('click', function(e) {
        // Verifica se o clique foi fora do sidebar e se o sidebar está aberto
        if (!sidebar.contains(e.target) && 
            !toggleButton.contains(e.target) && 
            sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
            container.classList.remove('sidebar-active');
        }
    });
    
    // Previne que cliques dentro do sidebar fechem ele
    sidebar.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});