// ==========================================
// ÍCONES SVG MODERNOS E DINÂMICOS
// ==========================================
const svgIcons = {
    // Ícones Gerais Suporte/Interessados
    plan: `<svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 9h-2V7h-2v5H6v2h2v5h2v-5h2v-2z"/></svg>`,
    book: `<svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/></svg>`,
    money: `<svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/></svg>`,
    build: `<svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>`,
    people: `<svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`,
    shield: `<svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>`,
    chart: `<svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>`,
    computer: `<svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/></svg>`,
    
    // Ícones Específicos para as Atividades Primárias
    icon_road: `<svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M18.1 4.8C18 4.3 17.6 4 17.1 4H6.9C6.4 4 6 4.3 5.9 4.8L3 15v8c0 .5.5 1 1 1h1c.6 0 1-.5 1-1v-1h12v1c0 .5.5 1 1 1h1c.5 0 1-.5 1-1v-8l-2.9-10.2zM6.8 6h10.4l1.6 5.6H5.2L6.8 6zm-1.3 11c-.8 0-1.5-.7-1.5-1.5S4.7 14 5.5 14s1.5.7 1.5 1.5S6.3 17 5.5 17zm13 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"/></svg>`,
    icon_maintenance: `<svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>`,
    icon_rural: `<svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M20 18c1.1 0 2-.9 2-2v-4h-2v-2l-3-4H8v2H5v4c-1.1 0-2 .9-2 2v4h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4c0 1.66 1.34 3 3 3s3-1.34 3-3h2zm-12 1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm10 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-6-3V8h5.33l1.5 2H12z"/></svg>`,
    icon_water: `<svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zM7.83 14c.37 0 .67.26.74.62 1.41 1.5 3.45 1.5 3.45 1.5.38 0 .68.31.68.69s-.3.69-.68.69c0 0-2.45 0-4.4-2.06-.2-.2-.26-.49-.13-.73.12-.22.35-.37.6-.37h-.26z"/></svg>`,
    icon_animal_veg: `<svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>`,
    icon_land: `<svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/></svg>`,
    icon_environment: `<svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/></svg>`,
    icon_infra: `<svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z"/></svg>`,
    icon_social: `<svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/></svg>`,
    icon_cog: `<svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.06-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.73,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.06,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.43-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.49-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/></svg>`,
    icon_housing: `<svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>`,
    icon_trash: `<svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>`,
    icon_plan: `<svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>`,

    // Pilares
    alicerce: `<svg width="32" height="32" fill="none" stroke="#1b62b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px;"><rect x="3" y="14" width="6" height="6" rx="1"></rect><rect x="15" y="14" width="6" height="6" rx="1"></rect><path d="M6 14v-2a2 2 0 012-2h8a2 2 0 012 2v2"></path><circle cx="12" cy="6" r="3"></circle><path d="M12 2v1M12 9v1M16 6h1M7 6H6M14.83 3.17l.71-.71M8.46 8.12l.71-.71M14.83 8.83l.71.71M8.46 3.88l.71.71"></path></svg>`,
    engrenagem: `<svg width="32" height="32" fill="none" stroke="#28a745" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px;"><circle cx="12" cy="12" r="4"></circle><path d="M12 8V4M12 20v-4M8 12H4M20 12h-4M9.17 9.17l-2.83-2.83M17.66 17.66l-2.83-2.83M9.17 14.83l-2.83 2.83M17.66 6.34l-2.83 2.83"></path><circle cx="12" cy="2" r="2"></circle><circle cx="12" cy="22" r="2"></circle><circle cx="2" cy="12" r="2"></circle><circle cx="22" cy="12" r="2"></circle></svg>`,
    resultados: `<svg width="32" height="32" fill="none" stroke="#dc3545" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px;"><polyline points="18 20 18 10 12 20 12 4 6 20 6 14"></polyline><polyline points="2 20 22 20"></polyline><polyline points="14 4 22 4 22 12"></polyline><line x1="22" y1="4" x2="12" y2="14"></line></svg>`
};

