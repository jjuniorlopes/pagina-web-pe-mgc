// ==========================================
// ÍCONES SVG MODERNOS E DINÂMICOS
// ==========================================
const svgIcons = {
    plan: `<svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 9h-2V7h-2v5H6v2h2v5h2v-5h2v-2z"/></svg>`,
    book: `<svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/></svg>`,
    money: `<svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/></svg>`,
    build: `<svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>`,
    people: `<svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`,
    shield: `<svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>`,
    chart: `<svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>`,
    computer: `<svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/></svg>`,
    road: `<svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.1 4.8C18 4.3 17.6 4 17.1 4H6.9C6.4 4 6 4.3 5.9 4.8L3 15v8c0 .5.5 1 1 1h1c.6 0 1-.5 1-1v-1h12v1c0 .5.5 1 1 1h1c.5 0 1-.5 1-1v-8l-2.9-10.2zM6.8 6h10.4l1.6 5.6H5.2L6.8 6zm-1.3 11c-.8 0-1.5-.7-1.5-1.5S4.7 14 5.5 14s1.5.7 1.5 1.5S6.3 17 5.5 17zm13 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"/></svg>`,
    icon_road: `<svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.1 4.8C18 4.3 17.6 4 17.1 4H6.9C6.4 4 6 4.3 5.9 4.8L3 15v8c0 .5.5 1 1 1h1c.6 0 1-.5 1-1v-1h12v1c0 .5.5 1 1 1h1c.5 0 1-.5 1-1v-8l-2.9-10.2zM6.8 6h10.4l1.6 5.6H5.2L6.8 6zm-1.3 11c-.8 0-1.5-.7-1.5-1.5S4.7 14 5.5 14s1.5.7 1.5 1.5S6.3 17 5.5 17zm13 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"/></svg>`,
    icon_maintenance: `<svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>`,
    icon_rural: `<svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 18c1.1 0 2-.9 2-2v-4h-2v-2l-3-4H8v2H5v4c-1.1 0-2 .9-2 2v4h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4c0 1.66 1.34 3 3 3s3-1.34 3-3h2zm-12 1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm10 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-6-3V8h5.33l1.5 2H12z"/></svg>`,
    icon_water: `<svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zM7.83 14c.37 0 .67.26.74.62 1.41 1.5 3.45 1.5 3.45 1.5.38 0 .68.31.68.69s-.3.69-.68.69c0 0-2.45 0-4.4-2.06-.2-.2-.26-.49-.13-.73.12-.22.35-.37.6-.37h-.26z"/></svg>`,
    icon_animal_veg: `<svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>`,
    icon_land: `<svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/></svg>`,
    icon_environment: `<svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/></svg>`,
    icon_infra: `<svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z"/></svg>`,
    icon_social: `<svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/></svg>`,
    icon_cog: `<svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.06-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.73,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.06,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.43-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.49-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/></svg>`,
    icon_housing: `<svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>`,
    icon_trash: `<svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>`,
    icon_plan: `<svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>`,
    
    // Cores de stroke para o Mapa Estratégico
    alicerce: `<svg width="32" height="32" fill="none" stroke="#e67e22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px;" aria-hidden="true"><rect x="3" y="14" width="6" height="6" rx="1"></rect><rect x="15" y="14" width="6" height="6" rx="1"></rect><path d="M6 14v-2a2 2 0 012-2h8a2 2 0 012 2v2"></path><circle cx="12" cy="6" r="3"></circle><path d="M12 2v1M12 9v1M16 6h1M7 6H6M14.83 3.17l.71-.71M8.46 8.12l.71-.71M14.83 8.83l.71.71M8.46 3.88l.71.71"></path></svg>`,
    engrenagem: `<svg width="32" height="32" fill="none" stroke="#07888b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px;" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 8V4M12 20v-4M8 12H4M20 12h-4M9.17 9.17l-2.83-2.83M17.66 17.66l-2.83-2.83M9.17 14.83l-2.83 2.83M17.66 6.34l-2.83 2.83"></path><circle cx="12" cy="2" r="2"></circle><circle cx="12" cy="22" r="2"></circle><circle cx="2" cy="12" r="2"></circle><circle cx="22" cy="12" r="2"></circle></svg>`,
    resultados: `<svg width="32" height="32" fill="none" stroke="#2c4f74" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px;" aria-hidden="true"><polyline points="18 20 18 10 12 20 12 4 6 20 6 14"></polyline><polyline points="2 20 22 20"></polyline><polyline points="14 4 22 4 22 12"></polyline><line x1="22" y1="4" x2="12" y2="14"></line></svg>`
};

// ==========================================
// DADOS: Missão, Visão e Valores
// ==========================================
const mvvData = {
    missao: {
        title: "MISSÃO",
        content: `<p style="font-size: 1.15rem; text-align: left; line-height: 1.6;">Contribuir para o desenvolvimento territorial sustentável e a melhoria da qualidade de vida nos municípios consorciados, através da execução de políticas públicas com excelência.</p>`
    },
    visao: {
        title: "VISÃO 2028",
        content: `<p style="font-size: 1.15rem; text-align: left; line-height: 1.6;">Tornar-se referência na execução de políticas públicas através da prestação de serviços que elevem a qualidade de vida nos municípios consorciados de forma sustentável.</p>`
    },
    valores: {
        title: "VALORES",
        content: `<p style="font-size: 1.15rem; text-align: left; line-height: 1.8;">
            Alcançaremos nossa visão partilhando <strong style="color: #e83e8c;">CONHECIMENTO</strong> 
            para gerar <strong style="color: #dc3545;">INOVAÇÃO</strong> em nossos processos, cultivando a 
            <strong style="color: #17a2b8;">COOPERAÇÃO</strong> e a <strong style="color: #1b62b8;">PROATIVIDADE</strong> 
            nas equipes, para gerarmos resultados de <strong>EXCELÊNCIA</strong> 
            com <strong style="color: #28a745;">SUSTENTABILIDADE</strong>.
        </p>`
    }
};

// ==========================================
// DADOS: Pilares (Objetivos detalhados)
// ==========================================
const objetivosData = {
    estrutura: { title: "Adequar a estrutura organizacional às demandas estratégicas", description: "Esse objetivo busca ajustar a estrutura do consórcio para que ela seja compatível com seus desafios atuais e futuros. Isso envolve definir melhor áreas, funções, responsabilidades, perfis profissionais e formas de organização do trabalho, de modo que a instituição tenha uma base sólida para sustentar sua estratégia." },
    processos: { title: "Uniformizar e informatizar os processos de suporte e finalísticos", description: "Esse objetivo procura organizar, padronizar e modernizar a forma como o consórcio executa suas atividades, tanto nas áreas de apoio quanto nas áreas finalísticas. A intenção é reduzir improvisações, aumentar a segurança operacional, facilitar o controle e ampliar o uso de sistemas e ferramentas digitais na gestão e na execução dos processos." },
    pessoas: { title: "Aperfeiçoar os processos de gestão de pessoas", description: "Esse objetivo está voltado ao fortalecimento da gestão de pessoas como elemento central do desempenho organizacional. Envolve melhorar práticas relacionadas à definição de perfis, desenvolvimento de competências, organização das equipes, valorização profissional e criação de condições para que as pessoas contribuam melhor para os resultados do consórcio." },
    receitas: { title: "Otimizar a relação entre receitas e despesas correntes", description: "Esse objetivo busca melhorar o comportamento das receitas e despesas do dia a dia do consórcio. A intenção é ampliar sua capacidade de operação com maior racionalidade no custeio, melhor uso dos recursos correntes e mais estabilidade para a manutenção das atividades." },
    portfolio: { title: "Alinhar o portifólio de serviços às demandas dos consorciados", description: "Esse objetivo procura garantir que a atuação do consórcio esteja conectada às necessidades reais dos municípios consorciados. Isso envolve tanto fortalecer e estruturar melhor os serviços já demandados quanto prospectar novas oportunidades de atuação, incorporando linhas de ação que possam ampliar a capacidade de resposta do consórcio às demandas do território." },
    qualidade: { title: "Elevar a qualidade dos serviços realizados", description: "Trata-se de melhorar o padrão de entrega dos serviços executados pelo consórcio, buscando maior conformidade técnica, maior confiabilidade e melhores resultados para os municípios consorciados. O objetivo pressupõe atenção tanto à qualidade percebida quanto à qualidade efetivamente entregue." },
    produtividade: { title: "Aumentar a produtividade e eficiência dos processos", description: "Esse objetivo procura fazer com que o consórcio produza mais e melhor com os recursos disponíveis. O foco está em eliminar desperdícios, reduzir retrabalho, melhorar fluxos de trabalho e tornar a execução mais ágil, econômica e confiável." },
    captacao: { title: "Sistematizar a captação de recursos nacionais e internacionais", description: "Esse objetivo busca estruturar a captação de recursos como uma atividade permanente e planejada, e não apenas ocasional. A ideia é desenvolver capacidade institucional para identificar oportunidades, elaborar propostas, articular parcerias e ampliar o acesso a fontes externas de financiamento." },
    equilibrio: { title: "Alcançar o equilíbrio econômico-financeiro", description: "Esse objetivo busca assegurar a sustentabilidade global do consórcio no tempo, de modo que ele tenha condições de manter suas atividades, honrar compromissos e continuar se desenvolvendo. Envolve equilíbrio entre receitas, despesas e investimentos, com responsabilidade fiscal e capacidade de planejamento financeiro." },
    necessidades: { title: "Atender às necessidades e expectativas dos consorciados", description: "Esse objetivo expressa o compromisso do consórcio com a satisfação dos municípios que dele participam. Mais do que prestar serviços, trata-se de entregar soluções úteis, relevantes e percebidas como valiosas pelos consorciados, considerando suas necessidades, prioridades e expectativas em relação à atuação consorcial." }
};

