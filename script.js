// ================= ESTRUTURA DE DADOS =================
const originalFlashcards = [
    { id: 301, category: "Fundamentos AWS", essential: true, front: `O que é a AWS?`, back: `A Amazon Web Services (AWS) é uma plataforma de computação em nuvem que oferece serviços de computação, armazenamento, bancos de dados, redes, segurança, IA, analytics e muito mais sob demanda.\n\n💡 Na prova: Pense em AWS = serviços de TI pela nuvem.` },
    { id: 302, category: "Fundamentos AWS", essential: true, front: `O que é Cloud Computing?`, back: `É o fornecimento de recursos de TI pela internet, sob demanda, sem que o cliente precise manter toda a infraestrutura física localmente.\n\n💡 Na prova: Recursos de TI pela internet, conforme a necessidade.` },
    { id: 303, category: "Fundamentos AWS", essential: true, front: `Quais são os principais benefícios da computação em nuvem?`, back: `Agilidade, elasticidade, escalabilidade, alta disponibilidade, alcance global e pagamento conforme o uso.\n\n💡 Na prova: A nuvem permite substituir grandes investimentos iniciais por consumo sob demanda.` },
    { id: 304, category: "Fundamentos AWS", essential: true, front: `O que significa elasticidade na nuvem?`, back: `É a capacidade de aumentar ou reduzir recursos automaticamente de acordo com a demanda.\n\n💡 Na prova: Elasticidade = ajustar capacidade conforme a demanda.` },
    { id: 305, category: "Fundamentos AWS", essential: false, front: `O que significa escalabilidade?`, back: `É a capacidade de aumentar ou diminuir a capacidade de um sistema para atender às mudanças na demanda.\n\n💡 Na prova: Escalabilidade = capacidade de crescer ou reduzir.` },
    { id: 306, category: "Fundamentos AWS", essential: true, front: `O que significa Pay-as-you-go?`, back: `É o modelo em que o cliente paga pelos recursos que utiliza, evitando a necessidade de comprar antecipadamente toda a infraestrutura.\n\n💡 Na prova: Pague pelo que usar.` },
    { id: 307, category: "Fundamentos AWS", essential: true, front: `O que é uma AWS Region?`, back: `É uma área geográfica que contém várias Availability Zones fisicamente separadas.\n\n💡 Na prova: Region = área geográfica.` },
    { id: 308, category: "Fundamentos AWS", essential: true, front: `O que é uma Availability Zone (AZ)?`, back: `É um ou mais datacenters fisicamente separados dentro de uma AWS Region, projetados para oferecer isolamento de falhas.\n\n💡 Na prova: AZ = infraestrutura isolada dentro de uma Region.` },
    { id: 309, category: "Fundamentos AWS", essential: true, front: `O que é alta disponibilidade?`, back: `É a capacidade de um sistema permanecer disponível mesmo diante de determinadas falhas.\n\n💡 Na prova: Distribuir recursos entre AZs pode aumentar a disponibilidade.` },
    { id: 310, category: "Fundamentos AWS", essential: true, front: `O que é o modelo de responsabilidade compartilhada da AWS?`, back: `A AWS é responsável pela segurança da infraestrutura da nuvem, enquanto o cliente é responsável pela segurança dentro da nuvem, de acordo com o serviço utilizado.\n\n💡 Na prova: AWS = segurança da nuvem; cliente = segurança na nuvem.` },
    { id: 311, category: "Fundamentos AWS", essential: false, front: `O que é infraestrutura como serviço (IaaS)?`, back: `Modelo em que o provedor oferece recursos fundamentais de infraestrutura, como servidores, armazenamento e redes, enquanto o cliente gerencia mais componentes.\n\n💡 Na prova: EC2 é um exemplo comum de IaaS.` },
    { id: 312, category: "Fundamentos AWS", essential: false, front: `O que é Platform as a Service (PaaS)?`, back: `Modelo em que o provedor gerencia a infraestrutura e a plataforma necessária para executar aplicações, permitindo que o cliente se concentre mais no desenvolvimento.\n\n💡 Na prova: Menos gerenciamento de infraestrutura pelo cliente.` },
    { id: 313, category: "Fundamentos AWS", essential: false, front: `O que é Software as a Service (SaaS)?`, back: `Modelo em que o software completo é disponibilizado ao usuário como um serviço, geralmente pela internet.\n\n💡 Na prova: O provedor gerencia praticamente toda a infraestrutura e aplicação.` },
    { id: 314, category: "Fundamentos AWS", essential: false, front: `Qual é a diferença entre CAPEX e OPEX?`, back: `CAPEX são gastos de capital, normalmente associados à compra de infraestrutura. OPEX são gastos operacionais, relacionados ao uso e operação dos recursos.\n\n💡 Na prova: Nuvem tende a reduzir a necessidade de grandes investimentos iniciais em CAPEX.` },
    { id: 315, category: "Fundamentos AWS", essential: false, front: `O que é agilidade na nuvem?`, back: `É a capacidade de provisionar e utilizar recursos de TI rapidamente, permitindo experimentar e lançar soluções com mais velocidade.\n\n💡 Na prova: Nuvem = provisionamento rápido.` },
    { id: 316, category: "Fundamentos AWS", essential: false, front: `O que significa economia de escala na AWS?`, back: `É a redução do custo por unidade obtida pela AWS devido à enorme escala de sua infraestrutura e volume de clientes.\n\n💡 Na prova: Grande escala pode resultar em custos menores por unidade.` },
    { id: 317, category: "Fundamentos AWS", essential: false, front: `O que é alcance global da AWS?`, back: `É a capacidade de utilizar uma infraestrutura distribuída globalmente para disponibilizar aplicações e serviços em diferentes regiões geográficas.\n\n💡 Na prova: Regiões e infraestrutura global ajudam a atender usuários em diferentes locais.` },
    { id: 318, category: "Fundamentos AWS", essential: true, front: `Qual é a diferença entre uma Region e uma Availability Zone?`, back: `Region é uma área geográfica; Availability Zone é uma infraestrutura fisicamente separada dentro de uma Region.\n\n💡 Na prova: Region contém várias AZs.` },
    { id: 319, category: "Fundamentos AWS", essential: true, front: `Por que utilizar múltiplas Availability Zones?`, back: `Para aumentar a disponibilidade e a resiliência, reduzindo o impacto de uma falha em uma única AZ.\n\n💡 Na prova: Multi-AZ = maior disponibilidade e resiliência.` },
    { id: 320, category: "Fundamentos AWS", essential: true, front: `O que é tolerância a falhas?`, back: `É a capacidade de um sistema continuar funcionando mesmo quando determinados componentes apresentam falhas.\n\n💡 Na prova: Redundância ajuda a criar sistemas tolerantes a falhas.` },
    { id: 321, category: "Fundamentos AWS", essential: true, front: `O que é resiliência?`, back: `É a capacidade de um sistema se recuperar ou continuar operando diante de falhas e interrupções.\n\n💡 Na prova: Resiliência = resistir e recuperar-se de falhas.` },
    { id: 322, category: "Fundamentos AWS", essential: true, front: `O que é AWS Free Tier?`, back: `É o conjunto de ofertas que permite utilizar determinados serviços AWS gratuitamente dentro de limites e condições específicas.\n\n💡 Na prova: Gratuito não significa que todos os recursos AWS sejam ilimitados.` },
    { id: 323, category: "Fundamentos AWS", essential: true, front: `O que é a AWS Management Console?`, back: `Interface web utilizada para acessar e administrar serviços e recursos da AWS.\n\n💡 Na prova: Console = interface gráfica da AWS.` },
    { id: 324, category: "Fundamentos AWS", essential: false, front: `O que é AWS CLI?`, back: `Ferramenta de linha de comando que permite interagir com serviços e recursos da AWS.\n\n💡 Na prova: CLI = gerenciamento por comandos.` },
    { id: 325, category: "Fundamentos AWS", essential: false, front: `O que é um AWS SDK?`, back: `Conjunto de bibliotecas que permite desenvolver aplicações que interagem programaticamente com serviços AWS.\n\n💡 Na prova: SDK = integração da aplicação com a AWS.` },
    { id: 326, category: "IAM e Segurança", essential: true, front: `O que é IAM?`, back: `AWS Identity and Access Management é o serviço usado para controlar identidades, autenticação e permissões de acesso aos recursos AWS.\n\n💡 Na prova: IAM = identidades e permissões.` },
    { id: 327, category: "IAM e Segurança", essential: true, front: `O que é um IAM User?`, back: `Uma identidade que representa uma pessoa ou aplicação que precisa acessar recursos AWS.\n\n💡 Na prova: User = identidade individual.` },
    { id: 328, category: "IAM e Segurança", essential: true, front: `O que é um IAM Group?`, back: `É um conjunto de usuários IAM que permite aplicar permissões de forma organizada a vários usuários.\n\n💡 Na prova: Group = coleção de usuários.` },
    { id: 329, category: "IAM e Segurança", essential: true, front: `O que é um IAM Role?`, back: `É uma identidade com permissões que pode ser assumida temporariamente por usuários, aplicações ou serviços AWS.\n\n💡 Na prova: Role = permissões temporárias sem precisar compartilhar credenciais de usuário.` },
    { id: 330, category: "IAM e Segurança", essential: true, front: `O que é uma IAM Policy?`, back: `É um documento que define permissões, especificando quais ações podem ou não ser realizadas sobre determinados recursos.\n\n💡 Na prova: Policy = regras de permissão.` },
    { id: 331, category: "IAM e Segurança", essential: true, front: `O que significa princípio do menor privilégio?`, back: `Conceder somente as permissões necessárias para que uma identidade execute suas tarefas.\n\n💡 Na prova: Least privilege = mínimo de permissões necessárias.` },
    { id: 332, category: "IAM e Segurança", essential: true, front: `O que é MFA?`, back: `Multi-Factor Authentication adiciona uma segunda ou outra forma de verificação além da senha.\n\n💡 Na prova: MFA aumenta a segurança da autenticação.` },
    { id: 333, category: "IAM e Segurança", essential: false, front: `Um usuário pode pertencer a vários grupos IAM?`, back: `Sim. Um usuário IAM pode pertencer a vários grupos e receber permissões associadas a esses grupos.\n\n💡 Na prova: Usuário pode estar em vários grupos.` },
    { id: 334, category: "IAM e Segurança", essential: false, front: `Grupos IAM podem conter outros grupos?`, back: `Não. Grupos IAM não podem ser aninhados dentro de outros grupos.\n\n💡 Na prova: Group dentro de Group = não.` },
    { id: 335, category: "IAM e Segurança", essential: false, front: `O que é IAM Access Analyzer?`, back: `Serviço que ajuda a analisar acessos e permissões, identificando recursos compartilhados externamente e apoiando o princípio do menor privilégio.\n\n💡 Na prova: Access Analyzer = análise de acesso/permissões.` },
    { id: 336, category: "IAM e Segurança", essential: true, front: `O que é AWS KMS?`, back: `Serviço gerenciado para criar e controlar chaves criptográficas utilizadas em operações de criptografia e segurança.\n\n💡 Na prova: KMS = gerenciamento de chaves.` },
    { id: 337, category: "IAM e Segurança", essential: false, front: `O que é criptografia em repouso?`, back: `Proteção dos dados enquanto estão armazenados.\n\n💡 Na prova: At rest = dados armazenados.` },
    { id: 338, category: "IAM e Segurança", essential: false, front: `O que é criptografia em trânsito?`, back: `Proteção dos dados enquanto estão sendo transmitidos entre sistemas ou pela rede.\n\n💡 Na prova: In transit = dados em movimento.` },
    { id: 339, category: "IAM e Segurança", essential: false, front: `O que é AWS Secrets Manager?`, back: `Serviço utilizado para armazenar, gerenciar e recuperar informações sensíveis, como senhas, tokens e credenciais.\n\n💡 Na prova: Secrets Manager = segredos e credenciais.` },
    { id: 340, category: "IAM e Segurança", essential: false, front: `Qual é a diferença entre IAM e KMS?`, back: `IAM controla identidades e permissões; KMS gerencia chaves criptográficas.\n\n💡 Na prova: IAM = acesso; KMS = chaves.` },
    { id: 341, category: "Computação e EC2", essential: true, front: `O que é Amazon EC2?`, back: `Serviço que fornece capacidade computacional na forma de instâncias virtuais sob demanda.\n\n💡 Na prova: EC2 = servidor virtual.` },
    { id: 342, category: "Computação e EC2", essential: true, front: `O que é uma AMI?`, back: `Amazon Machine Image é uma imagem utilizada como modelo para iniciar instâncias EC2.\n\n💡 Na prova: AMI = modelo/imagem para criar EC2.` },
    { id: 343, category: "Computação e EC2", essential: true, front: `O que é Auto Scaling?`, back: `Recurso que ajusta a capacidade computacional de acordo com a demanda, adicionando ou removendo instâncias conforme necessário.\n\n💡 Na prova: Auto Scaling = ajusta quantidade de instâncias.` },
    { id: 344, category: "Computação e EC2", essential: true, front: `O que é Elastic Load Balancing?`, back: `Serviço que distribui o tráfego de entrada entre múltiplos destinos, como instâncias EC2.\n\n💡 Na prova: Load Balancer = distribui tráfego.` },
    { id: 345, category: "Computação e EC2", essential: false, front: `O que é uma EC2 On-Demand Instance?`, back: `Instância paga conforme o uso, sem necessidade de compromisso de longo prazo.\n\n💡 Na prova: On-Demand = flexibilidade.` },
    { id: 346, category: "Computação e EC2", essential: false, front: `O que é uma Reserved Instance?`, back: `Opção de contratação que envolve compromisso de uso por um período e pode oferecer desconto em relação ao uso sob demanda.\n\n💡 Na prova: Uso previsível + compromisso = possível economia.` },
    { id: 347, category: "Computação e EC2", essential: false, front: `O que é uma Spot Instance?`, back: `Capacidade EC2 disponível com desconto significativo, mas que pode ser interrompida pela AWS.\n\n💡 Na prova: Spot = barato + pode ser interrompido.` },
    { id: 348, category: "Computação e EC2", essential: false, front: `Para quais cargas Spot Instances são adequadas?`, back: `Cargas tolerantes a interrupções, flexíveis e que podem ser reiniciadas ou distribuídas.\n\n💡 Na prova: Evite Spot para workloads que não toleram interrupção.` },
    { id: 349, category: "Computação e EC2", essential: false, front: `O que é um Dedicated Host?`, back: `Servidor físico dedicado a um único cliente para executar instâncias EC2.\n\n💡 Na prova: Host físico dedicado.` },
    { id: 350, category: "Computação e EC2", essential: false, front: `O que é Amazon Lightsail?`, back: `Serviço simplificado para criar aplicações e servidores virtuais com configuração mais fácil e preços previsíveis.\n\n💡 Na prova: Lightsail = computação simplificada.` },
    { id: 351, category: "Computação e EC2", essential: false, front: `O que é AWS Elastic Beanstalk?`, back: `Serviço que facilita o deploy e gerenciamento de aplicações sem exigir que o cliente gerencie diretamente grande parte da infraestrutura subjacente.\n\n💡 Na prova: Beanstalk = plataforma simplificada para deploy.` },
    { id: 352, category: "Computação e EC2", essential: false, front: `Qual é a diferença entre EC2 e Lambda?`, back: `EC2 fornece servidores virtuais que o cliente gerencia; Lambda executa código serverless sem exigir gerenciamento de servidores.\n\n💡 Na prova: EC2 = servidor; Lambda = função serverless.` },
    { id: 353, category: "Computação e EC2", essential: false, front: `O que é Amazon EBS?`, back: `Serviço de armazenamento persistente de blocos usado principalmente com instâncias EC2.\n\n💡 Na prova: EBS = volume/disco para EC2.` },
    { id: 354, category: "Computação e EC2", essential: false, front: `O que é uma instância EC2?`, back: `É uma máquina virtual executada na infraestrutura da AWS.\n\n💡 Na prova: Instância = servidor virtual.` },
    { id: 355, category: "Computação e EC2", essential: false, front: `Quem gerencia o sistema operacional de uma EC2?`, back: `O cliente normalmente é responsável por administrar o sistema operacional convidado, incluindo atualizações e configurações.\n\n💡 Na prova: EC2 = mais responsabilidade do cliente.` },
    { id: 356, category: "Computação e EC2", essential: false, front: `O que é Amazon EC2 Image Builder?`, back: `Serviço que ajuda a automatizar a criação, manutenção, validação e distribuição de imagens de máquinas virtuais e containers.\n\n💡 Na prova: Image Builder = automatiza criação/manutenção de imagens.` },
    { id: 357, category: "S3 e Armazenamento", essential: true, front: `O que é Amazon S3?`, back: `Serviço de armazenamento de objetos altamente escalável e durável.\n\n💡 Na prova: S3 = objetos.` },
    { id: 358, category: "S3 e Armazenamento", essential: true, front: `O que é um bucket S3?`, back: `É um contêiner usado para armazenar objetos no Amazon S3.\n\n💡 Na prova: Bucket = recipiente dos objetos.` },
    { id: 359, category: "S3 e Armazenamento", essential: true, front: `O que é um objeto no S3?`, back: `É um arquivo armazenado no S3 junto com seus metadados e uma chave que o identifica dentro do bucket.\n\n💡 Na prova: Objeto = arquivo + metadados.` },
    { id: 360, category: "S3 e Armazenamento", essential: false, front: `O que é S3 Versioning?`, back: `Recurso que mantém versões diferentes de um objeto, ajudando a recuperar alterações ou exclusões acidentais.\n\n💡 Na prova: Versioning = histórico de versões.` },
    { id: 361, category: "S3 e Armazenamento", essential: false, front: `O que são Storage Classes do S3?`, back: `São diferentes classes de armazenamento que permitem escolher características de custo e acesso de acordo com o padrão de utilização dos dados.\n\n💡 Na prova: Classe adequada = otimização de custo.` },
    { id: 362, category: "S3 e Armazenamento", essential: false, front: `O que é S3 Glacier?`, back: `Classe de armazenamento do S3 destinada principalmente a dados arquivados e acessados com pouca frequência.\n\n💡 Na prova: Glacier = arquivamento.` },
    { id: 363, category: "S3 e Armazenamento", essential: false, front: `O que é S3 Lifecycle?`, back: `Recurso que permite definir regras para mover ou excluir objetos automaticamente conforme o tempo ou outras condições.\n\n💡 Na prova: Lifecycle = automatiza ciclo de vida dos objetos.` },
    { id: 364, category: "S3 e Armazenamento", essential: false, front: `O que é S3 Intelligent-Tiering?`, back: `Classe de armazenamento que move automaticamente objetos entre níveis de acesso conforme os padrões de uso, ajudando a otimizar custos.\n\n💡 Na prova: Acesso muda → armazenamento pode mudar automaticamente.` },
    { id: 365, category: "S3 e Armazenamento", essential: false, front: `Qual é a diferença entre S3 e EBS?`, back: `S3 é armazenamento de objetos; EBS é armazenamento de blocos usado principalmente com EC2.\n\n💡 Na prova: S3 = objeto; EBS = bloco.` },
    { id: 366, category: "S3 e Armazenamento", essential: false, front: `O que é Amazon EFS?`, back: `Serviço de sistema de arquivos gerenciado que permite acesso compartilhado aos dados por múltiplos recursos computacionais.\n\n💡 Na prova: EFS = arquivos compartilhados.` },
    { id: 367, category: "S3 e Armazenamento", essential: false, front: `Qual é a diferença entre EBS e EFS?`, back: `EBS fornece armazenamento de blocos normalmente associado a uma instância; EFS fornece um sistema de arquivos que pode ser compartilhado entre múltiplos recursos.\n\n💡 Na prova: EBS = bloco; EFS = arquivo compartilhado.` },
    { id: 368, category: "S3 e Armazenamento", essential: false, front: `O que é AWS Storage Gateway?`, back: `Serviço que conecta ambientes locais a armazenamento AWS, fornecendo uma ponte entre infraestrutura on-premises e cloud storage.\n\n💡 Na prova: Storage Gateway = integração entre on-premises e AWS Storage.` },
    { id: 369, category: "Bancos de Dados", essential: true, front: `O que é Amazon RDS?`, back: `Serviço gerenciado para bancos de dados relacionais, facilitando tarefas como provisionamento, backups e manutenção.\n\n💡 Na prova: RDS = banco relacional gerenciado.` },
    { id: 370, category: "Bancos de Dados", essential: true, front: `Quais mecanismos podem ser utilizados com Amazon RDS?`, back: `Aurora, PostgreSQL, MySQL, MariaDB, Oracle, SQL Server e Db2.\n\n💡 Na prova: RDS = relacional; memorize os principais engines.` },
    { id: 371, category: "Bancos de Dados", essential: false, front: `O que é Amazon Aurora?`, back: `Banco de dados relacional desenvolvido pela AWS e compatível com MySQL e PostgreSQL.\n\n💡 Na prova: Aurora = relacional AWS.` },
    { id: 372, category: "Bancos de Dados", essential: true, front: `O que é Amazon DynamoDB?`, back: `Banco de dados NoSQL gerenciado, projetado para oferecer alta escalabilidade e baixa latência.\n\n💡 Na prova: DynamoDB = NoSQL.` },
    { id: 373, category: "Bancos de Dados", essential: true, front: `O que é Amazon Redshift?`, back: `Data warehouse gerenciado para análise de grandes volumes de dados.\n\n💡 Na prova: Redshift = analytics/data warehouse.` },
    { id: 374, category: "Bancos de Dados", essential: false, front: `O que é Amazon DocumentDB?`, back: `Banco de dados de documentos gerenciado, projetado para workloads compatíveis com MongoDB.\n\n💡 Na prova: DocumentDB = documentos/JSON/MongoDB workloads.` },
    { id: 375, category: "Bancos de Dados", essential: false, front: `O que é Amazon ElastiCache?`, back: `Serviço gerenciado de cache em memória que pode melhorar o desempenho das aplicações reduzindo a necessidade de acessar bancos de dados para determinados dados.\n\n💡 Na prova: Cache = respostas mais rápidas.` },
    { id: 376, category: "Bancos de Dados", essential: false, front: `Qual é a diferença entre RDS e DynamoDB?`, back: `RDS é voltado a bancos relacionais; DynamoDB é um banco NoSQL gerenciado.\n\n💡 Na prova: Relacional = RDS; NoSQL = DynamoDB.` },
    { id: 377, category: "Bancos de Dados", essential: false, front: `O que é uma réplica de leitura?`, back: `Cópia de um banco utilizada principalmente para distribuir operações de leitura e reduzir a carga sobre o banco principal.\n\n💡 Na prova: Read Replica = escala de leitura.` },
    { id: 378, category: "Bancos de Dados", essential: false, front: `O que é Multi-AZ no RDS?`, back: `Configuração que mantém uma implantação de banco em múltiplas Availability Zones para aumentar a disponibilidade e fornecer failover.\n\n💡 Na prova: Multi-AZ = disponibilidade/failover.` },
    { id: 379, category: "Bancos de Dados", essential: false, front: `Qual é a diferença entre Read Replica e Multi-AZ?`, back: `Read Replica é principalmente utilizada para escalar leituras; Multi-AZ é principalmente utilizada para alta disponibilidade e failover.\n\n💡 Na prova: Read Replica = leitura; Multi-AZ = disponibilidade.` },
    { id: 380, category: "Redes e VPC", essential: true, front: `O que é Amazon VPC?`, back: `Serviço que permite criar uma rede virtual isolada logicamente dentro da AWS, com controle sobre subnets, roteamento e segurança.\n\n💡 Na prova: VPC = sua rede virtual na AWS.` },
    { id: 381, category: "Redes e VPC", essential: false, front: `O que é uma subnet?`, back: `É uma subdivisão de uma VPC que permite organizar recursos e controlar o roteamento de rede.\n\n💡 Na prova: Subnet = parte da VPC.` },
    { id: 382, category: "Redes e VPC", essential: false, front: `O que é uma subnet pública?`, back: `Subnet que possui uma rota para um Internet Gateway, permitindo conectividade com a internet conforme as configurações de rede e segurança.\n\n💡 Na prova: Pública = rota para Internet Gateway.` },
    { id: 383, category: "Redes e VPC", essential: false, front: `O que é uma subnet privada?`, back: `Subnet que não possui rota direta para um Internet Gateway para acesso direto da internet.\n\n💡 Na prova: Privada = sem rota direta para Internet Gateway.` },
    { id: 384, category: "Redes e VPC", essential: false, front: `O que é Internet Gateway?`, back: `Componente que permite comunicação entre recursos em uma VPC e a internet, quando as rotas e configurações necessárias estão presentes.\n\n💡 Na prova: Internet Gateway = conexão VPC ↔ Internet.` },
    { id: 385, category: "Redes e VPC", essential: false, front: `O que é NAT Gateway?`, back: `Serviço que permite que recursos em subnets privadas iniciem conexões com a internet sem permitir conexões iniciadas diretamente da internet para esses recursos.\n\n💡 Na prova: NAT = saída da subnet privada.` },
    { id: 386, category: "Redes e VPC", essential: true, front: `O que é um Security Group?`, back: `Firewall virtual associado a recursos, como instâncias EC2, que controla tráfego de entrada e saída. É stateful.\n\n💡 Na prova: Security Group = recurso + stateful.` },
    { id: 387, category: "Redes e VPC", essential: true, front: `O que é uma Network ACL?`, back: `Firewall de nível de subnet que controla tráfego de entrada e saída. É stateless.\n\n💡 Na prova: NACL = subnet + stateless.` },
    { id: 388, category: "Redes e VPC", essential: true, front: `Qual a diferença entre Security Group e NACL?`, back: `Security Group atua no nível do recurso e é stateful; NACL atua no nível da subnet e é stateless.\n\n💡 Na prova: SG = recurso/stateful; NACL = subnet/stateless.` },
    { id: 389, category: "Redes e VPC", essential: false, front: `O que é Amazon Route 53?`, back: `Serviço de DNS altamente disponível e escalável da AWS.\n\n💡 Na prova: Route 53 = DNS.` },
    { id: 390, category: "Redes e VPC", essential: true, front: `O que é Amazon CloudFront?`, back: `CDN que distribui conteúdo por uma rede global de pontos de presença para reduzir a latência dos usuários.\n\n💡 Na prova: CloudFront = CDN + baixa latência.` },
    { id: 391, category: "Redes e VPC", essential: false, front: `O que é um Elastic IP?`, back: `Endereço IPv4 público estático que pode ser associado a recursos AWS compatíveis.\n\n💡 Na prova: Elastic IP = IPv4 público estático.` },
    { id: 392, category: "Redes e VPC", essential: false, front: `O que é AWS Direct Connect?`, back: `Serviço que fornece uma conexão de rede dedicada entre a infraestrutura local do cliente e a AWS.\n\n💡 Na prova: Direct Connect = conexão dedicada/on-premises ↔ AWS.` },
    { id: 393, category: "Segurança", essential: true, front: `O que é AWS WAF?`, back: `Web Application Firewall que ajuda a proteger aplicações web contra tráfego malicioso e determinados ataques HTTP/HTTPS.\n\n💡 Na prova: WAF = firewall de aplicações web.` },
    { id: 394, category: "Segurança", essential: true, front: `O que é AWS Shield?`, back: `Serviço de proteção contra ataques DDoS.\n\n💡 Na prova: Shield = DDoS.` },
    { id: 395, category: "Segurança", essential: false, front: `Qual é a diferença entre WAF e Shield?`, back: `WAF protege aplicações web filtrando tráfego; Shield fornece proteção contra ataques DDoS.\n\n💡 Na prova: WAF = aplicação web; Shield = DDoS.` },
    { id: 396, category: "Segurança", essential: false, front: `O que é Amazon GuardDuty?`, back: `Serviço de detecção de ameaças que analisa atividades e fontes de dados para identificar comportamentos potencialmente maliciosos.\n\n💡 Na prova: GuardDuty = detecção de ameaças.` },
    { id: 397, category: "Segurança", essential: false, front: `O que é Amazon Detective?`, back: `Serviço que ajuda a investigar e analisar atividades relacionadas a possíveis incidentes de segurança.\n\n💡 Na prova: Detective = investigação.` },
    { id: 398, category: "Segurança", essential: false, front: `Qual a diferença entre GuardDuty e Detective?`, back: `GuardDuty detecta possíveis ameaças; Detective ajuda a investigar e entender atividades relacionadas a incidentes.\n\n💡 Na prova: GuardDuty = detectar; Detective = investigar.` },
    { id: 399, category: "Segurança", essential: false, front: `O que é AWS Security Hub?`, back: `Serviço que centraliza e ajuda a gerenciar informações e descobertas de segurança provenientes de diferentes serviços e fontes.\n\n💡 Na prova: Security Hub = visão centralizada de segurança.` },
    { id: 400, category: "Segurança", essential: false, front: `O que é Amazon Macie?`, back: `Serviço de segurança e privacidade que utiliza machine learning e padrões para ajudar a descobrir e proteger dados sensíveis armazenados no Amazon S3.\n\n💡 Na prova: Macie = dados sensíveis no S3.` },
    { id: 401, category: "Segurança", essential: false, front: `O que é AWS Firewall Manager?`, back: `Serviço que ajuda a configurar e administrar centralmente regras de firewall e proteções para múltiplas contas e recursos.\n\n💡 Na prova: Firewall Manager = gerenciamento centralizado.` },
    { id: 402, category: "Monitoramento e Auditoria", essential: true, front: `O que é Amazon CloudWatch?`, back: `Serviço de monitoramento que coleta e acompanha métricas, logs e eventos de aplicações e recursos AWS.\n\n💡 Na prova: CloudWatch = monitoramento.` },
    { id: 403, category: "Monitoramento e Auditoria", essential: true, front: `O que é AWS CloudTrail?`, back: `Serviço que registra atividades realizadas na conta AWS, incluindo chamadas de API e ações realizadas por usuários, aplicações e serviços.\n\n💡 Na prova: CloudTrail = auditoria de atividades/API.` },
    { id: 404, category: "Monitoramento e Auditoria", essential: true, front: `O que é AWS Config?`, back: `Serviço que registra e avalia configurações e alterações dos recursos AWS, ajudando em governança e compliance.\n\n💡 Na prova: Config = configuração/compliance.` },
    { id: 405, category: "Monitoramento e Auditoria", essential: true, front: `Qual a diferença entre CloudWatch, CloudTrail e Config?`, back: `CloudWatch monitora métricas e logs; CloudTrail registra atividades e chamadas de API; Config acompanha configurações e alterações dos recursos.\n\n💡 Na prova: Watch = monitorar; Trail = atividade; Config = configuração.` },
    { id: 406, category: "Monitoramento e Auditoria", essential: false, front: `O que é um CloudWatch Alarm?`, back: `Recurso que monitora uma métrica e pode executar ações ou enviar notificações quando determinadas condições são atingidas.\n\n💡 Na prova: Alarm = reage a uma condição de métrica.` },
    { id: 407, category: "Monitoramento e Auditoria", essential: false, front: `O que são CloudWatch Logs?`, back: `Recurso utilizado para coletar, armazenar e consultar logs gerados por aplicações e serviços.\n\n💡 Na prova: Logs = registros de eventos/aplicações.` },
    { id: 408, category: "Monitoramento e Auditoria", essential: false, front: `Para que serve o AWS Health Dashboard?`, back: `Fornece informações sobre eventos que podem afetar serviços e recursos AWS utilizados pelo cliente.\n\n💡 Na prova: Health = problemas/eventos da AWS que podem afetar você.` },
    { id: 409, category: "Containers", essential: false, front: `O que é um container?`, back: `Unidade de software que empacota uma aplicação e suas dependências para facilitar execução consistente em diferentes ambientes.\n\n💡 Na prova: Container = aplicação + dependências.` },
    { id: 410, category: "Containers", essential: true, front: `O que é Amazon ECS?`, back: `Serviço de orquestração gerenciado para executar e gerenciar containers.\n\n💡 Na prova: ECS = containers.` },
    { id: 411, category: "Containers", essential: true, front: `O que é Amazon EKS?`, back: `Serviço gerenciado para executar Kubernetes na AWS.\n\n💡 Na prova: EKS = Kubernetes.` },
    { id: 412, category: "Containers", essential: false, front: `O que é Amazon ECR?`, back: `Registro gerenciado para armazenar, gerenciar e distribuir imagens de containers.\n\n💡 Na prova: ECR = imagens de containers.` },
    { id: 413, category: "Containers", essential: true, front: `O que é AWS Fargate?`, back: `Tecnologia serverless para executar containers sem que o cliente precise gerenciar os servidores subjacentes.\n\n💡 Na prova: Fargate = containers sem gerenciar servidores.` },
    { id: 414, category: "Containers", essential: true, front: `Qual a diferença entre ECS, EKS e Fargate?`, back: `ECS é um serviço de orquestração de containers; EKS fornece Kubernetes gerenciado; Fargate fornece execução serverless de containers.\n\n💡 Na prova: ECS/EKS = orquestração; Fargate = execução.` },
    { id: 415, category: "Containers", essential: false, front: `O que é Amazon Elastic Container Registry (ECR)?`, back: `Serviço de registro de imagens de containers para armazenar e distribuir imagens.\n\n💡 Na prova: ECR = container images.` },
    { id: 416, category: "Containers", essential: false, front: `O que é Kubernetes?`, back: `Plataforma de código aberto para orquestração e gerenciamento de containers.\n\n💡 Na prova: EKS = Kubernetes gerenciado pela AWS.` },
    { id: 417, category: "Containers", essential: false, front: `O que é serverless?`, back: `Modelo em que o provedor gerencia a infraestrutura necessária para executar o serviço, permitindo que o cliente se concentre mais no código ou aplicação.\n\n💡 Na prova: Serverless não significa ausência de servidores; significa que o cliente não os gerencia.` },
    { id: 418, category: "Serverless", essential: true, front: `O que é AWS Lambda?`, back: `Serviço de computação serverless que executa código em resposta a eventos sem que o cliente precise provisionar ou gerenciar servidores.\n\n💡 Na prova: Lambda = executar código sem gerenciar servidores.` },
    { id: 419, category: "Serverless", essential: false, front: `O que pode acionar uma função Lambda?`, back: `Eventos de serviços AWS ou aplicações, como alterações em S3, mensagens, APIs e outros eventos configurados.\n\n💡 Na prova: Lambda é orientado a eventos.` },
    { id: 420, category: "Serverless", essential: false, front: `Qual é uma vantagem do AWS Lambda?`, back: `Permite executar código sob demanda sem gerenciar servidores e pode escalar automaticamente conforme os eventos e a demanda.\n\n💡 Na prova: Serverless + escala automática.` },
    { id: 421, category: "Backup e Migração", essential: false, front: `O que é AWS Backup?`, back: `Serviço centralizado para automatizar e gerenciar backups de recursos AWS compatíveis.\n\n💡 Na prova: Backup = gerenciamento centralizado de backups.` },
    { id: 422, category: "Backup e Migração", essential: false, front: `O que é AWS DataSync?`, back: `Serviço para transferir e sincronizar dados entre ambientes de armazenamento, incluindo sistemas locais e serviços AWS.\n\n💡 Na prova: DataSync = transferência/sincronização.` },
    { id: 423, category: "Backup e Migração", essential: false, front: `O que é AWS Snowball?`, back: `Dispositivo físico usado para transferir grandes volumes de dados entre ambientes locais e a AWS.\n\n💡 Na prova: Muitos dados + conexão limitada = Snowball.` },
    { id: 424, category: "Backup e Migração", essential: false, front: `Qual a vantagem do Snowball?`, back: `Permite transferir grandes quantidades de dados fisicamente, reduzindo a dependência de uma conexão de internet para toda a transferência.\n\n💡 Na prova: Snowball = transferência física de grandes volumes.` },
    { id: 425, category: "Backup e Migração", essential: false, front: `O que é AWS Migration Hub?`, back: `Serviço que fornece uma visão centralizada do progresso das migrações de aplicações para a AWS.\n\n💡 Na prova: Migration Hub = acompanhar migrações.` },
    { id: 426, category: "Backup e Migração", essential: false, front: `O que é AWS Application Migration Service?`, back: `Serviço que ajuda a migrar servidores e aplicações existentes para a AWS com um processo automatizado e simplificado.\n\n💡 Na prova: Migração de servidores/aplicações existentes.` },
    { id: 427, category: "Backup e Migração", essential: false, front: `O que é AWS Transfer Family?`, back: `Conjunto de serviços gerenciados para transferir arquivos para o armazenamento AWS utilizando protocolos como SFTP, FTPS e FTP.\n\n💡 Na prova: Transfer Family = transferência de arquivos.` },
    { id: 428, category: "Backup e Migração", essential: false, front: `O que é AWS Launch Wizard?`, back: `Serviço que fornece orientação para configurar e implantar aplicações complexas na AWS.\n\n💡 Na prova: Launch Wizard = implantação guiada.` },
    { id: 429, category: "DevOps", essential: false, front: `O que é AWS CloudFormation?`, back: `Serviço de infraestrutura como código (IaC) que permite definir e provisionar recursos AWS por meio de templates.\n\n💡 Na prova: CloudFormation = IaC.` },
    { id: 430, category: "DevOps", essential: false, front: `O que é infraestrutura como código (IaC)?`, back: `Prática de definir e gerenciar infraestrutura por meio de arquivos de configuração ou código, permitindo automação e repetibilidade.\n\n💡 Na prova: Infraestrutura descrita em código.` },
    { id: 431, category: "DevOps", essential: false, front: `O que é AWS CodePipeline?`, back: `Serviço de CI/CD que automatiza etapas de construção, teste e implantação de aplicações.\n\n💡 Na prova: CodePipeline = pipeline CI/CD.` },
    { id: 432, category: "DevOps", essential: false, front: `O que é AWS CodeBuild?`, back: `Serviço de build gerenciado que compila código, executa testes e produz artefatos.\n\n💡 Na prova: CodeBuild = compilar/testar.` },
    { id: 433, category: "DevOps", essential: false, front: `O que é AWS CodeDeploy?`, back: `Serviço que automatiza a implicação de aplicações em recursos de computação.\n\n💡 Na prova: CodeDeploy = deploy.` },
    { id: 434, category: "DevOps", essential: false, front: `O que é AWS CodeArtifact?`, back: `Serviço de repositório gerenciado para armazenar e distribuir pacotes e dependências de software.\n\n💡 Na prova: CodeArtifact = pacotes/dependências.` },
    { id: 435, category: "DevOps", essential: false, front: `O que é AWS CodeCommit?`, back: `Serviço de controle de versão baseado em Git para armazenar código-fonte em repositórios privados AWS.\n\n💡 Na prova: CodeCommit = Git/repositório.` },
    { id: 436, category: "DevOps", essential: false, front: `Qual a diferença entre CodeBuild, CodeDeploy e CodePipeline?`, back: `CodeBuild compila/testa; CodeDeploy automatiza implantação; CodePipeline coordena o fluxo de CI/CD.\n\n💡 Na prova: Build = construir; Deploy = implantar; Pipeline = orquestrar.` },
    { id: 437, category: "DevOps", essential: false, front: `O que é CI/CD?`, back: `Conjunto de práticas que automatizam integração, testes e entrega ou implantação de software.\n\n💡 Na prova: CI = integração contínua; CD = entrega/implantação contínua.` },
    { id: 438, category: "Analytics e Streaming", essential: false, front: `O que é Amazon EMR?`, back: `Serviço gerenciado para executar frameworks de Big Data, como Apache Spark, em clusters AWS.\n\n💡 Na prova: EMR = Big Data.` },
    { id: 439, category: "Analytics e Streaming", essential: false, front: `O que é Amazon Kinesis?`, back: `Conjunto de serviços para coletar, processar e analisar dados de streaming em tempo real ou quase real.\n\n💡 Na prova: Kinesis = streaming.` },
    { id: 440, category: "Analytics e Streaming", essential: false, front: `Qual é a diferença entre dados em lote e streaming?`, back: `Processamento em lote trata conjuntos de dados de forma agrupada; streaming processa dados conforme são gerados ou recebidos.\n\n💡 Na prova: Kinesis = dados em streaming.` },
    { id: 441, category: "Analytics e Streaming", essential: false, front: `O que é Amazon OpenSearch Service?`, back: `Serviço gerenciado para pesquisa, análise e visualização de grandes volumes de dados.\n\n💡 Na prova: OpenSearch = busca/análise.` },
    { id: 442, category: "Analytics e Streaming", essential: false, front: `O que é Amazon Athena?`, back: `Serviço de consultas interativas que permite analisar dados armazenados no S3 usando SQL, sem necessidade de gerenciar servidores de banco de dados.\n\n💡 Na prova: Athena = SQL diretamente sobre dados no S3.` },
    { id: 443, category: "Analytics e Streaming", essential: false, front: `O que é AWS Glue?`, back: `Serviço de integração e preparação de dados que ajuda a descobrir, catalogar, transformar e movimentar dados para analytics.\n\n💡 Na prova: Glue = integração/preparação de dados.` },
    { id: 444, category: "Analytics e Streaming", essential: false, front: `O que é Amazon QuickSight?`, back: `Serviço de business intelligence para criar análises, visualizações e dashboards.\n\n💡 Na prova: QuickSight = BI/dashboards.` },
    { id: 445, category: "Mensageria", essential: false, front: `O que é Amazon SNS?`, back: `Serviço de mensageria baseado em publicação/assinatura que permite enviar mensagens para múltiplos assinantes ou endpoints.\n\n💡 Na prova: SNS = pub/sub e notificações.` },
    { id: 446, category: "Mensageria", essential: false, front: `O que é Amazon SQS?`, back: `Serviço de filas de mensagens que permite desacoplar componentes de aplicações.\n\n💡 Na prova: SQS = fila.` },
    { id: 447, category: "Mensageria", essential: false, front: `Qual a diferença entre SNS e SQS?`, back: `SNS é principalmente usado para publicação e distribuição de mensagens; SQS é usado para armazenar mensagens em uma fila para processamento.\n\n💡 Na prova: SNS = publicar/distribuir; SQS = fila.` },
    { id: 448, category: "Mensageria", essential: false, front: `O que significa desacoplamento de aplicações?`, back: `Separar componentes para que possam funcionar e evoluir de forma mais independente, reduzindo dependências diretas.\n\n💡 Na prova: Filas e mensagens ajudam no desacoplamento.` },
    { id: 449, category: "IA e Machine Learning", essential: false, front: `O que é Amazon SageMaker?`, back: `Serviço que fornece ferramentas para desenvolver, treinar, ajustar e implantar modelos de machine learning.\n\n💡 Na prova: SageMaker = Machine Learning.` },
    { id: 450, category: "IA e Machine Learning", essential: false, front: `O que é Amazon Bedrock?`, back: `Serviço que fornece acesso a modelos de base de IA generativa por meio de APIs, permitindo criar aplicações de IA generativa.\n\n💡 Na prova: Bedrock = modelos de IA generativa.` },
    { id: 451, category: "IA e Machine Learning", essential: false, front: `O que é Amazon Polly?`, back: `Serviço que converte texto em fala usando tecnologia de síntese de voz.\n\n💡 Na prova: Polly = texto → voz.` },
    { id: 452, category: "IA e Machine Learning", essential: false, front: `O que é Amazon Transcribe?`, back: `Serviço que converte fala em texto utilizando reconhecimento automático de voz.\n\n💡 Na prova: Transcribe = voz → texto.` },
    { id: 453, category: "IA e Machine Learning", essential: false, front: `O que é Amazon Textract?`, back: `Serviço que extrai texto, formulários e informações de documentos digitalizados.\n\n💡 Na prova: Textract = documentos → dados/texto.` },
    { id: 454, category: "IA e Machine Learning", essential: false, front: `O que é Amazon Rekognition?`, back: `Serviço de análise de imagens e vídeos que pode identificar objetos, pessoas, cenas e outros elementos.\n\n💡 Na prova: Rekognition = imagens/vídeos.` },
    { id: 455, category: "IA e Machine Learning", essential: false, front: `O que é Amazon Comprehend?`, back: `Serviço de processamento de linguagem natural que identifica informações e padrões em textos.\n\n💡 Na prova: Comprehend = entender/analisar texto.` },
    { id: 456, category: "IA e Machine Learning", essential: false, front: `O que é Amazon Translate?`, back: `Serviço de tradução automática de texto entre idiomas.\n\n💡 Na prova: Translate = tradução.` },
    { id: 457, category: "IA e Machine Learning", essential: false, front: `Qual a diferença entre Polly e Transcribe?`, back: `Polly converte texto em fala; Transcribe converte fala em texto.\n\n💡 Na prova: Polly = texto → voz; Transcribe = voz → texto.` },
    { id: 458, category: "IA e Machine Learning", essential: false, front: `Qual a diferença entre Textract e Rekognition?`, back: `Textract extrai informações de documentos; Rekognition analisa imagens e vídeos.\n\n💡 Na prova: Documento = Textract; imagem/vídeo = Rekognition.` },
    { id: 459, category: "IA e Machine Learning", essential: false, front: `Qual a diferença entre SageMaker e Bedrock?`, back: `SageMaker é uma plataforma para desenvolver e operar modelos de machine learning; Bedrock facilita o uso de modelos de base para aplicações de IA generativa.\n\n💡 Na prova: SageMaker = ML; Bedrock = IA generativa/modelos de base.` },
    { id: 460, category: "Custos e Billing", essential: true, front: `O que é AWS Pricing Calculator?`, back: `Ferramenta utilizada para estimar os custos de uma arquitetura ou conjunto de serviços AWS antes ou durante o planejamento.\n\n💡 Na prova: Pricing Calculator = estimar custos.` },
    { id: 461, category: "Custos e Billing", essential: true, front: `O que é AWS Cost Explorer?`, back: `Ferramenta que permite visualizar, analisar e compreender os custos e o uso dos serviços AWS ao longo do tempo.\n\n💡 Na prova: Cost Explorer = analisar gastos.` },
    { id: 462, category: "Custos e Billing", essential: true, front: `O que é AWS Budgets?`, back: `Serviço que permite definir orçamentos e configurar alertas quando custos ou uso atingem determinados limites.\n\n💡 Na prova: Budgets = orçamento + alertas.` },
    { id: 463, category: "Custos e Billing", essential: false, front: `Qual a diferença entre Pricing Calculator, Cost Explorer e Budgets?`, back: `Pricing Calculator estima custos; Cost Explorer analisa custos e uso; Budgets monitora limites de orçamento e envia alertas.\n\n💡 Na prova: Estimar = Calculator; analisar = Explorer; alertar = Budgets.` },
    { id: 464, category: "Custos e Billing", essential: false, front: `O que são Savings Plans?`, back: `Modelo de preços que oferece descontos em troca de um compromisso de uso de determinada quantidade de computação por hora durante um período.\n\n💡 Na prova: Compromisso de uso = possível desconto.` },
    { id: 465, category: "Custos e Billing", essential: false, front: `O que são AWS Reserved Instances?`, back: `Opção de preço para determinados serviços que envolve compromisso de utilização por um período e pode oferecer descontos.\n\n💡 Na prova: Uso previsível + compromisso.` },
    { id: 466, category: "Custos e Billing", essential: false, front: `O que são tags na AWS?`, back: `Pares de chave e valor associados a recursos para ajudar na organização, identificação, automação e alocação de custos.\n\n💡 Na prova: Tags = organização e controle.` },
    { id: 467, category: "Custos e Billing", essential: false, front: `O que é AWS Cost Allocation?`, back: `Processo de atribuir custos a equipes, projetos, aplicações ou ambientes, frequentemente utilizando tags ou outras estruturas de faturamento.\n\n💡 Na prova: Identificar quem/projeto gerou determinado custo.` },
    { id: 468, category: "Custos e Billing", essential: false, front: `O que é AWS Organizations?`, back: `Serviço que permite gerenciar centralmente várias contas AWS dentro de uma organização.\n\n💡 Na prova: Organizations = múltiplas contas.` },
    { id: 469, category: "Custos e Billing", essential: false, front: `O que é uma Service Control Policy (SCP)?`, back: `Política utilizada no AWS Organizations para definir os limites máximos de permissões disponíveis para contas ou unidades organizacionais.\n\n💡 Na prova: SCP limita permissões; não concede permissões por si só.` },
    { id: 470, category: "Custos e Billing", essential: false, front: `O que é AWS Control Tower?`, back: `Serviço que ajuda a configurar e governar um ambiente AWS com múltiplas contas seguindo boas práticas e controles.\n\n💡 Na prova: Control Tower = governança multi-account.` },
    { id: 471, category: "Well-Architected", essential: true, front: `Quantos pilares existem no AWS Well-Architected Framework?`, back: `Seis pilares: Excelência Operacional, Segurança, Confiabilidade, Eficiência de Performance, Otimização de Custos e Sustentabilidade.\n\n💡 Na prova: Memorize: ESCEOS.` },
    { id: 472, category: "Well-Architected", essential: true, front: `Qual é o pilar de Excelência Operacional?`, back: `Foca em executar e monitorar sistemas, melhorar processos continuamente e responder adequadamente a eventos.\n\n💡 Na prova: Operações, processos e melhoria contínua.` },
    { id: 473, category: "Well-Architected", essential: true, front: `Qual é o pilar de Segurança?`, back: `Foca em proteger informações, sistemas e recursos, incluindo controle de acesso, detecção e resposta a eventos de segurança.\n\n💡 Na prova: Proteção de dados e recursos.` },
    { id: 474, category: "Well-Architected", essential: true, front: `Qual é o pilar de Confiabilidade?`, back: `Foca na capacidade de uma carga de trabalho executar sua função corretamente e se recuperar de falhas.\n\n💡 Na prova: Confiabilidade = recuperação e funcionamento correto.` },
    { id: 475, category: "Well-Architected", essential: true, front: `Qual é o pilar de Eficiência de Performance?`, back: `Foca em utilizar recursos de computação de maneira eficiente para atender aos requisitos do sistema e acompanhar mudanças na demanda.\n\n💡 Na prova: Recursos adequados + performance eficiente.` },
    { id: 476, category: "Well-Architected", essential: true, front: `Qual é o pilar de Otimização de Custos?`, back: `Foca em evitar gastos desnecessários e utilizar recursos de forma eficiente, buscando valor de negócio pelo investimento realizado.\n\n💡 Na prova: Evitar desperdício.` },
    { id: 477, category: "Well-Architected", essential: true, front: `Qual é o pilar de Sustentabilidade?`, back: `Foca em reduzir impactos ambientais associados à execução das cargas de trabalho e utilizar recursos de forma mais eficiente.\n\n💡 Na prova: Impacto ambiental + eficiência.` },
    { id: 478, category: "Well-Architected", essential: false, front: `Qual pilar está relacionado a responder a eventos e melhorar processos operacionais?`, back: `Excelência Operacional.\n\n💡 Na prova: Operações = Excelência Operacional.` },
    { id: 479, category: "Well-Architected", essential: false, front: `Qual pilar está relacionado a proteção de dados e controle de acesso?`, back: `Segurança.\n\n💡 Na prova: Proteção = Segurança.` },
    { id: 480, category: "Well-Architected", essential: false, front: `Qual pilar está relacionado à recuperação de falhas?`, back: `Confiabilidade.\n\n💡 Na prova: Recuperação = Confiabilidade.` },
    { id: 481, category: "Well-Architected", essential: false, front: `Qual pilar está relacionado ao uso eficiente dos recursos computacionais?`, back: `Eficiência de Performance.\n\n💡 Na prova: Performance = eficiência dos recursos.` },
    { id: 482, category: "Well-Architected", essential: false, front: `Qual pilar está relacionado à redução de gastos desnecessários?`, back: `Otimização de Custos.\n\n💡 Na prova: Custo = eliminar desperdícios.` },
    { id: 483, category: "Well-Architected", essential: false, front: `Qual pilar está relacionado à redução do impacto ambiental?`, back: `Sustentabilidade.\n\n💡 Na prova: Ambiental = Sustentabilidade.` },
    { id: 484, category: "Resp. Compartilhada", essential: true, front: `Pelo que a AWS é responsável no modelo compartilhado?`, back: `A AWS é responsável pela segurança da infraestrutura que executa os serviços AWS, incluindo componentes físicos, rede e instalações.\n\n💡 Na prova: Segurança da nuvem.` },
    { id: 485, category: "Resp. Compartilhada", essential: true, front: `Pelo que o cliente é responsável no modelo compartilhado?`, back: `O cliente é responsável pela segurança dentro da nuvem, incluindo configurações, dados, identidades e componentes que controla conforme o serviço utilizado.\n\n💡 Na prova: Segurança na nuvem.` },
    { id: 486, category: "Resp. Compartilhada", essential: false, front: `O modelo de responsabilidade do cliente é igual em todos os serviços?`, back: `Não. A responsabilidade do cliente varia conforme o serviço. Quanto mais gerenciado o serviço, mais responsabilidades de infraestrutura são assumidas pela AWS.\n\n💡 Na prova: Responsabilidade varia conforme o serviço.` },
    { id: 487, category: "Resp. Compartilhada", essential: false, front: `Quem é responsável pelo hardware físico dos datacenters AWS?`, back: `A AWS é responsável pela infraestrutura física subjacente.\n\n💡 Na prova: Hardware físico = AWS.` },
    { id: 488, category: "Organização e Contas", essential: false, front: `O que é AWS Organizations?`, back: `Serviço para gerenciar centralmente várias contas AWS, permitindo aplicar políticas e estruturas organizacionais.\n\n💡 Na prova: Multi-account = Organizations.` },
    { id: 489, category: "Organização e Contas", essential: false, front: `O que é AWS Resource Access Manager (RAM)?`, back: `Serviço que permite compartilhar determinados recursos AWS entre contas, dentro de uma organização ou conforme as permissões disponíveis.\n\n💡 Na prova: RAM = compartilhar recursos.` },
    { id: 490, category: "Organização e Contas", essential: false, front: `Qual a diferença entre Organizations e RAM?`, back: `Organizations gerencia e organiza múltiplas contas; RAM permite compartilhar recursos compatíveis entre contas.\n\n💡 Na prova: Organizations = contas; RAM = recursos.` },
    { id: 491, category: "Associação de Serviços", essential: false, front: `Uma empresa precisa de máquinas virtuais para hospedar uma aplicação. Qual serviço?`, back: `Amazon EC2.\n\n💡 Na prova: Máquina virtual = EC2.` },
    { id: 492, category: "Associação de Serviços", essential: false, front: `Uma aplicação precisa armazenar arquivos como imagens e vídeos. Qual serviço?`, back: `Amazon S3.\n\n💡 Na prova: Arquivos/objetos = S3.` },
    { id: 493, category: "Associação de Serviços", essential: false, front: `Uma aplicação precisa de um banco relacional gerenciado. Qual serviço?`, back: `Amazon RDS.\n\n💡 Na prova: Relacional = RDS.` },
    { id: 494, category: "Associação de Serviços", essential: false, front: `Uma aplicação precisa de banco NoSQL altamente escalável. Qual serviço?`, back: `Amazon DynamoDB.\n\n💡 Na prova: NoSQL = DynamoDB.` },
    { id: 495, category: "Associação de Serviços", essential: false, front: `Uma empresa precisa de DNS gerenciado. Qual serviço?`, back: `Amazon Route 53.\n\n💡 Na prova: DNS = Route 53.` },
    { id: 496, category: "Associação de Serviços", essential: false, front: `Uma empresa precisa distribuir conteúdo globalmente com baixa latência. Qual serviço?`, back: `Amazon CloudFront.\n\n💡 Na prova: CDN = CloudFront.` },
    { id: 497, category: "Associação de Serviços", essential: false, front: `Uma empresa precisa monitorar métricas e logs. Qual serviço?`, back: `Amazon CloudWatch.\n\n💡 Na prova: Monitoramento = CloudWatch.` },
    { id: 498, category: "Associação de Serviços", essential: false, front: `Uma empresa precisa saber quem realizou determinada chamada de API. Qual serviço?`, back: `AWS CloudTrail.\n\n💡 Na prova: Auditoria/API = CloudTrail.` },
    { id: 499, category: "Associação de Serviços", essential: false, front: `Uma empresa precisa acompanhar alterações na configuração de recursos. Qual serviço?`, back: `AWS Config.\n\n💡 Na prova: Configuração = Config.` },
    { id: 500, category: "Associação de Serviços", essential: false, front: `Uma aplicação web precisa de proteção contra determinados ataques HTTP/HTTPS. Qual serviço?`, back: `AWS WAF.\n\n💡 Na prova: Web Application Firewall = WAF.` },
    { id: 501, category: "Associação de Serviços", essential: false, front: `Uma empresa precisa de proteção contra DDoS. Qual serviço?`, back: `AWS Shield.\n\n💡 Na prova: DDoS = Shield.` },
    { id: 502, category: "Associação de Serviços", essential: false, front: `Uma aplicação precisa executar código sem administrar servidores. Qual serviço?`, back: `AWS Lambda.\n\n💡 Na prova: Código serverless = Lambda.` },
    { id: 503, category: "Associação de Serviços", essential: false, front: `Uma empresa precisa executar containers sem gerenciar servidores. Qual tecnologia?`, back: `AWS Fargate.\n\n💡 Na prova: Containers sem servidor = Fargate.` },
    { id: 504, category: "Associação de Serviços", essential: false, front: `Uma empresa precisa executar Kubernetes gerenciado. Qual serviço?`, back: `Amazon EKS.\n\n💡 Na prova: Kubernetes = EKS.` },
    { id: 505, category: "Associação de Serviços", essential: false, front: `Uma empresa precisa armazenar imagens de containers. Qual serviço?`, back: `Amazon ECR.\n\n💡 Na prova: Container image = ECR.` },
    { id: 506, category: "Associação de Serviços", essential: false, front: `Uma empresa precisa analisar grandes volumes de dados em um data warehouse. Qual serviço?`, back: `Amazon Redshift.\n\n💡 Na prova: Data warehouse = Redshift.` },
    { id: 507, category: "Associação de Serviços", essential: false, front: `Uma empresa precisa processar dados de streaming. Qual serviço?`, back: `Amazon Kinesis.\n\n💡 Na prova: Streaming = Kinesis.` },
    { id: 508, category: "Associação de Serviços", essential: false, front: `Uma empresa precisa desenvolver e treinar modelos de machine learning. Qual serviço?`, back: `Amazon SageMaker.\n\n💡 Na prova: Machine Learning = SageMaker.` },
    { id: 509, category: "Associação de Serviços", essential: false, front: `Uma aplicação precisa converter texto em voz. Qual serviço?`, back: `Amazon Polly.\n\n💡 Na prova: Texto → voz = Polly.` },
    { id: 510, category: "Associação de Serviços", essential: false, front: `Uma aplicação precisa converter fala em texto. Qual serviço?`, back: `Amazon Transcribe.\n\n💡 Na prova: Voz → texto = Transcribe.` },
    { id: 511, category: "Associação de Serviços", essential: false, front: `Uma empresa precisa extrair informações de documentos digitalizados. Qual serviço?`, back: `Amazon Textract.\n\n💡 Na prova: Documento = Textract.` },
    { id: 512, category: "Associação de Serviços", essential: false, front: `Uma aplicação precisa analisar imagens e vídeos. Qual serviço?`, back: `Amazon Rekognition.\n\n💡 Na prova: Imagem/vídeo = Rekognition.` },
    { id: 513, category: "Associação de Serviços", essential: false, front: `Uma empresa precisa consultar dados armazenados no S3 usando SQL. Qual serviço?`, back: `Amazon Athena.\n\n💡 Na prova: SQL + S3 = Athena.` },
    { id: 514, category: "Associação de Serviços", essential: false, front: `Uma empresa precisa criar dashboards e visualizações de dados. Qual serviço?`, back: `Amazon QuickSight.\n\n💡 Na prova: BI/dashboard = QuickSight.` },
    { id: 515, category: "Associação de Serviços", essential: false, front: `Uma empresa precisa enviar notificações para vários assinantes. Qual serviço?`, back: `Amazon SNS.\n\n💡 Na prova: Pub/sub = SNS.` },
    { id: 516, category: "Associação de Serviços", essential: false, front: `Uma aplicação precisa de uma fila para desacoplar componentes. Qual serviço?`, back: `Amazon SQS.\n\n💡 Na prova: Fila = SQS.` },
    { id: 517, category: "Associação de Serviços", essential: false, front: `Uma empresa precisa estimar o custo de uma arquitetura antes de implantá-la. Qual ferramenta?`, back: `AWS Pricing Calculator.\n\n💡 Na prova: Estimar = Pricing Calculator.` },
    { id: 518, category: "Associação de Serviços", essential: false, front: `Uma empresa quer analisar os gastos AWS ao longo do tempo. Qual ferramenta?`, back: `AWS Cost Explorer.\n\n💡 Na prova: Analisar gastos = Cost Explorer.` },
    { id: 519, category: "Associação de Serviços", essential: false, front: `Uma empresa quer receber alerta quando ultrapassar determinado orçamento. Qual serviço?`, back: `AWS Budgets.\n\n💡 Na prova: Limite/orçamento = Budgets.` },
    { id: 520, category: "Associação de Serviços", essential: false, front: `Uma empresa precisa transferir fisicamente grandes volumes de dados para a AWS. Qual solução?`, back: `AWS Snowball.\n\n💡 Na prova: Grandes volumes + transferência física = Snowball.` },
    { id: 521, category: "Associação de Serviços", essential: false, front: `Uma empresa precisa automatizar a criação de infraestrutura AWS usando templates. Qual serviço?`, back: `AWS CloudFormation.\n\n💡 Na prova: IaC = CloudFormation.` },
    { id: 522, category: "Associação de Serviços", essential: false, front: `Uma empresa precisa centralizar o gerenciamento de várias contas AWS. Qual serviço?`, back: `AWS Organizations.\n\n💡 Na prova: Múltiplas contas = Organizations.` },
    { id: 523, category: "Comparações", essential: false, front: `EC2 ou Lambda: quando usar cada um?`, back: `EC2 quando é necessário maior controle sobre servidor e sistema operacional; Lambda quando o código pode ser executado de forma serverless e orientada a eventos.\n\n💡 Na prova: Controle de servidor = EC2; serverless = Lambda.` },
    { id: 524, category: "Comparações", essential: false, front: `S3 ou EBS: quando usar cada um?`, back: `S3 para objetos e arquivos armazenados como objetos; EBS para volumes de bloco associados principalmente a EC2.\n\n💡 Na prova: Objeto = S3; bloco = EBS.` },
    { id: 525, category: "Comparações", essential: false, front: `EBS ou EFS: quando usar cada um?`, back: `EBS para armazenamento de blocos; EFS para sistema de arquivos compartilhado.\n\n💡 Na prova: Bloco = EBS; arquivo compartilhado = EFS.` },
    { id: 526, category: "Comparações", essential: false, front: `RDS ou DynamoDB: quando usar cada um?`, back: `RDS para bancos relacionais; DynamoDB para workloads NoSQL.\n\n💡 Na prova: SQL/relacional = RDS; NoSQL = DynamoDB.` },
    { id: 527, category: "Comparações", essential: false, front: `CloudWatch ou CloudTrail?`, back: `CloudWatch monitora métricas, logs e recursos; CloudTrail registra atividades e chamadas de API.\n\n💡 Na prova: Monitoramento = Watch; auditoria = Trail.` },
    { id: 528, category: "Comparações", essential: false, front: `WAF ou Shield?`, back: `WAF protege aplicações web contra determinados padrões de tráfego malicioso; Shield protege contra ataques DDoS.\n\n💡 Na prova: Web = WAF; DDoS = Shield.` },
    { id: 529, category: "Comparações", essential: false, front: `SNS ou SQS?`, back: `SNS distribui mensagens usando publicação/assinatura; SQS armazena mensagens em filas para processamento.\n\n💡 Na prova: Publicar = SNS; fila = SQS.` },
    { id: 530, category: "Comparações", essential: false, front: `Multi-AZ ou Read Replica?`, back: `Multi-AZ prioriza alta disponibilidade e failover; Read Replica é usada principalmente para escalar leituras.\n\n💡 Na prova: Disponibilidade = Multi-AZ; leitura = Replica.` },
    { id: 531, category: "Comparações", essential: false, front: `Security Group ou NACL?`, back: `Security Group é firewall stateful no nível do recurso; NACL é firewall stateless no nível da subnet.\n\n💡 Na prova: Recurso/stateful = SG; subnet/stateless = NACL.` },
    { id: 532, category: "Comparações", essential: false, front: `GuardDuty ou Detective?`, back: `GuardDuty identifica possíveis ameaças; Detective ajuda na investigação e análise de atividades relacionadas.\n\n💡 Na prova: Detectar = GuardDuty; investigar = Detective.` },
    { id: 533, category: "Comparações", essential: false, front: `Cost Explorer ou Budgets?`, back: `Cost Explorer analisa custos e uso; Budgets monitora limites e envia alertas.\n\n💡 Na prova: Análise = Explorer; alerta = Budgets.` },
    { id: 534, category: "Comparações", essential: false, front: `SageMaker ou Bedrock?`, back: `SageMaker é voltado ao desenvolvimento e operação de modelos de machine learning; Bedrock fornece acesso a modelos de base para aplicações de IA generativa.\n\n💡 Na prova: ML = SageMaker; IA generativa = Bedrock.` },
    { id: 535, category: "Comparações", essential: false, front: `Polly ou Transcribe?`, back: `Polly converte texto em fala; Transcribe converte fala em texto.\n\n💡 Na prova: Texto → voz = Polly; voz → texto = Transcribe.` },
    { id: 536, category: "Comparações", essential: false, front: `ECS ou EKS?`, back: `ECS é o serviço de orquestração de containers da AWS; EKS é o serviço gerenciado de Kubernetes.\n\n💡 Na prova: Kubernetes = EKS.` },
    { id: 537, category: "Comparações", essential: false, front: `ECR ou ECS?`, back: `ECR armazena imagens de containers; ECS executa e gerencia containers.\n\n💡 Na prova: Imagem = ECR; execução/orquestração = ECS.` },
    { id: 538, category: "Comparações", essential: false, front: `CloudFormation ou CodePipeline?`, back: `CloudFormation cria e gerencia infraestrutura como código; CodePipeline automatiza fluxos de CI/CD.\n\n💡 Na prova: Infraestrutura = CloudFormation; pipeline = CodePipeline.` },
    { id: 539, category: "Comparações", essential: false, front: `DataSync ou Snowball?`, back: `DataSync realiza transferência/sincronização de dados pela rede; Snowball utiliza dispositivos físicos para grandes transferências.\n\n💡 Na prova: Rede = DataSync; físico = Snowball.` },
    { id: 540, category: "Comparações", essential: false, front: `Route 53 ou CloudFront?`, back: `Route 53 é serviço de DNS; CloudFront é uma CDN para distribuição de conteúdo.\n\n💡 Na prova: DNS = Route 53; CDN = CloudFront.` },
    { id: 541, category: "Modelos de Nuvem", essential: false, front: `O que caracteriza IaaS?`, back: `O provedor fornece infraestrutura fundamental, como computação, armazenamento e rede, enquanto o cliente gerencia mais componentes.\n\n💡 Na prova: IaaS = maior controle.` },
    { id: 542, category: "Modelos de Nuvem", essential: false, front: `O que caracteriza PaaS?`, back: `O provedor gerencia infraestrutura e plataforma, permitindo que o cliente se concentre principalmente na aplicação.\n\n💡 Na prova: PaaS = menos gerenciamento de infraestrutura.` },
    { id: 543, category: "Modelos de Nuvem", essential: false, front: `O que caracteriza SaaS?`, back: `O provedor entrega uma aplicação completa como serviço, enquanto o usuário utiliza o software sem administrar sua infraestrutura subjacente.\n\n💡 Na prova: SaaS = software pronto.` },
    { id: 544, category: "Modelos de Nuvem", essential: false, front: `Qual modelo oferece maior controle sobre a infraestrutura: IaaS, PaaS ou SaaS?`, back: `IaaS normalmente oferece mais controle ao cliente do que PaaS e SaaS.\n\n💡 Na prova: Quanto mais gerenciado, menor o controle direto da infraestrutura.` },
    { id: 545, category: "Modelos de Nuvem", essential: false, front: `EC2 está associado principalmente a qual modelo de serviço?`, back: `IaaS, pois fornece capacidade computacional e permite ao cliente administrar componentes como sistema operacional e aplicações.\n\n💡 Na prova: EC2 = IaaS.` },
    { id: 546, category: "Arquitetura", essential: false, front: `O que é desacoplamento?`, back: `É a separação de componentes para reduzir dependências diretas e permitir que partes do sistema evoluam ou falhem de maneira mais independente.\n\n💡 Na prova: SQS e SNS são exemplos de serviços que ajudam no desacoplamento.` },
    { id: 547, category: "Arquitetura", essential: false, front: `O que é arquitetura distribuída?`, back: `Arquitetura em que componentes de uma aplicação são executados em diferentes recursos ou locais e trabalham em conjunto.\n\n💡 Na prova: Distribuição pode aumentar escalabilidade e resiliência.` },
    { id: 548, category: "Arquitetura", essential: false, front: `Por que distribuir uma aplicação em múltiplas AZs?`, back: `Para reduzir o impacto de uma falha isolada e aumentar a disponibilidade da aplicação.\n\n💡 Na prova: Multi-AZ = resiliência.` },
    { id: 549, category: "Arquitetura", essential: false, front: `O que é escalabilidade horizontal?`, back: `É aumentar a capacidade adicionando mais instâncias ou recursos semelhantes.\n\n💡 Na prova: Horizontal = adicionar máquinas/instâncias.` },
    { id: 550, category: "Arquitetura", essential: false, front: `O que é escalabilidade vertical?`, back: `É aumentar a capacidade de um recurso existente, como adicionar CPU ou memória a uma instância.\n\n💡 Na prova: Vertical = recurso maior.` },
    { id: 551, category: "Arquitetura", essential: false, front: `O que é uma arquitetura altamente disponível?`, back: `Arquitetura projetada para minimizar indisponibilidade por meio de redundância, distribuição e mecanismos de recuperação.\n\n💡 Na prova: Redundância + múltiplas AZs ajudam na disponibilidade.` },
    { id: 552, category: "Arquitetura", essential: false, front: `O que é disaster recovery?`, back: `Conjunto de estratégias e processos utilizados para recuperar sistemas e dados após eventos que causem interrupções significativas.\n\n💡 Na prova: DR = recuperação após desastre.` },
    { id: 553, category: "Arquitetura", essential: false, front: `O que é backup?`, back: `Cópia de dados mantida para permitir recuperação em caso de perda, corrupção ou exclusão.\n\n💡 Na prova: Backup = cópia para recuperação.` },
    { id: 554, category: "Arquitetura", essential: false, front: `Qual é a diferença entre backup e alta disponibilidade?`, back: `Backup permite recuperar dados; alta disponibilidade busca manter o serviço funcionando durante falhas.\n\n💡 Na prova: Backup = recuperar; HA = continuar disponível.` },
    { id: 555, category: "Otimização de Custos", essential: false, front: `Como a AWS pode ajudar a reduzir custos?`, back: `Por meio de pagamento conforme o uso, elasticidade, economia de escala, escolha adequada de recursos e modelos de preço.\n\n💡 Na prova: Evitar capacidade ociosa é importante.` },
    { id: 556, category: "Otimização de Custos", essential: false, front: `O que é rightsizing?`, back: `Ajustar o tamanho e o tipo dos recursos para que correspondam às necessidades reais da carga de trabalho, evitando excesso de capacidade.\n\n💡 Na prova: Rightsizing = recurso adequado.` },
    { id: 557, category: "Otimização de Custos", essential: false, front: `Por que desligar recursos não utilizados pode reduzir custos?`, back: `Porque muitos recursos geram custos enquanto estão provisionados ou em uso; eliminar capacidade desnecessária reduz gastos.\n\n💡 Na prova: Capacidade ociosa = desperdício.` },
    { id: 558, category: "Otimização de Custos", essential: false, front: `Qual ferramenta ajuda a encontrar oportunidades de economia?`, back: `AWS Cost Explorer ajuda a analisar gastos e padrões de uso; recomendações específicas também podem ser fornecidas por ferramentas como AWS Cost Optimization Hub.\n\n💡 Na prova: Cost Explorer = entender os gastos.` },
    { id: 559, category: "Otimização de Custos", essential: false, front: `Quando Spot Instances podem ajudar a reduzir custos?`, back: `Quando a carga de trabalho tolera interrupções e pode utilizar capacidade EC2 com desconto.\n\n💡 Na prova: Spot = workloads flexíveis/tolerantes a falhas.` },
    { id: 560, category: "Otimização de Custos", essential: false, front: `Por que escolher Storage Classes adequadas pode reduzir custos no S3?`, back: `Porque diferentes classes são projetadas para diferentes padrões de acesso e custos, permitindo adequar armazenamento ao uso real dos dados.\n\n💡 Na prova: Escolha a classe conforme frequência de acesso.` },
    { id: 561, category: "Sustentabilidade", essential: false, front: `O que significa sustentabilidade no AWS Well-Architected Framework?`, back: `É considerar e reduzir os impactos ambientais associados às cargas de trabalho, utilizando recursos de forma mais eficiente.\n\n💡 Na prova: Sustentabilidade = eficiência + menor impacto ambiental.` },
    { id: 562, category: "Sustentabilidade", essential: false, front: `Como a elasticidade pode contribuir para sustentabilidade?`, back: `Ajustando recursos à demanda, pode-se evitar manter capacidade ociosa e utilizar infraestrutura de forma mais eficiente.\n\n💡 Na prova: Menos desperdício de recursos.` },
    { id: 563, category: "Sustentabilidade", essential: false, front: `Qual pilar do Well-Architected trata do impacto ambiental?`, back: `Sustentabilidade.\n\n💡 Na prova: Ambiental = Sustentabilidade.` },
    { id: 564, category: "Ferramentas Adicionais", essential: false, front: `O que é AWS Trusted Advisor?`, back: `Serviço que fornece recomendações relacionadas a categorias como otimização de custos, desempenho, segurança, tolerância a falhas e limites de serviço.\n\n💡 Na prova: Trusted Advisor = recomendações de boas práticas.` },
    { id: 565, category: "Ferramentas Adicionais", essential: false, front: `O que é AWS Service Catalog?`, back: `Serviço que permite organizar e disponibilizar produtos de TI aprovados para uso pelas equipes de uma organização.\n\n💡 Na prova: Catálogo de recursos/aplicações aprovados.` },
    { id: 566, category: "Ferramentas Adicionais", essential: false, front: `O que é AWS Support?`, back: `Conjunto de planos de suporte que oferecem diferentes níveis de orientação técnica, assistência e recursos para clientes AWS.\n\n💡 Na prova: Níveis de suporte variam conforme o plano.` },
    { id: 567, category: "Ferramentas Adicionais", essential: false, front: `O que é AWS Marketplace?`, back: `Catálogo digital em que clientes podem encontrar, comprar e implantar soluções de software e serviços de terceiros para uso na AWS.\n\n💡 Na prova: Marketplace = soluções de terceiros.` },
    { id: 568, category: "Ferramentas Adicionais", essential: false, front: `O que é AWS Artifact?`, back: `Serviço que fornece acesso sob demanda a documentos relacionados a compliance e acordos da AWS.\n\n💡 Na prova: Artifact = documentos de compliance.` },
    { id: 569, category: "Ferramentas Adicionais", essential: false, front: `O que é AWS Audit Manager?`, back: `Serviço que ajuda a coletar evidências e avaliar continuamente a conformidade com requisitos e frameworks de auditoria.\n\n💡 Na prova: Audit Manager = evidências/compliance.` },
    { id: 570, category: "Ferramentas Adicionais", essential: false, front: `O que é AWS Well-Architected Tool?`, back: `Ferramenta que ajuda a revisar workloads usando as boas práticas do AWS Well-Architected Framework.\n\n💡 Na prova: Well-Architected Tool = revisão da arquitetura.` },
    { id: 571, category: "Revisão Rápida", essential: false, front: `EC2 → ?`, back: `Computação/servidores virtuais.\n\n💡 Na prova: EC2 = servidor.` },
    { id: 572, category: "Revisão Rápida", essential: false, front: `S3 → ?`, back: `Armazenamento de objetos.\n\n💡 Na prova: S3 = objeto.` },
    { id: 573, category: "Revisão Rápida", essential: false, front: `EBS → ?`, back: `Armazenamento de blocos para EC2.\n\n💡 Na prova: EBS = disco/volume.` },
    { id: 574, category: "Revisão Rápida", essential: false, front: `EFS → ?`, back: `Sistema de arquivos compartilhado.\n\n💡 Na prova: EFS = arquivos.` },
    { id: 575, category: "Revisão Rápida", essential: false, front: `RDS → ?`, back: `Banco de dados relacional gerenciado.\n\n💡 Na prova: RDS = SQL/relacional.` },
    { id: 576, category: "Revisão Rápida", essential: false, front: `DynamoDB → ?`, back: `Banco de dados NoSQL.\n\n💡 Na prova: DynamoDB = NoSQL.` },
    { id: 577, category: "Revisão Rápida", essential: false, front: `VPC → ?`, back: `Rede virtual.\n\n💡 Na prova: VPC = networking.` },
    { id: 578, category: "Revisão Rápida", essential: false, front: `IAM → ?`, back: `Identidade e permissões.\n\n💡 Na prova: IAM = acesso.` },
    { id: 579, category: "Revisão Rápida", essential: false, front: `CloudWatch → ?`, back: `Monitoramento, métricas e logs.\n\n💡 Na prova: Watch = monitorar.` },
    { id: 580, category: "Revisão Rápida", essential: false, front: `CloudTrail → ?`, back: `Auditoria e registro de chamadas de API/atividades.\n\n💡 Na prova: Trail = rastrear atividades.` },
];