// ==========================================
// DADOS: Missão, Visão e Valores
// ==========================================
const mvvData = {
    missao: {
        title: "Missão",
        content: `<p style="color: #333; font-size: 1.15rem; text-align: left; line-height: 1.6;">Contribuir para o desenvolvimento territorial sustentável e a melhoria da qualidade de vida nos municípios consorciados, através da execução de políticas públicas com excelência.</p>`
    },
    visao: {
        title: "Visão",
        content: `<p style="color: #333; font-size: 1.15rem; text-align: left; line-height: 1.6;">Tornar-se referência na execução de políticas públicas através da prestação de serviços que elevem a qualidade de vida nos municípios consorciados de forma sustentável.</p>`
    },
    valores: {
        title: "Valores",
        content: `<p style="color: #333; font-size: 1.15rem; text-align: left; line-height: 1.8;">
            Alcançaremos nossa visão partilhando <strong style="color: #e83e8c;">CONHECIMENTO</strong> 
            para gerar <strong style="color: #dc3545;">INOVAÇÃO</strong> em nossos processos, cultivando a 
            <strong style="color: #17a2b8;">COOPERAÇÃO</strong> e a <strong style="color: #1b62b8;">PROATIVIDADE</strong> 
            nas equipes, para gerarmos resultados de <strong style="color: #000000;">EXCELÊNCIA</strong> 
            com <strong style="color: #28a745;">SUSTENTABILIDADE</strong>.
        </p>`
    }
};

// ==========================================
// DADOS: Pilares (Objetivos detalhados)
// ==========================================
const objetivosData = {
    estrutura: { title: "Adequar a estrutura organizacional às demandas estratégicas", description: "Desenvolver uma estrutura organizacional que atenda às necessidades estratégicas dos consórcios, incluindo definição de cargos, responsabilidades e hierarquias." },
    processos: { title: "Uniformizar e informatizar os processos de suporte e finalísticos", description: "Padronizar e digitalizar todos os processos organizacionais, desde os processos de suporte administrativo até os processos finalísticos." },
    pessoas: { title: "Aperfeiçoar os processos de gestão de pessoas", description: "Implementar práticas modernas de gestão de recursos humanos, incluindo recrutamento, seleção, capacitação, avaliação e desenvolvimento." },
    receitas: { title: "Otimizar a relação entre receitas e despesas correntes", description: "Maximizar a eficiência na utilização dos recursos financeiros, buscando sempre a melhor relação custo-benefício." },
    portfolio: { title: "Alinhar o portifólio de serviços às demandas dos consorciados", description: "Desenvolver e ofertar serviços que atendam efetivamente às necessidades e prioridades dos municípios consorciados." },
    qualidade: { title: "Elevar a qualidade dos serviços realizados", description: "Implementar padrões de excelência na prestação de todos os serviços, estabelecendo métricas de qualidade." },
    produtividade: { title: "Aumentar a produtividade e eficiência dos processos", description: "Otimizar os processos organizacionais para aumentar a produtividade das equipes e a eficiência na entrega de resultados." },
    captacao: { title: "Sistematizar a captação de recursos nacionais e internacionais", description: "Desenvolver uma estratégia estruturada para identificação, elaboração e submissão de projetos para captação de recursos." },
    equilibrio: { title: "Alcançar o equilíbrio econômico-financeiro", description: "Estabelecer uma gestão financeira sustentável que garanta o equilíbrio entre receitas e despesas." },
    necessidades: { title: "Atender às necessidades e expectativas dos consorciados", description: "Garantir que todos os serviços e ações realizadas estejam alinhados com as necessidades reais dos consorciados." }
};

