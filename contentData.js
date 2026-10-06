// contentData.js
const studyContent = [
    {
        id: "cloud-concepts",
        title: "☁️ Conceitos de Nuvem",
        html: `
            <h2>Modelos de Computação em Nuvem</h2>
            <p>A computação em nuvem oferece diferentes níveis de controle, flexibilidade e gerenciamento.</p>
            <ul>
                <li><strong>IaaS (Infrastructure as a Service):</strong> Maior controle. A AWS fornece a infraestrutura básica (rede, computadores). Ex: <em>Amazon EC2</em>.</li>
                <li><strong>PaaS (Platform as a Service):</strong> Menos gerenciamento. Você foca na sua aplicação e a AWS cuida do SO e manutenção. Ex: <em>Elastic Beanstalk</em>.</li>
                <li><strong>SaaS (Software as a Service):</strong> Produto final completo gerenciado pelo provedor. Ex: <em>Amazon WorkMail</em>.</li>
            </ul>

            <h3>Modelos de Implantação</h3>
            <ul>
                <li><strong>Nuvem (Cloud):</strong> Totalmente implantado na AWS.</li>
                <li><strong>On-premises (Local):</strong> Nuvem privada usando virtualização no próprio datacenter.</li>
                <li><strong>Híbrido:</strong> Mistura recursos on-premises com nuvem pública (AWS).</li>
            </ul>
        `
    },
    {
        id: "compute",
        title: "🖥️ Computação (EC2 & cia)",
        html: `
            <h2>Amazon EC2 (Elastic Compute Cloud)</h2>
            <p>Fornece capacidade de computação redimensionável (servidores virtuais chamados instâncias).</p>
            
            <h3>Modelos de Preços do EC2:</h3>
            <ul>
                <li><strong>Sob Demanda (On-Demand):</strong> Paga pelo que usa (por segundo), sem compromisso. Ideal para picos curtos.</li>
                <li><strong>Instâncias Reservadas (Reserved):</strong> Compromisso de 1 ou 3 anos. Ótimo desconto para cargas previsíveis.</li>
                <li><strong>Instâncias Spot:</strong> Usa a capacidade ociosa da AWS. Desconto de até 90%, mas a máquina pode ser interrompida. Ideal para processamento em lote flexível.</li>
                <li><strong>Hosts Dedicados (Dedicated Hosts):</strong> Servidor físico inteiro para você. Usado para licenças de software restritas (BYOL) ou altíssimo nível de compliance.</li>
            </ul>

            <h3>Serverless & Containers</h3>
            <p><strong>AWS Lambda:</strong> Executa código sem provisionar servidores. Paga por milissegundo de execução.</p>
            <p><strong>Amazon ECS & EKS:</strong> Orquestradores de containers (Docker e Kubernetes).</p>
            <p><strong>AWS Fargate:</strong> Computação serverless para containers (roda o container sem você gerenciar a máquina por baixo).</p>
        `
    },
    {
        id: "security",
        title: "🔐 Segurança e IAM",
        html: `
            <h2>AWS IAM (Identity and Access Management)</h2>
            <p>Serviço global que controla o acesso aos serviços e recursos da AWS de forma segura.</p>
            <ul>
                <li><strong>Usuários (Users):</strong> Pessoas ou aplicações.</li>
                <li><strong>Grupos (Groups):</strong> Coleção de usuários (ex: Devs, Admins).</li>
                <li><strong>Funções (Roles):</strong> Identidades assumíveis que concedem permissões temporárias (ideal para serviços EC2 conversarem com S3).</li>
                <li><strong>Políticas (Policies):</strong> Documentos JSON que definem as permissões (Allow/Deny).</li>
            </ul>

            <h3>Modelo de Responsabilidade Compartilhada</h3>
            <p><strong>AWS:</strong> Segurança DA Nuvem (Física, hardware, instalações globais, datacenters).</p>
            <p><strong>Cliente:</strong> Segurança NA Nuvem (Senhas, dados, atualizações do sistema operacional da EC2, regras de firewall/Security Group).</p>
        `
    }
];