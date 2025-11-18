// app.js (CÓDIGO COMPLETO)

// ----------------------------------------------------
// 1. DEFINIÇÃO DOS TEMPLATES (CONTEÚDO DAS PÁGINAS)
// ----------------------------------------------------

// 1.1 Template para a página INÍCIO (Mantido o código anterior)
const TemplateHome = `
    <section class="hero" aria-labelledby="hero-title">
        <h2 id="hero-title"> Sorrisos que transformam vidas </h2>
        <p id="frase">Fornecemos consultas, tratamentos de restauração, extração e acompanhamento para comunidades em situação de vulnerabilidade e extrema Pobreza.</p>
        
        <figure>
            <img id="img" src="images/atendimento-odontologico.png" alt="Atendimento odontológico em ação">
        </figure> 
    </section>

    <section class="about card" aria-labelledby="sobre">
        <h3 id="sobre">Sobre a ONG</h3>
        <p>Nossa missão é garantir acesso a tratamentos odontológicos básicos e especializados para pessoas que não têm condições financeiras.
            Com o apoio de profissionais voluntários, parceiros e comunidades locais, oferecemos tratamentos odontológicos gratuitos, além de ações de prevenção, orientação e conscientização sobre a importância da higiene bucal.
            Nosso trabalho vai além do consultório: queremos construir sorrisos verdadeiros, cheios de confiança e esperança. Cada atendimento representa um passo rumo a um futuro mais justo, saudável e humano.
        </p>
        <address>
            <strong>Contato:</strong><br>
            Rua das Flores, 123 — Centro, São Paulo — SP<br>
            Telefone: <a href="tel:+5511999999999">(11) 99999-9999</a><br>
            E-mail: <a href="mailto:contato@sorrisogratuito.org">contato@sorrisogratuito.org</a>
        </address>
    </section>

    <section class="highlights grid" aria-labelledby="servicos">
        <h3 id="servicos">Nossas Ações:</h3>
        <article class="card">
            <h4>Atendimento Básico</h4>
            <p>Limpeza, restaurações e extrações com acompanhamento.</p>
        </article>
        <article class="card">
            <h4>Campanhas de Saúde</h4>
            <p>Mutirões em escolas e comunidades.</p>
        </article>
        <article class="card">
            <h4>Voluntariado</h4>
            <p>Profissionais e estudantes são bem-vindos — saiba como participar em <a href="/cadastro" data-route="/cadastro">Cadastro</a>.</p>
        </article>
    </section>
`;

// 1.2 Template para a página PROJETOS (Mantido o código anterior)
const TemplateProjetos = `
    <header>
      <h3>Projetos Sociais:</h3><br>
      <p class="muted"> <b>Boca Saudável na Gestação e Primeira Infância:</b><br></p>
      <p> Público: Gestantes, lactantes e pais/responsáveis de bebês e crianças pequenas.</p> 
      <p>Ações: Palestras sobre a importância da saúde bucal materna (riscos de infecções),cuidados com a boca do bebê antes e depois do nascimento dos dentes e orientação sobre aleitamento materno e alimentação complementar.</p>
      <p>Diferencial: Parceria com Unidades Básicas de Saúde (UBS) ou grupos de apoio à gestante.</p>

      <p class="muted"><b>Caravana do Sorriso:</b></p>
      <p>Público: Comunidades rurais, ribeirinhas, indígenas ou bairros de alta vulnerabilidade social.</p>
      <p>Ações: Montar uma estrutura de atendimento odontológico móvel ou temporária (em escolas, igrejas ou associações de bairro) para realizar triagens, restaurações simples, extrações e profilaxias.</p>
      <p>Diferencial: Envolver profissionais de diferentes áreas da saúde (médicos, enfermeiros) para um atendimento integral.</p>
    </header>

    <section aria-labelledby="mutirao">
      <h2 id="mutirao">Mutirão Odontológico</h2>
      <p>Realizamos mutirões com triagem, atendimentos e encaminhamentos para tratamentos mais complexos em nossas unidades Fixas e Moveis.</p>
      <figure>
        <img src="images/multirao.png" alt="Imagem de Mutirão Odontológico">
      </figure>
    </section>

    <section aria-labelledby="voluntariado">
      <h3 id="voluntariado">Voluntarios</h3>
      <p>Profissionais da odontologia e estudantes podem se inscrever para atuar nas campanhas. Oferecemos certificados de participação.</p>
      <img src="images/voluntarios.png" alt="Imagem de Voluntários">
      <p><a href="/cadastro" data-route="/cadastro">Cadastre-se aqui</a> para receber informações sobre próximas ações.</p>
    </section>

    <section aria-labelledby="doar">
      <h3 id="doar">Como doar</h3>
      <p>As doações são essenciais para compra de materiais, instrumentais e transporte. Aceitamos doações financeiras e de materiais.</p>
      <ul>
        <li>Doação financeira: transferência via PIX (chave: pix@projetosorrirbem.org)</li>
        <li>Doação de materiais: entre em contato pelo telefone para agendar coleta</li>
        <li>Toda Nossa prestação de contas Feitas semanalmente via Lives nas Redes Sociais: @Projetosorrirbem</li>
      </ul>
    </section>
`;

