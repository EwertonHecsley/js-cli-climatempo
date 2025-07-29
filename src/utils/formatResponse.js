import chalk from 'chalk';

export function formatResponse(cidade, uf, clima) {
    console.log(chalk.bold(`\n📍 Localização: ${cidade} - ${uf}`));
    console.log(chalk.yellow(`🌤️  Clima: ${clima.descricao}`));
    console.log(chalk.cyan(`🌡️  Temperatura máxima: ${clima.temperatura_max}°C`));
    console.log(chalk.cyan(`🌡️  Temperatura mínima: ${clima.temperatura_min}°C`));
}
