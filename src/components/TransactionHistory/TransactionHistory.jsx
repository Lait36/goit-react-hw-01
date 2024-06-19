import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <div>
      <table className={css.container}>
        <thead className={css.head}>
          <tr>
            <th className={css.item}>Type</th>
            <th className={css.item}>Amount</th>
            <th className={css.item}>Currency</th>
          </tr>
        </thead>
        <tbody className={css.body}>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <td className={css.item}>{type}</td>
              <td className={css.item}>{amount}</td>
              <td className={css.item}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
