# github-validation-selenium
Para rodar em ambiente Linux Ubunto, utilizando VSCODE como editor:  

    instruções para download nvm: https://github.com/nvm-sh/nvm
    instruções para download node: https://nodejs.org/en/

Preparando o ambiente:
    
    Para rodar este código, faça as seguintes instalações:
    - instalar NVM no Ubuntu - código de instalação: curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
    - Visual Studio Code
    - instalar node pelo nvm: nvm install 10.16.3
    - instalar gerenciador de pacotes (npm)

Para fazer a criação dos pacotes JSON:

    terminal: npm init

Instalando selenium-webdriver:
    
    terminal: npm install selenium webdriver
    terminal: npm install chromedriver --save-dev

Após isso, coloque as credenciais no local de login explicitado no código.

Para rodar a aplicação, basta utilizar o node: 

    terminal bash: node validation.js 