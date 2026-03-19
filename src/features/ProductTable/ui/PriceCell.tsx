import styles from './ProductTable.module.css';

function formatPrice(value: number): { integerPart: string; decimalPart: string } {
  const formatted = value.toLocaleString('ru-RU', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const commaIndex = formatted.lastIndexOf(',');
  if (commaIndex === -1) {
    return { integerPart: formatted, decimalPart: '' };
  }
  return {
    integerPart: formatted.slice(0, commaIndex),
    decimalPart: formatted.slice(commaIndex),
  };
}

export function PriceCell({ value }: { value: number }) {
  if (value == null || Number.isNaN(value)) return null;
  const { integerPart, decimalPart } = formatPrice(value);
  return (
    <span className={styles.productTable__price}>
      <span className={styles.productTable__priceInteger}>{integerPart}</span>
      {decimalPart && (
        <span className={styles.productTable__priceDecimal}>{decimalPart}</span>
      )}
    </span>
  );
}