// ==========================================
// ESTRUTURA HTML DA TELA PRINCIPAL DAS PERSPECTIVAS
// Ordem: Resultados (1º), Engrenagem (2º), Alicerce (3º)
// ==========================================
const pilaresMainContent = `
    <div class="pilares-grid">
        <div class="pilar resultados" tabindex="0">
            <h3 style="display: flex; align-items: center; justify-content: center; color: #2c4f74; font-size: 1.5rem; margin-bottom: 10px;">
                ${svgIcons.resultados} RESULTADOS
            </h3>
            <p style="text-align: center; font-size: 0.9rem; margin-bottom: 20px;">A perspectiva de Resultados expressa a culminância dos esforços realizados nas demais perspectivas. Ela traduz os efeitos mais relevantes da atuação do consórcio sobre seus beneficiários diretos e principais partes interessadas, especialmente os consorciados, o Governo do Estado e a população atendida pelas políticas públicas executadas ou apoiadas pelo consórcio.</p>
            <div class="objetivos-list">
                <button class="objetivo-btn btn-resultados" data-objetivo="equilibrio">Alcançar o equilíbrio econômico-financeiro</button>
                <button class="objetivo-btn btn-resultados" data-objetivo="necessidades">Atender às necessidades e expectativas dos consorciados</button>
            </div>
        </div>

        <div class="pilar engrenagem" tabindex="0">
            <h3 style="display: flex; align-items: center; justify-content: center; color: #07888b; font-size: 1.5rem; margin-bottom: 10px;">
                ${svgIcons.engrenagem} ENGRENAGEM
            </h3>
            <p style="text-align: center; font-size: 0.9rem; margin-bottom: 20px;">A perspectiva de Engrenagem está relacionada ao funcionamento da cadeia de valor do consórcio, especialmente aos processos finalísticos por meio dos quais são geradas entregas para os consorciados e para a população. Ela também envolve condições operacionais diretamente ligadas à capacidade de executar essas entregas com qualidade, produtividade e sustentabilidade.</p>
            <div class="objetivos-list">
                <button class="objetivo-btn btn-engrenagem" data-objetivo="receitas">Otimizar a relação entre receitas e despesas correntes</button>
                <button class="objetivo-btn btn-engrenagem" data-objetivo="portfolio">Alinhar o portifólio de serviços às demandas dos consorciados</button>
                <button class="objetivo-btn btn-engrenagem" data-objetivo="qualidade">Elevar a qualidade dos serviços realizados</button>
                <button class="objetivo-btn btn-engrenagem" data-objetivo="produtividade">Aumentar a produtividade e eficiência dos processos</button>
                <button class="objetivo-btn btn-engrenagem" data-objetivo="captacao">Sistematizar a captação de recursos nacionais e internacionais</button>
            </div>
        </div>

        <div class="pilar alicerce" tabindex="0">
            <h3 style="display: flex; align-items: center; justify-content: center; color: #e67e22; font-size: 1.5rem; margin-bottom: 10px;">
                ${svgIcons.alicerce} ALICERCE
            </h3>
            <p style="text-align: center; font-size: 0.9rem; margin-bottom: 20px;">A perspectiva de Alicerce reúne os elementos estruturantes que sustentam o funcionamento e o desenvolvimento do consórcio ao longo do tempo. Ela abrange aspectos como estrutura organizacional, processos internos, tecnologia, sistemas, gestão de pessoas e demais capacidades institucionais que dão base à atuação do consórcio.</p>
            <div class="objetivos-list">
                <button class="objetivo-btn btn-alicerce" data-objetivo="estrutura">Adequar a estrutura organizacional às demandas estratégicas</button>
                <button class="objetivo-btn btn-alicerce" data-objetivo="processos">Uniformizar e informatizar os processos de suporte e finalísticos</button>
                <button class="objetivo-btn btn-alicerce" data-objetivo="pessoas">Aperfeiçoar os processos de gestão de pessoas</button>
            </div>
        </div>
    </div>
`;


// ==========================================
// DADOS: Iniciativas Detalhadas (Processos Finalísticos)
// ==========================================
const iniciativasData = {
    requalificacao: { title: "Requalificação de Vias", description: "Esse processo envolve intervenções mais estruturantes para melhorar as condições de circulação, segurança e acessibilidade nas vias urbanas e rurais dos municípios consorciados. Seu foco está na recuperação e requalificação da infraestrutura viária, com impactos sobre mobilidade, drenagem e qualidade dos espaços públicos.", detalhes: ["Pavimentação asfáltica de vias urbanas", "Implementação de sistema de drenagem", "Sinalização horizontal e vertical", "Construção de calçadas e dispositivos de acessibilidade"] },
    manutencao: { title: "Manutenção de Vias", description: "Esse processo abrange ações contínuas de conservação da malha viária, com o objetivo de preservar sua funcionalidade, segurança e durabilidade. Trata-se de intervenções de manutenção corretiva e preventiva, voltadas à preservação das condições de uso das vias públicas.", detalhes: ["Tapa-buracos e remendos", "Limpeza de bueiros, valas e galerias", "Manutenção da sinalização viária", "Roçagem e conservação de áreas marginais e canteiros"] },
    cadeias: { title: "Fortalecimento de Cadeias Produtivas Rurais", description: "Esse processo busca apoiar o desenvolvimento das atividades produtivas rurais, contribuindo para aumento da produtividade, melhoria da renda e fortalecimento da economia local. Envolve ações de apoio técnico, organizacional e de incentivo à estruturação das cadeias produtivas no território.", detalhes: ["Assistência técnica a produtores rurais", "Capacitação e qualificação de produtores", "Apoio à comercialização da produção", "Fortalecimento de associações e cooperativas"] },
    hidrica: { title: "Implantação de estruturas para ampliação da oferta hídrica", description: "Esse processo reúne intervenções voltadas à ampliação da disponibilidade de água para consumo humano e para atividades produtivas, especialmente em áreas sujeitas à escassez hídrica. Seu objetivo é apoiar soluções de captação, armazenamento e distribuição simplificada de água no território.", detalhes: ["Perfuração de poços", "Construção de cisternas", "Construção de pequenos barramentos, açudes e aguadas", "Implantação de sistemas simplificados de abastecimento de água"] },
    qualificacao: { title: "Qualificação de produtos de origem animal e vegetal", description: "Esse processo busca melhorar a qualidade, a conformidade e a competitividade de produtos agropecuários e agroindustriais do território. Envolve ações que favorecem adequação sanitária, controle de qualidade e acesso a mercados.", detalhes: ["Certificação sanitária e de qualidade", "Controle e melhoria de padrões produtivos", "Implantação de sistemas de rastreabilidade", "Adequação a normas técnicas e sanitárias"] },
    fundiaria: { title: "Suporte técnico à regularização fundiária", description: "Esse processo compreende o apoio técnico e administrativo voltado à regularização de propriedades e ocupações, contribuindo para maior segurança jurídica e organização territorial. Seu foco está na estruturação dos elementos necessários à formalização fundiária, especialmente em áreas rurais.", detalhes: ["Levantamentos topográficos e cadastrais", "Georreferenciamento de áreas e imóveis", "Organização da documentação técnica e legal", "Apoio à formalização e ao registro imobiliário"] },
    ambiental: { title: "Suporte técnico à gestão ambiental municipal", description: "Esse processo oferece apoio especializado aos municípios para fortalecimento da gestão ambiental local, contribuindo para maior conformidade legal, melhor planejamento ambiental e promoção da sustentabilidade. Envolve suporte técnico a instrumentos, procedimentos e ações ambientais de interesse municipal.", detalhes: ["Elaboração de planos e instrumentos ambientais", "Apoio ao licenciamento e à regularização ambiental", "Programas e ações de educação ambiental", "Monitoramento e acompanhamento de condicionantes"] },
    infraestrutura: { title: "Execução de obras de infraestrutura urbana e edificações públicas", description: "Esse processo compreende a execução consorciada de obras e intervenções em infraestrutura urbana e em edificações públicas destinadas à prestação de serviços à população. Seu objetivo é apoiar os municípios na implantação, ampliação ou melhoria de estruturas públicas essenciais.", detalhes: ["Construção e reforma de escolas e unidades de saúde", "Requalificação de praças e espaços públicos", "Construção de mercados, centros e equipamentos públicos", "Implantação e melhoria de edificações administrativas e comunitárias"] },
    social: { title: "Fortalecimento das políticas de educação, cultura, esporte e turismo", description: "Esse processo reúne ações integradas voltadas ao apoio e fortalecimento de políticas públicas nessas áreas, valorizando potencialidades locais e promovendo desenvolvimento territorial. Seu foco está na ampliação de oportunidades, na valorização da identidade regional e na dinamização da vida social e econômica dos municípios.", detalhes: ["Programas educacionais complementares", "Apoio a eventos e iniciativas culturais regionais", "Melhoria de espaços e equipamentos esportivos", "Estruturação de roteiros e ações de valorização turística"] },
    maquinas: { title: "Disponibilização de máquinas e equipamentos", description: "Esse processo consiste na disponibilização e gestão compartilhada de máquinas e equipamentos para apoiar a execução de obras, serviços e ações operacionais nos municípios consorciados. Seu objetivo é otimizar recursos, ampliar a capacidade de atendimento e viabilizar intervenções de interesse comum.", detalhes: ["Tratores", "Motoniveladoras", "Retroescavadeiras", "Caçambas, pás carregadeiras e equipamentos correlatos"] },
    habitacao: { title: "Execução de obras de habitação", description: "Esse processo envolve a realização de ações e empreendimentos voltados à melhoria das condições de moradia da população. Seu foco está na promoção de soluções habitacionais que contribuam para habitação digna, especialmente em contextos de maior vulnerabilidade.", detalhes: ["Construção de unidades habitacionais", "Reforma e melhoria de moradias", "Apoio à implantação de empreendimentos habitacionais", "Ações complementares de qualificação habitacional"] },
    residuos: { title: "Gestão de Resíduos Sólidos", description: "Esse processo envolve a estruturação de soluções consorciadas para o manejo e a destinação adequada de resíduos sólidos, buscando ganhos de escala, redução de custos e maior sustentabilidade ambiental. Seu foco está na organização regionalizada de sistemas e ações voltadas à gestão de resíduos.", detalhes: ["Implantação de coleta seletiva", "Apoio à destinação final ambientalmente adequada", "Fomento a iniciativas de reciclagem e reaproveitamento", "Campanhas de educação ambiental relacionadas aos resíduos"] },
    planos: { title: "Elaboração de Planos e Projetos", description: "Esse processo compreende a produção de estudos, planos e projetos técnicos destinados a orientar o desenvolvimento territorial, estruturar intervenções e apoiar a captação de recursos. Seu objetivo é qualificar o planejamento e aumentar a capacidade dos municípios e consórcios de transformar demandas em iniciativas viáveis.", detalhes: ["Elaboração de projetos para captação de recursos", "EEstudos de viabilidade técnica", "Elaboração ou revisão de planos municipais e regionais", "Desenvolvimento de planos setoriais integrados"] }
};

