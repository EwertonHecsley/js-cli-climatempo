#!/usr/bin/env node

import { program } from 'commander';
import dotenv from 'dotenv';
import ora from 'ora';
import { buscarCodigoCidadePorCep, buscarClimaPorCodigoCidade } from '../src/services/buscaClima.js';
import { formatResponse } from '../src/utils/formatResponse.js';

dotenv.config();

program
    .version('1.0.0')
    .description('🌦️ CLI do Clima - Consulte o tempo por CEP')
    .option('--cep <cep>', 'Informe o CEP para buscar o clima')
    .parse(process.argv);

const options = program.opts();

async function main() {
    if (!options.cep) {
        console.error('⚠️  Use: --cep <cep>');
        return;
    }

    const spinner = ora('🔍 Buscando clima...').start();

    try {
        const { cidade, estado, codigoCidade } = await buscarCodigoCidadePorCep(options.cep);
        const clima = await buscarClimaPorCodigoCidade(codigoCidade);

        spinner.succeed('✅ Clima encontrado!');
        formatResponse(cidade, estado, clima);
    } catch (err) {
        spinner.fail('❌ Erro ao buscar clima');
        console.error('Detalhes do erro:', err.message);
    }
}

main();
