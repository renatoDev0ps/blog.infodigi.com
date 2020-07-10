---
title: Como Instalar o Docker no Ubuntu 18.04
description: Instalação do Docker no ubuntu 18.04 e alguns comandos básicos
date: 2020-07-10 01:14:54
thumbnail: assets/img/dockerubuntu.jpg
category: dev
background: "#637a91"
---
![Docker](/assets/img/dockerubuntu.jpg)

### Introdução

#### 1979

O primeiro registro sobre containers refere-se ao croot e surgiu em 1979 com o desenvolvimento do [Unix V7](https://en.wikipedia.org/wiki/Version_7_Unix).

#### 2000

Em 2000 surge o [Jalis - FreeBSD](https://en.wikipedia.org/wiki/Version_7_Unix) como um pequeno provedor de hospedagem, que conseguia fazer a separação de serviços mantendo a seguração e fácil administração.

#### 2001

No ano de 2001, surge o [Linux VServer](https://en.wikipedia.org/wiki/Linux-VServer) com caracteristicas identicas ao Jalis - FreeBSD, com capacidade de particionar sistemas de arquivos, memória e endereço de rede, sendo sendo implementado por patch no Kernel Linux.

#### 2004

2004 o [Solaris Containers](https://en.wikipedia.org/wiki/Solaris_Containers) consegue separar o limitar os recursos por zona e torna-se o primeiro Container Solaris público.

#### 2005

Usando um Kernel Linux corrigido para virtualização, o [Open VZ - Open Virtuzz](https://en.wikipedia.org/wiki/Virtuozzo_(company)), em 2005 consegue isolar, gerenciar e verificar os recursos de um container.

#### 2006

Lançado pela Google em 2006, o [Process Containers](<>) foi projetado para limitar, contabilizar e isolar o uso de recursos (CPU, memória, E / S de disco, rede) de uma coleção de processos e mais tarde remomeado como cgroups - Grupos de Controle e inserido no Kernel do Linux 2.6.24.

#### 2008

Em 2008 surge o [LXC - LinuX Containers](https://en.wikipedia.org/wiki/LXC) sendo, a primeira e mais completa implementação de containers do Linux, funcionando em um único Kernel sem a necessidade de correção.

#### 2011

A CloudFoundry iniciou o [Warden](https://en.wikipedia.org/wiki/Cloud_Foundry) em 2011, usando o LXC nos estágios iniciais e depois substituindo-o por sua própria implementação. Warden pode isolar ambientes em qualquer sistema operacional, sendo executado como um daemon e fornecendo uma API para gerenciamento de conteiners. Foi desenvolvido um modelo cliente-servidor para gerenciar uma coleção de conteiners em vários hosts, e Warden inclui um serviço para gerenciar cgroups, namespaces e o ciclo de vida do processo

#### 2013

> Quando o [Docker](https://en.wikipedia.org/wiki/Docker_(software)) surgiu em 2013, os conteiners explodiram em popularidade. Não é coincidência o crescimento do Docker e o uso de conteiners andarem de mãos dadas. Assim como Warden fez, o Docker também usou o LXC em seus estágios iniciais e depois substituiu esse gerenciador de conteiner por sua própria biblioteca, o libcontainer. Mas não há dúvidas de que o Docker se separou do pacote oferecendo um ecossistema inteiro para o gerenciamento de conteiners.

Agora que conhecemos um pouco da história dos containers e o surgimento do Docker, vamos colocar a "mão no código".

### Pré requisitos

Para seguir, é necessário:

* Servidor Ubuntu 18.04
* Conta no Docker Hub, se desejar criar suas imagens.

### Instalação do Docker

O pacote de instalação do Docker disponível no repositório do Ubuntu, pode não ser o mais recente. Para garantir a versão mais atual, vamos instalar o Docker a partir do repositório oficial.

Vamos atualizar os pacotes e repositórios do Ubuntu:

```
$ sudo apt update
```

Vamos instalar alguns pacotes de pré-requisitos, para utilizar pacotes via HTTPS:

```
$ sudo apt install apt-transport-https ca-certificates curl software-properties-common
```

Vamos inserir a chave GPG para o repositório do Docker:

```
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

Vamos adicionar o repositório do Docker às fontes APT:

```
$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"
```

Vamos atualizar o repositório que acabamos de inserir:

```
$ sudo apt update
```

Vamos verificar se o repositório está correto:

```
$ apt-cache policy docker-ce
```

output:

```
docker-ce:
  Installed: (none)
  Candidate: 18.03.1~ce~3-0~ubuntu
  Version table:
     18.03.1~ce~3-0~ubuntu 500
        500 https://download.docker.com/linux/ubuntu bionic/stable amd64 Packages
```

Observe que na saída do comando anterior o docker-ce não está instalado, mas é o cândidato para instalação.

Finalmente, vamos instalar o Docker:

```
$ sudo apt install docker-ce
```

### Configuração do Docker para rodar sem SUDO (opcional)

Por padrão precisamos rodar o Docker como usário root ou um usuário Docker, criado automáticamente no processo de instalação. Para isso vamos inserir o usuário padrão no grupo do Docker:

```
$ sudo usermod -aG docker ${USER}
```

Para aplicar a inserção do usuário ao Docker, faça o logout e logon no server, em seguida rode o camndo abaixo:

```
$ su - ${USER}
```
Vamos confirmar a inclusão do usuário logado no grupo do Docker:
```
$ id -nG
```
output:
```
sammy sudo docker
```
Caso queira adicionar um usuário que não estaja logado:
```
$ sudo usermod -aG docker user-name
```

### Docker - Comandos Básicos
#### Vamos conhecer os comandos básicos para utilização do Docker.
Use este comando para conecer as opções de comandos específicos:
```
$ docker --help
```
Estrutura básica de um comando Docker:
```
$ docker [option] [command] [arguments]
```
Comando para verificar informações de sistema sobre o Docker:
```
$ docker info
```

### Docker - imagens
#### Vamos conhecer sobre imagens Docker.
Os containers Docker são construidos a partir de uma image, que são compostas por sistemas de arquivos de camadas que ficam uma sobre as outras, servindo de base para construção de uma aplicação. Ela pode ser desde o base do CentOS como também um CentOS com Apache, PHP e MySQL.

Vamos baixar a nossa primeira imagem:
```
$ docker run hello-world
```
output:
```
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
9bb5a5d4561a: Pull complete
Digest: sha256:3e1764d0f546ceac4565547df2ac4907fe46f007ea229fd7ef2718514bcec35d
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.
...
```
Use o comando abaixo para encontrar uma imagem:
```
$ docker search ubutnu
```
Execute o seguinte comando para baixar a imagem encontrada:
```
$ docker pull ubuntu
```
output:
```
Using default tag: latest
latest: Pulling from library/ubuntu
6b98dfc16071: Pull complete
4001a1209541: Pull complete
6319fc68c576: Pull complete
b24603670dc3: Pull complete
97f170c87c6f: Pull complete
Digest: sha256:5f4bdc3467537cbbe563e80db2c3ec95d548a9145d64453b06939c4592d67b6d
Status: Downloaded newer image for ubuntu:latest
```
Podemos observar a construção de cada camada quando fazemos o pull da imagem pela primeira vez.

Use este comando para listar todas as imagens baixadas:
```
$ docker images
```

### Docker - Executando um Container
```
$ docker run -it ubuntu
```
O comando docker run, sobe um container baseado na imagem do ubuntu e as flags -i -t, entrega ao usuário o acesso a um shell interativo dentro do container.

### Docker - Gerenciamento de Containers
#### Agora vaos conhecer alguns comandos para gerenciar nosso containers ativos, inativos.

##### Comando "ps" e "ps -a":
```
$ docker ps
```
Lista todos os containers ativos.
```
$ docker ps -a
```
Lista todos os containers ativos e inativos.
```
$ docker ps -l
```
Lista somente o último container criado.
```
$ docker logs CONTAINER_ID
```
Exibe os logs do container
```
$ docker stop CONTAINER_ID
```
Para o container.
```
$ docker start CONTAINER_ID
```
Sobe o container parado.
```
$ docker rm CONTAINER_ID
```
Deleta o container parado.
```
$ docker rm -f CONTAINER_ID
```
A flag -f força a deleção de um container que está rodando.

### Conclusão
Neste artigo nós conhecemos um pouco da história do surgimento dos containers, aprendemos como instalá-lo em um OS ubuntu 18.04 e a gerenciar um container.

Agradeço a todos e bons estudos!
