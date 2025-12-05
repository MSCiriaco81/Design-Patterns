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
# logger = Logger.getInstance()
# logger.log("Mensagem de log")