// ================= VARIÁVEIS DE ESTADO =================
let flashcards = [...originalFlashcards]; // Array ativo (pode estar filtrado)
let currentIndex = 0;
let currentFilter = 'all';

// Recupera os IDs dos cards marcados como difíceis no localStorage
let difficultCards = JSON.parse(localStorage.getItem('aws_difficult_cards')) || [];

// ================= ELEMENTOS DO DOM =================
const elements = {
    cardContainer: document.getElementById('card-container'),
    flashcard: document.getElementById('flashcard'),
    cardFront: document.getElementById('card-front'),
    cardBack: document.getElementById('card-back'),
    counter: document.getElementById('counter'),
    diffCount: document.getElementById('diff-count'),
    categoryDisplay: document.getElementById('category-display'),
    
    btnPrev: document.getElementById('prev-btn'),
    btnNext: document.getElementById('next-btn'),
    btnShuffle: document.getElementById('shuffle-btn'),
    btnDiff: document.getElementById('diff-btn'),

    btnFilterAll: document.getElementById('filter-all'),
    btnFilterEssential: document.getElementById('filter-essential')
};

// ================= FUNÇÕES PRINCIPAIS =================

/**
 * Inicializa a aplicação
 */
function init() {
    updateUI();
    setupEventListeners();
}

