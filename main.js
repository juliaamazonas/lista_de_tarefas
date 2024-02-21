$(document).ready(function(){
    
    $('form').on('submit', function(e) {
        e.preventDefault();
        const NovaTarefa = $('#nova-tarefa').val();
        const novoItem = $('<li></li>').text(NovaTarefa);
        $(`${NovaTarefa}`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#nova-tarefa').val('');

        $(novoItem).click(function() {
            $(novoItem).addClass('tarefa-feita');
        })
    })
    
    
})