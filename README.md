  <h1>🌦️ CLI ClimaTempo</h1>

  <p><strong>Uma aplicação de linha de comando (CLI)</strong> feita com Node.js para consultar o clima atual de qualquer cidade brasileira a partir do CEP, utilizando a <a href="https://brasilapi.dev/">BrasilAPI</a> e a <a href="https://brasilapi.com.br/api/cptec/">API do CPTEC/INPE</a>.</p>

  <h2>📦 Instalação</h2>

  <p>Você pode instalar o CLI globalmente via <a href="https://www.npmjs.com/">npm</a>:</p>

  <pre><code>npm install -g cli-climatempo</code></pre>

  <div class="highlight">
    ⚠️ Requer Node.js v14 ou superior instalado na sua máquina.
  </div>

  <h2>🚀 Como usar</h2>

  <p>Após instalar, você pode rodar o comando diretamente no terminal:</p>

  <pre><code>clima --cep &lt;CEP&gt;</code></pre>

  <p><strong>Exemplo:</strong></p>
  <pre><code>clima --cep 58701406</code></pre>

  <h2>💡 O que esse CLI faz</h2>
  <ol>
    <li>Consulta o <strong>CEP</strong> informado via <code>/api/cep/v2/:cep</code></li>
    <li>Extrai a cidade e o estado</li>
    <li>Busca o <strong>código da cidade CPTEC</strong> via <code>/api/cptec/v1/cidade?nome=</code></li>
    <li>Consulta a previsão do tempo via <code>/api/cptec/v1/clima/previsao/:codigo</code></li>
    <li>Exibe os dados formatados no terminal com animações e cores</li>
  </ol>

  <h2>📁 Estrutura do projeto</h2>

  <pre><code>
cli-climatempo/
├── bin/
│   └── index.js          # Arquivo principal CLI
├── src/
│   ├── services/
│   │   └── buscaClima.js # Comunicação com a BrasilAPI
│   └── utils/
│       └── formatResponse.js # Exibição formatada no terminal
├── package.json
└── README.md
  </code></pre>

  <h2>📸 Demonstração</h2>

  <pre><code>
🔍 Buscando clima...
✅ Clima encontrado!

📍 Localização: Patos - PB
🌤️  Clima: Céu claro
🌡️  Temperatura máxima: 32°C
💧 Umidade: --
🌬️  Vento: --
  </code></pre>

  <h2>🔧 Tecnologias utilizadas</h2>

  <ul>
    <li><a href="https://nodejs.org/">Node.js</a></li>
    <li><a href="https://www.npmjs.com/package/commander">Commander</a></li>
    <li><a href="https://www.npmjs.com/package/ora">Ora</a></li>
    <li><a href="https://www.npmjs.com/package/chalk">Chalk</a></li>
    <li><a href="https://www.npmjs.com/package/axios">Axios</a></li>
    <li><a href="https://www.npmjs.com/package/dotenv">dotenv</a></li>
  </ul>

  <h2>📝 Licença</h2>
  <p>Este projeto está licenciado sob a licença <strong>MIT</strong>.</p>

  <h2>🙋‍♂️ Autor</h2>
  <p>Desenvolvido com 💻 por <strong>Ewerton Hecsley</strong></p>

  <ul>
    <li><a href="https://github.com/Ewerton" target="_blank">GitHub: github.com/Ewerton</a></li>
    <li><a href="https://www.linkedin.com/in/ewerton-hecsley-8a613992" target="_blank">LinkedIn: ewerton-hecsley</a></li>
  </ul>

</body>
</html>