// ==========================================
// DADOS: Detalhamento dos Processos de Suporte
// ==========================================
const suporteData = {
    planejamento: { title: "PLANEJAMENTO E GESTÃO ORÇAMENTÁRIA", description: "Esse processo envolve a organização do planejamento financeiro e orçamentário do consórcio, assegurando a previsão, alocação e acompanhamento adequado dos recursos. Seu papel é dar suporte à tomada de decisão e garantir que a execução das atividades ocorra de forma compatível com as prioridades institucionais e com a disponibilidade orçamentária." },
    capacitacao: { title: "CAPACITAÇÃO TÉCNICA E GERENCIAL", description: "Esse processo está voltado ao desenvolvimento de conhecimentos e competências necessários ao bom desempenho das equipes. Ele busca qualificar dirigentes, técnicos e colaboradores, fortalecendo a capacidade institucional do consórcio para planejar, gerir, executar e aperfeiçoar suas atividades." },
    auditoria: { title: "AUDITORIA E CONTROLE INTERNO", description: "Esse processo tem a função de acompanhar, verificar e avaliar a regularidade dos atos administrativos, financeiros e operacionais do consórcio. Seu objetivo é fortalecer a conformidade, prevenir falhas, reduzir riscos e contribuir para maior transparência, segurança e confiabilidade na gestão." },
    captacao: { title: "CAPTAÇÃO DE RECURSOS", description: "Esse processo busca identificar oportunidades de financiamento e apoio institucional para ampliar a capacidade de atuação do consórcio. Envolve a prospecção de fontes de recursos, a elaboração de propostas e a articulação com parceiros e financiadores, de modo a viabilizar investimentos e novas iniciativas." },
    juridico: { title: "SUPORTE JURÍDICO", description: "Esse processo oferece respaldo legal às decisões, instrumentos e ações do consórcio. Seu papel é orientar a atuação institucional à luz da legislação aplicável, contribuindo para a segurança jurídica de contratos, convênios, processos administrativos, normas internas e demais atos da gestão." },
    pessoal: { title: "ADMINISTRAÇÃO DE PESSOAL", description: "Esse processo compreende as rotinas administrativas relacionadas à gestão de vínculos de trabalho e à vida funcional dos colaboradores. Inclui atividades como registros, movimentações, frequência, obrigações trabalhistas e organização documental, assegurando regularidade e suporte à gestão de pessoas." },
    contabil: { title: "GESTÃO CONTÁBIL-FINANCEIRA", description: "Esse processo envolve o registro, controle e acompanhamento da execução contábil e financeira do consórcio. Seu objetivo é assegurar fidedignidade das informações, cumprimento de obrigações legais e apoio à gestão dos recursos, permitindo maior controle sobre receitas, despesas e resultados financeiros." },
    eletromecanica: { title: "MANUTENÇÃO ELETROMECÂNICA", description: "Esse processo busca assegurar o funcionamento adequado de máquinas, equipamentos e sistemas que dependem de componentes elétricos e mecânicos. Sua finalidade é prevenir falhas, reduzir interrupções e garantir melhores condições de operação dos ativos necessários à atuação do consórcio." },
    ti: { title: "GESTÃO DE TECNOLOGIA DA INFORMAÇÃO(TI)", description: "Esse processo compreende a organização, manutenção e evolução dos recursos tecnológicos utilizados pelo consórcio. Envolve sistemas, infraestrutura, suporte técnico, segurança da informação e soluções digitais que contribuem para a integração, a confiabilidade dos dados e a melhoria dos processos." },
    contratos: { title: "GESTÃO DE CONTRATOS E CONVÊNIOS", description: "Esse processo trata da formalização, acompanhamento e controle dos instrumentos firmados pelo consórcio com fornecedores, parceiros e instituições públicas ou privadas. Seu objetivo é assegurar que contratos e convênios sejam bem estruturados, corretamente executados e monitorados ao longo de sua vigência." },
    aquisicao: { title: "AQUISIÇÃO DE BENS E SERVIÇOS", description: "Esse processo reúne as atividades necessárias para planejar, contratar e adquirir os bens e serviços de que o consórcio necessita para funcionar e executar suas ações. Seu papel é garantir abastecimento adequado, observância das normas aplicáveis e maior eficiência no uso dos recursos públicos." },
    patrimonial: { title: "GESTÃO PATRIMONIAL", description: "Esse processo está relacionado ao controle, conservação e utilização dos bens patrimoniais do consórcio. Seu objetivo é assegurar que esses bens sejam devidamente registrados, preservados e utilizados de forma adequada, contribuindo para a boa gestão dos ativos institucionais." },
    frota: { title: "GESTÃO DA FROTA DE VEÍCULOS", description: "Esse processo envolve o planejamento, controle, manutenção e uso dos veículos vinculados ao consórcio. Sua finalidade é garantir disponibilidade, segurança, economicidade e adequação da frota às necessidades operacionais e logísticas da instituição." },
    comunicacao: { title: "COMUNICAÇÃO SOCIAL", description: "Esse processo busca organizar a comunicação institucional do consórcio com seus públicos de interesse, tanto internos quanto externos. Envolve divulgação de informações, apoio à transparência, fortalecimento da imagem institucional e ampliação da clareza sobre ações, serviços e resultados do consórcio." }
};