// 1.3 Template para a página CADASTRO (CÓDIGO ENVIADO E AJUSTADO PARA INJEÇÃO DE ERROS)
const TemplateCadastro = `
    <h2>Formulário de Cadastro</h2>
    <p class="muted">Preencha seus dados. Campos com * são obrigatórios.</p>

    <form id="cadastroForm" novalidate>
        <fieldset>
            <legend>Dados Pessoais</legend>

            <label for="nome">Nome completo *</label>
            <input id="nome" name="nome" type="text" required minlength="3" aria-required="true">
            <div id="erro-nome" class="erro-mensagem"></div>

            <label for="email">E-mail *</label>
            <input id="email" name="email" type="email" required aria-required="true">
            <div id="erro-email" class="erro-mensagem"></div>

            <label for="cpf">CPF *</label>
            <input id="cpf" name="cpf" type="text" inputmode="numeric" required aria-required="true" maxlength="14" placeholder="000.000.000-00" pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}">
            <div id="erro-cpf" class="erro-mensagem"></div>

            <label for="telefone">Telefone</label>
            <input id="telefone" name="telefone" type="tel" inputmode="tel" maxlength="15" placeholder="(00) 00000-0000">

            <label for="data-nasc">Data de nascimento</label>
            <input id="data-nasc" name="data-nasc" type="date" max="2025-12-31">

        </fieldset>

        <fieldset>
            <legend>Endereço</legend>
            <label for="endereco">Endereço</label>
            <input id="endereco" name="endereco" type="text">

            <label for="cep">CEP *</label>
            <input id="cep" name="cep" type="text" inputmode="numeric" required maxlength="9" placeholder="00000-000" pattern="\\d{5}-\\d{3}">
            <div id="erro-cep" class="erro-mensagem"></div>

            <label for="cidade">Cidade</label>
            <input id="cidade" name="cidade" type="text">

            <label for="estado">Estado</label>
            <select id="estado" name="estado">
                <option value="">Selecione</option>
                <option value="SP">SP</option>
                <option value="RJ">RJ</option>
                <option value="MG">MG</option>
            </select>
        </fieldset>

        <fieldset>
            <legend>Preferências</legend>
            <label for="tipo">Você é:</label>
            <select id="tipo" name="tipo">
                <option value="paciente">Paciente que precisa de atendimento</option>
                <option value="voluntario">Profissional/estudante voluntário</option>
            </select>
            <div id="erro-tipo" class="erro-mensagem"></div>

            <label for="mensagem">Observações</label>
            <textarea id="mensagem" name="mensagem" rows="4" placeholder="Conte-nos algo que ajude no seu atendimento ou disponibilidade"></textarea>
        </fieldset>
        
        <div class="form-actions">
            <button type="submit" class="btn btn-primary">Enviar cadastro</button>
            <button type="reset" class="btn btn-ghost">Limpar</button>
        </div>

    </form>
`;

// Mapeamento de rotas
const Templates = {
    '/': TemplateHome,
    '/projetos': TemplateProjetos,
    '/cadastro': TemplateCadastro,
    '404': `<section class="page-content"><h2>404</h2><p>Página não encontrada! Use a navegação acima.</p></section>`
};

// ----------------------------------------------------
// 2. LÓGICA DO SPA (ROTEADOR) E MANIPULAÇÃO DO DOM
// ----------------------------------------------------

const contentContainer = document.getElementById('app-content');
const appNav = document.querySelector('nav');

/**
 * Função utilitária para exibir a mensagem de erro no DOM
 */
function exibirErro(idElemento, mensagem) {
    const elementoErro = document.getElementById(idElemento);
    if (elementoErro) {
        elementoErro.textContent = mensagem;
        if (mensagem) {
             // Exemplo de DOM Manipulation: mostra o erro
             elementoErro.style.color = 'red'; 
             elementoErro.style.fontSize = '0.9em';
             elementoErro.style.marginTop = '5px';
        } else {
             // Limpa o texto
             elementoErro.textContent = ''; 
             elementoErro.style.color = 'transparent'; 
        }
    }
}

