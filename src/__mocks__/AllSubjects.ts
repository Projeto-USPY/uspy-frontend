export default [
	{
		Name: 'Bacharelado em Ciências de Computação',
		Code: '55041',
		Subjects: [
			{
				Code: 'SSC0104',
				Name: 'Evolução Histórica da Computação e Aplicações',
				Description: 'Apresentar ao aluno um panorama da evolução da computação, identificando marcos históricos, personagens relevantes e suas contribuições. Motivar o aluno ingressante por meio da apresentação de desenvolvimentos e aplicações importantes da computação em diferentes áreas, relacionando-os aos fundamentos matemáticos a serem estudados ao longo do curso.',
				ClassCredits: 2,
				AssignCredits: 0,
				TotalHours: '30 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SCC0219',
				Name: 'Introdução ao Desenvolvimento Web',
				Description: 'Introduzir conhecimentos sobre desenvolvimento de aplicações Web envolvendo programação e manipulação de Bancos de Dados.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SCC0207',
				Name: 'Computadores e Sociedade I',
				Description: 'Conscientizar os estudantes de alguns dos problemas que surgem, para o indivíduo e sociedade, com a introdução dos computadores digitais. Espera-se, ainda, que o curso ajude os estudantes a tomarem ciência de suas futuras responsabilidades como profissionais em computação.',
				ClassCredits: 2,
				AssignCredits: 0,
				TotalHours: '30 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SME0123',
				Name: 'Estatística',
				Description: 'Ensinamento de idéias básicas da Estatística, seus alcances e limitações. Estabelecer uma linguagem comum entre o Engenheiro e o Estatístico. Exemplificar através das técnicas mais comuns de Estatística.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0354'
				],
				Optional: false
			},
			{
				Code: '7600109',
				Name: 'Laboratório de Física Geral I',
				Description: 'Familiarizar o aluno com a utilização de instrumentos de medidas mecânicas, organização de tabelas e gráficos com escala lineares e logarítmicas obtidos em Física I. Introduzir os fundamentos básicos da teoria de Erros e do Método dos Mínimos Quadrados. Utilizar os tópicos anteriores para a realização de práticas e confecção de relatórios sobre experimentos básicos de mecânica.',
				ClassCredits: 2,
				AssignCredits: 0,
				TotalHours: '30 h',
				Requirements: null,
				Optional: false
			},
			{
				Code: 'SME0102',
				Name: 'Seminários Avançados de Matemática Computacional I',
				Description: 'Fornecer ao aluno conceitos avançados de Matemática Computacional, permitindo que ele conheça algumas das principais pesquisas em desenvolvimento nos principais centros de pesquisa nacionais e internacionais. Tem também por objetivo motivar a Iniciação Científica e fortalecer a ligação da graduação com a pós-graduação do departamento, incentivando alunos de graduação a participarem da trilha.',
				ClassCredits: 3,
				AssignCredits: 0,
				TotalHours: '45 h',
				Requirements: [
					'SME0104'
				],
				Optional: true
			},
			{
				Code: 'SMA0355',
				Name: 'Cálculo III',
				Description: 'Familiarizar os alunos com os resultados fundamentais relativos a:  diferenciabilidade de  funções de várias variáveis, integrais múltiplas, integrais de linha, integrais de superfície.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0354'
				],
				Optional: false
			},
			{
				Code: 'SCC0910',
				Name: 'Tópicos Avançados em Ciências de Computação I',
				Description: 'Apresentar aos alunos ideias mais avançadas de tópicos em Ciências de Computação, incluindo teoria e prática.',
				ClassCredits: 3,
				AssignCredits: 2,
				TotalHours: '105 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SCC0200',
				Name: 'Informação Profissional e Tutoria Acadêmica em Ciências da Computação',
				Description: 'Ambientar o estudante com o curso de Bacharelado em Ciências da Computação, proporcionando uma visão global dos conteúdos do currículo e das várias áreas da Computação. Familiarizar o estudante com a rotina acadêmica, introduzindo e discutindo as diversas questões relacionadas, visando acompanhar o rendimento dos alunos, orientá-los sobre o andamento do curso e prover orientação sobre atividades complementares e sobre a carreira em computação, aumentando o aproveitamento dos alunos e diminuindo evasão e retenção no curso.',
				ClassCredits: 2,
				AssignCredits: 0,
				TotalHours: '30 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SCC0266',
				Name: 'Padrões de Projeto em Desenvolvimento Web',
				Description: 'Este curso tem por objetivo introduzir padrões de projeto para o desenvolvimento de aplicações Web envolvendo as etapas de navegação, processamento de formulários, banco de dados, autenticação e manipulação de exceções e erros.  Esses padrões são documentos que, formalmente, descrevem abordagens  para solucionar problemas envolvidos no projeto de sistemas Web.',
				ClassCredits: 3,
				AssignCredits: 1,
				TotalHours: '75 h',
				Requirements: [
					'SCC0219',
					'SSC0103'
				],
				Optional: true
			},
			{
				Code: 'SCC0218',
				Name: 'Algoritmos Avançados e Aplicações',
				Description: 'Permitir o contato do aluno com problemas clássicos e novos de computação que envolvam a análise de soluções variadas e os mais diversos paradigmas de programação.',
				ClassCredits: 2,
				AssignCredits: 2,
				TotalHours: '90 h',
				Requirements: [
					'SCC0216'
				],
				Optional: false
			},
			{
				Code: 'SSC0745',
				Name: 'Sistemas Computacionais de Tempo',
				Description: 'Introduzir o aluno aos aspectos conceituais e tecnológicos associados ao projeto e avaliação de sistemas computacionais com requisitos de tempo-real.',
				ClassCredits: 3,
				AssignCredits: 0,
				TotalHours: '45 h',
				Requirements: [
					'SSC0140'
				],
				Optional: true
			},
			{
				Code: 'SCC0215',
				Name: 'Organização de Arquivos',
				Description: 'Fornecer ao aluno noções de armazenamento em arquivos, técnicas de indexação, estrutura de dados e mecanismos eficientes para recuperação de dados em memória secundária.',
				ClassCredits: 3,
				AssignCredits: 2,
				TotalHours: '105 h',
				Requirements: [
					'SCC0201',
					'SCC0202'
				],
				Optional: false
			},
			{
				Code: 'SSC0109',
				Name: 'Prática em Lógica Digital',
				Description: 'Introduzir o aluno na prática de conceitos básicos de eletrônica e lógica digital, e técnicas de projeto de subsistemas digitais com ênfase em circuitos combinacionais.',
				ClassCredits: 2,
				AssignCredits: 1,
				TotalHours: '60 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SMA0354',
				Name: 'Cálculo II',
				Description: 'Familiarizar os alunos com os resultados fundamentais relativos a: integração definida, técnicas de integração, diferenciabilidade de funções de várias variáveis e extremos de funções de várias variáveis.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0353'
				],
				Optional: false
			},
			{
				Code: 'SMA0180',
				Name: 'Matemática Discreta I',
				Description: 'Dar aos alunos os conhecimentos básicos de Contagem e Combinatória, Relações, Teoria dos Números no contexto de Criptografia, Inferência e Prova, e Indução Matemática, habilitando-os a resolverem problemas da área de Ciências de Computação.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SCC0221',
				Name: 'Introdução à Ciência de Computação I',
				Description: 'Apresentar os conceitos básicos para o desenvolvimento de programas, utilizando uma linguagem de programação como apoio.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SCC0202',
				Name: 'Algoritmos e Estruturas de Dados I',
				Description: '\tFamiliarizar os estudantes com as várias estruturas da informação, buscando habilitá-los a contar com esses recursos no desenvolvimento de outras atividades de ciências de computação.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SCC0201'
				],
				Optional: false
			},
			{
				Code: 'SMA0356',
				Name: 'Cálculo IV',
				Description: 'Familiarizar os alunos com os resultados fundamentais relativos a: sequências e séries numéricas e de funções, série de Fourier e aplicações.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0354'
				],
				Optional: false
			},
			{
				Code: 'IAU0126',
				Name: 'Humanidades e Ciências Sociais',
				Description: 'Introduzir o aluno nas discussões sobre a questão da técnica nas sociedades contemporâneas, familiarizando-o com abordagens a partir da ótica das artes, das ciências sociais e da filosofia, visando aproximá-lo de modos de conhecimento diversos dos das ciências exatas.',
				ClassCredits: 2,
				AssignCredits: 0,
				TotalHours: '30 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SMA0300',
				Name: 'Geometria Analítica',
				Description: 'Visa familiarizar os alunos com a geometria analítica no plano e no espaço, com ênfase nos seus aspectos geométricos e suas traduções em coordenadas cartesianas',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SCC0222',
				Name: 'Laboratório de Introdução à Ciência de Computação I',
				Description: 'Implementar em laboratório as técnicas de programação apresentadas em Introdução à Ciência da Computação I, utilizando uma linguagem de programação estruturada.',
				ClassCredits: 2,
				AssignCredits: 2,
				TotalHours: '90 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SME0110',
				Name: 'Programação Matemática',
				Description: 'Capacitar o aluno a perceber, formular e resolver problemas de otimização linear com variáveis contínuas e inteiras.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SME0104'
				],
				Optional: false
			},
			{
				Code: 'SSC0903',
				Name: 'Computação de Alto Desempenho',
				Description: 'Transmitir aos alunos conceitos sobre computação de alto desempenho, considerando seus aspectos de hardware e software, com vistas ao desenvolvimento de aplicações paralelas.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SSC0140',
					'SSC0902'
				],
				Optional: false
			},
			{
				Code: 'SME0130',
				Name: 'Redes Complexas',
				Description: 'Introduzir os conceitos básicos da teoria das redes complexas com a apresentação das ferramentas fundamentais para a representação, modelagem e caracterização e classificação de redes complexas. Os conceitos serão aplicados na análise da Internet, da World Wide Web, da linguagem, da sociedade, de cadeias alimentares, das interações celulares e de malhas rodoviárias.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SCC0216',
					'SMA0353'
				],
				Optional: true
			},
			{
				Code: 'SSC0180',
				Name: 'Eletrônica para Computação',
				Description: 'Familiarizar os alunos com o funcionamento eletrônico das portas e lógicas com conceitos relacionados a dispositivos eletrônicos.',
				ClassCredits: 2,
				AssignCredits: 2,
				TotalHours: '90 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SSC0725',
				Name: 'Arquitetura de Software',
				Description: 'Oferecer aos alunos uma visão abrangente de arquitetura de software, com especial atenção aos processos para a construção, bem como métodos e técnicas para a representação e avaliação de arquiteturas de software. Discutir o impacto de arquitetura de software para a qualidade de sistemas de software. Oferecer uma visão e relevância do uso de ferramentas de apoio à construção, representação e avaliação de arquiteturas. Discutir as tendências futuras de pesquisa na área de Arquitetura de Software.',
				ClassCredits: 2,
				AssignCredits: 2,
				TotalHours: '90 h',
				Requirements: [
					'SSC0124'
				],
				Optional: true
			},
			{
				Code: 'SCC0260',
				Name: 'Interação Usuário',
				Description: 'Apresentar ao aluno conceitos fundamentais da interação entre o usuário e o computador. Capacitar o aluno a discutir os tópicos envolvidos em áreas atuais de pesquisa. Dar ao aluno experiência na avaliação de interfaces.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SSC0103'
				],
				Optional: true
			},
			{
				Code: 'SCC0286',
				Name: 'Mineração de redes complexas',
				Description: 'Apresentar aos alunos técnicas de análise e mineração de redes complexas.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SCC0230'
				],
				Optional: true
			},
			{
				Code: 'SME0808',
				Name: 'Séries Temporais e Aprendizado Dinâmico',
				Description: 'Apresentar os conceitos básicos da teoria de tratamento estatístico de séries temporais, preparar o aluno para análise, identificação e previsão de uma série temporal.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0123'
				],
				Optional: true
			},
			{
				Code: 'SCC0283',
				Name: 'Introdução à Web Semântica',
				Description: 'Introduzir o aluno às técnicas, teorias e modelos utilizados na Web Semântica, tornando-o apto a desenvolver recursos, ferramentas e aplicações computacionais que envolvam a aplicação desse conhecimento na resolução de problemas na área de aplicações Web. Capacitar o aluno para discutir criticamente tópicos pertinentes à área e propiciar-lhe subsídios para desenvolvimento de pesquisas.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SCC0216',
					'SMA0180'
				],
				Optional: true
			},
			{
				Code: 'SCC0240',
				Name: 'Bases de Dados',
				Description: 'Objetivos: Fornecer conceitos, técnicas e características básicas dos Sistemas Gerenciadores de Bases de Dados, tornando o aluno capaz de desenvolver sistemas de informação centrados na busca de informações armazenadas em bases de dados.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SCC0215'
				],
				Optional: false
			},
			{
				Code: 'SCC0216',
				Name: 'Modelagem Computacional em Grafos',
				Description: 'Ensinar ao aluno a importância de grafos em computação, mostrando seus conceitos fundamentais, principais estruturas de dados e aplicações resolvidas por meio de grafos.',
				ClassCredits: 2,
				AssignCredits: 1,
				TotalHours: '60 h',
				Requirements: [
					'SCC0202'
				],
				Optional: false
			},
			{
				Code: 'SCC0250',
				Name: 'Computação Gráfica',
				Description: '\tFornecer ao aluno familiarização com a computação gráfica, bem como conhecimento e prática dos conceitos básicos e aplicações.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SSC0103'
				],
				Optional: false
			},
			{
				Code: 'SSC0770',
				Name: 'Introdução ao Desenvolvimento de Jogos Eletrônicos',
				Description: 'Introduzir ao aluno os problemas e soluções computacionais no domínio de jogos eletrônicos, por meio de aulas, seminários e práticas em laboratório.  Familiarizar o aluno com os desafios tecnológicos e metodológicos do desenvolvimento de jogos eletrônicos. Aplicar conhecimento teórico e prático transdisciplinar de diferentes áreas do conhecimento. Capacitar o aluno em conceitos e técnicas essenciais ao desenvolvimento de aplicações de jogos eletrônicos em aplicações de entretenimento, científicas, terapêuticas e educacionais.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SSC0103'
				],
				Optional: true
			},
			{
				Code: 'SCC0300',
				Name: 'Projeto Empreendedor I',
				Description: 'Permitir que o aluno demonstre capacidade empreendedora, descrevendo e documentando projetos desenvolvidos por empresa formalmente constituída, da qual ele é sócio atuante.',
				ClassCredits: 4,
				AssignCredits: 10,
				TotalHours: '360 h ( Estágio: 300 h )',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SCC0272',
				Name: 'Introdução à Computação Bioinspirada',
				Description: 'Computação Bioinspirada é uma área de Pesquisa que utiliza técnicas de Computação com inspiração Biológica para a resolução de problemas práticos. Esta disciplina tem por objetivo o aprendizado de conceitos biológicos envolvidos com a computação bioinspirada, técnicas computacionais bioinspiradas e utilização destas técnicas em problemas práticos.',
				ClassCredits: 3,
				AssignCredits: 2,
				TotalHours: '105 h',
				Requirements: [
					'SCC0215',
					'SCC0216'
				],
				Optional: true
			},
			{
				Code: 'SME0823',
				Name: 'Modelos de Regressão e Aprendizado  Supervisionado II',
				Description: 'Apresentar conceitos introdutórios de modelos lineares generalizados em um enfoque computacional.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SME0123'
				],
				Optional: true
			},
			{
				Code: 'SSC0953',
				Name: 'Sistemas Open Source',
				Description: 'Introduzir o aluno aos fundamentos do paradigma Open Source, desenvolver competências para atuar em\nprojetos, desenvolvimento e implantação de sistemas computacionais abertos, incluindo aspectos técnicos,\nmetodológicos, legais, gerenciais e estratégicos presentes em desafios do mundo real.',
				ClassCredits: 2,
				AssignCredits: 2,
				TotalHours: '90 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SSC0154',
				Name: 'Seminários Avançados em Sistemas Distribuídos e Programação Concorrente I',
				Description: 'Fornecer ao aluno conceitos avançados em Sistemas Distribuídos e Programação Concorrente, permitindo que ele conheça algumas das principais pesquisas em desenvolvimento nos principais centros de pesquisa nacionais e internacionais. Tem também por objetivo motivar a Iniciação Científica e fortalecer a ligação da graduação com a pós-graduação do departamento, incentivando alunos de graduação a participarem da trilha.',
				ClassCredits: 3,
				AssignCredits: 0,
				TotalHours: '45 h',
				Requirements: [
					'SSC0140'
				],
				Optional: true
			},
			{
				Code: 'SSC0157',
				Name: 'Tópicos Avançados em Comunicação',
				Description: 'Apresentar alguns conceitos avançados importantes e seus impactos no projeto e implementação de aplicações de comunicação em geral, com ênfase em redes móveis, multimídia, segurança e gerenciamento de redes de computadores.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SSC0142'
				],
				Optional: true
			},
			{
				Code: 'SCC0225',
				Name: 'Laboratório de desenvolvimento de aplicações para dispositivos móveis',
				Description: 'Fornecer aos alunos  uma visão ampla e prática do desenvolvimento de aplicações para dispositivos móveis.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SSC0103'
				],
				Optional: true
			},
			{
				Code: 'SSC0142',
				Name: 'Redes de Computadores',
				Description: 'Apresentar os conceitos básicos em comunicação, redes de computadores e a internet.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SSC0140'
				],
				Optional: false
			},
			{
				Code: 'SSC0120',
				Name: 'Sistemas de Informação',
				Description: 'Dar ao estudante a compreensão do relacionamento existente entre os componentes técnicos de um Sistema de Informação e a Tecnologia de Informação com a estrutura, funções e políticas da Organização. Este curso objetiva colocar os sistemas de informação e a tecnologia de informação no contexto das organizações.',
				ClassCredits: 2,
				AssignCredits: 1,
				TotalHours: '60 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SSC0904',
				Name: 'Sistemas Computacionais Distribuídos',
				Description: 'Introduzir os fundamentos de sistemas computacionais distribuídos e suas técnicas de implementação. Aplicar os fundamentos e as técnicas de sistemas computacionais distribuídos em estudos de caso.',
				ClassCredits: 2,
				AssignCredits: 1,
				TotalHours: '60 h',
				Requirements: [
					'SSC0140',
					'SSC0142'
				],
				Optional: false
			},
			{
				Code: 'SCC0217',
				Name: 'Linguagens de Programação e Compiladores',
				Description: 'Dar ao aluno as noções básicas sobre linguagens de programação e técnicas de construção de compiladores para linguagens de programação de alto nível.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SCC0205'
				],
				Optional: false
			},
			{
				Code: 'SSC0124',
				Name: 'Análise e Projeto Orientados a Objetos',
				Description: 'Permitir ao aluno realizar a análise e projeto orientados a objetos de sistemas de software, seguindo o processo unificado.',
				ClassCredits: 2,
				AssignCredits: 1,
				TotalHours: '60 h',
				Requirements: [
					'SSC0103'
				],
				Optional: false
			},
			{
				Code: 'SCC0285',
				Name: 'Análise de Séries Temporais e Aplicações Computacionais',
				Description: 'Introduzir conceitos de modelagem de séries temporais utilizando ferramentas oriundas da Estatística e da área de Sistemas Dinâmicos.',
				ClassCredits: 2,
				AssignCredits: 2,
				TotalHours: '90 h',
				Requirements: [
					'SCC0202',
					'SMA0354',
					'SME0141'
				],
				Optional: true
			},
			{
				Code: 'SSC0115',
				Name: 'Tópicos Especiais em Hardware',
				Description: '\tAtualização do estudante na área de hardware.',
				ClassCredits: 3,
				AssignCredits: 0,
				TotalHours: '45 h',
				Requirements: [
					'SSC0112'
				],
				Optional: true
			},
			{
				Code: 'SCC0211',
				Name: 'Laboratório de Algoritmos Avançados II',
				Description: 'Implementar em laboratório as técnicas de programação apresentadas em Algoritmos Avançados para consolidação da teoria estudada.',
				ClassCredits: 3,
				AssignCredits: 2,
				TotalHours: '105 h',
				Requirements: [
					'SCC0210'
				],
				Optional: true
			},
			{
				Code: 'SSC0123',
				Name: 'Tópicos Especiais em Engenharia de Software',
				Description: '\tComplementar a formação dos alunos em Engenharia de Software abordando com mais profundidade tópicos atuais e relevantes nesta área.',
				ClassCredits: 3,
				AssignCredits: 0,
				TotalHours: '45 h',
				Requirements: [
					'SSC0130'
				],
				Optional: true
			},
			{
				Code: 'SCC0244',
				Name: 'Mineração a partir de Grandes Bases de Dados',
				Description: 'Apresentar conceitos, técnicas e ferramentas relevantes na área de descoberta de conhecimento em bases de dados e mineração de dados, sob a perspectiva da área de bases de dados, explorando com profundidade os aspectos associados a esta área.',
				ClassCredits: 3,
				AssignCredits: 0,
				TotalHours: '45 h',
				Requirements: [
					'SCC0230',
					'SCC0240'
				],
				Optional: true
			},
			{
				Code: 'SCC0296',
				Name: 'Atividades Acadêmicas Científicas, de Extensão e Culturais II',
				Description: 'Estimular a pró-atividade dos alunos, incentivando-os a desempenhar atividades extracurriculares de sua escolha.',
				ClassCredits: 1,
				AssignCredits: 1,
				TotalHours: '45 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SCC0290',
				Name: 'Projeto em Intercâmbio II',
				Description: 'O objetivo desta disciplina é o de permitir ao estudante que desenvolva atividades relevantes para sua formação em empresas ou universidades/centros de pesquisa durante período de intercâmbio oficialmente reconhecido.',
				ClassCredits: 4,
				AssignCredits: 10,
				TotalHours: '360 h ( Estágio: 300 h )',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SSC0108',
				Name: 'Prática em Sistemas Digitais',
				Description: 'Estender o conhecimento do aluno com práticas em técnicas digitais, com ênfase no projeto de circuitos sequenciais.',
				ClassCredits: 2,
				AssignCredits: 1,
				TotalHours: '60 h',
				Requirements: [
					'SSC0118'
				],
				Optional: false
			},
			{
				Code: 'SCC0302',
				Name: 'Projeto Empreendedor II',
				Description: 'Permitir que o aluno demonstre capacidade empreendedora, descrevendo e documentando projetos desenvolvidos por empresa formalmente constituída, da qual ele é sócio atuante.',
				ClassCredits: 4,
				AssignCredits: 10,
				TotalHours: '360 h ( Estágio: 300 h )',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SME0104',
				Name: 'Cálculo Numérico',
				Description: 'Familiarização do aluno com as técnicas computacionais da Álgebra Linear, da Álgebra e da Análise Matemática, através do estudo de métodos numéricos, com uso intensivo de computadores digitais.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0353',
					'SME0141'
				],
				Optional: false
			},
			{
				Code: 'SCC0273',
				Name: 'Robôs Móveis Inteligentes',
				Description: 'Introduzir ao aluno conceitos de robótica inteligente, apresentando as principais técnicas de controle inteligente, a eficiência destes métodos quando usados adequadamente, perspectivas futuras e aplicações de Robótica Móvel.',
				ClassCredits: 3,
				AssignCredits: 1,
				TotalHours: '75 h',
				Requirements: [
					'SCC0201'
				],
				Optional: true
			},
			{
				Code: 'SCC0257',
				Name: 'Ética e Legislação em Computação: Teoria e Prática',
				Description: 'Capacitar o aluno a discutir aspectos da legislação brasileira relativos à Tecnologia da Informação e Comunicação (TIC) , e a especificar projeto no qual esses aspectos estejam contemplados.',
				ClassCredits: 2,
				AssignCredits: 1,
				TotalHours: '60 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SCC0227',
				Name: 'Seminários em Computação I',
				Description: 'O objetivo principal desta disciplina é que o aluno crie o costume de participar de atividades extracurriculares que são de grande importância para sua formação e que ao mesmo tempo adquira conhecimentos e visões adicionais de diferentes áreas da computação',
				ClassCredits: 1,
				AssignCredits: 0,
				TotalHours: '15 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SSC0744',
				Name: 'Computação Distribuída',
				Description: 'Aprofundar os conhecimentos adquiridos na disciplina Sistemas Computacionais Distribuídos e Programação Concorrente, através de uma abordagem prática.',
				ClassCredits: 3,
				AssignCredits: 3,
				TotalHours: '135 h',
				Requirements: [
					'SSC0143',
					'SSC0150'
				],
				Optional: true
			},
			{
				Code: 'SCC0252',
				Name: 'Visualização Computacional',
				Description: 'A área de visualização computacional engloba o desenvolvimento e aplicação de técnicas gráficas para apresentação e entendimento dos mais variados conjuntos de dados. Domínios de aplicação variam desde diagramas explicativos e gráficos de barra até dados meteorológicos, médicos, científicos, coleções de registros, documentos, imagens, etc. O objetivo desta disciplina é fornecer uma introdução à área de Visualização de Dados. Pretende-se abordar o que é Visualização, quais os seus objetivos, algoritmos e aplicações. Serão descritas técnicas de uso geral disponíveis atualmente e os tipos de dados que são visualizados. Os principais algoritmos e estruturas de dados serão apresentados. Um sistema de visualização será introduzido e utilizado pelos alunos na confecção dos trabalhos práticos.',
				ClassCredits: 3,
				AssignCredits: 0,
				TotalHours: '45 h',
				Requirements: [
					'SSC0103'
				],
				Optional: true
			},
			{
				Code: 'SSC0171',
				Name: 'Tópicos Avançados em Sistemas Embarcados e Evolutivos',
				Description: 'Apresentar ao aluno conceitos relativamente avançados de Sistemas Embarcados e de Sistemas Evolutivos e aplicações deles em conjunto para otimização e projeto de sistemas em geral.',
				ClassCredits: 2,
				AssignCredits: 0,
				TotalHours: '30 h',
				Requirements: [
					'SCC0221',
					'SSC0112'
				],
				Optional: true
			},
			{
				Code: 'SCC0213',
				Name: 'Metodologia de Pesquisa em Computação',
				Description: 'Este curso tem por objetivo introduzir os alunos no domínio de elementos básicos da pesquisa científica possibilitando-lhes condições de desenvolver projetos acadêmicos de estudo na área de computação.',
				ClassCredits: 2,
				AssignCredits: 1,
				TotalHours: '60 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SCC0292',
				Name: 'Estágio Supervisionado II',
				Description: 'Para os alunos que optarem por um estágio em uma empresa, o objeto desta disciplina é permitir que o aluno se familiarize com o ambiente onde deverá exercer sua profissão. Além disso, dar-lhe uma visão mais abrangente da área e a possibilidade de trabalhar junto a uma equipe desenvolvendo um projeto real da prática profissional.',
				ClassCredits: 4,
				AssignCredits: 10,
				TotalHours: '360 h ( Estágio: 300 h )',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SSC0900',
				Name: 'Engenharia de Segurança',
				Description: 'Familiarizar o aluno com conceitos básicos de segurança computacional e algoritmos criptográficos.\nDevem ser tratados aspectos práticos.',
				ClassCredits: 2,
				AssignCredits: 1,
				TotalHours: '60 h',
				Requirements: [
					'SSC0142'
				],
				Optional: false
			},
			{
				Code: 'SSC0901',
				Name: 'Laboratório de Engenharia de Segurança',
				Description: 'Fornecer aos alunos uma visão ampla e prática sobre segurança computacional.',
				ClassCredits: 2,
				AssignCredits: 1,
				TotalHours: '60 h',
				Requirements: [
					'SSC0900'
				],
				Optional: true
			},
			{
				Code: 'SCC0270',
				Name: 'Redes Neurais e Aprendizado Profundo',
				Description: 'Apresentar ao aluno os conceitos básicos de Redes Neurais Artificiais e os principais modelos existentes. Analisar o comportamento destes modelos, suas capacidades fundamentais e limitações, possibilitando a utilização destas técnicas na resolução de problemas práticos.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SCC0230'
				],
				Optional: true
			},
			{
				Code: 'SSC0723',
				Name: 'Sistemas Colaborativos: Fundamentos e Aplicações',
				Description: 'Oferecer os fundamentos para o desenvolvimento e a aplicação de sistemas colaborativos. Ao final da disciplina o aluno deverá ser capaz de analisar e desenvolver sistemas colaborativos utilizando o estado da arte da tecnologia vigente. Além disto deverá ser capaz de aplicar os conceitos de sistemas colaborativos em diferentes situações e implantar soluções que viabilizem o trabalho em grupo. Espera-se também que o aluno trabalhe as habilidades de especificar, prototipar, analisar, projetar, implementar, testar e avaliar sistemas colaborativos em situações reais de uso. O aluno também deve ser capaz de realizar pesquisas científicas dentro desta temática.',
				ClassCredits: 2,
				AssignCredits: 0,
				TotalHours: '30 h',
				Requirements: [
					'SCC0201'
				],
				Optional: true
			},
			{
				Code: 'SSC0724',
				Name: 'Sistemas Educacionais Avançados',
				Description: 'Oferecer os fundamentos pedagógicos e computacionais para o desenvolvimento sistemas educacionais avançados. Espera-se que o aluno obtenha conhecimentos sobre como as diversas áreas da computação contribuem para resolver problemas educacionais (e.g. geração de conteúdo, tutoria inteligentes e avaliação automática) e como a área da educação pode favorecer o avanço da pesquisa e desenvolvimento na área de computação (e.g. novos algoritmos, melhores interfaces e técnicas de interação humano-computador, etc). Ao final da disciplina o aluno deverá ser capaz de mapear e implementar aspectos instrucionais e pedagógocos em sistemas computacionais. O aluno também será capaz de analisar e desenvolver sistemas educacionais e objetos de aprendizagem utilizando o estado da arte da tecnologia vigente para diferentes domínios do conhecimento (e.g. matemática, português ou computação).  Espera-se também que o aluno trabalhe as habilidades de especificar, prototipar, analisar, projetar, implementar, testar e avaliar sistemas educacionais avançados em situações reais de uso. O aluno também deve ser capaz de realizar pesquisas científicas dentro desta temática.',
				ClassCredits: 3,
				AssignCredits: 0,
				TotalHours: '45 h',
				Requirements: [
					'SCC0201'
				],
				Optional: true
			},
			{
				Code: 'SCC0243',
				Name: 'Arquitetura de Sistemas Gerenciadores de Bases de Dados',
				Description: 'Objetivo: Fornecer conceitos, técnicas e características mais avançadas dos Sistemas Gerenciadores de Bases de Dados, complementando o conteúdo ministrado nas disciplinas básicas de bases de dados. Oferecer o conhecimento necessário ao profissional que se envolva em atividade de administração e gerenciamento de bases de dados.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SCC0240'
				],
				Optional: true
			},
			{
				Code: 'SCC0282',
				Name: 'Recuperação da Informação',
				Description: 'Apresentar os fundamentos da recuperação de informação, abordando questões relevantes à arquiteturas, dados e informação, análise de conteúdo, busca textual, indexação, processamento de texto e avaliação de sistemas de recuperação. Analisar e desenvolver ferramentas e aplicações, como as presentes em sistemas atuais, aplicando a teoria de modo prático.',
				ClassCredits: 2,
				AssignCredits: 1,
				TotalHours: '60 h',
				Requirements: [
					'SCC0202'
				],
				Optional: true
			},
			{
				Code: 'SSC0158',
				Name: 'Computação em Nuvem e Arquitetura Orientadas a Serviços',
				Description: 'Ensinar aos alunos aspectos teóricos e práticos do desenvolvimento de aplicações distribuídas segundo o modelo de computação em nuvem, focando aspectos de virtualização, arquiteturas orientadas a serviços, escalonamento e interfaces de programação para computação em nuvem.',
				ClassCredits: 2,
				AssignCredits: 1,
				TotalHours: '60 h',
				Requirements: [
					'SCC0202',
					'SSC0140',
					'SSC0142'
				],
				Optional: true
			},
			{
				Code: 'SCC0261',
				Name: 'Multimídia',
				Description: 'Introdução aos conceitos de multimídia e investigação dos problemas envolvidos com o suporte computacional a dados de mídia e de aplicações multimídia.',
				ClassCredits: 2,
				AssignCredits: 0,
				TotalHours: '30 h',
				Requirements: [
					'SCC0201'
				],
				Optional: true
			},
			{
				Code: 'SMA0353',
				Name: 'Cálculo I',
				Description: 'Fazer com que os alunos familiarizem-se com os conceitos de limite, continuidade, diferenciabilidade e primitivas de funções de uma variável.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SCC0291',
				Name: 'Estágio Supervisionado I',
				Description: 'Para os alunos que optarem por um estágio em uma empresa, o objeto desta disciplina é permitir que o aluno se familiarize com o ambiente onde deverá exercer sua profissão. Além disso, dar-lhe uma visão mais abrangente da área e a possibilidade de trabalhar junto a uma equipe desenvolvendo um projeto real da prática profissional.',
				ClassCredits: 4,
				AssignCredits: 10,
				TotalHours: '360 h ( Estágio: 300 h )',
				Requirements: [],
				Optional: false
			},
			{
				Code: '5500002',
				Name: 'Seminários em Gestão Organizacional',
				Description: 'O objetivo principal desta disciplina é abordar tópicos variados de gestão organizacional, de forma generalista, apresentando aos alunos uma visão geral das várias frentes da gestão, contribuindo para sua formação técnica e humanística em seu futuro profissional.',
				ClassCredits: 1,
				AssignCredits: 1,
				TotalHours: '45 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SCC0276',
				Name: 'Aprendizado de Máquina',
				Description: 'Apresentar os aspectos fundamentais e principais algoritmos de aprendizado de máquina, que investiga técnicas para desenvolver algoritmos capazes de aprender, ou melhorar seu desempenho, utilizando exemplos de situações previamente observadas. Serão investigados algoritmos que seguem diferentes paradigmas, incluindo algoritmos baseados em procura (algoritmos de indução de arvores de decisão e de conjuntos de regras, redes neurais artificiais (perceptron e multilayer perceptron), modelos probabilísticos (regressão logística e naive Bayes) e algoritmos baseados em distancia. Além do estudo dos algoritmos de aprendizado baseados em diferentes paradigmas, será estudada a realização experimentos com desses algoritmos para entender  como eles induzem conhecimento utilizando aplicações reais.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SCC0230'
				],
				Optional: true
			},
			{
				Code: 'SCC0251',
				Name: 'Processamento de Imagens',
				Description: 'Fornecer ao aluno os subsídios necessários para a manipulação de imagens via computador, indicando as áreas de aplicação e as principais técnicas utilizadas.',
				ClassCredits: 3,
				AssignCredits: 1,
				TotalHours: '75 h',
				Requirements: [
					'SCC0201',
					'SCC0202'
				],
				Optional: true
			},
			{
				Code: 'SCC0295',
				Name: 'Atividades Acadêmicas Científicas, de Extensão e Culturais I',
				Description: 'Estimular a pró-atividade dos alunos, incentivando-os a desempenhar atividades extracurriculares de sua escolha.',
				ClassCredits: 1,
				AssignCredits: 1,
				TotalHours: '45 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SSC0130',
				Name: 'Engenharia de Software',
				Description: 'Oferecer uma visão geral do processo de desenvolvimento de software e dos métodos e técnicas que podem ser utilizadas em cada fase do ciclo de vida do software.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SSC0124'
				],
				Optional: false
			},
			{
				Code: 'SSC0643',
				Name: 'Avaliação de Desempenho de Sistemas Computacionais',
				Description: 'Estudo e aplicação de diferentes técnicas de modelagem e ferramentas para avaliação de desempenho de sistemas computacionais.',
				ClassCredits: 3,
				AssignCredits: 1,
				TotalHours: '75 h',
				Requirements: [
					'SSC0114'
				],
				Optional: true
			},
			{
				Code: 'SSC0741',
				Name: 'Projeto e Implementação de Sistemas Embarcados I',
				Description: 'Destacar metodologias que favoreçam o projeto de sistemas embarcados em tempo real adequados à complexidade atual das aplicações, que inclui conceitos como o re-uso de projetos (core), verificação formal e implementação de software.',
				ClassCredits: 3,
				AssignCredits: 3,
				TotalHours: '135 h',
				Requirements: [
					'SSC0740'
				],
				Optional: true
			},
			{
				Code: 'SCC0230',
				Name: 'Inteligência Artificial',
				Description: 'Apresentar ao aluno as idéias fundamentais da Inteligência Artificial e algumas características relacionadas à implementação desse tipo de sistemas.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SCC0201'
				],
				Optional: false
			},
			{
				Code: 'SSC0141',
				Name: 'Prática em Sistemas Operacionais',
				Description: 'Exercitar os conceitos básicos abordados em Sistemas Operacionais I e introduzir o aluno aos aspectos técnicos e de implementação relativos à teoria estudada na disciplina anterior.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SSC0140'
				],
				Optional: true
			},
			{
				Code: 'SME0822',
				Name: 'Análise Multivariada e Aprendizado Não Supervisionado',
				Description: 'Estudo de métodos multivariados de análise de dados e de aprendizado não supervisionado. Análise de variância multivariada. Análise de componentes principais. Análise fatorial. Análise de Agrupamentos Análise de correlação canônica. Análise de correspondência.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0123'
				],
				Optional: true
			},
			{
				Code: 'SCC0911',
				Name: 'Tópicos Avançados em Ciências de Computação II',
				Description: 'Apresentar aos alunos ideias mais avançadas de tópicos em Ciências de Computação, incluindo teoria e prática.',
				ClassCredits: 3,
				AssignCredits: 2,
				TotalHours: '105 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SSC0152',
				Name: 'Administração e Gerenciamento de Redes',
				Description: 'Treinamento do aluno em aspectos de especificação, instalação, e administração de sistemas computacionais baseados em redes de computadores.',
				ClassCredits: 3,
				AssignCredits: 2,
				TotalHours: '105 h',
				Requirements: [
					'SSC0142'
				],
				Optional: true
			},
			{
				Code: 'SME0806',
				Name: 'Estatística Computacional',
				Description: 'Estudar técnicas computacionais utilizadas na solução de problemas de Estatística.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SME0123'
				],
				Optional: true
			},
			{
				Code: 'SCC0220',
				Name: 'Laboratório de Introdução à Ciência da Computação II',
				Description: 'Implementar e experimentar em laboratório as técnicas e os algoritmos introduzidos aos alunos nas disciplinas de programação cursadas em conjunto. Preparar o aluno para registro de medidas em algoritmos para confecção de relatórios sobre experimentos realizados com os algoritmos implementados e para resolução de problemas de programação.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SCC0201'
				],
				Optional: true
			},
			{
				Code: 'SCC0281',
				Name: 'Recursos Computacionais de Tecnologia Assistiva',
				Description: 'Propiciar ao aluno ferramental para projetar, desenvolver e avaliar aplicações e serviços de software como recursos computacionais de Tecnologia Assistiva.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SSC0130'
				],
				Optional: true
			},
			{
				Code: 'SSC0128',
				Name: 'Gerência de Projetos',
				Description: '\tApresentar conhecimentos, habilidades e técnicas utilizadas na iniciação, planejamento, execução, controle e encerramento de um projeto.',
				ClassCredits: 3,
				AssignCredits: 1,
				TotalHours: '75 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SSC0160',
				Name: 'Modelagem e Simulação de Sistemas Computacionais',
				Description: 'O objetivo do curso é introduzir aos alunos os conceitos fundamentais de modelagem e simulação como uma ferramenta para a resolução de problemas na ciência em geral, e na área de ciência da computação em específico.',
				ClassCredits: 3,
				AssignCredits: 2,
				TotalHours: '105 h',
				Requirements: [
					'SCC0202',
					'SSC0140'
				],
				Optional: true
			},
			{
				Code: 'SSC0119',
				Name: 'Prática em Organização de Computadores',
				Description: 'Desenvolver projetos práticos nas áreas de arquiteturas básicas de processadores, de microcomputadores e de linguagens de máquina em laboratório.',
				ClassCredits: 2,
				AssignCredits: 1,
				TotalHours: '60 h',
				Requirements: [
					'SSC0112'
				],
				Optional: true
			},
			{
				Code: 'SME0141',
				Name: 'Álgebra Linear e Equações Diferenciais',
				Description: 'Familiarizar o aluno com as técnicas de álgebra Linear das Equações Diferenciais   Ordinárias Lineares e suas inter-relações.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SCC0280',
				Name: 'Acessibilidade em Sistemas Computacionais',
				Description: 'Fornecer aos alunos  uma visão integrada (em termos de legislação, dos recursos de Tecnologia Assistiva, e os princípios de design inclusivo)  sobre a questão de acessibilidade como um conceito fundamental  ao desenvolvimento dos sistemas computacionais.',
				ClassCredits: 2,
				AssignCredits: 1,
				TotalHours: '60 h',
				Requirements: [
					'SSC0130'
				],
				Optional: true
			},
			{
				Code: 'SSC0140',
				Name: 'Sistemas Operacionais I',
				Description: 'Introduzir o estudante nos conceitos e princípios básicos dos sistemas operacionais de computadores digitais.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SCC0202',
					'SSC0112'
				],
				Optional: false
			},
			{
				Code: 'SSC0721',
				Name: 'Teste e Inspeção de Software',
				Description: 'Fornecer uma visão geral da área de Verificação, Validação e Teste de Software - VV\u0026T, com ênfase em estratégias, técnicas e critérios de teste de software e ferramentas associadas que podem ser aplicados na construção de software.',
				ClassCredits: 2,
				AssignCredits: 1,
				TotalHours: '60 h',
				Requirements: [
					'SSC0130'
				],
				Optional: true
			},
			{
				Code: 'SSC0740',
				Name: 'Sistemas Embarcados',
				Description: 'Introduzir os Sistemas Embarcados e as suas áreas de aplicação. Integração entre sistemas de comunicação, multimídia e processamento incluindo dados em RF (radio freqüência) que continuam a expandir a complexidade dos sistemas embarcados, destacando exemplos existentes. Conceituar Sistemas DES (Distributed Embedded System) com grande número de elementos possuindo diferentes funcionalidades sendo considerados nós inteligentes, atuando através de sensores e atuadores, que configuram sistemas cada vez mais complexos e mais necessários às aplicações recentes.',
				ClassCredits: 3,
				AssignCredits: 2,
				TotalHours: '105 h',
				Requirements: [
					'SSC0112'
				],
				Optional: true
			},
			{
				Code: 'SCC0246',
				Name: 'Recuperação de Dados por Conteúdo',
				Description: 'Fornecer ao aluno familiarização com técnicas de recuperação de dados complexos, bem como conhecimento e prática dos conceitos básicos e aplicações.',
				ClassCredits: 3,
				AssignCredits: 2,
				TotalHours: '105 h',
				Requirements: [
					'SCC0241',
					'SCC0261'
				],
				Optional: true
			},
			{
				Code: 'SCC0633',
				Name: 'Processamento de Linguagem Natural',
				Description: 'Introduzir o aluno às técnicas e teorias de Inteligência Artificial aplicada ao Processamento de Linguagem Natural.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SCC0230'
				],
				Optional: true
			},
			{
				Code: 'SME0121',
				Name: 'Processos Estocásticos',
				Description: '\tFornecer ao aluno base teórica em Processos Estocásticos para que possa apreciar suas aplicações, principalmente voltadas às áreas de Redes de Computadores, análise de Sistemas, etc, com consistência e incluindo métodos de Simulação Estocásticas.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0123'
				],
				Optional: false
			},
			{
				Code: 'SSC0103',
				Name: 'Programação Orientada a Objetos',
				Description: 'Introduzir os conceitos de programação orientada a objetos e metodologia de desenvolvimento de software segundo esse paradigma.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SCC0202'
				],
				Optional: false
			},
			{
				Code: 'SSC0748',
				Name: 'Redes Móveis',
				Description: 'Apresentar os conceitos básicos em mobilidade, tecnologias de redes móveis sem fio e em projetos de sistemas baseados em localização.',
				ClassCredits: 3,
				AssignCredits: 2,
				TotalHours: '105 h',
				Requirements: [
					'SSC0142'
				],
				Optional: true
			},
			{
				Code: 'SSC0951',
				Name: 'Desenvolvimento de Código Otimizado',
				Description: 'Proporcionar um aprendizado mais aprofundado sobre desenvolvido de código, focando nos requisitos de desempenho, segurança e confiabilidade.',
				ClassCredits: 2,
				AssignCredits: 2,
				TotalHours: '90 h',
				Requirements: [
					'SCC0201',
					'SSC0902'
				],
				Optional: true
			},
			{
				Code: 'SCC0277',
				Name: 'Competições de Ciências de Dados',
				Description: 'Complementar a formação dos alunos de graduação em Computação com interesse em utilizar técnicas de Ciência de Dados, em particular, Aprendizado de Máquina e Mineração de Dados, em problemas reais, utilizando para isso as técnicas e ferramentas vistas em disciplinas relacionadas.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SCC0230'
				],
				Optional: true
			},
			{
				Code: 'SSC0147',
				Name: 'Tópicos Especiais em Sistemas de Computação I',
				Description: '\tAtualização do estudante em tópicos atuais da área de Sistemas de Computação.',
				ClassCredits: 3,
				AssignCredits: 0,
				TotalHours: '45 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SCC0210',
				Name: 'Laboratório de Algoritmos Avançados I',
				Description: 'Resolucao de exercícios, buscando revisar/aprimorar habilidade no desenvolvimento rápido de algoritmos avançados, desenvolver o trabalho em grupo e assimilar dinâmica e formato de olimpiadas de Computação',
				ClassCredits: 3,
				AssignCredits: 2,
				TotalHours: '105 h',
				Requirements: [
					'SCC0201',
					'SCC0202'
				],
				Optional: true
			},
			{
				Code: 'SCC0293',
				Name: 'Projeto de Graduação I',
				Description: 'Para os alunos que optarem por projeto de graduação, o objetivo desta disciplina é o de desenvolver no estudante o espírito, a mentalidade de pesquisa e a capacidade de síntese. Permitir o desenvolvimento de uma visão mais global das áreas de Ciência de Computação ou Matemática Computacional através da elaboração de um projeto assistido por docente.',
				ClassCredits: 4,
				AssignCredits: 10,
				TotalHours: '360 h ( Estágio: 300 h )',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SCC0294',
				Name: 'Projeto de Graduação II',
				Description: 'Para os alunos que optarem por projeto de graduação, o objetivo desta disciplina é o de desenvolver no estudante o espírito, a mentalidade de pesquisa e a capacidade de síntese. Permitir o desenvolvimento de uma visão mais global das áreas de Ciência de Computação ou Matemática Computacional através da elaboração de um projeto assistido por docente.',
				ClassCredits: 4,
				AssignCredits: 10,
				TotalHours: '360 h ( Estágio: 300 h )',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SCC0289',
				Name: 'Projeto em Intercâmbio I',
				Description: 'O objetivo desta disciplina é o de permitir ao estudante que desenvolva atividades relevantes para sua formação em empresas ou universidades/centros de pesquisa durante período de intercâmbio oficialmente reconhecido.',
				ClassCredits: 4,
				AssignCredits: 10,
				TotalHours: '360 h ( Estágio: 300 h )',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SSC0714',
				Name: 'Robôs Móveis Autônomos',
				Description: 'Fornecer o conteúdo teórico-prático básico relativos à Robótica Móvel Autônoma, visando o projeto de sistemas de controle de navegação. Será dada ênfase à implementação de modelos inteligentes de controle. Os alunos irão realizar trabalhos práticos de implementação de algoritmos de controle inteligente de robôs móveis autônomos reais e simulados, em tarefas de navegação, coleta de objetos e planejamento de trajetória.',
				ClassCredits: 2,
				AssignCredits: 2,
				TotalHours: '90 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SSC0950',
				Name: 'Projeto e Desenvolvimento de Software de Sistema',
				Description: 'Introduzir o aluno aos fundamentos do desenvolvimento de software de sistemas, desafios técnicos, metodológicos e estado da arte.',
				ClassCredits: 2,
				AssignCredits: 2,
				TotalHours: '90 h',
				Requirements: [
					'SSC0140'
				],
				Optional: true
			},
			{
				Code: 'SCC0233',
				Name: 'Aplicações de Aprendizado de Máquina e Mineração de Dados',
				Description: 'Familiarizar os alunos com a aplicação técnicas de Aprendizado de Máquina e Mineração de Dados em problemas reais, utilizando para isso as técnicas e ferramentas vistas em disciplinas relacionadas.',
				ClassCredits: 3,
				AssignCredits: 2,
				TotalHours: '105 h',
				Requirements: [
					'SCC0230'
				],
				Optional: true
			},
			{
				Code: 'SSC0952',
				Name: 'Internet das Coisas',
				Description: 'Transmitir aos alunos conceitos sobre Internet das Coisas, considerando seus aspectos relacionados ao hardware e ao software, com vistas ao desenvolvimento de aplicações inovadoras para a resolução de problemas do mundo real.',
				ClassCredits: 2,
				AssignCredits: 2,
				TotalHours: '90 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SSC0118',
				Name: 'Sistemas Digitais',
				Description: 'Estender o conhecimento do aluno em técnicas digitais, com ênfase no projeto de circuitos sequenciais.',
				ClassCredits: 2,
				AssignCredits: 1,
				TotalHours: '60 h',
				Requirements: [
					'SSC0117'
				],
				Optional: false
			},
			{
				Code: '7600105',
				Name: 'Física Básica I',
				Description: 'Ensinar aos estudantes os conceitos básicos da Mecânica Newtoniana e os métodos da Física como ciência. Capacitá-los a formular e resolver problemas referentes ao movimento de corpos e sistemas de corpos sob ação de forças.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0353'
				],
				Optional: false
			},
			{
				Code: 'SCC0241',
				Name: 'Laboratório de Bases de Dados',
				Description: 'Desenvolvimento de aplicações práticas utilizando Sistemas Gerenciadores de Bases de Dados relacionais e ferramentas de apoio. Consolidação da teoria desenvolvida na disciplina SCC0240 Bases de Dados.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SCC0240'
				],
				Optional: true
			},
			{
				Code: 'SCC0229',
				Name: 'Seminários em Computação III',
				Description: 'O objetivo principal desta disciplina é que o aluno crie o costume de participar de atividades extracurriculares que são de grande importância para sua formação e que ao mesmo tempo adquira conhecimentos e visões adicionais de diferentes áreas da computação.',
				ClassCredits: 1,
				AssignCredits: 0,
				TotalHours: '15 h',
				Requirements: [
					'SCC0228'
				],
				Optional: true
			},
			{
				Code: 'SCC0245',
				Name: 'Processamento Analítico de Dados',
				Description: 'Apresentar conceitos, técnicas e ferramentas relevantes na área de processamento analítico de dados.',
				ClassCredits: 3,
				AssignCredits: 2,
				TotalHours: '105 h',
				Requirements: [
					'SCC0240'
				],
				Optional: true
			},
			{
				Code: 'SCC0271',
				Name: 'Introdução à Bioinformática',
				Description: '\tO aprendizado dos conceitos básicos, principais técnicas, perspectivas futuras e aplicações de Bioinformática.',
				ClassCredits: 3,
				AssignCredits: 2,
				TotalHours: '105 h',
				Requirements: [
					'SCC0215',
					'SCC0216'
				],
				Optional: true
			},
			{
				Code: 'SSC0902',
				Name: 'Organização e Arquitetura de Computadores',
				Description: 'Abordar conhecimentos atuais sobre a organização e arquitetura de computadores digitais. Estudar aspectos funcionais, estruturais e de desempenho de processadores, memórias, e do subsistema de entrada/saída e suas redes de interconexão. Compreender técnicas de otimização e de paralelização do processador, abaixo do nível de arquitetura do conjunto de instruções. Aprender a codificação de programas em linguagem de montagem.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SSC0118'
				],
				Optional: false
			},
			{
				Code: 'SSC0713',
				Name: 'Sistemas Evolutivos e Aplicados à Robótica',
				Description: 'Introduzir conceitos básicos de sistemas evolutivos e suas aplicações em problemas do mundo real com destaque para área de robótica. Desenvolver habilidades de modelagem de sistemas de variada complexidade em que a robótica se aplica: sistemas típicos de engenharia, biológicos e sociais. A disciplina busca que os alunos adquiram capacidade de construir soluções eficientes para problemas complexos em robótica, bem como em áreas correlacionadas.',
				ClassCredits: 2,
				AssignCredits: 2,
				TotalHours: '90 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SCC0254',
				Name: 'Introdução à Geometria Computacional: Algoritmos e Aplicações',
				Description: 'Apresentar conceitos e métodos básicos de Geometria Computacional, com foco nos algoritmos, estruturas de dados e em aplicações dos métodos em computação gráfica, robótica e programação competitiva. A disciplina deverá abordar como a Geometria Computacional permite modelar problemas de computação gráfica e ainda apresentar aspectos práticos da implementação de algoritmos comumente estudados em competições de programação.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SCC0205',
				Name: 'Teoria da Computação e Linguagens Formais',
				Description: '\tDar ao aluno noção formal de algoritmo, computabilidade e do problema de decisão, de modo a deixá-lo consciente das limitações da ciência da computação. Aparelhá-lo com as ferramentas de modo a habilitá-lo a melhor enfrentar a solução de problemas com o auxílio do computador. Dar subsídios para o aluno poder definir linguagens de programação, isto é, sua sintaxe e semântica, através do estudo das gramáticas formais.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SCC0201'
				],
				Optional: false
			},
			{
				Code: 'SSC0117',
				Name: 'Introdução à Lógica Digital',
				Description: 'Introduzir ao aluno conceitos básicos de eletrônica elógica Digital, técnicas de projeto de subsistemas digitais com ênfase em circuitos combinacionais.',
				ClassCredits: 2,
				AssignCredits: 1,
				TotalHours: '60 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SCC0209',
				Name: 'Empreendedores em Informática',
				Description: '\tDesenvolver a capacidade empreendedora dos alunos, estimulando e dando ferramentas àqueles cuja vocação profissional estiver direcionada à criação de um empreendimento em informática.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SSC0720',
				Name: 'Engenharia de Software para Sistemas Embarcados',
				Description: 'Oferecer uma visão geral do processo de desenvolvimento de software embarcado, enfatizando as características dessa categoria de software.',
				ClassCredits: 3,
				AssignCredits: 1,
				TotalHours: '75 h',
				Requirements: [
					'SSC0130'
				],
				Optional: true
			},
			{
				Code: 'SSC0726',
				Name: 'Reuso de Software',
				Description: 'Aprofundar os conhecimentos em conceitos relacionados ao reúso de software, bem como metodologias, tecnologias e ferramentas de apoio ao reuso.',
				ClassCredits: 2,
				AssignCredits: 1,
				TotalHours: '60 h',
				Requirements: [
					'SSC0130'
				],
				Optional: true
			},
			{
				Code: 'SCC0275',
				Name: 'Introdução à Ciência de Dados',
				Description: 'Complementar a formação dos alunos de graduação em Computação com interesse em conhecer os principais conceitos e técnicas da área de Ciência de Dados. O curso visa prover teoria e prática a fim de que os alunos possam aplicar as novas técnicas e ferramentas estudadas em problemas reais.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SCC0284',
				Name: 'Sistemas de Recomendação',
				Description: 'Apresentar os fundamentos de sistemas de recomendação, abordando questões relevantes a arquiteturas, dados e informação, análise de conteúdo, técnicas e avaliação de sistemas de recomendação. Analisar e desenvolver ferramentas e aplicações, como as presentes em sistemas atuais, aplicando a teoria de modo prático.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SCC0202'
				],
				Optional: true
			},
			{
				Code: 'SSC0159',
				Name: 'Tópicos Avançados em Computação de Alto Desempenho',
				Description: 'Ensinar aos alunos tópicos avançados da computação de alto desempenho, considerando arquiteturas paralelas avançadas e ferramentas de desenvolvimento de programas concorrentes. Relacionar aspectos teóricos e práticos durante o desenvolvimento de aplicações paralelas com qualidade e desempenho.',
				ClassCredits: 3,
				AssignCredits: 0,
				TotalHours: '45 h',
				Requirements: [
					'SSC0143'
				],
				Optional: true
			},
			{
				Code: 'SCC0287',
				Name: 'Mineração de Dados Não Estruturados',
				Description: 'Apresentar ao aluno os princípios gerais da mineração de dados não estruturados e fornecer uma visão geral dos problemas relacionados aos diferentes tipos de dados não estruturados e as soluções disponíveis.',
				ClassCredits: 3,
				AssignCredits: 1,
				TotalHours: '75 h',
				Requirements: [
					'SCC0230'
				],
				Optional: true
			},
			{
				Code: 'SSC0712',
				Name: 'Programação de Robôs Móveis',
				Description: 'Introduzir conceitos básicos sobre hardware e software de robôs móveis. Familiarizar o aluno com os sensores e atuadores mais comuns utilizados na robótica móvel. Estudo de arquiteturas e softwares de controle de robôs móveis. Implementação em laboratório de algoritmos de navegação para a solução de problemas clássicos da robótica móvel.',
				ClassCredits: 2,
				AssignCredits: 3,
				TotalHours: '120 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SCC0201',
				Name: 'Introdução à Ciência de Computação II',
				Description: 'Apresentação de conceitos avançados que levem o aluno a uma maturidade em programação estruturada, com conhecimento de uma linguagem de programação com recursos avançados. Aprendizado de técnicas para construção de algoritmos e para análise da complexidade de algoritmos. Aprendizado de algoritmos clássicos de ordenação e busca em memória interna. Prática de Programação.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SCC0221'
				],
				Optional: false
			},
			{
				Code: 'SSC0954',
				Name: 'Infraestrutura para Computação de Alto Desempenho e Sistemas Distribuídos',
				Description: 'Desenvolver nos alunos habilidades e competências para criação e manutenção de uma infraestrutura básica para computação distribuída/paralela, aplicando na prática conceitos de arquitetura de computadores, sistemas operacionais, redes de computadores, computação de alto desempenho e sistemas distribuídos.',
				ClassCredits: 2,
				AssignCredits: 2,
				TotalHours: '90 h',
				Requirements: [
					'SSC0142'
				],
				Optional: true
			},
			{
				Code: 'SSC0715',
				Name: 'Sensores Inteligentes',
				Description: 'Capacitar os alunos a lidar com a integração de conceitos teórico-práticos para a utilização de sensores e atuadores aplicados à robótica. Serão abordadas técnicas de fusão de sensores, extração de características, filtragem e classificação de dados e técnicas de tomada de decisão.',
				ClassCredits: 2,
				AssignCredits: 3,
				TotalHours: '120 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SCC0231',
				Name: 'Introdução a Sistemas Inteligentes',
				Description: 'Fornecer uma visão mais detalhada dos sistemas de Inteligência Artificial, enfatizando técnicas e métodos de aquisição e representação de conhecimento.',
				ClassCredits: 3,
				AssignCredits: 1,
				TotalHours: '75 h',
				Requirements: [
					'SCC0230'
				],
				Optional: true
			},
			{
				Code: 'SCC0228',
				Name: 'Seminários em Computação II',
				Description: 'O objetivo principal desta disciplina é que o aluno crie o hábito de participar de atividades extracurriculares que são de grande importância para sua formação e que ao mesmo tempo adquira conhecimentos e visões adicionais de diferentes áreas da computação.',
				ClassCredits: 1,
				AssignCredits: 0,
				TotalHours: '15 h',
				Requirements: [
					'SCC0227'
				],
				Optional: true
			},
			{
				Code: 'SME0878',
				Name: 'Mineração Estatística de Dados',
				Description: 'Apresentar ao aluno os principais conceitos e técnicas de mineração estatística de dados. A teoria será desenvolvida com aplicações em várias área do conhecimento, dentre as quais, biologia, economia, engenharia, finanças e medicina.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SME0123',
					'SME0822'
				],
				Optional: true
			}
		]
	},
	{
		Name: 'Bacharelado em Estatística e Ciência de Dados',
		Code: '55071',
		Subjects: [
			{
				Code: 'SME0823',
				Name: 'Modelos de Regressão e Aprendizado  Supervisionado II',
				Description: 'Apresentar conceitos introdutórios de modelos lineares generalizados em um enfoque computacional.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SME0818'
				],
				Optional: false
			},
			{
				Code: 'SME0829',
				Name: 'Aprendizado de Máquina',
				Description: 'Apresentar e discutir os fundamentos e principais algoritmos de aprendizado de máquina, que investigam técnicas para desenvolver algoritmos capazes de aprender/melhorar seu desempenho, utilizando exemplos de situações previamente observadas. Além do estudo dos algoritmos de aprendizado baseados em diferentes paradigmas, será estudada a realização experimentos com esses algoritmos para entender  como eles induzem conhecimento utilizando dados gerados e aplicações reais.\n\nApresentar ao aluno os princípios gerais de aprendizado de máquina e fornecer uma visão geral dos diversos paradigmas e algoritmos existentes de aprendizado de máquina para a aquisição automática de conhecimento a partir de conjuntos de dados.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SME0828'
				],
				Optional: false
			},
			{
				Code: 'SME0828',
				Name: 'Introdução à Ciência de Dados',
				Description: 'Introduzir conceitos de mineração de dados aos alunos de graduação em Estatística. Técnicas de processamento de dados para extração de conhecimento serão apresentadas aos alunos.O curso visa prover teoria e prática a fim de que os alunos possam aplicar as novas técnicas e ferramentas estudadas em problemas reais.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SME0827'
				],
				Optional: false
			},
			{
				Code: 'SME0801',
				Name: 'Probabilidade II',
				Description: 'Apresentar os principais modelos de vetores aleatórios, transformação de variáveis. Introduzir as principais desigualdades associadas a variáveis aleatórias e os teoremas limites.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0802',
					'SME0800'
				],
				Optional: false
			},
			{
				Code: 'SME0814',
				Name: 'Estágio Supervisionado em Estatística I',
				Description: 'Complementação da formação profissional específica. Adaptação psicológica, social e técnica do aluno à sua futura atividade profissional. Treinamento do aluno com vistas a facilitar sua futura absorção profissional. Orientação do aluno para a escolha de sua especialização profissional.',
				ClassCredits: 4,
				AssignCredits: 10,
				TotalHours: '360 h ( Estágio: 300 h )',
				Requirements: [
					'SME0807',
					'SME0808',
					'SME0810',
					'SME0816',
					'SME0820',
					'SME0822',
					'SME0824'
				],
				Optional: false
			},
			{
				Code: 'SME0808',
				Name: 'Séries Temporais e Aprendizado Dinâmico',
				Description: 'Apresentar os conceitos básicos da teoria de tratamento estatístico de séries temporais, preparar o aluno para análise, identificação e previsão de uma série temporal.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0818'
				],
				Optional: false
			},
			{
				Code: 'SME0873',
				Name: 'Econometria',
				Description: 'Familiarizar o estudante com a aplicação de métodos estatísticos na solução de problemas em Economia.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0808',
					'SME0820'
				],
				Optional: true
			},
			{
				Code: 'SME0854',
				Name: 'Visualização para Ciência de Dados',
				Description: 'O objetivo deste curso é fornecer aos alunos uma introdução à Visualização Científica e de Informação, focando-se em suas aplicações na área de Ciência de Dados.',
				ClassCredits: 3,
				AssignCredits: 1,
				TotalHours: '75 h',
				Requirements: [
					'SMA0804'
				],
				Optional: true
			},
			{
				Code: 'SCC0244',
				Name: 'Mineração a partir de Grandes Bases de Dados',
				Description: 'Apresentar conceitos, técnicas e ferramentas relevantes na área de descoberta de conhecimento em bases de dados e mineração de dados, sob a perspectiva da área de bases de dados, explorando com profundidade os aspectos associados a esta área.',
				ClassCredits: 3,
				AssignCredits: 0,
				TotalHours: '45 h',
				Requirements: [
					'SCC0230',
					'SCC0240'
				],
				Optional: true
			},
			{
				Code: 'SME0130',
				Name: 'Redes Complexas',
				Description: 'Introduzir os conceitos básicos da teoria das redes complexas com a apresentação das ferramentas fundamentais para a representação, modelagem e caracterização e classificação de redes complexas. Os conceitos serão aplicados na análise da Internet, da World Wide Web, da linguagem, da sociedade, de cadeias alimentares, das interações celulares e de malhas rodoviárias.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SMA0801',
					'SSC0800'
				],
				Optional: true
			},
			{
				Code: 'SCC0240',
				Name: 'Bases de Dados',
				Description: 'Objetivos: Fornecer conceitos, técnicas e características básicas dos Sistemas Gerenciadores de Bases de Dados, tornando o aluno capaz de desenvolver sistemas de informação centrados na busca de informações armazenadas em bases de dados.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SSC0800'
				],
				Optional: true
			},
			{
				Code: '7600108',
				Name: 'Psicologia da Educação',
				Description: 'Os principais objetivos desta disciplina são estudar e analisar algumas das principais teorias de aprendizagem de modo que o licenciado identifique o processo ensino-aprendizagem como complexo e dinâmico; e discutir temáticas relacionadas com o cotidiano escolar, de um ponto de vista psicológico.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h ( Práticas como Componentes Curriculares = 30 h )',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SSC0800',
				Name: 'Introdução à Ciência de Computação I',
				Description: 'Apresentar os conceitos básicos para o desenvolvimento da lógica de programação, mostrando a importância do uso do computador para os profissionais de Estatística. Iniciar os estudantes na linguagem de programação C ou Python, onde a linguagem de programação será definida a critério do professor.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SME0212',
				Name: 'Otimização Não Linear',
				Description: 'Capacitar o aluno a perceber, formular e resolver problemas de otimização não linear.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SMA0802',
					'SMA0804',
					'SSC0800'
				],
				Optional: true
			},
			{
				Code: 'SME0822',
				Name: 'Análise Multivariada e Aprendizado Não Supervisionado',
				Description: 'Estudo de métodos multivariados de análise de dados e de aprendizado não supervisionado. Análise de variância multivariada. Análise de componentes principais. Análise fatorial. Análise de Agrupamentos Análise de correlação canônica. Análise de correspondência.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0818'
				],
				Optional: false
			},
			{
				Code: 'SME0827',
				Name: 'Estruturas de Dados',
				Description: 'Familiarizar os estudantes com várias estruturas da informação, buscando habilitá-los a contar com esses recursos no desenvolvimento de outras atividades computacionais.',
				ClassCredits: 3,
				AssignCredits: 2,
				TotalHours: '105 h',
				Requirements: [
					'SSC0800',
					'SSC0801'
				],
				Optional: false
			},
			{
				Code: 'SME0890',
				Name: 'Direcionamento Acadêmico I',
				Description: 'Propiciar um acompanhamento do progresso acadêmico e de formação dos alunos no 1o. semestre do curso, detectando-se os problemas gerais e propondo soluções.',
				ClassCredits: 1,
				AssignCredits: 0,
				TotalHours: '15 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SSC0570',
				Name: 'Empreendedorismo',
				Description: 'Desenvolver a capacidade empreendedora dos alunos, estimulando e dando ferramentas àqueles cuja vocação profissional estiver direcionada à criação de um empreendimento em informática.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SME0824',
				Name: 'Gestão da Qualidade',
				Description: 'Introduzir os princípios básicos da qualidade e as principais normas associadas a sistemas da qualidade. Apresentar as ferramentas estatísticas mais utilizadas no desenvolvimento da metodologia 6 Sigma.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0818'
				],
				Optional: false
			},
			{
				Code: 'SME0812',
				Name: 'Modelos Lineares',
				Description: 'Introduzir os fundamentos dos modelos lineares.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0818'
				],
				Optional: true
			},
			{
				Code: 'SME0242',
				Name: 'Modelagem Matemática',
				Description: 'A partir de problemas das áreas de estatística, otimização e mecânica dos fluidos computacional, desenvolver alguns projetos envolvendo a noção de aproximação, aplicações de vetores e geometria, de álgebra linear e de equações diferenciais ordinárias, apresentando, em cada um deles, um modelo matemático e a teoria básica envolvida, com uma eventual visualização gráfica e/ou numérica com auxílio de algum "software".',
				ClassCredits: 2,
				AssignCredits: 1,
				TotalHours: '60 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SME0879',
				Name: 'Mineração de dados representados por grafos',
				Description: 'Introduzir ao alunos as técnicas de modelagem de dados via redes complexas. Apresentar métodos para representar dados de redes sociais, tecnológicas, de informação e biológicas como grafos. Estudar algoritmos para prever conexões nas redes e extrair padrões de conexões que forneçam informações relevantes. Aplicar as técnicas em casos reais.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SME0800',
					'SSC0800'
				],
				Optional: true
			},
			{
				Code: '5500002',
				Name: 'Seminários em Gestão Organizacional',
				Description: 'O objetivo principal desta disciplina é abordar tópicos variados de gestão organizacional, de forma generalista, apresentando aos alunos uma visão geral das várias frentes da gestão, contribuindo para sua formação técnica e humanística em seu futuro profissional.',
				ClassCredits: 1,
				AssignCredits: 1,
				TotalHours: '45 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SME0807',
				Name: 'Técnicas de Amostragem',
				Description: 'Dar uma visão das principais técnicas de amostragem.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0818'
				],
				Optional: false
			},
			{
				Code: 'SMA0339',
				Name: 'Didática',
				Description: 'Desenvolver, junto aos licenciandos, uma postura crítico-reflexiva em relação ao ensino,  bem como competências básicas que os habilitem a planejar, organizar, orientar e avaliar o processo de ensino e aprendizagem.\nPromover uma análise das reais condições das escolas brasileiras e buscar formas de atuação simples e efetivas, de maneira a motivar o aprendizado e a formação plena do aluno, no exercício de sua cidadania e no conhecimento de sua personalidade',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SME0852',
				Name: 'Prática em Ciência de Dados I',
				Description: 'Aprofundar a experiência do aluno na prática em Ciência de Dados e criar as competências necessárias para seu futuro desempenho profissional.',
				ClassCredits: 4,
				AssignCredits: 4,
				TotalHours: '180 h',
				Requirements: [
					'SCC0230',
					'SME0822'
				],
				Optional: true
			},
			{
				Code: 'SME0882',
				Name: 'Consultoria Estatística',
				Description: 'Oferecer aos estudantes do Bacharelado em Estatística habilidades práticas de consultoria e comunicação, como apresentar resultados verbalmente e em um relatório escrito e trabalhar em cooperação com outros pesquisadores. Fornecer tópicos metodológicos e conceituais à Consultoria Estatística.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0803'
				],
				Optional: true
			},
			{
				Code: 'IAU0314',
				Name: 'Cultura, Ambiente e Sustentabilidade I',
				Description: '- discutir as noções de natureza e cultura a partir de disciplinas diversas – economia, antropologia, filosofia, ecologia;- estudar os impactos ambientais antrópicos ao longo da história da humanidade;- estudar a história do pensamento conservacionista, suas principais noções e conceitos utilizados no seu estudo;- levantar, analisar e discutir os diversos aspectos e pontos de vista em relação à questão ambiental contemporânea;- levantar e analisar os dados históricos, sócio-ambientais e de manejo de unidades de conservação;- estudar os aspectos sócio-econômicos e político-culturais da noção de sustentabilidade.',
				ClassCredits: 2,
				AssignCredits: 0,
				TotalHours: '30 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SME0210',
				Name: 'Programação Matemática',
				Description: '\tCapacitar o aluno a perceber, formular e resolver problemas de otimização.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SMA0307',
				Name: 'Análise I',
				Description: 'Familiarizar o aluno com as técnicas de Análise Matemática.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0803'
				],
				Optional: true
			},
			{
				Code: 'SME0806',
				Name: 'Estatística Computacional',
				Description: 'Estudar técnicas computacionais utilizadas na solução de problemas de Estatística.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SME0818'
				],
				Optional: false
			},
			{
				Code: 'SME0892',
				Name: 'Cálculo Numérico para Estatística',
				Description: 'Familiarização do aluno com as técnicas computacionais da Álgebra Linear, da Álgebra e da Análise Matemática, através do estudo de métodos numéricos, com uso intensivo de computadores digitais.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0801',
					'SMA0804',
					'SSC0800'
				],
				Optional: false
			},
			{
				Code: 'SME0880',
				Name: 'Projeto de Graduação em Estatística I',
				Description: 'Dar suporte ao estudante no desenvolvimento de um projeto de  pesquisa  na área de Estatística, a fim de permitir uma visão mais global das áreas de Estatística, através da elaboração de um projeto assistido por docente.',
				ClassCredits: 4,
				AssignCredits: 10,
				TotalHours: '360 h ( Estágio: 300 h )',
				Requirements: [
					'SME0807',
					'SME0808',
					'SME0810',
					'SME0816',
					'SME0820',
					'SME0822',
					'SME0824'
				],
				Optional: true
			},
			{
				Code: 'SLC0606',
				Name: 'Introdução aos Estudos da Educação II',
				Description: 'Fornecer aos alunos dos cursos de Licenciatura um contato sistemático com as questões educacionais veiculadas pela imprensa nacional e/ou internacional, com a finalidade de despertá-los para o posicionamento crítico-reflexivo frente aos acontecimentos atuais que envolvem a Educação e a melhoria do ensino público. Propiciar a reflexão acerca do ensino das Ciências no Brasil, seus problemas e suas propostas atuais. Proporcionar a leitura e interpretação de textos de alguns pensadores da Educação Nacional.',
				ClassCredits: 2,
				AssignCredits: 2,
				TotalHours: '90 h ( Práticas como Componentes Curriculares = 30 h )',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SME0826',
				Name: 'Metodologia Científica II',
				Description: 'Apresentar ao estudante a organização de um trabalho acadêmico e desenvolver a habilidade de elaboração de um projeto relacionado com Estatística, enfatizando a importância da forma escrita para a comunicação de resultados.',
				ClassCredits: 2,
				AssignCredits: 2,
				TotalHours: '90 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SME0894',
				Name: 'Atividades Acadêmicas Complementares II',
				Description: 'Complementar a formação profissional, científica, social e cultural do estudante de Estatística e Ciência de\nDados. Incentivar e valorizar a participação do estudante em atividades acadêmicas e profissionais que\nampliem as dimensões dos componentes curriculares relacionados à atuação do profissional.',
				ClassCredits: 0,
				AssignCredits: 1,
				TotalHours: '30 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SMA0804',
				Name: 'Álgebra Linear para Estatística',
				Description: 'Levar os alunos ao uso de ferramentas algébricas, visando as demais disciplinas de estatística.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SME0850',
				Name: 'Informação Profissional em Ciência de Dados',
				Description: 'Familiarizar o aluno ao curso e suas características e oferecer uma visão geral dos processos de Ciência de Dados pelo desenvolvimento de um projeto prático de pequena escala, assim como apoiar o aluno por meio de atividades de tutoria acadêmica.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SME0876',
				Name: 'Teoria de Resposta ao Item',
				Description: 'Fornecer ao aluno os conceitos básicos da análise clássica para avaliação de questionários e provas e apresentar as vantagens da Teoria de Resposta ao Item (TRI) sobre as técnicas anteriores. Apresentar os principais modelos da TRI, métodos de estimação de seus parâmetros e exemplificar suas aplicações em áreas como Educação, Medicina e Marketing.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0809',
					'SME0818'
				],
				Optional: true
			},
			{
				Code: 'SME0875',
				Name: 'Tópicos Especiais em Estatística Aplicada II',
				Description: 'Aprimoramento de conhecimentos específicos de uma determinada área de estatística. Proporcionar aprendizado específico de acordo com o interesse da maioria dos alunos de uma determinada turma.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0818'
				],
				Optional: true
			},
			{
				Code: 'SMA0805',
				Name: 'Tópicos de Matemática',
				Description: 'Esta disciplina tem por objetivo a aprendizagem e revisão crítica de alguns conteúdos da Matemática do Ensino Médio, com certo aprofundamento destas idéias. Servirá para sedimentar a base matemática necessária para um  melhor aproveitamento em outras disciplinas da graduação. A parte (1) do programa se refere a conceitos imediatamente necessários para a disciplina de Cálculo I.  Sendo assim, estes conceitos devem ser ministrados logo no início do período letivo, com o intuito de revisar o conteúdo requerido, mas sem demonstrações dos resultados. Para a parte (2) deve ser feita  uma abordagem crítica incluindo demonstrações pertinentes, que além de revisar alguns conceitos do Ensino Médio, também desenvolverá uma habilidade de raciocínio crítico do aluno para esta nova proposta do processo ensino-aprendizagem.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SME0809',
				Name: 'Inferência Bayesiana',
				Description: 'Familiarizar o estudante com teorias de inferência condicionais e suas aplicações.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0801',
					'SME0818'
				],
				Optional: false
			},
			{
				Code: 'SCC0814',
				Name: 'Projetos de Algoritmos',
				Description: 'Apresentação de conceitos avançados que levem o aluno a uma maturidade em programação estruturada, com conhecimento de uma linguagem de programação com recursos avançados. Aprendizado de técnicas para construção de algoritmos e para análise da complexidade de algoritmos. Aprendizado de algoritmos clássicos de ordenação e busca em memória interna. Prática de Programação.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SSC0800',
					'SSC0801'
				],
				Optional: true
			},
			{
				Code: 'SME0262',
				Name: 'Análise de Séries Temporais em Finanças',
				Description: 'Apresentar as terminologias, definições básicas e os principais modelos de séries temporais aplicados em finanças, preparar o aluno para análise de séries financeiras.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0808',
					'SME0818'
				],
				Optional: true
			},
			{
				Code: 'SCC0230',
				Name: 'Inteligência Artificial',
				Description: 'Apresentar ao aluno as idéias fundamentais da Inteligência Artificial e algumas características relacionadas à implementação desse tipo de sistemas.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SSC0800'
				],
				Optional: true
			},
			{
				Code: 'SLC0620',
				Name: 'Biologia I',
				Description: 'Permitir que os alunos adquiram conhecimentos sobre Origem da vida e evolução, Biologia celular e histologia. Prepará-los para que possam estabelecer parâmetros que os possibilitem extrair deste aprendizado um conteúdo adequado para o ensino de Ciências.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h ( Práticas como Componentes Curriculares = 30 h )',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SMA0143',
				Name: 'Introdução à Teoria da Medida',
				Description: 'Introduzir  à teoria da medida na reta e relacionar a integral de Lebesgue com a integral de Riemann e as integrais impróprias.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0308'
				],
				Optional: true
			},
			{
				Code: 'SME0825',
				Name: 'Metodologia Científica I',
				Description: 'Apresentar ao estudante a linguagem científica através de uma visão geral da experimentação e das várias formas de planejamento de uma pesquisa.',
				ClassCredits: 2,
				AssignCredits: 2,
				TotalHours: '90 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SME0871',
				Name: 'Bioestatística',
				Description: 'Fornecer ao aluno conceitos básicos sobre epidemiologia clínica e bioestatística.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0803',
					'SME0820'
				],
				Optional: true
			},
			{
				Code: 'SCC0270',
				Name: 'Redes Neurais e Aprendizado Profundo',
				Description: 'Apresentar ao aluno os conceitos básicos de Redes Neurais Artificiais e os principais modelos existentes. Analisar o comportamento destes modelos, suas capacidades fundamentais e limitações, possibilitando a utilização destas técnicas na resolução de problemas práticos.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SCC0230'
				],
				Optional: true
			},
			{
				Code: 'SME0510',
				Name: 'Introdução à Pesquisa Operacional',
				Description: 'Muitos problemas de tomada de decisão têm estruturas matemáticas bem definidas. Nesta disciplina alguns modelos matemáticos de otimização determinística serão estudados, com ênfase em métodos de solução, bem como em aplicações.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SME0892'
				],
				Optional: true
			},
			{
				Code: 'SCC0252',
				Name: 'Visualização Computacional',
				Description: 'A área de visualização computacional engloba o desenvolvimento e aplicação de técnicas gráficas para apresentação e entendimento dos mais variados conjuntos de dados. Domínios de aplicação variam desde diagramas explicativos e gráficos de barra até dados meteorológicos, médicos, científicos, coleções de registros, documentos, imagens, etc. O objetivo desta disciplina é fornecer uma introdução à área de Visualização de Dados. Pretende-se abordar o que é Visualização, quais os seus objetivos, algoritmos e aplicações. Serão descritas técnicas de uso geral disponíveis atualmente e os tipos de dados que são visualizados. Os principais algoritmos e estruturas de dados serão apresentados. Um sistema de visualização será introduzido e utilizado pelos alunos na confecção dos trabalhos práticos.',
				ClassCredits: 3,
				AssignCredits: 0,
				TotalHours: '45 h',
				Requirements: [
					'SSC0800'
				],
				Optional: true
			},
			{
				Code: 'SME0820',
				Name: 'Modelos de Regressão e Aprendizado Supervisionado I',
				Description: 'Apresentar as principais técnicas de análise de regressão e suas aplicações.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SME0818'
				],
				Optional: false
			},
			{
				Code: 'SME0853',
				Name: 'Prática em Ciência de Dados III',
				Description: 'Aprofundar a experiência do aluno na prática em Ciência de Dados e criar as competências necessárias para seu futuro desempenho profissional.',
				ClassCredits: 4,
				AssignCredits: 4,
				TotalHours: '180 h',
				Requirements: [
					'SCC0230',
					'SME0822'
				],
				Optional: true
			},
			{
				Code: 'SMA0803',
				Name: 'Cálculo III',
				Description: 'Familiarizar os alunos com os resultados fundamentais relativos a: seqüências numéricas, séries numéricas, de potências e de Fourier.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0801'
				],
				Optional: false
			},
			{
				Code: 'SME0800',
				Name: 'Probabilidade I',
				Description: 'Apresentar os conceitos fundamentais da teoria da probabilidade começando pelas definições básicas, principais modelos probabilísticos e simulação de variáveis aleatórias.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0801'
				],
				Optional: false
			},
			{
				Code: 'SMA0801',
				Name: 'Cálculo I',
				Description: 'Fazer com que os alunos familiarizem-se com os conceitos de  limite, continuidade, diferenciabilidade e integração de  funções de uma variável.',
				ClassCredits: 6,
				AssignCredits: 0,
				TotalHours: '90 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SME0893',
				Name: 'Atividades Acadêmicas Complementares I',
				Description: 'Complementar a formação profissional, científica, social e cultural do estudante de Estatística e Ciência de\nDados. Incentivar e valorizar a participação do estudante em atividades acadêmicas e profissionais que\nampliem as dimensões dos componentes curriculares relacionados à atuação do profissional.',
				ClassCredits: 0,
				AssignCredits: 1,
				TotalHours: '30 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SME0805',
				Name: 'Processos Estocásticos',
				Description: 'Fornecer ao aluno base teórica em Processos Estocásticos para que possa desenvolver modelos e apreciar suas aplicações com consistência e incluindo métodos de Simulação Estocástica.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0800'
				],
				Optional: false
			},
			{
				Code: 'SME0810',
				Name: 'Métodos Não Paramétricos',
				Description: 'Introduzir os principais métodos estatísticos não-paramétricos.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0818'
				],
				Optional: false
			},
			{
				Code: 'SME0840',
				Name: 'Equações Diferenciais Ordinárias',
				Description: 'Familiarizar o aluno com a teoria das equações diferenciais ordinárias e desenvolver técnicas de resolução das mesmas.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0804'
				],
				Optional: true
			},
			{
				Code: 'SME0872',
				Name: 'Demografia',
				Description: 'Apresentar ao estudante técnicas de análise demográficas e atuariais.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0805'
				],
				Optional: true
			},
			{
				Code: 'SME0803',
				Name: 'Visualização e Exploração de Dados',
				Description: 'Fornecer ao aluno conhecimentos sobre as principais técinicas estatísticas para descrição dos dados de acordo com os objetivos específicos da pesquisa. Ilustrar a aplicação das técnicas a conjuntos de dados reais, utilizando-se os principais pacotes estatísticos.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SME0818',
				Name: 'Inferência Estatística',
				Description: 'Estudo dos problemas de estimação.',
				ClassCredits: 6,
				AssignCredits: 0,
				TotalHours: '90 h',
				Requirements: [
					'SME0800'
				],
				Optional: false
			},
			{
				Code: 'SLC0605',
				Name: 'Introdução aos Estudos da Educação I',
				Description: 'Apresentar e discutir algumas questões centrais da Educação e da escolaridade básica em suas vinculações com a História e o exercício da Cidadania, por meio do exame geral de aspectos fundamentais da Filosofia e História das instituições educacionais, de suas práticas, de seus agentes sociais, seus princípios e valores.',
				ClassCredits: 2,
				AssignCredits: 2,
				TotalHours: '90 h ( Práticas como Componentes Curriculares = 30 h )',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SSC0801',
				Name: 'Laboratório de Introdução à Ciência de Computação I',
				Description: 'Implementar em laboratório as técnicas de programação  apresentadas em Introdução à Ciência da Computação I, utilizando linguagem de programação C ou Python. A linguagem de programação utilizada será definida a critério do professor.',
				ClassCredits: 2,
				AssignCredits: 2,
				TotalHours: '90 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SME0816',
				Name: 'Planejamento de Experimentos I',
				Description: 'Apresentar técnicas específicas de planejamento de experimentos com aplicações em indústria,  finanças, medicina e outros.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SME0818'
				],
				Optional: false
			},
			{
				Code: 'IAU0315',
				Name: 'Cultura, Ambiente e Sustentabilidade II',
				Description: '- discutir as noções de natureza, urbano e paisagem ao longo da história, as mudanças de registro e as diferentes respostas a essa alternância de percepção.- planos urbanísticos e projetos como modificação e adaptação de um território para o uso e fruição humana.- planos e projetos para mitigação de desastres ambientais ocasionados pela ocupação urbana.',
				ClassCredits: 2,
				AssignCredits: 0,
				TotalHours: '30 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SMA0800',
				Name: 'Geometria Analítica',
				Description: 'Visa familiarizar os alunos com a geometria analítica no plano e no espaço, com ênfase nos seus aspectos geométricos e suas traduções em coordenadas cartesianas',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SME0811',
				Name: 'Análise de Dados Categorizados',
				Description: 'Apresentar métodos e teoria de análise de dados categorizados.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0818'
				],
				Optional: true
			},
			{
				Code: 'SMA0802',
				Name: 'Cálculo II',
				Description: 'Familiarizar os alunos com os resultados fundamentais relativos a:  diferenciabilidade de  funções de várias variáveis, integrais múltiplas, integrais de linha, integrais de superfície.',
				ClassCredits: 6,
				AssignCredits: 0,
				TotalHours: '90 h',
				Requirements: [
					'SMA0801'
				],
				Optional: false
			},
			{
				Code: 'SMA0326',
				Name: 'Filosofia da Matemática',
				Description: 'Verificar as posições filosóficas no que diz respeito ao conhecimento Matemático, desde Platão até o presente momento.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SLC0621',
				Name: 'Biologia II',
				Description: 'Permitir que os alunos adquiram conhecimentos sobre o Reino Animal e noções gerais de anatomo-fisiologia animal comparada. Prepará-los para que possam estabelecer parâmetros que os possibilitem extrair deste aprendizado um conteúdo adequado para o ensino de Ciências.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h ( Práticas como Componentes Curriculares = 30 h )',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SME0817',
				Name: 'Planejamento de Experimentos II',
				Description: 'Apresentar técnicas específicas de planejamento de experimentos com aplicações em indústria,  finanças, medicina e outros.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0816'
				],
				Optional: true
			},
			{
				Code: 'SME0821',
				Name: 'Análise de Sobrevivência e Confiabilidade',
				Description: 'Introduzir fundamentos básicos de análise de sobrevivência e de confiabilidade.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0818'
				],
				Optional: false
			},
			{
				Code: 'SMA0340',
				Name: 'Introdução aos Estudos da Educação',
				Description: 'Apresentar e discutir algumas questões centrais da educação e da escolaridade básica em suas vinculações com o exercício da cidadania, por meio do exame geral de aspectos fundamentais da cultura das instituições educacionais, de suas práticas, de seus agentes sociais, seus princípios e valores. Fornecer ao aluno do curso de Matemática um contato sistemático com as questões educacionais veiculadas pela imprensa nacional e/ou internacional, com a finalidade de despertá-lo para o posicionamento crítico-reflexivo frente aos acontecimentos atuais que envolvem a Educação e a melhoria do ensino público. Proporcionar a leitura e interpretação de textos de alguns pensadores da Educação Nacional.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h ( Práticas como Componentes Curriculares = 30 h )',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SME0870',
				Name: 'Tópicos Especiais em Estatística Aplicada I',
				Description: 'Aprimoramento de conhecimentos específicos de uma determinada área de estatística. Proporcionar aprendizado específico de acordo com o interesse da maioria dos alunos de uma determinada turma.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0818'
				],
				Optional: true
			},
			{
				Code: 'SMA0308',
				Name: 'Análise II',
				Description: 'Objetivo: Familiarizar o aluno com os conceitos de Análise Matemática, aprofundando o que já foi visto nas disciplinas de Cálculo.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0802',
					'SMA0803'
				],
				Optional: true
			},
			{
				Code: 'SME0878',
				Name: 'Mineração Estatística de Dados',
				Description: 'Apresentar ao aluno os principais conceitos e técnicas de mineração estatística de dados. A teoria será desenvolvida com aplicações em várias área do conhecimento, dentre as quais, biologia, economia, engenharia, finanças e medicina.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SME0800',
					'SME0818',
					'SME0820',
					'SME0822',
					'SSC0800'
				],
				Optional: false
			}
		]
	},
	{
		Name: 'Bacharelado em Matemática',
		Code: '55030',
		Subjects: [
			{
				Code: 'SMA0334',
				Name: 'Fundamentos para a Matemática do Ensino Superior',
				Description: 'Esta disciplina tem por objetivo a revisão crítica de alguns conteúdos da Matemática do Ensino Médio, com certo aprofundamento destas ideias. Servirá para sedimentar a base matemática necessária para um melhor aproveitamento em outras disciplinas da graduação. O enfoque é na solução de problemas possíveis de serem resolvidos com a matemática de ensino não superior, mas que normalmente não são feitos por falta de maturidade dos alunos no Ensino Básico. A parte (1) do programa se refere a conceitos imediatamente necessários para a disciplina de Cálculo I e, sendo assim, deve ser ministrada logo no início do período letivo. Para a parte (2) deve ser feita uma abordagem crítica, incluindo demonstrações pertinentes. A rememoração das experiências anteriores do aluno, enquanto discente do Ensino Básico, e o confronto de novas propostas para o processo de ensino-aprendizagem desses conteúdos colaboram, assim, para a formação do futuro professor de Matemática.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h ( Práticas como Componentes Curriculares = 30 h )',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SMA0178',
				Name: 'Tópicos de Matemática Elementar e Estatística',
				Description: 'Examinar tópicos de Matemática Elementar de um ponto de vista mais preciso  e mais crítico do que a abordagem usual na escola secundária.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h ( Práticas como Componentes Curriculares = 30 h )',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SMA0351',
				Name: 'Atividades Teórico',
				Description: 'Cumprimento de 100 horas para as atividades acadêmico-científico-culturais, exigidas pela Resolução CNE/CP2, de 19/02/2002.',
				ClassCredits: 0,
				AssignCredits: 0,
				TotalHours: '0 h ( Atividades Acadêmicos-Científico-Culturais = 100 h )',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SMA0347',
				Name: 'Análise para Licenciatura',
				Description: 'Abordar a análise matemática e seus aspectos históricos proporcionando ao futuro professor conhecer como se estruturou o rigor na área de Matemática, particularmente no que diz respeito às contribuições para a Análise, e suas relações com a formalização de alguns resultados ensinados nos níveis Fundamental e Médio.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h ( Práticas como Componentes Curriculares = 60 h )',
				Requirements: [
					'SMA0356'
				],
				Optional: true
			},
			{
				Code: 'SMA0381',
				Name: 'Atividades Acadêmicas Complementares I',
				Description: 'Valorizar a participação dos estudantes em atividades acadêmicas e de prática profissional alternativas que ampliem as dimensões dos componentes curriculares relacionados a atuação do matemático como meio de complementar a sua formação acadêmica/científica. Estimular a pró atividade dos alunos, incentivando-os a desempenharem atividades científico-acadêmicas e de extensão e cultura em artes e música, esportes e línguas estrangeiras, bem como atividades de cunho socioambiental.',
				ClassCredits: 0,
				AssignCredits: 2,
				TotalHours: '60 h ( Estágio: 60 h )',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SMA0180',
				Name: 'Matemática Discreta I',
				Description: 'Dar aos alunos os conhecimentos básicos de Contagem e Combinatória, Relações, Teoria dos Números no contexto de Criptografia, Inferência e Prova, e Indução Matemática, habilitando-os a resolverem problemas da área de Ciências de Computação.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SMA0329',
				Name: 'História da Matemática',
				Description: 'A finalidade é ajudar o estudante a descobrir como e o porquê do aparecimento e desenvolvimento das principais teorias matemáticas. A ênfase será dada sobre as teorias que melhor possam esclarecer conceitos elementares e indispensáveis tanto ao professor secundário quanto ao futuro pesquisador.',
				ClassCredits: 3,
				AssignCredits: 1,
				TotalHours: '75 h',
				Requirements: [
					'SMA0305',
					'SMA0332'
				],
				Optional: true
			},
			{
				Code: '7600108',
				Name: 'Psicologia da Educação',
				Description: 'Os principais objetivos desta disciplina são estudar e analisar algumas das principais teorias de aprendizagem de modo que o licenciado identifique o processo ensino-aprendizagem como complexo e dinâmico; e discutir temáticas relacionadas com o cotidiano escolar, de um ponto de vista psicológico.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h ( Práticas como Componentes Curriculares = 30 h )',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SMA0338',
				Name: 'Estrutura e Funcionamento da Educação Básica',
				Description: 'Propiciar condições para a compreensão da estrutura e funcionamento do ensino fundamental e médio como elemento de reflexão sobre a realidade escolar brasileira, incluindo a inserção do licenciando nesta realidade, como condição para sua formação prática.',
				ClassCredits: 2,
				AssignCredits: 2,
				TotalHours: '90 h ( Práticas como Componentes Curriculares = 30 h )',
				Requirements: [
					'SMA0340'
				],
				Optional: true
			},
			{
				Code: 'SME0823',
				Name: 'Modelos de Regressão e Aprendizado  Supervisionado II',
				Description: 'Apresentar conceitos introdutórios de modelos lineares generalizados em um enfoque computacional.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SME0221'
				],
				Optional: true
			},
			{
				Code: 'SCC0203',
				Name: 'Algoritmos e Estruturas de Dados II',
				Description: 'Estudo e resolução de problemas que utilizam estruturas de dados e algoritmos em memória externa. Estudo e resolução de problemas que utilizam estruturas de dados e algoritmos clássicos sobre grafos.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SCC0202'
				],
				Optional: true
			},
			{
				Code: 'SCC0270',
				Name: 'Redes Neurais e Aprendizado Profundo',
				Description: 'Apresentar ao aluno os conceitos básicos de Redes Neurais Artificiais e os principais modelos existentes. Analisar o comportamento destes modelos, suas capacidades fundamentais e limitações, possibilitando a utilização destas técnicas na resolução de problemas práticos.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SCC0230'
				],
				Optional: true
			},
			{
				Code: 'SMA0305',
				Name: 'Álgebra I',
				Description: 'Esta disciplina tem como finalidade  fornecer ao aluno de matemática uma formação mais abrangente em  Álgebra.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0341'
				],
				Optional: false
			},
			{
				Code: 'SMA0340',
				Name: 'Introdução aos Estudos da Educação',
				Description: 'Apresentar e discutir algumas questões centrais da educação e da escolaridade básica em suas vinculações com o exercício da cidadania, por meio do exame geral de aspectos fundamentais da cultura das instituições educacionais, de suas práticas, de seus agentes sociais, seus princípios e valores. Fornecer ao aluno do curso de Matemática um contato sistemático com as questões educacionais veiculadas pela imprensa nacional e/ou internacional, com a finalidade de despertá-lo para o posicionamento crítico-reflexivo frente aos acontecimentos atuais que envolvem a Educação e a melhoria do ensino público. Proporcionar a leitura e interpretação de textos de alguns pensadores da Educação Nacional.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h ( Práticas como Componentes Curriculares = 30 h )',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SMA0326',
				Name: 'Filosofia da Matemática',
				Description: 'Verificar as posições filosóficas no que diz respeito ao conhecimento Matemático, desde Platão até o presente momento.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0341'
				],
				Optional: true
			},
			{
				Code: 'SMA0301',
				Name: 'Cálculo I',
				Description: 'Fazer com que os alunos familiarizem-se com os conceitos de  limite, continuidade, diferenciabilidade e integração de  funções de uma variável.',
				ClassCredits: 6,
				AssignCredits: 0,
				TotalHours: '90 h ( Práticas como Componentes Curriculares = 20 h )',
				Requirements: [],
				Optional: false
			},
			{
				Code: '7600107',
				Name: 'Física III',
				Description: 'Fornecer ao aluno noções básicas de circuitos elétricos em corrente contínua e corrente alternada e dar uma visão global dos conceitos fundamentais de eletricidade e magnetismo.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: null,
				Optional: true
			},
			{
				Code: 'SCC0230',
				Name: 'Inteligência Artificial',
				Description: 'Apresentar ao aluno as idéias fundamentais da Inteligência Artificial e algumas características relacionadas à implementação desse tipo de sistemas.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SMA0180',
					'SME0230'
				],
				Optional: true
			},
			{
				Code: 'SME0245',
				Name: 'Funções de Variável Complexa',
				Description: 'Levar os alunos ao estudo das funções de variáveis complexas e suas aplicações.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0332',
					'SMA0356'
				],
				Optional: false
			},
			{
				Code: 'SMA0377',
				Name: 'Direcionamento Acadêmico',
				Description: 'Acompanhar o progresso acadêmico dos alunos no 1o. semestre do curso para entender os problemas gerais e específicos, propondo a soluções gerais e específicas que contribuam na formação do aluno.',
				ClassCredits: 1,
				AssignCredits: 0,
				TotalHours: '15 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SMA0375',
				Name: 'Álgebra Linear',
				Description: 'Levar os alunos ao uso de ferramentas algébricas, visando as demais disciplinas.',
				ClassCredits: 6,
				AssignCredits: 0,
				TotalHours: '90 h ( Práticas como Componentes Curriculares = 30 h )',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SMA0382',
				Name: 'Atividades Acadêmicas Complementares II',
				Description: 'Valorizar a participação dos estudantes em atividades acadêmicas e de prática profissional alternativas que ampliem as dimensões dos componentes curriculares relacionados a atuação do matemático como meio de complementar a sua formação acadêmica/científica. Estimular a pró atividade dos alunos, incentivando-os a desempenharem atividades científico-acadêmicas e de extensão e cultura em artes e música, esportes e línguas estrangeiras, bem como atividades de cunho socioambiental.',
				ClassCredits: 0,
				AssignCredits: 1,
				TotalHours: '30 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SME0806',
				Name: 'Estatística Computacional',
				Description: 'Estudar técnicas computacionais utilizadas na solução de problemas de Estatística.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SME0221'
				],
				Optional: true
			},
			{
				Code: 'SMA0306',
				Name: 'Álgebra II',
				Description: 'Esta disciplina tem como finalidade  dar uma visão mais profunda  dos conceitos apresentados em Álgebra I.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0305'
				],
				Optional: false
			},
			{
				Code: 'SMA0359',
				Name: 'Topologia Avançada',
				Description: 'A disciplina reúne os tópicos básicos de Topologia que são indispensáveis aos alunos que desejam cursar uma pós-graduação em matemática.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0343'
				],
				Optional: true
			},
			{
				Code: 'SME0240',
				Name: 'Equações Diferenciais Ordinárias',
				Description: 'Familiarizar o aluno com a teoria das equações diferenciais ordinárias e desenvolver técnicas de resolução das mesmas.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0301',
					'SMA0375'
				],
				Optional: false
			},
			{
				Code: 'SCC0275',
				Name: 'Introdução à Ciência de Dados',
				Description: 'Complementar a formação dos alunos de graduação em Computação com interesse em conhecer os principais conceitos e técnicas da área de Ciência de Dados. O curso visa prover teoria e prática a fim de que os alunos possam aplicar as novas técnicas e ferramentas estudadas em problemas reais.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SCC0230'
				],
				Optional: true
			},
			{
				Code: 'SCC0223',
				Name: 'Estruturas de dados I',
				Description: 'Familiarizar os estudantes com as várias estruturas da informação, buscando habilitá-los a contar com esses recursos no desenvolvimento de outras atividades de ciências de computação.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SME0230'
				],
				Optional: true
			},
			{
				Code: 'SMA0378',
				Name: 'Formas Diferenciais e Aplicações',
				Description: 'Essa disciplina tem por objetivo apresentar ao estudante a estrutura algébrica das formas diferenciais em superfícies, de maneira que os teoremas de Stokes e de Poincaré, que são os resultados principais de formas diferenciais, sejam demonstrados no seu ambiente natural.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0300'
				],
				Optional: false
			},
			{
				Code: 'SMA0171',
				Name: 'Topologia',
				Description: 'Apresentar ao estudante as noções básicas da topologia e desenvolver sua habilidade de reconhecer, em situações concretas, conceitos estudados em espaços topológicos.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SMA0343'
				],
				Optional: false
			},
			{
				Code: 'SMA0364',
				Name: 'Tópicos de Matemática IV',
				Description: 'Complementar a formação do estudante com tópicos mais específicos. O objetivo das disciplinas de Matemática I, II, III e IV é possibilitar uma maior flexibilidade e agilidade no currículo do Bacharelado em Matemática, permitindo que tópicos não usuais às disciplinas da grade curricular possam ser oferecidos.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SCC0202',
				Name: 'Algoritmos e Estruturas de Dados I',
				Description: '\tFamiliarizar os estudantes com as várias estruturas da informação, buscando habilitá-los a contar com esses recursos no desenvolvimento de outras atividades de ciências de computação.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SME0230'
				],
				Optional: true
			},
			{
				Code: 'SMA0125',
				Name: 'Introdução ao Estudo das Singularidades de Aplicações Diferenciáveis',
				Description: 'O objetivo do curso é introduzir os aspectos básicos da Teoria das Singularidades das funções diferenciáveis, enfatizando as aplicações da teoria ao estudo da geometria de curvas e famílias de curvas no plano e no espaço.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0306',
					'SMA0308'
				],
				Optional: true
			},
			{
				Code: 'SMA0362',
				Name: 'Tópicos de Matemática II',
				Description: 'Complementar a formação do estudante com tópicos mais específicos. O objetivo das disciplinas de Matemática I, II, III e IV é possibilitar uma maior flexibilidade e agilidade no currículo do Bacharelado em Matemática, permitindo que tópicos não usuais às disciplinas da grade curricular possam ser oferecidos.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SMA0142',
				Name: 'Curvas Algébricas Planas',
				Description: 'Objetivo: Introduzir os conceitos da Geometria Algébrica. Revisar as curvas planas da Geometria elementar (tais como retas, cônicas, rosáceas...). Estudar as propriedades de curvas definidas por equação polinomial. O cálculo das interseções de duas curvas, incluindo os pontos no infinito, é enfatizado.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SMA0173',
				Name: 'Álgebra III',
				Description: 'Dar ao aluno de graduação uma introdução à Teoria de Galois com especial ênfase ao caso em que o corpo de base são os racionais. Deve-se enfatizar o Teorema Fundamental de Galois e a discussão da solubilidade de equações algébricas por radicais. Para isso deve-se exibir vários exemplos e calcular explicitamente alguns grupos de Galois de equações simples.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0306',
					'SMA0375'
				],
				Optional: false
			},
			{
				Code: 'SMA0193',
				Name: 'Introdução aos Grupos de Lie',
				Description: 'Dar aos alunos do final dos cursos de Bacharelado e Licenciatura em matemática uma introdução a esse importante conceito matemático que são os grupos de Lie.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0305',
					'SMA0375'
				],
				Optional: true
			},
			{
				Code: 'SMA0357',
				Name: 'Aplicações de Teoria dos Conjuntos',
				Description: 'Apresentar algumas aplicações da teoria dos conjuntos à matemática.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0380'
				],
				Optional: true
			},
			{
				Code: 'SME0202',
				Name: 'Métodos Numéricos em Equações Diferenciais',
				Description: 'Familiarização do estudante com técnicas numéricas para resolução prática de modelos matemáticos baseados em equações diferenciais.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SME0240'
				],
				Optional: false
			},
			{
				Code: 'SCC0204',
				Name: 'Programação Orientada a Objetos',
				Description: 'Introduzir os conceitos de programação orientada a objetos e metodologia de desenvolvimento de software segundo esse paradigma.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SCC0223'
				],
				Optional: true
			},
			{
				Code: 'SMA0373',
				Name: 'Álgebra Linear Excelso',
				Description: 'Apresentar ao aluno algumas ferramentas e, principalmente, o modo de se trabalhar com objetivos lineares e similares.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SMA0363',
				Name: 'Tópicos de Matemática III',
				Description: 'Complementar a formação do estudante com tópicos mais específicos. O objetivo das disciplinas de Matemática I, II, III e IV é possibilitar uma maior flexibilidade e agilidade no currículo do Bacharelado em Matemática, permitindo que tópicos não usuais às disciplinas da grade curricular possam ser oferecidos.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SMA0169',
				Name: 'Equações Diferenciais Parciais',
				Description: 'Familiarizar os alunos com técnicas clássicas de resoluções de equações diferenciais parciais de primeira e de segunda ordem, motivando-os através dos problemas físicos que promoveram o aparecimento desta área da Matemática.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0332',
					'SMA0356',
					'SME0240'
				],
				Optional: false
			},
			{
				Code: 'SCC0276',
				Name: 'Aprendizado de Máquina',
				Description: 'Apresentar os aspectos fundamentais e principais algoritmos de aprendizado de máquina, que investiga técnicas para desenvolver algoritmos capazes de aprender, ou melhorar seu desempenho, utilizando exemplos de situações previamente observadas. Serão investigados algoritmos que seguem diferentes paradigmas, incluindo algoritmos baseados em procura (algoritmos de indução de arvores de decisão e de conjuntos de regras, redes neurais artificiais (perceptron e multilayer perceptron), modelos probabilísticos (regressão logística e naive Bayes) e algoritmos baseados em distancia. Além do estudo dos algoritmos de aprendizado baseados em diferentes paradigmas, será estudada a realização experimentos com desses algoritmos para entender  como eles induzem conhecimento utilizando aplicações reais.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SCC0216'
				],
				Optional: true
			},
			{
				Code: 'SMA0350',
				Name: 'Ensino de Matemática para Alunos com Necessidades Especiais',
				Description: 'Com esta disciplina pretende-se levar o licenciando a um exame da literatura e legislação disponíveis sobre a temática da inclusão escolar, com primazia para aqueles alunos portadores de necessidades especiais ou deficientes físicos/ mentais. Pretende-se, num segundo momento, relacionar essa temática com questões específicas do ensino e aprendizagem de Matemática nos níveis Fundamental e Médio e suas relações com a formação do professor dessa disciplina.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: null,
				Optional: true
			},
			{
				Code: 'SMA0327',
				Name: 'Filosofia da Educação Matemática',
				Description: 'Conhecer e analisar as posições filosóficas no âmbito da Educação Matemática. Analisar a filosofia da Matemática e da Educação Matemática, juntamente com suas possíveis relações.Objetivos específicos: analisar algumas filosofias da Educação; refletir sobre concepções de conhecimento e conhecimento Matemático; relacionar filosofias da Matemática com a Educação Matemática; perceber os aspectos filosóficos inerentes às práticas educativas; perceber ligações entre aspectos filosóficos, pedagógicos e didáticos do conhecimento matemático; entender e caracterizar a Filosofia Educação Matemática.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0340'
				],
				Optional: true
			},
			{
				Code: 'SME0206',
				Name: 'Fundamentos de Análise Numérica',
				Description: 'Introduzir o aluno no universo da computação científica, ressaltando o uso do computador na resolução de problemas em engenharia e física. Apresentar métodos numéricos básicos e desenvolver algoritmos para a sua programação em pseudo-código e em uma linguagem moderna,. Estudar os principais métodos numéricos sua implementação computacional, suas propriedades e capacidades na resolução de problemas da área de interesse do curso. Utilização de implementações desses métodos disponíveis no mercado.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SME0230',
					'SME0240'
				],
				Optional: true
			},
			{
				Code: 'SME0820',
				Name: 'Modelos de Regressão e Aprendizado Supervisionado I',
				Description: 'Apresentar as principais técnicas de análise de regressão e suas aplicações.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SME0221'
				],
				Optional: true
			},
			{
				Code: 'SME0230',
				Name: 'Introdução à Programação de Computadores',
				Description: 'A disciplina apresenta aos alunos, num enfoque prático, as ferramentas e os conceitos básicos de programação de computadores. O aluno aprenderá a desenvolver programas utilizando técnicas básicas de programação estruturada e o conceito de tipos de dados. Concomitantemente se familiarizará com a utilização de ferramentas necessárias para execução dessas tarefas. O curso também oferece um primeiro contato com o uso de computadores para desenvolvimento de programas.',
				ClassCredits: 6,
				AssignCredits: 2,
				TotalHours: '150 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SMA0361',
				Name: 'Tópicos de Matemática I',
				Description: 'Complementar a formação do estudante com tópicos mais específicos. O objetivo das disciplinas de Matemática I, II, III e IV é possibilitar uma maior flexibilidade e agilidade no currículo do Bacharelado em Matemática, permitindo que tópicos não usuais às disciplinas da grade curricular possam ser oferecidos.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SMA0341',
				Name: 'Elementos de Matemática',
				Description: 'Apresentar conceitos básicos para o estudo da matemática.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SMA0360',
				Name: 'Medida e Integração',
				Description: 'A disciplina reúne os tópicos básicos de Topologia que são indispensáveis aos alunos que desejam cursar uma pós-graduação em matemática.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0308'
				],
				Optional: true
			},
			{
				Code: 'SCC0252',
				Name: 'Visualização Computacional',
				Description: 'A área de visualização computacional engloba o desenvolvimento e aplicação de técnicas gráficas para apresentação e entendimento dos mais variados conjuntos de dados. Domínios de aplicação variam desde diagramas explicativos e gráficos de barra até dados meteorológicos, médicos, científicos, coleções de registros, documentos, imagens, etc. O objetivo desta disciplina é fornecer uma introdução à área de Visualização de Dados. Pretende-se abordar o que é Visualização, quais os seus objetivos, algoritmos e aplicações. Serão descritas técnicas de uso geral disponíveis atualmente e os tipos de dados que são visualizados. Os principais algoritmos e estruturas de dados serão apresentados. Um sistema de visualização será introduzido e utilizado pelos alunos na confecção dos trabalhos práticos.',
				ClassCredits: 3,
				AssignCredits: 0,
				TotalHours: '45 h',
				Requirements: [
					'SCC0240',
					'SCC0250'
				],
				Optional: true
			},
			{
				Code: 'SME0205',
				Name: 'Métodos do Cálculo Numérico I',
				Description: 'Introduzir o aluno no universo da computação científica, ressaltando o uso do computador na resolução de problemas em engenharia e física. Apresentar métodos numéricos básicos e desenvolver algoritmos para a sua programação em uma linguagem moderna, desenvolvendo interatividade, loopings e outros recursos. Estudar os principais métodos numéricos: sua implementação computacional, suas propriedades e capacidades na resolução de problemas da área de interesse do curso. Utilização de implementações desses métodos disponíveis no mercado.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0375',
					'SME0230'
				],
				Optional: false
			},
			{
				Code: 'SMA0343',
				Name: 'Espaços Métricos',
				Description: 'Generalizar o conceito de distância euclideana. Estabelecer o conceito de funções entre espaços métricos. Reconhecer as equivalências isométricas e topológicas entre tais espaços. Reconhecer as propriedades de conexidade e compacidade, bem como suas invariâncias por continuidade. Estabelecer propriedades dos espaços métricos completos.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0332'
				],
				Optional: false
			},
			{
				Code: 'SMA0352',
				Name: 'Atividades Teórico',
				Description: 'Cumprimento de 100 horas para as atividades acadêmico-científico-culturais, exigidas pela Resolução CNE/CP2, de 19/02/2002.',
				ClassCredits: 0,
				AssignCredits: 0,
				TotalHours: '0 h ( Atividades Acadêmicos-Científico-Culturais = 100 h )',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SMA0145',
				Name: 'Aplicações da Topologia à Análise',
				Description: 'Familiarizar o aluno com algumas aplicações da topologia à Análise, principalmente ligadas aos teoremas: ponto fixo de Banach, de Baire, de Brouwer, de Stone-Weierstrass e o de Ascoli.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0343',
					'SMA0380'
				],
				Optional: true
			},
			{
				Code: 'SMA0139',
				Name: 'Teoria Elementar dos Números',
				Description: 'Introduzir o estudante nos principais tópicos da teoria  elementar dos números e dar uma visão histórica de alguns dos  problemas clássicos desta teoria.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0341'
				],
				Optional: true
			},
			{
				Code: 'SMA0192',
				Name: 'Introdução à Topologia Diferencial',
				Description: 'Essa disciplina consiste em uma introdução simples à Topologia Diferencial, culminando com resultados na fronteira da geometria e da topologia de superfícies. As ferramentas introduzidas são essenciais ao estudo da geometria e também possuem aplicações em diversas outras áreas da Matemática.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SMA0308',
					'SMA0375'
				],
				Optional: false
			},
			{
				Code: 'SMA0328',
				Name: 'Ensino de Matemática Por Múltiplas Mídias',
				Description: 'Proporcionar ao licenciando uma visão geral de múltiplas ferramentas de informação que podem ser usadas para o Ensino da Matemática, como o jornal, o vídeo, a TV, a internet e outros. Desenvolver a capacidade crítica no uso destas ferramentas, tendo em vista os aspectos pedagógicos que visam a aprendizagem significativa  dos conteúdos tratados por estes meios.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h ( Práticas como Componentes Curriculares = 10 h )',
				Requirements: null,
				Optional: true
			},
			{
				Code: 'SMA0379',
				Name: 'Mecânica Quântica para Matemáticos',
				Description: 'O objetivo é dar ao aluno uma ideia da estrutura matemática subjacente à teoria de mecânica quântica concomitantemente com os conceitos físicos principais envolvidos.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SME0240'
				],
				Optional: false
			},
			{
				Code: 'SMA0348',
				Name: 'História da Matemática no Ensino',
				Description: 'Fornecer aos alunos da Licenciatura conhecimentos que subsidiem a utilização crítica da História da Matemática como um possível recurso pedagógico para o ensino de Matemática.',
				ClassCredits: 3,
				AssignCredits: 1,
				TotalHours: '75 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SMA0358',
				Name: 'Álgebra Avançada',
				Description: 'Apresentar aos alunos a Teoria de Grupos, a Teoria de Corpos e a Teoria de Galois sob um ponto de vista mais avançado.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0306'
				],
				Optional: true
			},
			{
				Code: 'SMA0136',
				Name: 'Teoria Qualitativa de Equações Diferenciais Ordinárias',
				Description: 'Conduzir os alunos ao conhecimento de técnicas de estudo de propriedades qualitativas de equações diferenciais ordinárias.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0240'
				],
				Optional: true
			},
			{
				Code: 'SCC0216',
				Name: 'Modelagem Computacional em Grafos',
				Description: 'Ensinar ao aluno a importância de grafos em computação, mostrando seus conceitos fundamentais, principais estruturas de dados e aplicações resolvidas por meio de grafos.',
				ClassCredits: 2,
				AssignCredits: 1,
				TotalHours: '60 h',
				Requirements: [
					'SCC0202'
				],
				Optional: true
			},
			{
				Code: 'SCC0215',
				Name: 'Organização de Arquivos',
				Description: 'Fornecer ao aluno noções de armazenamento em arquivos, técnicas de indexação, estrutura de dados e mecanismos eficientes para recuperação de dados em memória secundária.',
				ClassCredits: 3,
				AssignCredits: 2,
				TotalHours: '105 h',
				Requirements: [
					'SCC0201',
					'SCC0202'
				],
				Optional: true
			},
			{
				Code: 'SME0808',
				Name: 'Séries Temporais e Aprendizado Dinâmico',
				Description: 'Apresentar os conceitos básicos da teoria de tratamento estatístico de séries temporais, preparar o aluno para análise, identificação e previsão de uma série temporal.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0221'
				],
				Optional: true
			},
			{
				Code: 'SMA0380',
				Name: 'Análise',
				Description: 'Familiarizar o aluno com as técnicas de Análise Matemática.',
				ClassCredits: 6,
				AssignCredits: 0,
				TotalHours: '90 h ( Estágio: 90 h )',
				Requirements: [
					'SMA0356'
				],
				Optional: false
			},
			{
				Code: 'SME0878',
				Name: 'Mineração Estatística de Dados',
				Description: 'Apresentar ao aluno os principais conceitos e técnicas de mineração estatística de dados. A teoria será desenvolvida com aplicações em várias área do conhecimento, dentre as quais, biologia, economia, engenharia, finanças e medicina.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SME0220',
					'SME0221',
					'SME0230',
					'SME0820',
					'SME0822'
				],
				Optional: true
			},
			{
				Code: 'SMA0181',
				Name: 'Matemática Discreta II',
				Description: 'Dar aos alunos os conhecimentos básicos teóricos de matemática  combinatória e teoria dos grafos, habilitando-os a resolverem problemas da área de Ciências de Computação que fazem uso dessas teorias e técnicas.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SMA0344',
				Name: 'Introdução aos Sistemas Dinâmicos',
				Description: 'Familiarizar o aluno com os métodos simples para estudar comportamentos complexos em sistemas dinâmicos.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0171',
					'SMA0380'
				],
				Optional: true
			},
			{
				Code: 'SMA0300',
				Name: 'Geometria Analítica',
				Description: 'Visa familiarizar os alunos com a geometria analítica no plano e no espaço, com ênfase nos seus aspectos geométricos e suas traduções em coordenadas cartesianas',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SMA0332',
				Name: 'Cálculo II',
				Description: 'Familiarizar os alunos com os resultados fundamentais relativos a:  diferenciabilidade de  funções de várias variáveis, integrais múltiplas, integrais de linha, integrais de superfície.',
				ClassCredits: 6,
				AssignCredits: 0,
				TotalHours: '90 h',
				Requirements: [
					'SMA0301'
				],
				Optional: false
			},
			{
				Code: 'SMA0376',
				Name: 'Introdução à Metodologia Científica',
				Description: 'Proporcionar ao aluno a oportunidade de discutir e praticar aspectos relacionados ao desenvolvimento de pesquisa e divulgação dos conhecimentos científicos. Permitir uma primeira abordagem às considerações epistemológicas que fundamentam as pesquisas em matemática e em educação matemática. Capacitar o aluno para saber aplicar o método científico e saber identificar o conhecimento científico matemático e da educação matemática. Introduzir o aluno às questões da produção do conhecimento matemático e da educação matemática. Saber o que são os componentes da linguagem científica: teoria, hipótese, lei científica. Conhecer as diferentes formas de explicação científica e distingui-las das explicações de senso comum. Conhecer o que é um trabalho científico: “papers” e relatórios. Capacitar o aluno para saber como preparar um projeto de pesquisa. Como fazer uma pesquisa bibliográfica; relatar um experimento; redigir relatório e monografia.',
				ClassCredits: 2,
				AssignCredits: 1,
				TotalHours: '60 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: '7600006',
				Name: 'Física II',
				Description: 'Apresentar conceitos de Mecânica (rotações, oscilações, ondas e fluídos) e Termodinâmica.',
				ClassCredits: 5,
				AssignCredits: 0,
				TotalHours: '75 h',
				Requirements: null,
				Optional: false
			},
			{
				Code: '7600005',
				Name: 'Física I',
				Description: 'Apresentar conceitos fundamentais de Mecânica para massas pontuais.',
				ClassCredits: 5,
				AssignCredits: 0,
				TotalHours: '75 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SCC0201',
				Name: 'Introdução à Ciência de Computação II',
				Description: 'Apresentação de conceitos avançados que levem o aluno a uma maturidade em programação estruturada, com conhecimento de uma linguagem de programação com recursos avançados. Aprendizado de técnicas para construção de algoritmos e para análise da complexidade de algoritmos. Aprendizado de algoritmos clássicos de ordenação e busca em memória interna. Prática de Programação.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SME0230'
				],
				Optional: true
			},
			{
				Code: 'SMA0337',
				Name: 'Análise Crítica de Livros Didáticos',
				Description: 'Com esta disciplina pretende-se levar o aluno a um exame da literatura  disponível, com primazia para textos nacionais, relativa aos ensinos fundamental e médio, incluindo-se textos paradidáticos. Este exame deve se revestir de um caráter crítico, capaz de propiciar a avaliação das qualidades de um determinado texto em exame.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h ( Práticas como Componentes Curriculares = 55 h )',
				Requirements: [
					'SMA0178'
				],
				Optional: true
			},
			{
				Code: 'SME0221',
				Name: 'Introdução à Inferência Estatística',
				Description: '\tDar as noções básicas da Inferência Estatística assim como introduzir técnicas pertinentes à metodologia, apresentando problemas teóricos e de natureza prática exigindo-se que estes últimos sejam resolvidos, necessariamente, com os recursos do computador.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SME0220'
				],
				Optional: true
			},
			{
				Code: 'SMA0308',
				Name: 'Análise II',
				Description: 'Objetivo: Familiarizar o aluno com os conceitos de Análise Matemática, aprofundando o que já foi visto nas disciplinas de Cálculo.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0332',
					'SMA0356'
				],
				Optional: false
			},
			{
				Code: 'SCC0250',
				Name: 'Computação Gráfica',
				Description: '\tFornecer ao aluno familiarização com a computação gráfica, bem como conhecimento e prática dos conceitos básicos e aplicações.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SCC0204'
				],
				Optional: true
			},
			{
				Code: 'SMA0508',
				Name: 'Matemática Discreta',
				Description: 'Dar aos alunos os conhecimentos básicos teóricos de matemática combinatória e Teoria dos Números e Lógica, habilitando-os a resolverem problemas da área de Ciências de Computação que fazem uso dessas teorias e técnicas.',
				ClassCredits: 2,
				AssignCredits: 0,
				TotalHours: '30 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SCC0240',
				Name: 'Bases de Dados',
				Description: 'Objetivos: Fornecer conceitos, técnicas e características básicas dos Sistemas Gerenciadores de Bases de Dados, tornando o aluno capaz de desenvolver sistemas de informação centrados na busca de informações armazenadas em bases de dados.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SCC0215'
				],
				Optional: true
			},
			{
				Code: 'SMA0120',
				Name: 'Introdução à Análise Funcional',
				Description: 'Estudar os espaços vetoriais normados, bem como as aplicações lineares entre dois desses espaços, com ênfase no caso em que os espaços são de Banach ou de Hilbert.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SMA0123',
					'SMA0343'
				],
				Optional: false
			},
			{
				Code: 'SMA0143',
				Name: 'Introdução à Teoria da Medida',
				Description: 'Introduzir  à teoria da medida na reta e relacionar a integral de Lebesgue com a integral de Riemann e as integrais impróprias.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0308'
				],
				Optional: false
			},
			{
				Code: 'SME0220',
				Name: 'Introdução à Teoria das Probabilidades',
				Description: '\tFamiliarizar o aluno com o raciocínio probabilístico. Fornecer conhecimentos básicos para a compreensão adequada dos métodos estatísticos.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0301'
				],
				Optional: false
			},
			{
				Code: 'SME0130',
				Name: 'Redes Complexas',
				Description: 'Introduzir os conceitos básicos da teoria das redes complexas com a apresentação das ferramentas fundamentais para a representação, modelagem e caracterização e classificação de redes complexas. Os conceitos serão aplicados na análise da Internet, da World Wide Web, da linguagem, da sociedade, de cadeias alimentares, das interações celulares e de malhas rodoviárias.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SCC0216'
				],
				Optional: true
			},
			{
				Code: 'SME0822',
				Name: 'Análise Multivariada e Aprendizado Não Supervisionado',
				Description: 'Estudo de métodos multivariados de análise de dados e de aprendizado não supervisionado. Análise de variância multivariada. Análise de componentes principais. Análise fatorial. Análise de Agrupamentos Análise de correlação canônica. Análise de correspondência.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0221'
				],
				Optional: true
			},
			{
				Code: 'SMA0175',
				Name: 'Geometria Diferencial',
				Description: 'Apresentar ao estudante de Matemática um primeiro curso de Geometria Diferencial, discutindo propriedades locais e algumas propriedades intrínsecas de superfícies.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0300',
					'SMA0332',
					'SMA0375'
				],
				Optional: false
			},
			{
				Code: 'SCC0244',
				Name: 'Mineração a partir de Grandes Bases de Dados',
				Description: 'Apresentar conceitos, técnicas e ferramentas relevantes na área de descoberta de conhecimento em bases de dados e mineração de dados, sob a perspectiva da área de bases de dados, explorando com profundidade os aspectos associados a esta área.',
				ClassCredits: 3,
				AssignCredits: 0,
				TotalHours: '45 h',
				Requirements: [
					'SCC0230',
					'SCC0240'
				],
				Optional: true
			}
		]
	},
	{
		Name: 'Bacharelado em Matemática Aplicada e Computação Científica',
		Code: '55060',
		Subjects: [
			{
				Code: 'SMA0341',
				Name: 'Elementos de Matemática',
				Description: 'Apresentar conceitos básicos para o estudo da matemática.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SMA0301',
				Name: 'Cálculo I',
				Description: 'Fazer com que os alunos familiarizem-se com os conceitos de  limite, continuidade, diferenciabilidade e integração de  funções de uma variável.',
				ClassCredits: 6,
				AssignCredits: 0,
				TotalHours: '90 h ( Práticas como Componentes Curriculares = 20 h )',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SMA0305',
				Name: 'Álgebra I',
				Description: 'Esta disciplina tem como finalidade  fornecer ao aluno de matemática uma formação mais abrangente em  Álgebra.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0341'
				],
				Optional: false
			},
			{
				Code: 'SMA0334',
				Name: 'Fundamentos para a Matemática do Ensino Superior',
				Description: 'Esta disciplina tem por objetivo a revisão crítica de alguns conteúdos da Matemática do Ensino Médio, com certo aprofundamento destas ideias. Servirá para sedimentar a base matemática necessária para um melhor aproveitamento em outras disciplinas da graduação. O enfoque é na solução de problemas possíveis de serem resolvidos com a matemática de ensino não superior, mas que normalmente não são feitos por falta de maturidade dos alunos no Ensino Básico. A parte (1) do programa se refere a conceitos imediatamente necessários para a disciplina de Cálculo I e, sendo assim, deve ser ministrada logo no início do período letivo. Para a parte (2) deve ser feita uma abordagem crítica, incluindo demonstrações pertinentes. A rememoração das experiências anteriores do aluno, enquanto discente do Ensino Básico, e o confronto de novas propostas para o processo de ensino-aprendizagem desses conteúdos colaboram, assim, para a formação do futuro professor de Matemática.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h ( Práticas como Componentes Curriculares = 30 h )',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SCC0223',
				Name: 'Estruturas de dados I',
				Description: 'Familiarizar os estudantes com as várias estruturas da informação, buscando habilitá-los a contar com esses recursos no desenvolvimento de outras atividades de ciências de computação.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SME0230'
				],
				Optional: false
			},
			{
				Code: 'SME0805',
				Name: 'Processos Estocásticos',
				Description: 'Fornecer ao aluno base teórica em Processos Estocásticos para que possa desenvolver modelos e apreciar suas aplicações com consistência e incluindo métodos de Simulação Estocástica.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0220'
				],
				Optional: true
			},
			{
				Code: 'SME0220',
				Name: 'Introdução à Teoria das Probabilidades',
				Description: '\tFamiliarizar o aluno com o raciocínio probabilístico. Fornecer conhecimentos básicos para a compreensão adequada dos métodos estatísticos.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0301'
				],
				Optional: false
			},
			{
				Code: 'SCC0270',
				Name: 'Redes Neurais e Aprendizado Profundo',
				Description: 'Apresentar ao aluno os conceitos básicos de Redes Neurais Artificiais e os principais modelos existentes. Analisar o comportamento destes modelos, suas capacidades fundamentais e limitações, possibilitando a utilização destas técnicas na resolução de problemas práticos.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SCC0230'
				],
				Optional: true
			},
			{
				Code: 'SME0205',
				Name: 'Métodos do Cálculo Numérico I',
				Description: 'Introduzir o aluno no universo da computação científica, ressaltando o uso do computador na resolução de problemas em engenharia e física. Apresentar métodos numéricos básicos e desenvolver algoritmos para a sua programação em uma linguagem moderna, desenvolvendo interatividade, loopings e outros recursos. Estudar os principais métodos numéricos: sua implementação computacional, suas propriedades e capacidades na resolução de problemas da área de interesse do curso. Utilização de implementações desses métodos disponíveis no mercado.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0375',
					'SME0230'
				],
				Optional: false
			},
			{
				Code: 'SEM0403',
				Name: 'Fundamentos da Mecânica dos Fluidos',
				Description: 'Fornecer os conhecimentos básicos da mecânica dos fluidos, destacando a aplicação aos processos e às máquinas térmicas.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: null,
				Optional: true
			},
			{
				Code: 'SME0221',
				Name: 'Introdução à Inferência Estatística',
				Description: '\tDar as noções básicas da Inferência Estatística assim como introduzir técnicas pertinentes à metodologia, apresentando problemas teóricos e de natureza prática exigindo-se que estes últimos sejam resolvidos, necessariamente, com os recursos do computador.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SME0220'
				],
				Optional: false
			},
			{
				Code: 'SME0812',
				Name: 'Modelos Lineares',
				Description: 'Introduzir os fundamentos dos modelos lineares.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0221'
				],
				Optional: true
			},
			{
				Code: 'SMA0300',
				Name: 'Geometria Analítica',
				Description: 'Visa familiarizar os alunos com a geometria analítica no plano e no espaço, com ênfase nos seus aspectos geométricos e suas traduções em coordenadas cartesianas',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SCC0240',
				Name: 'Bases de Dados',
				Description: 'Objetivos: Fornecer conceitos, técnicas e características básicas dos Sistemas Gerenciadores de Bases de Dados, tornando o aluno capaz de desenvolver sistemas de informação centrados na busca de informações armazenadas em bases de dados.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SCC0223'
				],
				Optional: true
			},
			{
				Code: 'SME0240',
				Name: 'Equações Diferenciais Ordinárias',
				Description: 'Familiarizar o aluno com a teoria das equações diferenciais ordinárias e desenvolver técnicas de resolução das mesmas.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0301',
					'SMA0375'
				],
				Optional: false
			},
			{
				Code: 'SCC0219',
				Name: 'Introdução ao Desenvolvimento Web',
				Description: 'Introduzir conhecimentos sobre desenvolvimento de aplicações Web envolvendo programação e manipulação de Bancos de Dados.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SMA0181',
				Name: 'Matemática Discreta II',
				Description: 'Dar aos alunos os conhecimentos básicos teóricos de matemática  combinatória e teoria dos grafos, habilitando-os a resolverem problemas da área de Ciências de Computação que fazem uso dessas teorias e técnicas.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SME0806',
				Name: 'Estatística Computacional',
				Description: 'Estudar técnicas computacionais utilizadas na solução de problemas de Estatística.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SME0221'
				],
				Optional: true
			},
			{
				Code: 'SCC0204',
				Name: 'Programação Orientada a Objetos',
				Description: 'Introduzir os conceitos de programação orientada a objetos e metodologia de desenvolvimento de software segundo esse paradigma.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SCC0223'
				],
				Optional: false
			},
			{
				Code: 'SME0821',
				Name: 'Análise de Sobrevivência e Confiabilidade',
				Description: 'Introduzir fundamentos básicos de análise de sobrevivência e de confiabilidade.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0221'
				],
				Optional: true
			},
			{
				Code: 'SMA0375',
				Name: 'Álgebra Linear',
				Description: 'Levar os alunos ao uso de ferramentas algébricas, visando as demais disciplinas.',
				ClassCredits: 6,
				AssignCredits: 0,
				TotalHours: '90 h ( Práticas como Componentes Curriculares = 30 h )',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SME0230',
				Name: 'Introdução à Programação de Computadores',
				Description: 'A disciplina apresenta aos alunos, num enfoque prático, as ferramentas e os conceitos básicos de programação de computadores. O aluno aprenderá a desenvolver programas utilizando técnicas básicas de programação estruturada e o conceito de tipos de dados. Concomitantemente se familiarizará com a utilização de ferramentas necessárias para execução dessas tarefas. O curso também oferece um primeiro contato com o uso de computadores para desenvolvimento de programas.',
				ClassCredits: 6,
				AssignCredits: 2,
				TotalHours: '150 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SMA0308',
				Name: 'Análise II',
				Description: 'Objetivo: Familiarizar o aluno com os conceitos de Análise Matemática, aprofundando o que já foi visto nas disciplinas de Cálculo.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0380'
				],
				Optional: true
			},
			{
				Code: 'SME0816',
				Name: 'Planejamento de Experimentos I',
				Description: 'Apresentar técnicas específicas de planejamento de experimentos com aplicações em indústria,  finanças, medicina e outros.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SME0221'
				],
				Optional: true
			},
			{
				Code: 'SCC0252',
				Name: 'Visualização Computacional',
				Description: 'A área de visualização computacional engloba o desenvolvimento e aplicação de técnicas gráficas para apresentação e entendimento dos mais variados conjuntos de dados. Domínios de aplicação variam desde diagramas explicativos e gráficos de barra até dados meteorológicos, médicos, científicos, coleções de registros, documentos, imagens, etc. O objetivo desta disciplina é fornecer uma introdução à área de Visualização de Dados. Pretende-se abordar o que é Visualização, quais os seus objetivos, algoritmos e aplicações. Serão descritas técnicas de uso geral disponíveis atualmente e os tipos de dados que são visualizados. Os principais algoritmos e estruturas de dados serão apresentados. Um sistema de visualização será introduzido e utilizado pelos alunos na confecção dos trabalhos práticos.',
				ClassCredits: 3,
				AssignCredits: 0,
				TotalHours: '45 h',
				Requirements: [
					'SCC0250'
				],
				Optional: true
			},
			{
				Code: 'SME0250',
				Name: 'Métodos Numéricos para Geração de Malhas',
				Description: 'Familiarização do estudante com técnicas numéricas de geração de malhas computacionais para resolução de problemas que são modelados por equações diferenciais parciais.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SMA0333'
				],
				Optional: true
			},
			{
				Code: 'SCC0230',
				Name: 'Inteligência Artificial',
				Description: 'Apresentar ao aluno as idéias fundamentais da Inteligência Artificial e algumas características relacionadas à implementação desse tipo de sistemas.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SCC0223'
				],
				Optional: true
			},
			{
				Code: '7600006',
				Name: 'Física II',
				Description: 'Apresentar conceitos de Mecânica (rotações, oscilações, ondas e fluídos) e Termodinâmica.',
				ClassCredits: 5,
				AssignCredits: 0,
				TotalHours: '75 h',
				Requirements: null,
				Optional: false
			},
			{
				Code: 'SCC0224',
				Name: 'Estruturas de dados II',
				Description: 'Apresentação de conceitos avançados que levem o aluno a uma maturidade em programação estruturada, com conhecimento de uma linguagem de programação com recursos avançados.Aprendizado de técnicas para construção de algoritmos e para análise da complexidade de algoritmos.Aprendizado de algoritmos clássicos de ordenação e busca em memória interna. Prática de Programação.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SCC0223'
				],
				Optional: false
			},
			{
				Code: 'SME0251',
				Name: 'Mecânica dos Fluidos Computacional I',
				Description: 'Familiarização do estudante com técnicas numéricas para a solução das equações que modelam escoamentos incompressíveis.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SME0205',
					'SME0206'
				],
				Optional: true
			},
			{
				Code: 'SME0256',
				Name: 'Introdução a Modelagem Computacional na Indústria Petrolífera',
				Description: 'Introduzir o aluno à modelagem de problemas físicos relacionados à indústria de exploração de petróleo e sua solução através de métodos numéricos e computacionais.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0206'
				],
				Optional: true
			},
			{
				Code: 'SME0254',
				Name: 'Método dos Elementos Finitos Aplicados à Mecânica dos Fluídos',
				Description: 'Familiarização do estudante com técnicas do método de elementos finitos para a solução de problemas de modelagem matemática.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0203'
				],
				Optional: true
			},
			{
				Code: 'SCC0215',
				Name: 'Organização de Arquivos',
				Description: 'Fornecer ao aluno noções de armazenamento em arquivos, técnicas de indexação, estrutura de dados e mecanismos eficientes para recuperação de dados em memória secundária.',
				ClassCredits: 3,
				AssignCredits: 2,
				TotalHours: '105 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SME0245',
				Name: 'Funções de Variável Complexa',
				Description: 'Levar os alunos ao estudo das funções de variáveis complexas e suas aplicações.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0332',
					'SMA0333'
				],
				Optional: false
			},
			{
				Code: '7600005',
				Name: 'Física I',
				Description: 'Apresentar conceitos fundamentais de Mecânica para massas pontuais.',
				ClassCredits: 5,
				AssignCredits: 0,
				TotalHours: '75 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SME0822',
				Name: 'Análise Multivariada e Aprendizado Não Supervisionado',
				Description: 'Estudo de métodos multivariados de análise de dados e de aprendizado não supervisionado. Análise de variância multivariada. Análise de componentes principais. Análise fatorial. Análise de Agrupamentos Análise de correlação canônica. Análise de correspondência.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0221'
				],
				Optional: true
			},
			{
				Code: 'SEM0550',
				Name: 'Transferência de Calor e Massa',
				Description: 'Desenvolver atividades analíticas, numéricas e experimentais com base nos conceitos da mecânica dos fluídos e do transporte de calor e massa.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SEM0403'
				],
				Optional: true
			},
			{
				Code: 'SMA0180',
				Name: 'Matemática Discreta I',
				Description: 'Dar aos alunos os conhecimentos básicos de Contagem e Combinatória, Relações, Teoria dos Números no contexto de Criptografia, Inferência e Prova, e Indução Matemática, habilitando-os a resolverem problemas da área de Ciências de Computação.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SME0803',
				Name: 'Visualização e Exploração de Dados',
				Description: 'Fornecer ao aluno conhecimentos sobre as principais técinicas estatísticas para descrição dos dados de acordo com os objetivos específicos da pesquisa. Ilustrar a aplicação das técnicas a conjuntos de dados reais, utilizando-se os principais pacotes estatísticos.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SMA0175',
				Name: 'Geometria Diferencial',
				Description: 'Apresentar ao estudante de Matemática um primeiro curso de Geometria Diferencial, discutindo propriedades locais e algumas propriedades intrínsecas de superfícies.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0300',
					'SMA0332',
					'SMA0375'
				],
				Optional: false
			},
			{
				Code: 'SCC0276',
				Name: 'Aprendizado de Máquina',
				Description: 'Apresentar os aspectos fundamentais e principais algoritmos de aprendizado de máquina, que investiga técnicas para desenvolver algoritmos capazes de aprender, ou melhorar seu desempenho, utilizando exemplos de situações previamente observadas. Serão investigados algoritmos que seguem diferentes paradigmas, incluindo algoritmos baseados em procura (algoritmos de indução de arvores de decisão e de conjuntos de regras, redes neurais artificiais (perceptron e multilayer perceptron), modelos probabilísticos (regressão logística e naive Bayes) e algoritmos baseados em distancia. Além do estudo dos algoritmos de aprendizado baseados em diferentes paradigmas, será estudada a realização experimentos com desses algoritmos para entender  como eles induzem conhecimento utilizando aplicações reais.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SCC0230'
				],
				Optional: true
			},
			{
				Code: 'SMA0380',
				Name: 'Análise',
				Description: 'Familiarizar o aluno com as técnicas de Análise Matemática.',
				ClassCredits: 6,
				AssignCredits: 0,
				TotalHours: '90 h ( Estágio: 90 h )',
				Requirements: [
					'SMA0332'
				],
				Optional: false
			},
			{
				Code: 'SME0871',
				Name: 'Bioestatística',
				Description: 'Fornecer ao aluno conceitos básicos sobre epidemiologia clínica e bioestatística.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0803',
					'SME0820',
					'SME0822'
				],
				Optional: true
			},
			{
				Code: 'SCC0272',
				Name: 'Introdução à Computação Bioinspirada',
				Description: 'Computação Bioinspirada é uma área de Pesquisa que utiliza técnicas de Computação com inspiração Biológica para a resolução de problemas práticos. Esta disciplina tem por objetivo o aprendizado de conceitos biológicos envolvidos com a computação bioinspirada, técnicas computacionais bioinspiradas e utilização destas técnicas em problemas práticos.',
				ClassCredits: 3,
				AssignCredits: 2,
				TotalHours: '105 h',
				Requirements: [
					'SCC0224'
				],
				Optional: true
			},
			{
				Code: 'SME0808',
				Name: 'Séries Temporais e Aprendizado Dinâmico',
				Description: 'Apresentar os conceitos básicos da teoria de tratamento estatístico de séries temporais, preparar o aluno para análise, identificação e previsão de uma série temporal.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0221'
				],
				Optional: true
			},
			{
				Code: 'SME0823',
				Name: 'Modelos de Regressão e Aprendizado  Supervisionado II',
				Description: 'Apresentar conceitos introdutórios de modelos lineares generalizados em um enfoque computacional.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SME0221'
				],
				Optional: true
			},
			{
				Code: 'SME0272',
				Name: 'Introdução à Geometria Computacional',
				Description: 'Familiarizar o aluno com os conceitos e métodos básicos de Geometria Computacional.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SCC0218',
				Name: 'Algoritmos Avançados e Aplicações',
				Description: 'Permitir o contato do aluno com problemas clássicos e novos de computação que envolvam a análise de soluções variadas e os mais diversos paradigmas de programação.',
				ClassCredits: 2,
				AssignCredits: 2,
				TotalHours: '90 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SME0878',
				Name: 'Mineração Estatística de Dados',
				Description: 'Apresentar ao aluno os principais conceitos e técnicas de mineração estatística de dados. A teoria será desenvolvida com aplicações em várias área do conhecimento, dentre as quais, biologia, economia, engenharia, finanças e medicina.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SME0220',
					'SME0221',
					'SME0230',
					'SME0820',
					'SME0822'
				],
				Optional: true
			},
			{
				Code: 'SME0216',
				Name: 'Tópicos de Otimização Combinatória',
				Description: 'Familiarizar os alunos com assuntos recentes e novas técnicas em otimização combinatória',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0211'
				],
				Optional: true
			},
			{
				Code: 'SME0809',
				Name: 'Inferência Bayesiana',
				Description: 'Familiarizar o estudante com teorias de inferência condicionais e suas aplicações.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0221'
				],
				Optional: true
			},
			{
				Code: 'SME0820',
				Name: 'Modelos de Regressão e Aprendizado Supervisionado I',
				Description: 'Apresentar as principais técnicas de análise de regressão e suas aplicações.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SME0221'
				],
				Optional: true
			},
			{
				Code: 'SME0274',
				Name: 'Tópicos em Matemática Aplicada II',
				Description: 'Complementar a formação do estudante com tópicos mais específicos. O objetivo da disciplina de Tópicos em Matemática Aplicada II é possibilitar uma maior flexibilidade e agilidade no currículo do Bacharelado em Matemática Aplicada e Computação Científica, permitindo que tópicos não usuais à disciplina da grade curricular possam ser oferecidos.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SME0206',
				Name: 'Fundamentos de Análise Numérica',
				Description: 'Introduzir o aluno no universo da computação científica, ressaltando o uso do computador na resolução de problemas em engenharia e física. Apresentar métodos numéricos básicos e desenvolver algoritmos para a sua programação em pseudo-código e em uma linguagem moderna,. Estudar os principais métodos numéricos sua implementação computacional, suas propriedades e capacidades na resolução de problemas da área de interesse do curso. Utilização de implementações desses métodos disponíveis no mercado.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SME0230',
					'SME0240'
				],
				Optional: false
			},
			{
				Code: 'SME0241',
				Name: 'Introdução à Modelagem Matemática',
				Description: 'A partir de problemas básicos das áreas de estatística, otimização e mecânica dos fluidos computacional, desenvolver alguns projetos envolvendo a noção de aproximação, aplicações de vetores e geometria e de álgebra linear, apresentando, em cada um deles, um modelo matemático e a teoria básica envolvida, com uma eventual visualização gráfica e/ou numérica com auxílio de algum "software". Reconhecer etapas de desenvolvimento de modelos matemáticos.',
				ClassCredits: 2,
				AssignCredits: 0,
				TotalHours: '30 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SME0811',
				Name: 'Análise de Dados Categorizados',
				Description: 'Apresentar métodos e teoria de análise de dados categorizados.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0221'
				],
				Optional: true
			},
			{
				Code: 'SME0264',
				Name: 'Modelos Lineares Generalizados',
				Description: 'Apresentar conceitos introdutórios de modelos lineares generalizados em um enfoque computacional.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0220',
					'SME0221'
				],
				Optional: true
			},
			{
				Code: 'SME0121',
				Name: 'Processos Estocásticos',
				Description: '\tFornecer ao aluno base teórica em Processos Estocásticos para que possa apreciar suas aplicações, principalmente voltadas às áreas de Redes de Computadores, análise de Sistemas, etc, com consistência e incluindo métodos de Simulação Estocásticas.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0220'
				],
				Optional: true
			},
			{
				Code: 'SME0284',
				Name: 'Estágio Supervisionado',
				Description: 'Permitir que o aluno avançado no curso (com no mínimo 100 créditos cursados) se familiarize com o ambiente onde poderá exercer sua profissão. Além disso, dar-lhe uma visão mais abrangente da área e a possibilidade de trabalhar junto a uma equipe desenvolvendo um projeto da prática profissional.',
				ClassCredits: 4,
				AssignCredits: 10,
				TotalHours: '360 h ( Estágio: 300 h )',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SME0271',
				Name: 'Modelagem Geométrica',
				Description: 'Familiarização do estudante com técnicas de representação e resolução  prática de modelos geométricos.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SME0276',
				Name: 'Tópicos em Matemática Aplicada IV',
				Description: 'Complementar a formação do estudante com tópicos mais específicos. O objetivo da disciplina de Tópicos em Matemática Aplicada IV é possibilitar uma maior flexibilidade e agilidade no currículo do Bacharelado em Matemática Aplicada e Computação Científica, permitindo que tópicos não usuais à disciplina da grade curricular possam ser oferecidos.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SME0280',
				Name: 'Acompanhamento Profissional',
				Description: 'Propiciar um acompanhamento do progresso acadêmico dos alunos no 1o. semestre do curso, detectando-se os problemas gerais e propondo soluções, além de guiar a formação do aluno.',
				ClassCredits: 2,
				AssignCredits: 0,
				TotalHours: '30 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SMA0169',
				Name: 'Equações Diferenciais Parciais',
				Description: 'Familiarizar os alunos com técnicas clássicas de resoluções de equações diferenciais parciais de primeira e de segunda ordem, motivando-os através dos problemas físicos que promoveram o aparecimento desta área da Matemática.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0380',
					'SME0240'
				],
				Optional: false
			},
			{
				Code: 'SCC0250',
				Name: 'Computação Gráfica',
				Description: '\tFornecer ao aluno familiarização com a computação gráfica, bem como conhecimento e prática dos conceitos básicos e aplicações.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SCC0204'
				],
				Optional: false
			},
			{
				Code: 'SME0873',
				Name: 'Econometria',
				Description: 'Familiarizar o estudante com a aplicação de métodos estatísticos na solução de problemas em Economia.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0221',
					'SME0820'
				],
				Optional: true
			},
			{
				Code: 'SME0253',
				Name: 'Mecânica dos Fluidos Computacional II',
				Description: 'Familiarização do estudante com técnicas numéricas para a solução das equações que modelam escoamentos compressíveis.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SME0205',
					'SME0206'
				],
				Optional: true
			},
			{
				Code: 'SME0130',
				Name: 'Redes Complexas',
				Description: 'Introduzir os conceitos básicos da teoria das redes complexas com a apresentação das ferramentas fundamentais para a representação, modelagem e caracterização e classificação de redes complexas. Os conceitos serão aplicados na análise da Internet, da World Wide Web, da linguagem, da sociedade, de cadeias alimentares, das interações celulares e de malhas rodoviárias.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SCC0224'
				],
				Optional: true
			},
			{
				Code: 'SME0275',
				Name: 'Tópicos de Matemática Aplicada III',
				Description: 'Complementar a formação do estudante com tópicos mais específicos. O objetivo da disciplina de Tópicos em Matemática Aplicada III é possibilitar uma maior flexibilidade e agilidade no currículo do Bacharelado em Matemática Aplicada e Computação Científica, permitindo que tópicos não usuais à disciplina da grade curricular possam ser oferecidos.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SMA0332',
				Name: 'Cálculo II',
				Description: 'Familiarizar os alunos com os resultados fundamentais relativos a:  diferenciabilidade de  funções de várias variáveis, integrais múltiplas, integrais de linha, integrais de superfície.',
				ClassCredits: 6,
				AssignCredits: 0,
				TotalHours: '90 h',
				Requirements: [
					'SMA0301'
				],
				Optional: false
			},
			{
				Code: 'SME0222',
				Name: 'Sistemas Estocásticos',
				Description: 'Fornecer ao aluno uma base conceitual em sistemas estocásticos, com ênfase em sistemas lineares, envolvendo aspectos teóricos e práticos, incluindo noções de modelagem e propriedades estruturais.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0121',
					'SME0220'
				],
				Optional: true
			},
			{
				Code: 'SME0215',
				Name: 'Laboratório de Otimização',
				Description: 'Capacitar o aluno a perceber, formular e resolver problemas práticos de otimização.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SME0212',
					'SME0213'
				],
				Optional: true
			},
			{
				Code: 'SME0243',
				Name: 'Teoria Espectral de Matrizes',
				Description: 'O curso tem como objetivo introduzir aos alunos o conceito de teoria espectral de matrizes e subespaços associados. Conceitos importantes no contexto de matemática aplicada como decomposição em valores singulares e análise de componentes principais também são abordados no curso.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0375'
				],
				Optional: false
			},
			{
				Code: 'SME0893',
				Name: 'Atividades Acadêmicas Complementares I',
				Description: 'Complementar a formação profissional, científica, social e cultural do estudante de Estatística e Ciência de\nDados. Incentivar e valorizar a participação do estudante em atividades acadêmicas e profissionais que\nampliem as dimensões dos componentes curriculares relacionados à atuação do profissional.',
				ClassCredits: 0,
				AssignCredits: 1,
				TotalHours: '30 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SME0255',
				Name: 'Simulação Computacional de Fluidos',
				Description: 'Introduzir ao aluno à simulação de escoamentos de fluidos com software de mecânica dos fluidos computacional, tanto discutindo a teoria necessária quanto através da experimentação direta em laboratório. Apresentar ao aluno todo o processo que vai da preparação dos dados até a interpretação dos resultados de uma simulação.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SME0824',
				Name: 'Gestão da Qualidade',
				Description: 'Introduzir os princípios básicos da qualidade e as principais normas associadas a sistemas da qualidade. Apresentar as ferramentas estatísticas mais utilizadas no desenvolvimento da metodologia 6 Sigma.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0221'
				],
				Optional: true
			},
			{
				Code: 'SMA0343',
				Name: 'Espaços Métricos',
				Description: 'Generalizar o conceito de distância euclideana. Estabelecer o conceito de funções entre espaços métricos. Reconhecer as equivalências isométricas e topológicas entre tais espaços. Reconhecer as propriedades de conexidade e compacidade, bem como suas invariâncias por continuidade. Estabelecer propriedades dos espaços métricos completos.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0332'
				],
				Optional: false
			},
			{
				Code: 'SME0242',
				Name: 'Modelagem Matemática',
				Description: 'A partir de problemas das áreas de estatística, otimização e mecânica dos fluidos computacional, desenvolver alguns projetos envolvendo a noção de aproximação, aplicações de vetores e geometria, de álgebra linear e de equações diferenciais ordinárias, apresentando, em cada um deles, um modelo matemático e a teoria básica envolvida, com uma eventual visualização gráfica e/ou numérica com auxílio de algum "software".',
				ClassCredits: 2,
				AssignCredits: 1,
				TotalHours: '60 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SME0202',
				Name: 'Métodos Numéricos em Equações Diferenciais',
				Description: 'Familiarização do estudante com técnicas numéricas para resolução prática de modelos matemáticos baseados em equações diferenciais.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SME0240'
				],
				Optional: false
			},
			{
				Code: 'SME0211',
				Name: 'Otimização Linear',
				Description: 'Capacitar o aluno a perceber, formular e resolver problemas de otimização linear.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SMA0375'
				],
				Optional: false
			},
			{
				Code: 'SME0285',
				Name: 'Projeto de Graduação',
				Description: 'Permitir que o aluno avançado no curso (com no mínimo 100 créditos cursados) se familiarize com o ambiente científico-acadêmico, onde poderá exercer sua profissão. Além disso, dar-lhe uma visão mais abrangente da área e a possibilidade de trabalhar junto a uma equipe desenvolvendo um projeto da prática profissional.',
				ClassCredits: 4,
				AssignCredits: 10,
				TotalHours: '360 h ( Estágio: 300 h )',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SME0214',
				Name: 'Fluxos em Redes',
				Description: 'Capacitar o aluno a perceber, formular e resolver problemas de fluxos em redes.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SME0211'
				],
				Optional: true
			},
			{
				Code: '5500002',
				Name: 'Seminários em Gestão Organizacional',
				Description: 'O objetivo principal desta disciplina é abordar tópicos variados de gestão organizacional, de forma generalista, apresentando aos alunos uma visão geral das várias frentes da gestão, contribuindo para sua formação técnica e humanística em seu futuro profissional.',
				ClassCredits: 1,
				AssignCredits: 1,
				TotalHours: '45 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SME0252',
				Name: 'Sistemas Esparsos e Computação Paralela',
				Description: 'Esta disciplina tem por objetivo fornecer ao aluno técnicas de resolução de sistemas de equações lineares de grande porte sob o ponto de vista de paralelização.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SCC0203'
				],
				Optional: true
			},
			{
				Code: 'SME0273',
				Name: 'Tópicos de Matemática Aplicada I',
				Description: 'Complementar a formação do estudante com tópicos mais específicos. O objetivo da disciplina de Tópicos em Matemática Aplicada I é possibilitar uma maior flexibilidade e agilidade no currículo do Bacharelado em Matemática Aplicada e Computação Científica, permitindo que tópicos não usuais à disciplina da grade curricular possam ser oferecidos.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SME0262',
				Name: 'Análise de Séries Temporais em Finanças',
				Description: 'Apresentar as terminologias, definições básicas e os principais modelos de séries temporais aplicados em finanças, preparar o aluno para análise de séries financeiras.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0121',
					'SME0220'
				],
				Optional: true
			},
			{
				Code: '7600107',
				Name: 'Física III',
				Description: 'Fornecer ao aluno noções básicas de circuitos elétricos em corrente contínua e corrente alternada e dar uma visão global dos conceitos fundamentais de eletricidade e magnetismo.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SCC0275',
				Name: 'Introdução à Ciência de Dados',
				Description: 'Complementar a formação dos alunos de graduação em Computação com interesse em conhecer os principais conceitos e técnicas da área de Ciência de Dados. O curso visa prover teoria e prática a fim de que os alunos possam aplicar as novas técnicas e ferramentas estudadas em problemas reais.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SCC0230'
				],
				Optional: true
			},
			{
				Code: 'SME0212',
				Name: 'Otimização Não Linear',
				Description: 'Capacitar o aluno a perceber, formular e resolver problemas de otimização não linear.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SMA0332',
					'SMA0375',
					'SME0230'
				],
				Optional: true
			},
			{
				Code: 'SME0213',
				Name: 'Otimização Inteira',
				Description: 'Capacitar o aluno a perceber, formular e resolver problemas de otimização inteira.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SME0211'
				],
				Optional: true
			},
			{
				Code: 'SME0817',
				Name: 'Planejamento de Experimentos II',
				Description: 'Apresentar técnicas específicas de planejamento de experimentos com aplicações em indústria,  finanças, medicina e outros.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0816'
				],
				Optional: true
			},
			{
				Code: 'SCC0244',
				Name: 'Mineração a partir de Grandes Bases de Dados',
				Description: 'Apresentar conceitos, técnicas e ferramentas relevantes na área de descoberta de conhecimento em bases de dados e mineração de dados, sob a perspectiva da área de bases de dados, explorando com profundidade os aspectos associados a esta área.',
				ClassCredits: 3,
				AssignCredits: 0,
				TotalHours: '45 h',
				Requirements: [
					'SCC0230',
					'SCC0240'
				],
				Optional: true
			}
		]
	},
	{
		Name: 'Bacharelado em Sistemas de Informação',
		Code: '55051',
		Subjects: [
			{
				Code: 'SSC0154',
				Name: 'Seminários Avançados em Sistemas Distribuídos e Programação Concorrente I',
				Description: 'Fornecer ao aluno conceitos avançados em Sistemas Distribuídos e Programação Concorrente, permitindo que ele conheça algumas das principais pesquisas em desenvolvimento nos principais centros de pesquisa nacionais e internacionais. Tem também por objetivo motivar a Iniciação Científica e fortalecer a ligação da graduação com a pós-graduação do departamento, incentivando alunos de graduação a participarem da trilha.',
				ClassCredits: 3,
				AssignCredits: 0,
				TotalHours: '45 h',
				Requirements: [
					'SSC0541'
				],
				Optional: true
			},
			{
				Code: 'SCC0503',
				Name: 'Algoritmos e Estruturas de Dados II',
				Description: 'Estudo e resolução de problemas que utilizam estruturas de dados e algoritmos em memória externa. Estudo e resolução de problemas que utilizam estruturas de dados e algoritmos clássicos sobre grafos.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SCC0502'
				],
				Optional: false
			},
			{
				Code: 'SCC0541',
				Name: 'Laboratório de Bases de Dados',
				Description: 'Desenvolvimento de aplicações práticas utilizando sistemas gerenciadores de bancos de dados relacionais e ferramentas de apoio. Consolidação da teoria desenvolvida na disciplina de Bases de Dados.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SCC0540'
				],
				Optional: false
			},
			{
				Code: 'SCC0268',
				Name: 'Seminários Avançados em Sistemas Hipermídia e Multimídia I',
				Description: 'Investigação do estado-da-arte em termos do relacionamento das tecnologias de multimídia e hipermídia com as demais tecnologias da computação, como por exemplo redes de computadores, banco de dados, sistemas distribuídos, computação ubíqua, interação usuário-computador e visualização da informação. Tem também por objetivo motivar a realizar programa de Iniciação Científica e fortalecer a ligação da graduação com a pós-graduação do departamento, incentivando alunos de graduação a participarem do programa trilha graduação-mestrado.',
				ClassCredits: 3,
				AssignCredits: 0,
				TotalHours: '45 h',
				Requirements: [
					'SCC0560'
				],
				Optional: true
			},
			{
				Code: 'SME0808',
				Name: 'Séries Temporais e Aprendizado Dinâmico',
				Description: 'Apresentar os conceitos básicos da teoria de tratamento estatístico de séries temporais, preparar o aluno para análise, identificação e previsão de uma série temporal.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0520'
				],
				Optional: true
			},
			{
				Code: 'SCC0540',
				Name: 'Bases de Dados',
				Description: 'Fornecer conceitos, técnicas e características básicas dos sistemas gerenciadores de banco de dados, tornando o aluno capaz de desenvolver sistemas de informação centrados na busca de informações armazenadas em banco de dados.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SCC0503'
				],
				Optional: false
			},
			{
				Code: 'SCC0282',
				Name: 'Recuperação da Informação',
				Description: 'Apresentar os fundamentos da recuperação de informação, abordando questões relevantes à arquiteturas, dados e informação, análise de conteúdo, busca textual, indexação, processamento de texto e avaliação de sistemas de recuperação. Analisar e desenvolver ferramentas e aplicações, como as presentes em sistemas atuais, aplicando a teoria de modo prático.',
				ClassCredits: 2,
				AssignCredits: 1,
				TotalHours: '60 h',
				Requirements: [
					'SCC0502'
				],
				Optional: true
			},
			{
				Code: 'SSC0503',
				Name: 'Introdução à Ciência de Computação II',
				Description: 'Apresentação de conceitos avançados que levem o aluno a uma maturidade em programação estruturada, com conhecimento de uma linguagem de programação com recursos avançados. Aprendizado de técnicas para construção de algoritmos e para análise da complexidade de algoritmos. Aprendizado de algoritmos clássicos de ordenação e busca em memória interna. Prática de Programação.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SSC0501'
				],
				Optional: false
			},
			{
				Code: 'SCC0505',
				Name: 'Introdução à Teoria da Computação',
				Description: 'Dar ao aluno noção formal de algoritmo, computabilidade e do problema de decisão, de modo a deixá-lo consciente das limitações da ciência da computação. Aparelhá-lo com as ferramentas de modo a habilitá-lo a melhor enfrentar a solução de problemas com o auxílio do computador via Teoria das Linguagens Formais e dos Autômatos.',
				ClassCredits: 2,
				AssignCredits: 1,
				TotalHours: '60 h',
				Requirements: [
					'SSC0501'
				],
				Optional: false
			},
			{
				Code: 'SSC0726',
				Name: 'Reuso de Software',
				Description: 'Aprofundar os conhecimentos em conceitos relacionados ao reúso de software, bem como metodologias, tecnologias e ferramentas de apoio ao reuso.',
				ClassCredits: 2,
				AssignCredits: 1,
				TotalHours: '60 h',
				Requirements: [
					'SSC0527'
				],
				Optional: true
			},
			{
				Code: 'SME0823',
				Name: 'Modelos de Regressão e Aprendizado  Supervisionado II',
				Description: 'Apresentar conceitos introdutórios de modelos lineares generalizados em um enfoque computacional.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SME0520'
				],
				Optional: true
			},
			{
				Code: 'SSC0721',
				Name: 'Teste e Inspeção de Software',
				Description: 'Fornecer uma visão geral da área de Verificação, Validação e Teste de Software - VV\u0026T, com ênfase em estratégias, técnicas e critérios de teste de software e ferramentas associadas que podem ser aplicados na construção de software.',
				ClassCredits: 2,
				AssignCredits: 1,
				TotalHours: '60 h',
				Requirements: [
					'SSC0527'
				],
				Optional: true
			},
			{
				Code: 'SSC0952',
				Name: 'Internet das Coisas',
				Description: 'Transmitir aos alunos conceitos sobre Internet das Coisas, considerando seus aspectos relacionados ao hardware e ao software, com vistas ao desenvolvimento de aplicações inovadoras para a resolução de problemas do mundo real.',
				ClassCredits: 2,
				AssignCredits: 2,
				TotalHours: '90 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SMA0508',
				Name: 'Matemática Discreta',
				Description: 'Dar aos alunos os conhecimentos básicos teóricos de matemática combinatória e Teoria dos Números e Lógica, habilitando-os a resolverem problemas da área de Ciências de Computação que fazem uso dessas teorias e técnicas.',
				ClassCredits: 2,
				AssignCredits: 0,
				TotalHours: '30 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SSC0954',
				Name: 'Infraestrutura para Computação de Alto Desempenho e Sistemas Distribuídos',
				Description: 'Desenvolver nos alunos habilidades e competências para criação e manutenção de uma infraestrutura básica para computação distribuída/paralela, aplicando na prática conceitos de arquitetura de computadores, sistemas operacionais, redes de computadores, computação de alto desempenho e sistemas distribuídos.',
				ClassCredits: 2,
				AssignCredits: 2,
				TotalHours: '90 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SSC0723',
				Name: 'Sistemas Colaborativos: Fundamentos e Aplicações',
				Description: 'Oferecer os fundamentos para o desenvolvimento e a aplicação de sistemas colaborativos. Ao final da disciplina o aluno deverá ser capaz de analisar e desenvolver sistemas colaborativos utilizando o estado da arte da tecnologia vigente. Além disto deverá ser capaz de aplicar os conceitos de sistemas colaborativos em diferentes situações e implantar soluções que viabilizem o trabalho em grupo. Espera-se também que o aluno trabalhe as habilidades de especificar, prototipar, analisar, projetar, implementar, testar e avaliar sistemas colaborativos em situações reais de uso. O aluno também deve ser capaz de realizar pesquisas científicas dentro desta temática.',
				ClassCredits: 2,
				AssignCredits: 0,
				TotalHours: '30 h',
				Requirements: [
					'SSC0503'
				],
				Optional: true
			},
			{
				Code: 'SCC0275',
				Name: 'Introdução à Ciência de Dados',
				Description: 'Complementar a formação dos alunos de graduação em Computação com interesse em conhecer os principais conceitos e técnicas da área de Ciência de Dados. O curso visa prover teoria e prática a fim de que os alunos possam aplicar as novas técnicas e ferramentas estudadas em problemas reais.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SCC0530'
				],
				Optional: true
			},
			{
				Code: 'SCC0542',
				Name: 'Tópicos Especiais em Banco de Dados',
				Description: 'Apresentar aos alunos tópicos atuais de interesse na área de banco de dados, que não são cobertos pelas disciplinas obrigatórias do curso. O conteúdo específico da disciplina varia de acordo com o interesse dos alunos e das tendências do ambiente profissional de produção de software.',
				ClassCredits: 2,
				AssignCredits: 0,
				TotalHours: '30 h',
				Requirements: [
					'SCC0540'
				],
				Optional: true
			},
			{
				Code: 'SCC0269',
				Name: 'Seminários Avançados em Sistemas Hipermídia e Multimídia II',
				Description: 'Avançar na investigação do estado-da-arte em termos do relacionamento das tecnologias de multimídia e hipermídia com as demais tecnologias da computação, como por exemplo redes de computadores, banco de dados, sistemas distribuídos, computação ubíqua, interação usuário-computador e visualização da informação. Tem também por objetivo motivar a realizar programa de Iniciação Científica e fortalecer a ligação da graduação com a pós-graduação do departamento, incentivando alunos de graduação a participarem do programa trilha graduação-mestrado.',
				ClassCredits: 3,
				AssignCredits: 0,
				TotalHours: '45 h',
				Requirements: [
					'SCC0268'
				],
				Optional: true
			},
			{
				Code: 'SME0102',
				Name: 'Seminários Avançados de Matemática Computacional I',
				Description: 'Fornecer ao aluno conceitos avançados de Matemática Computacional, permitindo que ele conheça algumas das principais pesquisas em desenvolvimento nos principais centros de pesquisa nacionais e internacionais. Tem também por objetivo motivar a Iniciação Científica e fortalecer a ligação da graduação com a pós-graduação do departamento, incentivando alunos de graduação a participarem da trilha.',
				ClassCredits: 3,
				AssignCredits: 0,
				TotalHours: '45 h',
				Requirements: [
					'SME0500'
				],
				Optional: true
			},
			{
				Code: 'SCC0561',
				Name: 'Multimídia',
				Description: 'Introdução aos conceitos de multimídia e investigação dos problemas envolvidos com o suporte computacional a dados de mídia e de aplicações multimídia.',
				ClassCredits: 2,
				AssignCredits: 1,
				TotalHours: '60 h',
				Requirements: [
					'SCC0503'
				],
				Optional: true
			},
			{
				Code: 'SSC0725',
				Name: 'Arquitetura de Software',
				Description: 'Oferecer aos alunos uma visão abrangente de arquitetura de software, com especial atenção aos processos para a construção, bem como métodos e técnicas para a representação e avaliação de arquiteturas de software. Discutir o impacto de arquitetura de software para a qualidade de sistemas de software. Oferecer uma visão e relevância do uso de ferramentas de apoio à construção, representação e avaliação de arquiteturas. Discutir as tendências futuras de pesquisa na área de Arquitetura de Software.',
				ClassCredits: 2,
				AssignCredits: 2,
				TotalHours: '90 h',
				Requirements: [
					'SSC0526'
				],
				Optional: true
			},
			{
				Code: 'SSC0770',
				Name: 'Introdução ao Desenvolvimento de Jogos Eletrônicos',
				Description: 'Introduzir ao aluno os problemas e soluções computacionais no domínio de jogos eletrônicos, por meio de aulas, seminários e práticas em laboratório.  Familiarizar o aluno com os desafios tecnológicos e metodológicos do desenvolvimento de jogos eletrônicos. Aplicar conhecimento teórico e prático transdisciplinar de diferentes áreas do conhecimento. Capacitar o aluno em conceitos e técnicas essenciais ao desenvolvimento de aplicações de jogos eletrônicos em aplicações de entretenimento, científicas, terapêuticas e educacionais.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SCC0504'
				],
				Optional: true
			},
			{
				Code: '5500002',
				Name: 'Seminários em Gestão Organizacional',
				Description: 'O objetivo principal desta disciplina é abordar tópicos variados de gestão organizacional, de forma generalista, apresentando aos alunos uma visão geral das várias frentes da gestão, contribuindo para sua formação técnica e humanística em seu futuro profissional.',
				ClassCredits: 1,
				AssignCredits: 1,
				TotalHours: '45 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SSC0575',
				Name: 'Introdução à Bioinformática',
				Description: '\tO aprendizado dos conceitos básicos, principais técnicas, perspectivas futuras e aplicações de Bioinformática.',
				ClassCredits: 2,
				AssignCredits: 0,
				TotalHours: '30 h',
				Requirements: [
					'SCC0503',
					'SCC0530',
					'SCC0540'
				],
				Optional: true
			},
			{
				Code: 'SCC0504',
				Name: 'Programação Orientada a Objetos',
				Description: 'Introduzir os conceitos de programação orientada a objetos e as metodologias de desenvolvimento de software segundo esse paradigma.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SSC0501'
				],
				Optional: false
			},
			{
				Code: 'SSC0542',
				Name: 'Administração e Gerenciamento de Redes',
				Description: 'Treinamento do aluno em aspectos de especificação, instalação, e administração de sistemas e serviços de redes de computadores.',
				ClassCredits: 2,
				AssignCredits: 1,
				TotalHours: '60 h',
				Requirements: [
					'SSC0540'
				],
				Optional: true
			},
			{
				Code: 'SSC0529',
				Name: 'Sistemas Educacionais Avançados',
				Description: 'Oferecer os fundamentos pedagógicos e computacionais para o desenvolvimento sistemas educacionais avançados. Espera-se que o aluno obtenha conhecimentos sobre como as diversas áreas da computação contribuem para resolver problemas educacionais (e.g. geração de conteúdo, tutoria inteligentes e avaliação automática) e como a área da educação pode favorecer o avanço da pesquisa e desenvolvimento na área de computação (e.g. novos algoritmos, melhores interfaces e técnicas de interação humano-computador, etc). Ao final da disciplina o aluno deverá ser capaz de mapear e implementar aspectos instrucionais e pedagógocos em sistemas computacionais. O aluno também será capaz de analisar e desenvolver sistemas educacionais e objetos de aprendizagem utilizando o estado da arte da tecnologia vigente para diferentes domínios do conhecimento (e.g. matemática, português ou computação).  Espera-se também que o aluno trabalhe as habilidades de especificar, prototipar, analisar, projetar, implementar, testar e avaliar sistemas educacionais avançados em situações reais de uso. O aluno também deve ser capaz de realizar pesquisas científicas dentro desta temática.',
				ClassCredits: 2,
				AssignCredits: 1,
				TotalHours: '60 h',
				Requirements: [
					'SSC0503'
				],
				Optional: true
			},
			{
				Code: 'SSC0158',
				Name: 'Computação em Nuvem e Arquitetura Orientadas a Serviços',
				Description: 'Ensinar aos alunos aspectos teóricos e práticos do desenvolvimento de aplicações distribuídas segundo o modelo de computação em nuvem, focando aspectos de virtualização, arquiteturas orientadas a serviços, escalonamento e interfaces de programação para computação em nuvem.',
				ClassCredits: 2,
				AssignCredits: 1,
				TotalHours: '60 h',
				Requirements: [
					'SSC0540'
				],
				Optional: true
			},
			{
				Code: 'SCC0283',
				Name: 'Introdução à Web Semântica',
				Description: 'Introduzir o aluno às técnicas, teorias e modelos utilizados na Web Semântica, tornando-o apto a desenvolver recursos, ferramentas e aplicações computacionais que envolvam a aplicação desse conhecimento na resolução de problemas na área de aplicações Web. Capacitar o aluno para discutir criticamente tópicos pertinentes à área e propiciar-lhe subsídios para desenvolvimento de pesquisas.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SCC0502',
					'SMA0508'
				],
				Optional: true
			},
			{
				Code: 'SCC0244',
				Name: 'Mineração a partir de Grandes Bases de Dados',
				Description: 'Apresentar conceitos, técnicas e ferramentas relevantes na área de descoberta de conhecimento em bases de dados e mineração de dados, sob a perspectiva da área de bases de dados, explorando com profundidade os aspectos associados a esta área.',
				ClassCredits: 3,
				AssignCredits: 0,
				TotalHours: '45 h',
				Requirements: [
					'SCC0530',
					'SCC0540'
				],
				Optional: true
			},
			{
				Code: 'SSC0526',
				Name: 'Análise e Projeto Orientados a Objetos',
				Description: 'Permitir ao aluno realizar a análise e projeto orientados a objetos de sistemas de software, utilizando padrões de projeto e seguindo o processo unificado.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SCC0504'
				],
				Optional: false
			},
			{
				Code: 'SSC0127',
				Name: 'Seminários Avançados de Engenharia de Software II',
				Description: '\tFornecer ao aluno conceitos avançados de Engenharia de Software, permitindo que ele conheça algumas das principais pesquisas em desenvolvimento nos principais centros de pesquisa nacionais e internacionais. Tem também por objetivo motivar a Iniciação Científica e fortalecer a ligação da graduação com a pós-graduação do departamento, incentivando alunos de graduação a participarem da trilha.',
				ClassCredits: 3,
				AssignCredits: 0,
				TotalHours: '45 h',
				Requirements: [
					'SSC0126'
				],
				Optional: true
			},
			{
				Code: 'SSC0528',
				Name: 'Sistemas Colaborativos: Fundamentos e Aplicações',
				Description: 'Oferecer os fundamentos para o desenvolvimento e a aplicação de sistemas colaborativos. Ao final da disciplina o aluno deverá ser capaz de analisar e desenvolver sistemas colaborativos utilizando o estado da arte da tecnologia vigente. Além disto deverá ser capaz de aplicar os conceitos de sistemas colaborativos em diferentes situações e implantar soluções que viabilizem o trabalho em grupo. Espera-se também que o aluno trabalhe as habilidades de especificar, prototipar, analisar, projetar, implementar, testar e avaliar sistemas colaborativos em situações reais de uso. O aluno também deve ser capaz de realizar pesquisas científicas dentro desta temática.',
				ClassCredits: 2,
				AssignCredits: 1,
				TotalHours: '60 h',
				Requirements: [
					'SSC0503'
				],
				Optional: true
			},
			{
				Code: 'SSC0527',
				Name: 'Engenharia de Software',
				Description: 'Oferecer uma visão geral do processo de desenvolvimento de software e dos métodos e técnicas que podem ser utilizadas em cada fase do ciclo de vida do software.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SSC0526'
				],
				Optional: false
			},
			{
				Code: 'SCC0574',
				Name: 'Agrupamento de Dados',
				Description: 'Apresentar métodos e algoritmos básicos para agrupamento de dados. Abordar conceitos básicos sobre validação de grupos de dados. Apresentar aplicações práticas de ferramentas para agrupamento de dados.',
				ClassCredits: 2,
				AssignCredits: 2,
				TotalHours: '90 h',
				Requirements: [
					'SME0520'
				],
				Optional: true
			},
			{
				Code: 'SSC0541',
				Name: 'Sistemas Operacionais I',
				Description: '\tIntroduzir o estudante nos conceitos e princípios básicos dos sistemas operacionais de computadores digitais.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SCC0502',
					'SSC0511'
				],
				Optional: false
			},
			{
				Code: 'SMA0501',
				Name: 'Cálculo I',
				Description: 'Fazer com que os alunos familiarizem-se com os conceitos de limite, continuidade, diferenciabilidade e integração de funções de uma variável.',
				ClassCredits: 6,
				AssignCredits: 0,
				TotalHours: '90 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SME0103',
				Name: 'Seminários Avançados de Matemática Computacional II',
				Description: 'Fornecer ao aluno conceitos avançados de Matemática Computacional, permitindo que ele conheça algumas das principais pesquisas em desenvolvimento nos principais centros de pesquisa nacionais e internacionais. Tem também por objetivo motivar a Iniciação Científica e fortalecer a ligação da graduação com a pós-graduação do departamento, incentivando alunos de graduação a participarem da trilha.',
				ClassCredits: 3,
				AssignCredits: 0,
				TotalHours: '45 h',
				Requirements: [
					'SME0102'
				],
				Optional: true
			},
			{
				Code: 'SSC0598',
				Name: 'Projeto em Intercâmbio II',
				Description: 'O objetivo desta disciplina é o de permitir ao estudante que desenvolva atividades relevantes para sua formação em empresas ou universidades/centros de pesquisa durante período de intercâmbio oficialmente reconhecido.',
				ClassCredits: 4,
				AssignCredits: 8,
				TotalHours: '300 h ( Estágio: 300 h )',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SMA0505',
				Name: 'Matrizes, Vetores e Geometria Analítica',
				Description: 'Introdução dos conceitos de álgebra vetorial, geometria e álgebra linear.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SSC0547',
				Name: 'Engenharia de Segurança',
				Description: 'Apresentar os conceitos básicos em segurança computacional com ênfase nas tecnologias e em aspectos básicos de criptografia, controle de acesso e intrusão em redes de computadores.',
				ClassCredits: 2,
				AssignCredits: 1,
				TotalHours: '60 h',
				Requirements: [
					'SSC0540'
				],
				Optional: false
			},
			{
				Code: 'SSC0572',
				Name: 'Computadores, Sociedade e Ética Profissional',
				Description: 'O propósito deste curso é conscientizar os estudantes de alguns dos problemas que surgem, para o indivíduo e sociedade, com a introdução dos computadores digitais. Espera-se, ainda, que o curso ajude os estudantes a tomarem ciência de suas futuras responsabilidades como profissionais em computação.',
				ClassCredits: 2,
				AssignCredits: 0,
				TotalHours: '30 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SSC0543',
				Name: 'Sistemas Computacionais Distribuídos',
				Description: 'Introdução aos conceitos básicos de sistemas computacionais distribuídos às técnicas de implementação e ao estudo de casos.',
				ClassCredits: 2,
				AssignCredits: 1,
				TotalHours: '60 h',
				Requirements: [
					'SSC0541'
				],
				Optional: true
			},
			{
				Code: 'SSC0155',
				Name: 'Seminários Avançados em Sistemas Distribuídos e Programação Concorrente II',
				Description: 'Fornecer ao aluno conceitos avançados em Sistemas Distribuídos e Programação Concorrente, permitindo que ele conheça algumas das principais pesquisas em desenvolvimento nos principais centros de pesquisa nacionais e internacionais. Tem também por objetivo motivar a Iniciação Científica e fortalecer a ligação da graduação com a pós-graduação do departamento, incentivando alunos de graduação a participarem da trilha.',
				ClassCredits: 3,
				AssignCredits: 0,
				TotalHours: '45 h',
				Requirements: [
					'SSC0154'
				],
				Optional: true
			},
			{
				Code: 'SCC0252',
				Name: 'Visualização Computacional',
				Description: 'A área de visualização computacional engloba o desenvolvimento e aplicação de técnicas gráficas para apresentação e entendimento dos mais variados conjuntos de dados. Domínios de aplicação variam desde diagramas explicativos e gráficos de barra até dados meteorológicos, médicos, científicos, coleções de registros, documentos, imagens, etc. O objetivo desta disciplina é fornecer uma introdução à área de Visualização de Dados. Pretende-se abordar o que é Visualização, quais os seus objetivos, algoritmos e aplicações. Serão descritas técnicas de uso geral disponíveis atualmente e os tipos de dados que são visualizados. Os principais algoritmos e estruturas de dados serão apresentados. Um sistema de visualização será introduzido e utilizado pelos alunos na confecção dos trabalhos práticos.',
				ClassCredits: 3,
				AssignCredits: 0,
				TotalHours: '45 h',
				Requirements: [
					'SCC0504'
				],
				Optional: true
			},
			{
				Code: 'SCC0531',
				Name: 'Introdução a Sistemas Inteligentes',
				Description: 'Fornecer uma visão mais detalhada dos sistemas de Inteligência Artificial, enfatizando técnicas e métodos de aquisição e representação de conhecimento.',
				ClassCredits: 2,
				AssignCredits: 1,
				TotalHours: '60 h',
				Requirements: [
					'SCC0530'
				],
				Optional: true
			},
			{
				Code: 'SCC0280',
				Name: 'Acessibilidade em Sistemas Computacionais',
				Description: 'Fornecer aos alunos  uma visão integrada (em termos de legislação, dos recursos de Tecnologia Assistiva, e os princípios de design inclusivo)  sobre a questão de acessibilidade como um conceito fundamental  ao desenvolvimento dos sistemas computacionais.',
				ClassCredits: 2,
				AssignCredits: 1,
				TotalHours: '60 h',
				Requirements: [
					'SSC0527'
				],
				Optional: true
			},
			{
				Code: 'SSC0502',
				Name: 'Laboratório de Introdução à Ciência de Computação I',
				Description: 'Implementar em laboratório as técnicas de programação apresentadas em Introdução à Ciência da Computação I, utilizando uma linguagem de programação estruturada.',
				ClassCredits: 2,
				AssignCredits: 2,
				TotalHours: '90 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SEP0301',
				Name: 'Modelagem da Produção',
				Description: 'Capacitar os alunos para a modelagem dos processos básicos do planejamento e controle da produção, e para o uso dos correspondentes métodos e técnicas de solução.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SSC0527'
				],
				Optional: false
			},
			{
				Code: 'SSC0950',
				Name: 'Projeto e Desenvolvimento de Software de Sistema',
				Description: 'Introduzir o aluno aos fundamentos do desenvolvimento de software de sistemas, desafios técnicos, metodológicos e estado da arte.',
				ClassCredits: 2,
				AssignCredits: 2,
				TotalHours: '90 h',
				Requirements: [
					'SSC0540'
				],
				Optional: true
			},
			{
				Code: 'SSC0524',
				Name: 'Verificação, Validação e Teste de Software',
				Description: 'Fornecer uma visão geral da área de Verificação, Validação e Teste de Software - VV\u0026T, com ênfase em estratégias, técnicas e critérios de teste de software e ferramentas associadas que podem ser aplicados na construção de software.',
				ClassCredits: 2,
				AssignCredits: 1,
				TotalHours: '60 h',
				Requirements: [
					'SSC0527'
				],
				Optional: true
			},
			{
				Code: 'SSC0570',
				Name: 'Empreendedorismo',
				Description: 'Desenvolver a capacidade empreendedora dos alunos, estimulando e dando ferramentas àqueles cuja vocação profissional estiver direcionada à criação de um empreendimento em informática.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SSC0530'
				],
				Optional: false
			},
			{
				Code: 'SME0500',
				Name: 'Cálculo Numérico',
				Description: 'Familiarização do estudante com técnicas numéricas para resolução prática de modelos matemáticos.',
				ClassCredits: 2,
				AssignCredits: 0,
				TotalHours: '30 h',
				Requirements: [
					'SMA0501',
					'SSC0501'
				],
				Optional: false
			},
			{
				Code: 'SSC0593',
				Name: 'Projeto de Graduação I',
				Description: 'Desenvolver no estudante o espírito, a mentalidade de pesquisa e a capacidade de síntese. Permitir que consiga ter uma visão mais global das áreas de computação através da elaboração de um projeto assistido por docente.',
				ClassCredits: 4,
				AssignCredits: 8,
				TotalHours: '300 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SME0822',
				Name: 'Análise Multivariada e Aprendizado Não Supervisionado',
				Description: 'Estudo de métodos multivariados de análise de dados e de aprendizado não supervisionado. Análise de variância multivariada. Análise de componentes principais. Análise fatorial. Análise de Agrupamentos Análise de correlação canônica. Análise de correspondência.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0520'
				],
				Optional: true
			},
			{
				Code: 'SEP0584',
				Name: 'Contabilidade para Computação',
				Description: 'Introdução aos conceitos básicos de contabilidade e seu uso para orçamento de projetos.',
				ClassCredits: 2,
				AssignCredits: 0,
				TotalHours: '30 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SSC0592',
				Name: 'Estágio Supervisionado II',
				Description: 'Permitir que o aluno se familiarize com o ambiente similar ao do exercício de sua profissão. Além disso, dar-lhe uma visão mais abrangente da área e a possibilidade de trabalhar junto a uma equipe desenvolvendo um projeto da prática profissional.',
				ClassCredits: 4,
				AssignCredits: 10,
				TotalHours: '360 h ( Estágio: 300 h )',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SSC0511',
				Name: 'Organização de Computadores Digitais',
				Description: 'Introduzir os conceitos básicos de Lógica Digital e de organização de computadores.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SSC0512'
				],
				Optional: false
			},
			{
				Code: 'SSC0583',
				Name: 'Atividades Acadêmicas Científicas e Culturais III',
				Description: 'Estimular a pro-atividade dos alunos, incentivando-se a desempenharem atividades extras, de sua escolha.',
				ClassCredits: 0,
				AssignCredits: 1,
				TotalHours: '30 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SME0111',
				Name: 'Seminários de Otimização I',
				Description: 'Apresentar ao aluno modelos matemáticos para problemas práticos e técnicas avançadas de otimização. Motivar a Iniciação Científica e fortalecer a ligação da graduação com a pós-graduação do departamento, incentivando alunos de graduação a participarem da trilha graduação/pós-graduação.',
				ClassCredits: 3,
				AssignCredits: 0,
				TotalHours: '45 h',
				Requirements: [
					'SCC0502'
				],
				Optional: true
			},
			{
				Code: 'SME0112',
				Name: 'Seminários de Otimização II',
				Description: 'Apresentar ao aluno modelos matemáticos para problemas práticos e técnicas avançadas de otimização. Motivar a Iniciação Científica e fortalecer a ligação da graduação com a pós-graduação do departamento, incentivando alunos de graduação a participarem da trilha graduação/pós-graduação.',
				ClassCredits: 3,
				AssignCredits: 0,
				TotalHours: '45 h',
				Requirements: [
					'SME0111'
				],
				Optional: true
			},
			{
				Code: 'SSC0501',
				Name: 'Introdução à Ciência de Computação I',
				Description: 'Apresentar os conceitos básicos para o desenvolvimento de programas, utilizando uma linguagem de programação como apoio.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SSC0548',
				Name: 'Redes Móveis',
				Description: 'Apresentar os conceitos básicos em mobilidade, tecnologias de redes móveis sem fio e em projetos de sistemas baseados em localização.',
				ClassCredits: 2,
				AssignCredits: 1,
				TotalHours: '60 h',
				Requirements: [
					'SSC0540'
				],
				Optional: true
			},
			{
				Code: 'SCC0239',
				Name: 'Seminários Avançados de Inteligência Artificial II',
				Description: '\tFornecer ao aluno conceitos avançados de Inteligência Artificial, permitindo que ele conheça algumas das principais pesquisas em desenvolvimento nos principais centros de pesquisa nacionais e internacionais. Tem também por objetivo motivar a Iniciação Científica e fortalecer a ligação da graduação com a pós-graduação do departamento, incentivando alunos de graduação a participarem da trilha.',
				ClassCredits: 3,
				AssignCredits: 0,
				TotalHours: '45 h',
				Requirements: [
					'SCC0238'
				],
				Optional: true
			},
			{
				Code: 'SCC0259',
				Name: 'Seminários Avançados em Computação Visual II',
				Description: 'Fornecer ao aluno conceitos avançados em áreas relacionadas à síntese e processamento de imagens e suas aplicações, englobando Computação Gráfica, Processamento de Imagens, Visão e Visualização Computacional. Permitir o contato com alguns tópicos de pesquisa em desenvolvimento nos principais centros de pesquisa nacionais e internacionais. Tem também por objetivo motivar a Iniciação Científica e fortalecer a ligação da graduação com a pós-graduação do departamento, incentivando alunos de graduação a participarem da trilha',
				ClassCredits: 3,
				AssignCredits: 0,
				TotalHours: '45 h',
				Requirements: [
					'SCC0258'
				],
				Optional: true
			},
			{
				Code: 'SSC0584',
				Name: 'Atividades Acadêmicas Científicas e Culturais IV',
				Description: 'Estimular a pro-atividade dos alunos, incentivando-se a desempenharem atividades extras, de sua escolha.',
				ClassCredits: 0,
				AssignCredits: 1,
				TotalHours: '30 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SME0510',
				Name: 'Introdução à Pesquisa Operacional',
				Description: 'Muitos problemas de tomada de decisão têm estruturas matemáticas bem definidas. Nesta disciplina alguns modelos matemáticos de otimização determinística serão estudados, com ênfase em métodos de solução, bem como em aplicações.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SME0500'
				],
				Optional: false
			},
			{
				Code: 'SCC0530',
				Name: 'Inteligência Artificial',
				Description: 'Apresentar ao aluno as idéias fundamentais da Inteligência Artificial e algumas características relacionadas à implementação desse tipo de sistemas.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SSC0503'
				],
				Optional: false
			},
			{
				Code: 'SME0520',
				Name: 'Introdução à Estatística',
				Description: '\tIntroduzir os conceitos básicos de estatística, com ênfase para sua aplicação prática na área de computação.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0501'
				],
				Optional: false
			},
			{
				Code: 'SSC0512',
				Name: 'Elementos de Lógica Digital',
				Description: 'Introduzir ao aluno conceitos básicos de eletrônica, Lógica Digital e técnicas de projeto de subsistemas digitais.',
				ClassCredits: 3,
				AssignCredits: 0,
				TotalHours: '45 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SSC0523',
				Name: 'Tópicos Especiais em Engenharia de Software',
				Description: 'Complementar a formação dos alunos em Engenharia de Software abordando com mais profundidade tópicos atuais e relevantes nesta área.',
				ClassCredits: 2,
				AssignCredits: 0,
				TotalHours: '30 h',
				Requirements: [
					'SSC0527'
				],
				Optional: true
			},
			{
				Code: 'SEP0172',
				Name: 'Prática e Gerenciamento de Projetos',
				Description: 'São quatro os objetivos pedagógicos. Fornecer os conceitos básicos para gerenciamento de projetos de sistemas de informação, considerando a sua relação com o ciclo de vida de desenvolvimento de software. Conhecer as técnicas e métodos de gerenciamento de projetos das abordagens ágil e híbrida, com exceção de técnicas da área de qualidade que são abordadas em outras disciplinas, incluindo a pré-requisito. Propiciar ao aluno uma experiência prática de projeto, desenvolvendo habilidades e competências mínimas que garantam a capacidade de colocar os conhecimentos em prática, incluindo o uso de softwares de gerenciamento de projetos. Propiciar discussão sobre a aplicabilidade e combinação das diversas práticas e  técnicas de gerenciamento de projetos.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SSC0527'
				],
				Optional: false
			},
			{
				Code: 'SSC0545',
				Name: 'Redes de Alto Desempenho',
				Description: '\tAvançar os conhecimentos obtidos pelos alunos em redes de computadores, adicionando conceitos fundamentais de tecnologia de alta velocidade e de Qualidade de Serviço principalmente com vistas à transmissão de mídia contínua.',
				ClassCredits: 2,
				AssignCredits: 1,
				TotalHours: '60 h',
				Requirements: [
					'SSC0540'
				],
				Optional: true
			},
			{
				Code: 'SSC0582',
				Name: 'Atividades Acadêmicas Científicas e Culturais II',
				Description: 'Estimular a pro-atividade dos alunos, incentivando-se a desempenharem atividades extras, de sua escolha.',
				ClassCredits: 0,
				AssignCredits: 1,
				TotalHours: '30 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SEP0324',
				Name: 'Modelagem da Organização',
				Description: 'Capacitar o aluno a compreender os limites e pressupostos da teoria da organização na perspectiva da modelagem organizacional.',
				ClassCredits: 2,
				AssignCredits: 1,
				TotalHours: '60 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SCC0502',
				Name: 'Algoritmos e Estruturas de Dados I',
				Description: 'Familiarizar os estudantes com as várias estruturas da informação, buscando habilitá-los a contar com esses recursos no desenvolvimento de outras atividades de ciências de computação.\t',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SSC0501'
				],
				Optional: false
			},
			{
				Code: 'SCC0258',
				Name: 'Seminários Avançados em Computação Visual I',
				Description: 'Fornecer ao aluno conceitos avançados em áreas relacionadas à síntese e processamento de imagens e suas aplicações, englobando Computação Gráfica, Modelagem Geométrica, Processamento de Imagens, Visão e Visualização Computacional. Permitir o contato com alguns tópicos de pesquisa em desenvolvimento nos principais centros de pesquisa nacionais e internacionais. Tem também por objetivo motivar a Iniciação Científica e fortalecer a ligação da graduação com a pós-graduação do departamento, incentivando alunos de graduação a participarem da trilha.',
				ClassCredits: 3,
				AssignCredits: 0,
				TotalHours: '45 h',
				Requirements: [
					'SCC0503'
				],
				Optional: true
			},
			{
				Code: 'SSC0530',
				Name: 'Introdução a Sistemas de Informação',
				Description: 'Introduzir os conceitos básicos de Sistemas de Informação, bem como os fundamentos e tendências de tecnologias e de sistemas de informação no contexto das organizações. Estudo de Caso do uso de SI em organizações.',
				ClassCredits: 2,
				AssignCredits: 0,
				TotalHours: '30 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SCC0562',
				Name: 'Hipermídia',
				Description: 'Apresentar os fundamentos da tecnologia de hipermídia, abordando questões relevantes à arquitetura, modelagem, especificação, construção e usabilidade de aplicações hipermídia de modo geral, e daquelas que manipulam hiperdocumentos estruturados para a WWW de modo particular.',
				ClassCredits: 2,
				AssignCredits: 0,
				TotalHours: '30 h',
				Requirements: [
					'SCC0503'
				],
				Optional: true
			},
			{
				Code: 'SCC0560',
				Name: 'Interação Usuário',
				Description: 'Apresentar ao aluno conceitos fundamentais da interação entre o usuário e o computador. Capacitar o aluno a discutir os tópicos envolvidos em áreas atuais de pesquisa. Dar ao aluno experiência na avaliação de interfaces.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SCC0504'
				],
				Optional: false
			},
			{
				Code: 'SSC0596',
				Name: 'Projeto Empreendedor II',
				Description: 'Permitir que o aluno demonstre capacidade empreendedora, descrevendo e documentando projetos desenvolvidos por empresa formalmente constituída, da qual ele é sócio atuante.',
				ClassCredits: 4,
				AssignCredits: 8,
				TotalHours: '300 h',
				Requirements: [
					'SSC0595'
				],
				Optional: true
			},
			{
				Code: 'SSC0571',
				Name: 'Evolução Histórica da Computação e Aplicações',
				Description: 'Apresentar ao aluno um panorama da evolução da computação, identificando marcos históricos, personagens relevantes e suas contribuições. Motivar o aluno ingressante por meio da apresentação de desenvolvimentos e aplicações importantes da computação em diferentes áreas, relacionando-os aos fundamentos matemáticos a serem estudados ao longo do curso.',
				ClassCredits: 2,
				AssignCredits: 0,
				TotalHours: '30 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SSC0544',
				Name: 'Tópicos Avançados em Sistemas Distribuídos',
				Description: 'Complementar a formação dos alunos em Sistemas Distribuídos abordando com mais profundidade tópicos atuais e relevantes nesta área.',
				ClassCredits: 2,
				AssignCredits: 0,
				TotalHours: '30 h',
				Requirements: [
					'SSC0540'
				],
				Optional: true
			},
			{
				Code: 'SSC0510',
				Name: 'Arquitetura de Computadores',
				Description: 'Introduzir os conceitos da Arquitetura de von Neuman e os aprimoramentos que esta arquitetura vem experimentando.',
				ClassCredits: 2,
				AssignCredits: 0,
				TotalHours: '30 h',
				Requirements: [
					'SSC0511'
				],
				Optional: false
			},
			{
				Code: 'SCC0279',
				Name: 'Seminários Avançados de Redes Neurais II',
				Description: 'Fornecer ao aluno conceitos avançados de Redes Neurais, permitindo que ele conheça algumas das principais pesquisas em desenvolvimento nos principais centros de pesquisa nacionais e internacionais. Tem também por objetivo motivar a Iniciação Científica e fortalecer a ligação da graduação com a pós-graduação do departamento, incentivando alunos de graduação a participarem da trilha.',
				ClassCredits: 3,
				AssignCredits: 0,
				TotalHours: '45 h',
				Requirements: [
					'SCC0278'
				],
				Optional: true
			},
			{
				Code: 'SME0878',
				Name: 'Mineração Estatística de Dados',
				Description: 'Apresentar ao aluno os principais conceitos e técnicas de mineração estatística de dados. A teoria será desenvolvida com aplicações em várias área do conhecimento, dentre as quais, biologia, economia, engenharia, finanças e medicina.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SME0520',
					'SME0822'
				],
				Optional: true
			},
			{
				Code: 'SCC0219',
				Name: 'Introdução ao Desenvolvimento Web',
				Description: 'Introduzir conhecimentos sobre desenvolvimento de aplicações Web envolvendo programação e manipulação de Bancos de Dados.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SCC0502'
				],
				Optional: true
			},
			{
				Code: 'SCC0249',
				Name: 'Seminários Avançados em Banco de Dados II',
				Description: 'Fornecer ao aluno conceitos avançados na área de banco de dados, explorando algumas das principais linhas de pesquisas em desenvolvimento nos principais centros de pesquisa nacionais e internacionais. Também tem o objetivo de motivar a Iniciação Científica e fortalecer a integração das atividades de graduação com as da pós-graduação do departamento, incentivando alunos de graduação a participarem da trilha.',
				ClassCredits: 3,
				AssignCredits: 0,
				TotalHours: '45 h',
				Requirements: [
					'SCC0248'
				],
				Optional: true
			},
			{
				Code: 'SCC0532',
				Name: 'Tópicos Avançados em Inteligência Artificial',
				Description: 'Apresentar ao aluno idéias mais avançadas da Inteligência Artificial e os problemas de implementação de sistemas de Inteligência Artificial',
				ClassCredits: 2,
				AssignCredits: 1,
				TotalHours: '60 h',
				Requirements: [
					'SCC0530'
				],
				Optional: true
			},
			{
				Code: 'SCC0238',
				Name: 'Seminários Avançados de Inteligência Artificial I',
				Description: '\tFornecer ao aluno conceitos avançados de Inteligência Artificial, permitindo que ele conheça algumas das principais pesquisas em desenvolvimento nos principais centros de pesquisa nacionais e internacionais. Tem também por objetivo motivar a Iniciação Científica e fortalecer a ligação da graduação com a pós-graduação do departamento, incentivando alunos de graduação a participarem da trilha.',
				ClassCredits: 3,
				AssignCredits: 0,
				TotalHours: '45 h',
				Requirements: [
					'SCC0530'
				],
				Optional: true
			},
			{
				Code: 'SCC0276',
				Name: 'Aprendizado de Máquina',
				Description: 'Apresentar os aspectos fundamentais e principais algoritmos de aprendizado de máquina, que investiga técnicas para desenvolver algoritmos capazes de aprender, ou melhorar seu desempenho, utilizando exemplos de situações previamente observadas. Serão investigados algoritmos que seguem diferentes paradigmas, incluindo algoritmos baseados em procura (algoritmos de indução de arvores de decisão e de conjuntos de regras, redes neurais artificiais (perceptron e multilayer perceptron), modelos probabilísticos (regressão logística e naive Bayes) e algoritmos baseados em distancia. Além do estudo dos algoritmos de aprendizado baseados em diferentes paradigmas, será estudada a realização experimentos com desses algoritmos para entender  como eles induzem conhecimento utilizando aplicações reais.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SCC0530'
				],
				Optional: true
			},
			{
				Code: 'SSC0594',
				Name: 'Projeto de Graduação II',
				Description: 'Desenvolver no estudante o espírito, a mentalidade de pesquisa e a capacidade de síntese. Permitir que consiga ter uma visão mais global das áreas de computação através da elaboração de um projeto assistido por docente.',
				ClassCredits: 4,
				AssignCredits: 10,
				TotalHours: '360 h',
				Requirements: [
					'SSC0593'
				],
				Optional: true
			},
			{
				Code: 'SSC0546',
				Name: 'Avaliação de Sistemas Computacionais',
				Description: 'Apresentação de várias abordagens de Avaliação da Qualidade de Sistemas Computacionais de acordo com padrões de qualidade de software, com ênfase na análise de desempenho e na avaliação da qualidade de produto e de pacotes.',
				ClassCredits: 2,
				AssignCredits: 0,
				TotalHours: '30 h',
				Requirements: [
					'SCC0560',
					'SSC0510',
					'SSC0530'
				],
				Optional: true
			},
			{
				Code: 'SSC0581',
				Name: 'Atividades Acadêmicas Científicas e Culturais I',
				Description: 'Estimular a pro-atividade dos alunos, incentivando-se a desempenharem atividades extras, de sua escolha.',
				ClassCredits: 0,
				AssignCredits: 1,
				TotalHours: '30 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SSC0126',
				Name: 'Seminários Avançados de Engenharia de Software I',
				Description: '\tFornecer ao aluno conceitos avançados de Engenharia de Software, permitindo que ele conheça algumas das principais pesquisas em desenvolvimento nos principais centros de pesquisa nacionais e internacionais. Tem também por objetivo motivar a Iniciação Científica e fortalecer a ligação da graduação com a pós-graduação do departamento, incentivando alunos de graduação a participarem da trilha.',
				ClassCredits: 3,
				AssignCredits: 0,
				TotalHours: '45 h',
				Requirements: [
					'SSC0530'
				],
				Optional: true
			},
			{
				Code: 'SSC0540',
				Name: 'Redes de Computadores',
				Description: '\tApresentar os conceitos básicos em redes de computadores. Exercitar o aluno em técnicas de projeto, instalação e configuração de redes locais.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SSC0541'
				],
				Optional: false
			},
			{
				Code: 'SCC0278',
				Name: 'Seminários Avançados de Redes Neurais I',
				Description: 'Fornecer ao aluno conceitos avançados de Redes Neurais, permitindo que ele conheça algumas das principais pesquisas em desenvolvimento nos principais centros de pesquisa nacionais e internacionais. Tem também por objetivo motivar a Iniciação Científica e fortalecer a ligação da graduação com a pós-graduação do departamento, incentivando alunos de graduação a participarem da trilha.',
				ClassCredits: 3,
				AssignCredits: 0,
				TotalHours: '45 h',
				Requirements: [
					'SCC0530'
				],
				Optional: true
			},
			{
				Code: 'SSC0576',
				Name: 'Seminários em Computação I',
				Description: 'O objetivo principal desta disciplina é que o aluno crie o costume de participar de atividades extracurriculares que são de grande importância para sua formação e que ao mesmo tempo adquira conhecimentos e visões adicionais de diferentes áreas da computação',
				ClassCredits: 1,
				AssignCredits: 0,
				TotalHours: '15 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SEP0566',
				Name: 'Fundamentos de Economia',
				Description: 'Capacitar o aluno a compreender os fundamentos econômicos, relacionados a microeconomia, macroeconomia e mercado financeiro.',
				ClassCredits: 2,
				AssignCredits: 0,
				TotalHours: '30 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SME0806',
				Name: 'Estatística Computacional',
				Description: 'Estudar técnicas computacionais utilizadas na solução de problemas de Estatística.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SME0520'
				],
				Optional: true
			},
			{
				Code: 'SCC0570',
				Name: 'Introdução a Redes Neurais',
				Description: 'Fornecer ao aluno, conceitos básicos e características de modelos conexionistas, apresentando os principais modelos, bem como, as diversas áreas em que esses modelos podem ser utilizados.',
				ClassCredits: 2,
				AssignCredits: 1,
				TotalHours: '60 h',
				Requirements: [
					'SCC0530'
				],
				Optional: true
			},
			{
				Code: 'SSC0591',
				Name: 'Estágio Supervisionado I',
				Description: 'Permitir que o aluno se familiarize com o ambiente similar ao do exercício de sua profissão. Além disso, dar-lhe uma visão mais abrangente da área e a possibilidade de trabalhar junto a uma equipe desenvolvendo um projeto da prática profissional.',
				ClassCredits: 4,
				AssignCredits: 10,
				TotalHours: '360 h ( Estágio: 300 h )',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SCC0248',
				Name: 'Seminários Avançados em Banco de Dados I',
				Description: 'Fornecer ao aluno conceitos avançados na área de banco de dados, explorando algumas das principais linhas de pesquisas em desenvolvimento nos principais centros de pesquisa nacionais e internacionais. Também tem o objetivo de motivar a Iniciação Científica e fortalecer a integração das atividades de graduação com as da pós-graduação do departamento, incentivando alunos de graduação a participarem da trilha.',
				ClassCredits: 3,
				AssignCredits: 0,
				TotalHours: '45 h',
				Requirements: [
					'SCC0540'
				],
				Optional: true
			},
			{
				Code: 'SSC0577',
				Name: 'Seminários em Computação II',
				Description: 'O objetivo principal desta disciplina é que o aluno crie o costume de participar de atividades extracurriculares que são de grande importância para sua formação e que ao mesmo tempo adquira conhecimentos e visões adicionais de diferentes áreas da computação.',
				ClassCredits: 1,
				AssignCredits: 0,
				TotalHours: '15 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SSC0597',
				Name: 'Projeto em Intercâmbio I',
				Description: 'O objetivo desta disciplina é o de permitir ao estudante que desenvolva atividades relevantes para sua formação em empresas ou universidades/centros de pesquisa durante período de intercâmbio oficialmente\nreconhecido.',
				ClassCredits: 4,
				AssignCredits: 8,
				TotalHours: '300 h ( Estágio: 300 h )',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SSC0531',
				Name: 'Gestão de Sistemas de Informação',
				Description: 'Apresentar as principais aplicações de Sistemas de Informação nas organizações atuais e os conceitos de Governança e Gestão de Serviços de TI. Trabalho prático envolvendo a análise e o dimensionamento de soluções de SI adequadas ao contexto organizacional.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SSC0530'
				],
				Optional: false
			},
			{
				Code: 'SSC0595',
				Name: 'Projeto Empreendedor I',
				Description: 'Permitir que o aluno demonstre capacidade empreendedora, descrevendo e documentando projetos desenvolvidos por empresa formalmente constituída, da qual ele é sócio atuante.',
				ClassCredits: 4,
				AssignCredits: 8,
				TotalHours: '300 h',
				Requirements: [],
				Optional: true
			}
		]
	},
	{
		Name: 'Licenciatura em Matemática',
		Code: '55030',
		Subjects: [
			{
				Code: 'SMA0508',
				Name: 'Matemática Discreta',
				Description: 'Dar aos alunos os conhecimentos básicos teóricos de matemática combinatória e Teoria dos Números e Lógica, habilitando-os a resolverem problemas da área de Ciências de Computação que fazem uso dessas teorias e técnicas.',
				ClassCredits: 2,
				AssignCredits: 0,
				TotalHours: '30 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SMA0376',
				Name: 'Introdução à Metodologia Científica',
				Description: 'Proporcionar ao aluno a oportunidade de discutir e praticar aspectos relacionados ao desenvolvimento de pesquisa e divulgação dos conhecimentos científicos. Permitir uma primeira abordagem às considerações epistemológicas que fundamentam as pesquisas em matemática e em educação matemática. Capacitar o aluno para saber aplicar o método científico e saber identificar o conhecimento científico matemático e da educação matemática. Introduzir o aluno às questões da produção do conhecimento matemático e da educação matemática. Saber o que são os componentes da linguagem científica: teoria, hipótese, lei científica. Conhecer as diferentes formas de explicação científica e distingui-las das explicações de senso comum. Conhecer o que é um trabalho científico: “papers” e relatórios. Capacitar o aluno para saber como preparar um projeto de pesquisa. Como fazer uma pesquisa bibliográfica; relatar um experimento; redigir relatório e monografia.',
				ClassCredits: 2,
				AssignCredits: 1,
				TotalHours: '60 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SMA0329',
				Name: 'História da Matemática',
				Description: 'A finalidade é ajudar o estudante a descobrir como e o porquê do aparecimento e desenvolvimento das principais teorias matemáticas. A ênfase será dada sobre as teorias que melhor possam esclarecer conceitos elementares e indispensáveis tanto ao professor secundário quanto ao futuro pesquisador.',
				ClassCredits: 3,
				AssignCredits: 1,
				TotalHours: '75 h',
				Requirements: [
					'SMA0305',
					'SMA0332'
				],
				Optional: true
			},
			{
				Code: 'SMA0338',
				Name: 'Estrutura e Funcionamento da Educação Básica',
				Description: 'Propiciar condições para a compreensão da estrutura e funcionamento do ensino fundamental e médio como elemento de reflexão sobre a realidade escolar brasileira, incluindo a inserção do licenciando nesta realidade, como condição para sua formação prática.',
				ClassCredits: 2,
				AssignCredits: 2,
				TotalHours: '90 h ( Práticas como Componentes Curriculares = 30 h )',
				Requirements: [
					'SMA0340'
				],
				Optional: false
			},
			{
				Code: 'SMA0178',
				Name: 'Tópicos de Matemática Elementar e Estatística',
				Description: 'Examinar tópicos de Matemática Elementar de um ponto de vista mais preciso  e mais crítico do que a abordagem usual na escola secundária.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h ( Práticas como Componentes Curriculares = 30 h )',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SMA0346',
				Name: 'Metodologia de Pesquisa em Educação Matemática',
				Description: 'Apresentar paradigmas de organização da pesquisa quantitativa e qualitativa, destacando a relevância que essas últimas adquiriram para a área educacional, a partir principalmente da década de 1970. Estudar as origens e características da pesquisa qualitativa para a área educacional, relacionando-as ao seu desenvolvimento no âmbito das Ciências Sociais e da Antropologia. Estudar o desenvolvimento das abordagens qualitativas na área da Educação e Educação Matemática.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0339'
				],
				Optional: true
			},
			{
				Code: 'SMA0192',
				Name: 'Introdução à Topologia Diferencial',
				Description: 'Essa disciplina consiste em uma introdução simples à Topologia Diferencial, culminando com resultados na fronteira da geometria e da topologia de superfícies. As ferramentas introduzidas são essenciais ao estudo da geometria e também possuem aplicações em diversas outras áreas da Matemática.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SMA0308',
					'SMA0375'
				],
				Optional: true
			},
			{
				Code: 'SMA0384',
				Name: 'Saberes Docentes e Formação do Professor',
				Description: 'Compreender a natureza da profissão docente na perspectiva da diversidade de saberes dos professores. Entender o sentido de profissionalização e formação em função dos processos histórico e ideológico e potencial. Reconhecer os saberes e competências como elementos da profissionalização e do reconhecimento social. Identificar as especificidades de saberes dos profissionais que atuam na educação básica. Reconhecer a reflexão como elemento importante para o desenvolvimento pessoal e profissional docente dentro dos contextos da prática e da formação. Conhecer e refletir sobre tendências internacionais da formação docente.',
				ClassCredits: 2,
				AssignCredits: 2,
				TotalHours: '90 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SMA0169',
				Name: 'Equações Diferenciais Parciais',
				Description: 'Familiarizar os alunos com técnicas clássicas de resoluções de equações diferenciais parciais de primeira e de segunda ordem, motivando-os através dos problemas físicos que promoveram o aparecimento desta área da Matemática.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0332',
					'SMA0356',
					'SME0240'
				],
				Optional: true
			},
			{
				Code: 'SMA0365',
				Name: 'Metodologia de Ensino de Matemática I',
				Description: 'São objetivos específicos da disciplina, que o licenciando: adquira uma visão geral dos conteúdos matemáticos que se destinam ao Ensino Fundamental; tenha condições de avaliar atividades docentes no campo de Matemática e de programar cursos em qualquer nível; desenvolva aptidões adequadas para propor métodos e técnicas destinadas a situações de aprendizagem em Matemática.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SMA0181',
				Name: 'Matemática Discreta II',
				Description: 'Dar aos alunos os conhecimentos básicos teóricos de matemática  combinatória e teoria dos grafos, habilitando-os a resolverem problemas da área de Ciências de Computação que fazem uso dessas teorias e técnicas.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: '5500002',
				Name: 'Seminários em Gestão Organizacional',
				Description: 'O objetivo principal desta disciplina é abordar tópicos variados de gestão organizacional, de forma generalista, apresentando aos alunos uma visão geral das várias frentes da gestão, contribuindo para sua formação técnica e humanística em seu futuro profissional.',
				ClassCredits: 1,
				AssignCredits: 1,
				TotalHours: '45 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SMA0136',
				Name: 'Teoria Qualitativa de Equações Diferenciais Ordinárias',
				Description: 'Conduzir os alunos ao conhecimento de técnicas de estudo de propriedades qualitativas de equações diferenciais ordinárias.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SME0240'
				],
				Optional: true
			},
			{
				Code: 'SMA0326',
				Name: 'Filosofia da Matemática',
				Description: 'Verificar as posições filosóficas no que diz respeito ao conhecimento Matemático, desde Platão até o presente momento.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0341'
				],
				Optional: true
			},
			{
				Code: 'SMA0145',
				Name: 'Aplicações da Topologia à Análise',
				Description: 'Familiarizar o aluno com algumas aplicações da topologia à Análise, principalmente ligadas aos teoremas: ponto fixo de Banach, de Baire, de Brouwer, de Stone-Weierstrass e o de Ascoli.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0343',
					'SMA0380'
				],
				Optional: true
			},
			{
				Code: 'SMA0375',
				Name: 'Álgebra Linear',
				Description: 'Levar os alunos ao uso de ferramentas algébricas, visando as demais disciplinas.',
				ClassCredits: 6,
				AssignCredits: 0,
				TotalHours: '90 h ( Práticas como Componentes Curriculares = 30 h )',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SMA0383',
				Name: 'Abordagens e Tendências Educacionais',
				Description: 'Levar o aluno a compreender diversas abordagens do processo de ensino e aprendizagem na educação; estudar de maneira mais profunda as diversas tendências pedagógicas na prática escolar. Novas tendências pedagógicas. Compreender as especificidades de tais abordagens e tendências no contexto do ensino e aprendizagem de matemática.',
				ClassCredits: 2,
				AssignCredits: 2,
				TotalHours: '90 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SMA0171',
				Name: 'Topologia',
				Description: 'Apresentar ao estudante as noções básicas da topologia e desenvolver sua habilidade de reconhecer, em situações concretas, conceitos estudados em espaços topológicos.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SMA0343'
				],
				Optional: true
			},
			{
				Code: 'SMA0139',
				Name: 'Teoria Elementar dos Números',
				Description: 'Introduzir o estudante nos principais tópicos da teoria  elementar dos números e dar uma visão histórica de alguns dos  problemas clássicos desta teoria.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0341'
				],
				Optional: true
			},
			{
				Code: 'SMA0351',
				Name: 'Atividades Teórico',
				Description: 'Cumprimento de 100 horas para as atividades acadêmico-científico-culturais, exigidas pela Resolução CNE/CP2, de 19/02/2002.',
				ClassCredits: 0,
				AssignCredits: 0,
				TotalHours: '0 h ( Atividades Acadêmicos-Científico-Culturais = 100 h )',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SMA0343',
				Name: 'Espaços Métricos',
				Description: 'Generalizar o conceito de distância euclideana. Estabelecer o conceito de funções entre espaços métricos. Reconhecer as equivalências isométricas e topológicas entre tais espaços. Reconhecer as propriedades de conexidade e compacidade, bem como suas invariâncias por continuidade. Estabelecer propriedades dos espaços métricos completos.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0332'
				],
				Optional: true
			},
			{
				Code: 'SMA0368',
				Name: 'História da Educação e das Orientações Curriculares de Matemática Brasileiras',
				Description: 'Estudar o desenvolvimento da educação e da escola no Brasil com ênfase na educação escolar, na matemática escolar, nas reformas educacionais e nas Leis de Diretrizes e Bases. Compreender os pressupostos que orientam as propostas curriculares de diferentes sistemas de educação e as avaliações desses sistemas. Analisar as propostas de orientações curriculares, de formação do professor e do aluno para o ensino da matemática escolar considerando os seus determinantes sociais; a construção das propostas em diferentes épocas, as diferentes instâncias de participação e o caráter comum das orientações curriculares oficiais.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h ( Práticas como Componentes Curriculares = 30 h )',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SMA0380',
				Name: 'Análise',
				Description: 'Familiarizar o aluno com as técnicas de Análise Matemática.',
				ClassCredits: 6,
				AssignCredits: 0,
				TotalHours: '90 h ( Estágio: 90 h )',
				Requirements: [
					'SMA0356'
				],
				Optional: true
			},
			{
				Code: 'SCC0230',
				Name: 'Inteligência Artificial',
				Description: 'Apresentar ao aluno as idéias fundamentais da Inteligência Artificial e algumas características relacionadas à implementação desse tipo de sistemas.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SMA0180',
					'SME0230'
				],
				Optional: true
			},
			{
				Code: 'SMA0306',
				Name: 'Álgebra II',
				Description: 'Esta disciplina tem como finalidade  dar uma visão mais profunda  dos conceitos apresentados em Álgebra I.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0305'
				],
				Optional: true
			},
			{
				Code: 'SME0211',
				Name: 'Otimização Linear',
				Description: 'Capacitar o aluno a perceber, formular e resolver problemas de otimização linear.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SMA0375'
				],
				Optional: true
			},
			{
				Code: 'SMA0357',
				Name: 'Aplicações de Teoria dos Conjuntos',
				Description: 'Apresentar algumas aplicações da teoria dos conjuntos à matemática.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0380'
				],
				Optional: true
			},
			{
				Code: 'SMA0120',
				Name: 'Introdução à Análise Funcional',
				Description: 'Estudar os espaços vetoriais normados, bem como as aplicações lineares entre dois desses espaços, com ênfase no caso em que os espaços são de Banach ou de Hilbert.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h',
				Requirements: [
					'SMA0123',
					'SMA0343'
				],
				Optional: true
			},
			{
				Code: 'SMA0143',
				Name: 'Introdução à Teoria da Medida',
				Description: 'Introduzir  à teoria da medida na reta e relacionar a integral de Lebesgue com a integral de Riemann e as integrais impróprias.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0308'
				],
				Optional: true
			},
			{
				Code: 'SMA0175',
				Name: 'Geometria Diferencial',
				Description: 'Apresentar ao estudante de Matemática um primeiro curso de Geometria Diferencial, discutindo propriedades locais e algumas propriedades intrínsecas de superfícies.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0300',
					'SMA0332',
					'SMA0375'
				],
				Optional: true
			},
			{
				Code: 'SMA0180',
				Name: 'Matemática Discreta I',
				Description: 'Dar aos alunos os conhecimentos básicos de Contagem e Combinatória, Relações, Teoria dos Números no contexto de Criptografia, Inferência e Prova, e Indução Matemática, habilitando-os a resolverem problemas da área de Ciências de Computação.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SMA0372',
				Name: 'Língua Brasileira de Sinais para Licenciatura',
				Description: 'Propiciar a aproximação dos falantes do português de uma língua viso-gestual usada pelas comunidades surdas (Libras) e uma melhor comunicação entre surdos e ouvintes em todos os âmbitos da sociedade, e especialmente nos espaços educacionais, favorecendo ações de inclusão social e oferecendo possibilidades para a quebra de barreiras lingüísticas.',
				ClassCredits: 2,
				AssignCredits: 1,
				TotalHours: '60 h ( Práticas como Componentes Curriculares = 30 h )',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SCC0223',
				Name: 'Estruturas de dados I',
				Description: 'Familiarizar os estudantes com as várias estruturas da informação, buscando habilitá-los a contar com esses recursos no desenvolvimento de outras atividades de ciências de computação.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SME0230'
				],
				Optional: true
			},
			{
				Code: 'SMA0112',
				Name: 'Matemática Aplicada',
				Description: 'Familiarizar os alunos com as aplicações de análise a problemas físicos em geral e em   particular à teoria dos circuitos elétricos',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0356',
					'SME0240'
				],
				Optional: true
			},
			{
				Code: 'SMA0334',
				Name: 'Fundamentos para a Matemática do Ensino Superior',
				Description: 'Esta disciplina tem por objetivo a revisão crítica de alguns conteúdos da Matemática do Ensino Médio, com certo aprofundamento destas ideias. Servirá para sedimentar a base matemática necessária para um melhor aproveitamento em outras disciplinas da graduação. O enfoque é na solução de problemas possíveis de serem resolvidos com a matemática de ensino não superior, mas que normalmente não são feitos por falta de maturidade dos alunos no Ensino Básico. A parte (1) do programa se refere a conceitos imediatamente necessários para a disciplina de Cálculo I e, sendo assim, deve ser ministrada logo no início do período letivo. Para a parte (2) deve ser feita uma abordagem crítica, incluindo demonstrações pertinentes. A rememoração das experiências anteriores do aluno, enquanto discente do Ensino Básico, e o confronto de novas propostas para o processo de ensino-aprendizagem desses conteúdos colaboram, assim, para a formação do futuro professor de Matemática.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h ( Práticas como Componentes Curriculares = 30 h )',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SCC0224',
				Name: 'Estruturas de dados II',
				Description: 'Apresentação de conceitos avançados que levem o aluno a uma maturidade em programação estruturada, com conhecimento de uma linguagem de programação com recursos avançados.Aprendizado de técnicas para construção de algoritmos e para análise da complexidade de algoritmos.Aprendizado de algoritmos clássicos de ordenação e busca em memória interna. Prática de Programação.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SCC0223'
				],
				Optional: true
			},
			{
				Code: 'SMA0173',
				Name: 'Álgebra III',
				Description: 'Dar ao aluno de graduação uma introdução à Teoria de Galois com especial ênfase ao caso em que o corpo de base são os racionais. Deve-se enfatizar o Teorema Fundamental de Galois e a discussão da solubilidade de equações algébricas por radicais. Para isso deve-se exibir vários exemplos e calcular explicitamente alguns grupos de Galois de equações simples.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0306',
					'SMA0375'
				],
				Optional: true
			},
			{
				Code: 'SMA0339',
				Name: 'Didática',
				Description: 'Desenvolver, junto aos licenciandos, uma postura crítico-reflexiva em relação ao ensino,  bem como competências básicas que os habilitem a planejar, organizar, orientar e avaliar o processo de ensino e aprendizagem.\nPromover uma análise das reais condições das escolas brasileiras e buscar formas de atuação simples e efetivas, de maneira a motivar o aprendizado e a formação plena do aluno, no exercício de sua cidadania e no conhecimento de sua personalidade',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: null,
				Optional: false
			},
			{
				Code: 'SMA0308',
				Name: 'Análise II',
				Description: 'Objetivo: Familiarizar o aluno com os conceitos de Análise Matemática, aprofundando o que já foi visto nas disciplinas de Cálculo.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0332',
					'SMA0356'
				],
				Optional: true
			},
			{
				Code: 'SMA0348',
				Name: 'História da Matemática no Ensino',
				Description: 'Fornecer aos alunos da Licenciatura conhecimentos que subsidiem a utilização crítica da História da Matemática como um possível recurso pedagógico para o ensino de Matemática.',
				ClassCredits: 3,
				AssignCredits: 1,
				TotalHours: '75 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SMA0360',
				Name: 'Medida e Integração',
				Description: 'A disciplina reúne os tópicos básicos de Topologia que são indispensáveis aos alunos que desejam cursar uma pós-graduação em matemática.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0308'
				],
				Optional: true
			},
			{
				Code: '7600006',
				Name: 'Física II',
				Description: 'Apresentar conceitos de Mecânica (rotações, oscilações, ondas e fluídos) e Termodinâmica.',
				ClassCredits: 5,
				AssignCredits: 0,
				TotalHours: '75 h',
				Requirements: null,
				Optional: false
			},
			{
				Code: 'SMA0359',
				Name: 'Topologia Avançada',
				Description: 'A disciplina reúne os tópicos básicos de Topologia que são indispensáveis aos alunos que desejam cursar uma pós-graduação em matemática.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0343'
				],
				Optional: true
			},
			{
				Code: 'SMA0367',
				Name: 'Estágio Supervisionado em Ensino de Geometria e Desenho Geométrico',
				Description: 'Desenvolver atividades de estágio nos anos finais do Ensino Fundamental e no Ensino Médio, supervisionado pelo docente responsável, que propiciem à formação do licenciando uma visão geral dos conteúdos de geometria e desenho geométrico para estes níveis de ensino, o contato com experiências, práticas e conhecimentos de natureza profissional, como a elaboração, o planejamento e a execução de atividades de ensino de matemática, sua análise e reestruturação.',
				ClassCredits: 2,
				AssignCredits: 4,
				TotalHours: '150 h ( Estágio: 120 h )',
				Requirements: [
					'SMA0339'
				],
				Optional: false
			},
			{
				Code: '7600107',
				Name: 'Física III',
				Description: 'Fornecer ao aluno noções básicas de circuitos elétricos em corrente contínua e corrente alternada e dar uma visão global dos conceitos fundamentais de eletricidade e magnetismo.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: null,
				Optional: true
			},
			{
				Code: 'SMA0356',
				Name: 'Cálculo IV',
				Description: 'Familiarizar os alunos com os resultados fundamentais relativos a: sequências e séries numéricas e de funções, série de Fourier e aplicações.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0301'
				],
				Optional: false
			},
			{
				Code: 'SMA0350',
				Name: 'Ensino de Matemática para Alunos com Necessidades Especiais',
				Description: 'Com esta disciplina pretende-se levar o licenciando a um exame da literatura e legislação disponíveis sobre a temática da inclusão escolar, com primazia para aqueles alunos portadores de necessidades especiais ou deficientes físicos/ mentais. Pretende-se, num segundo momento, relacionar essa temática com questões específicas do ensino e aprendizagem de Matemática nos níveis Fundamental e Médio e suas relações com a formação do professor dessa disciplina.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: null,
				Optional: true
			},
			{
				Code: 'SMA0142',
				Name: 'Curvas Algébricas Planas',
				Description: 'Objetivo: Introduzir os conceitos da Geometria Algébrica. Revisar as curvas planas da Geometria elementar (tais como retas, cônicas, rosáceas...). Estudar as propriedades de curvas definidas por equação polinomial. O cálculo das interseções de duas curvas, incluindo os pontos no infinito, é enfatizado.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SMA0332',
				Name: 'Cálculo II',
				Description: 'Familiarizar os alunos com os resultados fundamentais relativos a:  diferenciabilidade de  funções de várias variáveis, integrais múltiplas, integrais de linha, integrais de superfície.',
				ClassCredits: 6,
				AssignCredits: 0,
				TotalHours: '90 h',
				Requirements: [
					'SMA0301'
				],
				Optional: false
			},
			{
				Code: 'SMA0125',
				Name: 'Introdução ao Estudo das Singularidades de Aplicações Diferenciáveis',
				Description: 'O objetivo do curso é introduzir os aspectos básicos da Teoria das Singularidades das funções diferenciáveis, enfatizando as aplicações da teoria ao estudo da geometria de curvas e famílias de curvas no plano e no espaço.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0306',
					'SMA0308'
				],
				Optional: true
			},
			{
				Code: 'SMA0327',
				Name: 'Filosofia da Educação Matemática',
				Description: 'Conhecer e analisar as posições filosóficas no âmbito da Educação Matemática. Analisar a filosofia da Matemática e da Educação Matemática, juntamente com suas possíveis relações.Objetivos específicos: analisar algumas filosofias da Educação; refletir sobre concepções de conhecimento e conhecimento Matemático; relacionar filosofias da Matemática com a Educação Matemática; perceber os aspectos filosóficos inerentes às práticas educativas; perceber ligações entre aspectos filosóficos, pedagógicos e didáticos do conhecimento matemático; entender e caracterizar a Filosofia Educação Matemática.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0340'
				],
				Optional: true
			},
			{
				Code: 'SMA0345',
				Name: 'Elementos Históricos e Didáticos da Educação Matemática',
				Description: 'É objetivo específico da disciplina introduzir ao futuro professor, alguns tópicos da Didática da Matemática, relações entre a história  da educação e o ensino de Matemática, bem como o tratamento detalhado de algumas metodologias específicas para seu ensino',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: null,
				Optional: true
			},
			{
				Code: 'SLC0627',
				Name: 'Metodologia da Pesquisa e Redação Científica para Licenciatura',
				Description: 'Promover o desenvolvimento de competências profissionais nos alunos sobre tecnologias da informação e comunicação;\nLevar os alunos a conhecerem os principais recursos audiovisuais a serem utilizados em comunicações orais;\nPropiciar aos alunos técnicas de comunicação para que possam se expressar de forma adequada em linguagem oral e escrita;\nCapacitar os alunos para estruturar e realizar as diversas etapas envolvidas na produção de trabalhos científicos;\nProporcionar condições para que os alunos saibam utilizar as normas da ABNT com a finalidade de se expressar cientificamente;\nLevar os alunos a compreenderem, analisarem e interpretarem textos científicos.',
				ClassCredits: 2,
				AssignCredits: 2,
				TotalHours: '90 h ( Práticas como Componentes Curriculares = 30 h )',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SMA0371',
				Name: 'Estágio Supervisionado em Ensino de Matemática II',
				Description: 'Desenvolver atividades de estágio no Ensino Médio, supervisionado pelo docente responsável, que propiciem àformação do licenciando uma visão geral dos conteúdos de Matemática para estes níveis de ensino, o contato comexperiências, práticas e conhecimentos de natureza profissional, como a elaboração, o planejamento e a execução deatividades de ensino de matemática, sua análise e reestruturação.',
				ClassCredits: 0,
				AssignCredits: 5,
				TotalHours: '150 h ( Estágio: 150 h )',
				Requirements: [
					'SMA0339',
					'SMA0366'
				],
				Optional: false
			},
			{
				Code: 'SMA0310',
				Name: 'Geometria e Desenho  Geométrico',
				Description: 'Por meio desta matéria podem ser atingidos os seguintes  objetivos: familiarizar o estudante com a construção e  desenvolvimento de um sistema dedutivo; colocar o aluno em  contato com um capítulo importante na evolução da  mentalidade científica e introduzir  algumas  construções geométricas com régua e compasso e  também dar as noções sobre as quais se desenvolve a  geometria descritiva.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [],
				Optional: true
			},
			{
				Code: 'SMA0305',
				Name: 'Álgebra I',
				Description: 'Esta disciplina tem como finalidade  fornecer ao aluno de matemática uma formação mais abrangente em  Álgebra.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0341'
				],
				Optional: false
			},
			{
				Code: 'SMA0344',
				Name: 'Introdução aos Sistemas Dinâmicos',
				Description: 'Familiarizar o aluno com os métodos simples para estudar comportamentos complexos em sistemas dinâmicos.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0171',
					'SMA0380'
				],
				Optional: true
			},
			{
				Code: 'SMA0358',
				Name: 'Álgebra Avançada',
				Description: 'Apresentar aos alunos a Teoria de Grupos, a Teoria de Corpos e a Teoria de Galois sob um ponto de vista mais avançado.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0306'
				],
				Optional: true
			},
			{
				Code: 'SME0245',
				Name: 'Funções de Variável Complexa',
				Description: 'Levar os alunos ao estudo das funções de variáveis complexas e suas aplicações.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0332',
					'SMA0356'
				],
				Optional: false
			},
			{
				Code: 'SME0206',
				Name: 'Fundamentos de Análise Numérica',
				Description: 'Introduzir o aluno no universo da computação científica, ressaltando o uso do computador na resolução de problemas em engenharia e física. Apresentar métodos numéricos básicos e desenvolver algoritmos para a sua programação em pseudo-código e em uma linguagem moderna,. Estudar os principais métodos numéricos sua implementação computacional, suas propriedades e capacidades na resolução de problemas da área de interesse do curso. Utilização de implementações desses métodos disponíveis no mercado.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SME0230',
					'SME0240'
				],
				Optional: true
			},
			{
				Code: 'SME0205',
				Name: 'Métodos do Cálculo Numérico I',
				Description: 'Introduzir o aluno no universo da computação científica, ressaltando o uso do computador na resolução de problemas em engenharia e física. Apresentar métodos numéricos básicos e desenvolver algoritmos para a sua programação em uma linguagem moderna, desenvolvendo interatividade, loopings e outros recursos. Estudar os principais métodos numéricos: sua implementação computacional, suas propriedades e capacidades na resolução de problemas da área de interesse do curso. Utilização de implementações desses métodos disponíveis no mercado.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0375',
					'SME0230'
				],
				Optional: false
			},
			{
				Code: 'SMA0193',
				Name: 'Introdução aos Grupos de Lie',
				Description: 'Dar aos alunos do final dos cursos de Bacharelado e Licenciatura em matemática uma introdução a esse importante conceito matemático que são os grupos de Lie.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0305',
					'SMA0375'
				],
				Optional: true
			},
			{
				Code: 'SMA0300',
				Name: 'Geometria Analítica',
				Description: 'Visa familiarizar os alunos com a geometria analítica no plano e no espaço, com ênfase nos seus aspectos geométricos e suas traduções em coordenadas cartesianas',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SMA0377',
				Name: 'Direcionamento Acadêmico',
				Description: 'Acompanhar o progresso acadêmico dos alunos no 1o. semestre do curso para entender os problemas gerais e específicos, propondo a soluções gerais e específicas que contribuam na formação do aluno.',
				ClassCredits: 1,
				AssignCredits: 0,
				TotalHours: '15 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SMA0370',
				Name: 'Estágio Supervisionado em Ensino de Matemática I',
				Description: 'Desenvolver atividades de estágio nos anos finais do Ensino Fundamental, supervisionado pelo docente responsável,que propiciem à formação do licenciando uma visão geral dos conteúdos de Matemática para estes níveis de ensino, ocontato com experiências, práticas e conhecimentos de natureza profissional, como a elaboração, o planejamento e aexecução de atividades de ensino de matemática, sua análise e reestruturação.',
				ClassCredits: 0,
				AssignCredits: 5,
				TotalHours: '150 h ( Estágio: 150 h )',
				Requirements: [
					'SMA0339',
					'SMA0365'
				],
				Optional: false
			},
			{
				Code: 'SME0220',
				Name: 'Introdução à Teoria das Probabilidades',
				Description: '\tFamiliarizar o aluno com o raciocínio probabilístico. Fornecer conhecimentos básicos para a compreensão adequada dos métodos estatísticos.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0301'
				],
				Optional: false
			},
			{
				Code: 'PRG0002',
				Name: 'Tópicos de Pesquisa nas Ciências Contemporâneas',
				Description: 'A disciplina oferece ao estudante uma visão panorâmica e interdisciplinar das ciências contemporâneas, por meio de uma série de tópicos de pesquisas científicas em diferentes áreas, a partir dos quais os alunos deverão adquirir e desenvolver repertórios que os possibilitem compreender textos de divulgação científica e redigi-los com objetividade, concisão, propriedade, correção e clareza, ampliando e consolidando o emprego linguístico estabelecido pela norma padrão.',
				ClassCredits: 1,
				AssignCredits: 2,
				TotalHours: '75 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SMA0340',
				Name: 'Introdução aos Estudos da Educação',
				Description: 'Apresentar e discutir algumas questões centrais da educação e da escolaridade básica em suas vinculações com o exercício da cidadania, por meio do exame geral de aspectos fundamentais da cultura das instituições educacionais, de suas práticas, de seus agentes sociais, seus princípios e valores. Fornecer ao aluno do curso de Matemática um contato sistemático com as questões educacionais veiculadas pela imprensa nacional e/ou internacional, com a finalidade de despertá-lo para o posicionamento crítico-reflexivo frente aos acontecimentos atuais que envolvem a Educação e a melhoria do ensino público. Proporcionar a leitura e interpretação de textos de alguns pensadores da Educação Nacional.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h ( Práticas como Componentes Curriculares = 30 h )',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SMA0337',
				Name: 'Análise Crítica de Livros Didáticos',
				Description: 'Com esta disciplina pretende-se levar o aluno a um exame da literatura  disponível, com primazia para textos nacionais, relativa aos ensinos fundamental e médio, incluindo-se textos paradidáticos. Este exame deve se revestir de um caráter crítico, capaz de propiciar a avaliação das qualidades de um determinado texto em exame.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h ( Práticas como Componentes Curriculares = 55 h )',
				Requirements: [
					'SMA0178'
				],
				Optional: false
			},
			{
				Code: '7600108',
				Name: 'Psicologia da Educação',
				Description: 'Os principais objetivos desta disciplina são estudar e analisar algumas das principais teorias de aprendizagem de modo que o licenciado identifique o processo ensino-aprendizagem como complexo e dinâmico; e discutir temáticas relacionadas com o cotidiano escolar, de um ponto de vista psicológico.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h ( Práticas como Componentes Curriculares = 30 h )',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SMA0366',
				Name: 'Metodologia de Ensino de Matemática II',
				Description: 'São objetivos específicos, da disciplina, que o licenciando: adquira uma visão geral dos conteúdos matemáticos que se destinam ao Ensino Médio; tenha condições de programar cursos em qualquer nível e de avaliar atividades docentes no campo da Matemática; desenvolva aptidões adequadas para aplicar métodos e técnicas destinadas a situações de aprendizagem em Matemática.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SMA0328',
				Name: 'Ensino de Matemática Por Múltiplas Mídias',
				Description: 'Proporcionar ao licenciando uma visão geral de múltiplas ferramentas de informação que podem ser usadas para o Ensino da Matemática, como o jornal, o vídeo, a TV, a internet e outros. Desenvolver a capacidade crítica no uso destas ferramentas, tendo em vista os aspectos pedagógicos que visam a aprendizagem significativa  dos conteúdos tratados por estes meios.',
				ClassCredits: 4,
				AssignCredits: 1,
				TotalHours: '90 h ( Práticas como Componentes Curriculares = 10 h )',
				Requirements: null,
				Optional: false
			},
			{
				Code: 'SME0230',
				Name: 'Introdução à Programação de Computadores',
				Description: 'A disciplina apresenta aos alunos, num enfoque prático, as ferramentas e os conceitos básicos de programação de computadores. O aluno aprenderá a desenvolver programas utilizando técnicas básicas de programação estruturada e o conceito de tipos de dados. Concomitantemente se familiarizará com a utilização de ferramentas necessárias para execução dessas tarefas. O curso também oferece um primeiro contato com o uso de computadores para desenvolvimento de programas.',
				ClassCredits: 6,
				AssignCredits: 2,
				TotalHours: '150 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SMA0369',
				Name: 'Geometria para a Licenciatura',
				Description: 'Ampliar e aprofundar o estudo da geometria euclidiana plana e espacial considerando seu desenvolvimento no ensino da geometria na educação básica.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h ( Práticas como Componentes Curriculares = 30 h )',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SMA0352',
				Name: 'Atividades Teórico',
				Description: 'Cumprimento de 100 horas para as atividades acadêmico-científico-culturais, exigidas pela Resolução CNE/CP2, de 19/02/2002.',
				ClassCredits: 0,
				AssignCredits: 0,
				TotalHours: '0 h ( Atividades Acadêmicos-Científico-Culturais = 100 h )',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SMA0347',
				Name: 'Análise para Licenciatura',
				Description: 'Abordar a análise matemática e seus aspectos históricos proporcionando ao futuro professor conhecer como se estruturou o rigor na área de Matemática, particularmente no que diz respeito às contribuições para a Análise, e suas relações com a formalização de alguns resultados ensinados nos níveis Fundamental e Médio.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h ( Práticas como Componentes Curriculares = 60 h )',
				Requirements: [
					'SMA0356'
				],
				Optional: false
			},
			{
				Code: 'SMA0341',
				Name: 'Elementos de Matemática',
				Description: 'Apresentar conceitos básicos para o estudo da matemática.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SME0240',
				Name: 'Equações Diferenciais Ordinárias',
				Description: 'Familiarizar o aluno com a teoria das equações diferenciais ordinárias e desenvolver técnicas de resolução das mesmas.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [
					'SMA0301',
					'SMA0375'
				],
				Optional: false
			},
			{
				Code: '7600005',
				Name: 'Física I',
				Description: 'Apresentar conceitos fundamentais de Mecânica para massas pontuais.',
				ClassCredits: 5,
				AssignCredits: 0,
				TotalHours: '75 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SMA0301',
				Name: 'Cálculo I',
				Description: 'Fazer com que os alunos familiarizem-se com os conceitos de  limite, continuidade, diferenciabilidade e integração de  funções de uma variável.',
				ClassCredits: 6,
				AssignCredits: 0,
				TotalHours: '90 h ( Práticas como Componentes Curriculares = 20 h )',
				Requirements: [],
				Optional: false
			}
		]
	},
	{
		Name: 'Matemática - Núcleo Geral',
		Code: '55030',
		Subjects: [
			{
				Code: 'SMA0301',
				Name: 'Cálculo I',
				Description: 'Fazer com que os alunos familiarizem-se com os conceitos de  limite, continuidade, diferenciabilidade e integração de  funções de uma variável.',
				ClassCredits: 6,
				AssignCredits: 0,
				TotalHours: '90 h ( Práticas como Componentes Curriculares = 20 h )',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SMA0334',
				Name: 'Fundamentos para a Matemática do Ensino Superior',
				Description: 'Esta disciplina tem por objetivo a revisão crítica de alguns conteúdos da Matemática do Ensino Médio, com certo aprofundamento destas ideias. Servirá para sedimentar a base matemática necessária para um melhor aproveitamento em outras disciplinas da graduação. O enfoque é na solução de problemas possíveis de serem resolvidos com a matemática de ensino não superior, mas que normalmente não são feitos por falta de maturidade dos alunos no Ensino Básico. A parte (1) do programa se refere a conceitos imediatamente necessários para a disciplina de Cálculo I e, sendo assim, deve ser ministrada logo no início do período letivo. Para a parte (2) deve ser feita uma abordagem crítica, incluindo demonstrações pertinentes. A rememoração das experiências anteriores do aluno, enquanto discente do Ensino Básico, e o confronto de novas propostas para o processo de ensino-aprendizagem desses conteúdos colaboram, assim, para a formação do futuro professor de Matemática.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h ( Práticas como Componentes Curriculares = 30 h )',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SMA0375',
				Name: 'Álgebra Linear',
				Description: 'Levar os alunos ao uso de ferramentas algébricas, visando as demais disciplinas.',
				ClassCredits: 6,
				AssignCredits: 0,
				TotalHours: '90 h ( Práticas como Componentes Curriculares = 30 h )',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SCC0223',
				Name: 'Estruturas de dados I',
				Description: 'Familiarizar os estudantes com as várias estruturas da informação, buscando habilitá-los a contar com esses recursos no desenvolvimento de outras atividades de ciências de computação.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h',
				Requirements: [
					'SME0230'
				],
				Optional: true
			},
			{
				Code: 'SMA0300',
				Name: 'Geometria Analítica',
				Description: 'Visa familiarizar os alunos com a geometria analítica no plano e no espaço, com ênfase nos seus aspectos geométricos e suas traduções em coordenadas cartesianas',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SME0230',
				Name: 'Introdução à Programação de Computadores',
				Description: 'A disciplina apresenta aos alunos, num enfoque prático, as ferramentas e os conceitos básicos de programação de computadores. O aluno aprenderá a desenvolver programas utilizando técnicas básicas de programação estruturada e o conceito de tipos de dados. Concomitantemente se familiarizará com a utilização de ferramentas necessárias para execução dessas tarefas. O curso também oferece um primeiro contato com o uso de computadores para desenvolvimento de programas.',
				ClassCredits: 6,
				AssignCredits: 2,
				TotalHours: '150 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SMA0376',
				Name: 'Introdução à Metodologia Científica',
				Description: 'Proporcionar ao aluno a oportunidade de discutir e praticar aspectos relacionados ao desenvolvimento de pesquisa e divulgação dos conhecimentos científicos. Permitir uma primeira abordagem às considerações epistemológicas que fundamentam as pesquisas em matemática e em educação matemática. Capacitar o aluno para saber aplicar o método científico e saber identificar o conhecimento científico matemático e da educação matemática. Introduzir o aluno às questões da produção do conhecimento matemático e da educação matemática. Saber o que são os componentes da linguagem científica: teoria, hipótese, lei científica. Conhecer as diferentes formas de explicação científica e distingui-las das explicações de senso comum. Conhecer o que é um trabalho científico: “papers” e relatórios. Capacitar o aluno para saber como preparar um projeto de pesquisa. Como fazer uma pesquisa bibliográfica; relatar um experimento; redigir relatório e monografia.',
				ClassCredits: 2,
				AssignCredits: 1,
				TotalHours: '60 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SMA0341',
				Name: 'Elementos de Matemática',
				Description: 'Apresentar conceitos básicos para o estudo da matemática.',
				ClassCredits: 4,
				AssignCredits: 0,
				TotalHours: '60 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SMA0377',
				Name: 'Direcionamento Acadêmico',
				Description: 'Acompanhar o progresso acadêmico dos alunos no 1o. semestre do curso para entender os problemas gerais e específicos, propondo a soluções gerais e específicas que contribuam na formação do aluno.',
				ClassCredits: 1,
				AssignCredits: 0,
				TotalHours: '15 h',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SMA0340',
				Name: 'Introdução aos Estudos da Educação',
				Description: 'Apresentar e discutir algumas questões centrais da educação e da escolaridade básica em suas vinculações com o exercício da cidadania, por meio do exame geral de aspectos fundamentais da cultura das instituições educacionais, de suas práticas, de seus agentes sociais, seus princípios e valores. Fornecer ao aluno do curso de Matemática um contato sistemático com as questões educacionais veiculadas pela imprensa nacional e/ou internacional, com a finalidade de despertá-lo para o posicionamento crítico-reflexivo frente aos acontecimentos atuais que envolvem a Educação e a melhoria do ensino público. Proporcionar a leitura e interpretação de textos de alguns pensadores da Educação Nacional.',
				ClassCredits: 4,
				AssignCredits: 2,
				TotalHours: '120 h ( Práticas como Componentes Curriculares = 30 h )',
				Requirements: [],
				Optional: false
			},
			{
				Code: 'SMA0332',
				Name: 'Cálculo II',
				Description: 'Familiarizar os alunos com os resultados fundamentais relativos a:  diferenciabilidade de  funções de várias variáveis, integrais múltiplas, integrais de linha, integrais de superfície.',
				ClassCredits: 6,
				AssignCredits: 0,
				TotalHours: '90 h',
				Requirements: [
					'SMA0301'
				],
				Optional: false
			}
		]
	}
]
