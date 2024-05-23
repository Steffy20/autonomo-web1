document.getElementById('projectForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const projectTitle = document.getElementById('projectTitle').value;
    const description = document.getElementById('description').value;
    const leadResearcher = document.getElementById('leadResearcher').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const budget = document.getElementById('budget').value;

    let errorMessage = '';

    if (!projectTitle) {
        errorMessage = 'El título del proyecto es obligatorio.';
    } else if (!description) {
        errorMessage = 'La descripción es obligatoria.';
    } else if (!leadResearcher) {
        errorMessage = 'El investigador principal es obligatorio.';
    } else if (!startDate) {
        errorMessage = 'La fecha de inicio es obligatoria.';
    } else if (!endDate) {
        errorMessage = 'La fecha de finalización es obligatoria.';
    } else if (!budget || budget <= 0) {
        errorMessage = 'El presupuesto debe ser un número positivo.';
    }

    if (errorMessage) {
        document.getElementById('form-error-message').textContent = errorMessage;
    } else {
        alert('Proyecto registrado exitosamente');
        window.location.href = '../panel/index.html';
    }
});
