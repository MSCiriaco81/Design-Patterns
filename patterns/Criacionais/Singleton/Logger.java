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