/**
 * Lógica de Validação de Formulário de Cadastro (Consistência de Dados)
 */
function setupFormValidation() {
    const form = document.getElementById('cadastroForm');
    
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault(); 

        // 1. Seleção dos campos
        const nomeInput = document.getElementById('nome');
        const emailInput = document.getElementById('email');
        const cpfInput = document.getElementById('cpf');
        const cepInput = document.getElementById('cep');
        const tipoSelect = document.getElementById('tipo');
        let isValid = true;
        
        // Função utilitária para limpar a formatação (somente para validação)
        const cleanString = (str) => str.replace(/[^0-9a-zA-Z@.]/g, ''); 
        
        // 2. VALIDAÇÃO: Nome (Mínimo 3 caracteres, baseado no seu HTML)
        if (nomeInput.value.trim().length < 3) {
            exibirErro('erro-nome', 'O nome deve ter pelo menos 3 caracteres.');
            isValid = false;
        } else {
            exibirErro('erro-nome', '');
        }
        
        // 3. VALIDAÇÃO: Email (Formato válido)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        if (!emailRegex.test(emailInput.value.trim())) {
            exibirErro('erro-email', 'Por favor, insira um formato de e-mail válido.');
            isValid = false;
        } else {
            exibirErro('erro-email', '');
        }

        // 4. VALIDAÇÃO: CPF (Obrigatório, 11 dígitos numéricos limpos)
        const cleanCpf = cpfInput.value.replace(/\D/g, '');
        if (cleanCpf.length !== 11) {
            exibirErro('erro-cpf', 'O CPF deve ter 11 dígitos (apenas números).');
            isValid = false;
        } else {
            exibirErro('erro-cpf', '');
        }
        
        // 5. VALIDAÇÃO: CEP (Obrigatório, 8 dígitos numéricos limpos)
        const cleanCep = cepInput.value.replace(/\D/g, '');
        if (cleanCep.length !== 8) {
            exibirErro('erro-cep', 'O CEP deve ter 8 dígitos (apenas números).');
            isValid = false;
        } else {
            exibirErro('erro-cep', '');
        }

        // 6. VALIDAÇÃO: Tipo (Se for "voluntário", deve ter campos adicionais validados)
        // O campo 'tipo' tem valores default, então a validação principal é garantida pelo HTML
        if (tipoSelect.value === '') {
             exibirErro('erro-tipo', 'Obrigatório selecionar uma opção.');
             isValid = false;
        } else {
             exibirErro('erro-tipo', '');
        }


        // 7. AÇÃO FINAL
        if (isValid) {
            alert('Cadastro enviado com sucesso! A equipe entrará em contato.');
            form.reset(); 
            // Limpa as mensagens de erro
            exibirErro('erro-nome', '');
            exibirErro('erro-email', '');
            exibirErro('erro-cpf', '');
            exibirErro('erro-cep', '');
            exibirErro('erro-tipo', '');
        }
    });
}

/**
 * Função principal para injetar o conteúdo da página no DOM.
 */
function renderContent(pathname) {
    // Trata o caso de index.html/projetos.html/cadastro.html no navegador para a rota raiz do SPA
    if (pathname.endsWith('.html')) {
        pathname = '/' + pathname.substring(0, pathname.indexOf('.html'));
        if (pathname === '/index') pathname = '/';
    }
    
    // 1. Pega o template
    const templateContent = Templates[pathname] || Templates['404'];
    
    // 2. Injeta o HTML (Manipulação do DOM)
    contentContainer.innerHTML = templateContent;
    
    // 3. Executa a lógica de validação APENAS se estiver na rota de cadastro
    if (pathname === '/cadastro') {
        setupFormValidation(); 
    }
}

// Manipulador de cliques nos links de navegação (SPA)
appNav.addEventListener('click', (e) => {
    const link = e.target.closest('a'); 
    
    // Usa o link href como rota, o que simplifica a navegação
    if (link) {
        e.preventDefault(); 
        let newPath = link.getAttribute('href');
        
        // Converte o href padrão (ex: index.html) para a rota SPA (ex: /)
        if (newPath.endsWith('.html')) {
            newPath = '/' + newPath.substring(0, newPath.indexOf('.html'));
            if (newPath === '/index') newPath = '/';
        }
        
        // Adiciona a nova URL ao histórico (History API)
        window.history.pushState({}, '', newPath); 
        
        // Renderiza o novo conteúdo
        renderContent(newPath);
    }
});

// Manipulador para o botão Voltar/Avançar do navegador (SPA)
window.addEventListener('popstate', () => {
    renderContent(window.location.pathname);
});

// Renderiza a página correta ao carregar o script pela primeira vez
renderContent(window.location.pathname);