// ==========================================
// ESTRUTURA HTML DA TELA PRINCIPAL DOS PILARES
// ==========================================
const pilaresMainContent = `
    <div class="container-margin" style="margin-bottom: 25px;">
        <p class="text-base" style="text-align: center; font-size: 1.1rem; color: #555;">Para explorar os detalhes dos três pilares e seus processos, clique nas caixas abaixo.</p>
    </div>
    
    <div class="pilares-grid">
        <div class="pilar alicerce glass-card">
            <h3 style="display: flex; align-items: center; justify-content: center; color: var(--primary-color); font-size: 1.5rem; margin-bottom: 10px;">
                ${svgIcons.alicerce} ALICERCE
            </h3>
            <p style="text-align: center; font-size: 0.9rem; color: #555; margin-bottom: 20px;">Adequação da estrutura organizacional</p>
            <div class="objetivos-list">
                <button class="objetivo-btn btn-azul" data-objetivo="estrutura">Adequar a estrutura organizacional às demandas estratégicas</button>
                <button class="objetivo-btn btn-azul" data-objetivo="processos">Uniformizar e informatizar os processos de suporte e finalísticos</button>
                <button class="objetivo-btn btn-azul" data-objetivo="pessoas">Aperfeiçoar os processos de gestão de pessoas</button>
            </div>
        </div>
        
        <div class="pilar engrenagem glass-card">
            <h3 style="display: flex; align-items: center; justify-content: center; color: #28a745; font-size: 1.5rem; margin-bottom: 10px;">
                ${svgIcons.engrenagem} ENGRENAGEM
            </h3>
            <p style="text-align: center; font-size: 0.9rem; color: #555; margin-bottom: 20px;">Otimização de processos e qualidade de serviços</p>
            <div class="objetivos-list">
                <button class="objetivo-btn btn-verde" data-objetivo="receitas">Otimizar a relação entre receitas e despesas correntes</button>
                <button class="objetivo-btn btn-verde" data-objetivo="portfolio">Alinhar o portifólio de serviços às demandas dos consorciados</button>
                <button class="objetivo-btn btn-verde" data-objetivo="qualidade">Elevar a qualidade dos serviços realizados</button>
                <button class="objetivo-btn btn-verde" data-objetivo="produtividade">Aumentar a produtividade e eficiência dos processos</button>
                <button class="objetivo-btn btn-verde" data-objetivo="captacao">Sistematizar a captação de recursos nacionais e internacionais</button>
            </div>
        </div>

        <div class="pilar resultados glass-card">
            <h3 style="display: flex; align-items: center; justify-content: center; color: #dc3545; font-size: 1.5rem; margin-bottom: 10px;">
                ${svgIcons.resultados} RESULTADOS
            </h3>
            <p style="text-align: center; font-size: 0.9rem; color: #555; margin-bottom: 20px;">Equilíbrio financeiro e satisfação dos consorciados</p>
            <div class="objetivos-list">
                <button class="objetivo-btn btn-vermelho" data-objetivo="equilibrio">Alcançar o equilíbrio econômico-financeiro</button>
                <button class="objetivo-btn btn-vermelho" data-objetivo="necessidades">Atender às necessidades e expectativas dos consorciados</button>
            </div>
        </div>
    </div>
`;


// ==========================================
// DADOS: Iniciativas Detalhadas
// ==========================================
const iniciativasData = {
    requalificacao: {
        title: "Requalificação de Vias",
        description: "Programa abrangente de melhoria da infraestrutura viária, incluindo pavimentação, sinalização e drenagem das vias urbanas e rurais dos municípios consorciados.",
        detalhes: ["Pavimentação asfáltica de vias urbanas", "Implementação de sistema de drenagem", "Sinalização horizontal e vertical", "Construção de calçadas acessíveis"]
    },
    manutencao: {
        title: "Manutenção de Vias",
        description: "Serviços contínuos de conservação e manutenção das vias públicas para garantir sua durabilidade e segurança.",
        detalhes: ["Tapa-buracos e remendos", "Limpeza de bueiros e galerias", "Manutenção da sinalização", "Roçagem de canteiros centrais"]
    },
    cadeias: {
        title: "Fortalecimento de Cadeias Produtivas Rurais",
        description: "Apoio técnico e financeiro para o desenvolvimento e fortalecimento das cadeias produtivas do setor agropecuário.",
        detalhes: ["Assistência técnica rural", "Capacitação de produtores", "Apoio à comercialização", "Desenvolvimento de cooperativas"]
    },
    hidrica: {
        title: "Ampliação da Oferta Hídrica",
        description: "Construção e melhoria de infraestruturas hídricas para garantir o acesso à água de qualidade para a população e atividades produtivas.",
        detalhes: ["Perfuração de poços artesianos", "Construção de cisternas", "Sistemas de abastecimento", "Tratamento de água"]
    },
    qualificacao: {
        title: "Qualificação de Produtos",
        description: "Programas de melhoria da qualidade e certificação de produtos de origem animal e vegetal produzidos na região.",
        detalhes: ["Certificação sanitária", "Controle de qualidade", "Rastreabilidade de produtos", "Adequação às normas técnicas"]
    },
    fundiaria: {
        title: "Regularização Fundiária",
        description: "Suporte técnico e jurídico para a regularização de propriedades rurais e urbanas, garantindo segurança jurídica aos proprietários.",
        detalhes: ["Levantamento topográfico", "Documentação legal", "Georreferenciamento", "Registro de imóveis"]
    },
    ambiental: {
        title: "Gestão Ambiental",
        description: "Suporte técnico especializado para fortalecer a gestão ambiental nos municípios consorciados, promovendo sustentabilidade e conformidade com a legislação.",
        detalhes: ["Elaboração de planos ambientais", "Suporte ao licenciamento ambiental", "Programas de educação ambiental", "Monitoramento de recursos naturais"]
    },
    infraestrutura: {
        title: "Obras de Infraestrutura",
        description: "Execução consorciada de obras de infraestrutura urbana e construção ou reforma de edificações públicas essenciais para os serviços municipais.",
        detalhes: ["Construção de escolas e postos de saúde", "Reforma de praças e espaços públicos", "Construção de mercados municipais", "Edificação de centros administrativos"]
    },
    social: {
        title: "Educação, Cultura, Esporte e Turismo",
        description: "Desenvolvimento de programas e ações integradas para fortalecer as políticas sociais, valorizando a cultura local e promovendo o desenvolvimento regional.",
        detalhes: ["Programas educacionais complementares", "Fomento a eventos culturais regionais", "Melhoria da infraestrutura esportiva", "Criação de roteiros turísticos integrados"]
    },
    maquinas: {
        title: "Máquinas e Equipamentos",
        description: "Disponibilização e gerenciamento compartilhado de máquinas e equipamentos entre os municípios para otimizar recursos e viabilizar obras e serviços.",
        detalhes: ["Compartilhamento de máquinas pesadas", "Aquisição de equipamentos agrícolas", "Manutenção de frota compartilhada", "Sistema de agendamento online"]
    },
    habitacao: {
        title: "Obras de Habitação",
        description: "Desenvolvimento e execução de programas habitacionais consorciados para atender às necessidades de moradia digna da população.",
        detalhes: ["Construção de unidades habitacionais", "Programas de reforma de moradias", "Implantação de infraestrutura urbana", "Regularização de loteamentos"]
    },
    residuos: {
        title: "Gestão de Resíduos Sólidos",
        description: "Implementação de sistemas integrados e regionais para a gestão de resíduos sólidos, visando a sustentabilidade ambiental e a redução de custos.",
        detalhes: ["Implantação de coleta seletiva", "Construção de aterros sanitários regionais", "Fomento a programas de reciclagem", "Campanhas de educação ambiental"]
    },
    planos: {
        title: "Elaboração de Planos e Projetos",
        description: "Elaboração de planos estratégicos e projetos técnicos para orientar o desenvolvimento territorial e viabilizar a captação de recursos.",
        detalhes: ["Revisão de planos diretores municipais", "Elaboração de projetos para captação de recursos", "Realização de estudos de viabilidade técnica", "Desenvolvimento de planos setoriais integrados"]
    }
};

