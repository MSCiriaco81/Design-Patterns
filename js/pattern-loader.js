// pattern-loader.js (ES module)
export let patternAtual = null;

(async function() {
  function showError(message) {
    const container = document.querySelector('main .container');
    if (container) {
      container.innerHTML = '<div class="error"><h2>Pattern não encontrado</h2><p>' +
        (message || 'Erro desconhecido') + '</p></div>';
    } else {
      alert(message || 'Pattern não encontrado');
    }
    document.title = 'Pattern — Design Patterns';
  }

  function getPatternNameFromHash() {
    const raw = (location.hash || '').replace(/^#/, '');
    return decodeURIComponent(raw || '');
  }

  const patternName = getPatternNameFromHash();
  if (!patternName) {
    showError('Nenhum pattern especificado na URL. Use o fragmento da URL (ex: #Singleton).');
    return;
  }

  try {
    const res = await fetch('./patterns.json', { cache: 'no-store' });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    const pattern = data[patternName];
    if (!pattern) {
      showError('O pattern "' + patternName + '" está em desenvolvimento...');
      return;
    }

    // Title
    const titleEl = document.getElementById('pattern-title');
    if (titleEl) titleEl.textContent = patternName;
    document.title = patternName + ' — Design Patterns';

    // Github button - update href using pattern.github
    try {
      const githubBtn = document.getElementById('github-button');
      if (githubBtn) {
        // Configure your GitHub user and repo here
        const GITHUB_USER = 'MSCiriaco81';
        const GITHUB_REPO = 'Design-Patterns';
        if (pattern.github) {
          githubBtn.href = `https://github.com/${GITHUB_USER}/${GITHUB_REPO}/tree/main/${pattern.github}`;
          githubBtn.style.display = 'inline-block';
        } else {
          githubBtn.removeAttribute('href');
          githubBtn.style.display = 'none';
        }
      }
    } catch (e) { console.warn(e); }

    // Simple text fields
    const setText = (selector, value) => {
      const el = document.querySelector(selector);
      if (!el) return;
      if (el.tagName === 'IMG') {
        el.src = value || '';
        el.alt = patternName + ' UML';
      } else {
        el.textContent = value || '';
      }
    };

    setText('[data-field="descricao-simples"]', pattern.descricaoSimples);
    setText('[data-field="descricao-detalhada"]', pattern.descricaoDetalhada);
    setText('[data-field="quando-usar"]', pattern.quandoUsar);
    setText('[data-field="quando-nao-usar"]', pattern.quandoNaoUsar);
    setText('img[data-field="uml"]', pattern.uml);

    // UML image + explanation fields
    try {
      const umlImg = document.getElementById('uml-image');
      if (umlImg) {
        // match the same relative path behavior as the existing image element
        umlImg.src = pattern.uml || '';
        umlImg.alt = patternName + ' UML';
      }

      const safeSet = (selector, value) => {
        const el = document.querySelector(selector);
        if (el) el.textContent = value || '';
      };

      // Escape HTML if ever needed
      const escapeHtml = (str) => {
        if (!str) return '';
        return String(str).replace(/[&<>"']/g, function (s) {
          return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[s];
        });
      };

      // Render a multiline string as a safe <ul><li>...</li></ul> inside the target element.
      const renderMultilineAsList = (selector, text) => {
        const el = document.querySelector(selector);
        if (!el) return;
        // Clear existing content
        el.innerHTML = '';
        const items = (text || '').split(/\r?\n/).map(s => s.trim()).filter(Boolean);
        if (items.length) {
          const ul = document.createElement('ul');
          items.forEach(it => {
            const li = document.createElement('li');
            // use textContent to avoid HTML injection
            li.textContent = it;
            ul.appendChild(li);
          });
          el.appendChild(ul);
        } else {
          el.textContent = '—';
        }
      };

      safeSet('[data-field="uml-intro"]', pattern.umlIntro);
      safeSet('[data-field="uml-nome-classe"]', pattern.umlNomeClasse);
      // Render attributes and methods as lists for readability
      renderMultilineAsList('[data-field="uml-atributos"]', pattern.umlAtributos);
      renderMultilineAsList('[data-field="uml-metodos"]', pattern.umlMetodos);
      safeSet('[data-field="uml-extra"]', pattern.umlExtra);
    } catch (e) { console.warn('UML fields populate error', e); }

    // listas
    const fillList = (selector, arr) => {
      const ul = document.querySelector(selector);
      if (!ul) return;
      ul.innerHTML = '';
      if (Array.isArray(arr) && arr.length) {
        arr.forEach(item => {
          const li = document.createElement('li');
          li.textContent = item;
          ul.appendChild(li);
        });
      } else {
        const li = document.createElement('li');
        li.textContent = '—';
        ul.appendChild(li);
      }
    };

    fillList('[data-field="vantagens"]', pattern.vantagens);
    fillList('[data-field="desvantagens"]', pattern.desvantagens);

    // Código: preencher o único bloco de código `#code-block` e a explicação inicial
    try {
      const codeBlock = document.getElementById('code-block');
      if (codeBlock) {
        // o JSON usa chaves: 'java', 'js', 'python'
        codeBlock.className = 'language-java';
        codeBlock.textContent = (pattern.codigo && pattern.codigo.java) || '';
      }

      const explEl = document.getElementById('code-explanation');
      if (explEl) {
        explEl.textContent = (pattern.explicacaoCodigo && pattern.explicacaoCodigo.java) || '';
      }

      // disponibiliza o pattern para outros módulos (live export)
      patternAtual = pattern;

      // Run syntax highlighting (Prism) after inserting code
      try {
        if (window.Prism && typeof window.Prism.highlightElement === 'function') {
          // highlight the single block
          const cb = document.getElementById('code-block');
          if (cb) window.Prism.highlightElement(cb);
        } else if (window.Prism && typeof window.Prism.highlightAll === 'function') {
          window.Prism.highlightAll();
        }
      } catch (e) { console.warn('Prism highlight failed', e); }
    } catch (e) { console.warn('Erro ao preencher blocos de código/expl: ', e); }

  } catch (err) {
    console.error(err);
    showError('Erro ao carregar os dados do pattern. ' + (err.message || ''));
  }

  // Re-load when hash changes
  window.addEventListener('hashchange', function() { location.reload(); });

})();
