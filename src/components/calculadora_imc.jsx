import { useState } from 'react'
function calculadora() {
    let [peso, setPeso] = useState(0);
    let [altura, setAltura] = useState(0);
    let [idoso, setIdoso] = useState(false);
    let imc = '-';

    const mudaPeso = (evento) => {
        setPeso(parseFloat(evento.target.value));
    }

    const mudaAltura = (evento) => {
        setAltura(parseFloat(evento.target.value));
    }

    const mudaClassificacao = (evento) => {
        setIdoso(evento.target.checked);
    }

    const renderIMC = () => {
        if ((peso > 0 && altura > 0)) {
            imc = (peso / (altura ** 2)).toFixed(2)
        }
        return (
            <div className='m-3 fs-5 d-flex justify-content-center'>
                <span className='me-2'>IMC:</span>
                <span>{imc}</span>
            </div>
        )
    }

    const renderClassificacao = () => {
        let classificacao;
        if (!idoso) {
            if (imc < 18.5) {
                classificacao = 'Baixo peso'
            } else if (imc >= 18.5 && imc < 25) {
                classificacao = 'Peso normal';
            } else if (imc >= 25 && imc < 30) {
                classificacao = 'Excesso de peso';
            } else if (imc >= 30 && imc < 35) {
                classificacao = 'Obesidade Classe 1';
            } else if(imc >= 35 && imc < 40) {
                classificacao = 'Obesidade Classe 2';
            } else if (imc > 40) {
                classificacao = 'Obesidade Classe 3';
            }
        } else {
            if (imc <= 22) {
                classificacao = 'Baixo peso';
            } else if (imc > 22 && imc < 27) {
                classificacao = 'Adequado';
            } else if (imc >= 27) {
                classificacao = 'Sobrepeso';
            }
        }
        return classificacao ? <p className='text-center'>{classificacao}</p> : null
    }

    return (
        <div className="container" style={{ maxWidth: '200px' }}>
            <form className='border border-3 border-black rounded mx-auto'>
                <div className='m-3 d-flex justify-content-between'>
                    <label htmlFor="peso" className="form-label fs-5 d-flex my-auto">Peso</label>
                    <input type="number" placeholder='kg' className="text-end form-control p-1" id='peso' step={'0.1'} style={{ maxWidth: '75px' }} onChange={mudaPeso} />
                </div>
                <div className='m-3 d-flex justify-content-between'>
                    <label htmlFor="altura" className="form-label fs-5 d-flex my-auto">Altura</label>
                    <input type="number" placeholder='m' className="text-end form-control p-1" id="altura" step={'0.01'} style={{ maxWidth: '75px' }} onChange={mudaAltura} />
                </div>
                <div className="form-check ms-3">
                    <label className='form-check-label' htmlFor="idoso">idoso</label>
                    <input type="checkbox" className='form-check-input' id='idoso' onChange={mudaClassificacao}/>
                </div>
                {renderIMC()}
                {renderClassificacao()}
            </form>
        </div>
    )
}

export default calculadora