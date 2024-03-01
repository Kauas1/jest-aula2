
test("Verifica palavra dentro de um array", () => {
    const cestaDeFrutas = ['Pera','Uva', 'Maça', 'Manga', 'Melancia']
    
    expect(cestaDeFrutas).toContain('Uva')
})

test('Verifica se não há cargo de gerente entre os funcionários', () => {
    const cargos = ['Auxiliar', 'Assistente', 'Analista', 'Encarregado', 'Coordenador']

    expect(cargos).not.toContain('Gerente')
})

test("Verifica se há a palavra 'Senai'", () => {
    const frase = "O Senai é o melhor lugar do mundo para passar nossas manhãs!"
    const fraseMaiscula = frase.toUpperCase()
    expect(fraseMaiscula).toMatch(/SENAI/)
})