// ==========================================
// DADOS: Cadeia de Valor 
// ==========================================
const cadeiaValorData = {
    suporte: {
        title: "PROCESSOS DE SUPORTE",
        content: `
            <p style="font-size: 1.1rem; text-align: justify; margin-bottom: 25px;">Os processos de suporte correspondem ao conjunto de atividades que dão sustentação ao funcionamento do consórcio e viabilizam a execução de seus processos finalísticos. Embora não constituam, em si, as entregas principais aos consorciados e à população, são indispensáveis para assegurar organização, regularidade, eficiência e continuidade à atuação institucional.</p>
            <div class="cv-modern-grid">
                <div class="cv-modern-card suporte-card-trigger" tabindex="0" data-suporte="planejamento"><div class="cv-modern-icon">${svgIcons.chart}</div><div class="cv-modern-title">Planejamento e Gestão Orçamentária</div></div>
                <div class="cv-modern-card suporte-card-trigger" tabindex="0" data-suporte="capacitacao"><div class="cv-modern-icon">${svgIcons.book}</div><div class="cv-modern-title">Capacitação Técnica e Gerencial</div></div>
                <div class="cv-modern-card suporte-card-trigger" tabindex="0" data-suporte="auditoria"><div class="cv-modern-icon">${svgIcons.shield}</div><div class="cv-modern-title">Auditoria e Controle Interno</div></div>
                <div class="cv-modern-card suporte-card-trigger" tabindex="0" data-suporte="captacao"><div class="cv-modern-icon">${svgIcons.money}</div><div class="cv-modern-title">Captação de Recursos</div></div>
                <div class="cv-modern-card suporte-card-trigger" tabindex="0" data-suporte="juridico"><div class="cv-modern-icon">${svgIcons.book}</div><div class="cv-modern-title">Suporte Jurídico</div></div>
                <div class="cv-modern-card suporte-card-trigger" tabindex="0" data-suporte="pessoal"><div class="cv-modern-icon">${svgIcons.people}</div><div class="cv-modern-title">Administração de Pessoal</div></div>
                <div class="cv-modern-card suporte-card-trigger" tabindex="0" data-suporte="contabil"><div class="cv-modern-icon">${svgIcons.money}</div><div class="cv-modern-title">Gestão Contábil-Financeira</div></div>
                <div class="cv-modern-card suporte-card-trigger" tabindex="0" data-suporte="eletromecanica"><div class="cv-modern-icon">${svgIcons.icon_cog}</div><div class="cv-modern-title">Manutenção Eletromecânica</div></div>
                <div class="cv-modern-card suporte-card-trigger" tabindex="0" data-suporte="ti"><div class="cv-modern-icon">${svgIcons.computer}</div><div class="cv-modern-title">Gestão de Tecnologia da Informação(TI)</div></div>
                <div class="cv-modern-card suporte-card-trigger" tabindex="0" data-suporte="contratos"><div class="cv-modern-icon">${svgIcons.book}</div><div class="cv-modern-title">Gestão de Contratos e Convênios</div></div>
                <div class="cv-modern-card suporte-card-trigger" tabindex="0" data-suporte="aquisicao"><div class="cv-modern-icon">${svgIcons.money}</div><div class="cv-modern-title">Aquisição de Bens e Serviços</div></div>
                <div class="cv-modern-card suporte-card-trigger" tabindex="0" data-suporte="patrimonial"><div class="cv-modern-icon">${svgIcons.build}</div><div class="cv-modern-title">Gestão Patrimonial</div></div>
                <div class="cv-modern-card suporte-card-trigger" tabindex="0" data-suporte="frota"><div class="cv-modern-icon">${svgIcons.road}</div><div class="cv-modern-title">Gestão da Frota de Veículos</div></div>
                <div class="cv-modern-card suporte-card-trigger" tabindex="0" data-suporte="comunicacao"><div class="cv-modern-icon">${svgIcons.people}</div><div class="cv-modern-title">Comunicação Social</div></div>
            </div>`
    },
    primarias: {
        title: "PROCESSOS FINALÍSTICOS",
        content: `
		<p style="font-size: 1.1rem; text-align: justify; margin-bottom: 25px;">Os processos finalísticos correspondem ao conjunto de atividades por meio das quais o consórcio realiza suas entregas principais para os municípios consorciados e para a população. São os processos diretamente ligados à execução de políticas, obras, serviços e ações que materializam a finalidade pública do consórcio e expressam, de forma mais concreta, sua contribuição para o desenvolvimento do território.</p>
            <div class="cv-modern-grid">
                <div class="cv-modern-card inner-card-trigger" tabindex="0" data-iniciativa="requalificacao"><div class="cv-modern-icon">${svgIcons.icon_road}</div><div class="cv-modern-title">Requalificação de Vias</div></div>
                <div class="cv-modern-card inner-card-trigger" tabindex="0" data-iniciativa="manutencao"><div class="cv-modern-icon">${svgIcons.icon_maintenance}</div><div class="cv-modern-title">Manutenção de Vias</div></div>
                <div class="cv-modern-card inner-card-trigger" tabindex="0" data-iniciativa="cadeias"><div class="cv-modern-icon">${svgIcons.icon_rural}</div><div class="cv-modern-title">Fortalecimento de Cadeias Produtivas Rurais</div></div>
                <div class="cv-modern-card inner-card-trigger" tabindex="0" data-iniciativa="hidrica"><div class="cv-modern-icon">${svgIcons.icon_water}</div><div class="cv-modern-title">Ampliação da Oferta Hídrica</div></div>
                <div class="cv-modern-card inner-card-trigger" tabindex="0" data-iniciativa="qualificacao"><div class="cv-modern-icon">${svgIcons.icon_animal_veg}</div><div class="cv-modern-title">Qualificação de Produtos Animal/Vegetal</div></div>
                <div class="cv-modern-card inner-card-trigger" tabindex="0" data-iniciativa="fundiaria"><div class="cv-modern-icon">${svgIcons.icon_land}</div><div class="cv-modern-title">Suporte à Regularização Fundiária</div></div>
                <div class="cv-modern-card inner-card-trigger" tabindex="0" data-iniciativa="ambiental"><div class="cv-modern-icon">${svgIcons.icon_environment}</div><div class="cv-modern-title">Suporte à Gestão Ambiental Municipal</div></div>
                <div class="cv-modern-card inner-card-trigger" tabindex="0" data-iniciativa="infraestrutura"><div class="cv-modern-icon">${svgIcons.icon_infra}</div><div class="cv-modern-title">Obras de Infraestrutura Urbana e Edificações</div></div>
                <div class="cv-modern-card inner-card-trigger" tabindex="0" data-iniciativa="social"><div class="cv-modern-icon">${svgIcons.icon_social}</div><div class="cv-modern-title">Políticas de Educação, Cultura, Esporte e Turismo</div></div>
                <div class="cv-modern-card inner-card-trigger" tabindex="0" data-iniciativa="maquinas"><div class="cv-modern-icon">${svgIcons.icon_cog}</div><div class="cv-modern-title">Disponibilização de Máquinas e Equipamentos</div></div>
                <div class="cv-modern-card inner-card-trigger" tabindex="0" data-iniciativa="habitacao"><div class="cv-modern-icon">${svgIcons.icon_housing}</div><div class="cv-modern-title">Execução de Obras de Habitação</div></div>
                <div class="cv-modern-card inner-card-trigger" tabindex="0" data-iniciativa="residuos"><div class="cv-modern-icon">${svgIcons.icon_trash}</div><div class="cv-modern-title">Gestão de Resíduos Sólidos</div></div>
                <div class="cv-modern-card inner-card-trigger" tabindex="0" data-iniciativa="planos"><div class="cv-modern-icon">${svgIcons.icon_plan}</div><div class="cv-modern-title">Elaboração de Planos e Projetos</div></div>
            </div>`
    },
    interessados: {
        title: "BENEFICIÁRIOS",
        content: `
            <div class="cv-modern-grid">
                <div class="cv-modern-card cv-card-trigger" tabindex="0"><div class="cv-modern-icon">${svgIcons.build}</div><div class="cv-modern-title">Municípios Consorciados</div></div>
                <div class="cv-modern-card cv-card-trigger" tabindex="0"><div class="cv-modern-icon">${svgIcons.people}</div><div class="cv-modern-title">Sociedade</div></div>
                <div class="cv-modern-card cv-card-trigger" tabindex="0"><div class="cv-modern-icon">${svgIcons.shield}</div><div class="cv-modern-title">Governo do Estado</div></div>
            </div>`
    }
};

const cadeiaValorMainContent = `
    <div class="cv-modern-grid">
        <div class="cv-modern-card cv-card-trigger" data-cv="suporte" tabindex="0" role="button" aria-label="Ver Processos de Suporte">
            <svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.06-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.73,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.06,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.43-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.49-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/></svg>
            <div class="cv-modern-title">PROCESSOS DE SUPORTE</div>
        </div>
        <div class="cv-modern-card cv-card-trigger" data-cv="primarias" tabindex="0" role="button" aria-label="Ver Processos Finalísticos">
            <svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12,2L4.5,20.29l0.71,0.71L12,18l6.79,3l0.71-0.71L12,2z"/></svg>
            <div class="cv-modern-title">PROCESSOS FINALÍSTICOS</div>
        </div>
        <div class="cv-modern-card cv-card-trigger" data-cv="interessados" tabindex="0" role="button" aria-label="Ver Beneficiários">
            <svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
            <div class="cv-modern-title">BENEFICIÁRIOS</div>
        </div>
    </div>
`;

