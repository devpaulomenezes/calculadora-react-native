# 📱 Calculadora React Native

Aplicativo de calculadora desenvolvido em **React Native** com **Expo**, suportando operandos reais e operações matemáticas básicas: soma, subtração, multiplicação, divisão e exponenciação.

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como atividade da disciplina de **Programação para Dispositivos Móveis** do Curso Superior de Tecnologia em **Análise e Desenvolvimento de Sistemas** — IFPB.

O objetivo é aplicar os conceitos de desenvolvimento mobile com React Native, incluindo:

- Criação de componentes reutilizáveis
- Gerenciamento de estado com `useState`
- Separação de responsabilidades (lógica vs interface)
- Estilização com `StyleSheet`
- Tratamento de erros (ex: divisão por zero)
- Boas práticas de organização de código

## ⚙️ Funcionalidades

- ✅ Soma (`+`)
- ✅ Subtração (`-`)
- ✅ Multiplicação (`×`)
- ✅ Divisão (`÷`) com tratamento de divisão por zero
- ✅ Exponenciação (`^`)
- ✅ Alternância de sinal (`±`)
- ✅ Porcentagem (`%`)
- ✅ Limpar tudo (`AC`)
- ✅ Suporte a números reais (decimais)

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Função |
|---|---|---|
| React Native | SDK 57 (Expo) | Framework de desenvolvimento mobile |
| Expo | Última LTS | Tooling e ambiente de desenvolvimento |
| TypeScript | ~5.x | Tipagem estática |
| @expo/vector-icons | Última | Ícones nativos |

## 📁 Estrutura do Projeto
```
calculadora-react-native/
├── App.tsx                    # Componente raiz — orquestra estado e UI
├── src/
│   ├── components/
│   │   ├── Display.tsx        # Visor da calculadora
│   │   └── Button.tsx         # Botão reutilizável e configurável
│   ├── utils/
│   │   └── calculator.ts      # Lógica matemática (independente da UI)
│   └── styles/
│       └── theme.ts           # Cores, tamanhos e espaçamentos centralizados
├── package.json
├── tsconfig.json
└── README.md
```

## 🚀 Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) versão **>= 20.19.4** (LTS recomendado)
- [Expo CLI](https://docs.expo.dev/) instalado globalmente ou via `npx`
- App **Expo Go** instalado no celular ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) / [iOS](https://apps.apple.com/app/expo-go/id982107779))

### Passo a passo
```bash
# 1. Clone o repositório
git clone https://github.com/SEU_USUARIO/calculadora-react-native.git

# 2. Entre na pasta do projeto
cd calculadora-react-native

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npx expo start

# 5. Escaneie o QR code com o app Expo Go
#    ou pressione 'a' para abrir no emulador Android
```

## 🎯 Decisões de Design

### Separação de responsabilidades
A lógica matemática (`calculator.ts`) é totalmente independente da interface. Isso permite:
- Testar as operações isoladamente
- Reutilizar a lógica em outras interfaces
- Manter o código limpo e sustentável

### Tema centralizado
Cores e tamanhos ficam em um único arquivo (`theme.ts`), facilitando manutenção e consistência visual.

### Segurança
Não utilizamos `eval()` para avaliar expressões. Cada operação é tratada explicitamente em um `switch`, evitando injeção de código.

## 📚 Referências

- [Documentação oficial do React Native](https://reactnative.dev/)
- [Documentação do Expo](https://docs.expo.dev/)
- PINHO, D. M.; ESCUDELARIO, B. *React Native: Desenvolvimento de aplicativos mobile com React*. Casa do Código, 2021.

## 📝 Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍🎓 Autor

**[SEU NOME COMPLETO]**
- GitHub: [@SEU_USUARIO](https://github.com/SEU_USUARIO)
- Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
- Disciplina: Programação para Dispositivos Móveis
- Período: [Xº]

---

*Projeto desenvolvido para fins acadêmicos.*