import axios from 'axios';

export async function buscarCodigoCidadePorCep(cep) {
    const url = `https://brasilapi.com.br/api/cep/v2/${cep}`;
    const { data } = await axios.get(url);

    if (!data.city || !data.state) {
        throw new Error('Não foi possível localizar cidade/estado.');
    }

    const cidade = data.city;
    const estado = data.state;


    const cidadesUrl = `https://brasilapi.com.br/api/cptec/v1/cidade/${cidade}`;
    const resposta = await axios.get(cidadesUrl);

    const lista = resposta.data;

    const cidadeEncontrada = lista.find(c => c.estado === estado);

    if (!cidadeEncontrada) {
        throw new Error('Cidade não encontrada na base do clima.');
    }

    return {
        cidade: cidade,
        estado: estado,
        codigoCidade: cidadeEncontrada.id
    };
}

export async function buscarClimaPorCodigoCidade(codigoCidade) {
    const url = `https://brasilapi.com.br/api/cptec/v1/clima/previsao/${codigoCidade}`;
    const { data } = await axios.get(url);

    const hoje = data.clima[0];

    return {
        descricao: hoje.condicao_desc,
        temperatura_max: hoje.max,
        temperatura_min: hoje.min,
    };
}