// ==========================================
// DADOS: Indicadores Finalísticos
// ==========================================
const indicadoresData = {
    requalificacao: { title: "Indicadores: Requalificação de Vias", items: [{ indicador: "Qualidade do serviço prestado", metrica: "Nota de pesquisa de qualidade percebida" }, { indicador: "Cumprimento do prazo de execução", metrica: "(Qtd. de serviços realizados no prazo / Qtd. total de serviços programados) x 100" }] },
    manutencao: { title: "Indicadores: Manutenção de Vias", items: [{ indicador: "Qualidade do serviço prestado", metrica: "Nota de pesquisa de qualidade percebida" }, { indicador: "Cumprimento do prazo de execução", metrica: "(Qtd. de serviços realizados no prazo / Qtd. total de serviços programados) x 100" }] },
    fortalecimento: { title: "Indicadores: Fortalecimento de Cadeias Produtivas Rurais", items: [{ indicador: "Nível de atendimento às cadeias produtivas", metrica: "(Produtores atendidos com kits / Produtores identificados) x 100" }, { indicador: "Assiduidade do assessoramento", metrica: "(Produtores assiduamente assessorados / Produtores atendidos com kits) x 100" }, { indicador: "Efetividade dos insumos produtivos", metrica: "(Produtores em condição produtiva / Produtores atendidos com kits) x 100" }] },
    hidrica: { title: "Indicadores: Ampliação da Oferta Hídrica", items: [{ indicador: "Qualidade do serviço prestado", metrica: "Nota de pesquisa de qualidade percebida" }, { indicador: "Cumprimento do prazo de execução", metrica: "(Qtde de obras realizadas no prazo / Qtde total de obras realizadas) x 100" }] },
    qualificacao: { title: "Indicadores: Qualificação de Produtos de origem animal e vegetal", items: [{ indicador: "Cumprimento do prazo de certificação", metrica: "(Certificações realizadas no prazo / Total de certificações realizadas) x 100" }, { indicador: "Abrangência de produtores certificados", metrica: "(Produtores certificados / Produtores identificados) x 100" }] },
    fundiaria: { title: "Indicadores: Suporte técnico à regularização fundiária", items: [{ indicador: "Cumprimento do prazo para formação de processo", metrica: "(Processos formados no prazo / Total de processos formados) x 100" }, { indicador: "Abrangência de propriedades rurais regularizadas", metrica: "(Propriedades rurais regularizadas / Propriedades rurais identificadas) x 100" }] },
    ambiental: { title: "Indicadores: Suporte técnico para a gestão ambiental municipal", items: [{ indicador: "Cumprimento de prazo para emissão de pareceres", metrica: "(Pareceres emitidos no prazo / Total de pareceres emitidos) x 100" }, { indicador: "Cumprimento do plano de educação ambiental", metrica: "(Ações realizadas / Ações previstas no plano) x 100" }, { indicador: "Elevação do nível do influência sobre o cumprimento dos condicionantes", metrica: "(Condicionantes com status monitorado / Total de condicionantes) x 100" }] },
    infraestrutura: { title: "Indicadores: Execução de obras de infraestrutura urbana e edificações públicas", items: [{ indicador: "Qualidade do serviço prestado", metrica: "Nota de pesquisa de qualidade percebida" }, { indicador: "Cumprimento do prazo de execução", metrica: "(Qtde de obras realizadas no prazo / Qtde total de obras realizadas) x 100" }] },
    educacao: { title: "Indicadores: Fortalecimento das políticas de educação, cultura, esporte e turismo", items: [{ indicador: "Cumprimento de iniciativas planejadas", metrica: "(Ações realizadas / Ações previstas) x 100" }] },
    maquinas: { title: "Indicadores: Disponibilização de máquinas e equipamentos", items: [{ indicador: "Disponibilidade máxima da máquina/equipamento para uso", metrica: "(Horas com máquina disponível / Qtde total de horas de cessão) x 100" }, { indicador: "Margem favorável de locação", metrica: "(Valor recebido por hora de cessão onerosa / Custo por hora de máquina)" }] },
    habitacao: { title: "Indicadores: Execução de obras de habitação", items: [{ indicador: "Qualidade do serviço prestado", metrica: "Nota de pesquisa de qualidade" }, { indicador: "Cumprimento do prazo de execution", metrica: "(Qtde de obras realizadas no prazo / Qtde total de obras realizadas) x 100" }] },
    residuos: { title: "Indicadores: Gestão de Resíduos Sólidos", items: [{ indicador: "Cumprimento do Plano de Resíduos Sólidos", metrica: "(Ações realizadas / Ações previstas no plano) x 100" }] },
    planos: { title: "Indicadores: Elaboração de Planos e Projetos", items: [{ indicador: "Qualidade dos planos/projetos", metrica: "Nota de pesquisa de qualidade percebida" }, { indicador: "Cumprimento do prazo de elaboração", metrica: "(Qtde de itens elaborados no prazo / Qtde total de itens elaborados) x 100" }] }
};

const indicadoresFinalisticosMainContent = `
    <div class="cv-modern-grid">
        <div class="cv-modern-card ind-card-trigger" data-atividade="requalificacao" tabindex="0" role="button">
            <svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.1 4.8C18 4.3 17.6 4 17.1 4H6.9C6.4 4 6 4.3 5.9 4.8L3 15v8c0 .5.5 1 1 1h1c.6 0 1-.5 1-1v-1h12v1c0 .5.5 1 1 1h1c.5 0 1-.5 1-1v-8l-2.9-10.2zM6.8 6h10.4l1.6 5.6H5.2L6.8 6zm-1.3 11c-.8 0-1.5-.7-1.5-1.5S4.7 14 5.5 14s1.5.7 1.5 1.5S6.3 17 5.5 17zm13 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"/></svg>
            <div class="cv-modern-title">Requalificação de Vias</div>
        </div>
        <div class="cv-modern-card ind-card-trigger" data-atividade="manutencao" tabindex="0" role="button">
            <svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>
            <div class="cv-modern-title">Manutenção de Vias</div>
        </div>
        <div class="cv-modern-card ind-card-trigger" data-atividade="fortalecimento" tabindex="0" role="button">
            <svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 18c1.1 0 2-.9 2-2v-4h-2v-2l-3-4H8v2H5v4c-1.1 0-2 .9-2 2v4h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4c0 1.66 1.34 3 3 3s3-1.34 3-3h2zm-12 1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm10 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-6-3V8h5.33l1.5 2H12z"/></svg>
            <div class="cv-modern-title">Fortalecimento de Cadeias Produtivas Rurais</div>
        </div>
        <div class="cv-modern-card ind-card-trigger" data-atividade="hidrica" tabindex="0" role="button">
            <svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zM7.83 14c.37 0 .67.26.74.62 1.41 1.5 3.45 1.5 3.45 1.5.38 0 .68.31.68.69s-.3.69-.68.69c0 0-2.45 0-4.4-2.06-.2-.2-.26-.49-.13-.73.12-.22.35-.37.6-.37h-.26z"/></svg>
            <div class="cv-modern-title">Ampliação da Oferta Hídrica</div>
        </div>
        <div class="cv-modern-card ind-card-trigger" data-atividade="qualificacao" tabindex="0" role="button">
            <svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
            <div class="cv-modern-title">Qualificação de Produtos Animal e Vegetal</div>
        </div>
        <div class="cv-modern-card ind-card-trigger" data-atividade="fundiaria" tabindex="0" role="button">
            <svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/></svg>
            <div class="cv-modern-title">Suporte Técnico à Regularização Fundiária</div>
        </div>
        <div class="cv-modern-card ind-card-trigger" data-atividade="ambiental" tabindex="0" role="button">
            <svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/></svg>
            <div class="cv-modern-title">Suporte Técnico à Gestão Ambiental Municipal</div>
        </div>
        <div class="cv-modern-card ind-card-trigger" data-atividade="infraestrutura" tabindex="0" role="button">
            <svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z"/></svg>
            <div class="cv-modern-title">Obras de Infraestrutura Urbana e Edificações Públicas</div>
        </div>
        <div class="cv-modern-card ind-card-trigger" data-atividade="educacao" tabindex="0" role="button">
            <svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/></svg>
            <div class="cv-modern-title">Políticas de Educação, Cultura, Esporte e Turismo</div>
        </div>
        <div class="cv-modern-card ind-card-trigger" data-atividade="maquinas" tabindex="0" role="button">
            <svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.06-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.73,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.06,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.43-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.49-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/></svg>
            <div class="cv-modern-title">Disponibilização de Máquinas e Equipamentos</div>
        </div>
        <div class="cv-modern-card ind-card-trigger" data-atividade="habitacao" tabindex="0" role="button">
            <svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
            <div class="cv-modern-title">Execução de Obras de Habitação</div>
        </div>
        <div class="cv-modern-card ind-card-trigger" data-atividade="residuos" tabindex="0" role="button">
            <svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
            <div class="cv-modern-title">Gestão de Resíduos Sólidos</div>
        </div>
        <div class="cv-modern-card ind-card-trigger" data-atividade="planos" tabindex="0" role="button">
            <svg class="cv-modern-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
            <div class="cv-modern-title">Elaboração de Planos e Projetos</div>
        </div>
    </div>
`;

