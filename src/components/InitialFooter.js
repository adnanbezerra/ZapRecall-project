export default function InitialFooter({quantity, done}) {
    return (
        <div className="footer">
            <div className="text-content">{quantity}/8 CONCLUÍDAS </div>
            <div className="done">{done}</div>
        </div>
    )
}