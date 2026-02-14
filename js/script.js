
document.addEventListener('DOMContentLoaded', function() {
    
    const btnActividades = document.getElementById('btn-actividades');
    const menuActividades = document.getElementById('menu-actividades');
    
    const btnP1 = document.getElementById('btn-p1');
    const menuP1 = document.getElementById('menu-p1');
    
    const btnP2 = document.getElementById('btn-p2');
    const menuP2 = document.getElementById('menu-p2');

    const btnP3 = document.getElementById('btn-p3');
    const menuP3 = document.getElementById('menu-p3');

    function cerrarSubmenus() {
        if(menuP1) menuP1.classList.remove('show');
        if(menuP2) menuP2.classList.remove('show');
        if(menuP3) menuP3.classList.remove('show');
    }
    if (btnActividades) {
        btnActividades.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            menuActividades.classList.toggle('show');
            if (!menuActividades.classList.contains('show')) {
                cerrarSubmenus();
            }
        });
    }
    function configurarSubmenu(boton, menu) {
        if (boton && menu) {
            boton.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const todosLosSubmenus = document.querySelectorAll('.submenu-content');
                todosLosSubmenus.forEach(sub => {
                    if (sub !== menu) sub.classList.remove('show');
                });
                menu.classList.toggle('show');
            });
        }
    }
    configurarSubmenu(btnP1, menuP1);
    configurarSubmenu(btnP2, menuP2);
    configurarSubmenu(btnP3, menuP3);

    window.addEventListener('click', function() {
        if(menuActividades) menuActividades.classList.remove('show');
        cerrarSubmenus();
    });
});
