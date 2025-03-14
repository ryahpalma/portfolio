# Cloudflare

O Cloudflare é uma plataforma de serviços web que protege e acelera a conexão entre o usuário e o servidor do site.
Possui plano gratuito e é fácil de utilizar.

## Utilizar o Nameserver da Cloudflare

1. Crie uma conta na Cloudflare e adicione seu domínio
2. Abra sua conta no registrador de domínios, utilize o WHOIS se não sabe qual é o registrador.
3. Aponte os dois nameservers que irão aparecer na sua conta da Cloudflare, possuem este padrão: x.ns.cloudflare.com
4. Aguarde até 48 horas para a atualização acontecer
5. Após isso você deverá configurar o DNS utilizando os registros (A) e (CNAME) caso queira usar subdomínios. 
6. No registro A você deve adicionar o nome como @ e onde solicita o IPV4 adicione o endereço IP do servidor.
7. Se deseja utilizar um subdomínio www, adicione um registro CNAME e coloque o www no nome e @ no alvo


:::tip Facilidade na troca de servidores
Com a Cloudflare, não é necessário trocar de nameserver toda vez que precisar mudar de servidor. 
Basta atualizar o endereço IPv4 no registro (A), e a propagação leva apenas 5 minutos. É como mágica! 🪄
:::

## Configurar o WAF

1. Abra o menu e vá na opção Segurança -> WAF -> Regras Personalizadas
2. Crie uma nova regra e nomeie ela como (Previnir SPAM ou ataques DDOS)
3. Em exibição da expressão, vá em Editar Expressão[!TIP]
4. Adicione a seguinte expressão: __(not ip.geoip.country in {"BR"} and not cf.client.bot) or (cf.threat_score gt 30)__ Isso irá solicitar um desafio para todos os visitantes que não são do Brasil, menos os bots conhecidos como (googlebot, facebot e etc...) e visitantes que possuem pontuação de ameaça maior que 30.
5. Escolha uma ação, como por exemplo um Desafio Gerenciado ou Bloquear
6. Coloque o pedido em primeiro lugar
7. Salve as configurações e realize testes com VPN, configure a seu gosto e necessidade.

:::tip Segurança em Formulários e proteção contra DDOS
Todos visitantes que não possuirem os critérios do WAF serão barrados.
:::

## Mais

Encontre a documentação oficial em [Configuração da Cloudflare](https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/)