// ==========================================
// DADOS: Cadeia de Valor (Com novos ícones primários)
// ==========================================
const cadeiaValorData = {
    suporte: {
        title: "Atividades de Suporte",
        content: `
            <div class="cv-modern-grid">
                <div class="cv-modern-card"><div class="cv-modern-icon">${svgIcons.chart}</div><div class="cv-modern-title">Planejamento e Gestão Orçamentária</div></div>
                <div class="cv-modern-card"><div class="cv-modern-icon">${svgIcons.book}</div><div class="cv-modern-title">Capacitação Técnica e Gerencial</div></div>
                <div class="cv-modern-card"><div class="cv-modern-icon">${svgIcons.shield}</div><div class="cv-modern-title">Auditoria e Controle Interno</div></div>
                <div class="cv-modern-card"><div class="cv-modern-icon">${svgIcons.money}</div><div class="cv-modern-title">Captação de Recursos</div></div>
                <div class="cv-modern-card"><div class="cv-modern-icon">${svgIcons.book}</div><div class="cv-modern-title">Suporte Jurídico</div></div>
                <div class="cv-modern-card"><div class="cv-modern-icon">${svgIcons.people}</div><div class="cv-modern-title">Administração de Pessoal</div></div>
                <div class="cv-modern-card"><div class="cv-modern-icon">${svgIcons.money}</div><div class="cv-modern-title">Gestão Contábil-Financeira</div></div>
                <div class="cv-modern-card"><div class="cv-modern-icon">${svgIcons.cog}</div><div class="cv-modern-title">Manutenção Eletromecânica</div></div>
                <div class="cv-modern-card"><div class="cv-modern-icon">${svgIcons.computer}</div><div class="cv-modern-title">Gestão de T.I.</div></div>
                <div class="cv-modern-card"><div class="cv-modern-icon">${svgIcons.book}</div><div class="cv-modern-title">Gestão de Contratos e Convênios</div></div>
                <div class="cv-modern-card"><div class="cv-modern-icon">${svgIcons.money}</div><div class="cv-modern-title">Aquisição de Bens e Serviços</div></div>
                <div class="cv-modern-card"><div class="cv-modern-icon">${svgIcons.build}</div><div class="cv-modern-title">Gestão Patrimonial</div></div>
                <div class="cv-modern-card"><div class="cv-modern-icon">${svgIcons.road}</div><div class="cv-modern-title">Gestão da Frota de Veículos</div></div>
                <div class="cv-modern-card"><div class="cv-modern-icon">${svgIcons.people}</div><div class="cv-modern-title">Comunicação Social</div></div>
            </div>`
    },
    primarias: {
        title: "Atividades Primárias",
        content: `
            <div class="cv-modern-grid">
                <div class="cv-modern-card inner-card-trigger" data-iniciativa="requalificacao"><div class="cv-modern-icon">${svgIcons.icon_road}</div><div class="cv-modern-title">Requalificação de Vias</div></div>
                <div class="cv-modern-card inner-card-trigger" data-iniciativa="manutencao"><div class="cv-modern-icon">${svgIcons.icon_maintenance}</div><div class="cv-modern-title">Manutenção de Vias</div></div>
                <div class="cv-modern-card inner-card-trigger" data-iniciativa="cadeias"><div class="cv-modern-icon">${svgIcons.icon_rural}</div><div class="cv-modern-title">Fortalecimento de Cadeias Produtivas Rurais</div></div>
                <div class="cv-modern-card inner-card-trigger" data-iniciativa="hidrica"><div class="cv-modern-icon">${svgIcons.icon_water}</div><div class="cv-modern-title">Ampliação da Oferta Hídrica</div></div>
                <div class="cv-modern-card inner-card-trigger" data-iniciativa="qualificacao"><div class="cv-modern-icon">${svgIcons.icon_animal_veg}</div><div class="cv-modern-title">Qualificação de Produtos Animal/Vegetal</div></div>
                <div class="cv-modern-card inner-card-trigger" data-iniciativa="fundiaria"><div class="cv-modern-icon">${svgIcons.icon_land}</div><div class="cv-modern-title">Suporte à Regularização Fundiária</div></div>
                <div class="cv-modern-card inner-card-trigger" data-iniciativa="ambiental"><div class="cv-modern-icon">${svgIcons.icon_environment}</div><div class="cv-modern-title">Suporte à Gestão Ambiental Municipal</div></div>
                <div class="cv-modern-card inner-card-trigger" data-iniciativa="infraestrutura"><div class="cv-modern-icon">${svgIcons.icon_infra}</div><div class="cv-modern-title">Obras de Infraestrutura Urbana e Edificações</div></div>
                <div class="cv-modern-card inner-card-trigger" data-iniciativa="social"><div class="cv-modern-icon">${svgIcons.icon_social}</div><div class="cv-modern-title">Políticas de Educação, Cultura, Esporte e Turismo</div></div>
                <div class="cv-modern-card inner-card-trigger" data-iniciativa="maquinas"><div class="cv-modern-icon">${svgIcons.icon_cog}</div><div class="cv-modern-title">Disponibilização de Máquinas e Equipamentos</div></div>
                <div class="cv-modern-card inner-card-trigger" data-iniciativa="habitacao"><div class="cv-modern-icon">${svgIcons.icon_housing}</div><div class="cv-modern-title">Execução de Obras de Habitação</div></div>
                <div class="cv-modern-card inner-card-trigger" data-iniciativa="residuos"><div class="cv-modern-icon">${svgIcons.icon_trash}</div><div class="cv-modern-title">Gestão de Resíduos Sólidos</div></div>
                <div class="cv-modern-card inner-card-trigger" data-iniciativa="planos"><div class="cv-modern-icon">${svgIcons.icon_plan}</div><div class="cv-modern-title">Elaboração de Planos e Projetos</div></div>
            </div>`
    },
    interessados: {
        title: "Interessados",
        content: `
            <div class="cv-modern-grid">
                <div class="cv-modern-card"><div class="cv-modern-icon">${svgIcons.build}</div><div class="cv-modern-title">Municípios Consorciados</div></div>
                <div class="cv-modern-card"><div class="cv-modern-icon">${svgIcons.people}</div><div class="cv-modern-title">Sociedade</div></div>
                <div class="cv-modern-card"><div class="cv-modern-icon">${svgIcons.shield}</div><div class="cv-modern-title">Governo do Estado</div></div>
            </div>`
    }
};

