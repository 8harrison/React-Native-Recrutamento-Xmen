import CryptoJs from 'crypto-js';

const searchMonth = (indexMonth) => {
  const months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];
  return months[indexMonth];
};

const searchPhoto = async (character) => {
  if (character) {
    const apikey = '6947c1ce1af4b8a4ace241ed29bbe214';
    const privateKey = 'fc67d747d4929801c60f644176143b69b6d2ffe2';
    let timestamp = new Date().getTime();
    const now = new Date();
    const utcHour = now.getUTCHours() + 1;
    const utcDate = now.getUTCDate()
    const year = now.getFullYear();
    const month = searchMonth(now.getMonth());
    let md5hash = CryptoJs.MD5(timestamp + privateKey + apikey);
    const response = await fetch(
      `https://gateway.marvel.com:443/v1/public/characters?name=${character}&apikey=${apikey}&hash=${md5hash}&ts=${timestamp}`,
      {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          Date: `Mon, ${utcDate} ${month} ${year} ${utcHour}:55:33 GMT`,
        },
      }
    );
    if (!response.ok) {
      throw new Error('Erro ao buscar informações do personagem');
    }
    const data = await response.json();
    // Verifica se há resultados
    if (data.data.results.length > 0 && data.data.results[0].thumbnail) {
      const { path, extension } = data.data.results[0].thumbnail;
      const characterPictureUrl = `${path}.${extension}`;
      return characterPictureUrl;
      // URL da foto do personagem
    } else {
      alert('Mutante não encontrado ou sem imagem');
    }
  } else alert('É necessário preencher o nome do mutante!');
};

export { searchPhoto };
