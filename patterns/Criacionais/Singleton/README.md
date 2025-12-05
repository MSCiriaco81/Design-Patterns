# Singleton

📝 Resumo rápido

Padrão que garante apenas uma instância de uma classe e fornece um ponto global de acesso a ela (ex.: logger compartilhado).

🎯 Intenção

Garantir que uma classe possua apenas uma instância e prover um ponto global de acesso a essa instância.

🧩 Estrutura UML

![UML](./singleton.svg)

📚 Explicação detalhada

O Singleton controla a criação de uma única instância e expõe esse único objeto para o restante do sistema. É útil para recursos compartilhados (logging, caches simples, gerenciadores de configuração). Implementações variam: inicialização lazy (cria quando necessário), eager (instância criada na carga), e variantes thread-safe. Cada estratégia tem trade-offs entre simplicidade, custo inicial e segurança em ambientes concorrentes.

🗂 Arquivos incluídos

Java: `Logger.java`

JavaScript: `Singleton.js`

Python: `Singleton.py`

UML: `singleton.svg`

🧪 Exemplos de código

Java
```java
package patterns.Criacionais.Singleton;

public class Logger {

    // ÚNICA instância do Logger (privada para impedir acesso externo)
    private static Logger instance;

    // Construtor privado impede new Logger()
    private Logger() {}

    // Método global de acesso à instância
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    // Método público de log
    public void log(String message) {
        System.out.println("[LOG] " + message);
    }
}

// Uso:
// Logger logger = Logger.getInstance();
// logger.log("Mensagem de log");
```

JavaScript
```javascript
class Logger {
  
  // Guarda a instância única
  static instance = null;

  // Construtor privado "simulado": JS não tem private real aqui, mas dá pra evitar new direto
  constructor() {
    if (Logger.instance) {
      return Logger.instance;
    }
    Logger.instance = this;
  }

  // Método de log
  log(message) {
    console.log(`[LOG] ${message}`);
  }

  // Método estático que retorna a instância única
  static getInstance() {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }
}

// Uso:
const logger = Logger.getInstance();
logger.log("Servidor iniciado");
```

Python
```python
class Logger:
    _instance = None

    def __new__(cls):
        # Garante instância única
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

    def log(self, message):
        print(f"[LOG] {message}")
# Uso:
# logger = Logger()
# logger.log("Mensagem de log")
```

🔍 Explicação do código

Explicação será adicionada posteriormente.

🔄 Fluxo interno do pattern

Conteúdo será adicionado posteriormente.

✔ Quando usar

- Quando é necessário garantir um único recurso compartilhado (ex.: logger, gerenciador de configuração).
- Quando um ponto global de acesso simplifica a arquitetura.

✖ Quando NÃO usar

- Quando múltiplas instâncias são necessárias para paralelismo ou isolamento.
- Quando o uso de estado global prejudica testabilidade ou escala.

👍 Vantagens

- Controle central da instância.
- Implementação simples para recursos globais.

👎 Desvantagens

- Estado global pode dificultar testes e aumentar acoplamento.
- Implementações não thread-safe exigem cuidado em ambientes concorrentes.

🔗 Navegação

Voltar para categoria: `../README.md`

