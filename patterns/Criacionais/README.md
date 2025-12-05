# Padrões Criacionais

Padrões criacionais tratam da forma como objetos são criados. Segundo o "Gang of Four" (GoF), essa categoria abstrai o processo de instanciação, permitindo maior flexibilidade na criação de objetos e reduzindo acoplamento entre código cliente e classes concretas. Os padrões criacionais ajudam a encapsular decisões sobre qual classe concreta instanciar, se as instâncias devem ser únicas (Singleton), como construir objetos complexos passo a passo (Builder), ou como criar famílias de objetos relacionados (Abstract Factory).

## 📦 Patterns desta categoria
- [AbstractFactory](AbstractFactory)
- [Builder](Builder)
- [Factory Method](FactoryMethod)
- [Prototype](Prototype)
- [Singleton](Singleton)

## 🧭 Objetivo da categoria
Fornecer mecanismos para criar objetos de forma flexível, encapsulando o processo de instanciação para permitir que o sistema seja independente de como seus objetos são criados, compostos e representados. Isso facilita extensão, teste e manutenção, especialmente quando surgem variações nas formas de construir instâncias.

## 🔎 Breve descrição dos patterns
- **Singleton**: Garante que uma classe tenha apenas uma instância e fornece um ponto global de acesso.
- **Factory Method**: Define uma interface para criar um objeto, deixando subclasses decidirem qual classe instanciar.
- **Abstract Factory**: Fornece uma interface para criar famílias de objetos relacionados sem depender de classes concretas.
- **Builder**: Separa a construção de um objeto complexo da sua representação, permitindo diferentes representações.
- **Prototype**: Especifica os tipos de objetos a serem criados usando uma instância prototípica e cria novos objetos copiando esse protótipo.

## 🧭 Como navegar
- Clique no nome do pattern para abrir a pasta do pattern e o `README.md` específico.
- Dentro da pasta do pattern há exemplos em Java/JS/Python, e quando disponível um arquivo SVG com o diagrama UML.