// ==========================================
// DADOS: Indicadores 
// ==========================================
const indicadoresData = {
    requalificacao: {
        title: "Indicadores: Requalificação de Vias",
        items: [
            { indicador: "Qualidade do serviço prestado", metrica: "Nota de pesquisa de qualidade percebida" },
            { indicador: "Cumprimento do prazo de execução", metrica: "(Qtd. de serviços realizados no prazo / Qtd. total de serviços programados) x 100" }
        ]
    },
    manutencao: {
        title: "Indicadores: Manutenção de Vias",
        items: [
            { indicador: "Qualidade do serviço prestado", metrica: "Nota de pesquisa de qualidade percebida" },
            { indicador: "Cumprimento do prazo de execução", metrica: "(Qtd. de serviços realizados no prazo / Qtd. total de serviços programados) x 100" }
        ]
    },
    fortalecimento: {
        title: "Indicadores: Fortalecimento de Cadeias Produtivas Rurais",
        items: [
            { indicador: "Nível de atendimento às cadeias produtivas", metrica: "(Produtores atendidos com kits / Produtores identificados) x 100" },
			{ indicador: "Assiduidade do assessoramento", metrica: "(Produtores assiduamente assessorados / Produtores atendidos com kits) x 100" },
            { indicador: "Efetividade dos insumos produtivos", metrica: "(Produtores em condição produtiva / Produtores atendidos com kits) x 100" }
        ]
    },
    hidrica: {
        title: "Indicadores: Ampliação da Oferta Hídrica",
        items: [
		    { indicador: "Qualidade do serviço prestado", metrica: "Nota de pesquisa de qualidade percebida" },
			{ indicador: "Cumprimento do prazo de execução", metrica: "(Qtde de obras realizadas no prazo / Qtde total de obras realizadas) x 100" }
		]
    },
    qualificacao: {
        title: "Indicadores: Qualificação de Produtos de origem animal e vegetal",
        items: [
			{ indicador: "Cumprimento do prazo de certificação", metrica: "(Certificações realizadas no prazo / Total de certificações realizadas) x 100" },
			{ indicador: "Abrangência de produtores certificados", metrica: "(Produtores certificados / Produtores identificados) x 100" }
		]
    },
    fundiaria: {
        title: "Indicadores: Suporte técnico à regularização fundiária",
        items: [
			{ indicador: "Cumprimento do prazo para formação de processo", metrica: "(Processos formados no prazo / Total de processos formados) x 100" },
			{ indicador: "Abrangência de propriedades rurais regularizadas", metrica: "(Propriedades rurais regularizadas / Propriedades rurais identificadas) x 100" }
		]
    },
    ambiental: {
        title: "Indicadores: Suporte técnico para a gestão ambiental municipal",
        items: [
			{ indicador: "Cumprimento de prazo para emissão de pareceres", metrica: "(Pareceres emitidos no prazo / Total de pareceres emitidos) x 100" },
			{ indicador: "Cumprimento do plano de educação ambiental", metrica: "(Ações realizadas / Ações previstas no plano) x 100" },
			{ indicador: "Elevação do nível do influência sobre o cumprimento dos condicionantes", metrica: "(Condicionantes com status monitorado / Total de condicionantes) x 100" }
		]
    },
    infraestrutura: {
        title: "Indicadores: Execução de obras de infraestrutura urbana e edificações públicas",
        items: [
			{ indicador: "Qualidade do serviço prestado", metrica: "Nota de pesquisa de qualidade percebida" },
			{ indicador: "Cumprimento do prazo de execução", metrica: "(Qtde de obras realizadas no prazo / Qtde total de obras realizadas) x 100" }
		]
    },
    educacao: {
        title: "Indicadores: Fortalecimento das políticas de educação, cultura, esporte e turismo",
        items: [{ indicador: "Cumprimento de iniciativas planejadas", metrica: "(Ações realizadas / Ações previstas) x 100" }]
    },
    maquinas: {
        title: "Indicadores: Disponibilização de máquinas e equipamentos",
        items: [
			{ indicador: "Disponibilidade máxima da máquina/equipamento para uso", metrica: "(Horas com máquina disponível / Qtde total de horas de cessão) x 100" },
			{ indicador: "Margem favorável de locação", metrica: "(Valor recebido por hora de cessão onerosa / Custo por hora de máquina)" }
		]
    },
    habitacao: {
        title: "Indicadores: Execução de obras de habitação",
        items: [
			{ indicador: "Qualidade do serviço prestado", metrica: "Nota de pesquisa de qualidade" },
			{ indicador: "Cumprimento do prazo de execução", metrica: "(Qtde de obras realizadas no prazo / Qtde total de obras realizadas) x 100" }
		]
    },
    residuos: {
        title: "Indicadores: Gestão de Resíduos Sólidos",
        items: [{ indicador: "Cumprimento do Plano de Resíduos Sólidos", metrica: "(Ações realizadas / Ações previstas no plano) x 100" }]
    },
    planos: {
        title: "Indicadores: Elaboração de Planos e Projetos",
        items: [
			{ indicador: "Qualidade dos planos/projetos", metrica: "Nota de pesquisa de qualidade percebida" },
			{ indicador: "Cumprimento do prazo de elaboração", metrica: "(Qtde de itens elaborados no prazo / Qtde total de itens elaborados) x 100" }
		]
    }
};

