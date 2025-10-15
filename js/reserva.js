// Sistema de Reserva Multi-step com SweetAlert2
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reservaForm');
    const steps = document.querySelectorAll('.form-step');
    const progressSteps = document.querySelectorAll('.step');
    const nextButtons = document.querySelectorAll('.next-step');
    const prevButtons = document.querySelectorAll('.prev-step');
    let currentStep = 1;

    // Configurar data mínima (hoje)
    const today = new Date().toISOString().split('T')[0];
    const dataInput = document.getElementById('data');
    if (dataInput) {
        dataInput.min = today;
    }

    // Navegação entre steps
    function showStep(stepNumber) {
        steps.forEach(step => {
            step.classList.remove('active');
            if (parseInt(step.dataset.step) === stepNumber) {
                step.classList.add('active');
            }
        });

        // Atualizar progresso
        progressSteps.forEach(step => {
            step.classList.remove('active', 'completed');
            const stepNum = parseInt(step.dataset.step);
            if (stepNum === stepNumber) {
                step.classList.add('active');
            } else if (stepNum < stepNumber) {
                step.classList.add('completed');
            }
        });

        currentStep = stepNumber;
        if (stepNumber === 4) {
            updateResumo();
        }
    }

    // Botões Next
    nextButtons.forEach(button => {
        button.addEventListener('click', function() {
            const nextStep = parseInt(this.dataset.next);
            if (validateStep(currentStep)) {
                showStep(nextStep);
            }
        });
    });

    // Botões Previous
    prevButtons.forEach(button => {
        button.addEventListener('click', function() {
            const prevStep = parseInt(this.dataset.prev);
            showStep(prevStep);
        });
    });

    // Validação de steps com SweetAlert2
    function validateStep(step) {
        const currentStepElement = document.querySelector(`.form-step[data-step="${step}"]`);
        const inputs = currentStepElement.querySelectorAll('input[required], select[required]');
        
        let isValid = true;
        let emptyFields = [];

        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.classList.add('is-invalid');
                isValid = false;
                
                // Adicionar nome do campo para mensagem
                const fieldName = input.previousElementSibling ? input.previousElementSibling.textContent.replace('*', '').trim() : 'Campo';
                emptyFields.push(fieldName);
            } else {
                input.classList.remove('is-invalid');
            }
        });

        if (!isValid) {
            Swal.fire({
                icon: 'warning',
                title: 'Campos Obrigatórios',
                html: `
                    <div class="text-start">
                        <p class="mb-3">Por favor, preencha os seguintes campos:</p>
                        <ul class="list-unstyled">
                            ${emptyFields.map(field => `<li>• ${field}</li>`).join('')}
                        </ul>
                    </div>
                `,
                confirmButtonText: 'Entendido',
                confirmButtonColor: '#ff4757',
                background: '#fff',
                customClass: {
                    popup: 'sweetalert-custom'
                }
            });
        }

        return isValid;
    }

    // Atualizar resumo
    function updateResumo() {
        // Nome
        const nomeInput = document.getElementById('nome');
        if (nomeInput) {
            document.getElementById('resumoNome').textContent = nomeInput.value || '-';
        }

        // Contato
        const emailInput = document.getElementById('email');
        const telefoneInput = document.getElementById('telefone');
        if (emailInput && telefoneInput) {
            document.getElementById('resumoContato').textContent = 
                `${emailInput.value || ''} ${emailInput.value && telefoneInput.value ? '|' : ''} ${telefoneInput.value || ''}`.trim() || '-';
        }

        // Data
        const dataInput = document.getElementById('data');
        if (dataInput && dataInput.value) {
            const data = new Date(dataInput.value);
            document.getElementById('resumoData').textContent = 
                data.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        } else {
            document.getElementById('resumoData').textContent = '-';
        }

        // Horário
        const horarioInput = document.getElementById('horario');
        if (horarioInput) {
            document.getElementById('resumoHorario').textContent = horarioInput.value || '-';
        }

        // Pessoas
        const pessoasInput = document.getElementById('pessoas');
        const criancasInput = document.getElementById('criancas');
        if (pessoasInput) {
            const pessoas = pessoasInput.value;
            const criancas = criancasInput ? criancasInput.value : '0';
            document.getElementById('resumoPessoas').textContent = 
                `${pessoas || '0'} ${pessoas === '1' ? 'pessoa' : 'pessoas'}${criancas > 0 ? ` (${criancas} criança(s))` : ''}`;
        }

        // Ocasião
        const ocasiaoInput = document.getElementById('ocasiao');
        if (ocasiaoInput) {
            document.getElementById('resumoOcasiaoo').textContent = 
                ocasiaoInput.value ? ocasiaoInput.selectedOptions[0].text : 'Não especificada';
        }

        // Observações
        const observacoesInput = document.getElementById('observacoes');
        if (observacoesInput) {
            document.getElementById('resumoObservacoes').textContent = 
                observacoesInput.value || 'Nenhuma observação';
        }
    }

    // Envio do formulário com SweetAlert2
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const termosInput = document.getElementById('termos');
        if (!termosInput || !termosInput.checked) {
            Swal.fire({
                icon: 'warning',
                title: 'Termos e Condições',
                text: 'Por favor, aceite os termos e condições para continuar.',
                confirmButtonText: 'Entendido',
                confirmButtonColor: '#ff4757'
            });
            return;
        }

        // Mostrar confirmação antes de enviar
        Swal.fire({
            title: 'Confirmar Reserva?',
            html: `
                <div class="text-start">
                    <p class="mb-2">Deseja confirmar sua reserva no <strong>OISHI</strong>?</p>
                    <p class="text-muted small">Enviaremos uma confirmação para seu e-mail e WhatsApp.</p>
                </div>
            `,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sim, Confirmar!',
            cancelButtonText: 'Revisar Dados',
            confirmButtonColor: '#ff4757',
            cancelButtonColor: '#6c757d',
            reverseButtons: true,
            background: '#fff',
            customClass: {
                popup: 'sweetalert-custom'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                // Simular envio
                const submitBtn = document.getElementById('submitReserva');
                const originalText = submitBtn.innerHTML;
                
                submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Enviando...';
                submitBtn.disabled = true;

                // Simular processamento
                setTimeout(() => {
                    // Sucesso - Reserva confirmada
                    Swal.fire({
                        title: '🎉 Reserva Confirmada!',
                        html: `
                            <div class="text-center">
                                <div class="mb-4">
                                    <i class="fas fa-check-circle text-success" style="font-size: 4rem;"></i>
                                </div>
                                <h5 class="mb-3">Sua reserva foi realizada com sucesso!</h5>
                                <div class="reserva-detalhes text-start bg-light p-3 rounded mb-3">
                                    <p class="mb-1"><strong>Data:</strong> ${document.getElementById('resumoData').textContent}</p>
                                    <p class="mb-1"><strong>Horário:</strong> ${document.getElementById('resumoHorario').textContent}</p>
                                    <p class="mb-1"><strong>Pessoas:</strong> ${document.getElementById('resumoPessoas').textContent}</p>
                                    <p class="mb-0"><strong>Local:</strong> OISHI - Av. Paulista, 456</p>
                                </div>
                                <p class="text-muted small mb-0">
                                    Enviamos uma confirmação para seu e-mail e WhatsApp.
                                </p>
                            </div>
                        `,
                        icon: 'success',
                        confirmButtonText: 'Perfeito!',
                        confirmButtonColor: '#ff4757',
                        background: '#fff',
                        customClass: {
                            popup: 'sweetalert-success'
                        }
                    }).then(() => {
                        // Resetar formulário e voltar ao início
                        form.reset();
                        showStep(1);
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                    });
                }, 2000);
            }
        });
    });

    // Validação em tempo real para melhor UX
    const requiredInputs = form.querySelectorAll('input[required], select[required]');
    requiredInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (!this.value.trim()) {
                this.classList.add('is-invalid');
            } else {
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                
                // Remover classe valid após um tempo
                setTimeout(() => {
                    this.classList.remove('is-valid');
                }, 2000);
            }
        });
        
        // Validação em tempo real enquanto digita
        input.addEventListener('input', function() {
            if (this.value.trim()) {
                this.classList.remove('is-invalid');
            }
        });
    });

    // Validação específica para e-mail
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            const email = this.value.trim();
            if (email && !isValidEmail(email)) {
                this.classList.add('is-invalid');
                Swal.fire({
                    icon: 'warning',
                    title: 'E-mail Inválido',
                    text: 'Por favor, insira um endereço de e-mail válido.',
                    confirmButtonText: 'Corrigir',
                    confirmButtonColor: '#ff4757'
                });
            }
        });
    }

    // Validação específica para telefone
    const telefoneInput = document.getElementById('telefone');
    if (telefoneInput) {
        telefoneInput.addEventListener('input', function() {
            this.value = this.value.replace(/\D/g, '');
            if (this.value.length === 11) {
                this.value = this.value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
            }
        });
    }

    // Função auxiliar para validar e-mail
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Inicializar
    showStep(1);
});