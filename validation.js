const {Builder, By, Key} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

async function example() {

    // launch browser:
    let driver = await new Builder().forBrowser("chrome").build();

    // acessando página de login:
    await driver.get("https://github.com/login")

    // Login:
    await driver.findElement(By.id("login_field")).sendKeys("coloque o login aqui");
    await driver.findElement(By.id("password")).sendKeys("coloque a senha aqui", Key.RETURN);

    // Automatizando criação de repositório:
    await driver.get("https://github.com/new")
    await driver.findElement(By.id("repository_name")).sendKeys("GuilhermeNen"); 

    //repository description:
    await driver.findElement(By.id("repository_description")).sendKeys("Novo Funcionário UTECH!! Repositório especial criado para a vaga de estágio QA. #MeContrataUtech!!!"); 
    
    // criando readme.md
    await driver.findElement(By.id("repository_auto_init")).sendKeys(" ");

    //tornando público:
    await driver.findElement(By.id("repository_visibility_public")).sendKeys(Key.RETURN);

    await driver.get("https://github.com/GuilhermeNen")
    

    // Automatizando busca:
    await driver.get("https://github.com/")
    await driver.findElement(By.xpath("/html/body/div[1]/header/div[3]/div/div/form/label/input[1]")).sendKeys("GuilhermeMX", Key.RETURN);
    
    // Entrando no meu repositório da conta principal:
    await driver.findElement(By.xpath("/html/body/div[5]/main/div/div[3]/div/ul/li/div[2]/div[1]/div/a")).sendKeys(Key.RETURN);
 
}

example();