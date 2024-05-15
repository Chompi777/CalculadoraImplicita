document.addEventListener('DOMContentLoaded', function() {
    // Calculadora de Probabilidades
    const probTeamAInput = document.getElementById('probTeamA');
    const probTieInput = document.getElementById('probTie');
    const probTeamBInput = document.getElementById('probTeamB');
    const calculateBtn = document.getElementById('calculateBtn');
    const probResultDisplay = document.getElementById('probResultDisplay');

    calculateBtn.addEventListener('click', function() {
        const probTeamA = parseFloat(probTeamAInput.value);
        const probTie = parseFloat(probTieInput.value);
        const probTeamB = parseFloat(probTeamBInput.value);

        if (!isNaN(probTeamA) && !isNaN(probTie) && !isNaN(probTeamB)) {
            if (probTeamA >= 0 && probTie >= 0 && probTeamB >= 0 ) {
                const probTeamA_decimal =  1/probTeamA;
                const probTie_decimal = 1/probTie;
                const probTeamB_decimal = 1/probTeamB;

                const probA = probTeamA_decimal * 100;
                const probT = probTie_decimal * 100;
                const probB = probTeamB_decimal * 100;

                probResultDisplay.innerHTML = `
                    <p>Probabilidad Equipo A: ${probA.toFixed(2)}%</p>
                    <p>Probabilidad de Empate: ${probT.toFixed(2)}%</p>
                    <p>Probabilidad Equipo B: ${probB.toFixed(2)}%</p>
                `;
            } else {
                probResultDisplay.textContent = 'Las probabilidades deben ser positivas.';
            }
        } else {
            probResultDisplay.textContent = 'Por favor, ingrese probabilidades válidas.';
        }
    });

    // Calculadora Implícita
    const inputField = document.getElementById('inputField');
    const resetBtn = document.getElementById('resetBtn');
    const calculateBtnImplicit = document.getElementById('calculateBtnImplicit');
    const resultDisplay = document.getElementById('resultDisplay');
    const formulaDisplay = document.getElementById('formulaDisplay');

    resetBtn.addEventListener('click', function() {
        inputField.value = '';
        resultDisplay.textContent = '';
        formulaDisplay.textContent = '';
    });

    calculateBtnImplicit.addEventListener('click', function() {
        const inputValue = parseFloat(inputField.value);
        if (!isNaN(inputValue)) {
            let result;
            let formula;
            if (inputValue >= 0) {
                result = (100 / (inputValue + 100)) * 100;
                formula = 'Resultado = (100 / (x + 100)) * 100';
            } else {
                result = (Math.abs(inputValue) / (Math.abs(inputValue) + 100)) * 100;
                formula = 'Resultado = ((|x| / (|x| + 100)) * 100';
            }
            formulaDisplay.textContent = 'Fórmula: ' + formula.replace(/x/g, inputValue);
            resultDisplay.textContent = 'El resultado es: ' + result.toFixed(2) + '%';
        } else {
            alert('Por favor, ingresa un número válido.');
        }
    });
});