/**
 * Aplica o filtro de Essenciais ou Todos
 */
function applyFilter(filterType) {
    currentFilter = filterType;
    
    if (filterType === 'essential') {
        flashcards = originalFlashcards.filter(c => c.essential === true);
        elements.btnFilterEssential.classList.add('active');
        elements.btnFilterAll.classList.remove('active');
    } else {
        flashcards = [...originalFlashcards];
        elements.btnFilterAll.classList.add('active');
        elements.btnFilterEssential.classList.remove('active');
    }
    
    currentIndex = 0;
    updateUI();
}

/**
 * Atualiza toda a Interface do Usuário com base no índice atual
 */
function updateUI() {
    if (flashcards.length === 0) {
        elements.cardFront.textContent = "Nenhum card encontrado neste filtro.";
        elements.cardBack.textContent = "";
        elements.counter.textContent = "0 de 0";
        elements.categoryDisplay.textContent = "—";
        return;
    }

    const currentCard = flashcards[currentIndex];
    
    // Atualiza textos de forma segura usando textContent
    elements.cardFront.textContent = currentCard.front;
    elements.cardBack.textContent = currentCard.back;
    elements.categoryDisplay.textContent = currentCard.category;
    
    // Atualiza o contador de forma dinâmica
    elements.counter.textContent = `Card ${currentIndex + 1} de ${flashcards.length} ${currentFilter === 'essential' ? '(Essenciais)' : ''}`;
    elements.diffCount.textContent = difficultCards.length;
    
    // Verifica se o ID do card atual está na lista de difíceis
    if (difficultCards.includes(currentCard.id)) {
        elements.btnDiff.classList.add('difficult-active');
        elements.btnDiff.innerHTML = `<span class="icon">⭐</span> Difícil`;
    } else {
        elements.btnDiff.classList.remove('difficult-active');
        elements.btnDiff.innerHTML = `<span class="icon">☆</span> Marcar Difícil`;
    }

    // Garante que o card seja mostrado de frente ao mudar de questão
    elements.flashcard.classList.remove('flipped');
}