// ==========================================
// DADOS: Indicadores Estratégicos (Nova Aba)
// ==========================================
const indicadoresEstrategicosData = {
    ave: { title: "Alcance da Visão Estratégica", objetivo: "Tornar-se referência na execução de políticas públicas de forma sustentável.", formula: "Média ponderada dos indicadores estratégicos.", obs: "O indicador consolidado será apurado anualmente para visualizar a convergência em relação à Visão 2028." },
    sef: { title: "Sustentação Econômico-Financeira", objetivo: "Alcançar o equilíbrio econômico-financeiro.", formula: "((Receitas - Despesas Operacionais - Investimentos) / Receitas) x 100", obs: "As despesas operacionais não incluem a depreciação." },
    nsc: { title: "Nível de Satisfação dos Consorciados", objetivo: "Atender às necessidades e expectativas dos consorciados.", formula: "Nota obtida via pesquisa de satisfação.", obs: "A pesquisa será aplicada anualmente com base nos fatores críticos de sucesso." },
    glct: { title: "Geração Líquida de Caixa Total", objetivo: "Otimizar a relação entre receitas e despesas correntes.", formula: "((Entradas Totais - Saídas Totais) / Entradas Totais) x 100", obs: "As saídas devem incluir os investimentos." },
    eps: { title: "Estruturação do Portifólio de Serviços", objetivo: "Alinhar o portifólio de serviços às demandas dos consorciados.", formula: "(Linhas de ação estruturadas / Linhas de ação deliberadas) x 100", obs: "As linhas de ação deliberadas são demandas formais do Colegiado." },
    cts: { title: "Conformidade Técnica dos Serviços", objetivo: "Elevar a qualidade dos serviços realizados.", formula: "(Serviços em conformidade / Total de serviços realizados) x 100", obs: "A conformidade será aferida por padrões técnicos e pesquisa periódica." },
    glco: { title: "Geração Líquida de Caixa Operacional", objetivo: "Aumentar a produtividade e eficiência dos processos.", formula: "((Entradas Operacionais - Saídas Operacionais) / Entradas) x 100", obs: "As saídas não devem incluir os investimentos." },
    cpos: { title: "Cumprimento dos Prazos de Obras e Serviços", objetivo: "Garantir a entrega de obras e serviços nos prazos acordados.", formula: "(Serviços no prazo / Total de serviços realizados) x 100", obs: "Consolidação de todos os indicadores de prazos dos processos finalísticos." },
    scr: { title: "Sucesso na Captação de Recursos", objetivo: "Sistematizar a captação de recursos nacionais e internacionais.", formula: "(Projetos aprovados / Total de projetos encaminhados) x 100", obs: "Serão computados os projetos com resultado de aprovação colhido dentro do exercício." },
    edo: { title: "Estruturação do Desenho Organizacional", objetivo: "Adequar a estrutura organizacional às demandas estratégicas.", formula: "(Componentes estruturados / Componentes previstos) x 100", obs: "Os componentes estão relacionados às etapas de estruturação organizacional." },
    epo: { title: "Estruturação dos Processos Organizacionais", objetivo: "Uniformizar e informatizar os processos de suporte e finalísticos.", formula: "(Processos estruturados / Processos previstos) x 100", obs: "A estruturação de cada processo se dará através de etapas previamente definidas." },
    esgp: { title: "Estruturação de Gestão de Pessoas", objetivo: "Aperfeiçoar os processos de gestão de pessoas.", formula: "(Subprocessos estruturados / Subprocessos previstos) x 100", obs: "Serão considerados no modelo de referência oito componentes clássicos de Gestão de Pessoas." }
};

const indicadoresEstrategicosMainContent = `
    <div class="cv-modern-grid">
        <div class="cv-modern-card ind-est-card-trigger" data-ind="ave" tabindex="0" role="button" style="border-color: var(--primary-color);">
            <div style="width: 60px; height: 60px; background-color: var(--primary-color); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.4rem; margin-bottom: 15px;">AVE</div>
            <div class="cv-modern-title" style="color: var(--primary-color);">Alcance da Visão Estratégica</div>
        </div>
        <div class="cv-modern-card ind-est-card-trigger" data-ind="sef" tabindex="0" role="button" style="border-color: var(--primary-color);">
            <div style="width: 60px; height: 60px; background-color: var(--primary-color); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.4rem; margin-bottom: 15px;">SEF</div>
            <div class="cv-modern-title" style="color: var(--primary-color);">Sustentação Econômico-Financeira</div>
        </div>
        <div class="cv-modern-card ind-est-card-trigger" data-ind="nsc" tabindex="0" role="button" style="border-color: var(--primary-color);">
            <div style="width: 60px; height: 60px; background-color: var(--primary-color); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.4rem; margin-bottom: 15px;">NSC</div>
            <div class="cv-modern-title" style="color: var(--primary-color);">Nível de Satisfação dos Consorciados</div>
        </div>
        <div class="cv-modern-card ind-est-card-trigger" data-ind="glct" tabindex="0" role="button" style="border-color: var(--primary-color);">
            <div style="width: 60px; height: 60px; background-color: var(--primary-color); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.4rem; margin-bottom: 15px;">GLCT</div>
            <div class="cv-modern-title" style="color: var(--primary-color);">Geração Líquida de Caixa Total</div>
        </div>
        <div class="cv-modern-card ind-est-card-trigger" data-ind="eps" tabindex="0" role="button" style="border-color: var(--primary-color);">
            <div style="width: 60px; height: 60px; background-color: var(--primary-color); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.4rem; margin-bottom: 15px;">EPS</div>
            <div class="cv-modern-title" style="color: var(--primary-color);">Estruturação do Portifólio de Serviços</div>
        </div>
        <div class="cv-modern-card ind-est-card-trigger" data-ind="cts" tabindex="0" role="button" style="border-color: var(--primary-color);">
            <div style="width: 60px; height: 60px; background-color: var(--primary-color); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.4rem; margin-bottom: 15px;">CTS</div>
            <div class="cv-modern-title" style="color: var(--primary-color);">Conformidade Técnica dos Serviços</div>
        </div>
        <div class="cv-modern-card ind-est-card-trigger" data-ind="glco" tabindex="0" role="button" style="border-color: var(--primary-color);">
            <div style="width: 60px; height: 60px; background-color: var(--primary-color); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.4rem; margin-bottom: 15px;">GLCO</div>
            <div class="cv-modern-title" style="color: var(--primary-color);">Geração Líquida de Caixa Operacional</div>
        </div>
        <div class="cv-modern-card ind-est-card-trigger" data-ind="cpos" tabindex="0" role="button" style="border-color: var(--primary-color);">
            <div style="width: 60px; height: 60px; background-color: var(--primary-color); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.4rem; margin-bottom: 15px;">CPOS</div>
            <div class="cv-modern-title" style="color: var(--primary-color);">Cumprimento dos Prazos de Obras e Serviços</div>
        </div>
        <div class="cv-modern-card ind-est-card-trigger" data-ind="scr" tabindex="0" role="button" style="border-color: var(--primary-color);">
            <div style="width: 60px; height: 60px; background-color: var(--primary-color); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.4rem; margin-bottom: 15px;">SCR</div>
            <div class="cv-modern-title" style="color: var(--primary-color);">Sucesso na Captação de Recursos</div>
        </div>
        <div class="cv-modern-card ind-est-card-trigger" data-ind="edo" tabindex="0" role="button" style="border-color: var(--primary-color);">
            <div style="width: 60px; height: 60px; background-color: var(--primary-color); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.4rem; margin-bottom: 15px;">EDO</div>
            <div class="cv-modern-title" style="color: var(--primary-color);">Estruturação do Desenho Organizacional</div>
        </div>
        <div class="cv-modern-card ind-est-card-trigger" data-ind="epo" tabindex="0" role="button" style="border-color: var(--primary-color);">
            <div style="width: 60px; height: 60px; background-color: var(--primary-color); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.4rem; margin-bottom: 15px;">EPO</div>
            <div class="cv-modern-title" style="color: var(--primary-color);">Estruturação dos Processos Organizacionais</div>
        </div>
        <div class="cv-modern-card ind-est-card-trigger" data-ind="esgp" tabindex="0" role="button" style="border-color: var(--primary-color);">
            <div style="width: 60px; height: 60px; background-color: var(--primary-color); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.4rem; margin-bottom: 15px;">ESGP</div>
            <div class="cv-modern-title" style="color: var(--primary-color);">Estruturação de Gestão de Pessoas</div>
        </div>
    </div>
`;


