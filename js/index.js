// Crie um teste que verifique se uma função que recebe email está funcionando corretamente.

// - Utilize a expresão regular: /^[a-z0-9.]+@[a-z0-9]+\.([a-z]+)?$/i 

// Utilizar as expressões expect().toBe() e expect().toMatch()

test('Verifica se o email está funcionando corretamente', () => {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.([a-z]+)?$/i;
    const email = 'example@email.com';
  
    expect(email).toMatch(emailRegex);
  });


  function checkEmail(email) {
    const emailPattern = /^[a-z0-9.]+@[a-z0-9]+\.([a-z]+)?$/i;
    const isValid = emailPattern.test(email);
  
    if (isValid) {
      return `${email} é um email valido.`;
    } else {
      return `${email} é um email invalido.`;
    }
  }
  
  test('Verifica se o email é valido', () => {
    expect(checkEmail('test@example.com')).toBe('test@example.com é um email valido');
    expect(checkEmail('invalid email')).toBe('invalid email é um email invalido');
  });