/**
 * Vira o card alternando a classe CSS
 */
function toggleFlip() {
    elements.flashcard.classList.toggle('flipped');
}

/**
 * Avança para o próximo card (com loop infinito)
 */
function nextCard() {
    if (flashcards.length === 0) return;
    if (currentIndex < flashcards.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateUI();
}

/**
 * Volta para o card anterior (com loop infinito)
 */
function prevCard() {
    if (flashcards.length === 0) return;
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = flashcards.length - 1;
    }
    updateUI();
}

/**
 * Embaralha o array de cards ativo usando o algoritmo Fisher-Yates
 */
function shuffleCards() {
    if (flashcards.length === 0) return;

    elements.btnShuffle.classList.add('spin-anim');
    setTimeout(() => elements.btnShuffle.classList.remove('spin-anim'), 500);

    for (let i = flashcards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [flashcards[i], flashcards[j]] = [flashcards[j], flashcards[i]];
    }
    
    currentIndex = 0;
    updateUI();
}

/**
 * Marca ou desmarca um card como difícil, salvando apenas o ID no LocalStorage
 */
function toggleDifficult() {
    if (flashcards.length === 0) return;

    const currentCardId = flashcards[currentIndex].id;
    
    if (difficultCards.includes(currentCardId)) {
        // Se já for difícil, remove o ID do array
        difficultCards = difficultCards.filter(id => id !== currentCardId);
    } else {
        // Se não for difícil, adiciona o ID
        difficultCards.push(currentCardId);
    }
    
    // Salva o array de IDs atualizado
    localStorage.setItem('aws_difficult_cards', JSON.stringify(difficultCards));
    
    updateUI();
}

// ================= LISTENERS DE EVENTOS =================
function setupEventListeners() {
    // Cliques de mouse gerais
    elements.cardContainer.addEventListener('click', toggleFlip);
    elements.btnNext.addEventListener('click', nextCard);
    elements.btnPrev.addEventListener('click', prevCard);
    elements.btnShuffle.addEventListener('click', shuffleCards);
    elements.btnDiff.addEventListener('click', toggleDifficult);

    // Filtros
    elements.btnFilterAll.addEventListener('click', () => applyFilter('all'));
    elements.btnFilterEssential.addEventListener('click', () => applyFilter('essential'));

    // Navegação por teclado
    document.addEventListener('keydown', (e) => {
        if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'BUTTON') return;

        switch(e.key) {
            case 'ArrowRight':
                nextCard();
                break;
            case 'ArrowLeft':
                prevCard();
                break;
            case ' ':
                e.preventDefault(); // Evita rolar a página
                toggleFlip();
                break;
        }
    });
}

// Inicia a aplicação
init();