// ==========================================
// INICIALIZAÇÃO E LÓGICA DA PÁGINA
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeModals();
    initializeSearch(); 
    initializeShare();  
    initializeAccessibility();
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

    const btnVoltarGlobal = `
        <button class="btn-voltar-moderno btn-close-modal" aria-label="Voltar para a tela anterior">
            <span class="icon-circle-voltar" aria-hidden="true">
                <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path>
                </svg>
            </span>
            <span class="texto-voltar">Voltar</span>
        </button>
    `;

    function addKeyboardSupport(elements, callback) {
        elements.forEach(el => {
            el.addEventListener('click', callback);
            el.addEventListener('keypress', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    callback.call(this, e);
                }
            });
        });
    }

    // 1. Missão, Visão e Valores 
    addKeyboardSupport(document.querySelectorAll('.mvv-trigger'), function() {
        const key = this.getAttribute('data-mvv');
        if (mvvData[key]) {
            modalTitle.textContent = mvvData[key].title;
            modalBody.innerHTML = btnVoltarGlobal + mvvData[key].content;
            modal.style.display = 'flex';
            document.querySelector('.btn-close-modal').focus();
        }
    });

    // ----------------------------------------------------
    // LÓGICA: MAPA ESTRATÉGICO (Antigo Pilares)
    // ----------------------------------------------------
    function openPilaresMainModal() {
        modalContent.classList.add('cv-modal-wide'); 
        modalTitle.textContent = "Perspectivas";
        modalBody.innerHTML = btnVoltarGlobal + pilaresMainContent;
        modal.style.display = 'flex';
        document.querySelector('.btn-close-modal').focus();
    }

    addKeyboardSupport(document.querySelectorAll('.pilares-trigger'), function() {
        openPilaresMainModal();
    });

    function openObjetivoDetails(key, titleColor) {
        if (objetivosData[key]) {
            const obj = objetivosData[key];
            const backBtnHtml = `
                <button id="btn-voltar-pilares" class="btn-voltar-moderno" aria-label="Voltar para Perspectivas">
                    <span class="icon-circle-voltar" aria-hidden="true">
                        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path></svg>
                    </span>
                    <span class="texto-voltar">Voltar para Perspectivas</span>
                </button>
            `;

            modalContent.classList.remove('cv-modal-wide');
            modalTitle.textContent = obj.title;
            
            // APLICA A COR PERSONALIZADA APENAS NO TÍTULO
            if (titleColor) {
                modalTitle.style.setProperty('color', titleColor, 'important');
                modalTitle.style.setProperty('border-bottom-color', titleColor, 'important');
            }

            modalBody.innerHTML = backBtnHtml + `<p style="font-size: 1.1rem; text-align: left;">${obj.description}</p>`;
            document.getElementById('btn-voltar-pilares').focus();
        }
    }

    // ----------------------------------------------------
    // LÓGICA: CADEIA DE VALOR (COMPLETA)
    // ----------------------------------------------------
    function openCadeiaValorMainModal() {
        modalContent.classList.add('cv-modal-wide'); 
        modalTitle.textContent = "Cadeia de Valor";
        modalBody.innerHTML = btnVoltarGlobal + cadeiaValorMainContent;
        modal.style.display = 'flex';
        document.querySelector('.btn-close-modal').focus();
    }

    addKeyboardSupport(document.querySelectorAll('.cv-main-trigger'), function() {
        openCadeiaValorMainModal();
    });

    function openCadeiaValorSubModal(key) {
        const backBtnHtml = `
                <button id="btn-voltar-cv-main" class="btn-voltar-moderno" aria-label="Voltar para Cadeia de Valor Principal">
                    <span class="icon-circle-voltar" aria-hidden="true">
                        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path></svg>
                    </span>
                    <span class="texto-voltar">Voltar para Cadeia de Valor</span>
                </button>
            `;

        modalContent.classList.add('cv-modal-wide'); 
        modalTitle.textContent = cadeiaValorData[key].title;
        modalBody.innerHTML = backBtnHtml + cadeiaValorData[key].content;
        document.getElementById('btn-voltar-cv-main').focus();
    }

    function openSuporteDetails(key) {
        if (suporteData[key]) {
            const sup = suporteData[key];
            const backBtnHtml = `
                <button id="btn-voltar-suporte" class="btn-voltar-moderno" aria-label="Voltar para Processos de Suporte">
                    <span class="icon-circle-voltar" aria-hidden="true">
                        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path></svg>
                    </span>
                    <span class="texto-voltar">Voltar para Processos de Suporte</span>
                </button>
            `;

            modalContent.classList.remove('cv-modal-wide'); 
            modalTitle.textContent = sup.title;
            modalBody.innerHTML = `
                ${backBtnHtml}
                <p style="font-size: 1.1rem; text-align: justify;">${sup.description}</p>
            `;
            document.getElementById('btn-voltar-suporte').focus();
        }
    }

    function openIniciativaDetails(key) {
        if (iniciativasData[key]) {
            const init = iniciativasData[key];
            const detalhesHtml = init.detalhes.map(detalhe => `<li style="padding: 8px 0; border-bottom: 1px solid #eee; text-align: left;">✔️ ${detalhe}</li>`).join('');
            
            const backBtnHtml = `
                <button id="btn-voltar-primarias" class="btn-voltar-moderno" aria-label="Voltar para Processos Finalísticos">
                    <span class="icon-circle-voltar" aria-hidden="true">
                        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path></svg>
                    </span>
                    <span class="texto-voltar">Voltar para Processos Finalísticos</span>
                </button>
            `;

            modalContent.classList.remove('cv-modal-wide'); 
            modalTitle.textContent = init.title;
            modalBody.innerHTML = `
                ${backBtnHtml}
                <p style="font-size: 1.1rem; text-align: left;">${init.description}</p>
                <br>
                <h4 style="color: var(--primary-color); margin-bottom: 10px; text-align: left;">Exemplos de ações e entregas:</h4>
                <ul style="list-style-type: none; padding: 0;">${detalhesHtml}</ul>
            `;
            document.getElementById('btn-voltar-primarias').focus();
        }
    }

    // ----------------------------------------------------
    // LÓGICA: INDICADORES
    // ----------------------------------------------------

    // Aba Processos Finalísticos
    function openIndicadoresFinalisticosMainModal() {
        modalContent.classList.add('cv-modal-wide'); 
        modalTitle.textContent = "Indicadores das Atividades Primárias";
        modalBody.innerHTML = btnVoltarGlobal + indicadoresFinalisticosMainContent;
        modal.style.display = 'flex';
        document.querySelector('.btn-close-modal').focus();
    }

    let currentIndicadorItems = [];
    let currentIndicadorIndex = 0;

    function renderIndicadorTable() {
        const item = currentIndicadorItems[currentIndicadorIndex];
        const totalItems = currentIndicadorItems.length;
        const isFirst = currentIndicadorIndex === 0;
        const isLast = currentIndicadorIndex === (totalItems - 1);

        const svgPrev = `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path></svg>`;
        const svgNext = `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg>`;

        const backBtnHtml = `
            <button id="btn-voltar-ind-fin" class="btn-voltar-moderno" aria-label="Voltar para Indicadores">
                <span class="icon-circle-voltar" aria-hidden="true">
                    <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path></svg>
                </span>
                <span class="texto-voltar">Voltar para Indicadores</span>
            </button>
        `;

        let html = backBtnHtml + `
            <div class="table-responsive">
                <table class="modal-table" aria-label="Tabela de indicador e métrica">
                    <thead><tr><th>Indicador</th><th>Métrica</th></tr></thead>
                    <tbody><tr><td style="font-weight: 500;">${item.indicador}</td><td>${item.metrica}</td></tr></tbody>
                </table>
            </div>
        `;

        if (totalItems > 1) {
            html += `
                <div class="pagination-controls">
                    <button id="btn-prev-ind" class="pagination-btn" ${isFirst ? 'disabled' : ''} aria-label="Indicador anterior">
                        ${svgPrev} Anterior
                    </button>
                    <span class="page-info" aria-live="polite">${currentIndicadorIndex + 1} de ${totalItems}</span>
                    <button id="btn-next-ind" class="pagination-btn" ${isLast ? 'disabled' : ''} aria-label="Próximo indicador">
                        Próximo ${svgNext}
                    </button>
                </div>
            `;
        }
        modalBody.innerHTML = html;
    }

    function openIndicadorFinalisticoDetails(key) {
        currentIndicadorItems = indicadoresData[key].items;
        currentIndicadorIndex = 0; 
        modalContent.classList.remove('cv-modal-wide'); 
        modalTitle.textContent = indicadoresData[key].title;
        renderIndicadorTable();
        document.getElementById('btn-voltar-ind-fin').focus();
    }

    addKeyboardSupport([document.getElementById('btn-indicadores-finalisticos')], function() {
        openIndicadoresFinalisticosMainModal();
    });

    // Aba Processos Estratégicos
    function openIndicadoresEstrategicosMainModal() {
        modalContent.classList.add('cv-modal-wide'); 
        modalTitle.textContent = "Indicadores Estratégicos";
        modalBody.innerHTML = btnVoltarGlobal + indicadoresEstrategicosMainContent;
        modal.style.display = 'flex';
        document.querySelector('.btn-close-modal').focus();
    }

    function openIndicadorEstrategicoDetails(key) {
        if (indicadoresEstrategicosData[key]) {
            const ind = indicadoresEstrategicosData[key];
            const backBtnHtml = `
                <button id="btn-voltar-ind-est" class="btn-voltar-moderno" aria-label="Voltar para Indicadores Estratégicos">
                    <span class="icon-circle-voltar" aria-hidden="true">
                        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path></svg>
                    </span>
                    <span class="texto-voltar">Voltar para Indicadores Estratégicos</span>
                </button>
            `;

            modalContent.classList.remove('cv-modal-wide'); 
            modalTitle.textContent = ind.title;
            modalBody.innerHTML = `
                ${backBtnHtml}
                <div style="background-color: #f8f9fa; border-left: 4px solid var(--primary-color); padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                    <h4 style="color: var(--primary-color); margin-bottom: 5px; font-size: 1rem; text-transform: uppercase;">Objetivo Estratégico</h4>
                    <p style="font-size: 1.1rem; text-align: left; margin-bottom: 0;">${ind.objetivo}</p>
                </div>
                
                <h4 style="color: var(--primary-color); margin-bottom: 5px; font-size: 1rem; text-transform: uppercase; text-align: left;">Fórmula</h4>
                <div style="background-color: #ffffff; border: 1px solid #e9ecef; padding: 15px; border-radius: 8px; font-family: monospace; font-size: 1.05rem; word-wrap: break-word; margin-bottom: 20px; text-align: left;">
                    ${ind.formula}
                </div>
                
                <p style="font-size: 0.95rem; color: #6c757d; font-style: italic; text-align: left;"><strong>Observações:</strong> ${ind.obs}</p>
            `;
            document.getElementById('btn-voltar-ind-est').focus();
        }
    }

    addKeyboardSupport([document.getElementById('btn-indicadores-estrategicos')], function() {
        openIndicadoresEstrategicosMainModal();
    });

    // ----------------------------------------------------
    // DELEGAÇÃO DE EVENTOS GLOBAL (O Segredo para Nunca Quebrar)
    // ----------------------------------------------------
    function closeModal() {
        modal.style.display = 'none';
        modalContent.classList.remove('cv-modal-wide'); 
        // GARANTE QUE A COR DO TÍTULO É RESETADA AO FECHAR NO 'X'
        modalTitle.style.removeProperty('color');
        modalTitle.style.removeProperty('border-bottom-color');
    }

    closeBtn.addEventListener('click', closeModal);
    
    modalBody.addEventListener('click', function(e) {
        
        // 1. Fechar Modal
        if (e.target.closest('.btn-close-modal')) { closeModal(); return; }

        // 2. Mapa Estratégico (Perspectivas) - Abrir Detalhe com Cor no Título
        const objetivoBtn = e.target.closest('.objetivo-btn');
        if (objetivoBtn) {
            // VERIFICA DE QUAL CAIXA VEM O CLIQUE PARA APLICAR A COR EXATA NO TÍTULO
            let color = '';
            if (objetivoBtn.classList.contains('btn-resultados')) color = '#2c4f74'; // Azul Resultados
            else if (objetivoBtn.classList.contains('btn-engrenagem')) color = '#07888b'; // Verde Engrenagem
            else if (objetivoBtn.classList.contains('btn-alicerce')) color = '#e67e22'; // Laranja Alicerce
            
            openObjetivoDetails(objetivoBtn.getAttribute('data-objetivo'), color);
            return;
        }
        
        // 3. Mapa Estratégico - Botão Voltar
        if (e.target.closest('#btn-voltar-pilares')) {
            modalTitle.style.removeProperty('color');
            modalTitle.style.removeProperty('border-bottom-color');
            openPilaresMainModal();
            return;
        }

        // 4. Cadeia de Valor - Abrir Sub-Grupos
        const cvCardTrigger = e.target.closest('.cv-card-trigger');
        if (cvCardTrigger) {
            openCadeiaValorSubModal(cvCardTrigger.getAttribute('data-cv'));
            return;
        }

        // 5. Cadeia de Valor - Botão Voltar para Tela Principal da Cadeia
        if (e.target.closest('#btn-voltar-cv-main')) {
            openCadeiaValorMainModal();
            return;
        }

        // 6. Cadeia de Valor - Abrir Detalhe (Iniciativa)
        const innerCardTrigger = e.target.closest('.inner-card-trigger');
        if (innerCardTrigger) {
            openIniciativaDetails(innerCardTrigger.getAttribute('data-iniciativa'));
            return;
        }

        // 7. Cadeia de Valor - Botão Voltar da Iniciativa para Sub-Grupo Primárias
        if (e.target.closest('#btn-voltar-primarias')) {
            openCadeiaValorSubModal('primarias');
            return;
        }

        // 7B. Cadeia de Valor - Abrir Detalhe do Suporte
        const suporteCardTrigger = e.target.closest('.suporte-card-trigger');
        if (suporteCardTrigger) {
            openSuporteDetails(suporteCardTrigger.getAttribute('data-suporte'));
            return;
        }

        // 7C. Cadeia de Valor - Botão Voltar do Detalhe para Sub-Grupo Suporte
        if (e.target.closest('#btn-voltar-suporte')) {
            openCadeiaValorSubModal('suporte');
            return;
        }

        // 8. Indicadores Finalísticos - Abrir Tabela
        const indCardTrigger = e.target.closest('.ind-card-trigger');
        if (indCardTrigger) {
            openIndicadorFinalisticoDetails(indCardTrigger.getAttribute('data-atividade'));
            return;
        }

        // 9. Indicadores Finalísticos - Botão Voltar
        if (e.target.closest('#btn-voltar-ind-fin')) {
            openIndicadoresFinalisticosMainModal();
            return;
        }

        // 10. Indicadores Finalísticos - Paginação
        if (e.target.closest('#btn-prev-ind')) {
            if (currentIndicadorIndex > 0) { currentIndicadorIndex--; renderIndicadorTable(); }
            return;
        }
        if (e.target.closest('#btn-next-ind')) {
            if (currentIndicadorIndex < currentIndicadorItems.length - 1) { currentIndicadorIndex++; renderIndicadorTable(); }
            return;
        }

        // 11. Indicadores Estratégicos - Abrir Detalhe
        const indEstCardTrigger = e.target.closest('.ind-est-card-trigger');
        if (indEstCardTrigger) {
            openIndicadorEstrategicoDetails(indEstCardTrigger.getAttribute('data-ind'));
            return;
        }

        // 12. Indicadores Estratégicos - Botão Voltar
        if (e.target.closest('#btn-voltar-ind-est')) {
            openIndicadoresEstrategicosMainModal();
            return;
        }

    });

    window.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
}

