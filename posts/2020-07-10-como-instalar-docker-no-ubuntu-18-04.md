---
title: Como instalar Docker no Ubuntu 18.04
description: Esta artigo aborda a instalação e uso do Docker um sistema
  operacional ubuntu 18.04.
date: 2020-07-09 03:58:21
thumbnail: assets/img/dockerubuntu.jpg
category: dev
background: "#637a91"
---
\### Introdução



O primeiro registro sobre containers refere-se ao croot e surgiu em 1979 com o desenvolvimento do \[Unix V7](https://en.wikipedia.org/wiki/Version_7_Unix).



Em 2000 surge o \[Jalis - FreeBSD](https://en.wikipedia.org/wiki/Version_7_Unix) como um pequeno provedor de hospedagem, que conseguia fazer a separação de serviços mantendo a seguração e fácil administração.



No ano de 2001, surge o \[Linux VServer](https://en.wikipedia.org/wiki/Linux-VServer) com caracteristicas identicas ao Jalis - FreeBSD, com capacidade de particionar sistemas de arquivos, memória e endereço de rede, sendo sendo implementado por patch no Kernel Linux.



2004 o \[Solaris Containers](https://en.wikipedia.org/wiki/Solaris_Containers) consegue separar o limitar os recursos por zona

e torna-se o primeiro Container Solaris público.



Usando um Kernel Linux corrigido para virtualização, o \[Open VZ - Open Virtuzz](https://en.wikipedia.org/wiki/Virtuozzo_(company)), em 2005 consegue isolar, gerenciar e verificar os recursos de um container.



Lançado pela Google em 2006, o \[Process Containers]() foi projetado para limitar, contabilizar e isolar o uso de recursos (CPU, memória, E / S de disco, rede) de uma coleção de processos e mais tarde remomeado como cgroups - Grupos de Controle e inserido no Kernel do Linux 2.6.24.



Em 200 surge o \[LXC - LinuX Containers](https://en.wikipedia.org/wiki/LXC) sendo, a primeira e mais completa

implementação de containers do Linux, funcionando em um único Kernel sem a

necessidade de correção.



A CloudFoundry iniciou o \[Warden](https://en.wikipedia.org/wiki/Cloud_Foundry) em 2011, usando o LXC nos estágios iniciais e depois substituindo-o por sua própria implementação. Warden pode isolar ambientes em qualquer sistema operacional, sendo executado como um daemon e fornecendo uma API para gerenciamento de conteiners. Foi desenvolvido um modelo cliente-servidor para gerenciar uma coleção de conteiners em vários hosts, e Warden inclui um serviço para gerenciar cgroups, namespaces e o ciclo de vida do processo



\> Quando o \[Docker](https://en.wikipedia.org/wiki/Docker_(software)) surgiu em 2013, os conteiners explodiram em popularidade. Não é coincidência o crescimento do Docker e o uso de conteiners andarem de mãos dadas. Assim como Warden fez, o Docker também usou o LXC em seus estágios iniciais e depois substituiu esse gerenciador de conteiner por sua própria biblioteca, o libcontainer. Mas não há dúvidas de que o Docker se separou do pacote oferecendo um ecossistema inteiro para o gerenciamento de conteiners.



Agora que conhecemos um pouco da história dos containers e o surgimento do Docker, vamos colocar a "mão no código".



\### Pré requisitos



Para seguir, é necessário:

\- Servidor Ubuntu 18.04

\- Conta no Docker Hub, se desejar criar suas imagens.



\### Instalação do Docker



O pacote de instalação do Docker disponível no repositório do Ubuntu, pode não ser o mais recente. Para garantir a versão mais atual, vamos instalar o Docker a partir do repositório oficial.



Vamos atualizar os pacotes e repositórios do Ubuntu:

\`\``

$ sudo apt update

\`\``

Vamos instalar alguns pacotes de pré-requisitos, para utilizar pacotes via HTTPS:

\`\``

$ sudo apt install apt-transport-https ca-certificates curl software-properties-common

\`\``

Vamos inserir a chave GPG para o repositório do Docker:

\`\``

$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

\`\``

Vamos adicionar o repositório do Docker às fontes APT:

\`\``

$ sudo add-apt-repository "deb \[arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"

\`\``

Vamos atualizar o repositório que acabamos de inserir:

\`\``

sudo apt update

\`\``

Vamos verificar se o repositório está correto:

\`\``

$ apt-cache policy docker-ce

\`\``

Output:

\`\``

docker-ce:

Installed: (none)

Candidate: 18.03.1\~ce\~3-0~ubuntu

Version table:

18.03.1\~ce\~3-0~ubuntu 500

500 https://download.docker.com/linux/ubuntu bionic/stable amd64 Packages

\`\``

Observe que na saída do comando anterior o docker-ce não está instalado, mas é o cândidato para instalação.



Finalmente, vamos instalar o Docker:

\`\``

$ sudo apt install docker-ce

\`\``



\### Configuração do Docker para rodar sem SUDO (opcional)



Por padrão precisamos rodar o Docker como usário root ou um usuário Docker, criado automáticamente no processo de instalação. Para isso vamos inserir o usuário padrão no grupo do Docker:

\`\``

$ sudo usermod -aG docker ${USER}

\`\``

Para aplicar a inserção do usuário ao Docker, faça o logout e logon no server, em seguida rode o camndo abaixo:

\`\``

$ su - ${USER}

\`\``