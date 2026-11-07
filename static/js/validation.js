document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('appointment-form');
    const error = document.getElementById('form-error');
    if (!form) return;
    form.addEventListener('submit', function (event) {
        const fields = form.querySelectorAll('input');
        const hasEmptyField = Array.from(fields).some(function (field) { return !field.value.trim(); });
        if (hasEmptyField) {
            event.preventDefault();
            error.classList.remove('hidden');
        }
    });
});