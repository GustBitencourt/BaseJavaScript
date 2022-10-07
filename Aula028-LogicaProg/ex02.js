// função que receba largura e altura de imagem e verifique se está no modo paisagem

const ehPaisagem = (largura, altura) => {
    return largura > altura ? `A imagem está no modo paisagem` : `A imagem não está no modo paisagem` 
}