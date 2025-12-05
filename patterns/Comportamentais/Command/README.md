# Command
📝 Resumo rápido

Padrão que encapsula uma solicitação como um objeto, permitindo parametrizar clientes com operações, enfileirar ou registrar operações.

🎯 Intenção

Encapsular uma requisição como um objeto, separando o emissor do executor e permitindo operações como desfazer/redo, enfileiramento e logging.

🧩 Estrutura UML

UML será adicionada posteriormente.

📚 Explicação detalhada

Command transforma operações em objetos que implementam uma interface comum (execute). Isso permite armazenar, enfileirar e compor comandos, além de suportar undo/redo quando implementado com estado adicional.

🗂 Arquivos incluídos

Java: será adicionado posteriormente

JavaScript: será adicionado posteriormente

Python: será adicionado posteriormente

UML: será adicionado posteriormente

🧪 Exemplos de código
Java
```java
Conteúdo será adicionado posteriormente.
```

JavaScript
```javascript
Conteúdo será adicionado posteriormente.
```

Python
```python
Conteúdo será adicionado posteriormente.
```

🔍 Explicação do código

Explicação será adicionada posteriormente.

🔄 Fluxo interno do pattern

Conteúdo será adicionado posteriormente.

✔ Quando usar

- Para encapsular ações como objetos e suportar enfileiramento, undo/redo e logging.

✖ Quando NÃO usar

- Quando a operação é simples e não precisa ser tratada como objeto.

👍 Vantagens

- Flexibilidade para manipular operações como dados.

👎 Desvantagens

- Aumenta o número de classes/objetos.

🔗 Navegação

Voltar para categoria: `../README.md`
