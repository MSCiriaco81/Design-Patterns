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
