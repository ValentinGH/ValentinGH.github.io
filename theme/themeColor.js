
window.onload = () => {
    
    const themeBtnDark = document.getElementById('theme-action-dark');
    const themeBtnLight = document.getElementById('theme-action-light');
    themeBtnDark.onclick = () => {
        

        const defaults = document.getElementById('default');
        const basic = document.getElementById('basic');

        
        disableStylesheet(defaults);
        enableStylesheet(basic);
    }
    themeBtnLight.onclick = () => {
        
        const defaults = document.getElementById('default');
        const basic = document.getElementById('basic');
        disableStylesheet(basic);
        enableStylesheet(defaults);

    }


function enableStylesheet (node) {
    node.rel = 'stylesheet';
    }
    
function disableStylesheet (node) {
    node.rel = 'alternate stylesheet';
} 
 } // onclick