// ==========================================
// INICIALIZAÇÃO E LÓGICA DA PÁGINA
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeModals();
});

function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

function initializeModals() {
    const modal = document.getElementById('generic-modal');
    const closeBtn = document.querySelector('.close');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const modalContent = document.querySelector('.modal-content');

    // BOTÃO "VOLTAR" GLOBAL (Fecha o modal para voltar à página principal)
    const btnVoltarGlobal = `
        <button class="btn-voltar-moderno btn-close-modal">
            <span class="icon-circle-voltar">
                <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path>
                </svg>
            </span>
            <span class="texto-voltar">Voltar</span>
        </button>
    `;

    // 1. Missão, Visão e Valores 
    document.querySelectorAll('.mvv-trigger').forEach(card => {
        card.addEventListener('click', function() {
            const key = this.getAttribute('data-mvv');
            if (mvvData[key]) {
                modalTitle.textContent = mvvData[key].title;
                modalBody.innerHTML = btnVoltarGlobal + mvvData[key].content;
                modal.style.display = 'flex';
            }
        });
    });

    // ----------------------------------------------------
    // LÓGICA: PILARES (Abertura Principal e Detalhes)
    // ----------------------------------------------------
    
    // A) Abre a tela principal dos Pilares (As 3 colunas)
    function openPilaresMainModal() {
        modalContent.classList.add('cv-modal-wide'); // Precisa ser largo para as 3 colunas
        modalTitle.textContent = "Pilares - Visão 2028";
        modalBody.innerHTML = btnVoltarGlobal + pilaresMainContent;
        modal.style.display = 'flex';
    }

    // Ouvinte para o Card Principal de Pilares na página
    document.querySelectorAll('.pilares-trigger').forEach(card => {
        card.addEventListener('click', function() {
            openPilaresMainModal();
        });
    });

    // B) Abre o detalhe do objetivo específico
    function openObjetivoDetails(key) {
        if (objetivosData[key]) {
            const obj = objetivosData[key];
            
            // Botão Voltar interno (volta para a tela das 3 colunas)
            const backBtnHtml = `
                <button id="btn-voltar-pilares" class="btn-voltar-moderno">
                    <span class="icon-circle-voltar">
                        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </span>
                    <span class="texto-voltar">Voltar para Pilares</span>
                </button>
            `;

            modalContent.classList.remove('cv-modal-wide'); // Fica estreito para o texto
            modalTitle.textContent = obj.title;
            modalBody.innerHTML = backBtnHtml + `<p style="font-size: 1.1rem; color: #555; text-align: left;">${obj.description}</p>`;
            
            // Liga a ação do botão voltar
            document.getElementById('btn-voltar-pilares').addEventListener('click', () => {
                openPilaresMainModal();
            });
        }
    }

    // ----------------------------------------------------
    // LÓGICA: CADEIA DE VALOR (Abertura e Iniciativas Internas)
    // ----------------------------------------------------
    
    function openIniciativaDetails(key) {
        if (iniciativasData[key]) {
            const init = iniciativasData[key];
            const detalhesHtml = init.detalhes.map(detalhe => `<li style="padding: 8px 0; border-bottom: 1px solid #eee; text-align: left;">✔️ ${detalhe}</li>`).join('');
            
            const backBtnHtml = `
                <button id="btn-voltar-primarias" class="btn-voltar-moderno">
                    <span class="icon-circle-voltar">
                        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </span>
                    <span class="texto-voltar">Voltar para Atividades Primárias</span>
                </button>
            `;

            modalContent.classList.remove('cv-modal-wide'); 
            modalTitle.textContent = init.title;
            modalBody.innerHTML = `
                ${backBtnHtml}
                <p style="font-size: 1.1rem; color: #555; text-align: left;">${init.description}</p>
                <br>
                <h4 style="color: var(--primary-color); margin-bottom: 10px; text-align: left;">Principais atividades:</h4>
                <ul style="list-style-type: none; padding: 0;">
                    ${detalhesHtml}
                </ul>
            `;
            
            document.getElementById('btn-voltar-primarias').addEventListener('click', () => {
                openCadeiaValorModal('primarias');
            });
        }
    }

    function openCadeiaValorModal(key) {
        modalContent.classList.add('cv-modal-wide'); 
        modalTitle.textContent = cadeiaValorData[key].title;
        modalBody.innerHTML = btnVoltarGlobal + cadeiaValorData[key].content;
        modal.style.display = 'flex';

        if (key === 'primarias') {
            document.querySelectorAll('.inner-card-trigger').forEach(innerCard => {
                innerCard.addEventListener('click', function() {
                    const initKey = this.getAttribute('data-iniciativa');
                    openIniciativaDetails(initKey);
                });
            });
        }
    }

    // Clique na Cadeia de Valor Principal
    document.querySelectorAll('.cv-card-trigger').forEach(card => {
        card.addEventListener('click', function() {
            const key = this.getAttribute('data-cv');
            if (cadeiaValorData[key]) {
                openCadeiaValorModal(key);
            }
        });
    });

    // ----------------------------------------------------
    // LÓGICA DE PAGINAÇÃO PARA OS INDICADORES
    // ----------------------------------------------------
    let currentIndicadorItems = [];
    let currentIndicadorIndex = 0;

    function renderIndicadorTable() {
        const item = currentIndicadorItems[currentIndicadorIndex];
        const totalItems = currentIndicadorItems.length;
        const isFirst = currentIndicadorIndex === 0;
        const isLast = currentIndicadorIndex === (totalItems - 1);

        const svgPrev = `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path></svg>`;
        const svgNext = `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg>`;

        let html = btnVoltarGlobal + `
            <div class="table-responsive">
                <table class="modal-table">
                    <thead>
                        <tr>
                            <th>Indicador</th>
                            <th>Métrica</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="font-weight: 500;">${item.indicador}</td>
                            <td>${item.metrica}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;

        if (totalItems > 1) {
            html += `
                <div class="pagination-controls">
                    <button id="btn-prev-ind" class="pagination-btn" ${isFirst ? 'disabled' : ''}>
                        ${svgPrev} Anterior
                    </button>
                    <span class="page-info">${currentIndicadorIndex + 1} de ${totalItems}</span>
                    <button id="btn-next-ind" class="pagination-btn" ${isLast ? 'disabled' : ''}>
                        Próximo ${svgNext}
                    </button>
                </div>
            `;
        }

        modalBody.innerHTML = html;

        if (totalItems > 1) {
            const btnPrev = document.getElementById('btn-prev-ind');
            const btnNext = document.getElementById('btn-next-ind');

            if (btnPrev) {
                btnPrev.addEventListener('click', () => {
                    if (currentIndicadorIndex > 0) {
                        currentIndicadorIndex--;
                        renderIndicadorTable();
                    }
                });
            }

            if (btnNext) {
                btnNext.addEventListener('click', () => {
                    if (currentIndicadorIndex < totalItems - 1) {
                        currentIndicadorIndex++;
                        renderIndicadorTable();
                    }
                });
            }
        }
    }

    // Clique nos Indicadores
    document.querySelectorAll('.ind-card-trigger').forEach(card => {
        card.addEventListener('click', function() {
            const key = this.getAttribute('data-atividade');
            if (indicadoresData[key]) {
                currentIndicadorItems = indicadoresData[key].items;
                currentIndicadorIndex = 0; 

                modalContent.classList.remove('cv-modal-wide'); 
                modalTitle.textContent = indicadoresData[key].title;
                
                renderIndicadorTable();
                modal.style.display = 'flex';
            }
        });
    });

    // ----------------------------------------------------
    // DELEGAÇÃO DE EVENTOS DO MODAL (Escuta cliques dinâmicos)
    // ----------------------------------------------------
    function closeModal() {
        modal.style.display = 'none';
        modalContent.classList.remove('cv-modal-wide'); 
    }

    closeBtn.addEventListener('click', closeModal);
    
    // Como os elementos são gerados pelo JS após abrir o modal,
    // usamos o modalBody para "ouvir" todos os cliques lá dentro
    modalBody.addEventListener('click', function(e) {
        
        // 1. Se clicou no botão de fechar/voltar principal
        if (e.target.closest('.btn-close-modal')) {
            closeModal();
        }
        
        // 2. Se clicou em um botão de objetivo dos Pilares
        const objetivoBtn = e.target.closest('.objetivo-btn');
        if (objetivoBtn) {
            const key = objetivoBtn.getAttribute('data-objetivo');
            openObjetivoDetails(key);
        }
    });

    window.addEventListener('click', (e) => { 
        if (e.target === modal) closeModal(); 
    });
    
    document.addEventListener('keydown', (e) => { 
        if (e.key === 'Escape') closeModal(); 
    });
}