// ==========================================
// LÓGICA DE COMPARTILHAMENTO SOCIAL E INSTAGRAM
// ==========================================
function initializeShare() {
    const shareButtons = document.querySelectorAll('.share-btn');
    
    shareButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const platform = this.getAttribute('data-share');
            const url = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(document.title || "Planejamento Estratégico Consórcios");

            if (platform === 'instagram') window.open(`https://www.instagram.com/coordconsorcio.bahia/`, '_blank');
            if (platform === 'facebook') window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
            if (platform === 'x') window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank');
            if (platform === 'whatsapp') window.open(`https://api.whatsapp.com/send?text=${title}%20-%20${url}`, '_blank');
            if (platform === 'linkedin') window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
            if (platform === 'email') window.open(`mailto:?subject=${title}&body=Confira este link:%20${url}`);
            if (platform === 'print') window.print();
            if (platform === 'copy') {
                navigator.clipboard.writeText(window.location.href).then(() => {
                    const originalHTML = this.innerHTML;
                    this.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="#28a745" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
                    setTimeout(() => { this.innerHTML = originalHTML; }, 2000);
                });
            }
        });
    });
}

// ==========================================
// LÓGICA DA BARRA DE PESQUISA (Filtro na Tela)
// ==========================================
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchableCards = document.querySelectorAll('.cv-modern-card, .mvv-modern-card, .pilar');

    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase().trim();
        searchableCards.forEach(card => {
            const text = card.textContent.toLowerCase();
            if (text.includes(searchTerm)) card.style.display = ''; 
            else card.style.display = 'none';
        });
    });
}

// ==========================================
// LÓGICA DE ACESSIBILIDADE (Fonte, Contraste e Atalhos)
// ==========================================
function initializeAccessibility() {
    let currentFontSize = 100;
    const htmlElement = document.documentElement;

    document.getElementById('btn-font-increase').addEventListener('click', () => {
        if (currentFontSize < 150) { 
            currentFontSize += 10;
            htmlElement.style.fontSize = currentFontSize + '%';
        }
    });

    document.getElementById('btn-font-decrease').addEventListener('click', () => {
        if (currentFontSize > 80) { 
            currentFontSize -= 10;
            htmlElement.style.fontSize = currentFontSize + '%';
        }
    });

    document.getElementById('btn-font-normal').addEventListener('click', () => {
        currentFontSize = 100;
        htmlElement.style.fontSize = '100%';
    });

    const btnContrast = document.getElementById('btn-contrast');
    btnContrast.addEventListener('click', toggleContrast);

    function toggleContrast() {
        document.body.classList.toggle('alto-contraste');
        const isContrast = document.body.classList.contains('alto-contraste');
        localStorage.setItem('altoContraste', isContrast);
    }

    if (localStorage.getItem('altoContraste') === 'true') {
        document.body.classList.add('alto-contraste');
    }

    document.addEventListener('keydown', function(e) {
        if (e.altKey) {
            switch(e.key) {
                case '1': e.preventDefault(); document.getElementById('conteudo-principal').focus(); break;
                case '2': e.preventDefault(); document.getElementById('menu-principal').focus(); break;
                case '3': e.preventDefault(); document.getElementById('searchInput').focus(); break;
                case '4': e.preventDefault(); document.getElementById('rodape').focus(); break;
                case '6': e.preventDefault(); toggleContrast(); break;
                case '7': 
                    e.preventDefault(); 
                    const vlibrasBtn = document.querySelector('[vw-access-button]');
                    if (vlibrasBtn) vlibrasBtn.click(); 
                    break;
            }
        }
    });
}