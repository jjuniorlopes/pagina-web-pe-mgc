# Planejamento Estratégico de Referência - Consórcios Multifinalitários

Plataforma web interativa desenvolvida para apresentar o Planejamento Estratégico dos Consórcios Públicos do Estado da Bahia (Visão 2028-2031). O projeto foi construído com foco em **usabilidade, design moderno (Glassmorphism)** e **alta acessibilidade**, alinhando-se rigorosamente à identidade visual e aos padrões do Governo do Estado da Bahia.

🔗 **Acesso ao Projeto:** [https://jjuniorlopes.github.io/pagina-web-pe-mgc/]

---

## 🎯 Objetivo do Projeto
Atuar como uma bússola digital para reposicionar os consórcios em suas áreas de atuação, garantindo um desenvolvimento sólido e estruturante. A página consolida a Missão, Visão, Valores, Pilares Estratégicos, Cadeia de Valor e Indicadores do Modelo de Gestão de Consórcios (MGC).

---

## ✨ Principais Funcionalidades

* **Design Institucional:** Tipografia oficial (Montserrat), paleta de cores (Azul e Laranja) e padrões visuais alinhados ao portal `ba.gov.br`.
* **Navegação Dinâmica (Single Page):** Interface de página única com rolagem suave e modais (pop-ups) interativos que exibem detalhes dos indicadores, iniciativas e pilares sem recarregar a página.
* **Barra de Ferramentas e Busca:** Filtro em tempo real que oculta/exibe cards baseados no texto digitado pelo usuário.
* **Compartilhamento Rápido:** Integração direta para compartilhamento no WhatsApp, envio por E-mail, acesso ao Instagram Oficial, cópia de link e atalho para Impressão.
* **Responsividade Total:** Layout adaptável (Mobile-First) garantindo a mesma experiência em celulares, tablets e desktops utilizando CSS Grid e Flexbox.

---

## ♿ Acessibilidade (Padrão e-MAG e WCAG)

Este projeto foi desenvolvido com um forte compromisso com a inclusão digital, incorporando ferramentas avançadas de acessibilidade:

* **Integração VLibras:** Tradução automática de conteúdos para a Língua Brasileira de Sinais (Libras) através de um avatar 3D (Atalho: `Alt + 7`).
* **Modo de Alto Contraste:** Inversão total de cores da interface (Fundo preto, textos e bordas em amarelo/branco) para usuários com baixa visão, com salvamento de preferência no navegador (`localStorage`).
* **Redimensionamento de Fonte:** Controles na tela (`A+`, `A`, `A-`) que permitem aumentar o tamanho da fonte em até 150% sem quebrar o layout.
* **Navegação por Teclado (Tabulação):** Foco visual destacado (borda laranja) para navegação sem mouse.
* **Compatibilidade com Leitores de Tela:** Uso intensivo de atributos `aria-label`, `aria-hidden` e `role` para perfeita leitura por softwares como NVDA e ORCA.
* **Teclas de Atalho (Access Keys):**
  * `Alt + 1` - Ir para o Conteúdo Principal
  * `Alt + 2` - Ir para o Menu Principal
  * `Alt + 3` - Ir para a Caixa de Pesquisa
  * `Alt + 4` - Ir para o Rodapé
  * `Alt + 6` - Ativar/Desativar Alto Contraste
  * `Alt + 7` - Ativar VLibras

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias web nativas, garantindo leveza e alta performance sem a necessidade de frameworks pesados:

* **HTML5:** Semântica estrutural e marcações ARIA.
* **CSS3:** Variáveis CSS (Custom Properties), Flexbox, CSS Grid, Efeitos Glassmorphism e Media Queries para responsividade.
* **Vanilla JavaScript (ES6+):** Lógica de manipulação do DOM, paginação de tabelas, sistema de modais, barra de pesquisa e controles de acessibilidade.
* **Ícones SVG Nativos:** Ícones embutidos diretamente no código para renderização perfeita em qualquer resolução, sem dependência de bibliotecas externas.

---

## 📁 Estrutura de Arquivos

```text
/
├── index.html          # Estrutura principal da página
├── css/
│   └── styles.css      # Estilização completa, responsividade e acessibilidade
├── js/
│   └── script.js       # Base de dados em JSON, lógica de modais e interações
├── imagens/            # Logomarcas, banners e imagens de apoio
└── README.md           # Documentação do projeto
