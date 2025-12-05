import { patternAtual } from "./pattern-loader.js";

document.addEventListener('DOMContentLoaded', function() {
  const tabBtns = Array.from(document.querySelectorAll('.tab-btn'));
  if (!tabBtns || tabBtns.length === 0) return;

  const codeBlock = document.getElementById('code-block');

  const prismLanguageFor = (ling) => {
    if (!ling) return ling;
    if (ling === 'js') return 'javascript';
    return ling; // 'java' or 'python'
  };

  function atualizarExplicacao(linguagemKey, pattern) {
    if (!pattern) return;
    const explicacao = (pattern.explicacaoCodigo && pattern.explicacaoCodigo[linguagemKey]) || '';
    const el = document.getElementById('code-explanation');
    if (el) el.textContent = explicacao;
  }

  function atualizarCodigo(linguagemKey, pattern) {
    if (!codeBlock || !pattern) return;
    const prismLang = prismLanguageFor(linguagemKey);
    codeBlock.className = `language-${prismLang}`;
    codeBlock.textContent = (pattern.codigo && pattern.codigo[linguagemKey]) || '';
    try {
      if (window.Prism && typeof window.Prism.highlightElement === 'function') {
        window.Prism.highlightElement(codeBlock);
      }
    } catch (e) { console.warn('Prism highlight failed', e); }
  }

  tabBtns.forEach(function(btn){
    btn.addEventListener('click', function(){
      // desativa todos
      tabBtns.forEach(function(b){ b.classList.remove('active'); });

      // ativa o atual
      btn.classList.add('active');

      const linguagemKey = btn.dataset.lang; // 'java' | 'js' | 'python'

      // Atualiza código e explicação
      atualizarCodigo(linguagemKey, patternAtual || window.patternAtual);
      atualizarExplicacao(linguagemKey, patternAtual || window.patternAtual);
    });
  });
});
