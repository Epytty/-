function calculateZ(x, y) {
    try {
      if (x === 0) {
        throw new Error("Ошибка: деление на ноль");
      }
      if (y < 0) {
        throw new Error("Ошибка: корень из отрицательного числа");
      }
      const sqrtY = Math.sqrt(y);
      const result = (x ** 2 + 15 * y - sqrtY) / (6 * x ** 2);
      return result;
    } catch (error) {
      alert(error.message);
      return null;
    }
  }
  
  // пример использования функции
  const x = 1;
  const y = -5;
  const result = calculateZ(x, y);
  if (result!== null) {
    document.write(`Результат: ${result}`);
  }